"use client";

import { useRouter } from "next/navigation";
import Logo from "@/app/shared/logo";

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <Logo className="text-4xl" />
          <p className="text-zinc-600 mb-8 pt-5">
            Sign in to access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 mb-2"
              >
                Email
              </label>
              <input

                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 text-black py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-zinc-50"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border text-black border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-zinc-50"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-primary focus:ring-primary border-zinc-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-zinc-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-primary hover:text-primary-dark"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-zinc-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12">
        <div className="max-w-lg text-white">
          <h2 className="text-5xl font-bold mb-6">
            Simplify Compliance Management
          </h2>
          <p className="text-xl text-white/90 mb-8">
            "Redefining how businesses handle filings. Powerful automation and expert precision to keep your operations running smoothly."
          </p>
        </div>
      </div>
    </div>
  );
}
