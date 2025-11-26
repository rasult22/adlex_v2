import { useNavigate } from 'react-router-dom';
import welcomeSvgPaths from '../imports/svg-pznj1xjpkc';

function WelcomeLogo() {
  return (
    <div className="flex gap-2.5 h-8 items-center justify-center w-[126px]">
      <div className="w-8 h-8">
        <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
          <path d={welcomeSvgPaths.p2a153b00} fill="currentColor" className="text-primary" />
        </svg>
      </div>
      <div className="text-h4 text-foreground text-center whitespace-nowrap">
        AdlexAI
      </div>
    </div>
  );
}

function WelcomeContent() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <WelcomeLogo />
      <h2 className="text-center w-full">Welcome to Adlex.ai</h2>
      <p className="text-center text-muted-foreground w-full">
        Open your UAE company fully online — fast, secure, and guided by your personal AI assistant.
      </p>
    </div>
  );
}

function WelcomeMainContainer() {
  return (
    <div className="flex-1 flex flex-col gap-8 items-center justify-center px-4 py-0 w-full">
      <WelcomeContent />
    </div>
  );
}

function WelcomeActions({
  onWhatIsAdlex,
  onRegistration,
}: {
  onWhatIsAdlex: () => void;
  onRegistration: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <button onClick={onWhatIsAdlex} className="w-full bg-primary rounded-lg">
        <div className="flex items-center justify-center overflow-hidden w-full">
          <div className="flex items-center justify-center px-5 py-3 w-full">
            <span className="text-primary-foreground">What is Adlex?</span>
          </div>
        </div>
      </button>
      <button
        onClick={onRegistration}
        className="w-full bg-accent/10 rounded-lg border border-accent/20"
      >
        <div className="flex items-center justify-center overflow-hidden w-full">
          <div className="flex items-center justify-center px-5 py-3 w-full">
            <span className="text-primary">Registration</span>
          </div>
        </div>
      </button>
    </div>
  );
}

function WelcomeActionsContainer({
  onWhatIsAdlex,
  onRegistration,
}: {
  onWhatIsAdlex: () => void;
  onRegistration: () => void;
}) {
  return (
    <div className="flex flex-col gap-8 items-center pb-8 pt-0 px-4 w-full">
      <WelcomeActions onWhatIsAdlex={onWhatIsAdlex} onRegistration={onRegistration} />
    </div>
  );
}

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleWhatIsAdlex = () => {
    navigate('/onboarding');
  };

  const handleRegistration = () => {
    navigate('/registration');
  };

  return (
    <div className="bg-background flex flex-col items-center justify-between w-full h-screen py-8">
      <WelcomeMainContainer />
      <WelcomeActionsContainer
        onWhatIsAdlex={handleWhatIsAdlex}
        onRegistration={handleRegistration}
      />
    </div>
  );
}
