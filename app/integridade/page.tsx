// app/integridade/page.tsx
"use client";

import CardAnimado from "../components/CardAnimado";
import Link from "next/link";
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
            link: "/decreto-federal-n-11529",
        },
        {
            icone: <FaScroll className="text-yellow-600" />,
            titulo: "Decreto Federal nº 1.171, de 22 de junho de 1994",
            descricao:
                "Aprova o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal.",
            link: "/decreto-federal-n-1171",
        },
        {
            icone: <FaUserShield className="text-purple-600" />,
            titulo: "Decreto Federal nº 12.122, de 30 de julho de 2024",
            descricao:
                "Institui o Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação.",
            link: "/decreto-federal-n-12122",
        },
        {
            icone: <FaBalanceScale className="text-green-600" />,
            titulo: "Decreto Federal nº 9.203, de 22 de novembro de 2017",
            descricao:
                "Dispõe sobre a política de governança da administração pública federal direta, autárquica e fundacional.",
            link: "/decreto-federal-n-9203",
        },
        {
            icone: <FaFileSignature className="text-red-600" />,
            titulo: "Lei Federal nº 13.709, de 14 de agosto de 2018",
            descricao:
                "Lei Geral de Proteção de Dados Pessoais (LGPD), que regula o tratamento de dados pessoais e garante a privacidade e a segurança das informações.",
            link: "/lei-federal-n-13709",
        },
        {
            icone: <FaGavel className="text-blue-800" />,
            titulo: "Lei Federal nº 12.527, de 18 de novembro de 2011",
            descricao:
                "Lei de Acesso à Informação, que assegura o direito fundamental de acesso às informações públicas.",
            link: "/lei-federal-n-12527",
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
                        <CardAnimado
                            key={index}
                            icone={item.icone}
                            titulo={item.titulo}
                            descricao={item.descricao}
                            variant="default"
                            link={item.link}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
