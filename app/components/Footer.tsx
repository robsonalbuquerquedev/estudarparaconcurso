// app/components/Footer.tsx
"use client";

import { FaGithub, FaBookOpen, FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 text-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <p>
                    © {new Date().getFullYear()} EstudarParaConcurso — Desenvolvido com{" "}
                    <FaHeart className="inline text-red-500" /> por{" "}
                    <span className="font-semibold">Robson Albuquerque</span>
                </p>
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/robsonalbuquerquedev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="#"
                        className="hover:text-yellow-400 transition"
                    >
                        <FaBookOpen />
                    </a>
                </div>
            </div>
        </footer>
    );
}
