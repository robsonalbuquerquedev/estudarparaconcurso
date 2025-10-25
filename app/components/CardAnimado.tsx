"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface CardAnimadoProps {
    icone: React.ReactNode;
    titulo: string;
    descricao: string;
    link?: string;
    index?: number;
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

export default function CardAnimado({
    icone,
    titulo,
    descricao,
    link,
    index = 0,
    variant = "default",
}: CardAnimadoProps) {
    // 🎨 Define o estilo de cada tema
    const variantStyles: Record<string, string> = {
        default: "bg-white border-gray-200 hover:bg-gray-50",
        primary: "bg-blue-50 border-blue-200 hover:bg-blue-100",
        secondary: "bg-purple-50 border-purple-200 hover:bg-purple-100",
        success: "bg-green-50 border-green-200 hover:bg-green-100",
        warning: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
        danger: "bg-red-50 border-red-200 hover:bg-red-100",
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="transition-transform"
        >
            {link ? (
                <Link
                    href={link}
                    target="_blank"
                    className={`block p-5 rounded-xl shadow-md border hover:shadow-lg transition ${variantStyles[variant]}`}
                >
                    <div className="flex items-center gap-3 mb-3 text-lg font-semibold text-gray-700">
                        {icone}
                        {titulo}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {descricao}
                    </p>
                </Link>
            ) : (
                <div
                    className={`p-5 rounded-xl shadow-md border opacity-70 ${variantStyles[variant]}`}
                >
                    <div className="flex items-center gap-3 mb-3 text-lg font-semibold text-gray-700">
                        {icone}
                        {titulo}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {descricao}
                    </p>
                </div>
            )}
        </motion.div>
    );
}
