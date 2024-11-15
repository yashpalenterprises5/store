import { Metadata } from "next";
import Link from "next/link";
import RegistrationForm from "@/components/forms/auth/registration-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Registration page for new users.",
};

export default function RegistrationPage() {
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
        <RegistrationForm />
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our{" "}
          <Link className="text-blue-700 underline" href="/terms">
            terms and conditions
          </Link>{" "}
          and{" "}
          <Link className="text-blue-700 underline" href="/privacy">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
