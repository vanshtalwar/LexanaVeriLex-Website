import React, {useState} from 'react'

export default function EnquiryForm() {
  const [form, setForm] = useState({name:'', email:'', phone:'', course:'', message:''})
  function update(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function onSubmit(e){
    e.preventDefault()
    const whatsappMessage = `New Enquiry:%0A%0A Name: ${form.name}%0A Email: ${form.email}%0A Phone: ${form.phone}%0A Course Interest: ${form.course}%0A Message: ${form.message}`
    const phone = '919560835188'
    const url = `https://wa.me/${phone}?text=${whatsappMessage}`
    window.open(url, '_blank')
  }
  return (
    <form onSubmit={onSubmit} className='space-y-3'>
      <input name='name' value={form.name} onChange={update} required placeholder='Full Name' className='w-full text-black  p-3 rounded-md border' />
      <input name='email' type='email' value={form.email} onChange={update} required placeholder='Email Address' className='w-full text-black p-3 rounded-md border' />
      <input name='phone' value={form.phone} onChange={update} required placeholder='Phone Number' className='w-full p-3 text-black rounded-md border' />
      <select name='course' value={form.course} onChange={update} required className='w-full p-3 text-black rounded-md border'>
        <option value=''>Select Course Interest</option>
        <option>Contract Drafting</option>
        <option>Technology Law</option>
        <option>M&A and Finance</option>
        <option>IP Law</option>
        <option>Corporate Law</option>
        <option>Other</option>
      </select>
      <textarea name='message' value={form.message} onChange={update} placeholder='Your Message' className='w-full p-3 text-black rounded-md border' rows='4' />
      <button type='submit' className='w-full py-2 rounded-md bg-sky-600 text-white font-semibold'>Submit Enquiry</button>
    </form>
  )
}
