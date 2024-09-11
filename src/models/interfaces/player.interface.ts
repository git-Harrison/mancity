export interface Player {
    number: number;
    name: string;
    position: string;
    nationality: string;
    dominant_foot?: string;
    height?: number;
    weight?: number;
    date_of_birth?: string;
    honors?: {
        [key: string]: string[];
    };
    club_history: {
        year: string;
        club: string;
        loan: boolean;
    }[];
}

export interface PlayerCardData {
    number: number;
    name: string;
    position: string;
    nationality: string;
}