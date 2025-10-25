// app/aplicativos-de-escritório/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaMicrosoft, FaGoogleDrive, FaFileWord, FaFileExcel, FaFilePowerpoint, FaRegFileAlt, FaLaptopCode } from "react-icons/fa";

export default function AplicativosDeEscritorio() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
            <section className="max-w-6xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Aplicativos de Escritório 💼
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Os aplicativos de escritório são programas voltados à **produtividade profissional e acadêmica**.
                        Eles permitem **criar, editar e gerenciar documentos, planilhas e apresentações**, sendo parte essencial do dia a dia no computador.
                    </p>
                </motion.div>

                {/* Seção 1 - O que são */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaRegFileAlt className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📂 O que são Aplicativos de Escritório?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                São programas usados para **produzir documentos, planilhas, apresentações, gráficos e relatórios**.
                                Esses aplicativos estão presentes em suítes de escritório (conjuntos de programas integrados).
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Processadores de texto:</strong> Word, Writer, Google Docs.</li>
                                <li><strong>Planilhas eletrônicas:</strong> Excel, Calc, Google Sheets.</li>
                                <li><strong>Apresentações:</strong> PowerPoint, Impress, Google Slides.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Softwares proprietários */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🧩 Softwares Proprietários
                    </h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
                        São programas que exigem **licença paga** e cujo código-fonte é fechado, ou seja, o usuário **não pode modificá-los**.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaFileWord className="text-blue-700 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Microsoft Word</h3>
                            <p className="text-sm text-gray-600">Editor de textos da suíte Microsoft Office.</p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaFileExcel className="text-green-700 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Microsoft Excel</h3>
                            <p className="text-sm text-gray-600">Planilhas e cálculos automatizados.</p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaFilePowerpoint className="text-orange-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Microsoft PowerPoint</h3>
                            <p className="text-sm text-gray-600">Criação de apresentações profissionais.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 3 - Softwares Livres */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🧠 Softwares Livres
                    </h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
                        São programas gratuitos cujo **código-fonte é aberto**, permitindo modificações e distribuição livre.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaLaptopCode className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">LibreOffice Writer</h3>
                            <p className="text-sm text-gray-600">Editor de textos da suíte LibreOffice.</p>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaLaptopCode className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">LibreOffice Calc</h3>
                            <p className="text-sm text-gray-600">Editor de planilhas gratuito e compatível com Excel.</p>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaLaptopCode className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">LibreOffice Impress</h3>
                            <p className="text-sm text-gray-600">Criação de slides compatíveis com PowerPoint.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Soluções Online */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        ☁️ Aplicativos Online
                    </h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
                        Hoje em dia, muitos aplicativos de escritório estão disponíveis **diretamente na nuvem**, sem precisar de instalação.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 text-center">
                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaGoogleDrive className="text-yellow-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Google Workspace</h3>
                            <p className="text-sm text-gray-600">
                                Inclui Google Docs, Sheets e Slides, acessíveis via navegador e colaborativos em tempo real.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaMicrosoft className="text-blue-700 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Microsoft 365 Online</h3>
                            <p className="text-sm text-gray-600">
                                Versão online gratuita do Word, Excel e PowerPoint via navegador.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Dicas finais */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        💡 Dicas
                    </h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg leading-relaxed">
                        <li>Softwares **livres** são ideais para quem busca economia e compatibilidade entre sistemas.</li>
                        <li>Os **proprietários** costumam ter mais recursos e suporte técnico.</li>
                        <li>Experimente versões **online e gratuitas** antes de comprar licenças pagas.</li>
                        <li>Para concursos, saiba reconhecer ícones e funções básicas de cada suíte.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
