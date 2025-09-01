import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="p-8 bg-white/20 backdrop-blur-md shadow-lg space-y-6 m-5 rounded-xl w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome User 🚀</h1>
        <div className="space-y-4">
          <Link
            to="/login"
            className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
