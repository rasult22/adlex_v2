export default function Frame180() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative size-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[0px] text-[16px] text-black w-full">
        <p className="mb-[16px]">🎉 Great news! Your KYC verification has been successfully completed.</p>
        <p className="mb-[16px]">{`You’re now ready to proceed with the next step of your company incorporation. `}</p>
        <p className="font-['Inter:Bold',_sans-serif] font-bold mb-[16px]">Step 6 — License issuance 📄</p>
        <p className="mb-[16px]">
          <span>
            Your Trade License and Certificate of Incorporation will be issued by IFZA.
            <br aria-hidden="true" />
            {`You’ll get digital copies in your personal account and email `}
          </span>
          <span className="font-['Inter:Bold',_sans-serif] font-bold not-italic">– maxholding007@gmail.co</span>m
        </p>
        <p>🔔 We’ll also notify you as soon as everything is ready.</p>
      </div>
    </div>
  );
}