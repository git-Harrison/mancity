import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Pagination, Navigation} from 'swiper/modules';
import SwiperCore from 'swiper';
import {PlayersCardSliderProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import PlayerCard from "../atoms/PlayerCard";

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
                        <PlayerCard player={player}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PlayersCardSlider;
