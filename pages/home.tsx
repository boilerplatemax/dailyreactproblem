import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import home1 from 'assets/images/homegif2.gif';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import testimonial1 from 'assets/images/boy.png';
import testimonial2 from 'assets/images/woman.png';
import testimonial3 from 'assets/images/man.png';

type Props = {};

const home = (props: Props) => {
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <div className="bg-transparent py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/4 px-4 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-white mb-5">
                Welcome to React Teacher!
              </h1>
              <p className="text-lg leading-relaxed text-white mb-8">
                We believe that the best way to <b>learn</b> is by doing, and
                our questions provide an opportunity for you to apply your
                knowledge and see <b>immediate results</b>. Each day, you'll
                receive a new question to solve, allowing you to consistently
                challenge and improve your skills.
              </p>
              <div className="text-xl font-bold leading-tight md:text-left">
                <h2 className="text-sky-300">Improve Your React Skills</h2>
                <h2 className="text-sky-200">Ace the Technical Interview</h2>
                <h2 className="text-sky-100">
                  Build professional React projects for your portfolio
                </h2>
              </div>
              <div className="mx-auto max-w-md float-left">
                <Link href="/today">
                  <button className="px-4 lg:mb-8 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-orange-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mt-8">
                    Today's Challenge
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/4 px-4">
              <Image
                src={home1}
                alt="Description of image"
                className="w-full h-auto rounded-lg shadow-lg"
                width="250"
                height="250"
              />
            </div>
            {/* <div className="w-full lg:w-1/4 px-4">
            <div className='grid grid-cols bg-white rounded-full h-full'>hi</div>
          </div> */}
          </div>

          <div className="">
            <h2 className="text-xl font-bold text-white mb-5">
              What you get from us:
            </h2>
            <ul className="mb-8 text-lg font-light text-white">
              <li className="mb-2">
                <i className="fas fa-check-circle mr-2 text-green-500 w-5 h-5"></i>{' '}
                Access to all previous questions & solutions
              </li>
              <li className="mb-2">
                <i className="fas fa-check-circle mr-2 text-green-500 w-5 h-5"></i>{' '}
                Detailed explanations of each solution
              </li>
              <li className="mb-2">
                <i className="fas fa-check-circle mr-2 text-green-500 w-5 h-5"></i>{' '}
                Interactable code solutions in Codepen
              </li>
              <li className="mb-2">
                <i className="fas fa-check-circle mr-2 text-green-500 w-5 h-5"></i>{' '}
                Get a month's worth of daily React challenges for the price of a
                coffee!
              </li>
            </ul>

            <h2 className="text-xl font-bold text-white mb-5">
              Example solution:
            </h2>
            {/* <h2 className="text-xl font-bold text-white mb-5">Explanation</h2>
    <p className='text-lg leading-relaxed text-white mb-8'>The component uses two state variables: website and qrUrl. The website state variable holds the value of the website input field, and the qrUrl state variable holds the URL of the QR code image.

The component has a single form element with a text input field for the website URL and a submit button. When the form is submitted, the component's handleSubmit function is called, which prevents the default form submission behavior and sets the qrUrl state variable to the URL of a QR code image generated by the QR Server API. The handleSubmit function is passed as the onSubmit prop to the form element.

The component also has a div element with the class name "qr-holder". If the qrUrl state variable is truthy (i.e., not an empty string), the div element will render an img element with the src attribute set to the value of the qrUrl state variable.</p>
     */}
            <div className="relative">
              <div className="absolute -top-16 right-0 p-2 bg-blue-900 text-white rounded-2xl ">
                {`Edit in CodePen to Save `}
                <i className="fa fa-arrow-down w-4 h-4" aria-hidden="true"></i>
              </div>

              <iframe
                height="600"
                style={{ width: '100%' }}
                scrolling="no"
                title="QR Code (solution)"
                src="https://codepen.io/reactteacher/embed/zYLrYRE/71d72d726ae3a70d8d21b9096d8ea599?default-tab=js%2Cresult&editable=true"
                loading="lazy"
              >
                See the Pen{' '}
                <a href="https://codepen.io/reactteacher/pen/zYLrYRE/71d72d726ae3a70d8d21b9096d8ea599">
                  QR Code (solution)
                </a>{' '}
                by Max (
                <a href="https://codepen.io/reactteacher">@reactteacher</a>) on{' '}
                <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </div>
          </div>

          <div className="bg-transparent py-12 px-5">
            <div className="lg:flex flex-row lg:flex-row-reverse">
              <div className="lg:w-1/2">
                {/* <Image src={home1} alt="My Image" className="w-full h-auto" /> */}
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold text-sky-300 mb-5">
                  Elevate Your React Skills
                </h2>
                <h2 className="text-xl font-bold">
                  Don't just take our word for it...
                </h2>
                <p className="text-white text-lg">
                  Try it out for yourself for free and see the benefits of daily
                  practice. Subscribe to our service to start learning and
                  improving today by getting detailed explanations and
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-transparent py-12">
            {/* <h1 className="text-2xl font-bold text-center text-white mb-8">Testimonials</h1> */}
            <div className="container mx-auto ">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-gray-600 text-xl leading-relaxed mb-2 font-semibold">
                      A Lifesaver for{' '}
                      <span className="text-orange-500 font-bold">
                        University Students
                      </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4 text-zinc-500">
                      "The variety of questions and explanations provided
                      solidified my understanding of the concepts and allowed me
                      to confidently apply them in my projects."
                    </p>
                    <div className="text-zinc-900 text-sm mb-2">Ethan Park</div>
                    <div className="flex items-start flex-row">
                      <Image
                        src={testimonial1}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                        width="50"
                        height="50"
                      />
                      <div className="flex items-center my-4">
                        <i className="fas fa-star w-5 h-5 text-yellow-500 inline-block"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500 inline-block"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500 inline-block"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500 inline-block"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500 inline-block"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-gray-600 text-xl leading-relaxed mb-2 font-semibold">
                      The Perfect Resource for{' '}
                      <span className="text-orange-500 font-bold">
                        Career Switchers
                      </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4 text-zinc-500">
                      "The concise, clear explanations helped me grasp the
                      concepts quickly and efficiently, and I am now confident
                      in my React skills."
                    </p>
                    <div className="text-zinc-900 text-sm mb-2">Zara Patel</div>
                    <div className="flex items-start flex-row">
                      <Image
                        src={testimonial2}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                        width="50"
                        height="50"
                      />
                      <div className="flex items-center my-4">
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-gray-600 text-xl leading-relaxed mb-2 font-semibold">
                      A Must-Have for Self Taught{' '}
                      <span className="text-orange-500 font-bold">
                        Web Developers
                      </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4 text-zinc-500">
                      "ReactTeacher has been a game-changer packed with valuable
                      information and exercises that have helped me improve my
                      skills and become more proficient in React."
                    </p>
                    <div className="text-zinc-900 text-sm mb-2">
                      James Rodriguez
                    </div>
                    <div className="flex items-start flex-row">
                      <Image
                        src={testimonial3}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                        width="50"
                        height="50"
                      />
                      <div className="flex items-center my-4">
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                        <i className="fas fa-star w-5 h-5 text-yellow-500"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
