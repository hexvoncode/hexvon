"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <motion.div
      className="container mx-auto my-4 flex justify-between items-center sm:px-10 px-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="hexvon-logo"
            width={80}
            height={30}
            className="w-28 sm:w-40 h-20"
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation Links */}
      <motion.nav
        className="hidden lg:flex space-x-8 font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={`${item.link}`}
              className={`${
                pathname === `${item.link}` ? "text-primary font-bold" : "hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="text-primary focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <MdOutlineClose className="text-2xl sm:text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-2xl sm:text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-white text-black shadow-lg p-5 flex flex-col space-y-4 text-center z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={`/${item.link}`}
                  className={`${
                    pathname === `${item.link}` ? "text-primary font-bold" : "hover:text-primary"
                  } font-medium text-lg`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <motion.div
        whileHover={{
          rotate: [0, 10, -10, 0],
          backgroundColor: "#primary",
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:block rounded-full"
      >
        <button className="size-16 py-2 rounded-full bg-primary text-white font-semibold text-2xl rotate-12 uppercase">
          Get
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
