import React from 'react';
import {PlayerCardProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {getCardImages} from '../../utils/getCardImages';
import {usePlayerImage} from '../../utils/usePlayerImage';
import {getCardType} from '../../utils/getCardType';

const PlayerCard: React.FC<PlayerCardProps> = ({player, showEnhancement = false}) => {
    const {imageSrc, imageLoaded, error, handleImageError} = usePlayerImage(player.number);
    const cardType = getCardType(player.number);
    const {background: backgroundImage, league: leagueIcon, tag: tagImage} = getCardImages(player);

    return (
        <div className="players-card-row" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="players-card">
                <div className="players-row">
                    <div className={`number ${cardType}`}>{player.overall_ability}</div>
                    <div className={`position ${player.position} ${cardType}`}>{player.position}</div>
                    {showEnhancement && (
                        <div className={`enhancement-level enhancement-level${player.enhancementLevel}`}>
                            {player.enhancementLevel}
                        </div>
                    )}
                    <div className="img">
                        {imageLoaded && !error ? (
                            <img
                                src={imageSrc}
                                alt="players-face"
                                onError={handleImageError}
                            />
                        ) : (
                            <img
                                src={`${process.env.PUBLIC_URL}/images/profile_icon_default.webp`}
                                alt="default-player-face"
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
                                <img src={leagueIcon} alt="league-logo"/>
                            </div>
                            <div className="city-logo">
                                <img src={`${process.env.PUBLIC_URL}/images/player_card_city_icon.webp`}
                                     alt="city-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
