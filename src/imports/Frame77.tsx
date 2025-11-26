function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
            <ol className="list-decimal" start={1}>
              <li className="ms-[24px]">
                <span className="leading-[24px]">Type a name</span>
              </li>
            </ol>
          </div>
          <Plus />
        </div>
      </div>
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame149() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
            <ol className="list-decimal" start={2}>
              <li className="ms-[24px]">
                <span className="leading-[24px]">Type a name</span>
              </li>
            </ol>
          </div>
          <Plus1 />
        </div>
      </div>
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame148() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
            <ol className="list-decimal" start={3}>
              <li className="ms-[24px]">
                <span className="leading-[24px]">Type a name</span>
              </li>
            </ol>
          </div>
          <Plus2 />
        </div>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame146 />
      <Frame149 />
      <Frame148 />
    </div>
  );
}

export default function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black w-full">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] text-[16px]">Suggest 3 possible company names (in English)</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="mb-[16px]">
          📑 IFZA has specific rules for company names.
          <br aria-hidden="true" />
          You can suggest a trade name, and I’ll check if it complies with these rules.
        </p>
        <p>Provide company name based on the priority, 1st most preferable, 3rd least preferable</p>
      </div>
      <Frame156 />
    </div>
  );
}