import React from 'react'

const items = [
  'Leadership in Legal Education',
  'Advanced Legal Courses',
  'Skills that Employers Value',
  'Crack Competitive Exams',
  'Build Your Own Practice',
  'Outperform in Internships',
  'Future-Proof Your Career'
]

export default function Manifesto() {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-slate-800 mb-8 text-center'>Manifesto</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {items.map((it, i) => (
            <div key={i} className='p-6 rounded-2xl border shadow-sm'>
              <div className='w-14 h-14 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold mb-4'>#{i+1}</div>
              <p className='text-slate-700 font-semibold'>{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
