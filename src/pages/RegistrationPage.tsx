import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registrationSvgPaths from '../imports/svg-6fx8a3ifhl';

function RegistrationHeader() {
  return (
    <div className="flex gap-2.5 h-8 items-center justify-center w-full">
      <div className="w-8 h-8">
        <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
          <path d={registrationSvgPaths.p2a153b00} fill="currentColor" className="text-primary" />
        </svg>
      </div>
      <div className="text-h4 text-foreground text-center whitespace-nowrap">AdlexAI</div>
    </div>
  );
}

function RegistrationForm({ onContinue }: { onContinue: () => void }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onContinue();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start w-full">
      <h2 className="text-center w-full !text-[32px]">Sign up</h2>
      <div className="flex flex-col gap-1.5 items-start w-full">
        <label className="text-label text-foreground">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-input-background border border-border rounded-lg px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          placeholder="Enter your email"
          required
        />
      </div>
      <button type="submit" className="w-full bg-primary rounded-lg">
        <div className="flex items-center justify-center overflow-hidden w-full">
          <div className="flex items-center justify-center px-5 py-3 w-full">
            <span className="text-primary-foreground">Continue</span>
          </div>
        </div>
      </button>
    </form>
  );
}

function RegistrationFooter({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div className="flex gap-2 items-center">
        <span className="text-base text-foreground">Already have an account?</span>
        <button onClick={onLogin} className="text-primary">
          Login
        </button>
      </div>
      <span className="text-base text-muted-foreground">OR</span>
      <button
        type="button"
        className="w-full bg-background border border-border rounded-lg"
        onClick={() => {
          // TODO: Implement Google OAuth
          console.log('Google sign in clicked');
        }}
      >
        <div className="flex items-center justify-center overflow-hidden w-full">
          <div className="flex items-center justify-center gap-3 px-4 py-2.5 w-full">
            <div className="w-6 h-6">
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_2_19268)">
                  <path d={registrationSvgPaths.p30572700} fill="#4285F4" />
                  <path d={registrationSvgPaths.p2d84f580} fill="#34A853" />
                  <path d={registrationSvgPaths.p1de97300} fill="#FBBC04" />
                  <path d={registrationSvgPaths.p1ebd4080} fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_2_19268">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-foreground">Sign in with Google</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function RegistrationPage() {
  const navigate = useNavigate();

  const handleContinueToCode = () => {
    navigate('/verify');
  };

  const handleLogin = () => {
    // TODO: Navigate to login page or trigger login modal
    navigate('/chat');
  };

  return (
    <div className="bg-background flex flex-col items-center w-full h-screen">
      <div className="flex flex-col gap-8 items-center px-4 py-8 w-full max-w-sm">
        <RegistrationHeader />
        <RegistrationForm onContinue={handleContinueToCode} />
        <RegistrationFooter onLogin={handleLogin} />
      </div>
    </div>
  );
}
