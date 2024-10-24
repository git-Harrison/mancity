import {useState} from 'react';

interface Formation {
    id: number;
    name: string;
    forwards: number;
    midfielders: number;
    defenders: number;
    goalkeeper: number;
}

const formationsTable = {
    '3 Back': [
        {id: 1, name: '3-4-3', forwards: 3, midfielders: 4, defenders: 3, goalkeeper: 1},
        {id: 2, name: '3-4-3(2)', forwards: 3, midfielders: 4, defenders: 3, goalkeeper: 1},
        {id: 3, name: '3-4-1-2', forwards: 2, midfielders: 4, defenders: 3, goalkeeper: 1},
        {id: 4, name: '3-2-3-2', forwards: 2, midfielders: 3, defenders: 3, goalkeeper: 1},
        {id: 5, name: '3-1-4-2', forwards: 2, midfielders: 4, defenders: 3, goalkeeper: 1}
    ],
    '4 Back': [
        {id: 6, name: '4-2-3-1', forwards: 1, midfielders: 5, defenders: 4, goalkeeper: 1},
        {id: 7, name: '4-4-2', forwards: 2, midfielders: 4, defenders: 4, goalkeeper: 1},
        {id: 8, name: '4-3-3', forwards: 3, midfielders: 3, defenders: 4, goalkeeper: 1},
        {id: 9, name: '4-4-1-1', forwards: 1, midfielders: 5, defenders: 4, goalkeeper: 1},
        {id: 10, name: '4-1-4-1', forwards: 1, midfielders: 5, defenders: 4, goalkeeper: 1}
    ],
    '5 Back': [
        {id: 11, name: '5-3-2', forwards: 2, midfielders: 3, defenders: 5, goalkeeper: 1},
        {id: 12, name: '5-4-1', forwards: 1, midfielders: 4, defenders: 5, goalkeeper: 1},
        {id: 13, name: '5-2-1-2', forwards: 2, midfielders: 3, defenders: 5, goalkeeper: 1},
        {id: 14, name: '5-2-2-1', forwards: 1, midfielders: 4, defenders: 5, goalkeeper: 1},
        {id: 15, name: '5-3-2(2)', forwards: 2, midfielders: 3, defenders: 5, goalkeeper: 1}
    ]
};

export const useFormationSelectionViewModel = () => {
    const [isTableVisible, setIsTableVisible] = useState(false);

    // 기본 포메이션을 4-4-2로 설정
    const defaultFormation = formationsTable['4 Back'].find(formation => formation.name === '4-4-2');
    const [selectedFormation, setSelectedFormation] = useState<Formation | null>(defaultFormation || null);

    // 포메이션 선택 및 테이블 표시 상태 관리
    const handleFormationClick = (formation: Formation, onSelectFormation: (formation: Formation) => void) => {
        setSelectedFormation(formation);
        onSelectFormation(formation);
        setIsTableVisible(false);
    };

    const toggleTableVisibility = () => {
        setIsTableVisible(!isTableVisible);
    };

    return {
        formationsTable,
        isTableVisible,
        selectedFormation,
        handleFormationClick,
        toggleTableVisibility,
    };
};