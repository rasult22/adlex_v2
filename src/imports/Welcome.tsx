import svgPaths from "./svg-pznj1xjpkc";

function ScreenCornersTopCorners() {
  return (
    <div className="absolute h-[18px] left-0 right-0 top-0" data-name="Screen Corners / Top Corners">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 18">
        <g id="Screen Corners / Top Corners"></g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[17.17px] top-[18px]" data-name="Battery">
      <div className="absolute h-[11.333px] opacity-[0.35] right-[19.5px] rounded-[3px] top-[18px] w-[22px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <div className="absolute h-[4px] right-[17.17px] top-[21.67px] w-[1.328px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black h-[7.333px] right-[21.5px] rounded-[1.5px] top-[20px] w-[18px]" data-name="Capacity" />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[88px]" data-name="Right">
      <div className="absolute inset-[37.5%_53.34%_39.58%_29.24%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p18783800} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[37.5%_77.39%_40.28%_4.54%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p365a00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <ScreenCornersTopCorners />
      <Right />
      <div className="absolute font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] left-[50px] not-italic text-[15px] text-black text-center tracking-[-0.3px] translate-x-[-50%] w-[54px]" style={{ top: "calc(50% - 9px)" }}>
        <p className="leading-[normal]">10:12</p>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[360px]" data-name="Status Bar">
      <Container />
    </div>
  );
}

function Frame34() {
  return (
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
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Heading and supporting text">
      <Frame34 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#101828] text-[30px] text-center" style={{ width: "min-content" }}>
        <p className="leading-[38px]">Welcome to Adlex.ai</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#667085] text-[18px] text-center" style={{ width: "min-content" }}>
        <p className="leading-[28px]">Open your UAE company fully online — fast, secure, and guided by your personal AI assistant.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow items-center justify-center min-h-px min-w-px px-[16px] py-0 relative shrink-0 w-[360px]" data-name="Container">
      <HeadingAndSupportingText />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="basis-0 bg-[#7f56d9] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">What is Adlex?</p>
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

function ButtonBase1() {
  return (
    <div className="basis-0 bg-[#f9f5ff] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#6941c6] text-[16px] text-nowrap">
            <p className="leading-[24px] whitespace-pre">Registration</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f9f5ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
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

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-center pb-[34px] pt-0 px-[16px] relative shrink-0 w-[360px]" data-name="Container">
      <Actions />
    </div>
  );
}

export default function Welcome() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-between relative size-full" data-name="Welcome">
      <StatusBar />
      <Container1 />
      <Container2 />
    </div>
  );
}