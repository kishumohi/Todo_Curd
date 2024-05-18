import Link from "next/link.js";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        To-App
      </Link>
      <Link href={"/addTopic"} className="bg-white p-2">
        Add Topics
      </Link>
    </nav>
  );
}

export default NavBar;
