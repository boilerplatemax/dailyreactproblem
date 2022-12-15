import React,{useState} from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import Link from 'next/link';
import { useUser } from 'utils/useUser';
import "@uiw/react-textarea-code-editor/dist.css";
import data from '../assets/data/data.json'

interface challenge{
  prompt:string,
  skeleton:string,
  tipsFree:string,
  explanation:string,
  solution:string
}

const dynamic2:any =dynamic

const date_1 = new Date('12/14/2022');
const date_2 = new Date();
  
  const days = (date_1:any, date_2:any) =>{
      let difference = date_2.getTime()-date_1.getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return TotalDays-1;
  }
const challenge:challenge = data[days(date_1,date_2)]

const CodeEditor = dynamic2(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

function home() {

  const { user, isLoading, subscription } = useUser();

  const [reveal,setReveal]=useState(false)

  const [skeleton, setSkeleton] = useState(
    challenge?.skeleton
  );
  const [solution, setSolution] = useState(
    challenge?.solution
  );
  return (
    <div className='2xl:px-48 py-3 px-4 min-h-screen'>
      <div className='grid xl:grid-cols-3 grid-cols-1 gap-x-12  animate-[fadeIn_1s_ease-in-out]'>
        
        <div className='col-span-1 xl:col-span-2'>
        <h1 className='text-5xl font-extrabold text-white py-3'>Today's puzzle</h1>
          <p className='text-md py-3'>
          {challenge?.prompt}
          </p>
          <h1 className='text-5xl font-extrabold text-white py-3'>Start with this</h1>
          <div className=' py-3'>
            <CodeEditor
              value={skeleton}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn:any) => setSkeleton(evn.target.value)}
              padding={12}
              style={{
                fontSize: 14,
                backgroundColor: "#1e1e1e",
                borderRadius:'12px',
                color:'white',
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
              }}
            />
          </div>
          <h1 className='text-5xl font-extrabold text-white py-3'>Tips</h1>
          <p className='text-md py-3'>
          {challenge?.tipsFree}
          </p>
            <div>
            <Button
                variant="slim"
                type="button"
                onClick={()=>setReveal(r=>!r)}
                className={`mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900 w-96 ${!reveal&&'hover:animate-[wiggle_.25s_ease-in-out_infinite]'}`}
              >
                {reveal?'Hide Solution':'Reveal Solution'}
              </Button>
              {/* solution */}
              <div className='mb-8'>
                {reveal&&
                <>
                {/* change true to subscription to start chargin for service */}
                {true?
                <div className='py-12'>
                  <h1 className='text-5xl font-extrabold text-white py-3'>Explanation</h1>
                  <p className='text-md py-3'>{challenge.explanation}</p>
                  <div className='py-12'>
                <CodeEditor
                  value={solution}
                  language="js"
                  placeholder="Please enter JS code."
                  onChange={(evn:any) => setSkeleton(evn.target.value)}
                  padding={12}
                  style={{
                    fontSize: 14,
                    backgroundColor: "#1e1e1e",
                    borderRadius:'12px',
                    color:'white',
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                  }}
                />
                </div>
                </div>
                :
                <div className='mt-8'>
                 
                  
            <div className='col-span-1  max-w-lg'>
            <h2 className='text-5xl font-extrabold'>Ready to Become a React Master?</h2>
            <p className='py-3'>Sign up for premium to view solutions.</p>
            <div
                className=
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-cyan-500'
              >
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                  Want to improve your react skills?
                  </h2>
                  <p className="mt-4 text-zinc-300">Get a subscription for cheaper than a cup of coffee!</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      $1.99
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      /month
                    </span>
                  </p>
                  <Link href='/plans'>
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
                }
              </>
                
                }
                
              </div>
            </div>
        </div>
        {/* {!subscription&&<div className='col-span-1'>
            <h2 className='text-5xl font-extrabold py-3'>Become a React Master</h2>
            <div
                className=
                  'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-cyan-500'
              >
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                  Want to improve your react skills?
                  </h2>
                  <p className="mt-4 text-zinc-300">Get a subscription for cheaper than a cup of coffee!</p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold white">
                      $1.99
                    </span>
                    <span className="text-base font-medium text-zinc-100">
                      /month
                    </span>
                  </p>
                  <Link href='/plans'>
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

        </div>} */}
      </div>
    </div>
  );
}

export default home;