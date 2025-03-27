import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="flex flex-col gap-6 border p-8 rounded-lg  w-xs">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default page;
