// app/instalação-e-gerenciamento-de-programas/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaDownload,
    FaTrashAlt,
    FaCogs,
    FaWindows,
    FaWrench,
    FaCheckCircle,
} from "react-icons/fa";

export default function InstalacaoGerenciamentoProgramas() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
            <section className="max-w-5xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Instalação e Gerenciamento de Programas 💻⚙️
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Aprender a **instalar, remover e configurar aplicativos** é essencial para manter o
                        computador organizado, seguro e com bom desempenho.
                        Aqui vamos explorar as etapas, cuidados e boas práticas para lidar com programas no Windows.
                    </p>
                </motion.div>

                {/* Seção 1 - Instalação */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                💾 Instalação de Programas
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A instalação é o processo que **copia arquivos e configura componentes** necessários
                                para que um programa funcione corretamente no sistema operacional.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Baixar o instalador de uma fonte confiável (.exe, .msi, etc.).</li>
                                <li>Executar o instalador e seguir o assistente de instalação.</li>
                                <li>Escolher local de instalação e componentes adicionais.</li>
                                <li>Concluir e testar o programa instalado.</li>
                            </ul>
                        </div>
                        <FaDownload className="text-blue-600 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 2 - Desinstalação */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaTrashAlt className="text-red-500 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🗑️ Desinstalação de Programas
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A desinstalação remove um programa e seus arquivos associados, liberando espaço e evitando lentidão.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>
                                    No Windows, vá em <strong>Configurações → Aplicativos → Aplicativos instalados</strong>.
                                </li>
                                <li>Selecione o programa e clique em <strong>Desinstalar</strong>.</li>
                                <li>Alguns programas oferecem um desinstalador próprio.</li>
                                <li>Evite apenas apagar a pasta manualmente — isso pode deixar resíduos no sistema.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 3 - Gerenciamento e Configuração */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        ⚙️ Gerenciamento e Configuração de Aplicativos
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaWindows className="text-blue-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Painel de Controle</h3>
                            <p className="text-sm text-gray-600">
                                Use o Painel de Controle para visualizar, reparar ou remover programas mais antigos.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaCogs className="text-indigo-500 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Aplicativos e Recursos</h3>
                            <p className="text-sm text-gray-600">
                                Gerencie permissões, atualizações e inicialização de aplicativos no menu Configurações.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaWrench className="text-green-500 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Reparo e Modificação</h3>
                            <p className="text-sm text-gray-600">
                                Alguns instaladores permitem corrigir erros ou adicionar componentes sem desinstalar totalmente.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Dicas finais */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        💡 Dicas
                    </h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg leading-relaxed">
                        <li>Baixe programas **apenas de sites oficiais** ou lojas seguras.</li>
                        <li>Evite instalar vários programas que tenham **a mesma função**.</li>
                        <li>Remova aplicativos que você **não usa há muito tempo**.</li>
                        <li>Antes de instalar, verifique **os requisitos mínimos** do sistema.</li>
                        <li>Use **softwares de limpeza** com cautela — alguns podem remover arquivos importantes.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
