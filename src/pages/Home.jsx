import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Bootcamps from '../components/Bootcamps'
import Manifesto from '../components/Manifesto'
import Faculty from '../components/Faculty'

export default function Home(){
  return (
    <div>
      <Hero />
      <Courses />
      <Bootcamps />
      <Manifesto />
      <Faculty />
    </div>
  )
}
