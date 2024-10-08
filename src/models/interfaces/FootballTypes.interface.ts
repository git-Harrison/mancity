// FootballTypes.interface.ts

// 팀 정보를 나타내는 Team 인터페이스 정의
export interface Team {
    id: number;
    name: string;
    crest: string; // 통일된 팀 crest 필드 (API 응답에 맞춰서 정의)
}

// 경기 데이터를 나타내는 ScoresType 인터페이스 정의
export interface ScoresType {
    id: number;
    season: {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
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

// Standing 인터페이스 정의
export interface Standing {
    type: string;
    table: TeamStanding[];
}

// TeamStanding 인터페이스 정의
export interface TeamStanding {
    position: number;
    team: Team; // Team 인터페이스 사용
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

// StandingsListProps 인터페이스 정의
export interface StandingsListProps {
    eplStandings: TeamStanding[];
}

// MatchCardProps 인터페이스 정의
export interface MatchCardProps {
    match: ScoresType;
}

// StandingItemProps 인터페이스 정의
export interface StandingItemProps {
    team: TeamStanding;
}
