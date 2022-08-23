import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import appLogos from '../../images/app-logos.png'

const SignInForm = ({ changeAction }) => {
	const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			if (
				values.email.length >= 5 &&
				values.email.length <= 70 &&
				values.password.length >= 6 &&
				values.password.length <= 20
			) {
				navigate("/dashboard/")
			} else {
				alert(
					'Email cannot be less than 5 characters and more than 70 ones.\n Password cannot be less than 8 characters and more than 25 ones.'
				);
			}
		},
	});
	return (
		<div className="bg-white shadow-lg rounded-lg p-4 md:w-96 w-72">
			<p className="">Hello, 👋</p>
			<h1 className="text-lg font-semibold">Welcome to the black parade</h1>
			<p className="text-gray-400">Please enter your details here</p>
			<form onSubmit={formik.handleSubmit} className="flex flex-col space-y-2">
				<label htmlFor="email">Email or Username</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					className="bg-gray-200 border-2 border-gray-300 rounded-md text-gray-800 px-4 py-2"
					placeholder="Email"
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					className="bg-gray-200 border-2 border-gray-300 rounded-md text-gray-800 px-4 py-2"
					placeholder="Password"
				/>
				<button
					className="bg-primary my-10 p-2 font-semibold text-white rounded-md"
					type="submit"
				>
					Log In
				</button>
			</form>
			<p className="text-right text-blue-600 underline cursor-pointer my-2">
				Forgot Password?
			</p>
			<div className="flex items-center justify-between">
				<hr className="border-2 w-full" />
				<p className="text-gray-400 mx-2">Or</p>
				<hr className="border-2 w-full" />
			</div>
			<div className="my-4 text-center">
				<p>Login using</p>
				<img src={appLogos} className="mx-auto mt-1" alt="app logos" />
			</div>
			<div className="flex justify-center space-x-1">
				<p>{'Not registered? '}</p>
				<p
					className="underline text-blue-600 cursor-pointer"
					onClick={changeAction}
				>
					Create an account
				</p>
			</div>
		</div>
	);
};
 
export default SignInForm;