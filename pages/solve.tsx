import React from 'react';
import Link from 'next/link';
import data from 'assets/data/data.json';
import { useDate } from '@/utils/useDate';
import { useUser } from 'utils/useUser';
import { usePayWall } from 'utils/useFeature';

type Props = {};

interface challenge {
  title: string;
}

const solve = (props: Props) => {
  const { user, isLoading, subscription } = useUser();
  const payWall = usePayWall();
  const currentDate = useDate();
  data.length = currentDate;
  
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <h2 className="text-2xl py-2 font-light">Past Challenges</h2>
      <hr />
      <ul
        className={`flex-col-reverse flex ${
          !subscription && payWall && 'archive-list'
        }`}
      >
        {data.map((challenge, index) => {
          return (
            <li className="py-5 p-4 w-full">
              <Link href={{ pathname: `/solve/${index+1}` }}>
                <a>
                  <div className="flex items-center">
                    <span className="text-xl">Challenge #{index + 1}</span>
                    <span className="text-3xl">{challenge.emoji}</span>
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
