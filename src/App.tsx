import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChatInterface } from './components/chat-interface';

// Import extracted pages
import WelcomePage from './pages/WelcomePage';
import CodeVerificationPage from './pages/CodeVerificationPage';
import RegistrationPage from './pages/RegistrationPage';
import OnboardingPage from './pages/OnboardingPage';

// TODO: Extract LandingPage
// Landing page will be extracted in next step

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/verify" element={<CodeVerificationPage />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
