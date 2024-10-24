export interface FormationInterface {
    id: number;
    name: string;
    forwards: number;
    midfielders: number;
    defenders: number;
    goalkeeper: number;
}

export interface FormationSelectionProps {
    onSelectFormation: (formation: FormationInterface) => void;
}

export interface SquadMakerProps {
    formation: FormationInterface;
}
