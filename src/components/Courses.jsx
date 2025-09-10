import React from 'react'

const courseData = [
  { title: 'Diploma in Advanced Contract Drafting', meta: 'Aug 31, 2025' },
  { title: 'Diploma in Technology Law, Fintech', meta: 'Aug 31, 2025' },
  { title: 'Diploma in M&A, Institutional Finance', meta: 'Aug 31, 2025' },
]

export default function Courses({limit}) {
  return (
    <section className='py-12 bg-sky-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6'>Our Diploma Programmes</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {courseData.slice(0, limit||3).map((c, idx) => (
            <div key={idx} className='p-6 rounded-2xl bg-white border shadow-sm'>
              <div className='flex items-center gap-4 mb-3'>
                <img src='/logo1.jpg' alt='logo' className='w-14 h-14 rounded' />
                <div className='text-sky-600 font-semibold text-sm'>{c.meta} • Diploma</div>
              </div>
              <h3 className='font-bold text-slate-800 mb-2'>{c.title}</h3>
              <div className='text-slate-600 mb-4'>12 Month • 8-10hrs/week</div>
              <div className='flex gap-2 flex-wrap mb-4'>
                <span className='px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-sm'>Diploma Programme</span>
                <span className='px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-sm'>Drafting</span>
              </div>
              <button className={'w-full py-2 rounded-md font-semibold ' + (c.meta.includes('Closed')? 'bg-gray-400 text-white cursor-not-allowed':'bg-sky-600 text-white')}>Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
