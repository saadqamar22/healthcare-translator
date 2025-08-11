'use client'
import React from 'react'

export default function TranscriptPane({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex-1 bg-white rounded-lg p-3 shadow-sm min-h-[220px] overflow-auto">
      <h3 className="text-xs text-gray-600 mb-2">{title}</h3>
      <div className="whitespace-pre-wrap text-sm text-gray-800">{text || '—'}</div>
    </div>
  )
}
