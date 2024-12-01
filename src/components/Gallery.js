

// import React from 'react';

// const Gallery = ({ images, setSelectedImage }) => {
//   return (
//     <div className="my-8">
//       <h2 className="text-xl font-bold text-center">Gallery</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg hover:scale-110 transition-transform"
//           >
//             <img
//               src={image}
//               alt={`Captured ${index}`}
//               className="w-full h-full object-cover cursor-pointer"
//               onClick={() => setSelectedImage(image)} // Click to set the image in preview
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;



import React from 'react';

const Gallery = ({ images, deleteImage, clearAllImages }) => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Gallery</h2>
        {images.length > 0 && (
          <button
            onClick={clearAllImages}
            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={image}
              alt={`Captured ${index}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => deleteImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded shadow hidden group-hover:block"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
