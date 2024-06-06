import { changeAuthStatus } from "@/zustand/action";
import React from "react";

const Login = () => {
  return (
    <dialog className="flex h-screen w-screen justify-center items-center">
      <button
        onClick={() => changeAuthStatus(false)}
        className="border-2 border-white p-5"
      >
        Login
      </button>
    </dialog>
  );
};

export default Login;
