import svgPaths from "./svg-4m4r7jkrt7";

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

export default function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[0px] text-[16px] text-black" style={{ width: "min-content" }}>
        <p className="mb-[16px]">Excellent, Myrza! ✅ Let’s keep going</p>
        <p className="font-['Inter:Bold',_sans-serif] font-bold mb-[16px]">{`Step 3 — Documents. `}</p>
        <p className="mb-[16px]">Please upload a clear scan of your passport.</p>
        <p>🔒 All documents are encrypted and processed only through IFZA-certified services</p>
      </div>
      <Badge />
    </div>
  );
}