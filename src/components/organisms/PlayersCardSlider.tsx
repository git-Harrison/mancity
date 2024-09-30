import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Pagination, Navigation} from 'swiper/modules';
import SwiperCore from 'swiper';
import {PlayerCardData} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';

interface PlayersCardSliderProps {
    players: PlayerCardData[];
    onPlayerClick: (number: number) => void;
}

const PlayersCardSlider: React.FC<PlayersCardSliderProps> = ({players, onPlayerClick}) => {
    const swiperRef = useRef<SwiperCore | null>(null);

    const handleSlideChange = (swiper: SwiperCore) => {
        const activeIndex = swiper.realIndex; // 현재 슬라이드 인덱스
        const playerNumber = players[activeIndex]?.number;
        if (playerNumber) {
            onPlayerClick(playerNumber);
        }
    };

    const handleClick = (index: number, playerNumber: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
            setTimeout(() => {
                handleSlideChange(swiperRef.current as SwiperCore);
            }, 0);
        }
        onPlayerClick(playerNumber);
    };

    return (
        <div className="card-slider-wrap">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={4.5}
                slidesPerGroup={1}
                navigation
                pagination={{clickable: true}}
                loop
                speed={900}
                onSwiper={(swiper: SwiperCore) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
            >
                {players.map((player, index) => (
                    <SwiperSlide
                        key={player.number}
                        onClick={() => handleClick(index, player.number)}
                    >
                        <div
                            className="card-slide"
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
                                <div className="number">{player.number}</div>
                                <div className={`position ${player.position}`}>{player.position}</div>
                                <div className="country-logo">
                                    <img
                                        src={getFlagImage(player.nationality)}
                                        alt={player.nationality}
                                    />
                                </div>
                                <div className="img">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/profile_icon_${player.number}.png`}
                                        alt="players-face"
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PlayersCardSlider;
