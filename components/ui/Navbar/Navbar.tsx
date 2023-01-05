import React, { useState } from 'react';

import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from 'components/icons/Logo';
import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import {usePayWall} from 'utils/useFeature'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const payWall = usePayWall();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={s.root}>
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto 2xl:px-48 px-8">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-2 items-center">
            <Link href="/">
              <a className={`${s.logo} flex flex-row`} aria-label="Logo">
                <Logo />
                <span className="p-1 text-lg font-bold">ReactTeacher</span>
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              <Link href="/today">
                <a className={s.link}>Today's Challenge</a>
              </Link>
              <Link href="/solve">
                <a className={s.link}>Archives</a>
              </Link>
              {payWall&&<Link href="/plans">
                <a className={s.link}>Pricing</a>
              </Link>}
              {user && (
                <Link href="/account">
                  <a className={s.link}>Account</a>
                </Link>
              )}
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            <div className="lg:hidden block mt-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isMenuOpen && 'hidden'}`}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
            {user ? (
              <span
                className={s.link}
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
