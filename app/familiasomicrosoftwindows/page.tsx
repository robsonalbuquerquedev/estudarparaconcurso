// app/familiasomicrosoftwindows/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWindows, FaKeyboard, FaMousePointer, FaQuestionCircle } from "react-icons/fa";

export default function FamiliaSoMicrosoftWindows() {
    const versoes = [
        {
            ano: "1995",
            nome: "Windows 95",
            descricao:
                "O primeiro Windows com o botão Iniciar e barra de tarefas. Marcou o início da era da interface moderna.",
            imagem: "/windows95.jpg",
            cor: "bg-blue-200",
        },
        {
            ano: "2001",
            nome: "Windows XP",
            descricao:
                "Famoso pela estabilidade e visual amigável. Foi amplamente usado em empresas e escolas por mais de uma década.",
            imagem: "/windowsxp.jpeg",
            cor: "bg-sky-200",
        },
        {
            ano: "2009",
            nome: "Windows 7",
            descricao:
                "Rápido, seguro e confiável. Refinou o visual e se tornou um dos sistemas mais amados da Microsoft.",
            imagem: "/windows7.jpeg",
            cor: "bg-indigo-200",
        },
        {
            ano: "2015",
            nome: "Windows 10",
            descricao:
                "Integração com a nuvem, assistente Cortana e atualizações contínuas. Unificou o uso em PCs, tablets e híbridos.",
            imagem: "/windows10.png",
            cor: "bg-cyan-200",
        },
        {
            ano: "2021",
            nome: "Windows 11",
            descricao:
                "Design moderno e minimalista, centralização do menu Iniciar e integração com Android e Microsoft Store redesenhada.",
            imagem: "/windows11.jpg",
            cor: "bg-blue-300",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
            <section className="max-w-6xl mx-auto">
                {/* 🔹 Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Família de Sistemas Operacionais Microsoft Windows 🪟
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        O <strong>Microsoft Windows</strong> é uma família de sistemas operacionais com interface
                        gráfica desenvolvida pela Microsoft desde 1985.
                        Ao longo do tempo, sua aparência, desempenho e usabilidade evoluíram profundamente — desde o <em>Windows 95</em> até o moderno <em>Windows 11</em>.
                    </p>
                </motion.div>

                {/* 🔹 Linha do tempo interativa */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative border-l-4 border-blue-400 pl-8 space-y-8"
                >
                    {versoes.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-6 rounded-xl shadow-md p-6 ${v.cor}`}
                        >
                            <div className="md:w-1/3 flex justify-center">
                                <Image
                                    src={v.imagem}
                                    alt={v.nome}
                                    width={220}
                                    height={180}
                                    className="rounded-lg shadow-lg border border-gray-300 bg-white"
                                />
                            </div>
                            <div className="md:w-2/3 text-left">
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                                    {v.nome} <span className="text-gray-500 text-lg">({v.ano})</span>
                                </h2>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    {v.descricao}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 🔹 Explicação sobre interface e elementos */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
                        Interface Gráfica e Elementos da Área de Trabalho
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center max-w-3xl mx-auto">
                        A interface gráfica do Windows é composta por janelas, ícones, menus e ponteiros — os
                        elementos visuais que permitem ao usuário interagir de forma intuitiva com o sistema.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaMousePointer className="text-blue-600 text-3xl mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-800 mb-1">Área de Trabalho</h3>
                            <p className="text-sm text-gray-600">
                                Espaço principal onde são exibidos atalhos, janelas e o menu Iniciar.
                            </p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaQuestionCircle className="text-blue-600 text-3xl mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-800 mb-1">Ajuda e Suporte</h3>
                            <p className="text-sm text-gray-600">
                                Ferramenta que auxilia o usuário com dicas, diagnósticos e soluções de problemas.
                            </p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaKeyboard className="text-blue-600 text-3xl mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-800 mb-1">Atalhos de Teclado</h3>
                            <p className="text-sm text-gray-600">
                                Combinações como <strong>Ctrl + C</strong>, <strong>Ctrl + V</strong> e
                                <strong> Alt + Tab</strong> otimizam a produtividade e o uso do sistema.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </section>
        </main>
    );
}
