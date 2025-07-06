import React, { useState } from 'react'

const Marati = () => {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTranslate = async () => {
    if (!inputText) {
      alert('Please enter some text to translate.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:5000/translate-marathi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
      })

      const data = await response.json()
      if (data.translated_text) {
        setTranslatedText(data.translated_text)
      } else {
        setTranslatedText('No translation available. Please try again.')
      }
    } catch (error) {
      console.error('Error translating text:', error)
      alert('Failed to translate. Please try again later.')
    }
    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center min-h-[58vh] px-8 py-2 space-x-8 mt-4">
      {/* Left Section: Input Text */}
      <div className="bg-white p-6 rounded-2xl shadow-xl w-1/3 h-92 flex flex-col">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Enter Text to Translate (Marathi)</h2>
        <textarea
          className="w-full h-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-green-500"
          placeholder="Type your text here to translate to Marathi..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button
          className={`w-full bg-green-900 text-white py-2 rounded-lg font-semibold mt-4 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
          }`}
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? 'Translating...' : 'Translate to Marathi'}
        </button>
      </div>

      {/* Right Section: Display Translated Text */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-1/2 h-92 border border-green-500 flex flex-col">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Translated Text</h2>
        <div className="p-4 border border-gray-300 rounded-lg h-full bg-gray-50 overflow-y-auto">
          {translatedText ? (
            <p className="text-gray-700">{translatedText}</p>
          ) : (
            <p className="text-gray-400">Translation will appear here...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Marati
