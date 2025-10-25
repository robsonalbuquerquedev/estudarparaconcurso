// app/planilha-eletronica/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    FaTable,
    FaEquals,
    FaChartBar,
    FaFilter,
    FaFileImport,
    FaKeyboard,
} from "react-icons/fa";

export default function PlanilhaEletronica() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
            <section className="max-w-6xl mx-auto">
                {/* Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Planilha Eletrônica 📊
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        As **planilhas eletrônicas** são ferramentas poderosas para organizar, calcular e analisar dados.
                        Programas como o **Microsoft Excel** e o **LibreOffice Calc** permitem criar fórmulas, gráficos e relatórios com eficiência e precisão.
                    </p>
                </motion.div>

                {/* Seção 1 - Estrutura da planilha */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaTable className="text-green-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                🧩 Estrutura de uma Planilha
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Uma planilha é composta por **células organizadas em linhas e colunas**.
                                Cada célula possui um endereço, como <strong>A1</strong> (coluna A, linha 1).
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Linhas são numeradas (1, 2, 3...).</li>
                                <li>Colunas são nomeadas com letras (A, B, C...).</li>
                                <li>As células podem conter textos, números ou fórmulas.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 2 - Fórmulas */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                ➕ Fórmulas e Funções
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                As fórmulas são a alma das planilhas! Elas permitem realizar **cálculos automáticos** e **análises dinâmicas**.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Operações básicas:</strong> =A1+B1, =A1-B1, =A1*B1, =A1/B1</li>
                                <li><strong>Funções matemáticas:</strong> =SOMA(A1:A10), =MÉDIA(B1:B5)</li>
                                <li><strong>Funções lógicas:</strong> =SE(A1&gt;10;"Maior";"Menor")</li>
                                <li><strong>Funções de texto:</strong> =CONCAT(A1;" ";B1), =ESQUERDA(A1;5)</li>
                            </ul>
                        </div>
                        <FaEquals className="text-green-700 text-9xl mx-auto md:mx-0" />
                    </div>
                </motion.section>

                {/* Seção 3 - Gráficos */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <FaChartBar className="text-blue-600 text-9xl mx-auto md:mx-0" />
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                📊 Criação de Gráficos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Os gráficos tornam os dados mais **visuais e compreensíveis**.
                                É possível gerar gráficos automaticamente a partir das células selecionadas.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Tipos de gráficos:</strong> Colunas, barras, pizza, linhas e áreas.</li>
                                <li>É possível personalizar cores, títulos e legendas.</li>
                                <li>Os gráficos se atualizam automaticamente quando os dados mudam.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Seção 4 - Formatação e Filtros */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        🎨 Formatação e Filtros
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaKeyboard className="text-green-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Formatação Condicional</h3>
                            <p className="text-sm text-gray-600">
                                Muda automaticamente a cor de células com base em condições (ex: valores altos em verde, baixos em vermelho).
                            </p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFilter className="text-indigo-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Filtros</h3>
                            <p className="text-sm text-gray-600">
                                Permitem exibir apenas as linhas que atendem a critérios específicos, como nomes ou valores.
                            </p>
                        </div>
                        <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition">
                            <FaFileImport className="text-yellow-600 text-5xl mx-auto mb-2" />
                            <h3 className="font-semibold text-gray-800 mb-1">Importação de Dados</h3>
                            <p className="text-sm text-gray-600">
                                É possível importar informações de outras planilhas, arquivos CSV ou bancos de dados externos.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Dicas finais */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-green-600 text-white rounded-2xl p-8 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        💡 Dicas
                    </h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg leading-relaxed">
                        <li>Use <strong>referências absolutas ($A$1)</strong> para manter células fixas em fórmulas copiadas.</li>
                        <li>Explore o atalho <strong>Ctrl + Shift + L</strong> para aplicar filtros rapidamente.</li>
                        <li>Salve planilhas em <strong>.xlsx</strong> (Excel) ou <strong>.ods</strong> (Calc).</li>
                        <li>Evite fórmulas manuais extensas — use funções automáticas.</li>
                        <li>Os gráficos e cores tornam a planilha mais clara e visual para o leitor.</li>
                    </ul>
                </motion.section>
            </section>
        </main>
    );
}
