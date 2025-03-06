import React, { useState } from 'react';
import Hero from "../components/hero";
import { mantrilogo, sapthamlogo, onetothreelogo } from '../brandlogo/brandindex';
import { useLocation } from "react-router";

function BrandPage() {
  const location = useLocation();
  const data = location.state;
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <Hero />
        <div>
          <div className="grid mt-10 grid-cols-3 gap-1 p-2 md:gap-2 md:p-4">
            {Object.keys(data).map((k, i) => (
              <div key={i} className="relative cursor-pointer" onClick={() => openModal(data[k])}>
                <img src={data[k]} className="w-full h-full object-cover" alt="Post" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              className="max-w-full max-h-full"
              alt="Enlarged Post"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image
            />
            <button
              className="fixed top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BrandPage;