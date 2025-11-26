import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {
  CompanyType,
  RegistrationStep,
  ShareholderData,
  RegistrationData,
} from '@/types';

interface RegistrationStore extends RegistrationData {
  // Current state
  currentStep: RegistrationStep;
  isLoading: boolean;
  error: string | null;

  // Actions
  setCurrentStep: (step: RegistrationStep) => void;
  setCompanyType: (type: CompanyType) => void;
  setCompanyNames: (names: string[]) => void;
  addCompanyName: (name: string) => void;
  setShareholdersCount: (count: number) => void;
  setShareholders: (shareholders: ShareholderData[]) => void;
  addShareholder: (shareholder: ShareholderData) => void;
  updateShareholder: (index: number, data: Partial<ShareholderData>) => void;
  setTotalShares: (shares: number) => void;
  setVisaCount: (count: number) => void;
  setBusinessActivities: (activities: string[]) => void;
  addBusinessActivity: (activity: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: Omit<RegistrationStore, keyof ReturnType<typeof createActions>> = {
  currentStep: 'none',
  companyType: null,
  companyNames: [],
  shareholdersCount: 0,
  shareholders: [],
  totalShares: 0,
  visaCount: 0,
  businessActivities: [],
  isLoading: false,
  error: null,
};

const createActions = (set: any) => ({
  setCurrentStep: (step: RegistrationStep) =>
    set({ currentStep: step }),

  setCompanyType: (type: CompanyType) =>
    set({ companyType: type }),

  setCompanyNames: (names: string[]) =>
    set({ companyNames: names }),

  addCompanyName: (name: string) =>
    set((state: RegistrationStore) => ({
      companyNames: [...state.companyNames, name],
    })),

  setShareholdersCount: (count: number) =>
    set({ shareholdersCount: count }),

  setShareholders: (shareholders: ShareholderData[]) =>
    set({ shareholders }),

  addShareholder: (shareholder: ShareholderData) =>
    set((state: RegistrationStore) => ({
      shareholders: [...state.shareholders, shareholder],
    })),

  updateShareholder: (index: number, data: Partial<ShareholderData>) =>
    set((state: RegistrationStore) => ({
      shareholders: state.shareholders.map((s, i) =>
        i === index ? { ...s, ...data } : s
      ),
    })),

  setTotalShares: (shares: number) =>
    set({ totalShares: shares }),

  setVisaCount: (count: number) =>
    set({ visaCount: count }),

  setBusinessActivities: (activities: string[]) =>
    set({ businessActivities: activities }),

  addBusinessActivity: (activity: string) =>
    set((state: RegistrationStore) => ({
      businessActivities: [...state.businessActivities, activity],
    })),

  setLoading: (loading: boolean) =>
    set({ isLoading: loading }),

  setError: (error: string | null) =>
    set({ error }),

  reset: () => set(initialState),
});

export const useRegistrationStore = create<RegistrationStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        ...createActions(set),
      }),
      {
        name: 'registration-storage',
        // Only persist certain fields
        partialize: (state) => ({
          currentStep: state.currentStep,
          companyType: state.companyType,
          companyNames: state.companyNames,
          shareholdersCount: state.shareholdersCount,
          shareholders: state.shareholders,
          totalShares: state.totalShares,
          visaCount: state.visaCount,
          businessActivities: state.businessActivities,
        }),
      }
    ),
    { name: 'RegistrationStore' }
  )
);
