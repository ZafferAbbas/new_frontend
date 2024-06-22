'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { requestPasswordReset } from '@/lib/services/userAuth';
import AuthLogo from '../auth-logo';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Reset Password - Stellar',
  description: 'Page description',
};

export default function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const resetPasswordHandler = async () => {
    if (!email) {
      toast.warning('Please enter your email.');
      return;
    }

    try {
      const response = await requestPasswordReset({ email });

      if (response.status === 200) {
        toast.success('Password reset email sent successfully.');
        // router.push('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error('Failed to reset password. Please try again.');
    }
  };

  const onResetPassword = (e: any) => {
    e.preventDefault();
    resetPasswordHandler();
  };
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Reset your password</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">

        <form onSubmit={onResetPassword}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="email">Email</label>
              <input id="email" className="form-input w-full" type="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="mt-6">
            <button className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
              Reset Password <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
          </div>
        </form>

      </div>
    </>
  )
}
