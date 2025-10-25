// app/navegadores-e-servicos-da-web/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaChrome,
    FaFirefoxBrowser,
    FaEdge,
    FaSafari,
    FaEnvelope,
    FaSearch,
    FaLock,
    FaGlobe,
} from "react-icons/fa";

export default function NavegadoresEServicos() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 p-8">
            <section className="max-w-6xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Navegadores e Serviços da Web 🌐
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Os **navegadores da web** são programas que permitem acessar e interagir com sites,
                        enquanto os **serviços da internet** — como **buscas online** e **correio eletrônico** —
                        são ferramentas essenciais para o dia a dia digital.
                    </p>
                </motion.div>

                {/* Seção 1 - O que é um navegador */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaGlobe className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🌍 O que é um Navegador?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Um navegador (ou browser) é o programa que **interpreta e exibe páginas da web**.
                                Ele conecta o computador aos servidores da internet e mostra o conteúdo de sites.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Exemplos: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari e Opera.</li>
                                <li>Usam protocolos como <strong>HTTP</strong> e <strong>HTTPS</strong>.</li>
                                <li>Permitem navegação por abas, favoritos, histórico e modo anônimo.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Principais Navegadores */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🌐 Principais Navegadores
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaChrome className="text-red-500 text-6xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Google Chrome</h3>
                            <p className="text-sm text-gray-600">
                                O mais usado no mundo, conhecido pela velocidade e integração com o Google.
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFirefoxBrowser className="text-orange-500 text-6xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Mozilla Firefox</h3>
                            <p className="text-sm text-gray-600">
                                Código aberto e foco em privacidade e segurança.
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaEdge className="text-blue-600 text-6xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Microsoft Edge</h3>
                            <p className="text-sm text-gray-600">
                                Navegador moderno da Microsoft, baseado no Chromium.
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaSafari className="text-gray-600 text-6xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Apple Safari</h3>
                            <p className="text-sm text-gray-600">
                                Navegador padrão do macOS e iOS, otimizado para desempenho e energia.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 3 - Buscas Online */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaSearch className="text-indigo-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🔍 Serviços de Busca Online
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Os mecanismos de busca permitem **encontrar informações na web**
                                a partir de palavras-chave. Eles analisam bilhões de páginas e exibem os resultados mais relevantes.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Principais buscadores: <strong>Google</strong>, <strong>Bing</strong>, <strong>DuckDuckGo</strong> e <strong>Yahoo</strong>.</li>
                                <li>Use operadores para buscas avançadas: <code>site:</code>, <code>filetype:</code>, <code>“entre aspas”</code>, <code>-palavra</code>.</li>
                                <li>Os resultados são exibidos em ordem de relevância e popularidade.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Correio Eletrônico */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaEnvelope className="text-blue-500 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📧 Correio Eletrônico (E-mail)
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                O e-mail é um dos serviços mais antigos e úteis da Internet.
                                Permite **enviar e receber mensagens, anexos e arquivos** entre usuários.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Serviços populares: Gmail, Outlook, Yahoo Mail e ProtonMail.</li>
                                <li>Protocolos utilizados: <strong>SMTP</strong>, <strong>POP3</strong> e <strong>IMAP</strong>.</li>
                                <li>O campo “CC” envia cópia e “CCO” envia cópia oculta.</li>
                                <li>Os anexos devem ser leves e sem riscos de segurança.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 5 - Segurança e Boas Práticas */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        🔒 Dicas de Segurança na Web
                    </h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg leading-relaxed">
                        <li>Verifique se o site usa **HTTPS** antes de enviar dados pessoais.</li>
                        <li>Evite clicar em links de e-mails suspeitos (phishing).</li>
                        <li>Use **senhas fortes** e ative a verificação em duas etapas.</li>
                        <li>Limpe cookies e histórico regularmente para manter privacidade.</li>
                        <li>Atualize o navegador e o antivírus com frequência.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
