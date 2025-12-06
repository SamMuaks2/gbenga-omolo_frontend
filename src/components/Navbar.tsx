"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
   const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
    {/* <nav className="flex w-[1440px] h-[80px] px-[120px] py-2 items-center gap-[137px] shrink-0 bg-white shadow mx-auto"> */}
    <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-[120px] h-[80px]">
        {/* Logo */}
      <div className="w-[86px] h-[53px] m-16 ml-0 shrink-0">
      {/* <div className="w-[86px] h-[53px] shrink-0"> */}
        <Image
          src="/Images/nav-logo.png"
          alt="Gbenga Omole Logo"
          width={86}
          height={53}
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-[1_0_0] justify-between items-center text-gray-700 font-medium">
      {/* <div className="flex justify-between items-center flex-[1_0_0] text-gray-700 font-medium"> */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/devotionals">Devotionals</Link>
        <Link href="/articles">Scientific Articles</Link>
        <Link href="/media">Media</Link>
        {/* <Link href="#contact">Contact</Link> */}
      </div>

      {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 text-gray-700 font-medium animate-fadeIn">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/devotionals" onClick={() => setOpen(false)}>Devotionals</Link>
          <Link href="/articles" onClick={() => setOpen(false)}>Scientific Articles</Link>
          <Link href="/media" onClick={() => setOpen(false)}>Media</Link>
        </div>
      )}
    </nav>
  );
}