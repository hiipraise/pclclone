import { useState } from "react";
import { Play } from "lucide-react";

const YouTubeWithThumbnail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "NcBMhVpP35U";
  const thumbnail =
    "https://www.pcl.com/content/dam/videos/Recruitment%20Video%20Thumbnail-min.jpg";

  return (
    <div className="relative aspect-video w-full max-w-none overflow-hidden shadow-lg">
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="absolute w-full h-full object-cover"
          />
          <div className="z-20 bg-white/80 rounded-full p-4 hover:scale-105 transition">
            <Play className="w-10 h-10 text-black" />
          </div>
        </div>
      )}

      {isPlaying && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeWithThumbnail;
