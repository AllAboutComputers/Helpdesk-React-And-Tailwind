import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy credentials
    const dummyUsername = "admin";
    const dummyPassword = "123";

    if (username === dummyUsername && password === dummyPassword) {
      // Simulate storing login info
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/dashboard"); // or any protected route
    } else {
      setError("Invalid username or password");
    }
  };

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
          <h1 className="text-3xl font-bold text-black italic">Helpdesk System</h1>
        </div>

        <div className="space-y-6">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-12 bg-white border border-gray-300 text-black placeholder:text-gray-600 px-4 text-base"
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 bg-white border border-gray-300 text-black placeholder:text-gray-600 px-4 text-base"
          />

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <Button
            className="w-full h-12 text-white text-base font-semibold"
            style={{
              backgroundColor: "#22c55e",
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <div className="flex justify-between items-center text-sm pt-2">
            <Link to="/forgot-password" className="text-red-500 hover:text-red-600">
              Forgot password?
            </Link>
            <Link to="/signup" className="text-black hover:text-gray-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
