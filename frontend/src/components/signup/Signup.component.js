/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { setCurrentUser } from "../../redux-store/user/userSlice";
import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const { character, wordsLearnt } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    console.log(email);
    console.log(password);
    event.preventDefault();

    const postUsers = fetch("http://localhost:8000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        wordsLearnt: wordsLearnt,
        character: character,
      }),
    });

    Promise.all([postUsers]).then(([postUsersResponse]) => {
      if (postUsersResponse.status === 201) {
        const getTokens = fetch("http://localhost:8000/tokens", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        });

        getTokens.then((getTokensResponse) => {
          if (getTokensResponse.status === 201) {
            getTokensResponse.json().then((data) => {
              window.localStorage.setItem("token", data.token);
              dispatch(setCurrentUser(email));
              dispatch(setCurrentScene("CHARACTER"));
            });
          } else {
            console.log("response was: error with /tokens");
          }
        });
      } else {
        console.log("response was: error with /users");
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="min-h-full min-w-full bg-pixelSepia bg-cover pixel-font">
        <form className="" onSubmit={handleSubmit} data-test="SignupForm">
          <div className="h-screen flex justify-center items-center">
            <div className="m-7 flex flex-col relative w-2/5">
              <div className="bg-japanese-brown-2 mt-7 shadow-2xl sm:rounded-xl">
                <div className="p-5 text-white">
                  <div className="text-8xl md:text-5xl lg:text-7xl">.</div>
                  <div className="text-base md:text-lg lg:text-8xl">.</div>
                  <div className="sm:mt-32 text-base md:text-lg lg:text-7xl">
                    .
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col shadow-xl bg-white sm:rounded-xl p-6 sm:absolute sm:right-16 md:right-20 lg:right-32 sm:w-85">
                <h2
                  className="text-japanese-brown-2 mt-5 mb-4 text-base md:text-lg lg:text-xl font-bold"
                  data-test="Sign-up-title"
                >
                  Sign Up
                </h2>
                <div className="avatar rounded-full w-16 h-16 bg-white mb-6">
                  <img src="/img/pixel-onigiri.png" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-b-2 border-grey-600 text-base md:text-s lg:text-s p-2 focus:outline-none focus:border-japanese-brown-2 mb-4 sm:rounded-lg"
                  placeholder="Email Address"
                  onChange={handleEmailChange}
                  data-test="emailSignupInput"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full border-b-2 border-grey-600 text-base md:text-s lg:text-s p-2 focus:outline-none focus:border-japanese-brown-2 mb-4 sm:rounded-lg"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  data-test="passwordSignupInput"
                />
                <button
                  className="pixel-font bg-lighter-japanese-brown-2 hover:bg-japanese-brown-2 text-white w-full mt-6 mb-8 focus:outline-none text-base md:text-s lg:text-s p-3 sm:rounded-xl"
                  type="submit"
                  data-test="signUpSubmitButton"
                >
                  SIGNUP
                </button>
                <button
                  type="button"
                  className="text-japanese-brown-2 mb-5 text-base md:text-s lg:text-s"
                  onClick={() => dispatch(setCurrentScene("START_MENU"))}
                  data-test="backToMenuButton"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
