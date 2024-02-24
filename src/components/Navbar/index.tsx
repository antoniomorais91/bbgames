"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { navOptions } from "@/utils";
import ModeToggle from "../ui/modetoggle";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  onSearch: (category: string) => void;
}

export default function Navbar(props: NavbarProps) {
  const [state, setState] = useState(false);

  const [category, setCategory] = useState("");

  const handleSearch = () => {
    props.onSearch(category);
  };

  return (
    <nav className="z-50 bg-white w-full border-b md:border-0 dark:bg-background">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 transition">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link
            className="p-2 lg:pr-2 flex items-center text-2xl font-bold text-[#7A36D9] hover:text-[#BF3B3B] focus:text-[#422BD9] ease-in-out duration-300 hover:scale-110"
            href="/"
          >
            BBG
          </Link>
          <div className="md:hidden flex items-center gap-2">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <IoMenuSharp />
            </button>
            <ModeToggle />
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navOptions.map((item) => (
              <li
                key={item.id}
                className="duration-200 md:hover:ease-in-out md:hover:scale-110 hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]"
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
            <li className="flex items-center">
            <Input
                type="text"
                placeholder="Digite a categoria"
                className="mr-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button className="duration-200 md:hover:ease-in-out md:hover:scale-110 hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]" onClick={handleSearch}>Buscar</button>
        </li>
          </ul>
        </div>
        <div
          className={`flex pb-3 mt-6 md:block md:pb-0 md:mt-0 md:pr-8 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="duration-200 md:hover:ease-in-out md:hover:scale-110 hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]">
              <Link href={"/login"}>Entrar</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
