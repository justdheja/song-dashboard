import React, { useState } from 'react';
import SignInForm from '../components/sign-in/SignInForm';
import SignUpForm from '../components/sign-in/SignUpForm';
import logo from '../images/logo.png'
import band from '../images/music-hero-1.png'

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const handleChangeAction = () => {
    setIsSignIn(!isSignIn)
  }
  return (
		<>
			<div className="bg-primary h-screen w-5/12 relative lg:block hidden">
				<img src={logo} className="absolute p-4" alt="logo" />
				<div className="">
					<img src={band} className="absolute right-10 top-52" alt="band" />
				</div>
				<div className="relative">
					<div className="absolute h-screen w-screen inset-0 flex items-center justify-center">
						{isSignIn ? (
							<SignInForm changeAction={handleChangeAction} />
						) : (
							<SignUpForm changeAction={handleChangeAction} />
						)}
					</div>
				</div>
			</div>
			<div className="bg-primary h-screen flex flex-col items-center lg:hidden">
				<img src={logo} className="mx-auto py-4" alt="logo" />
        <SignInForm />
			</div>
		</>
	);
}
 
export default SignIn;