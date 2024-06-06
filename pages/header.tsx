import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex gap-5 p-10 justify-center items-center">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/payment">payment</Link>
    </div>
  );
};

export default Header;
