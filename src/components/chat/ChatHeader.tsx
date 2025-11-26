import React from 'react';
import svgPaths from '../../imports/svg-r2niu2bn0c';

function MenuIcon() {
  return (
    <div className="w-6 h-6">
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p6a6600} fill="currentColor" className="text-foreground" />
      </svg>
    </div>
  );
}

function MessagePlusIcon() {
  return (
    <div className="w-6 h-6">
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p1b14c680} fill="currentColor" className="text-foreground" />
      </svg>
    </div>
  );
}

export const ChatHeader = React.memo(function ChatHeader() {
  return (
    <div className="w-full bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="p-2 -ml-2">
          <MenuIcon />
        </button>

        <button className="p-2 -mr-2">
          <MessagePlusIcon />
        </button>
      </div>
    </div>
  );
});
