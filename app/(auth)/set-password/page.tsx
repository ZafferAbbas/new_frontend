// /app/(auth)/reset-password/page.tsx

import React from 'react';
import SetPasswordSection from './SetPasswordSection';
import AuthLogo from '../auth-logo';

const metadata = {
  title: 'Reset Password - Stellar',
  description: 'Page description',
};

const ResetPasswordPage = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center pb-12">
        <AuthLogo />
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
          Reset your password
        </h1>
      </div>
      <SetPasswordSection />
    </>
  );
};

export default ResetPasswordPage;
