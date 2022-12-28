import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import LoadingDots from 'components/ui/LoadingDots';
import Logo from 'components/icons/Logo';
import { getURL } from '@/utils/helpers';
import Image from 'next/image';
import logo from 'assets/images/logo.png';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

const SignIn = () => {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  if (!user)
    return (
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-12 m-auto w-96  bg-white rounded-xl">
          <div className="flex justify-center">
            <h1 className="text-zinc-900 font-semibold">ReactTeacher</h1>
          </div>
          <div className="w-12 h-12 m-auto">
            <Image
              src={logo}
              alt="Avatar"
              className="w-12 h-12 rounded-full mr-4 block"
              width="50"
              height="50"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Auth
              supabaseClient={supabaseClient}
              providers={['google']}
              redirectTo={`https://www.reactteacher.com/`}
              magicLink={true}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#312e81',
                      brandAccent: '#5b21b6'
                    }
                  }
                }
              }}
              theme="light"
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
