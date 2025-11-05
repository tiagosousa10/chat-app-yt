import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 overflow-auto"
      style={{ backgroundColor: "#499fa4" }}
    >
      <div
        className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#f8f7fc" }}
      >
        <div className="grid md:grid-cols-2">
          {/* Left Section - Branding */}
          <div
            className="hidden md:flex flex-col justify-between p-12"
            style={{ backgroundColor: "#f8f7fc" }}
          >
            <div>
              <h1
                className="text-4xl font-bold mb-12"
                style={{ color: "#499fa4" }}
              >
                ChatApp
              </h1>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold" style={{ color: "#3d4a55" }}>
                  Welcome!
                </h2>
                <h3 className="text-3xl font-bold" style={{ color: "#3d4a55" }}>
                  Join, Connect, and
                </h3>
                <h4
                  className="text-2xl font-normal"
                  style={{ color: "#bec6c3" }}
                >
                  Start Chatting with Friends
                </h4>
              </div>
            </div>
          </div>

          {/* Right Section - Sign Up Form */}
          <div
            className="p-8 md:p-12 flex flex-col justify-center"
            style={{ backgroundColor: "#f8f7fc" }}
          >
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "#3d4a55" }}
            >
              Sign Up
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "#3d4a55" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: "#bec6c3",
                    backgroundColor: "#ffffff",
                    color: "#3d4a55",
                  }}
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = "#499fa4";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(73, 159, 164, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bec6c3";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Username Field */}
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "#3d4a55" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="johndoe"
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: "#bec6c3",
                    backgroundColor: "#ffffff",
                    color: "#3d4a55",
                  }}
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = "#499fa4";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(73, 159, 164, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#bec6c3";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "#3d4a55" }}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: "#bec6c3",
                      backgroundColor: "#ffffff",
                      color: "#3d4a55",
                    }}
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                    onFocus={(e) => {
                      e.target.style.borderColor = "#499fa4";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(73, 159, 164, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#bec6c3";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    style={{ color: "#499fa4" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {showPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      ) : (
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "#3d4a55" }}
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: "#bec6c3",
                      backgroundColor: "#ffffff",
                      color: "#3d4a55",
                    }}
                    value={inputs.confirmPassword}
                    onChange={(e) =>
                      setInputs({ ...inputs, confirmPassword: e.target.value })
                    }
                    onFocus={(e) => {
                      e.target.style.borderColor = "#499fa4";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(73, 159, 164, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#bec6c3";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    style={{ color: "#499fa4" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {showConfirmPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      ) : (
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Gender Checkbox */}
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: "#3d4a55" }}
                >
                  Gender
                </label>
                <GenderCheckbox
                  onCheckboxChange={handleCheckboxChange}
                  selectedGender={inputs.gender}
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: "#499fa4" }}
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <>
                    Sign Up
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Login Link */}
              <div className="text-center">
                <span className="text-sm" style={{ color: "#3d4a55" }}>
                  Already have account?{" "}
                </span>
                <Link
                  to="/login"
                  className="text-sm hover:underline font-medium"
                  style={{ color: "#499fa4" }}
                >
                  Login
                </Link>
              </div>

              {/* Footer Links */}
              <div className="flex items-center justify-end gap-2 text-xs pt-4">
                <Link
                  to="/#"
                  target="_blank"
                  className="hover:underline"
                  style={{ color: "#3d4a55" }}
                >
                  Terms & Condition
                </Link>
                <span style={{ color: "#3d4a55" }}>•</span>
                <Link
                  to="/#"
                  target="_blank"
                  className="hover:underline"
                  style={{ color: "#3d4a55" }}
                >
                  Privacy Policy
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
