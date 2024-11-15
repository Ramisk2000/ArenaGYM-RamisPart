import React from 'react';
import imageBlog from '../assets/Img/imageBlog.jpg';

function BlogPost({ title, img, content }) {
  return (
    <div className="bg-blackBG container mx-auto px-4 py-4 w-1/4">
      <div className="relative overflow-hidden group">
        <img className="h-48 w-full object-cover mb-2 transition duration-300 transform group-hover:brightness-50" src={img} alt="Blog Post Image" />
        <div className="absolute inset-0 flex items-center justify-center bg-yellowBetter bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0">
          <h1 className="text-black text-xl font-bold">Voir plus</h1>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-robotoCon text-white mb-2">{title}</h1>
      </div>
      <div className="font-roboto text-white">
        <p className='text-l'>
          {content}
        </p>
      </div>

      <br />
      <span className="text-white font-roboto text-l">March 15, 2024</span>
      <hr className="border-yellowBetter border-t-2" />
    </div>
  );
}

export default BlogPost;

