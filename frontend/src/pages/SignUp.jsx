import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("https://login-signup-project-2.onrender.com/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const responseMsg = await resp.json();
    setMessage(responseMsg.message);

    if (resp.status === 200 || resp.status === 201) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="p-8 bg-white/20 backdrop-blur-md shadow-lg space-y-6 m-5 rounded-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        {message && (
          <p className="text-center text-green-600 font-medium mb-4">
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Back to Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
