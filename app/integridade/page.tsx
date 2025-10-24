// app/integridade/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaBalanceScale,
    FaFileSignature,
    FaGavel,
    FaShieldAlt,
    FaUserShield,
    FaScroll,
    FaHandsHelping,
} from "react-icons/fa";

export default function Integridade() {
    const decretos = [
        {
            icone: <FaShieldAlt className="text-blue-600" />,
            titulo: "Decreto Federal nº 11.529, de 16 de maio de 2023",
            descricao:
                "Institui o Sistema de Integridade, Transparência e Acesso à Informação da Administração Pública Federal e define a Política de Transparência e Acesso à Informação da Administração Pública Federal.",
        },
        {
            icone: <FaScroll className="text-yellow-600" />,
            titulo: "Decreto Federal nº 1.171, de 22 de junho de 1994",
            descricao:
                "Aprova o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal.",
        },
        {
            icone: <FaUserShield className="text-purple-600" />,
            titulo: "Decreto Federal nº 12.122, de 30 de julho de 2024",
            descricao:
                "Institui o Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação.",
        },
        {
            icone: <FaBalanceScale className="text-green-600" />,
            titulo: "Decreto Federal nº 9.203, de 22 de novembro de 2017",
            descricao:
                "Dispõe sobre a política de governança da administração pública federal direta, autárquica e fundacional.",
        },
        {
            icone: <FaFileSignature className="text-red-600" />,
            titulo: "Lei Federal nº 13.709, de 14 de agosto de 2018",
            descricao:
                "Lei Geral de Proteção de Dados Pessoais (LGPD), que regula o tratamento de dados pessoais e garante a privacidade e a segurança das informações.",
        },
        {
            icone: <FaGavel className="text-blue-800" />,
            titulo: "Lei Federal nº 12.527, de 18 de novembro de 2011",
            descricao:
                "Lei de Acesso à Informação, que assegura o direito fundamental de acesso às informações públicas.",
        },
        {
            icone: <FaHandsHelping className="text-pink-600" />,
            titulo: "Portaria MGI nº 6.719, de 13 de setembro de 2024",
            descricao:
                "Institui o Plano Federal de Prevenção e Enfrentamento do Assédio e da Discriminação na Administração Pública Federal Direta, suas Autarquias e Fundações.",
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
                        Integridade e Ética no Serviço Público ⚖️
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        O estudo da <strong>Integridade</strong> envolve compreender as normas e políticas que
                        orientam a conduta ética, a transparência e a responsabilidade dentro da
                        administração pública. Abaixo estão os principais <strong>decretos e leis</strong> que
                        norteiam essas práticas no âmbito federal.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Image
                            src="/integridade-banner.jpg"
                            alt="Ilustração de integridade e ética"
                            width={480}
                            height={280}
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </motion.div>

                {/* 🔹 Lista de Decretos */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {decretos.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-3 text-lg font-semibold text-gray-700">
                                {item.icone}
                                {item.titulo}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.descricao}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
