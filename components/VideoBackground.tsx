interface VideoBackgroundProps {
  className?: string;
}

export default function VideoBackground({
  className = "",
}: VideoBackgroundProps): React.ReactNode {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video element - replace src with actual video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        poster="/placeholder-poster.jpg"
      >
        {/* Placeholder: Add your video source here */}
        {/* <source src="/your-video.mp4" type="video/mp4" /> */}
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Optional blue gradient overlay for brand color */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/80" />
    </div>
  );
}
