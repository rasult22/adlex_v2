import svgPaths from "./svg-0v6931dpap";
import imgAvatar from "figma:asset/67da9fddd372b1b5b44ffef41eed6ceb810ddf8a.png";
import imgAvatar1 from "figma:asset/261d783da4147da7fea569d1940840845897657f.png";
import imgAvatar2 from "figma:asset/30d4a462ea7b6e1428ffcb7ed5d646ca522e5a23.png";
import imgAvatar3 from "figma:asset/4e18492d9e016d792d3dfe93dd80d52dd96046ee.png";
import imgAvatar4 from "figma:asset/0728c923a00edf130deb71506d0756fc0d57a8b8.png";
import imgAvatar5 from "figma:asset/d9ddce204792163ce745396135bdc5f320b012d7.png";
import imgAvatar6 from "figma:asset/3bbe168eab287460eef89ff5351e750f87e0634b.png";
import imgAvatar7 from "figma:asset/05be041b58b5e1fe37be4a6bb5a74f76d7c0f06d.png";
import imgAvatar8 from "figma:asset/264ae50c597aef89a0c4eff3aa6d5fa1503db174.png";
import imgAvatar9 from "figma:asset/d62f72d9c8052940bb7983e7caefb57013f80477.png";
import imgImage1 from "figma:asset/7eba31ffe88f70c7b44a4873f02e2ee7c6376b93.png";
import imgImage2 from "figma:asset/569b9744c9397ecbed02f1e6cb9980c3ddb12166.png";
import imgAvatar10 from "figma:asset/504bc691102d8a6217d1fc1f8e79a810b1842a0d.png";
import imgAvatar11 from "figma:asset/74c60f24857ed03c48e8a06aff8d4bced17c0656.png";
import imgAvatar12 from "figma:asset/f8b512035a2e42c8ec0c92cd29eb940180f4d6b5.png";
import imgAvatar13 from "figma:asset/2f1190870d753151f58657595136f67c584b5c8c.png";

function BadgeBase() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#6941c6] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">Looking to start a business in Dubai?</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge">
      <BadgeBase />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3f191380} id="Icon" stroke="var(--stroke-0, #9E77ED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#6941c6] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Try Adlex.ai</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function BadgeGroup() {
  return (
    <div className="bg-[#f9f5ff] box-border content-stretch flex gap-[8px] items-center mix-blend-multiply pl-[4px] pr-[10px] py-[4px] relative rounded-[16px] shrink-0" data-name="Badge group">
      <Badge />
      <Content />
    </div>
  );
}

function HeadingAndBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Heading and badge">
      <BadgeGroup />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#101828] text-[36px] text-center tracking-[-0.72px]" style={{ width: "min-content" }}>
        <p className="leading-[44px]">Zero Risk. Zero Fees. A Real Business</p>
      </div>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndBadge />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#667085] text-[18px] text-center w-full">
        <p className="leading-[28px]">Our promise is simple: we will never charge you a service fee for helping you set up your company in the UAE</p>
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="basis-0 bg-[#7f56d9] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[12px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Try for free</p>
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[16px] py-0 relative w-full">
          <Content1 />
          <div className="bg-[#ebedf0] h-[365px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center pb-0 pt-[168px] px-0 relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(118,118,128,0.12)] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar1}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar2}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar3}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar4}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar5}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar6}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar7}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar8}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="bg-center bg-cover bg-no-repeat mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar9}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar10() {
  return (
    <div className="bg-[#f9f5ff] mr-[-8px] relative rounded-[200px] shrink-0 size-[32px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[202px]" />
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-1/2 not-italic text-[#7f56d9] text-[14px] text-center translate-x-[-50%] w-[32px]" style={{ top: "calc(50% - 10px)" }}>
        <p className="leading-[20px]">+5</p>
      </div>
    </div>
  );
}

function Avatars() {
  return (
    <div className="box-border content-stretch flex items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="Avatars">
      <Avatar />
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
      <Avatar4 />
      <Avatar5 />
      <Avatar6 />
      <Avatar7 />
      <Avatar8 />
      <Avatar9 />
      <Avatar10 />
    </div>
  );
}

function AvatarGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Avatar group">
      <Avatars />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#101828] text-[18px] text-center" style={{ width: "min-content" }}>
        <p className="leading-[28px]">{`Trusted by 100+ companies & startups`}</p>
      </div>
      <AvatarGroup />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#667085] text-[14px] text-center text-nowrap">
        <p className="leading-none whitespace-pre">Official Partner</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat h-[32px] shrink-0 w-[115px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <Frame4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[16px] py-0 relative w-full">
          <Frame5 />
          <Frame3 />
          <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[158px]" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[64px] relative shrink-0 w-full" data-name="Section">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
        <g id="Container">
          <path clipRule="evenodd" d="M344 1H16V0H344V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function Divider() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="–––– Divider ––––">
      <Container2 />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <div className="relative shrink-0 text-[#6941c6] text-[14px] w-full">
        <p className="leading-[20px]">Features</p>
      </div>
      <div className="relative shrink-0 text-[#101828] text-[30px] w-full">
        <p className="leading-[38px]">Why pay more? Get a complete company setup with zero service fees</p>
      </div>
    </div>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[18px] w-full">
        <p className="leading-[28px]">{`We don't charge a cent for our services. You only pay for the official government and licensing fees`}</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="globe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_8826)" id="globe">
          <path d={svgPaths.pa3bf780} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_8826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-[#f4ebff] relative rounded-[28px] shrink-0 size-[40px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border-[#f9f5ff] border-[6px] border-solid inset-[-3px] pointer-events-none rounded-[31px]" />
      <Globe />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Remote Application Submission and Status Tracking</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[16px] w-full">
        <p className="leading-[24px]">Incorporate your company in Dubai entirely online. Submit your application remotely and track its progress in real time — no flights or extra expenses needed.</p>
      </div>
    </div>
  );
}

function FeatureText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon />
      <TextAndSupportingText />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p32ddfd00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-[#f4ebff] relative rounded-[28px] shrink-0 size-[40px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border-[#f9f5ff] border-[6px] border-solid inset-[-3px] pointer-events-none rounded-[31px]" />
      <Check />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Official IFZA Partner</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[16px] w-full">
        <p className="leading-[24px]">We work directly with the International Free Zone Authority (IFZA). This ensures full legal compliance, faster registration timelines, and increased trust from investors and banks.</p>
      </div>
    </div>
  );
}

function FeatureText1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon1 />
      <TextAndSupportingText1 />
    </div>
  );
}

function Zap() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="zap">
          <path d={svgPaths.p28e15280} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="bg-[#f4ebff] relative rounded-[28px] shrink-0 size-[40px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border-[#f9f5ff] border-[6px] border-solid inset-[-3px] pointer-events-none rounded-[31px]" />
      <Zap />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Personal AI Legal Assistant</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[16px] w-full">
        <p className="leading-[24px]">Get answers to your legal questions 24/7. The AI assistant explains complex processes in simple terms and guides you step by step through business registration.</p>
      </div>
    </div>
  );
}

function FeatureText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon2 />
      <TextAndSupportingText2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Content">
      <FeatureText />
      <FeatureText1 />
      <FeatureText2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center px-0 py-[64px] relative shrink-0 w-full" data-name="Features section">
      <Container3 />
      <Container4 />
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[140.833px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 40">
        <g id="Company logo">
          <g id="Logomark">
            <rect fill="var(--fill-0, #039855)" height="7.99999" id="Shape" width="7.99999" y="16" />
            <rect fill="var(--fill-0, #027A48)" height="7.99999" id="Shape_2" transform="rotate(180 24 24)" width="8" x="24" y="24" />
            <path d={svgPaths.pf80fe80} fill="var(--fill-0, #A6F4C5)" id="Shape_3" />
            <path d={svgPaths.p188d9c80} fill="var(--fill-0, #6CE9A6)" id="Shape_4" />
            <path d={svgPaths.p2c3042b0} fill="var(--fill-0, #32D583)" id="Shape_5" />
            <path d={svgPaths.p2d55fe00} fill="var(--fill-0, #12B76A)" id="Shape_6" />
          </g>
          <g id="Logotype">
            <path d={svgPaths.p3e8ae200} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p39b89600} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p105c8e00} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p305bee00} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p39776c80} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p171ff500} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p2d6c2940} fill="var(--fill-0, #101828)" />
            <path d={svgPaths.p20a59b80} fill="var(--fill-0, #101828)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <CompanyLogo />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#667085] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Member of the IFZA Free Zone</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] relative shrink-0 w-full">
      <div className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">I had long planned to enter the UAE market, but the complexity of bureaucracy and the need for physical presence always held me back...</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-[#667085] text-[18px] w-full">
        <p className="leading-[28px]">Through Adlex.ai, I was able to register a company in Dubai completely remotely. The service guided me step by step through the entire process — from choosing a business activity to obtaining a license. What I especially liked was that all documents are signed online, and payments go directly through the free zone, which builds trust.</p>
      </div>
    </div>
  );
}

function Avatar11() {
  return <div className="bg-[#a2a8cd] bg-[position:50%_50%,_0%_0%] bg-size-[cover,auto] rounded-[200px] shrink-0 size-[64px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar10}')` }} />;
}

function TextAndSupportingText3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Candice Wu</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[16px] w-full">
        <p className="leading-[24px]">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
}

function AvatarAndText() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <Avatar11 />
      <TextAndSupportingText3 />
    </div>
  );
}

function QuoteAndAttribution() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Quote and attribution">
      <Frame2 />
      <Frame1 />
      <AvatarAndText />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Content">
      <QuoteAndAttribution />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip px-0 py-[64px] relative shrink-0 w-full" data-name="Quote section">
      <Container5 />
    </div>
  );
}

function HeadingAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#101828] text-[30px] w-full">
        <p className="leading-[38px]">FAQ</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[18px] w-full">
        <p className="leading-[28px]">Everything you need to know about the product and billing.</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Can I sign up for a free trial?</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[16px] w-full">
        <p className="leading-[24px]">Absolutely! You can enjoy a free trial for 30 days. Additionally, we offer a complimentary 30-minute onboarding call tailored just for you to help you get started quickly.</p>
      </div>
    </div>
  );
}

function MinusCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path d={svgPaths.p173e230} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon wrap">
      <MinusCircle />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText4 />
      <IconWrap />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="_FAQ item">
      <Content6 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Is it possible to upgrade or downgrade my business plan after registration?</p>
      </div>
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus-circle">
          <path d={svgPaths.p2bb5ce00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon wrap">
      <PlusCircle />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText5 />
      <IconWrap1 />
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="_FAQ item">
      <div className="bg-[#eaecf0] h-px shrink-0 w-full" data-name="Divider" />
      <Content7 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">What are the terms for canceling my remote company registration?</p>
      </div>
    </div>
  );
}

function PlusCircle1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus-circle">
          <path d={svgPaths.p2bb5ce00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon wrap">
      <PlusCircle1 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText6 />
      <IconWrap2 />
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="_FAQ item">
      <div className="bg-[#eaecf0] h-px shrink-0 w-full" data-name="Divider" />
      <Content8 />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[18px] w-full">
        <p className="leading-[28px]">Can I include additional details on my invoices when using Adlex AI?</p>
      </div>
    </div>
  );
}

function PlusCircle2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus-circle">
          <path d={svgPaths.p2bb5ce00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon wrap">
      <PlusCircle2 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText7 />
      <IconWrap3 />
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="_FAQ item">
      <div className="bg-[#eaecf0] h-px shrink-0 w-full" data-name="Divider" />
      <Content9 />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">
        <p className="leading-[30px]">What are the steps to set up billing for a remote company through Adlex AI?</p>
      </div>
    </div>
  );
}

function PlusCircle3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus-circle">
          <path d={svgPaths.p2bb5ce00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon wrap">
      <PlusCircle3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText8 />
      <IconWrap4 />
    </div>
  );
}

function FaqItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="_FAQ item">
      <div className="bg-[#eaecf0] h-px shrink-0 w-full" data-name="Divider" />
      <Content10 />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">
        <p className="leading-[30px]">How can I update the email associated with my remote business account?</p>
      </div>
    </div>
  );
}

function PlusCircle4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus-circle">
          <path d={svgPaths.p2bb5ce00} id="Icon" stroke="var(--stroke-0, #7F56D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Icon wrap">
      <PlusCircle4 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText9 />
      <IconWrap5 />
    </div>
  );
}

function FaqItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="_FAQ item">
      <div className="bg-[#eaecf0] h-px shrink-0 w-full" data-name="Divider" />
      <Content11 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
      <FaqItem4 />
      <FaqItem5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function HeadingAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#101828] text-[30px] w-full">
        <p className="leading-[38px]">Want to give it a try?</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[18px] w-full">
        <p className="leading-[28px]">Start your journey today and see how simple company registration can be</p>
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
            <p className="leading-[24px] whitespace-pre">Get started</p>
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

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText3 />
      <Button1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Content13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-[48px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="absolute bg-[#abb677] bg-[position:50%_50%,_0%_0%] bg-size-[cover,auto] left-0 rounded-[200px] size-[48px] top-[8px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar11}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="absolute bg-[#d9b9bb] bg-[position:50%_50%,_0%_0%] bg-size-[cover,auto] left-[72px] rounded-[200px] size-[48px] top-[8px]" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar12}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function Avatar14() {
  return (
    <div className="absolute bg-[#c7b9da] bg-[position:50%_50%,_0%_0%] bg-size-[cover,auto] left-[32px] rounded-[200px] size-[56px] top-0" data-name="Avatar" style={{ backgroundImage: `url('${imgAvatar13}')` }}>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function AvatarGroup1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[120px]" data-name="Avatar group">
      <Avatar12 />
      <Avatar13 />
      <Avatar14 />
    </div>
  );
}

function HeadingAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#101828] text-[20px] w-full">
        <p className="leading-[30px]">Still have questions?</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#667085] text-[16px] w-full">
        <p className="leading-[24px]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      </div>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="bg-[#7f56d9] relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
          <p className="leading-[24px] whitespace-pre">Get in touch</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f56d9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonBase2 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <Button2 />
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-gray-50 relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[20px] py-[32px] relative w-full">
          <AvatarGroup1 />
          <HeadingAndSupportingText4 />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center px-0 py-[64px] relative shrink-0 w-full" data-name="FAQ section">
      <Container7 />
      <Container8 />
      <Container10 />
      <Content14 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] items-center justify-center relative shrink-0 w-[126px]">
      <div className="relative shrink-0 size-[32px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2a153b00} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <div className="font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white tracking-[-1px]">
        <p className="leading-[normal] whitespace-pre">AdlexAI</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[16px] py-0 relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#a5a6f6] text-[16px] text-center w-full">
        <p className="leading-[24px]">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#53389e] box-border content-stretch flex flex-col gap-[48px] items-center px-0 py-[48px] relative shrink-0 w-full" data-name="Footer">
      <Container12 />
      <Container13 />
    </div>
  );
}

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

function Container14() {
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
      <Container14 />
    </div>
  );
}

function Frame35() {
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

function ButtonBase3() {
  return (
    <div className="bg-[#7f56d9] relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
          <p className="leading-[20px] whitespace-pre">Start now</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f56d9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonBase3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[12px] relative w-full">
          <Frame35 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 top-0 w-[360px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-50 border-solid inset-0 pointer-events-none" />
      <StatusBar />
      <Container15 />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Landing">
      <Header />
      <Section />
      <Section1 />
      <Divider />
      <FeaturesSection />
      <QuoteSection />
      <Divider />
      <FaqSection />
      <Divider />
      <Footer />
    </div>
  );
}