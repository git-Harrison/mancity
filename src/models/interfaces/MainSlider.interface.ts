export interface Slide {
    id: number;
    title: string;
    cup: string;
    image: string;  // 슬라이드 이미지
    bgImg: string;  // 백그라운드 이미지
}

export interface SliderComponentProps {
    slides: Slide[];
    setSelectedSlideId: (id: number) => void;
}
