import { changeAuthStatus } from "@/zustand/action";
import React from "react";

const Login = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <dialog
        className="relative flex flex-col items-center justify-center p-10 max-w-full max-h-full w-[90%] h-auto md:w-[700px] md:h-[500px] bg-zinc-800 shadow-lg rounded-lg text-white"
        open
      >
        <button
          onClick={() => changeAuthStatus(false)}
          className="border-2 border-white p-3 mt-5"
        >
          Login
        </button>
      </dialog>
    </div>
  );
};

export default Login;
