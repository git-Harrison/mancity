import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {PlayerCardProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {getCardImages} from '../../utils/getCardImages';
import {usePlayerImage} from '../../utils/usePlayerImage';
import {getCardType} from '../../utils/getCardType';

const PlayerMiniCard: React.FC<PlayerCardProps> = ({player, showEnhancement = false}) => {
    const enhancedPlayer = useSelector((state: RootState) =>
        state.player.heldPlayers.find(p => p.number === player.number)
    );

    const enhancedOverallAbility = enhancedPlayer ? enhancedPlayer.overall_ability : player.overall_ability;
    const enhancementLevel = enhancedPlayer ? enhancedPlayer.enhancementLevel : player.enhancementLevel;

    const {imageSrc, imageLoaded} = usePlayerImage(player.number);
    const cardType = getCardType(player.number);
    const {background: backgroundImage, league: leagueIcon, tag: tagImage} = getCardImages(player);

    return (
        <div className="players-mini-card-row" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="players-mini-card">
                <div className="players-mini-row">
                    <div className={`number ${cardType}`}>{enhancedOverallAbility}</div>
                    <div className={`position ${player.position} ${cardType}`}>{player.position}</div>
                    {showEnhancement && (
                        <div className={`enhancement-level enhancement-level${enhancementLevel}`}>
                            {enhancementLevel}
                        </div>
                    )}
                    <div className="img">
                        {imageLoaded && (
                            <img
                                src={imageSrc}
                                alt="players-face"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = `${process.env.PUBLIC_URL}/images/profile_icon_default.webp`;
                                }}
                            />
                        )}
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