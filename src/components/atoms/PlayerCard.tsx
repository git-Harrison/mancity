import React from 'react';
import {PlayerCardProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {getCardImages} from '../../utils/getCardImages';

const PlayerCard: React.FC<PlayerCardProps & { showEnhancement?: boolean }> = ({player, showEnhancement = false}) => {
    const isIconNumbers = [1042, 101008, 101049, 101037, 1051].includes(player.number);
    const {background: backgroundImage, tag: tagImage, badge: badgeImage} = getCardImages(player);

    return (
        <div
            className="players-card"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '210px',
                height: '336px',
                textAlign: 'center',
            }}
        >
            <div className="players-row">
                <div className={`number ${isIconNumbers ? 'icon' : ''}`}>{player.overall_ability}</div>
                <div className={`position ${player.position} ${isIconNumbers ? 'icon' : ''}`}>{player.position}</div>
                {showEnhancement && (
                    <div className={`enhancement-level enhancement-level${player.enhancementLevel}`}>
                        {player.enhancementLevel}
                    </div>
                )}
                <div className="country-logo">
                    <img src={getFlagImage(player.nationality)} alt={player.nationality}/>
                </div>
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
                <div className="team-logo">
                    <img src={badgeImage} alt="team-logo"/>
                </div>
                <div className="players">
                    <img src={tagImage} alt="card_icon"/>
                    <div className="name">{player.name}</div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;