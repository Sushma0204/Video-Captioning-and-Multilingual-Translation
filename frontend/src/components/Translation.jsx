import { Outlet, NavLink, useParams } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const Translation = () => {
  const { lang } = useParams(); // get the language from URL
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const selectedLanguage = lang || 'French' // Default language if none selected

  const handleTranslate = () => {
    if (inputText) {
      setTranslatedText(`Translated to ${selectedLanguage}: "${inputText}"`)
    } else {
      alert('Please enter some text to translate.')
    }
  }

  return (
    <>
      {/* Header */}
      <h1 className='text-center mt-10 text-5xl text-green-900 font-bold'>
        <Typewriter
          words={['Translate Text Instantly']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-center text-gray-600 mt-2">Select a language and translate your text effortlessly.</p>

      {/* Navbar */}
      <nav className="flex justify-center mt-6 space-x-8 text-lg font-medium">
        {['French', 'Hindi', 'Marati', 'Telugu'].map((language) => (
          <NavLink
            key={language}
            to={`/translate/${language}`}
            className={({ isActive }) =>
              `hover:text-green-700 transition duration-300 ${
                isActive ? 'text-green-900 border-b-4 border-green-700' : 'text-gray-600'
              }`
            }
          >
            {language}
          </NavLink>
        ))}
      </nav>

      {/* Child components will be rendered here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </>
  )
}

export default Translation
