"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/stores/auth";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const registrationFormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z.string(),
    emailingList: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const phoneVerificationFormSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;
type PhoneVerificationFormValues = z.infer<typeof phoneVerificationFormSchema>;

export default function RegistrationForm() {
  const [showOtpAlert, setShowOtpAlert] = useState(false);
  const { toast } = useToast();
  const { registerUser, requestOtp, verifyPhone, loading } = useAuth();
  const router = useRouter();

  const registrationForm = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      emailingList: false,
    },
  });

  const phoneVerificationForm = useForm({
    resolver: zodResolver(phoneVerificationFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onRegistrationSubmit = async (values: RegistrationFormValues) => {
    await registerUser({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      password: values.password,
    }).then((response) => {
      if (response.success) {
        toast({
          title: "Registration successful",
          description: "Please check your email for verification instructions",
        });
        requestOtp(values.phone).then(() => {
          setShowOtpAlert(true);
        });
      } else {
        toast({
          title: "Registration failed",
          description:
            response.message ||
            "An error occurred while creating your account.",
          variant: "destructive",
        });
      }
    });
  };

  const onPhoneVerificationSubmit = async (
    values: PhoneVerificationFormValues
  ) => {
    await verifyPhone(registrationForm.getValues("phone"), values.otp).then(
      (response) => {
        if (response.success) {
          router.push("/login");
          toast({
            title: "Phone verification successful",
            description: "You can now login to your account",
          });
        } else {
          toast({
            title: "Phone verification failed",
            description:
              response.message || "An error occurred while verifying your OTP",
            variant: "destructive",
          });
        }
      }
    );
  };

  return (
    <>
      <Form {...registrationForm}>
        <form
          onSubmit={registrationForm.handleSubmit(onRegistrationSubmit)}
          className={cn("space-y-2", showOtpAlert ? "hidden" : "block")}
        >
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={registrationForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registrationForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={registrationForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registrationForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0000000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0">
            <FormField
              control={registrationForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="•••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registrationForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="•••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={registrationForm.control}
              name="emailingList"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2 items-center pt-1">
                      <Checkbox aria-label="recive event and product related emails" />
                      <FormLabel className="text-sm font-normal leading-tight">
                        I want to receive emails about events, product updates
                        and company announcements.
                      </FormLabel>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="md:flex flex-row items-center gap-4 pt-3">
            <Button
              type="submit"
              className="w-full md:w-fit"
              size="lg"
              disabled={loading}
            >
              {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              Create an Account 🚀
            </Button>
            <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 underline">
                Log in
              </a>
              .
            </p>
          </div>
        </form>
      </Form>
      <Form {...phoneVerificationForm}>
        <form
          onSubmit={phoneVerificationForm.handleSubmit(
            onPhoneVerificationSubmit
          )}
          className={cn(showOtpAlert ? "block" : "hidden")}
        >
          <FormField
            control={phoneVerificationForm.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">OTP</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:flex flex-row items-center gap-4 pt-3">
            <Button
              type="submit"
              className="w-full md:w-fit"
              size="lg"
              disabled={loading}
            >
              {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              Verify 📱
            </Button>
            <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
              Didn't receive the OTP?{" "}
              <button
                type="button"
                onClick={async () => {
                  await requestOtp(registrationForm.getValues("phone"));
                  toast({
                    title: "OTP resent",
                    description: "Please check your phone for the OTP",
                  });
                }}
                className="text-blue-600 underline"
              >
                Resend OTP
              </button>
              .
            </p>
          </div>
        </form>
      </Form>
    </>
  );
}
