import React from 'react';
import {PlayerCardProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
const PlayerCard: React.FC<PlayerCardProps> = ({player}) => {
    return (
        <div
            className="players-card"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/card_bg.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '210px',
                height: '336px',
                textAlign: 'center',
            }}
        >
            <div className="players-row">
                <div className="number">{player.overall_ability}</div>
                <div className={`position ${player.position}`}>{player.position}</div>
                <div className="country-logo">
                    <img
                        src={getFlagImage(player.nationality)}
                        alt={player.nationality}
                    />
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
                    <img
                        src={`${process.env.PUBLIC_URL}/images/toty_icon.png`}
                        alt="toty_icon"
                    />
                </div>
                <div className="players">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/card_icon.png`}
                        alt="card_icon"
                    />
                    <div className="name">{player.name}</div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
