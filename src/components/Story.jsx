import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function StoryViewer() {
  const location = useLocation();
  const STORY = location.state; // Access the story object from location state
  const storyKeys = Object.keys(STORY);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  // Function to create a blurred version of the current image
  const createBlurredBackground = (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Enable cross-origin access for external images
      img.src = imageUrl;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Apply blur effect
        ctx.filter = 'blur(20px)';
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Convert canvas to data URL
        const blurredImage = canvas.toDataURL('image/jpeg', 0.8);
        resolve(blurredImage);
      };
    });
  };

  // Update background when the current image changes
  useEffect(() => {
    const updateBackground = async () => {
      const currentImageUrl = STORY[storyKeys[currentIndex]];
      const blurredImage = await createBlurredBackground(currentImageUrl);
      setBackgroundImage(blurredImage);
    };

    updateBackground();
  }, [currentIndex, STORY, storyKeys]);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % storyKeys.length);
    },3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, storyKeys]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % storyKeys.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? storyKeys.length - 1 : prevIndex - 1
    );
  };

  // Calculate previous and next indices
  const prevIndex = currentIndex === 0 ? storyKeys.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % storyKeys.length;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Container for the current, previous, and next images */}
      <div className="w-full h-full max-w-[1080px] max-h-[1920px] aspect-[9/16] flex items-center justify-center relative overflow-visible">
        {/* Previous Image (Left Side) */}
        <div className="absolute left-0 w-[15%] md:w-[25%] h-[60%] md:h-[80%] flex items-center justify-center z-10 transform -translate-x-8 md:-translate-x-12">
          <img
            src={STORY[storyKeys[prevIndex]]}
            alt="Previous Story"
            className="w-full h-full object-contain blur-xs opacity-70"
          />
        </div>

        {/* Current Image */}
        <div className="relative w-full h-full flex items-center justify-center z-20">
          <img
            src={STORY[storyKeys[currentIndex]]}
            alt="Story"
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))',
            }}
          />
        </div>

        {/* Next Image (Right Side) */}
        <div className="absolute right-0 w-[15%] md:w-[25%] h-[60%] md:h-[80%] flex items-center justify-center z-10 transform translate-x-8 md:translate-x-12">
          <img
            src={STORY[storyKeys[nextIndex]]}
            alt="Next Story"
            className="w-full h-full object-contain blur-xs opacity-70"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 md:p-3 rounded-full hover:bg-white/50 z-30"
      >
        <ChevronLeft size={24} className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 md:p-3 rounded-full hover:bg-white/50 z-30"
      >
        <ChevronRight size={24} className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
}

export default StoryViewer;