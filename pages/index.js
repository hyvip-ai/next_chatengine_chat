import React, { useContext } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
export default function Auth() {
  const { userName, setUserName, userSecret, setUserSecret } =
    useContext(UserContext);
  return (
    <div className="background">
      <div className="auth-container">
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          </div>
        </form>
      </div>
    </div>
  );
}
