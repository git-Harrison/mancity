export interface MainVideoPlayerProps {
    videoUrl: string | null;
    videoRef: React.RefObject<HTMLVideoElement>;
    onPlay: () => void;
    isPlaying: boolean;
    videoText: string;
    videoSubText: string;
    thumbnail: string;
}