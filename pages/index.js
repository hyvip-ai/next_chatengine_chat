import React, { useContext } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
export default function Auth() {
  const router = useRouter();
  const { userName, userSecret, setUserName, setUserSecret } =
    useContext(UserContext);
  const fromSubmitHandler = (e) => {
    e.preventDefault();
    if (userSecret.length === 0 || userName.length === 0) {
      return;
    }
    // console.log(userSecret,userName)
    axios
      .put(
        `https://api.chatengine.io/users/`,
        {
          username:userName,
          secret:userSecret,
        },
        {
          headers: {
            "Private-Key": "619d3a16-8d55-401c-97bb-28cffbeecd08",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        router.push("/chats");
      });
  };
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={fromSubmitHandler}>
          <div className="auth-title">Next-Js chat</div>
          <div className="input-container">
            <input
              type="text"
              className="text-input"
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <input
              type="password"
              className="text-input"
              placeholder="Password"
              onChange={(e) => {
                setUserSecret(e.target.value);
              }}
            />
            <button type="submit" className="submit-button">
              Log In / Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
