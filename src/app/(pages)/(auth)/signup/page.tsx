"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import ArtistBookLogo from "../../../../../assets/ArtistsBookLogo.svg";
import AuthCover from "../../../../../assets/AuthCoverImage.jpg";
import SignupImage from "../../../../../assets/SignupImage.jpg";
import Google from "../../../../../assets/Google.svg";
import Facebook from "../../../../../assets/Facebook.svg";
import Apple from "../../../../../assets/Apple.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <div className="lg:m-0 lg:p-0 lg:h-screen lg:overflow-hidden lg:fixed lg:w-screen">
      <div className="flex flex-col h-screen">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={AuthCover}
            className="hidden md:hidden lg:block lg:absolute lg:opacity-20 lg:mix-blend-multiply lg:w-full"
            width={1537}
            height={1025}
            alt="Auth Cover Image"
          />
          <Image
            src={ArtistBookLogo}
            className="w-[8.055rem] h-[3rem] mt-12 md:w-[15.33rem] md:h-[5.063rem] md:mt-20 lg:w-[12.313rem] lg:h-[3.058rem] lg:mt-[2.438rem] lg:ml-[2.438rem] "
            alt="Artist Book Logo"
          />
        </div>
        <div className=" pt-[1.563rem] md:pt-[2.438rem] lg:pt-0 overflow-hidden">
          <div className="md:flex md:justify-center md:items-center md:w-full md:h-full">
            <div className="md:rounded-2xl md:flex md:shadow-2xl md:overflow-hidden md:bg-white md:backdrop-blur-md md:h-[650px] md:w-[500px] md:border-2 lg:w-[1000px] lg:h-[600px] lg:overflow-hidden">
              <div className="lg:w-[50%] md:w-full md:h-full md:flex md:flex-col">
                <Card className="border-none shadow-none bg-transparent md:w-full md:h-full lg:h-full lg:mt-[2rem] lg:ml-[0.5rem]">
                  <CardHeader className="pt-0 md:pt-[40px] pb-2">
                    <CardTitle className="text-center justify-center text-emerald-800 text-3xl md:text-4xl font-bold font-['Montserrat']">
                      SIGN UP
                    </CardTitle>
                  </CardHeader>

                  <form className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-3 w-[20rem] ml-[3.125rem] mt-[0.5rem] md:w-[calc(100%-4rem)] md:ml-[2rem] md:gap-2.5">
                      <div className="grid gap-2">
                        <Label
                          htmlFor="username"
                          className="text-black text-sm font-normal font-poppins"
                        >
                          Username
                        </Label>
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your Username"
                          required
                          className="bg-zinc-100 text-stone-500 text-xs font-normal font-poppins h-9"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label
                          htmlFor="email"
                          className="text-black text-sm font-normal font-poppins"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your Email"
                          required
                          className="bg-zinc-100 text-stone-500 text-xs font-normal font-poppins h-9"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label
                          htmlFor="password"
                          className="text-black text-sm font-normal font-poppins"
                        >
                          Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={password ? "text" : "password"}
                            placeholder="Enter your Password"
                            required
                            className="bg-zinc-100 text-stone-500 text-xs font-normal font-poppins pr-10 h-9"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                            onClick={() => setPassword(!password)}
                          >
                            {password ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label
                          htmlFor="confirm-password"
                          className="text-black text-sm font-normal font-poppins"
                        >
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="confirm-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your Password"
                            required
                            className="bg-zinc-100 text-stone-500 text-xs font-normal font-poppins pr-10 h-9"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex gap-3 ml-[4rem] mt-2 md:hidden">
                        <div className="bg-white rounded-full w-14 h-9 border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-[16px] py-[6px]">
                          <Image src={Google} alt="Google" />
                        </div>
                        <div className="bg-white rounded-full w-14 h-9 border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-[16px] py-[6px]">
                          <Image src={Facebook} alt="Facebook" />
                        </div>
                        <div className="bg-white rounded-full w-14 h-9 border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-[16px] py-[6px]">
                          <Image src={Apple} alt="Apple" />
                        </div>
                      </div>

                      <p className="text-center font-normal font-poppins text-xs md:hidden mt-2">
                        Already have an account?{" "}
                        <Link
                          href="/signin"
                          className="underline underline-offset-2 text-blue-600 font-poppins"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 ml-[6.7rem] mt-[2rem] md:w-full md:px-[2rem] md:pb-[2rem] md:ml-0 lg:mt-[1.5rem] lg:ml-0">
                      <Button
                        type="submit"
                        className="bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out w-[100px] text-sm font-bold font-poppins h-[40px] rounded-xl ml-[3.125rem] md:w-full md:ml-0"
                      >
                        SIGN UP
                      </Button>

                      <div className="hidden md:flex md:gap-3 md:w-full md:items-center md:justify-center lg:mt-2">
                        <div className="bg-white rounded-full w-12 h-9 border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-[12px] py-[6px]">
                          <Image src={Google} alt="Google" />
                        </div>
                        <div className="bg-white rounded-full w-12 h-9 border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-[12px] py-[6px]">
                          <Image src={Facebook} alt="Facebook" />
                        </div>
                        <div className="bg-white rounded-full w-12 h-9 border-2 border-gray-200 hover:scale-105 duration-200 ease-in-out px-[12px] py-[6px]">
                          <Image src={Apple} alt="Apple" />
                        </div>
                      </div>

                      <p className="hidden md:text-center md:font-normal md:font-poppins md:text-xs md:block">
                        Already have an account?{" "}
                        <Link
                          href="/signin"
                          className="underline underline-offset-2 text-blue-600 font-poppins"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </form>
                </Card>
              </div>
              <div className="hidden lg:flex lg:w-[50%] lg:bg-white lg:backdrop-blur-md lg:items-center lg:justify-center">
                <Image
                  src={SignupImage}
                  className="object-cover w-full h-full"
                  alt="Signup Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
