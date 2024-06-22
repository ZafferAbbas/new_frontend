// /app/(auth)/set-password/SetPasswordSection.tsx
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { resetPassword } from '@/lib/services/userAuth';
import { toast } from 'sonner';

const SetPasswordSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();



  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const resetPasswordHandler = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await resetPassword(token, { newPassword });
      if (response.status === 200) {
        toast.success('Password reset successfully');
        router.push('/signin');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Failed to reset password');
      console.error(error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={(e) => { e.preventDefault(); resetPasswordHandler(); }}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              className="form-input w-full"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              className="form-input w-full"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
            Reset Password <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetPasswordSection;
