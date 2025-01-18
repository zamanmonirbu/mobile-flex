import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import a dropdown icon

interface IdealBankSelectorProps {
  selectedBank: string;
  onBankSelect: (bankId: string) => void;
}



const idealBanks = [
  {
    id: "abn_amro",
    name: "ABN AMRO",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJmXXFtAnZlX8DEyYUffN8JWKrW7hhws2cg&s" //problem
  },
  {
    id: "asn_bank",
    name: "ASN Bank",
    logo: "https://www.ecobusiness.fund/fileadmin/_processed_/6/c/csm_2017_07_ASN_Bank_logo_ef9949a5c3.png"
  },
  {
    id: "bunq",
    name: "bunq",
    logo: "https://logowik.com/content/uploads/images/bunq6945.jpg"
  },
  {
    id: "handelsbanken",
    name: "Handelsbanken",
    logo: "https://play-lh.googleusercontent.com/T0jwta73h6MumYW2-BEcphE1Qeixg_fXiiWFzxNPpMDhM1RnTm-43ROWas9gtiRn-3U=w416-h235-rw" //problem
  },
  {
    id: "ing",
    name: "ING",
    logo: "https://images.squarespace-cdn.com/content/v1/595d69672e69cf27605f00ba/1530202993227-98E14DXKZKGWMWV3QQYZ/ing-logo.jpg"
  },
  {
    id: "knab",
    name: "Knab",
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c68aca9388855.560cd82cbf857.jpg" //problem
  },
  {
    id: "moneyou",
    name: "Moneyou",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8tND_WsIUCQBCrgUZcFq2v89knilOB53Z6pb31o0Sf08v-27dWExuhn0xEgxbhWtyzE&usqp=CAU" //problem
  }, 
  {
    id: "n26",
    name: "N26",
    logo: "https://images.ctfassets.net/q33z48p65a6w/42Hvr3OYJgxAEdzoB2quix/83aedba1d73629c9953b615197915ac6/N26_Newsroom___N26_Logo_Thumbnail.png"
  },
  {
    id: "nn",
    name: "Nationale-Nederlanden",
    logo: "https://betacareerevent.nl/wp-content/uploads/2023/03/logo-nn-social.png" //problem
  },
  {
    id: "rabobank",
    name: "Rabobank",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Rabobank_logo.svg"
  },
  {
    id: "regiobank",
    name: "RegioBank",
    logo: "https://play-lh.googleusercontent.com/PZgV2cnghoXncKtYszBxYDt-PVrC3HqRKw9IMyYDMGw8Mmb8rrqC3NRIIsQv8M4JOA=w240-h480-rw" //problem
  },
  {
    id: "revolut",
    name: "Revolut",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBa9dOyzRP2Xwyshrri4ogz0dQbaTN73E-w&s" //problem
  },
  {
    id: "sns_bank",
    name: "SNS Bank",
    logo: "https://careers.nsbank.com/media/client_16_s6_r0_v1597355118606_main.png" //problem
  },
  {
    id: "triodos_bank",
    name: "Triodos Bank",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkrkVyP9DZZMIym7g-M3er9Ab_agM_Mx7wA&s" //problem
  },
  {
    id: "van_lanschot",
    name: "Van Lanschot Kempen",
    logo: "https://www.banken.nl/profile/media/van-lanschot-kempen-spotlight-2022-09-01-141233637.png" //problem
  },
  {
    id: "yoursafe",
    name: "Yoursafe",
    logo: "https://www.yoursafe.com/images.v2/logo-yoursafe-small.png"
  }
];



export function IdealBankSelector({ selectedBank, onBankSelect }: IdealBankSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter banks based on the search term
  const filteredBanks = idealBanks.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a bank"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true); // Show dropdown when typing
          }}
          onFocus={() => setShowDropdown(true)} // Show dropdown when focused
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // Delay dropdown closing
          className="w-full p-3 border rounded-lg text-gray-700 bg-white focus:ring-emerald-500 focus:border-emerald-500"
        />
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />

        {/* Dropdown */}
        {showDropdown && (
          <div
            onMouseDown={(e) => e.preventDefault()} // Prevent dropdown from closing
            className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10 overflow-y-auto"
            style={{ maxHeight: "200px" }} // Set a fixed max height for scrolling
          >
            {(searchTerm ? filteredBanks : idealBanks).map((bank) => (
              <button
                key={bank.id}
                onClick={() => {
                  onBankSelect(bank.id);
                  setShowDropdown(false);
                  setSearchTerm(""); 
                  // console.log("Working click");
                }}
                className="flex items-center gap-4 w-full p-3 hover:bg-gray-100 focus:outline-none"
              >
                <img src={bank.logo} alt={bank.name} className="h-8 w-8" />
                <span className="text-sm text-gray-700">{bank.name}</span>
              </button>
            ))}
            {filteredBanks.length === 0 && searchTerm && (
              <div className="p-3 text-sm text-gray-500">No banks found</div>
            )}
          </div>
        )}
      </div>

      {/* Selected Bank */}
      {selectedBank && (
        <div className="mt-4 flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
          <img
            src={idealBanks.find((bank) => bank.id === selectedBank)?.logo}
            alt={selectedBank}
            className="h-10 w-10"
          />
          <span className="text-sm text-gray-900">
            {idealBanks.find((bank) => bank.id === selectedBank)?.name}
          </span>
        </div>
      )}
    </div>
  );
}
