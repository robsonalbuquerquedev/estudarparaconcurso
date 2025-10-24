// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLaptopCode,
  FaGavel,
  FaBookOpen,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center text-center px-4 sm:px-6 py-20">
      {/* 🔹 Seção principal (Hero Section) */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-10"
      >
        {/* 🧠 Conteúdo textual */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Estudar<span className="text-blue-600">ParaConcurso</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 px-2 sm:px-0">
            Seu portal de estudos completo, com conteúdos organizados por área
            de conhecimento. Aprenda de forma simples, visual e eficaz tudo o
            que precisa para sua aprovação. 🚀
          </p>

          {/* 🧭 Botões de navegação */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <Link
              href="/nocoes-de-informatica"
              className="bg-blue-600 text-white px-4 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition flex items-center gap-2"
            >
              <FaLaptopCode /> Noções de Informática
            </Link>
            <Link
              href="/integridade"
              className="bg-green-600 text-white px-4 py-3 rounded-xl font-medium shadow-md hover:bg-green-700 transition flex items-center gap-2"
            >
              <FaShieldAlt /> Integridade
            </Link>
            <Link
              href="/legislacao-aplicada"
              className="bg-indigo-600 text-white px-4 py-3 rounded-xl font-medium shadow-md hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <FaGavel /> Legislação Aplicada
            </Link>
            <Link
              href="/conhecimento-especifico"
              className="bg-yellow-500 text-white px-4 py-3 rounded-xl font-medium shadow-md hover:bg-yellow-600 transition flex items-center gap-2"
            >
              <FaBrain /> Conhecimento Específico
            </Link>
            <Link
              href="/lingua-portuguesa"
              className="bg-pink-500 text-white px-4 py-3 rounded-xl font-medium shadow-md hover:bg-pink-600 transition flex items-center gap-2"
            >
              <FaBookOpen /> Língua Portuguesa
            </Link>
          </div>
        </div>

        {/* 🎨 Imagem ilustrativa */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/home-banner.png"
            alt="Estudante aprendendo online"
            width={480}
            height={480}
            priority
            className="rounded-2xl shadow-lg max-w-[300px] sm:max-w-[380px] lg:max-w-[480px] h-auto"
          />
        </div>
      </motion.section>

      {/* 🔹 Seção de destaque */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-20 max-w-4xl text-gray-700 px-2"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
          🌟 Por que estudar aqui?
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          Porque aprender é mais fácil quando o conteúdo está{" "}
          <strong>organizado</strong>, <strong>bonito</strong> e{" "}
          <strong>direto ao ponto</strong>.
          Aqui você encontra explicações claras, resumos ilustrados e uma
          linguagem acessível que transforma o estudo em algo prazeroso.
        </p>
        <p className="italic text-gray-600 text-sm sm:text-base">
          “O sucesso nasce do esforço diário. Um pouco de estudo hoje é o passo
          para a aprovação amanhã.”
        </p>
      </motion.section>
    </main>
  );
}
