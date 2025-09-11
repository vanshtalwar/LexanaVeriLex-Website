import React from 'react'
import EnquiryForm from './EnquiryForm'
export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-8'>
      <div className='max-w-6xl mx-auto px-4 py-12 flex gap-20'>
        <div>
          <h3 className='text-sky-400 font-bold mb-3'>About LexanaVeriLex</h3>
          <p className='text-sm text-slate-300'>Lexana Verilex offers online legal education platform, helping students and professionals advance their legal careers through advanced courses and practical training.</p>
          <p className='mt-3 text-sm text-slate-300'><strong>Address:</strong><br/>J & K, Dilshad Garden, Delhi, India</p>
        </div>
      
        <div>
          <h3 className='text-sky-400 font-bold mb-3'>Quick Enquiry</h3>
          <EnquiryForm />
        </div>
      </div>
      <div className='text-center py-4 text-slate-400'>© 2025 LexanaVeriLex Legal Education Pvt. Ltd. All rights reserved.</div>
    </footer>
  )
}
