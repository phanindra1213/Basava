'use client'
import React, { useRef } from 'react';
import Navbar from "../navbar";
import VideoPlayer from '../../../components/VideoPlayer';

export default function Home() {
  const videoRefs = useRef(Array.from({ length: 10 }, () => React.createRef<HTMLIFrameElement>()));

  const playFullScreen = (index: number) => {
    const iframe = videoRefs.current[index].current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) { // Type assertion to 'any'
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) { // Type assertion to 'any'
        (iframe as any).msRequestFullscreen();
      }
    }
  };

  const videos = [
    '973hnZiboQg?si=RjfyoU_YK08MZIDH', 'ABtH0Mvl0aI?si=7hjf9igpEIuOarMc', 'k2zhEfLgO9o?si=B16dq2hBgX7KgqkL', '_MilRm5R2gU?si=et697VXZDFoC12Sf', '8tQC-qBfxjw?si=BZceJAYZkBKiZmqu',
    'qKLnvF9XYHU?si=dpUX6a5MlKXR_gND', 'd6IPOjpNt0o?si=I5l5gk1DCc02hZfm', '5cv4Gus495U?si=-a3eR0hf5PM2qhfC', 'GWEQmFPowjc?si=xa0eIz907DSZrJT5',
  ];

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className='p-3'>
        <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .video-wrapper {
            width: 30%;
            padding-bottom: 20%;
            position: relative;
          }
          .video-wrapper iframe {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          @media (max-width: 1024px) {
            .video-wrapper {
              width: 45%;
              padding-bottom: 25%;
            }
          }
          @media (max-width: 768px) {
            .video-wrapper {
              width: 45%;
              padding-bottom: 25%;
            }
          }
          @media (max-width: 480px) {
            .video-wrapper {
              width: 100%;
              padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            }
          }
        `}</style>

        <div className="container">
          {videos.map((videoId, index) => (
            <div className="video-wrapper" key={index} onClick={() => playFullScreen(index)}>
              <iframe
                ref={videoRefs.current[index]}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
