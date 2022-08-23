import { useFormik } from 'formik';

const SignUpForm = ({ changeAction }) => {
	const formik = useFormik({
		initialValues: {
			userName: '',
			email: '',
			name: '',
			mobileNumber: '',
			password: '',
		},
		onSubmit: (values) => {
			if (
				values.email.length >= 5 &&
				values.email.length <= 70 &&
				values.password.length >= 6 &&
				values.password.length <= 20
			) {
				alert('success');
			} else {
				alert('error');
			}
		},
	});
	return (
		<div className="bg-white shadow-lg rounded-lg p-4 md:w-96 w-72">
			<h1 className="text-lg font-semibold">Create new account?</h1>
			<p className="text-gray-400">
				Create new account to experience the awesomeness of music
			</p>
			<form onSubmit={formik.handleSubmit} className="flex flex-col space-y-2">
				<label htmlFor="username">User Name</label>
				<input
					id="username"
					name="username"
					type="username"
					onChange={formik.handleChange}
					value={formik.values.userName}
					className="bg-gray-100 border-2 border-gray-200 rounded-md text-gray-800 px-4 py-2"
					placeholder="e.g: TomJohn"
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					className="bg-gray-100 border-2 border-gray-200 rounded-md text-gray-800 px-4 py-2"
					placeholder="e.g: example@email.com"
				/>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					name="name"
					type="name"
					onChange={formik.handleChange}
					value={formik.values.name}
					className="bg-gray-100 border-2 border-gray-200 rounded-md text-gray-800 px-4 py-2"
					placeholder="e.g: Tom John"
				/>
				<label htmlFor="mobileNumber">Mobile Number</label>
				<input
					id="mobileNumber"
					name="mobileNumber"
					type="mobileNumber"
					onChange={formik.handleChange}
					value={formik.values.mobileNumber}
					className="bg-gray-100 border-2 border-gray-200 rounded-md text-gray-800 px-4 py-2"
					placeholder="e.g: +0123456789"
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					className="bg-gray-100 border-2 border-gray-200 rounded-md text-gray-800 px-4 py-2"
					placeholder="Minimum 8 characters"
				/>
				<label htmlFor="password">Re-enter Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					className="bg-gray-100 border-2 border-gray-200 rounded-md text-gray-800 px-4 py-2"
					placeholder="Minimum 8 characters"
				/>
				<button
					className="bg-primary my-10 p-2 font-semibold text-white rounded-md"
					type="submit"
				>
					Sign up
				</button>
			</form>
			<div className="bg-gray-300 mt-2 py-2 rounded-md border-2 border-gray-400 text-center">
				<p>Oh, I have account</p>
				<p className="cursor-pointer text-red-500" onClick={changeAction}>
					Login now
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
