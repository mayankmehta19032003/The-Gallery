"use client"; // Ensure this is a client component

import { useState } from 'react';

function AddPhotoForm({ setPhotos }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !url) {
      alert('Please fill out all fields.');
      return;
    }

   
    const newPhoto = {
      title: title,
      url: url,
      id: Date.now() 
    };

    setPhotos(prev => [newPhoto, ...prev])

    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className=" text-center mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title of the image"
        className="border-indigo-400 border-2 rounded-2xl p-2 mb-2 w-2/4"
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className=" border-indigo-400 border-2 rounded-2xl p-2 mb-2 w-3/4"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-800 text-white ml-2 p-2 rounded-2xl">Add Photo</button>
    </form>

    
  );
}

export default AddPhotoForm;
