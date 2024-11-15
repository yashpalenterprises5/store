"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/stores/auth";
import { cn } from "@/lib/utils";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const phoneSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type PhoneFormValues = z.infer<typeof phoneSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;
type EmailFormValues = z.infer<typeof emailSchema>;

export default function LoginForm() {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const { toast } = useToast();
  const { requestOtp, loginWithPhone, loginWithEmail, loading } = useAuth();
  const router = useRouter();

  const phoneForm = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onPhoneSubmit = async (values: PhoneFormValues) => {
    try {
      await requestOtp(values.phone);
      setShowOtpForm(true);
      toast({
        title: "OTP sent",
        description: "Please check your phone for the OTP",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onOtpSubmit = async (values: OtpFormValues) => {
    try {
      const response = await loginWithPhone(
        phoneForm.getValues("phone"),
        values.otp
      );
      if (response.success) {
        router.push("/");
        toast({
          title: "Login successful",
          description: "You have been logged in successfully",
        });
      } else {
        toast({
          title: "Login failed",
          description: response.message || "Invalid OTP. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while logging in. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onEmailSubmit = async (values: EmailFormValues) => {
    try {
      const response = await loginWithEmail(values.email, values.password);
      if (response.success) {
        router.push("/");
        toast({
          title: "Login successful",
          description: "You have been logged in successfully",
        });
      } else {
        toast({
          title: "Login failed",
          description:
            response.message || "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while logging in. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Tabs defaultValue="email" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Phone</TabsTrigger>
      </TabsList>
      <TabsContent value="phone" className="mt-4">
        <div className="space-y-6">
          <Form {...phoneForm}>
            <form
              onSubmit={phoneForm.handleSubmit(onPhoneSubmit)}
              className={cn(showOtpForm ? "hidden" : "block")}
            >
              <FormField
                control={phoneForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="XXXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full mt-4"
                size="lg"
                disabled={loading}
              >
                {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                Send OTP
              </Button>
            </form>
          </Form>

          <Form {...otpForm}>
            <form
              onSubmit={otpForm.handleSubmit(onOtpSubmit)}
              className={cn(showOtpForm ? "block" : "hidden")}
            >
              <FormField
                control={otpForm.control}
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
              <div className="flex flex-col space-y-4 mt-4">
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading}
                >
                  {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                  Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={async () => {
                    try {
                      await requestOtp(phoneForm.getValues("phone"));
                      toast({
                        title: "OTP resent",
                        description: "Please check your phone for the new OTP",
                      });
                    } catch (error) {
                      toast({
                        title: "Error",
                        description: "Failed to resend OTP. Please try again.",
                        variant: "destructive",
                      });
                    }
                  }}
                  className="w-full"
                >
                  Resend OTP
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </TabsContent>
      <TabsContent value="email" className="mt-4">
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(onEmailSubmit)}
            className="space-y-4"
          >
            <FormField
              control={emailForm.control}
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
              control={emailForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Link href="/forgot-password" className="text-sm text-blue-600">
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
}
