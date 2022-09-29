export type TCard = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: TValue;
  suit: TSuit;
};

export type TDeckState = {
  loading: boolean;
  error: string | null;
  cards: TCard[];
  drawnCards: TCard[];
  deck_id: string;
  remaining: number;
  success: boolean;
  snapType: string;
  snapSuitMatches: number;
  snapValueMatches: number;
};

export type TSuit = "HEARTS" | "DIAMONDS" | "CLUBS" | "SPADES";
export type TValue =
  | "ACE"
  | "KING"
  | "QUEEN"
  | "JACK"
  | "10"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2";
