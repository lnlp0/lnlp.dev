import React, { useState } from 'react';
import SocialLinks from './SocialLinks';

const ProfileCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleMouseEnter = () => {
    if (!isLocked) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isLocked) {
      setIsLocked(false);
      setIsHovered(false);
    } else {
      setIsLocked(true);
      setIsHovered(true);
    }
  };

  return (
    <div 
      className="flex flex-col items-center mt-16 md:mt-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div 
        className={`flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isHovered ? '-translate-y-8 md:-translate-y-12' : 'translate-y-0'
        } cursor-pointer`}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full select-none" 
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-2 [text-shadow:_0_0_20px_rgba(255,255,255,0.4),_0_0_30px_rgba(255,255,255,0.2)]">Frontend Developer</h1>
          <h2 className="text-white text-2xl md:text-3xl font-semibold [text-shadow:_0_0_15px_rgba(255,255,255,0.3),_0_0_25px_rgba(255,255,255,0.2)]">차동규</h2>
        </div>
      </div>
      <SocialLinks isVisible={isHovered} />
    </div>
  );
}

export default ProfileCard