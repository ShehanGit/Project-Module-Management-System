import React from 'react'

export default function MemberAssessment() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ marginBottom: '1rem' }}>Assessment Schedule</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
      <div style={{ backgroundColor: '#f2f2f2', padding: '0.5rem', marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Specializations"
          style={{ width: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        />
      </div>
      <div style={{ backgroundColor: '#f2f2f2', padding: '0.5rem', marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Semester"
          style={{ width: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        />
      </div>
      <div style={{ backgroundColor: '#f2f2f2', padding: '0.5rem', marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Assessment"
          style={{ width: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        />
      </div>
    </div>
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <button style={{ backgroundColor: '#8e44ad', color: 'white', padding: '0.5rem 1rem', border: 'none' }}>Save</button>
      <button style={{ backgroundColor: '#e74c3c', color: 'white', padding: '0.5rem 1rem', border: 'none' }}>Delete</button>
      <button style={{ backgroundColor: '#8e44ad', color: 'white', padding: '0.5rem 1rem', border: 'none' }}>Edit</button>
    </div>
  </div>
  )
}
