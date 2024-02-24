import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterDemo() {
  return (
    <footer className="bg-gray-200 dark:bg-background">
      <div className="container flex flex-col items-center justify-center px-4 py-8 mx-auto lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]"><Link href={"/"}>Home</Link></li>
            <li className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]"><Link href={"/about"}>About</Link></li>
            <li className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]"><Link href={"/contact"}>Contact US</Link></li>
            <li className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]"><Link href={"/terms"}>Terms & Condition</Link></li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href={""} className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]">
            <FaFacebookF />
          </Link>
          <Link href={""} className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]">
            <FaTwitter />
          </Link>
          <Link href={""} className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]">
            <FaInstagram />
          </Link>
          <Link href={""} className="transition duration-200 hover:ease-in-out hover:text-[#422BD9] focus:text-[#7A36D9] disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 cursor-pointer dark:text-[#F2A172] dark:hover:text-[#BF3B3B]">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center">
          @2024 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
