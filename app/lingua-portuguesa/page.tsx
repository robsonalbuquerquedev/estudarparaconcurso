// app/lingua-portuguesa/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaBookOpen,
    FaFeatherAlt,
    FaPenNib,
    FaLanguage,
    FaPencilAlt,
    FaQuoteRight,
} from "react-icons/fa";

export default function LinguaPortuguesa() {
    const secoes = [
        {
            icone: <FaBookOpen className="text-blue-600" />,
            titulo: "1. Leitura e compreensão de textos",
            subtitulos: [
                {
                    nome: "1.1. Reconstrução de informações do texto",
                    conteudo:
                        "Identificação de informações implícitas; relações entre informações do texto e conhecimentos prévios; reconhecimento de tema, finalidade e intenções; ordenação e hierarquia de ideias; ambiguidade, ironia, humor, opiniões e valores; identificação do sentido de palavras pelo contexto; locutor e interlocutor; intertextualidade e efeitos da citação de um texto em outro; síntese e paráfrase.",
                },
                {
                    nome: "1.2. Gêneros e tipos textuais",
                    conteudo:
                        "Estrutura e elementos do texto narrativo (relato, notícia e crônica); texto argumentativo (tese, argumento, contra argumento e refutação); estratégias de persuasão; aspectos temáticos de textos literários; tipos descritivo, injuntivo e expositivo; análise discursiva de gêneros diversos.",
                },
            ],
        },
        {
            icone: <FaFeatherAlt className="text-purple-600" />,
            titulo: "2. Tópicos linguísticos",
            subtitulos: [
                {
                    nome: "2.1. Relações coesivas",
                    conteudo:
                        "Uso de pronomes e advérbios para estabelecer conexões e continuidade textual.",
                },
                {
                    nome: "2.2. Relações semântico-sintáticas",
                    conteudo:
                        "Conjunções e locuções que expressam explicação, oposição, conclusão, adição, alternância, causa, consequência, tempo, finalidade, condição, comparação, conformidade e proporção.",
                },
                {
                    nome: "2.3. Emprego da pontuação",
                    conteudo:
                        "Funções e efeitos da pontuação na clareza e expressividade do texto.",
                },
                {
                    nome: "2.4. Sintaxe de concordância e regência",
                    conteudo:
                        "Emprego correto da concordância nominal e verbal, e das regências nominal e verbal.",
                },
                {
                    nome: "2.5. Novo Acordo Ortográfico",
                    conteudo:
                        "Principais mudanças introduzidas pelo Acordo Ortográfico, vigentes desde 2016.",
                },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 p-8">
            <section className="max-w-5xl mx-auto">
                {/* 🔹 Cabeçalho e Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Língua Portuguesa ✍️
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        O estudo da <strong>Língua Portuguesa</strong> desenvolve a capacidade de compreender e
                        produzir textos, reconhecendo a função da linguagem em diferentes contextos.
                        Abaixo estão os principais eixos abordados em provas e concursos públicos.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Image
                            src="/portugues-banner.jpg"
                            alt="Ilustração de leitura e escrita"
                            width={480}
                            height={280}
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </motion.div>

                {/* 🔹 Conteúdo */}
                <div className="space-y-10">
                    {secoes.map((secao, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {secao.icone}
                                <h2 className="text-2xl font-semibold text-gray-800">{secao.titulo}</h2>
                            </div>

                            <div className="space-y-4">
                                {secao.subtitulos.map((sub, i) => (
                                    <div key={i}>
                                        <h3 className="text-lg font-semibold text-gray-700 mb-1 flex items-center gap-2">
                                            <FaPenNib className="text-amber-600" />
                                            {sub.nome}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{sub.conteudo}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
