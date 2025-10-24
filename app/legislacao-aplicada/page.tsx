// app/legislacao-aplicada/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaBalanceScale,
    FaGavel,
    FaScroll,
    FaUserTie,
    FaBook,
    FaUniversity,
    FaFileContract,
    FaBuilding,
} from "react-icons/fa";

export default function LegislacaoAplicada() {
    const leis = [
        {
            icone: <FaScroll className="text-blue-700" />,
            titulo: "Lei nº 8.112/1990",
            descricao:
                "Dispõe sobre o Regime Jurídico dos Servidores Públicos Civis da União, das Autarquias e das Fundações Públicas Federais.",
        },
        {
            icone: <FaGavel className="text-red-600" />,
            titulo: "Lei Federal nº 8.429/1992",
            descricao:
                "Trata das sanções aplicáveis em virtude da prática de atos de improbidade administrativa.",
        },
        {
            icone: <FaScroll className="text-yellow-600" />,
            titulo: "Lei Federal nº 9.784/1999",
            descricao:
                "Regula o processo administrativo no âmbito da Administração Pública Federal, assegurando direitos e princípios aos administrados.",
        },
        {
            icone: <FaBalanceScale className="text-green-700" />,
            titulo: "Decreto Federal nº 9.830/2019",
            descricao:
                "Regulamenta o Processo Decisório na Administração Pública, com foco na motivação e fundamentação das decisões.",
        },
        {
            icone: <FaBook className="text-indigo-600" />,
            titulo: "Noções de Direito Constitucional",
            descricao:
                "Abrange os princípios fundamentais, direitos e garantias fundamentais, direitos sociais e a organização da administração pública.",
        },
        {
            icone: <FaBalanceScale className="text-emerald-700" />,
            titulo: "Princípios do Direito Administrativo",
            descricao:
                "Compreende legalidade, impessoalidade, moralidade, publicidade, eficiência e outros princípios norteadores da Administração.",
        },
        {
            icone: <FaFileContract className="text-orange-600" />,
            titulo: "Atos Administrativos",
            descricao:
                "Estudo dos elementos, atributos, espécies, classificação, anulação, revogação e convalidação dos atos administrativos.",
        },
        {
            icone: <FaUserTie className="text-purple-700" />,
            titulo: "Agentes Públicos",
            descricao:
                "Classificação dos agentes: políticos, administrativos, honoríficos e delegados. Distinção entre servidor público e cargo comissionado.",
        },
        {
            icone: <FaUniversity className="text-blue-600" />,
            titulo: "Lei Federal nº 11.892/2008",
            descricao:
                "Institui a Rede Federal de Educação Profissional, Científica e Tecnológica e cria os Institutos Federais de Educação, Ciência e Tecnologia.",
        },
        {
            icone: <FaBuilding className="text-gray-600" />,
            titulo: "Lei Federal nº 11.091/2005",
            descricao:
                "Dispõe sobre o Plano de Carreira dos Cargos Técnico-Administrativos em Educação nas Instituições Federais de Ensino.",
        },
        {
            icone: <FaFileContract className="text-teal-600" />,
            titulo: "Lei Federal nº 14.133/2021",
            descricao:
                "Nova Lei de Licitações e Contratos Administrativos: princípios, modalidades, fases, dispensa, inexigibilidade e execução contratual.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8">
            <section className="max-w-5xl mx-auto">
                {/* 🔹 Cabeçalho e Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Legislação Aplicada 📚
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        A disciplina de <strong>Legislação Aplicada</strong> aborda as principais leis,
                        decretos e princípios que regem a Administração Pública Federal.
                        É essencial para o entendimento do funcionamento ético, jurídico e
                        administrativo dos órgãos públicos.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Image
                            src="/legislacao-banner.png"
                            alt="Ilustração de legislação e direito"
                            width={480}
                            height={280}
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </motion.div>

                {/* 🔹 Lista de Leis e Decretos */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {leis.map((lei, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-3 text-lg font-semibold text-gray-700">
                                {lei.icone}
                                {lei.titulo}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {lei.descricao}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
