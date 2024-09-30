export interface Team {
    id: number;
    name: string;
    crest?: string;
}

export interface ScoresType {
    id: number;
    season: {
        id: number;
        startDate: string;
        endDate: string;
    };
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: Team;
    awayTeam: Team;
    score: {
        winner: string | null;
        duration: string;
        fullTime: {
            home: number | null;
            away: number | null;
        };
        halfTime: {
            home: number | null;
            away: number | null;
        };
        extraTime: {
            home: number | null;
            away: number | null;
        };
        penalties: {
            home: number | null;
            away: number | null;
        };
    };
    competition: {
        id: number;
        name: string;
        area: {
            id: number;
            name: string;
        };
    };
}


export interface TeamStanding {
    position: number;
    team: {
        id: number;
        name: string;
        crest: string;
    };
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
}

export interface StandingsListProps {
    eplStandings: TeamStanding[];
}


export interface MatchCardProps {
    match: ScoresType;
}

export interface StandingItemProps {
    team: TeamStanding;
}