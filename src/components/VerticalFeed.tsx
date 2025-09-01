import React, { useState, useRef, useEffect } from "react";

interface Video {
  id: string;
  src: string;
  alt: string;
  name: string;
  location: string;
  achievement: string;
  quote: string;
}

interface VerticalFeedProps {
  videos: Video[];
}

const OptimizedVideo: React.FC<{
  video: Video;
  onReplay: () => void;
}> = ({ video, onReplay }) => {
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (isInView && videoRef.current && isLoaded) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions
      });
      setIsPlaying(true);
    }
  }, [isInView, isLoaded]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleEnded = () => {
    setHasEnded(true);
    setIsPlaying(false);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions
      });
      setIsPlaying(true);
      setHasEnded(false);
    }
    onReplay();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <div className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg group">
        {isInView ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop={false}
            muted={isMuted}
            playsInline
            preload="metadata"
            onLoadedData={handleLoadedData}
            onEnded={handleEnded}
            src={video.src}
            poster={`data:image/svg+xml;base64,${btoa(`
              <svg width="406" height="720" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#1a1a1a"/>
                <circle cx="203" cy="360" r="40" fill="#ffffff" opacity="0.3"/>
                <path d="M190 340 L190 380 L220 360 Z" fill="#ffffff" opacity="0.7"/>
              </svg>
            `)}`}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-white/50 text-sm">Loading...</div>
          </div>
        )}

        {/* Play Button for ended videos */}
        {hasEnded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={handleReplay}
              className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 transition-all duration-200 hover:scale-110 shadow-lg"
              title="Replay video"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Loading indicator */}
        {isInView && !isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Video Controls */}
        {isLoaded && (
          <div className="absolute top-2 right-2 flex gap-1">
            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
              title={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.414 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.414l3.969-3.816a1 1 0 011.617 0zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.414 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.414l3.969-3.816a1 1 0 011.617 0zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Playing indicator */}
            {isPlaying && !hasEnded && (
              <div className="bg-black/70 rounded-full p-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-primary-foreground">
          <p className="text-sm mb-1 leading-tight font-semibold">
            "{video.quote}"
          </p>
          <div className="text-xs font-bold">{video.name}</div>
          <div className="text-[10px] text-muted-foreground">
            {video.location}
          </div>
          <div className="text-primary font-semibold text-[10px] mt-1">
            {video.achievement}
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalFeed: React.FC<VerticalFeedProps> = ({ videos }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {videos.map((video) => (
        <OptimizedVideo key={video.id} video={video} onReplay={() => {}} />
      ))}
    </div>
  );
};

export default VerticalFeed;
