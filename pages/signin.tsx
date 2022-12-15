import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import LoadingDots from 'components/ui/LoadingDots';
import Logo from 'components/icons/Logo';
import { getURL } from '@/utils/helpers';
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
        <div className="flex flex-col justify-between max-w-lg p-12 m-auto w-96  bg-zinc-100 rounded-xl">
          <div className="flex justify-center pb-12">
            <Logo width="64px" height="64px" />
          </div>
          <div className="flex flex-col space-y-4">
            <Auth
              
              supabaseClient={supabaseClient}
              providers={['github','google']}
              redirectTo={getURL()}
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
