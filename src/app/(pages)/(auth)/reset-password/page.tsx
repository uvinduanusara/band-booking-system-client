"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import ArtistBookLogo from "../../../../../assets/ArtistsBookLogo.svg";
import AuthCover from "../../../../../assets/AuthCoverImage.jpg";
import Lock from "../../../../../assets/Lock.svg";
import Image from "next/image";
import { useState } from "react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        <div className="pt-[2.563rem] md:pt-[78px]">
          <div className="md:flex md:justify-center md:items-center md:w-full">
            <div className="md:rounded-2xl sm:flex md:shadow-2xl md:overflow-hidden md:bg-white md:backdrop-blur-md  md:h-[450px] md:w-[500px] md:border-2 lg:w-[1000px] lg:h-[500px] lg:overflow-hidden">
              <div className="lg:w-[50%]">
                <Card className="border-none shadow-none bg-transparent md:w-full lg:h-full lg:mt-[1.7rem] lg:ml-[2.438rem]">
                  <CardHeader className="pt-1 md:pt-[60px] ">
                    <CardTitle className="text-center justify-center text-emerald-800 text-4xl font-bold font-['Montserrat']">
                      Reset Password
                    </CardTitle>
                  </CardHeader>

                  <form>
                    <div className="flex flex-col gap-6 w-[20rem] ml-[3.125rem] mt-[1rem] md:w-[24rem]">
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label
                            htmlFor="New-password"
                            className="justify-center text-black text-base font-normal font-poppins"
                          >
                            New Password
                          </Label>
                        </div>
                        <div className="relative">
                          <Input
                            id="New-password"
                            type={newPassword ? "text" : "password"}
                            placeholder="Enter your Password"
                            required
                            className="bg-zinc-100 justify-center text-stone-500 text-xs font-normal font-poppins pr-10"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                            onClick={() => setNewPassword(!newPassword)}
                          >
                            {newPassword ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label
                            htmlFor="confirm-password"
                            className="justify-center text-black text-base font-normal font-poppins"
                          >
                            Confirm Password
                          </Label>
                        </div>
                        <div className="relative">
                          <Input
                            id="confirm-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your Password"
                            required
                            className="bg-zinc-100 justify-center text-stone-500 text-xs font-normal font-poppins pr-10"
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
                      <div className="w-full px-[6.25rem] mt-[1rem] sm:px-[50px]">
                        <Button
                          type="submit"
                          className="bg-gradient-to-br from-emerald-800 to-teal-500 hover:scale-105 duration-200 ease-in-out w-[100px] text-sm font-bold font-poppins h-[46px] rounded-xl sm:w-[385px] sm:ml-[-50px]"
                        >
                          RESET
                        </Button>
                      </div>
                    </div>
                  </form>
                </Card>
              </div>
              <div className="hidden lg:flex lg:w-[50%] lg:bg-white lg:backdrop-blur-mditems-center lg:justify-center">
                <Image
                  src={Lock}
                  width={250}
                  height={250}
                  className="hidden lg:block "
                  alt="Forgot Password Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
