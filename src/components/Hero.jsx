import React from 'react'

export default function Hero() {
  const features = [
    { title: 'Jobs', icon: '💼', count: '150+' },
    { title: 'Internships', icon: '🎓', count: '50+' },
    { title: 'Courses', icon: '📚', count: '25+' },
    { title: 'Projects', icon: '🚀', count: '200+' }
  ]

  return (
    <section className='pt-28 bg-gradient-to-br from-sky-50 to-sky-100'>
      <div className='max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center'>
        <div>
          <h1 className='text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight'>
            LexanaVeriLex empower businesses with AI-driven legal, compliance, and contract solutions.
          </h1>
          <p className='mt-6 text-slate-600'>
            We deliver future-ready legal solutions that blend deep expertise with cutting-edge technology.
            Simplifying complexity, safeguarding growth and delivering future-ready legal solutions.
          </p>
          <div className='mt-6 flex gap-3'>
            <a href='/courses' className='bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors'>Explore Courses</a>
            <a href='/contact' className='border border-sky-600 text-sky-600 px-4 py-2 rounded-md hover:bg-sky-50 transition-colors'>Contact</a>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-full max-w-md h-80 rounded-2xl shadow-lg bg-gradient-to-br from-sky-500 to-sky-700 p-6 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full'></div>
              <div className='absolute bottom-8 left-4 w-12 h-12 border-2 border-white rounded-lg rotate-45'></div>
              <div className='absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full'></div>
            </div>
            
            {/* Main Content */}
            <div className='relative z-10 h-full flex flex-col justify-between'>
              <div className='text-center mb-4'>
                <h3 className='text-xl font-bold text-white mb-2'>Opportunities Await</h3>
                <p className='text-sky-100 text-sm'>Explore career paths in legal tech</p>
              </div>
              
              {/* Feature Grid */}
              <div className='grid grid-cols-2 gap-3 flex-1'>
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer transform hover:scale-105'
                  >
                    <div className='text-2xl mb-1'>{feature.icon}</div>
                    <div className='text-white font-semibold text-sm'>{feature.title}</div>
                    <div className='text-sky-100 text-xs mt-1'>{feature.count}</div>
                  </div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className='text-center mt-4'>
                <button className='bg-white text-sky-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-sky-50 transition-colors'>
                  View All →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}