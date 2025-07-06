import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='mt-40 flex flex-col items-center justify-center px-6'>
      {/* Heading */}
      <div className='text-green-900 text-center'>
        <h1 className='text-5xl font-extrabold leading-snug'>
          <span className='text-green-900'>
            <Typewriter
              words={['AI Powered']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <br />
          <span className='text-green-700'>Video Captioning & Translation</span>
        </h1>
      </div>

      {/* Steps Section */}
      <section className='w-full max-w-6xl mt-16 grid grid-cols-4 gap-6'>
        <div className='bg-white rounded-2xl drop-shadow-lg p-6 text-center border border-green-500 transition duration-300 ease-in-out hover:scale-105'>
          <h2 className='font-semibold text-lg text-green-900'>Step 1</h2>
          <p className='text-sm text-gray-600 mt-2'>Upload a file or paste a YouTube URL</p>
        </div>

        <div className='bg-white rounded-2xl drop-shadow-lg p-6 text-center border border-green-500 transition duration-300 ease-in-out hover:scale-105'>
          <h2 className='font-semibold text-lg text-green-900'>Step 2</h2>
          <p className='text-sm text-gray-600 mt-2'>Generate captions from the uploaded video file or URL</p>
          <NavLink to="/caption"><button className='bg-green-900 text-white px-4 font-semibold py-2 mt-3 text-sm rounded-full hover:bg-green-700 transition '>Caption</button></NavLink>
          
        </div>

        <div className='bg-white rounded-2xl drop-shadow-lg p-6 text-center border border-green-500 transition duration-300 ease-in-out hover:scale-105'>
          <h2 className='font-semibold text-lg text-green-900'>Step 3</h2>
          <p className='text-sm text-gray-600 mt-2'>Get translated text from the captions that are generated</p>
          <NavLink to="/translate/French"><button className='bg-green-900 text-white font-semibold px-4 py-2 mt-3 text-sm rounded-full hover:bg-green-700 transition'>Translation</button></NavLink>
          
        </div>

        <div className='bg-white rounded-2xl drop-shadow-lg p-6 text-center border border-green-500 transition duration-300 ease-in-out hover:scale-105'>
          <h2 className='font-semibold text-lg text-green-900'>Step 4</h2>
          <p className='text-sm text-gray-600 mt-2'>Download or share your captions and translations</p>
        </div>
      </section>
    </div>
  )
}

export default Home
