import React from 'react'
export default function Faculty() {
  return (
    <section className='py-12 bg-sky-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6'>Faculty & Experts</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='p-6 bg-white rounded-2xl border shadow-sm text-center'>
            <img src='/photo1.jpg' alt='photo' className='mx-auto w-24 h-24 rounded-full mb-3' />
            <div className='font-semibold'>Abhishek Dutt</div>
            <div className='text-slate-600'>Legal Consultant</div>
          </div>
          <div className='p-6 bg-white rounded-2xl border shadow-sm text-center'>
            <img src='/photo2.jpg' alt='photo' className='mx-auto w-24 h-24 rounded-full mb-3' />
            <div className='font-semibold'>Saurabh Salil</div>
            <div className='text-slate-600'>Legal Consultant</div>
          </div>
        </div>
      </div>
    </section>
  )
}
