import Link from 'next/link';

import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';


const HamburgerMenu = ({ isOpen, onClick }:any) => {
  const user = useUser()
  return (
    <div className={`w-3/4 bg-sky-700 absolute  z-50 top-0 ${isOpen?'animate-[menuSlideIn_.25s_ease-in-out]':'hidden'}`} style={{height:'100%'}}>
    <button
      onClick={onClick}
      className='float-right m-4'
    >

        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        </svg>
      
    </button>
            <div  onClick={onClick}>
            
            <div className="flex flex-col gap-y-3 text-lg m-12">
            <Link href="/">
              <a aria-label="Logo">
                Home
                {/* <Logo  className='m-2'/> */}
              </a>
            </Link>
            <Link href="/today">
                <a>Today's Challenge</a>
              </Link>
              <Link href="/solve">
                <a >Archives</a>
              </Link>
              <Link href="/plans">
                <a>Pricing</a>
              </Link>
              {user && (
                <Link href="/account">
                  <a >Account</a>
                </Link>
              )}
              </div>
              </div>
    </div>
  );
};

export default HamburgerMenu;
