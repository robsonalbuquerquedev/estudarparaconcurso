// app/processador-de-textos/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaFileWord,
    FaKeyboard,
    FaAlignLeft,
    FaTools,
    FaRobot,
} from "react-icons/fa";

export default function ProcessadorDeTextos() {
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
                        Processador de Textos ✍️
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        O **processador de textos** é o aplicativo usado para **criar, editar, formatar e automatizar documentos**.
                        Ele é uma ferramenta essencial para a produção de relatórios, ofícios, cartas, provas e editais.
                    </p>
                </motion.div>

                {/* Seção 1 - Criação de Textos */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaKeyboard className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📝 Criação e Edição de Textos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Criar um documento é o primeiro passo.
                                Os processadores de texto permitem **digitar, corrigir e revisar textos** de maneira prática, com recursos de:
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Correção ortográfica e gramatical automática.</li>
                                <li>Inserção de imagens, tabelas e links.</li>
                                <li>Numeração de páginas, cabeçalhos e rodapés.</li>
                                <li>Revisão de texto com controle de alterações.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Formatação */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🎨 Formatação de Textos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                A formatação é o que dá **beleza e organização** ao documento.
                                Ela ajuda a destacar partes importantes e tornar o texto mais legível.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Fonte:</strong> tipo, tamanho, cor e estilo (negrito, itálico, sublinhado).</li>
                                <li><strong>Parágrafo:</strong> alinhamento, recuo, espaçamento e marcadores.</li>
                                <li><strong>Página:</strong> margens, orientação e numeração.</li>
                                <li><strong>Temas e estilos:</strong> padronizam títulos e subtítulos automaticamente.</li>
                            </ul>
                        </div>
                        <FaAlignLeft className="text-indigo-600 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 3 - Automação de Documentos */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaRobot className="text-yellow-500 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                ⚙️ Automação de Documentos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Os processadores modernos também permitem **automatizar tarefas repetitivas**, o que é muito útil para produtividade.
                                Entre as principais ferramentas estão:
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Mala direta:</strong> gera vários documentos (cartas, etiquetas, certificados) a partir de uma base de dados.</li>
                                <li><strong>Macros:</strong> grava e executa ações automáticas repetitivas.</li>
                                <li><strong>Modelos:</strong> documentos prontos que servem de base para novos arquivos.</li>
                                <li><strong>Campos automáticos:</strong> inserem data, número de páginas e autor automaticamente.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Comparativo */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🧩 Principais Processadores de Texto
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-center">
                        <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaFileWord className="text-blue-700 text-6xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Microsoft Word</h3>
                            <p className="text-sm text-gray-600">
                                Mais completo e amplamente usado em empresas e repartições públicas.
                            </p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <FaTools className="text-green-600 text-6xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">LibreOffice Writer</h3>
                            <p className="text-sm text-gray-600">
                                Alternativa gratuita e de código aberto, compatível com arquivos .docx.
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
                        <li>Aprenda os **atalhos de teclado** — eles economizam muito tempo!</li>
                        <li>Use **estilos e modelos prontos** para padronizar documentos.</li>
                        <li>Ative a **verificação ortográfica automática** e revise sempre antes de salvar.</li>
                        <li>Evite copiar textos com formatações ruins — prefira colar como texto simples.</li>
                        <li>Explore a **mala direta e os campos automáticos** para documentos repetitivos.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
