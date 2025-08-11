'use client'
import React, { useState } from 'react'
import LanguageSelector from '../../components/LanguageSelector'
import TranscriptPane from '../../components/TranscriptPane'

export default function HomePage() {
  const [sourceLang, setSourceLang] = useState('en-US')
  const [targetLang, setTargetLang] = useState('ur-PK')
  const [originalText, setOriginalText] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <header className="max-w-3xl mx-auto mb-4">
        <h1 className="text-xl font-semibold">Healthcare Translator — Prototype</h1>
        <p className="text-sm text-gray-500">Mobile-first demo: live transcript + translated text</p>
      </header>

      <main className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div>
            <LanguageSelector label="Input language" value={sourceLang} onChange={setSourceLang} />
          </div>
          <div>
            <LanguageSelector label="Output language" value={targetLang} onChange={setTargetLang} />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md shadow-sm">
              Start Recording
            </button>
          </div>
        </div>

        <section className="flex flex-col sm:flex-row gap-3">
          <TranscriptPane title="Original (live)" text={originalText} />
          <TranscriptPane title="Translated (live)" text={translatedText} />
        </section>
      </main>
    </div>
  )
}
