// app/servicos-de-correio-eletronico/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaInbox,
    FaPaperPlane,
    FaFolderOpen,
    FaReply,
    FaTrashAlt,
    FaGoogle,
    FaMicrosoft,
    FaYahoo,
} from "react-icons/fa";

export default function ServicosCorreioEletronico() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 p-8">
            <section className="max-w-6xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Serviços de Correio Eletrônico 📧
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        O **correio eletrônico (e-mail)** é um dos serviços mais usados na Internet para **enviar, receber e organizar mensagens**.
                        Ele é essencial para comunicação pessoal, profissional e institucional.
                    </p>
                </motion.div>

                {/* Seção 1 - Envio e Recebimento */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaPaperPlane className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                ✉️ Envio e Recebimento de Mensagens
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Um e-mail é composto por campos específicos e pode conter anexos, links e formatação de texto.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Para:</strong> destinatário principal.</li>
                                <li><strong>CC (Com Cópia):</strong> envia cópia para outros destinatários.</li>
                                <li><strong>CCO (Cópia Oculta):</strong> envia cópia sem exibir o nome dos destinatários ocultos.</li>
                                <li><strong>Assunto:</strong> breve descrição da mensagem.</li>
                                <li><strong>Corpo:</strong> conteúdo do e-mail (texto principal).</li>
                            </ul>
                            <p className="mt-3 text-gray-700">
                                O envio e recebimento são gerenciados por **protocolos de comunicação**:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> envia mensagens.</li>
                                <li><strong>POP3 (Post Office Protocol):</strong> baixa mensagens no computador.</li>
                                <li><strong>IMAP (Internet Message Access Protocol):</strong> sincroniza mensagens em vários dispositivos.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Organização de mensagens */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaFolderOpen className="text-yellow-500 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🗂️ Organização de Mensagens
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Os serviços de e-mail permitem **organizar as mensagens** de forma prática, facilitando o uso no dia a dia.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Caixa de Entrada:</strong> mensagens recebidas.</li>
                                <li><strong>Enviados:</strong> mensagens enviadas.</li>
                                <li><strong>Rascunhos:</strong> mensagens salvas antes do envio.</li>
                                <li><strong>Lixeira:</strong> mensagens excluídas (por tempo limitado).</li>
                                <li><strong>Pastas e marcadores:</strong> usados para classificar e arquivar mensagens.</li>
                            </ul>
                            <p className="text-gray-700 mt-3">
                                Também é possível **usar filtros e etiquetas** para automatizar a organização das mensagens recebidas.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 3 - Serviços de E-mail */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        💻 Principais Serviços de E-mail
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaGoogle className="text-red-500 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Gmail</h3>
                            <p className="text-sm text-gray-600">
                                Serviço do Google, gratuito e integrado ao Drive, Agenda e Meet.
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaMicrosoft className="text-blue-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Outlook</h3>
                            <p className="text-sm text-gray-600">
                                E-mail da Microsoft, integrado ao Office e ao OneDrive.
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaYahoo className="text-purple-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Yahoo Mail</h3>
                            <p className="text-sm text-gray-600">
                                Um dos serviços mais antigos, ainda amplamente usado.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Ações básicas */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        ⚙️ Ações Comuns nos E-mails
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaInbox className="text-indigo-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Ler e Responder</h3>
                            <p className="text-sm text-gray-600">
                                Clique em “Responder” para enviar uma resposta ao remetente.
                            </p>
                        </div>

                        <div className="p-6 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaReply className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Encaminhar</h3>
                            <p className="text-sm text-gray-600">
                                Permite enviar o e-mail recebido a outros destinatários.
                            </p>
                        </div>

                        <div className="p-6 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaTrashAlt className="text-red-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Excluir</h3>
                            <p className="text-sm text-gray-600">
                                Remove o e-mail da caixa de entrada; pode ser recuperado da lixeira.
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
                        <li>Evite abrir anexos de remetentes desconhecidos.</li>
                        <li>Use **pastas e etiquetas** para manter sua caixa de entrada organizada.</li>
                        <li>Respeite a etiqueta digital: evite mensagens em massa e textos longos.</li>
                        <li>Ative **filtros anti-spam** e autenticação em duas etapas.</li>
                        <li>Revise sempre o campo “Para” antes de clicar em “Enviar”.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
