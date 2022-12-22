import React,{useState, useEffect} from "react";
import { useRouter } from 'next/router'
import Button from "@/components/ui/Button";
import Link from 'next/link';
import { useUser } from 'utils/useUser';
import { useDate } from 'utils/useDate';
import "@uiw/react-textarea-code-editor/dist.css";
import data from '../assets/data/data.json'

interface challenge{
  prompt:string,
  skeleton:string,
  tipsFree:string,
  explanation:string,
  solution:string
}
const currentDate=useDate()
const challenge: challenge = data[currentDate];

function today() {
    const router=useRouter()
    
    const [reveal, setReveal] = useState(false);
    const [loaded, setLoaded]=useState(false)
    const { user, isLoading, subscription } = useUser();
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
        script.async = true;
        document.body.appendChild(script);
        setLoaded(true)
        
        return () => {
        document.body.removeChild(script);
        };
    }, [reveal,'']);
    
  
  if(!challenge){
    router.reload()
  }
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <div className="grid grid-cols-1 gap-x-12  animate-[fadeIn_1s_ease-in-out]">
        <div className="">
          <h1 className="text-3xl font-light text-white py-3">
            Today's puzzle
          </h1>
          <p className="text-md py-3">{challenge?.prompt}</p>
          <h1 className="text-3xl font-light text-white py-3">
            Start with this
          </h1>
          <div className="py-3">
            {/* this one is nice */}
            {<p
              className="codepen"
              data-height="600"
              data-default-tab="js,result"
              data-slug-hash={challenge?.skeleton}
              data-editable="true"
              data-user="codepen"
            >
              <span>
                See the Pen{' '}
                <a href={`https://codepen.io/reactteacher/pen/${challenge?.skeleton}`}>
                  React Function Component Examples
                </a>{' '}
                by CodePen (
                <a href="https://codepen.io/team/reactteacher">@codepen</a>) on{' '}
                <a href="https://codepen.io">CodePen</a>.
              </span>
            </p>}
          </div>
          <h1 className="text-3xl font-light text-white py-3">Tips</h1>
          <p className="text-md py-3">{challenge?.tipsFree}</p>
          <div>
            <Button
              variant="slim"
              type="button"
              onClick={() => setReveal((r) => !r)}
              className={`mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900 w-96 ${
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
                  {subscription ? (
                    <div className="py-12">
                      <h1 className="text-3xl font-light text-white py-3">
                        Explanation
                      </h1>
                      <p className="text-md py-3">{challenge?.explanation}</p>
                      
                      <div className="py-12">
                      {<p
                        className="codepen"
                        data-height="600"
                        data-default-tab="js,result"
                        data-slug-hash={challenge?.solution}
                        data-editable="true"
                        data-user="codepen"
                        >
                        <span>
                            See the Pen{' '}
                            <a href={`https://codepen.io/team/codepen/pen/${challenge?.solution}`}>
                            React Function Component Examples
                            </a>{' '}
                            by CodePen (
                            <a href="https://codepen.io/team/codepen">@codepen</a>) on{' '}
                            <a href="https://codepen.io">CodePen</a>.
                        </span>
                        </p>}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <div className="col-span-1  max-w-lg">
                        {/* <h2 className="text-3xl font-light">
                          Ready to Become a React Master?
                        </h2>
                        <p className="py-3">
                          Sign up for premium to view solutions.
                        </p> */}
                        <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-cyan-500">
                          <div className="p-6">
                            <h2 className="md:text-2xl text-xl font-medium white">
                              Want to improve your react skills?
                            </h2>
                            <ul className="mt-4 text-zinc-300">
                              <li>Make coding a routine</li>
                              <li>Unlock answers to check your work</li>
                              <li>Get in-depth explanations</li>
                              <li>View all previous challenges</li>
                            </ul>
                            <p className="mt-8">
                            <span className="md:text-2xl text-xl font-medium white">
                                Get a Free Trial (No Card Required)
                              </span>
                            </p>
                            <Link href="/plans">
                              <Button
                                variant="slim"
                                type="button"
                                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                              >
                                Get the solution
                              </Button>
                            </Link>
                          </div>
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

export default today;