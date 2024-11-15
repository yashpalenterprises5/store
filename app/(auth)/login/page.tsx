import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/forms/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to you account.",
};

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center py-12 md:py-0">
      <div className="max-w-xl px-4 md:px-0 space-y-4">
        <div>
          <h1 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Welcome to Squid 🦑
          </h1>
          <p className="mt-2 leading-tight text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>
        <LoginForm />
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link className="text-blue-700 underline" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
