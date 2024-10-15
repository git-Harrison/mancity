import React from 'react';
import {Player} from '../../models/interfaces/Player.interface';
import {motion} from 'framer-motion';

interface PlayersInfoProps {
    player: Player;
}

const PlayersInfo: React.FC<PlayersInfoProps> = ({player}) => {
    const textAnimation = (delay: number, duration: number) => ({
        initial: {opacity: 0, y: 50},
        animate: {opacity: 1, y: 0},
        transition: {duration, delay, ease: 'easeOut'}
    });

    const renderHonors = (honor: string[] | Record<string, string[]>) => {
        if (Array.isArray(honor)) {
            return honor.join(', ');
        } else if (typeof honor === 'object') {
            return Object.entries(honor)
                .map(([key, values]) => `${key}: ${values.join(', ')}`)
                .join(' | ');
        }
        return 'No honors';
    };

    return (
        <div className="players-info-container">
            <motion.div
                key={player.name}
                className="players-info"
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6}} // 전체 애니메이션 시간
            >
                <div className="info-top">
                    <motion.div className="detail" {...textAnimation(0.05, 0.4)}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/card_toty_tag.png`}
                            alt="card_icon"
                        />
                        <div className="name">{player.name}</div>
                    </motion.div>
                    <motion.div className="number" {...textAnimation(0.1, 0.4)}>
                        {player.overall_ability}
                    </motion.div>
                </div>

                <motion.div className={`position ${player.position}`} {...textAnimation(0.15, 0.4)}>
                    {player.position}
                </motion.div>

                <div className="info-detail">
                    <motion.div className="date_of_birth" {...textAnimation(0.2, 0.35)}>
                        {player.date_of_birth}
                    </motion.div>
                    <motion.div className="height" {...textAnimation(0.25, 0.35)}>
                        Height: {player.height} cm
                    </motion.div>
                    <motion.div className="weight" {...textAnimation(0.3, 0.35)}>
                        Weight: {player.weight} kg
                    </motion.div>
                    <motion.div className="dominant_foot" {...textAnimation(0.35, 0.35)}>
                        {player.dominant_foot}
                    </motion.div>
                    <motion.div className="nationality" {...textAnimation(0.4, 0.35)}>
                        {player.nationality}
                    </motion.div>
                </div>

                {player.honors && (
                    <motion.div className="honors-section" {...textAnimation(0.5, 0.4)}>
                        {Object.keys(player.honors).map((league, index) => (
                            <div key={index} className="honor-item">
                                {league}: {renderHonors(player.honors![league]!)}
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* club_history가 존재하는 경우에만 table 렌더링 */}
                {player.club_history && (
                    <motion.div className="club-history" {...textAnimation(0.45, 0.35)}>
                        <table>
                            <thead>
                            <tr>
                                <th>연도</th>
                                <th>클럽</th>
                                <th>임대 여부</th>
                            </tr>
                            </thead>
                            <tbody>
                            {player.club_history.map((history, index) => (
                                <tr key={index}>
                                    <td>{history.year}</td>
                                    <td>{history.club}</td>
                                    <td>{history.loan ? '임대' : ''}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default PlayersInfo;
