'use client'
import React from 'react'

type Props = {
  value: string
  onChange: (v: string) => void
  label?: string
}

export default function LanguageSelector({ value, onChange, label }: Props) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border-gray-200 border px-3 py-2 bg-white"
      >
        <option value="en-US">English (US)</option>
        <option value="ur-PK">Urdu (Pakistan)</option>
        <option value="es-ES">Español (Spain)</option>
        <option value="ar-SA">العربية (Arabic)</option>
      </select>
    </div>
  )
}
