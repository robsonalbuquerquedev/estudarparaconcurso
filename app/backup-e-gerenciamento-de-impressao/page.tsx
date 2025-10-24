// app/backup-e-gerenciamento-de-impressão/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaPrint, FaCloudUploadAlt, FaHdd, FaSyncAlt, FaFolderOpen, FaCheckCircle } from "react-icons/fa";

export default function BackupEImpressao() {
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
                        Backup e Gerenciamento de Impressão 💾🖨️
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Fazer **cópias de segurança (backup)** e gerenciar **impressoras** são tarefas essenciais
                        para manter dados protegidos e o ambiente de trabalho funcionando com eficiência.
                        Nesta seção, você aprenderá os **conceitos, tipos e boas práticas** de backup e impressão.
                    </p>
                </motion.div>

                {/* Seção 1 - Backup */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                💾 O que é Backup?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Backup é o processo de **criar cópias de segurança** dos arquivos e dados importantes
                                do computador. Ele protege contra **perdas acidentais**, **falhas de hardware**,
                                **vírus** e até **ataques cibernéticos**.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Backup completo:</strong> copia todos os arquivos.</li>
                                <li><strong>Backup incremental:</strong> copia apenas arquivos alterados desde o último backup.</li>
                                <li><strong>Backup diferencial:</strong> copia arquivos alterados desde o último backup completo.</li>
                            </ul>
                        </div>
                        <FaCloudUploadAlt className="text-blue-500 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 2 - Tipos de armazenamento */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        ☁️ Onde armazenar seus Backups
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaHdd className="text-blue-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Disco Externo</h3>
                            <p className="text-sm text-gray-600">
                                Armazenamento físico em HDs ou SSDs externos. Ideal para backups locais rápidos.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaCloudUploadAlt className="text-indigo-500 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Nuvem</h3>
                            <p className="text-sm text-gray-600">
                                Serviços como Google Drive, OneDrive e Dropbox fazem cópias automáticas seguras.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaFolderOpen className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Servidor Local</h3>
                            <p className="text-sm text-gray-600">
                                Usado em redes empresariais. Permite controle interno e agendamento automático.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 3 - Gerenciamento de Impressão */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaPrint className="text-gray-700 text-9xl mx-auto md:mx-0" />
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🖨️ Gerenciamento de Impressoras
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                O gerenciamento de impressoras envolve **instalar, configurar e monitorar** os
                                dispositivos de impressão do sistema operacional.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Instalação:</strong> via cabo USB, rede Wi-Fi ou Bluetooth.</li>
                                <li><strong>Fila de impressão:</strong> mostra os documentos aguardando para serem impressos.</li>
                                <li><strong>Drivers:</strong> garantem a comunicação correta entre o sistema e a impressora.</li>
                                <li><strong>Configurações:</strong> qualidade, papel, margens e impressão frente e verso.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Dicas e boas práticas */}
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
                        <li>Faça **backups regulares** e mantenha cópias em locais diferentes (local e nuvem).</li>
                        <li>Use **nomes e datas** nos arquivos de backup para facilitar a restauração.</li>
                        <li>Mantenha os **drivers de impressoras atualizados** para evitar falhas.</li>
                        <li>Monitore a **fila de impressão** para cancelar tarefas travadas.</li>
                        <li>Evite imprimir desnecessariamente — **ajude o meio ambiente 🌱**.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
