export interface Player {
    number: number;
    name: string;
    position: string;
    nationality: string;
    overall_ability: number;
    dominant_foot?: string;
    height?: number;
    weight?: number;
    date_of_birth?: string;
    honors?: {
        [key: string]: string[] | { [subKey: string]: string[] } | undefined;
    };
    club_history?: {
        year: string;
        club: string;
        loan: boolean;
    }[];
    transfer_details?: {
        transfer_fee: number;
        currency: string;
    };
    transfer_date?: string;
    current_team?: string;
    previous_team?: string;
}


export interface PlayerCardProps {
    player: Player;
}

export interface TransferMarketTableProps {
    players: Player[];
    onPlayerClick: (player: Player) => void;
}

export interface TransferMarketDetailProps {
    player: Player | null;
}


export interface PlayerCardData {
    number: number;
    name: string;
    position: string;
    nationality: string;
    overall_ability: number;
    transfer_details?: {
        transfer_fee: number;
        currency: string;
    };
}

export interface PlayersCardSliderProps {
    players: PlayerCardData[];
    onPlayerClick: (number: number) => void;
}

