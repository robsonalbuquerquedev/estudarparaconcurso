// app/configurações-e-painel-de-controle/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaCogs,
    FaTools,
    FaDesktop,
    FaUserCog,
    FaShieldAlt,
    FaSyncAlt,
    FaBug,
} from "react-icons/fa";

export default function ConfiguracoesPainelControle() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8">
            <section className="max-w-6xl mx-auto">
                {/* 🔹 Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Configurações e Painel de Controle ⚙️
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        O **Painel de Controle** e o **aplicativo Configurações** são
                        ferramentas essenciais do Windows para **ajustar, personalizar e
                        resolver problemas** do sistema.
                        Eles permitem modificar aparência, desempenho, segurança e recursos
                        do computador de forma intuitiva.
                    </p>
                </motion.div>

                {/* 🔹 Diferença entre Painel de Controle e Configurações */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🧭 Painel de Controle vs Configurações
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
                        <div className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition">
                            <FaCogs className="text-blue-600 text-5xl mx-auto md:mx-0 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Painel de Controle
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Presente desde versões antigas do Windows, o Painel de Controle
                                permite gerenciar **hardware, rede, sistema, programas e
                                segurança**.
                                É ideal para configurações mais detalhadas e administrativas.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition">
                            <FaUserCog className="text-green-600 text-5xl mx-auto md:mx-0 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Configurações
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Introduzido a partir do Windows 8 e aprimorado no Windows 10 e
                                11, o aplicativo **Configurações** oferece uma interface moderna
                                e simplificada para gerenciar **usuários, aparência, atualizações
                                e privacidade**.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 🔹 Ajustes gerais do sistema */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        ⚡ Ajustes Gerais do Sistema
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
                            <FaDesktop className="text-blue-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">
                                Personalização
                            </h3>
                            <p className="text-sm text-gray-600">
                                Ajuste papel de parede, temas, cores, fontes e barra de tarefas.
                            </p>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
                            <FaShieldAlt className="text-indigo-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Segurança</h3>
                            <p className="text-sm text-gray-600">
                                Configure antivírus, firewall e políticas de atualização do
                                sistema.
                            </p>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
                            <FaSyncAlt className="text-teal-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">
                                Atualizações
                            </h3>
                            <p className="text-sm text-gray-600">
                                Mantenha o Windows atualizado com correções de segurança e
                                melhorias de desempenho.
                            </p>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
                            <FaTools className="text-orange-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">
                                Hardware e Dispositivos
                            </h3>
                            <p className="text-sm text-gray-600">
                                Gerencie impressoras, câmeras, monitores e dispositivos
                                conectados.
                            </p>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
                            <FaUserCog className="text-green-600 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Usuários</h3>
                            <p className="text-sm text-gray-600">
                                Adicione, remova e configure contas de usuários e permissões.
                            </p>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition text-center">
                            <FaBug className="text-red-500 text-4xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">
                                Solução de Problemas
                            </h3>
                            <p className="text-sm text-gray-600">
                                Use o solucionador automático para detectar e corrigir erros de
                                rede, som, vídeo e atualizações.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 🔹 Dica final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-3">
                        💡 Dica
                    </h2>
                    <p className="max-w-3xl mx-auto leading-relaxed text-lg">
                        “Conhecer o Painel de Controle e o aplicativo Configurações é
                        fundamental para administrar o Windows com autonomia.
                        Explore cada menu com calma e use o solucionador de problemas — ele
                        é o seu melhor amigo nos momentos difíceis!”
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
