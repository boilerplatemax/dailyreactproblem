import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useUser } from 'utils/useUser';
import { useDate } from 'utils/useDate';
import { addEmail } from 'utils/supabase-client';
import { getChallenges } from 'utils/supabase-client';
import { usePayWall } from 'utils/useFeature';
import { useNewsLetter } from 'utils/useFeature';
import data from 'assets/data/data.json';

interface challenge {
  title: string;
  emoji: string;
  prompt: string;
  skeleton: string;
  tipsFree: string;
  explanation: string;
  solution: string;
  difficulty: string;
}

function solve() {
  const currentDate = useDate();

  const router = useRouter();
  const payWall = usePayWall();
  const newsLetter = useNewsLetter();
  
  const id: any = router?.query?.solve;
  
  const [reveal, setReveal] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [emailProvided, setEmailProvided] = useState(false);
  const { user, isLoading, subscription } = useUser();
  const [ challenges,setChallenges ] = useState([]);
  useEffect(()=>{
    setEmailProvided(localStorage.getItem("REACTTEACHER_EMAIL")!==null?true:false)
    getChallenges().then(data => setChallenges(data));
  },[])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [reveal, id, emailProvided,challenges,'']);
  const challenge: any = challenges[id-1];
  if (!challenge||id>currentDate+1) {
    return (
      <div className="2xl:px-48 py-3 px-4 min-h-screen">
        <h1 className="text-3xl font-light text-white py-3">
          This challenge can not be found.
        </h1>
      </div>
    );
  }
  const newsLetterSubmitHandler = (e:any) =>{
    const email = e.target.email.value

    e.preventDefault()

    if(!email)return

    setEmailProvided(true)
    addEmail(email)
    localStorage.setItem("REACTTEACHER_EMAIL", email)
    
    //if user then set their email value

    //if is not user then set localstorage email value and add it to db

  }
  // if (!user) {
  //   return (
  //     <div className="2xl:px-48 py-3 px-4 min-h-screen">
  //       <div className="grid grid-cols-1 gap-x-12 max-w-lg animate-[fadeIn_1s_ease-in-out]">
  //         <div className="p-6 bg-blue-900 rounded-xl">
  //           <h2 className="md:text-2xl text-xl font-medium white">
  //             Want to improve your react skills?
  //           </h2>
  //           <ul className="mt-4 text-zinc-300">
  //             <li>Make coding a routine</li>
  //             <li>Unlock answers to check your work</li>
  //             <li>Get in-depth explanations</li>
  //             <li>View all previous challenges</li>
  //           </ul>
  //           <p className="mt-8">
  //             <span className="md:text-2xl text-xl font-medium white">
  //               Sign Up With Google To View Challenge #{id}
  //             </span>
  //           </p>
  //           <Link href={{ pathname: `${payWall ? '/plans' : '/signin'}` }}>
  //             <Button
  //               variant="slim"
  //               type="button"
  //               className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
  //             >
  //               View Challenge #{id}
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (!subscription && payWall && currentDate - 4 > id) {
    return (
      <div className="2xl:px-48 py-3 px-4 min-h-screen">
        <h1 className="text-3xl font-light text-white py-3 mb-5">
          Get premium to view past challenges.
        </h1>
        <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-cyan-500 max-w-md">
          <div className="p-6">
            <h2 className="text-3xl font-extrabold white">
              Want to improve your react skills?
            </h2>
            <ul className="mt-4 text-zinc-300">
              <li>Make coding a routine</li>
              <li>Unlock answers to check your work</li>
              <li>Get in-depth explanations</li>
              <li>View all previous challenges</li>
            </ul>
            <p className="mt-8">
              <span className="text-3xl font-extrabold white">
                Get a Free Trial
              </span>
              {/* <span className="text-base font-medium text-zinc-100 block">
                First 7 days free!
              </span> */}
            </p>
            <Link href={{ pathname: `/plans` }}>
              <Button
                variant="slim"
                type="button"
                className="mt-8 block w-full rounded-md py-2 text-sm font-light text-white text-center hover:bg-zinc-900"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      
      <div className="grid grid-cols-1 gap-x-12  animate-[fadeIn_1s_ease-in-out]">
        <div className="">
          <h1 className="text-3xl font-light text-white py-3">
            Puzzle #{parseInt(id)}: {challenge?.title} {challenge?.emoji}
          </h1>
          <p className="text-md py-3">{challenge?.prompt}</p>
          <h1 className="text-3xl font-light text-white py-3">
            Start with this
          </h1>
          <div className="py-3">
            {loaded && (
              <p
                className="codepen"
                data-height="600"
                data-default-tab="js,result"
                data-slug-hash={challenge?.skeleton}
                data-editable="true"
                data-user="codepen"
              >
                <span>
                  See the Pen{' '}
                  <a
                    href={`https://codepen.io/reactteacher/pen/${challenge.skeleton}`}
                  >
                    React Function Component Examples
                  </a>{' '}
                  by CodePen (
                  <a href="https://codepen.io/team/reactteacher">@codepen</a>)
                  on <a href="https://codepen.io">CodePen</a>.
                </span>
              </p>
            )}
          </div>
          <h1 className="text-3xl font-light text-white py-3">Tips</h1>
          <p className="text-md py-3">{challenge?.tipsFree}</p>
          <div>
            <Button
              variant="slim"
              type="button"
              onClick={() => setReveal((r) => !r)}
              className={`mt-8 block w-full rounded-md py-2 text-sm font-light text-white text-center hover:bg-zinc-900 w-96 ${
                !reveal && 'hover:animate-[wiggle_.25s_ease-in-out_infinite]'
              }`}
            >
              {reveal ? 'Hide Solution' : 'Reveal Solution'}
            </Button>
            {/* solution */}
            <div className="mb-8">
              {reveal && (
                <>
                  {/* change true to subscription to start chargin for service */}
                  {(subscription && payWall) || (!payWall && emailProvided) ? (
                    <div className="py-12">
                      <h1 className="text-3xl font-light text-white py-3">
                        Explanation
                      </h1>
                      <p className="text-md py-3">{challenge?.explanation}</p>

                      <div className="py-12">
                        {loaded && (
                          <p
                            className="codepen"
                            data-height="600"
                            data-default-tab="js,result"
                            data-slug-hash={challenge?.solution}
                            data-editable="true"
                            data-user="codepen"
                          >
                            <span>
                              See the Pen{' '}
                              <a
                                href={`https://codepen.io/team/codepen/pen/${challenge?.solution}`}
                              >
                                React Function Component Examples
                              </a>{' '}
                              by CodePen (
                              <a href="https://codepen.io/team/codepen">
                                @codepen
                              </a>
                              ) on <a href="https://codepen.io">CodePen</a>.
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <div className="col-span-1  max-w-lg">
                        <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-cyan-500">
                          {newsLetter?
                            <div className="p-6">
                            <h2 className="text-lg font-medium white">
                            Subscribe to our React Newsletter to View
                            </h2>


                            <form onSubmit={e=>newsLetterSubmitHandler(e)}>
                           <div className='flex flex-row gap-x-4'>
                           <input className="rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue-500 px-5 py-2 my-4 w-full text-black h-12" name="email" type="email" placeholder="Enter your email"/>
                            
                           <Button
                                variant="slim"
                                type="submit"
                                className="block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900 mt-4 w-1/3 h-12"
                              >
                                View
                              </Button>
                            </div> 
                            <h2 className="text-lg font-medium white">
                            Why Subscribe?
                            </h2>
                            <ul className="mt-4 text-zinc-300">
                            <li>Unlock answers to check your work</li>
                              <li>Access to Job Postings</li>
                              <li>Meet React Developers</li>
                              <li>Get in-depth explanations</li>
                              <li>Get React Tips and Tricks</li>
                              <li>Cancel Anytime</li>
                            </ul>

                            </form>
                          </div>:
                            <div className="p-6">
                            <h2 className="md:text-2xl text-xl font-medium white">
                              Want to Improve Your React Skills?
                            </h2>
                            <ul className="mt-4 text-zinc-300">
                              <li>Make coding a routine</li>
                              <li>Unlock answers to check your work</li>
                              <li>Get in-depth explanations</li>
                              <li>View all previous challenges</li>
                            </ul>
                            <p className="mt-8">
                              <span className="md:text-2xl text-xl font-medium white">
                                {payWall
                                  ? 'Get a Free Trial (No Card Required)'
                                  : 'Sign Up With Google for Solutions'}
                              </span>
                            </p>
                            <Link
                              href={{
                                pathname: `${payWall ? '/plans' : '/signin'}`
                              }}
                            >
                              <Button
                                variant="slim"
                                type="button"
                                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                              >
                                Get the solution
                              </Button>
                            </Link>
                          </div>

                          
                          }
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default solve;
