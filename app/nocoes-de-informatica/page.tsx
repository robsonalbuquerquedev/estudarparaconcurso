// app/nocoes-de-informatica/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaWindows,
    FaFileAlt,
    FaTools,
    FaPrint,
    FaArchive,
    FaFile,
    FaPaintBrush,
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,
    FaGlobe,
    FaEnvelope,
} from "react-icons/fa";

export default function NocoesDeInformatica() {
    const topicos = [
        {
            icone: <FaWindows className="text-blue-500" />,
            titulo: "Família de sistemas operacionais Microsoft Windows",
            descricao:
                "Interface gráfica, elementos da área de trabalho, ajuda e suporte e atalhos de teclado.",
        },
        {
            icone: <FaFileAlt className="text-green-500" />,
            titulo: "Gerenciamento de arquivos e pastas",
            descricao:
                "Tipos de arquivos, extensões, pesquisa e localização de conteúdo.",
        },
        {
            icone: <FaTools className="text-yellow-500" />,
            titulo: "Configurações e Painel de Controle",
            descricao:
                "Solução de problemas e ajustes gerais do sistema.",
        },
        {
            icone: <FaPrint className="text-purple-500" />,
            titulo: "Backup e gerenciamento de impressão",
            descricao:
                "Criação de cópias de segurança e configuração de impressoras.",
        },
        {
            icone: <FaArchive className="text-orange-500" />,
            titulo: "Instalação e gerenciamento de programas",
            descricao:
                "Instalar, desinstalar e configurar aplicativos do sistema.",
        },
        {
            icone: <FaFile className="text-pink-500" />,
            titulo: "Compactação e extração de arquivos ZIP",
            descricao: "Criação, extração e manipulação de arquivos compactados.",
        },
        {
            icone: <FaPaintBrush className="text-sky-500" />,
            titulo: "Aplicativos do Windows",
            descricao:
                "Bloco de Notas, Paint, WordPad e Mapa de Caracteres.",
        },
        {
            icone: <FaFileWord className="text-indigo-500" />,
            titulo: "Aplicativos de escritório",
            descricao:
                "Softwares livres e proprietários para produtividade.",
        },
        {
            icone: <FaFileWord className="text-blue-600" />,
            titulo: "Processador de textos",
            descricao:
                "Criação, edição e formatação de textos e automação de documentos.",
        },
        {
            icone: <FaFileExcel className="text-green-600" />,
            titulo: "Planilha eletrônica",
            descricao:
                "Fórmulas, gráficos, formatação e importação de dados externos.",
        },
        {
            icone: <FaFilePowerpoint className="text-orange-600" />,
            titulo: "Gerador de apresentação",
            descricao:
                "Criação de slides, animações e exportação em PDF.",
        },
        {
            icone: <FaGlobe className="text-blue-400" />,
            titulo: "Navegadores e serviços da Web",
            descricao:
                "Uso de navegadores, buscas online e correio eletrônico.",
        },
        {
            icone: <FaEnvelope className="text-red-500" />,
            titulo: "Serviços de correio eletrônico",
            descricao:
                "Envio, recebimento e organização de mensagens.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-8">
            <section className="max-w-5xl mx-auto">
                {/* 🔹 Cabeçalho e Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Noções de Informática 💻
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        A disciplina de <strong>Noções de Informática</strong> prepara você
                        para lidar com as principais ferramentas tecnológicas do dia a dia.
                        Ela abrange desde o uso do <strong>Windows</strong> e seus
                        aplicativos básicos até o domínio de ferramentas de
                        <strong> escritório</strong> e <strong>internet</strong>.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Image
                            src="/informatica-banner.jpg"
                            alt="Ilustração de computador e tecnologia"
                            width={500}
                            height={300}
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </motion.div>

                {/* 🔹 Grade de Tópicos */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topicos.map((topico, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-3 text-lg font-semibold text-gray-700">
                                {topico.icone}
                                {topico.titulo}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {topico.descricao}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
