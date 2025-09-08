import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'

const About = () => {
  return (
   <section id="about" className=" bg-slate-800 text-white py-16 px-4 md:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">What I do</h2>
    <p className="text-gray-300 mb-12">
      Driven and detail-oriented Front-end Developer with a strong foundation in creating dynamic, responsive, and user-centric web applications. Adept at translating complex design concepts into seamless and interactive user interfaces using modern technologies like React, Redux, and Firebase. Experienced in managing end-to-end development life-cycles, from ideation and prototyping to deployment and optimization. Proficient in crafting pixel-perfect designs, enhancing performance, and ensuring cross-browser compatibility. Passionate about building scalable and maintainable code to deliver outstanding user experiences that meet both client and business objectives.

    </p>

    <div className="space-y-6">
  {/** Front-End Development */}
  <div className="flex items-center gap-4 bg-slate-700 p-6 rounded-lg shadow-md hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <Image 
      src={assets.s1} 
      alt="Frontend Development - React, Next.js, JavaScript" 
      width={56}
      height={56}
      className="w-14 h-14 rounded"
      quality={85}
      loading="lazy"
    />
    <div className='flex flex-col items-start'>
      <h3 className="text-xl font-semibold">Front-End Development</h3>
      <p className="text-gray-400 text-sm text-start">
        Front-End Development refers to the process of building the user-facing part of a website or application using technologies like HTML, CSS, JavaScript and frameworks like React and Next.js to create interactive and visually appealing interfaces.
      </p>
    </div>
  </div>

  {/** MERN Development */}
  <div className="flex items-center gap-4 bg-slate-700 p-6 rounded-lg shadow-md  hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <Image src={assets.s1} alt="App Design" className="w-14 h-14 rounded" />
    <div className='flex flex-col items-start'>
      <h3 className="text-xl font-semibold">MERN Development</h3>
      <p className="text-gray-400 text-sm text-start">
        MERN Development involves building full-stack web applications using MongoDB, Express.js, React, and Node.js to handle both front-end interfaces and back-end logic seamlessly.
      </p>
    </div>
  </div>

  {/** System Analysis and Documentation */}
  <div className="flex items-center gap-4 bg-slate-700 p-6 rounded-lg shadow-md hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <Image 
      src={assets.s1} 
      alt="System Analysis and Documentation - SRS, Use Cases, Process Models" 
      width={56}
      height={56}
      className="w-14 h-14 rounded"
      quality={85}
      loading="lazy"
    />
    <div className='flex flex-col items-start justify-start'>
      <h3 className="text-xl font-semibold">System Analysis and Documentation</h3>
      <p className="text-gray-400 text-sm text-start">
        System Analysis and Documentation involves understanding user requirements, analyzing system needs, and creating structured documents like SRS, use case diagrams, and process models to guide software development.
      </p>
    </div>
  </div>
</div>

  </div>
</section>
  )
}

export default About