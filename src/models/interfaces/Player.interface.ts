import {ChangeEvent} from "react";
import {SelectChangeEvent} from "@mui/material";

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
    enhancementLevel: number;
}


export interface PlayerCardProps {
    player: Player;
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
    enhancementLevel: number;
}

export interface PlayersCardSliderProps {
    players: PlayerCardData[];
    onPlayerClick: (number: number) => void;
}

export interface PlayerFilters {
    position: string;
    nationality: string;
    name: string;
}

export interface HeldPlayer {
    id: string;
    number: number;
    enhancementLevel: number;
    overall_ability: number;
}

export interface PlayerEnhancementListProps {
    players: (HeldPlayer & Player)[];
    onPlayerClick: (player: HeldPlayer & Player) => void;
}

export interface TransferMarketTableHeaderProps {
    filters: {
        position: string;
        nationality: string;
        name: string;
    };
    handleFilterChange: (e: ChangeEvent<any>, filterType: string) => void;
    handlePositionChange: (e: SelectChangeEvent<string>) => void;
    handleNationalityChange: (e: SelectChangeEvent<string>) => void;
    handleSort: (key: string) => void;
    handleResetFilters: () => void;
    sortKey: string;
    sortOrder: string;
    positions: string[];
    nationalities: string[];
    players: Player[];
}