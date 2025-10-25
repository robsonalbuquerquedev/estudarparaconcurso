// app/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const menus = [
        { name: "Início", path: "/" },
        { name: "Noções de Informática", path: "/nocoes-de-informatica" },
        { name: "Integridade", path: "/integridade" },
        { name: "Legislação Aplicada", path: "/legislacao-aplicada" },
        { name: "Conhecimento Específico", path: "/conhecimento-especifico" },
        { name: "Língua Portuguesa", path: "/lingua-portuguesa" },
        { name: "Quiz - Sistemas Operacionais", path: "/quiz-sistemas-operacionais" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
                {/* 🔹 Logo */}
                <motion.h1
                    className="text-xl font-bold text-gray-800 cursor-pointer select-none"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    Estudar<span className="text-blue-600">ParaConcurso</span>
                </motion.h1>

                {/* 🔹 Menu Desktop */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {menus.map((menu) => (
                        <li key={menu.path}>
                            <Link
                                href={menu.path}
                                className={`transition-colors hover:text-blue-600 ${pathname === menu.path ? "text-blue-600 font-semibold" : ""
                                    }`}
                            >
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* 🔹 Botão Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-800 text-2xl focus:outline-none"
                    aria-label="Menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* 🔹 Menu Mobile (animação com Framer Motion) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-200 shadow-inner"
                    >
                        <ul className="flex flex-col gap-3 p-4 text-gray-700 font-medium">
                            {menus.map((menu) => (
                                <motion.li
                                    key={menu.path}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
                                >
                                    <Link
                                        href={menu.path}
                                        className={`block px-2 py-2 rounded-md transition-colors hover:bg-blue-50 hover:text-blue-600 ${pathname === menu.path
                                                ? "bg-blue-50 text-blue-600 font-semibold"
                                                : ""
                                            }`}
                                    >
                                        {menu.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
