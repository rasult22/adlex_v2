import svgPaths from "./svg-jynqrw219";

function Shield() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="shield">
          <path d={svgPaths.p8610900} id="Icon" stroke="var(--stroke-0, #12B76A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BadgeBase() {
  return (
    <div className="bg-[#ecfdf3] box-border content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[10px] py-[4px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <Shield />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#027a48] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Secure mode</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-start mix-blend-multiply relative shrink-0" data-name="Badge">
      <BadgeBase />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="basis-0 bg-[#7f56d9] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[18px] py-[10px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Pay</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f56d9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <ButtonBase />
    </div>
  );
}

export default function Frame158() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[0px] text-[16px] text-black" style={{ width: "min-content" }}>
        <p className="mb-[16px]">Nice! Documents received ✅</p>
        <p className="font-['Inter:Bold',_sans-serif] font-bold mb-[16px]">Step 4 — Payment</p>
        <p className="mb-[16px]">Now it’s time to pay the government and service fees.</p>
        <p className="font-['Inter:Bold',_sans-serif] font-bold mb-[16px]">Total cost for your application is $3,450 (government fees + service fee)</p>
        <p>💳 Payments are always made directly through IFZA’s certified payment gateway</p>
      </div>
      <Badge />
      <Button />
    </div>
  );
}