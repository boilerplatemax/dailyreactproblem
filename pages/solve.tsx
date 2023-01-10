import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import { useDate } from '@/utils/useDate';
import { useUser } from 'utils/useUser';
import { usePayWall } from 'utils/useFeature';
import { getChallenges } from 'utils/supabase-client';
type Props = {};

interface challenge {
  title: string;
  emoji: string;
}

const solve = (props: Props) => {
  const {user, subscription } = useUser();
  const [challenges, setChallenges]=useState<any[]>([])
  const [loaded, setLoaded] = useState(false);
  const payWall = usePayWall();
  const currentDate = useDate();
  //cuts the length of challenges so that they get revelead as days go by
  // challenges.length = currentDate;
  useEffect(()=>{
    getChallenges().then(data => {
      setChallenges(data)
      setLoaded(true)
    }
    )
    
  },[])
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <h2 className="text-2xl py-2 font-light">Past Challenges</h2>
      <hr />
      <ul
        className={`flex-col-reverse flex `}
      >
        {challenges.map((challenge:challenge, index:number) => {
          return (
            <li className="py-5 p-4 w-full">
              <Link href={{ pathname: `/solve/${index+1}` }}>
                <a>
                  <div className="flex items-center">
                    <span className="text-xl">Challenge #{index + 1}</span>
                    <span className="text-3xl">{challenge?.emoji}</span>
                  </div>
                  <span className="text-md">{challenge?.title} </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default solve;
