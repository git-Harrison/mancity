import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {PlayerCardProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {getCardImages} from '../../utils/getCardImages';

/**
 * 간단한 선수 카드 UI 컴포넌트 Props
 * @player - 선수 정보
 * @showEnhancement - 강화 단계 표시 여부
 */

const PlayerMiniCard: React.FC<PlayerCardProps> = ({player, showEnhancement = false}) => {
    // 리덕스에서 해당 선수의 강화된 정보를 가져옴
    const enhancedPlayer = useSelector((state: RootState) =>
        state.player.heldPlayers.find(p => p.number === player.number)
    );

    // 강화된 overall_ability가 있으면 그 값을 사용, 없으면 원래 값을 사용
    const enhancedOverallAbility = enhancedPlayer ? enhancedPlayer.overall_ability : player.overall_ability;
    const enhancementLevel = enhancedPlayer ? enhancedPlayer.enhancementLevel : player.enhancementLevel;

    const cardType = [1042, 101008, 101037, 1051, 101032, 101010, 101021].includes(player.number) ? 'bdo' :
        [9, 17, 16, 20, 47, 19, 3, 24, 1026, 101007, 101019, 1055, 101055, 101056].includes(player.number) ? 'dld' :
            [101049].includes(player.number) ? 'icon' : '';
    const {background: backgroundImage, league: leagueIcon, tag: tagImage} = getCardImages(player);

    return (
        <div className="players-mini-card-row" style={{backgroundImage: `url(${backgroundImage})`,}}>
            <div className="players-mini-card">
                <div className="players-mini-row">
                    {/* 강화된 overall_ability를 보여줍니다 */}
                    <div className={`number ${cardType}`}>{enhancedOverallAbility}</div>
                    <div
                        className={`position ${player.position} ${cardType}`}>{player.position}</div>
                    {showEnhancement && (
                        <div className={`enhancement-level enhancement-level${enhancementLevel}`}>
                            {enhancementLevel}
                        </div>
                    )}
                    <div className="img">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/profile_icon_${player.number}.webp`}
                            alt="players-face"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = `${process.env.PUBLIC_URL}/images/profile_icon_default.webp`;
                            }}
                        />
                    </div>
                    <div className="players">
                        <div className="players-detail-top">
                            <img src={tagImage} alt="card_icon"/>
                            <div className={`name ${cardType}`}>{player.name}</div>
                        </div>
                        <div className="players-detail-bottom">
                            <div className="country-logo">
                                <img src={getFlagImage(player.nationality)} alt={player.nationality}/>
                            </div>
                            <div className="league-logo">
                                <img src={leagueIcon}/>
                            </div>
                            <div className="city-logo">
                                <img src={`${process.env.PUBLIC_URL}/images/player_card_city_icon.webp`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerMiniCard;