# ChatInterface Refactoring Guide

## Проблема: Слишком много useState

**До рефакторинга**: 24 useState хука в одном компоненте
```typescript
const [messages, setMessages] = useState<Message[]>([]);
const [inputValue, setInputValue] = useState('');
const [userFirstName, setUserFirstName] = useState('');
const [registrationStarted, setRegistrationStarted] = useState(false);
const [currentStep, setCurrentStep] = useState<...>('none');
const [companyType, setCompanyType] = useState<...>(null);
const [desiredCompanyNames, setDesiredCompanyNames] = useState<string[]>([]);
const [shareholdersCount, setShareholdersCount] = useState(0);
const [shareholdersData, setShareholdersData] = useState<ShareholderData[]>([]);
// ... и еще 15 useState!
```

## Решение: Zustand Store

**После рефакторинга**: Один хук с полным типизированным state
```typescript
import { useChatStore } from '@/stores/chatStore';

function ChatInterface() {
  // Подписка только на нужные части state
  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);
  const currentStep = useChatStore((state) => state.currentStep);
  const setCurrentStep = useChatStore((state) => state.setCurrentStep);

  // Или все сразу (не рекомендуется для performance)
  const store = useChatStore();
}
```

---

## Миграция useState → Zustand

### 1. Messages Management

**До:**
```typescript
const [messages, setMessages] = useState<Message[]>([]);

// Добавление сообщения
setMessages(prev => [...prev, {
  id: `msg-${Date.now()}`,
  content: 'Hello',
  isBot: true,
  timestamp: new Date(),
}]);
```

**После:**
```typescript
const addMessage = useChatStore((state) => state.addMessage);

// Добавление сообщения (id и timestamp автоматически)
addMessage({
  content: 'Hello',
  isBot: true,
});
```

### 2. Registration Step Management

**До:**
```typescript
const [currentStep, setCurrentStep] = useState<RegistrationStep>('none');

// Переход на следующий шаг
if (currentStep === 'company-type') {
  setCurrentStep('company-names');
} else if (currentStep === 'company-names') {
  setCurrentStep('shareholders-count');
}
// ... много условий
```

**После:**
```typescript
const currentStep = useChatStore((state) => state.currentStep);
const nextStep = useChatStore((state) => state.nextStep);

// Переход на следующий шаг (логика в store)
nextStep();

// Или установить конкретный шаг
setCurrentStep('payment');
```

### 3. Company Data Management

**До:**
```typescript
const [companyType, setCompanyType] = useState<CompanyType | null>(null);
const [companyNames, setCompanyNames] = useState<string[]>([]);
const [businessActivities, setBusinessActivities] = useState<string[]>([]);

// Использование
setCompanyType('freezone');
setCompanyNames(['Company A', 'Company B']);
setBusinessActivities(['Trading', 'Consulting']);
```

**После:**
```typescript
const { setCompanyType, setCompanyNames, setBusinessActivities } = useChatStore();

// Или с селектором для оптимизации
const companyData = useChatStore(selectCompanyData);
```

### 4. Shareholders Management

**До:**
```typescript
const [shareholdersCount, setShareholdersCount] = useState(0);
const [shareholdersData, setShareholdersData] = useState<ShareholderData[]>([]);
const [currentShareholderIndex, setCurrentShareholderIndex] = useState(0);
const [totalShares, setTotalShares] = useState(0);

// Обновление акционера
setShareholdersData(prev => {
  const newData = [...prev];
  newData[0] = { ...newData[0], shares: 100 };
  return newData;
});
```

**После:**
```typescript
const updateShareholderData = useChatStore((state) => state.updateShareholderData);

// Обновление акционера (проще и безопаснее)
updateShareholderData(0, { shares: 100 });
```

---

## Преимущества Zustand Store

### 1. ✅ Меньше Boilerplate
```typescript
// До: 2 строки на каждое состояние
const [value, setValue] = useState(initial);

// После: 1 хук для всего
const store = useChatStore();
```

### 2. ✅ TypeScript из Коробки
```typescript
// Полная типизация без усилий
const messages = useChatStore((state) => state.messages); // Message[]
const addMessage = useChatStore((state) => state.addMessage); // (message: Omit<Message, 'id' | 'timestamp'>) => void
```

### 3. ✅ DevTools Integration
```typescript
// Автоматический Redux DevTools в браузере
// Видно все actions и state changes
```

### 4. ✅ Performance Optimization
```typescript
// Подписка только на нужные части state
const messages = useChatStore((state) => state.messages);
// Re-render только когда messages изменяется

// Использование селекторов
const companyData = useChatStore(selectCompanyData);
// Re-render только когда companyType, companyNames или businessActivities изменяются
```

### 5. ✅ Проще Тестировать
```typescript
import { useChatStore } from '@/stores/chatStore';

// Получить state напрямую
const state = useChatStore.getState();

// Вызвать action
state.addMessage({ content: 'Test', isBot: false });

// Reset для тестов
state.reset();
```

---

## Пример Рефакторинга Компонента

### До (Сложно и Многословно)
```typescript
export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('none');
  const [companyType, setCompanyType] = useState<CompanyType | null>(null);
  const [shareholdersCount, setShareholdersCount] = useState(0);
  // ... еще 19 useState

  const handleSendMessage = () => {
    setMessages(prev => [...prev, {
      id: `msg-${Date.now()}`,
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }]);
    setInputValue('');
  };

  const handleCompanyTypeSelect = (type: CompanyType) => {
    setCompanyType(type);
    setCurrentStep('company-names');
    setMessages(prev => [...prev, {
      id: `msg-${Date.now()}`,
      content: `Selected: ${type}`,
      isBot: true,
      timestamp: new Date(),
    }]);
  };

  return (
    <div>
      {messages.map(msg => <Message key={msg.id} {...msg} />)}
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
```

### После (Чисто и Понятно)
```typescript
export function ChatInterface() {
  // State
  const messages = useChatStore((state) => state.messages);
  const inputValue = useChatStore((state) => state.inputValue);

  // Actions
  const addMessage = useChatStore((state) => state.addMessage);
  const setInputValue = useChatStore((state) => state.setInputValue);
  const setCompanyType = useChatStore((state) => state.setCompanyType);
  const setCurrentStep = useChatStore((state) => state.setCurrentStep);

  const handleSendMessage = () => {
    addMessage({ content: inputValue, isBot: false });
    setInputValue('');
  };

  const handleCompanyTypeSelect = (type: CompanyType) => {
    setCompanyType(type);
    setCurrentStep('company-names');
    addMessage({ content: `Selected: ${type}`, isBot: true });
  };

  return (
    <div>
      {messages.map(msg => <Message key={msg.id} {...msg} />)}
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
```

---

## Дальнейшая Оптимизация

### 1. Создать Custom Hooks
```typescript
// src/hooks/useChat.ts
export function useChat() {
  const addMessage = useChatStore((state) => state.addMessage);
  const messages = useChatStore((state) => state.messages);

  const sendMessage = (content: string, isBot: boolean = false) => {
    addMessage({ content, isBot });
  };

  return { messages, sendMessage };
}
```

### 2. Разделить на Под-Компоненты
```typescript
// components/chat/ChatMessages.tsx
function ChatMessages() {
  const messages = useChatStore((state) => state.messages);
  return messages.map(msg => <Message key={msg.id} {...msg} />);
}

// components/chat/ChatInput.tsx
function ChatInput() {
  const inputValue = useChatStore((state) => state.inputValue);
  const setInputValue = useChatStore((state) => state.setInputValue);
  const addMessage = useChatStore((state) => state.addMessage);

  // ...
}

// components/ChatInterface.tsx
function ChatInterface() {
  return (
    <div>
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
```

### 3. Добавить Middleware для Логирования
```typescript
// stores/chatStore.ts
import { devtools, persist } from 'zustand/middleware';

export const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set) => ({
        // ... state and actions
      }),
      {
        name: 'chat-storage', // localStorage key
        partialize: (state) => ({
          messages: state.messages,
          userFirstName: state.userFirstName,
        }),
      }
    ),
    { name: 'ChatStore' }
  )
);
```

---

## Следующие Шаги

1. ✅ Zustand store создан
2. ⏳ Обновить ChatInterface для использования store
3. ⏳ Разбить ChatInterface на под-компоненты
4. ⏳ Создать custom hooks для common patterns
5. ⏳ Добавить persist middleware (сохранение в localStorage)
6. ⏳ Написать тесты для store

---

## Ресурсы

- [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [TypeScript с Zustand](https://docs.pmnd.rs/zustand/guides/typescript)
- [Zustand DevTools](https://docs.pmnd.rs/zustand/integrations/persisting-store-data)
