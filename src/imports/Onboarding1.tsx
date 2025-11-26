function ButtonBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#667085] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Skip</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="basis-0 bg-[#bdb4fe] grow h-[8px] min-h-px min-w-px rounded-[12px] shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-[8px] min-h-px min-w-px rounded-[12px] shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-[8px] min-h-px min-w-px rounded-[12px] shrink-0" />
      <div className="basis-0 bg-[#d9d9d9] grow h-[8px] min-h-px min-w-px rounded-[12px] shrink-0" />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-end min-h-px min-w-px p-[16px] relative shrink-0 w-[360px]" data-name="Container">
      <Button />
      <Frame36 />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#101828] text-[24px] w-full">
        <p className="leading-[32px]">Remote Application</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[18px] w-full">
        <p className="leading-[28px]">Submit your application fully remotely. No travel, no queues, just a simple online process</p>
      </div>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="basis-0 bg-[#7f56d9] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f56d9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <ButtonBase1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[274px] items-center pb-[34px] pt-0 px-[16px] relative shrink-0 w-[360px]" data-name="Container">
      <Content />
    </div>
  );
}

export default function Onboarding1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start justify-end relative size-full" data-name="onboarding 1">
      <Container />
      <Container1 />
    </div>
  );
}