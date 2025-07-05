import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full px-4 sm:px-8"
      style={{
        backgroundColor: "#55D6C2"
      }}
    >
      <div
        className="p-12 shadow-2xl w-full max-w-xl "
        style={{
          backgroundColor: "#B8E6D3",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-black mb-4">Forgot Password</h1>
          <p className="text-black text-base font-medium leading-relaxed">
            Don't worry, enter your email below and we’ll send you a link to reset your password.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-white/90 border border-white/50 text-black placeholder:text-gray-600 focus:bg-white text-base"
          />

          <Button
            className="w-full h-12 text-white font-semibold text-base"
            style={{
              backgroundColor: "green",
              borderColor: "#55D6C2",
            }}
          >
            Submit
          </Button>

          <Button
            className="w-full h-12 text-white font-semibold text-base"
            style={{
              backgroundColor: "#3066be",
              borderColor: "#60AFFF",
            }}
            asChild
          >
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
