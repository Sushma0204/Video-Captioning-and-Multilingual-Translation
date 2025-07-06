import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom'

const Caption = () => {
  const [captions, setCaptions] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [youtubeURL, setYoutubeURL] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(captions)
      .then(() => alert("Captions copied to clipboard!"))
      .catch(err => alert("Failed to copy captions."))
  }


  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const fileName = file.name
      const fileExtension = fileName.split('.').pop().toLowerCase()
      if (fileExtension === 'avi') {
        setSelectedFile(file)
      } else {
        alert("Please upload a valid .avi file only!")
        event.target.value = "" // Clear invalid file
      }
    }
  }

  const handleGenerateCaptions = async () => {
    if (!selectedFile && !youtubeURL) {
      alert('Please upload a file or enter a YouTube URL')
      return
    }

    const formData = new FormData()
    if (selectedFile) {
      formData.append('file', selectedFile)
    } else {
      formData.append('youtubeURL', youtubeURL)
    }

    setLoading(true) // Start loading when request starts

    try {
      const response = await fetch('http://127.0.0.1:5000/generate-captions', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      setCaptions(data.captions)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate captions. Please try again.')
    } finally {
      setLoading(false) // Stop loading whether success or error
    }
  }

  return (
    <>
      <h1 className='text-center mt-10 text-5xl text-green-900 font-bold'>
        <Typewriter
          words={['Generate Captions from a Video']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <br />
        <span className='text-gray-400 font-medium text-base'>
          Upload a <b>.avi</b> video file from your device or paste a YouTube URL to generate precise captions effortlessly. Click the 'Generate Captions' button and watch the magic happen!
        </span>
      </h1>

      <h3 className='text-green-900 text-center mt-3'>
        Want to get Translation for the captions? Check out here by clicking this button!{' '}
        <button className='text-white bg-green-900 rounded-full px-4 py-2 hover:scale-105 text-sm font-semibold'>
          <NavLink to="/translate">Translation</NavLink>
        </button>
      </h3>

      <div className="flex justify-center items-center min-h-[70vh] px-8 py-2">

        {/* Left Section: Upload & URL Input */}
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-1/3 h-96">
          <h2 className="text-xl font-semibold text-green-900 mb-4">Upload Video or Paste URL</h2>

          {/* File Upload */}
          <div className="mb-4 mt-10">
            <label className="block font-medium text-gray-700">Choose a .avi file:</label>
            <input
              type="file"
              accept=".avi"
              className="mt-2 block w-full p-4 border text-xs font-semibold text-gray-400 border-gray-300 rounded-lg"
              onChange={handleFileChange}
            />
          </div>


          {/* Generate Captions Button */}
          <button
            className="w-full bg-green-900 text-white py-2 rounded-lg font-semibold mt-4 hover:cursor-pointer hover:bg-green-700 transition duration-300"
            onClick={handleGenerateCaptions}
          >
            {loading ? 'Generating Captions...' : 'Generate Captions'}
          </button>
        </div>

        {/* Right Section: Display Video & Captions */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-1/2 h-96 ml-8 border border-green-500 flex flex-col items-center">

          {/* Video Preview */}
          {selectedFile ? (
            <video controls className="w-full rounded-lg mb-4 h-64">
              <source src={URL.createObjectURL(selectedFile)} type="video/avi" />
              Your browser does not support the video tag.
            </video>
          ) : youtubeURL ? (
            <iframe
              className="w-full rounded-lg mb-4"
              src={`https://www.youtube.com/embed/${youtubeURL.split("v=")[1]}`}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-gray-400 text-center">No video selected</p>
          )}

          {/* Captions Display */}
          <div className="mt-4 p-3 w-full bg-gray-100 rounded-lg text-gray-700 text-center min-h-[50px] flex items-center justify-center">
            {loading ? (
              <p className="text-gray-500 italic">Loading... Please wait.</p>
            ) : captions ? (
              <>
                <div className='flex gap-3 justify-between items-center'>
                  <p className="mb-2">{captions}</p>
                  <button
                    onClick={handleCopy}

                    className="bg-green-700 text-white px-2 py-2 rounded-xl text-xs hover:bg-green-800 hover: cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              </>

            ) : (
              <p className="text-gray-400">No captions yet...</p>
            )}
          </div>

        </div>

      </div>
    </>
  )
}

export default Caption