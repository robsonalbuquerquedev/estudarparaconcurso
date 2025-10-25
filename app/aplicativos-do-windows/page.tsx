// app/aplicativos-do-windows/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaPaintBrush, FaFont, FaStickyNote, FaFileAlt } from "react-icons/fa";

export default function AplicativosDoWindows() {
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
                        Aplicativos do Windows 🪟
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        O Windows possui diversos aplicativos nativos úteis para tarefas do dia a dia.
                        Entre os principais estão o **Bloco de Notas**, o **Paint**, o **WordPad** e o **Mapa de Caracteres** — cada um com uma função específica para facilitar o trabalho e a produtividade.
                    </p>
                </motion.div>

                {/* Seção 1 - Bloco de Notas */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaStickyNote className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📝 Bloco de Notas (Notepad)
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                O Bloco de Notas é um **editor de texto simples**, usado para criar e editar arquivos de texto puro (.txt).
                                É ideal para anotações rápidas, listas e até códigos-fonte simples.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-gray-700">
                                <li>Não possui formatação (sem negrito, cores ou fontes diferentes).</li>
                                <li>Cria arquivos leves e compatíveis com qualquer sistema operacional.</li>
                                <li>Muito usado por técnicos e programadores.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Paint */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🎨 Paint
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                O Paint é um **editor gráfico simples** usado para criar e editar imagens.
                                Mesmo básico, ele oferece recursos úteis para desenhar, recortar e colorir.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-gray-700">
                                <li>Permite salvar imagens nos formatos BMP, JPEG, PNG e GIF.</li>
                                <li>Inclui ferramentas como lápis, pincel, balde de tinta e formas geométricas.</li>
                                <li>É ótimo para tarefas rápidas como capturas de tela e pequenas edições.</li>
                            </ul>
                        </div>
                        <FaPaintBrush className="text-pink-500 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 3 - WordPad */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaFileAlt className="text-indigo-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📄 WordPad
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                O WordPad é um **editor de textos mais completo que o Bloco de Notas**, permitindo usar
                                formatações e inserir imagens.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-gray-700">
                                <li>Permite alterar fonte, cor, tamanho e estilo do texto.</li>
                                <li>Cria e lê arquivos .rtf (Rich Text Format) e .docx.</li>
                                <li>Ideal para documentos simples, relatórios ou cartas curtas.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Mapa de Caracteres */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🔠 Mapa de Caracteres
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                O Mapa de Caracteres é uma ferramenta que mostra **todos os símbolos e caracteres especiais**
                                disponíveis nas fontes instaladas no sistema.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-gray-700">
                                <li>Permite copiar caracteres como ©, ®, ™, ✓, ☺ e muitos outros.</li>
                                <li>Facilita o uso de acentos, símbolos matemáticos e letras de outros alfabetos.</li>
                                <li>Para abrir: pressione <strong>Windows + R</strong> e digite <strong>charmap</strong>.</li>
                            </ul>
                        </div>
                        <FaFont className="text-yellow-600 text-9xl mx-auto md:mx-0" />
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
                        <li>O **Bloco de Notas** é ótimo para editar arquivos de configuração e códigos simples.</li>
                        <li>Use o **Paint** para capturas de tela rápidas ou recortes simples.</li>
                        <li>O **WordPad** é ideal para textos pequenos — não substitui o Word, mas é leve e funcional.</li>
                        <li>Com o **Mapa de Caracteres**, é possível inserir símbolos especiais em qualquer aplicativo.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
