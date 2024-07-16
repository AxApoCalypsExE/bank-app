"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import CustomForm from "@/components/custom-form";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with appwrite and create plaid token

      if (type === "sign-up") {
        const newUser = await signUp(data);

        setUser(newUser);
      }

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })

        if (response) {
          router.push("/")
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Corenell" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Corenell
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
          <ModeToggle />
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomForm
                      form={form}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomForm
                      form={form}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                    <CustomForm
                      form={form}
                      name="address1"
                      label="Address"
                      placeholder="Enter your address"
                    />
                    <CustomForm
                      form={form}
                      name="city"
                      label="City"
                      placeholder="Enter your city"
                    />
                  <div className="flex gap-4">
                    <CustomForm
                      form={form}
                      name="state"
                      label="State"
                      placeholder="ex: NY"
                    />
                    <CustomForm
                      form={form}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 91917"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomForm
                      form={form}
                      name="dob"
                      label="Date of Birth"
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomForm
                      form={form}
                      name="ssn"
                      label="SSN"
                      placeholder="1234"
                    />
                  </div>
                </>
              )}
              <CustomForm
                form={form}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomForm
                form={form}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button
                  disabled={isLoading}
                  className="form-btn"
                  type="submit"
                >
                  {isLoading ? (
                    <>
                      <Loader2
                        size={20}
                        className="animate-spin"
                      /> &nbsp; Loading...
                    </>
                  ) : type === "sign-in"
                    ? "Sign In" : "Sign Up"
                  }
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
                <p className="text-14 font-normal text-gray-600">
                  {type === "sign-in"
                    ? "Don't have an account?"
                    : "Already have an account?"
                  }
                </p>
                <Link
                  className="form-link"
                  href={type === "sign-in"
                    ? "/sign-up" : "/sign-in"
                  }
                >
                  {type === "sign-in"
                    ? "Sign Up" : "Sign In"
                  }
                </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
