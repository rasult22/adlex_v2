import React, { useState } from 'react';
import svgPaths from "../imports/svg-9sfx88w55s";

// List of all countries except North Korea
const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba",
  "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p272bfa00} id="Icon" stroke="var(--muted-foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

interface CitizenshipSelectorProps {
  shareholderName: string;
  onSelect: (country: string) => void;
}

interface CitizenshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: string) => void;
}

function CitizenshipModal({ isOpen, onClose, onSelect }: CitizenshipModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = COUNTRIES.filter(country =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country: string) => {
    onSelect(country);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-background w-full max-w-md rounded-t-[20px] max-h-[80vh] flex flex-col">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-muted rounded-full" />
        </div>
        
        {/* Header */}
        <div className="px-4 py-4">
          <h3 className="!text-[20px] !font-bold mb-3">Select your country of citizenship</h3>
          
          {/* Search Input */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 transform -translate-y-1/2">
              <Search />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter the country name"
              className="w-full pl-10 pr-4 py-2.5 bg-input-background border border-border rounded-lg !text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Countries List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-0.5">
            {filteredCountries.map((country) => (
              <button
                key={country}
                onClick={() => handleCountrySelect(country)}
                className="w-full text-left px-0 py-2 hover:bg-muted/50 rounded transition-colors"
              >
                <span className="!text-[16px] text-foreground">{country}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CitizenshipSelector({ shareholderName, onSelect }: CitizenshipSelectorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    setIsModalOpen(false);
    onSelect(country);
  };

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          {/* Message - use standard message style */}
          <div className="flex justify-start w-full">
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <p className="!text-[16px] text-foreground leading-relaxed">
                  Thanks! Please share the nationality of {shareholderName}
                </p>
                {selectedCountry && (
                  <p className="!text-[16px] !font-semibold text-foreground">
                    {selectedCountry}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Select Button - only show if no country selected */}
          {!selectedCountry && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-background border border-border rounded-[20px] px-4 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <span className="!text-[16px] !font-semibold text-foreground">1. Select</span>
              <Plus />
            </button>
          )}
        </div>
      </div>

      <CitizenshipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelect}
      />
    </div>
  );
}