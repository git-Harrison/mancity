import React from 'react';
import {PlayerCardProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const TransferPlayerInfo: React.FC<PlayerCardProps> = ({player}) => {
    // 로컬스토리지에서 heldPlayers 값 가져오기
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);

    // player.number와 같은 선수를 몇 개 보유 중인지 확인
    const countHeldPlayers = heldPlayers.filter((heldPlayer) => heldPlayer.number === player.number).length;

    return (
        <div className="transfer-player-info">
            <div className="name">
                <span>{player.name}</span>
                {/* 보유 중인 수량 표시 */}
                {countHeldPlayers > 0 && (
                    <div className="held-status">
                        {countHeldPlayers}개 보유중
                    </div>
                )}
            </div>

            <div className="statistics">
                <span className={player.position}>{player.position}</span>
                <span>{player.overall_ability}</span>
            </div>
            <div className="detail">
                <span>{player.date_of_birth ?? '-'}</span>
                <span>{player.height ?? '-'} cm</span>
                <span>{player.weight ?? '-'} kg</span>
                <span>{player.dominant_foot}</span>
            </div>
            <div className="nationality-wrap">
                <div className="nationality-img">
                    <img src={getFlagImage(player.nationality)} alt={player.nationality}/>
                    <span>{player.nationality}</span>
                </div>
                <div className="player-status">
                    {player.transfer_date ? (
                        <span className="status active-player">Active Player</span>
                    ) : (
                        <span className="status former-player">Former Player</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransferPlayerInfo;
