import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const NotFound = () => {
  const { authUser } = useAuthContext();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 overflow-auto"
      style={{ backgroundColor: "#499fa4" }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 text-center"
        style={{ backgroundColor: "#f8f7fc" }}
      >
        <div className="space-y-6">
          <h1
            className="text-9xl font-bold"
            style={{ color: "#499fa4" }}
          >
            404
          </h1>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#3d4a55" }}
          >
            Page Not Found
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: "#bec6c3" }}
          >
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="pt-4">
            {authUser ? (
              <Link
                to="/"
                className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#499fa4" }}
              >
                Go Back Home
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#499fa4" }}
              >
                Go to Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

