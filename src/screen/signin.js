import React, { useState } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
    }

    // If there are no errors, proceed with form submission
    if (!emailError && !passwordError) {
      // Submit the form or perform any necessary actions
      console.log("Form submitted");
    }
  };

  return (
    <div className="bg-image">
      <div className="container margin-top-bottom-5">
        <section
          className="align-items-center"
          style={{ paddingTop: "6%", paddingBottom: "10%" }}
        >
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <p
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-danger "
              style={{ fontSize: "60px" }}
            >
              <img
                className="w-8 h-8 mr-2"
                style={{ width: "130px", height: "Auto" }}
                src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
                alt="logo"
              />
              Movie Time
            </p>
            <div
              className="w-full  bg-signin rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 "
              style={{ width: "37%" }}
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <h1
                  className="font-bold leading-tight tracking-tight text-danger md:text-2xl dark:text-white"
                  style={{ fontSize: "25px" }}
                >
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                    {emailError && <p className="error">{emailError}</p>}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-white">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-danger"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Link
                    to={`/home`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-danger text-decoration-none"
                  >
                    <button
                      type="submit"
                      disabled={emailError || passwordError || email === "" || password === ""} // Disable the button if there are validation errors
                      className="mt-2 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-danger"
                    >
                      Sign in
                    </button>
                  </Link>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to={`/signup`}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-danger text-decoration-none"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
