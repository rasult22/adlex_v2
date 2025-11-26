import svgPaths from "./svg-tml2fpu4tx";

function Paperclip() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="paperclip">
          <path d={svgPaths.p199d9de0} id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 bg-[#f2f4f7] grow h-[40px] min-h-px min-w-px relative rounded-[24px] shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-px h-[40px] items-center px-[16px] py-0 relative w-full">
          <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#667085] text-[16px] tracking-[-0.3px]">
            <p className="leading-[24px]">Type your question</p>
          </div>
          <Paperclip />
        </div>
      </div>
    </div>
  );
}

function ArrowsNarrowUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrows/Narrow Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrows/Narrow Up">
          <path clipRule="evenodd" d={svgPaths.p12d8b300} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] relative rounded-[1000px] shrink-0">
      <ArrowsNarrowUp />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

export default function Message() {
  return (
    <div className="relative rounded-tl-[20px] rounded-tr-[20px] size-full" data-name="Message">
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-end pb-[24px] pt-[16px] px-[12px] relative size-full">
          <Frame144 />
        </div>
      </div>
    </div>
  );
}