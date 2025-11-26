import svgPaths from "./svg-kwjjhvy67g";

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-50 border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
            <div className="content-stretch flex gap-[10px] h-[32px] items-center justify-center relative shrink-0 w-[126px]">
              <div className="relative shrink-0 size-[32px]" data-name="Subtract">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p2a153b00} fill="var(--fill-0, #5D5FEF)" id="Subtract" />
                </svg>
              </div>
              <div className="font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap tracking-[-1px]">
                <p className="leading-[normal] whitespace-pre">AdlexAI</p>
              </div>
            </div>
            <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
              <div className="bg-[#7f56d9] relative rounded-[8px] shrink-0" data-name="_Button base">
                <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                    <p className="leading-[20px] whitespace-pre">Start now</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#7f56d9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center px-0 py-[12px] relative size-full" data-name="Header">
      <Header />
    </div>
  );
}