// components/VideoPlayer.js
import YouTube from 'react-youtube';
import { useState } from 'react';
import Image from 'next/image';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayerReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.videoContainer}>
      {isPlaying ? (
        <div className={styles.fullScreen}>
          <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        </div>
      ) : (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="Video thumbnail"
          className={styles.thumbnail}
          onClick={handleThumbnailClick}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
