import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
                <p className="text-sm text-slate-500 mt-1">
                    Login with ZapShift
                </p>
            </div>

            {/* Form */}
            <form className="space-y-4">

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        required
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>

                {/* Forgot password */}
                <div className=" ">
                    <button
                        type="button"
                        className="text-sm  hover:underline"
                    >
                        Forgot password?
                    </button>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-teal-700   font-semibold py-2.5 rounded-lg transition duration-300"
                >
                    Login
                </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-slate-300" />
                <span className="px-3 text-sm text-slate-500">OR</span>
                <div className="flex-1 h-px bg-slate-300" />
            </div>
            {/* Google Login */}
            <button

                className="w-full flex items-center justify-center gap-3 border border-slate-300 rounded-lg py-2.5 hover:bg-slate-50 transition"
            >
                <FcGoogle className="text-xl" />
                <span className="font-medium text-slate-700">
                    Continue with Google
                </span>
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-slate-600 mt-6">
                Don’t have an account?
                <Link to='/register'>
                    <span className="text-teal-600 font-medium cursor-pointer hover:underline ml-1">
                        Sign up
                    </span>
                </Link>

            </p>
        </div>

    );
};

export default Login;