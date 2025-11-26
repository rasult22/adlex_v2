export default function ChatMassageIncome({ content }: { content?: string }) {
  // Function to parse and format text with line breaks and bold sections
  const formatMessage = (text: string) => {
    if (!text) return "👋 Welcome to Adlex.ai! I'll be your personal AI assistant to guide you through opening your UAE company fully online.";

    // Split by line breaks (\n, ||, or actual new lines)
    const lines = text.split(/\n|\|\|/);

    return lines.map((line, lineIndex) => {
      // Check if this line contains bold text
      if (line.includes('**')) {
        const boldParts = line.split('**');
        return (
          <span key={lineIndex} className="block text-[16px]!">
            {boldParts.map((boldPart, boldIndex) =>
              boldIndex % 2 === 1 ? (
                <strong key={boldIndex} className="font-bold!">{boldPart}</strong>
              ) : (
                boldPart
              )
            )}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        );
      }

      return (
        <span key={lineIndex} className="block text-[16px]!">
          {line}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col gap-3 items-start justify-center relative w-full" data-name="Chat massage income">
      <div className="relative shrink-0 w-full">
        <div className="text-foreground text-[16px]! leading-relaxed">
          {formatMessage(content || "")}
        </div>
      </div>
    </div>
  );
}