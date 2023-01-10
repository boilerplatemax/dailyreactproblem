import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUser } from 'utils/useUser';
import { useDate } from 'utils/useDate';
import { usePayWall } from 'utils/useFeature';
import { useNewsLetter } from 'utils/useFeature';
import '@uiw/react-textarea-code-editor/dist.css';

interface challenge {
  title: string;
  emoji: string;
  prompt: string;
  skeleton: string;
  tipsFree: string;
  explanation: string;
  solution: string;
  difficulty: number;
}const currentDate = useDate();



const today = () => {
  
  const payWall = usePayWall();
  const newsLetter = useNewsLetter();

  const router = useRouter();


  useEffect(() => {

    router.replace(`/solve/${currentDate+1}` );

  }, []);
  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <div className="grid grid-cols-1 gap-x-12  animate-[fadeIn_1s_ease-in-out]">
        
      </div>
    </div>
  );
};

export default today;
