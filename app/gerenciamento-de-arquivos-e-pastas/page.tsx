// app/gerenciamento-de-arquivos-e-pastas/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaFolderOpen, FaFileAlt, FaSearch, FaFileCode, FaFileImage, FaFilePdf } from "react-icons/fa";

export default function GerenciamentoArquivosPastas() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
            <section className="max-w-5xl mx-auto">
                {/* 🔹 Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Gerenciamento de Arquivos e Pastas 💾
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        O gerenciamento de arquivos e pastas é uma das tarefas mais básicas e importantes do uso do computador.
                        Ele envolve **criar, organizar, localizar e manter** os arquivos de forma eficiente, garantindo produtividade e segurança das informações.
                    </p>
                </motion.div>

                {/* 🔹 Seção: Estrutura de pastas e organização */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                🗂️ Estrutura de Arquivos e Pastas
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Uma <strong>pasta (ou diretório)</strong> é um espaço para armazenar e agrupar arquivos relacionados.
                                Cada arquivo pode conter textos, imagens, vídeos, músicas ou programas.
                                As pastas ajudam a manter o computador **organizado e fácil de navegar**.
                            </p>
                        </div>
                        <div className="flex justify-center w-full md:w-1/2">
                            <FaFolderOpen className="text-blue-500 text-9xl" />
                        </div>
                    </div>
                </motion.section>

                {/* 🔹 Seção: Tipos e extensões de arquivos */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                        📁 Tipos de Arquivos e Extensões
                    </h2>
                    <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
                        Cada arquivo possui uma <strong>extensão</strong>, que indica seu tipo e define qual programa deve abri-lo.
                        Veja alguns exemplos comuns:
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileAlt className="text-blue-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Documentos</h3>
                            <p className="text-sm text-gray-600">.txt, .docx, .odt</p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileImage className="text-indigo-500 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Imagens</h3>
                            <p className="text-sm text-gray-600">.jpg, .png, .gif</p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileCode className="text-green-500 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Arquivos de Código</h3>
                            <p className="text-sm text-gray-600">.html, .css, .js</p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFilePdf className="text-red-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">PDFs</h3>
                            <p className="text-sm text-gray-600">.pdf</p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileAlt className="text-yellow-500 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Planilhas</h3>
                            <p className="text-sm text-gray-600">.xls, .xlsx, .ods</p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileAlt className="text-purple-500 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Apresentações</h3>
                            <p className="text-sm text-gray-600">.pptx, .odp</p>
                        </div>
                    </div>
                </motion.section>

                {/* 🔹 Seção: Pesquisa e localização */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex justify-center w-full md:w-1/2">
                            <FaSearch className="text-blue-600 text-9xl" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                🔍 Pesquisa e Localização de Conteúdo
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                O Windows possui uma **ferramenta de busca** que permite encontrar rapidamente arquivos, pastas e até conteúdo dentro de documentos.
                                Basta digitar palavras-chave na barra de pesquisa do **Explorador de Arquivos** ou no **menu Iniciar**.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </section>
        </main>
    );
}
