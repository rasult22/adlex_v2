import svgPaths from "./svg-9sfx88w55s";

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p272bfa00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Search />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#667085] text-[16px]">
        <p className="leading-[24px]">Enter the country name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function InputFieldBase() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="_Input field base">
      <InputWithLabel />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input field">
      <InputFieldBase />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[30px]">Select your country of citizenship</p>
      </div>
      <InputField />
    </div>
  );
}

function Frame167() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[8px] relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">
        <p className="leading-[24px]">Kazakhstan</p>
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      {[...Array(12).keys()].map((_, i) => (
        <Frame167 key={i} />
      ))}
    </div>
  );
}

function Frame160() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame163 />
      <Frame179 />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="basis-0 bg-[#7f56d9] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[18px] py-[10px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Check</p>
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

function Frame162() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame160 />
      <Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[704px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[704px] items-center pb-[24px] pt-[12px] px-[16px] relative w-full">
          <div className="bg-[#d9d9d9] h-[5px] rounded-[16px] shrink-0 w-[48px]" />
          <Frame162 />
        </div>
      </div>
    </div>
  );
}

export default function SelectCitizenship() {
  return (
    <div className="bg-[rgba(0,0,0,0.48)] content-stretch flex flex-col items-center justify-end relative size-full" data-name="Select citizenship">
      <Frame5 />
    </div>
  );
}