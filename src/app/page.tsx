"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaTelegram, FaGithub, FaSignInAlt } from "react-icons/fa";
import { RiStarSmileLine } from "react-icons/ri";

export default function HomePage() {
  const gradient =
    "linear-gradient(135deg, #f0f9ff 0%, #ecfeff 25%, #f5f3ff 50%, #fdf2f8 75%, #fff7ed 100%)";

  // Animation variants for consistent use
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      {/* Animated gradient background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: gradient, backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      

      {/* Main Content */}
      <div className="z-10 w-full max-w-4xl">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="mb-6 w-full text-4xl font-extrabold leading-relaxed text-black dark:text-black sm:text-5xl"
      >
        <span className="inline-block">سلام</span>
        <motion.span
          initial={{ scale: 0.8, opacity: 0, x: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: [0, 5, -5, 5, 0]
          }}
          transition={{ 
            delay: 0.8, 
            duration: 0.5,
            x: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="inline-block mx-1"
        >
          👋
        </motion.span>
      </motion.h1>
      
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="mb-8 text-3xl font-bold text-black dark:text-black sm:text-4xl"
      >
        من <span className="relative mx-1">
          <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">رضا آقاجانی</span>
          <span className="absolute bottom-0 left-0 right-0 z-0 h-3 bg-indigo-100 dark:bg-indigo-900/40" style={{ bottom: '0.125em' }}></span>
        </span> هستم
      </motion.h2>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-xl font-medium text-black dark:text-black"
      >
        نتیجهٔ تسک من برای <span className="text-indigo-600 font-bold">دکا</span> 💼
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.8 },
          },
        }}
        className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
      >
        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a
            href="https://t.me/rezasmind"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaTelegram className="text-lg opacity-90" /> 
            تلگرام من
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a
            href="https://github.com/rezasmind/deca-job-interview"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-gray-800/20 transition-all hover:shadow-gray-800/30 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            <FaGithub className="text-lg opacity-90" />
            کد پروژه در گیت‌هاب
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/auth"
            className="group flex items-center gap-2 rounded-xl border-2 border-indigo-600 bg-white/80 px-6 py-3 text-base font-medium text-indigo-600 shadow-lg shadow-indigo-100/20 transition-all hover:bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <FaSignInAlt className="text-lg opacity-90" />

            ورود به برنامه
          </Link>
        </motion.div>
      </motion.div>
      </div>
      
      {/* Footer credit - Professional touch */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 w-full text-center text-sm text-gray-500 dark:text-gray-400"
      >
        <p>با <span className="text-red-500">❤️</span> توسط رضا آقاجانی</p>
      </motion.div>
    </motion.main>
  );
}
