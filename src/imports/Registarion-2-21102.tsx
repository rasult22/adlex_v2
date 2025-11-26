import svgPaths from "./svg-80k7bb1k4n";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <ChevronLeft />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#667085] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Back</p>
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

function ButtonBase1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#667085] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Skip</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative shrink-0" data-name="Button">
      <ButtonBase1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] items-center relative shrink-0">
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

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[44px] relative rounded-[5.5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.688px] border-solid inset-0 pointer-events-none rounded-[5.5px] shadow-[0px_0.688px_1.375px_0px_rgba(16,24,40,0.05)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[5.5px] h-[44px] items-center p-[5.5px] relative w-full">
          <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d0d5dd] text-[33px] text-center tracking-[-0.66px]">
            <p className="leading-[41.25px]">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaInputFieldBase() {
  return (
    <div className="content-stretch flex flex-col gap-[6.875px] items-start relative rounded-[5.5px] shrink-0 w-[44px]" data-name="_Mega input field base">
      <Input />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex gap-[5.5px] items-start relative shrink-0" data-name="Input">
      {[...Array(4).keys()].map((_, i) => (
        <MegaInputFieldBase key={i} />
      ))}
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[4.125px] items-start relative shrink-0 w-full" data-name="Input with label">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Secure code</p>
      </div>
      <Input4 />
    </div>
  );
}

function VerificationCodeInputField() {
  return (
    <div className="content-stretch flex flex-col gap-[4.125px] items-start relative shrink-0" data-name="Verification code input field">
      <InputWithLabel />
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="basis-0 bg-[#e9d7fe] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Continue</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9d7fe] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <ButtonBase2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#101828] text-[24px] text-center" style={{ width: "min-content" }}>
        <p className="leading-[32px]">Secure code</p>
      </div>
      <VerificationCodeInputField />
      <Button2 />
    </div>
  );
}

export default function Registarion() {
  return (
    <div className="bg-white relative size-full" data-name="Registarion">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[16px] py-0 relative size-full">
          <Frame36 />
          <Frame38 />
          <Frame39 />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Resend after 00:59</p>
          </div>
        </div>
      </div>
    </div>
  );
}