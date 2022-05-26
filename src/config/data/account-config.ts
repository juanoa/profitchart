import {AccountTypeUiDto} from "../../infrastructure/components/ui/dto/AccountTypeUiDto";
import {AccountColorUiDto} from "../../infrastructure/components/ui/dto/AccountColorUiDto";

export const accountTypes: Array<AccountTypeUiDto> = [
  {
    id: "savings",
    name: "Savings",
    emoji: "💰",
    color: '#626567'
  },
  {
    id: "investment",
    name: "Investment",
    emoji: "📈",
    color: '#909497'
  },
  {
    id: "other",
    name: "Other",
    emoji: "💶",
    color: '#BDC3C7'
  },
];

export const accountColors: Array<AccountColorUiDto> = [
  {
    hex: "#ff695d",
    name: "Red"
  },
  {
    hex: "#ffbe44",
    name: "Yellow"
  },
  {
    hex: "#08c15c",
    name: "Green"
  }
]