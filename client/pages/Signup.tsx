import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full px-4 sm:px-8"
      style={{
        backgroundColor: "#55D6C2",
      }}
    >
      <div
        className="p-12 shadow-2xl w-full max-w-xl rounded-lg"
        style={{
          backgroundColor: "#B8E6D3",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black italic">
            Helpdesk System
          </h1>
          <p className="text-black mt-2 font-medium text-base">
            Sign up here
          </p>
        </div>

        <div className="space-y-6">
          <Input
            placeholder="Username"
            className="w-full h-12 bg-white border border-gray-300 text-black placeholder:text-gray-600 px-4 text-base"
          />

          <Input
            type="password"
            placeholder="Password"
            className="w-full h-12 bg-white border border-gray-300 text-black placeholder:text-gray-600 px-4 text-base"
          />

          <Input
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-white border border-gray-300 text-black placeholder:text-gray-600 px-4 text-base"
          />

          <Button
            className="w-full h-12 text-white font-semibold text-base"
            style={{
              backgroundColor: "#3066BE",
              borderColor: "#3066BE",
            }}
          >
            Sign Up
          </Button>

          <div className="flex justify-between items-center text-sm pt-2">
            <Link
              to="/forgot-password"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Forgot password?
            </Link>
            <Link
              to="/login"
              className="text-black hover:text-gray-700 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
