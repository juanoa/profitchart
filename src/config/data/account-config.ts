import {AccountType} from "../../domain/entities/account/AccountType";
import {AccountColor} from "../../domain/entities/account/AccountColor";

export const accountTypes: Array<AccountType> = [
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

export const accountColors: Array<AccountColor> = [
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