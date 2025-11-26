# Selector Integration Guide

## Overview
Интеграция красивых селекторов (выбор гражданства и бизнес-активности) с backend API.

## Что было сделано

### 1. Обновлены типы Backend (✅)
**Файл**: [src/types/backend.ts](src/types/backend.ts)

Добавлен новый тип действия кнопки:
```typescript
export enum ButtonAction {
  MESSAGE = 'message',
  LINK = 'link',
  UPLOAD = 'upload',
  SELECT = 'select',  // ← Новый тип
  EXTERNAL_PAYMENT = 'external_payment',
  EXTERNAL_KYC = 'external_kyc',
  EXTERNAL_SIGNATURE = 'external_signature',
}
```

### 2. Создан компонент SelectorDisplay (✅)
**Файл**: [src/components/chat/SelectorDisplay.tsx](src/components/chat/SelectorDisplay.tsx)

Автоматически определяет какой селектор показать на основе `callback_data` или текста кнопки.

### 3. Обновлен MessageRenderer (✅)
**Файл**: [src/components/chat/MessageRenderer.tsx](src/components/chat/MessageRenderer.tsx)

- Добавлена поддержка отображения селекторов
- Кнопки с `action: "select"` показывают селекторы вместо обычных кнопок

### 4. Обновлен ChatInterface (✅)
**Файл**: [src/components/chat-interface.tsx](src/components/chat-interface.tsx)

- Добавлен обработчик `handleSelectorChoice`
- Выбранные значения автоматически отправляются в backend как текстовое сообщение

## Как использовать в Backend

### Пример 1: Выбор бизнес-активности

Backend должен отправить:
```json
{
  "text": "Please select your business activities",
  "keyboard": {
    "buttons": [{
      "text": "Select Business Activity",
      "action": "select",
      "callback_data": "business_activity"
    }]
  }
}
```

Или можно использовать текст кнопки:
```json
{
  "text": "Choose your business activities",
  "keyboard": {
    "buttons": [{
      "text": "Select Business Activity",
      "action": "select"
    }]
  }
}
```

### Пример 2: Выбор гражданства

```json
{
  "text": "Please select your citizenship",
  "keyboard": {
    "buttons": [{
      "text": "Select Citizenship",
      "action": "select",
      "callback_data": "citizenship"
    }]
  }
}
```

### Ключевые слова для автоматического определения

**Business Activity Selector** (массив строк):
- `business_activity`
- `activity`
- `business activity`

**Citizenship Selector** (строка):
- `citizenship`
- `nationality`
- `country`

## Что получает Backend после выбора

### После выбора гражданства:
```
"United States"
```

### После выбора бизнес-активностей:
```
"Software Development, Consulting, E-commerce"
```

Backend получит эти значения как обычное текстовое сообщение через endpoint `/chat`.

## Компоненты селекторов

### CitizenshipSelector
- **Файл**: [src/components/citizenship-selector.tsx](src/components/citizenship-selector.tsx)
- **Возвращает**: `string` (название страны)
- **UI**: Модальное окно с поиском по странам

### BusinessActivitySelector
- **Файл**: [src/components/business-activity-selector.tsx](src/components/business-activity-selector.tsx)
- **Возвращает**: `string[]` (массив выбранных активностей)
- **UI**: Выбор до 3 активностей с модальным окном поиска

## Тестирование

### TypeScript
```bash
pnpm type-check
```
✅ Без ошибок

### Build
```bash
pnpm build
```
✅ Успешно собрано

## Дополнительные возможности

### Добавление новых селекторов

1. Создайте новый компонент селектора
2. Добавьте его в [SelectorDisplay.tsx](src/components/chat/SelectorDisplay.tsx)
3. Добавьте ключевые слова для определения

Пример:
```typescript
// В SelectorDisplay.tsx
if (selectorType.includes('payment_method')) {
  return (
    <PaymentMethodSelector
      onSelect={handleSelect}
    />
  );
}
```

## Примечания

- Селекторы автоматически отключаются (`disabled`) когда идёт ожидание ответа от backend
- После выбора значение автоматически отправляется как сообщение
- UI селекторов соответствует дизайну из Figma
