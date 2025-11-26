# Backend Integration Guide

## Обзор

Frontend полностью интегрирован с backend API через chat-based интерфейс. Вся логика разговора управляется сервером.

## Изменения в архитектуре

### До интеграции
- 779 строк хардкода в `chat-interface.tsx`
- Локальное управление состоянием через 24+ useState hooks
- Нет реального взаимодействия с backend

### После интеграции
- 180 строк в `chat-interface.tsx` (↓ 77%)
- Backend управляет conversation flow через `AgentResponse`
- Полная интеграция с API эндпоинтами

## Новые сервисы

### 1. Session Service (`src/services/session.service.ts`)
Управление пользовательскими сессиями:

```typescript
import sessionService from '@/services/session.service';

// Создать или восстановить сессию
const { session_id, message } = await sessionService.bootstrap();

// Получить состояние сессии
const state = await sessionService.getSessionState(sessionId);

// Очистить сессию
await sessionService.clearSession(sessionId);
```

**API эндпоинты:**
- `GET /api/chat/bootstrap?session_id={optional}` - создание/восстановление сессии
- `GET /api/chat/session/{session_id}/state` - получить состояние
- `POST /api/chat/clear/{session_id}` - очистить сессию

### 2. Chat Service (`src/services/chat.service.ts`)
Отправка сообщений в chat:

```typescript
import chatService from '@/services/chat.service';

// Отправить сообщение
const response = await chatService.sendMessage(sessionId, "Hello");
console.log(response.response.text); // Ответ AI
console.log(response.response.keyboard); // Кнопки для пользователя

// Валидация названия компании
const result = await chatService.validateCompanyName(
  "My Company LLC",
  "Freezone Company"
);
```

**API эндпоинты:**
- `POST /api/chat/message` - отправить сообщение
- `POST /api/chat/company/name/validation` - валидация названия

### 3. Document Service (`src/services/document.service.ts`)
Загрузка документов:

```typescript
import documentService from '@/services/document.service';

// Загрузить паспорт
const file = event.target.files[0];
const response = await documentService.uploadPassport(sessionId, file);

// Получить список документов
const { documents, total } = await documentService.listPassports(sessionId);

// Удалить документ
await documentService.deletePassport(sessionId, documentId);
```

**API эндпоинты:**
- `POST /api/documents/passport/upload?session_id={id}` - загрузка
- `GET /api/documents/passport/list/{sessionId}` - список документов
- `DELETE /api/documents/passport/{sessionId}/{documentId}` - удаление

## Типы Backend API

Все типы определены в `src/types/backend.ts`:

### AgentResponse
```typescript
interface AgentResponse {
  text: string;              // Текст сообщения от AI
  keyboard?: Keyboard;       // Опциональные кнопки
}

interface Keyboard {
  buttons: Button[];
}

interface Button {
  text: string;              // Текст кнопки
  action: ButtonAction;      // Тип действия
  link?: string;             // URL для link/external_* actions
  callback_data?: string;    // Дополнительные данные
}
```

### ButtonAction
```typescript
enum ButtonAction {
  MESSAGE = 'message',                    // Отправить текст как сообщение
  LINK = 'link',                          // Открыть ссылку
  UPLOAD = 'upload',                      // Загрузить файл
  EXTERNAL_PAYMENT = 'external_payment',  // Открыть платежную систему
  EXTERNAL_KYC = 'external_kyc',          // Открыть KYC верификацию
  EXTERNAL_SIGNATURE = 'external_signature' // Открыть подписание документов
}
```

### ConversationStatus
Backend управляет 23 состояниями разговора:

```typescript
enum ConversationStatus {
  INITIAL_GREETING,
  NAME_COLLECTED,
  PROCESS_STARTED,
  REGISTRATION_FLOW,
  COMPANY_TYPE_SELECTION,
  // ... и т.д.
  REGISTRATION_COMPLETE,
  UNKNOWN
}
```

## Обновленный Chat Store

`src/stores/chatStore.ts` значительно упрощен:

```typescript
// До: 24+ полей локального состояния
// После: 7 основных полей

interface ChatState {
  // Session
  sessionId: string | null;
  conversationStatus: ConversationStatus | null;

  // Messages
  messages: Message[];
  isWaitingForResponse: boolean;

  // UI
  inputValue: string;
  isBootstrapping: boolean;
  lastError: string | null;
}
```

## Использование useChat Hook

```typescript
import { useChat } from '@/hooks/useChat';

function MyComponent() {
  const {
    messages,              // История сообщений
    sendMessage,           // Отправить сообщение
    isWaitingForResponse,  // Ожидание ответа
    isBootstrapping,       // Инициализация сессии
    lastError,             // Последняя ошибка
    clearConversation,     // Очистить разговор
  } = useChat();

  // Отправить сообщение
  await sendMessage("My message");

  // Очистить и начать заново
  await clearConversation();
}
```

## Компоненты

### MessageRenderer
Универсальный рендерер сообщений с поддержкой `AgentResponse`:

```typescript
import { MessageRenderer } from '@/components/chat/MessageRenderer';

<MessageRenderer
  message={message}
  onButtonClick={handleButtonClick}
  disabled={isWaitingForResponse}
/>
```

### ButtonKeyboard
Рендерит кнопки от backend:

```typescript
import { ButtonKeyboard } from '@/components/chat/ButtonKeyboard';

<ButtonKeyboard
  buttons={agentResponse.keyboard.buttons}
  onButtonClick={handleButtonClick}
  disabled={isWaitingForResponse}
/>
```

## Обработка кнопок

В `chat-interface.tsx`:

```typescript
const handleButtonClick = async (button: Button) => {
  switch (button.action) {
    case 'message':
      // Отправить текст кнопки как сообщение
      await sendMessage(button.text);
      break;

    case 'link':
      // Открыть ссылку в новой вкладке
      window.open(button.link, '_blank');
      break;

    case 'upload':
      // Запустить file input
      document.getElementById('file-upload').click();
      break;

    case 'external_payment':
    case 'external_kyc':
    case 'external_signature':
      // Открыть внешний процесс
      window.open(button.link, '_blank');
      // TODO: Добавить polling для проверки статуса
      break;
  }
};
```

## Environment Variables

Обновите `.env`:

```bash
# Backend API
VITE_API_URL=http://localhost:8000/api
VITE_API_TIMEOUT=30000

# Session polling
VITE_ENABLE_SESSION_POLLING=true
VITE_SESSION_POLL_INTERVAL=5000

# File upload
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=.pdf,.jpg,.jpeg,.png

# Feature flags
VITE_USE_BACKEND_API=true
```

## Запуск

1. Установите зависимости:
```bash
pnpm install
```

2. Создайте `.env` из примера:
```bash
cp .env.example .env
```

3. Убедитесь, что backend запущен на `http://localhost:8000`

4. Запустите frontend:
```bash
pnpm dev
```

## Тестирование

### Проверка type checking:
```bash
pnpm type-check
```

### Сборка production:
```bash
pnpm build
```

### Запуск тестов:
```bash
pnpm test
```

## Известные ограничения

1. **Session persistence**: Сессии сохраняются в localStorage, истекают через 24 часа
2. **External processes**: Нет автоматического polling статуса (TODO)
3. **Offline mode**: Только read-only режим без backend
4. **File upload**: Максимум 5MB, форматы: PDF, JPG, PNG

## Миграция со старого кода

Старые файлы сохранены с суффиксом `.old`:
- `chat-interface.old.tsx` - старый ChatInterface (779 строк)
- `chatStore.old.ts` - старый store
- `useChat.old.ts` - старый hook

Удаленные файлы:
- `auth.service.ts` - использовал несуществующие эндпоинты
- `registration.service.ts` - заменен на chat.service.ts
- `useRegistrationFlow.ts` - логика теперь на backend
- `useShareholders.ts` - логика теперь на backend

## Следующие шаги

1. ✅ Базовая интеграция с backend API
2. ✅ Session management
3. ✅ Document upload
4. ✅ Button keyboard support
5. ⏳ External process polling
6. ⏳ Unit тесты
7. ⏳ E2E тесты
8. ⏳ Error recovery механизмы
9. ⏳ WebSocket для real-time updates

## Troubleshooting

### Ошибка "No active session"
Решение: Очистите localStorage и перезагрузите страницу

### Ошибка "Network error"
Проверьте:
1. Backend запущен на правильном порту
2. CORS настроен на backend
3. `VITE_API_URL` в `.env` правильный

### Файлы не загружаются
Проверьте:
1. Размер файла < 5MB
2. Формат файла разрешен (.pdf, .jpg, .png)
3. Session ID валиден

## Support

Вопросы и issues: [GitHub Repository](https://github.com/your-repo)
