// app/gerador-de-apresentacao/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaFilePowerpoint,
    FaImages,
    FaMagic,
    FaFilePdf,
    FaSlideshare,
    FaChartPie,
} from "react-icons/fa";

export default function GeradorDeApresentacao() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-8">
            <section className="max-w-6xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Gerador de Apresentação 🎤
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Os **geradores de apresentação**, como o <strong>PowerPoint</strong>, <strong>Impress</strong> e <strong>Google Slides</strong>,
                        são ferramentas que permitem **criar, editar e exibir slides com textos, imagens e animações** — ideais para aulas, reuniões e concursos.
                    </p>
                </motion.div>

                {/* Seção 1 - Criação de slides */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaSlideshare className="text-orange-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🧩 Criação de Slides
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Um slide é como uma página da sua apresentação.
                                O gerador de slides permite **inserir textos, imagens, formas, ícones e vídeos** em cada página.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Escolha um **tema** (modelo de cores e fonte) para padronizar.</li>
                                <li>Use layouts prontos: título, conteúdo, gráfico ou imagem.</li>
                                <li>Insira imagens ou logotipos para reforçar a identidade visual.</li>
                                <li>Evite muito texto — o foco deve estar na explicação oral.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Inserção de imagens e gráficos */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🖼️ Inserção de Imagens e Gráficos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                As imagens e gráficos tornam a apresentação **mais clara e atrativa**.
                                É possível importar figuras, criar tabelas e adicionar gráficos automáticos.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Formatos aceitos: .jpg, .png, .gif, .svg.</li>
                                <li>Gráficos podem ser criados diretamente na planilha e importados para o slide.</li>
                                <li>Use imagens leves para não sobrecarregar o arquivo.</li>
                                <li>Evite fundos muito chamativos — mantenha o foco no conteúdo.</li>
                            </ul>
                        </div>
                        <FaImages className="text-blue-500 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 3 - Animações e transições */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaMagic className="text-purple-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                ✨ Animações e Transições
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                As animações dão **movimento aos elementos do slide**, enquanto as transições controlam **como um slide entra ou sai** da tela.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Animações:</strong> aplicadas a textos, imagens ou objetos.</li>
                                <li><strong>Transições:</strong> aplicadas entre slides (ex: desvanecer, empurrar, girar).</li>
                                <li>Evite exageros — o ideal é usar animações sutis e coerentes.</li>
                                <li>É possível definir o tempo e a sequência automática das animações.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Exportação e PDF */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        📄 Exportação e Compartilhamento
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFilePowerpoint className="text-orange-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Salvar como .PPTX</h3>
                            <p className="text-sm text-gray-600">
                                Formato padrão do PowerPoint — mantém animações e edição completa.
                            </p>
                        </div>

                        <div className="p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFilePdf className="text-red-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Exportar para PDF</h3>
                            <p className="text-sm text-gray-600">
                                Gera uma versão estática, ideal para impressão e envio por e-mail.
                            </p>
                        </div>

                        <div className="p-6 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaChartPie className="text-blue-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Modo Apresentação</h3>
                            <p className="text-sm text-gray-600">
                                Exibe os slides em tela cheia, com controle por teclado ou temporizador.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Dicas finais */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-orange-600 text-white rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        💡 Dicas
                    </h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg leading-relaxed">
                        <li>Evite excesso de texto — prefira tópicos curtos e imagens ilustrativas.</li>
                        <li>Use **fontes legíveis** e contraste entre fundo e texto.</li>
                        <li>Teste o **modo de apresentação** antes da exibição real.</li>
                        <li>Salve sempre uma **cópia em PDF** para evitar incompatibilidades.</li>
                        <li>Lembre-se: uma boa apresentação é simples, visual e direta!</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
