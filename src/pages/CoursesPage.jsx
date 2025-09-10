import React from 'react'
import Courses from '../components/Courses'

export default function CoursesPage(){
  return (
    <div className='pt-28'>
      <Courses limit={10} />
    </div>
  )
}
