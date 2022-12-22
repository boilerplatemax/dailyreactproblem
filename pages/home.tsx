import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import home1 from 'assets/images/homegif2.gif'

import testimonial1 from 'assets/images/boy.png'
import testimonial2 from 'assets/images/woman.png'
import testimonial3 from 'assets/images/man.png'

type Props = {}

const home = (props: Props) => {
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
    <div className="bg-transparent py-12 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/4 px-4 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold text-white mb-5">Welcome to React Teacher!</h1>
            <p className="text-lg leading-relaxed text-white mb-8">
            We believe that the best way to learn is by doing, and our questions provide an opportunity for you to apply your knowledge and see immediate results. Each day, you'll receive a new question to solve, allowing you to consistently challenge and improve your skills.
            
            </p>
            <div className="mx-auto max-w-md float-left">
              <Link href="/today">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-amber-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mt-8">
            Today's Challenge
          </button>
          </Link>
        </div>
          </div>
          
          <div className="w-full lg:w-1/4 px-4">
            <Image src={home1} alt="Description of image" className="w-full h-auto rounded-lg shadow-lg" width="250" height="250"/>

          </div>
          {/* <div className="w-full lg:w-1/4 px-4">
            <div className='grid grid-cols bg-white rounded-full h-full'>hi</div>
          </div> */}
        </div>

      </div>
    </div>
    <div className="bg-transparent py-12 px-4">
      <div className="lg:flex flex-row lg:flex-row-reverse">
        <div className="lg:w-1/2">
          {/* <Image src={home1} alt="My Image" className="w-full h-auto" /> */}
        </div>
        <div className="lg:w-1/2 pl-4">
          <h2 className="text-2xl font-bold">Don't just take our word for it...</h2>
          <p className="text-white text-lg">Try it out for yourself for free and see the benefits of daily practice. Subscribe to our service to start learning and improving today by getting detailed explanations and solutions.</p>
        </div>
      </div>
    </div>
    <div className="bg-transparent py-12 px-4">
      <h1 className="text-2xl font-bold text-center text-white mb-8">Testimonials</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-gray-600 text-lg leading-relaxed mb-2 font-bold">A Lifesaver for University Students</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I really struggled with understanding React at first, but your daily question website really helped me improve my skills. The variety of questions and explanations provided solidified my understanding of the concepts and allowed me to confidently apply them in my projects.
              </p>
              <div className="flex items-center">
                <Image src={testimonial1} alt="Avatar" className="w-12 h-12 rounded-full mr-4" width="50" height="50"/>
                <div className="text-gray-800 font-bold text-sm">
                Ethan Park
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-gray-600 text-lg leading-relaxed mb-2 font-bold">The Perfect Resource for Career Switchers</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Your daily React question website was an invaluable resource as I transitioned into a career in web development. The concise, clear explanations helped me grasp the concepts quickly and efficiently, and I am now confident in my React skills.
              </p>
              <div className="flex items-center">
                <Image src={testimonial2} alt="Avatar" className="w-12 h-12 rounded-full mr-4" width="50" height="50"/>
                <div className="text-gray-800 font-bold text-sm">
                Zara Patel
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-gray-600 text-lg leading-relaxed mb-2 font-bold">A Must-Have for Seasoned Web Developers</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Your daily React question website has been a great resource for me to refresh my knowledge and keep my skills sharp. The questions and explanations provided are always relevant and well-explained, making it easy for me to learn and improve. I highly recommend this resource to any web developer looking to stay on top of their game.
              </p>
              <div className="flex items-center">
                <Image src={testimonial3} alt="Avatar" className="w-12 h-12 rounded-full mr-4" width="50" height="50"/>
                <div className="text-gray-800 font-bold text-sm">
                James Rodriguez
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
</div>

    </div>
  )
}
export default home