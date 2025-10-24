// app/compactacao-e-extração-de-arquivos-zip/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaFileArchive, FaFolderOpen, FaCompressAlt, FaFileUpload, FaFileDownload } from "react-icons/fa";

export default function CompactacaoExtracaoZip() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 p-8">
            <section className="max-w-5xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Compactação e Extração de Arquivos ZIP 🗜️
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        A **compactação de arquivos** serve para reduzir o tamanho de documentos e pastas,
                        facilitando o armazenamento e o envio.
                        A **extração** é o processo inverso — recuperar o conteúdo compactado.
                        Vamos entender como isso funciona na prática.
                    </p>
                </motion.div>

                {/* Seção 1 - O que é compactação */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🗂️ O que é Compactação de Arquivos?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Compactar significa **agrupar e reduzir o tamanho** de um ou mais arquivos, criando
                                um único arquivo com extensão **.zip**, **.rar**, **.7z** ou outras.
                                Isso é feito para economizar espaço e facilitar o envio por e-mail ou internet.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Ajuda na organização de vários arquivos em um só pacote.</li>
                                <li>Reduz o espaço ocupado no HD ou pen drive.</li>
                                <li>Permite proteger com senha e criptografia (dependendo do programa).</li>
                            </ul>
                        </div>
                        <FaCompressAlt className="text-yellow-500 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 2 - Criação de arquivos ZIP */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaFileUpload className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                💾 Criando Arquivos Compactados (.ZIP)
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                No Windows, é possível criar arquivos ZIP sem instalar programas adicionais.
                                Veja o passo a passo:
                            </p>
                            <ol className="list-decimal list-inside text-gray-700">
                                <li>Selecione um ou mais arquivos ou pastas.</li>
                                <li>Clique com o botão direito e escolha <strong>Enviar para → Pasta compactada</strong>.</li>
                                <li>O Windows criará um arquivo <strong>.zip</strong> com o mesmo nome do original.</li>
                            </ol>
                            <p className="mt-3 text-gray-700">
                                Também é possível usar programas como **WinRAR** ou **7-Zip** para criar arquivos em
                                outros formatos e com senha.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 3 - Extração de arquivos ZIP */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📂 Extraindo Arquivos Compactados
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                A extração é o processo de **abrir e recuperar** os arquivos de dentro do arquivo compactado.
                                No Windows, também é simples:
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 mb-3">
                                <li>Clique com o botão direito no arquivo <strong>.zip</strong>.</li>
                                <li>Escolha <strong>Extrair tudo...</strong>.</li>
                                <li>Selecione o local onde deseja salvar os arquivos e clique em <strong>Extrair</strong>.</li>
                            </ol>
                            <p className="text-gray-700">
                                Ferramentas como **WinRAR**, **7-Zip** e **PeaZip** também permitem abrir arquivos
                                compactados em vários formatos.
                            </p>
                        </div>
                        <FaFileDownload className="text-green-600 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 4 - Formatos populares */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🔠 Formatos de Compactação Mais Usados
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileArchive className="text-yellow-500 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">ZIP</h3>
                            <p className="text-sm text-gray-600">Formato mais comum e nativo do Windows.</p>
                        </div>

                        <div className="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileArchive className="text-red-500 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">RAR</h3>
                            <p className="text-sm text-gray-600">Usado pelo WinRAR, oferece melhor compressão.</p>
                        </div>

                        <div className="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileArchive className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">7Z</h3>
                            <p className="text-sm text-gray-600">Formato do 7-Zip, com compactação forte e gratuita.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 5 - Dicas do professor */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-yellow-600 text-white rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        💡 Dicas
                    </h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg leading-relaxed">
                        <li>Compacte arquivos antes de enviar por e-mail ou compartilhar online.</li>
                        <li>Evite abrir arquivos compactados de fontes desconhecidas — podem conter vírus.</li>
                        <li>Prefira usar o **formato ZIP**, pois é compatível com todos os sistemas.</li>
                        <li>Para grandes volumes, use **7-Zip** (melhor taxa de compressão e gratuito).</li>
                        <li>Guarde cópias de arquivos importantes **antes de compactar com senha**.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
