import React from 'react';
import { profile } from '../images';
import { useNavigate } from 'react-router';
import STORY from '../story';

function Hero() {
  const navigate = useNavigate();

  function handleStory() {
    navigate('/StoryPage', { state: STORY });
  }

  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left px-5'>
      <div className='flex justify-center md:justify-end'>
        <div className='relative w-43 h-43 md:w-63 md:h-63'>
          {/* Gradient Ring */}
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-ring'></div>
          {/* Profile Image */}
          <img
            onClick={handleStory}
            className='w-40 h-40 md:w-60 md:h-60 rounded-full absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover'
            src={profile}
            alt='Profile'
          />
        </div>
      </div>
      <div>
        <h1 className='text-4xl md:text-5xl font-bold'>Naveen Sethupathy</h1>
        <div className='flex flex-wrap justify-center md:justify-start gap-5 my-5 text-lg md:text-xl'>
          <div className='flex gap-1'>
            <h5 className='font-bold'>15+</h5>
            <h5>Brands</h5>
          </div>
          <div className='flex gap-1'>
            <h5 className='font-bold'>100+</h5>
            <h5>Creatives</h5>
          </div>
          <div className='flex gap-1'>
            <h5 className='font-bold'>6+</h5>
            <h5>Years</h5>
          </div>
        </div>
        <p>✨ Graphic Designer | 6+ yrs experience 🎨✨</p>
        <p>📌 Crafting stunning & effective designs 🚀</p>
        <p>💡 Creativity | Innovation | Design Tools 🎭</p>
        <p> 📞 Mobile No : +91 74487 08598</p>
        <p>📧 Mail : naveensethupathy7@gmail.com</p>
        <p>❗Check Out my stories❗</p>
      </div>
    </div>
  );
}

export default Hero;