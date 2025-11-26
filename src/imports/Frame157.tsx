function Frame79() {
  return (
    <div className="bg-[#ea4335] box-border content-stretch flex gap-[10px] items-center justify-center p-[12px] relative rounded-[16px] shrink-0 size-[52px]">
      <div className="font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[18px] whitespace-pre">PDF</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] grow items-center justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 tracking-[-0.3px]">
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-black text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Pasport scan. Alkha...pdf</p>
      </div>
      <div className="relative shrink-0 text-[#98a2b3] text-[14px] w-full">
        <p className="leading-[24px]">12.05.2025</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame79 />
      <Frame84 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#eaecf0] max-w-[280px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center max-w-inherit px-[14px] py-[12px] relative w-full">
          <Frame87 />
        </div>
      </div>
    </div>
  );
}

export default function Frame157() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative size-full">
      <Frame77 />
    </div>
  );
}