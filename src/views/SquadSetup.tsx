import React, {useState, useEffect} from 'react';
import FormationSelection from '../components/molecules/FormationSelection';
import SquadMaker from '../components/molecules/SquadMaker';
import {FormationInterface} from '../models/interfaces/Formation.interface';

// 기본 포메이션 설정 (4-4-2)
const defaultFormation: FormationInterface = {
    id: 7,
    name: '4-4-2',
    forwards: 2,
    midfielders: 4,
    defenders: 4,
    goalkeeper: 1
};

const SquadSetup: React.FC = () => {
    const [selectedFormation, setSelectedFormation] = useState<FormationInterface | null>(defaultFormation);

    const handleSelectFormation = (formation: FormationInterface) => {
        setSelectedFormation(formation);
    };

    // 페이지 로드 시 body의 overflow 속성을 수정하고, 페이지를 떠날 때 원래 상태로 복원
    useEffect(() => {
        // 기존의 body overflow 값을 저장
        const originalOverflow = document.body.style.overflow;

        // overflow: hidden 해제
        document.body.style.overflow = 'auto';

        // 컴포넌트가 언마운트될 때 원래 상태로 복원
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div className="contents-container">
            <div className="squad-maker-wrap">
                <FormationSelection onSelectFormation={handleSelectFormation}/>
                <div className="squad-setup-content">
                    {selectedFormation ? (
                        <SquadMaker formation={selectedFormation}/>
                    ) : (
                        <div className="no-formation-selected">
                            <p>포메이션을 선택하여 스쿼드를 설정하세요.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SquadSetup;