"use client"; 

import { useState, useEffect } from 'react';
import AddPhotoForm from './components/AddPhotoForm';

export default function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=8`);
      const data = await response.json();
      setPhotos(data );
    };

    fetchPhotos();
  }, [currentPage]);


 

  return (
    // heading
    <div className="container bg-slate-200 mx-auto p-4">
      <h1 className="text-7xl font-serif text-center font-change mb-8 ">The Gallery</h1>

      {/* images display */}
       
      <div className="grid grid-cols-4 gap-10">
        {photos.map(photo => (
          <div key={photo.id} className=" shadow-2xl p-5 rounded-md bg-black  text-slate-200">
            <img src={photo.url} alt={photo.title} className=" mb-4" />
            <h2 className="text-lg">{photo.title}</h2>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-5 rounded' onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-5 rounded'  onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
      </div>

      {/* Add photo form section */}

      <div className='container  border-black border-2 shadow-2xl rounded-3xl  mt-20'>
        <h1 className="text-4xl font-medium font-change text-center m-4">Add Your Photo</h1>
      <AddPhotoForm  setPhotos={setPhotos} />
      </div>
      
      {/* footer */}
      <footer className='container'>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">The Gallery </a>. All Rights Reserved.</span>
      </footer>

    </div>

  );
}

