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
                <span className="leading-[24px]">Select</span>
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

function Frame145() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
            <ol className="list-decimal" start={2}>
              <li className="ms-[24px]">
                <span className="leading-[24px]">Select</span>
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

function Frame147() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
            <ol className="list-decimal" start={3}>
              <li className="ms-[24px]">
                <span className="leading-[24px]">Select</span>
              </li>
            </ol>
          </div>
          <Plus2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[0px] text-[16px] text-black w-full">
        <p className="mb-[16px]">Perfect, thank you 🙌 You’re doing great.</p>
        <p className="font-['Inter:Bold',_sans-serif] font-bold mb-[16px]">{`Step 2 — Company activity & name`}</p>
        <p>Confirm up to 3 business activities</p>
      </div>
      <Frame146 />
      <Frame145 />
      <Frame147 />
    </div>
  );
}