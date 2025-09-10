import React from 'react'

const camps = [
  {title: 'U.S Employment regulations & contracts', date: 'Aug 30, Aug 31, 2025', time: '03:00 PM (IST)'},
  {title: 'Ace MNC Interviews', date: 'Aug 30, Aug 31, 2025', time: '06:00 PM (IST)'},
  {title: 'Intellectual Property & Data Privacy', date: 'Aug 30, Aug 31, Sep 1, 2025', time: '07:00 PM (IST)'},
]

export default function Bootcamps() {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6'>Free Online Bootcamps</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {camps.map((b, i) => (
           <div key={i} className='p-6 rounded-2xl shadow-sm' style={{background: 'linear-gradient(135deg, #5dade2, #3498db, #2980b9)'}}>
              <div className='text-sm uppercase mb-2'>{b.date}</div>
              <h3 className='font-bold text-white mb-2'>{b.title}</h3>
              <div className='text-white mb-4'>{b.time}</div>
              <button className='w-full py-2 rounded-md bg-white text-sky-700 font-semibold'>Register Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
