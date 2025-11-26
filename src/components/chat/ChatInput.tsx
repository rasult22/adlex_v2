import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onAttachmentClick?: () => void;
  disabled?: boolean;
}

export const ChatInput = React.memo(function ChatInput({
  onSendMessage,
  onAttachmentClick,
  disabled = false
}: ChatInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        onSendMessage(inputValue.trim());
        setInputValue('');
      }
    }
  };

  return (
    <div className="relative rounded-tl-[20px] rounded-tr-[20px] w-full bg-background">
      <div className="flex flex-col items-center justify-end relative w-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-end pb-[24px] pt-[16px] px-[12px] relative w-full">
          <form onSubmit={handleSubmit} className="content-stretch flex gap-[8px] items-end justify-center relative w-full">
            <div className="basis-0 bg-muted grow min-h-px min-w-px relative rounded-[24px] shrink-0">
              <div className="flex flex-row items-end relative size-full">
                <div className="box-border content-stretch flex gap-px items-end pl-[16px] pr-[8px] py-[8px] relative w-full">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your question"
                    rows={1}
                    disabled={disabled}
                    className="basis-0 grow min-h-[24px] max-h-[120px] min-w-px bg-transparent border-none outline-none text-base text-foreground placeholder:text-muted-foreground resize-none overflow-y-auto disabled:opacity-50 disabled:cursor-not-allowed field-sizing-content"
                    style={{ fieldSizing: 'content' } as React.CSSProperties}
                  />
                  <div className="box-border content-stretch flex gap-[10px] items-end p-[2px] relative shrink-0">
                    <button
                      type="button"
                      onClick={onAttachmentClick}
                      className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity"
                    >
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <path d="M17.8669 9.20832L10.2086 16.8666C9.27037 17.8049 7.99789 18.3319 6.67107 18.3319C5.34426 18.3319 4.07178 17.8049 3.13357 16.8666C2.19537 15.9284 1.66829 14.656 1.66829 13.3291C1.66829 12.0023 2.19537 10.7299 3.13357 9.79165L10.7919 2.13332C11.4174 1.50785 12.2657 1.15646 13.1502 1.15646C14.0348 1.15646 14.8831 1.50785 15.5086 2.13332C16.134 2.75879 16.4854 3.6071 16.4854 4.49165C16.4854 5.3762 16.134 6.22451 15.5086 6.84998L7.84191 14.5083C7.52917 14.8211 7.10501 14.9967 6.66274 14.9967C6.22047 14.9967 5.79631 14.8211 5.48357 14.5083C5.17084 14.1956 4.99515 13.7714 4.99515 13.3291C4.99515 12.8869 5.17084 12.4627 5.48357 12.15L12.5586 5.08332" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`transition-colors ${
                !inputValue.trim() || disabled
                  ? 'bg-muted cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 active:bg-primary/80'
              } box-border content-stretch flex flex-col gap-[10px] items-end p-[8px] relative rounded-full shrink-0`}
              disabled={!inputValue.trim() || disabled}
            >
              <div className={`relative w-6 h-6 ${!inputValue.trim() ? 'text-foreground' : 'text-primary-foreground'}`}>
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M11.2926 4.29289C11.683 3.90237 12.3162 3.90237 12.7067 4.29289L16.7063 8.29289C17.0968 8.68342 17.0968 9.31658 16.7063 9.70711C16.3158 10.0976 15.6827 10.0976 15.2922 9.70711L12.9995 7.41421V19C12.9995 19.5523 12.5518 20 11.9996 20C11.4474 20 10.9997 19.5523 10.9997 19V7.41421L8.70697 9.70711C8.31648 10.0976 7.68336 10.0976 7.29287 9.70711C6.90238 9.31658 6.90238 8.68342 7.29287 8.29289L11.2926 4.29289Z" fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
