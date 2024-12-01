// import React, { useState, useEffect } from 'react';
// import Camera from './components/Camera';
// import Gallery from './components/Gallery';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null); // To hold the clicked image

//   useEffect(() => {
//     const savedImages = JSON.parse(localStorage.getItem('images')) || [];
//     setImages(savedImages);
//   }, []);

//   const addImage = (image) => {
//     const updatedImages = [...images, image];
//     setImages(updatedImages);
//     localStorage.setItem('images', JSON.stringify(updatedImages));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
//       <header className="py-6 bg-blue-500 text-white text-center text-2xl font-bold">
//         Image Capture and Display Application
//       </header>
//       <main className="container mx-auto px-4 flex flex-col md:flex-row">
//         <div className="w-full md:w-2/3">
//           <Camera addImage={addImage} />
//         </div>
//         <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8">
//           <Gallery images={images} setSelectedImage={setSelectedImage} />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import Camera from './components/Camera';
import Gallery from './components/Gallery';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(savedImages);
  }, []);

  const addImage = (image) => {
    const updatedImages = [...images, image];
    setImages(updatedImages);
    localStorage.setItem('images', JSON.stringify(updatedImages));
  };

  const deleteImage = (indexToRemove) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
    localStorage.setItem('images', JSON.stringify(updatedImages));
  };

  const clearAllImages = () => {
    setImages([]);
    localStorage.removeItem('images');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <header className="py-6 bg-blue-500 text-white text-center text-2xl font-bold">
        Image Capture and Display Application
      </header>
      <main className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <Camera addImage={addImage} />
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8">
          <Gallery images={images} deleteImage={deleteImage} clearAllImages={clearAllImages} />
        </div>
      </main>
    </div>
  );
};

export default App;
