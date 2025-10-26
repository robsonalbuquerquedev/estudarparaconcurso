"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LeituraECompreensaoDeTextos() {
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        // Ativa rolagem suave
        document.documentElement.style.scrollBehavior = "smooth";

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 gap-8 relative">
            {/* Sidebar */}
            <aside className="md:w-1/4 bg-white p-5 rounded-xl shadow-md border border-gray-200 h-fit sticky top-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Navegação Rápida
                </h2>
                <nav className="flex flex-col space-y-3">
                    <a
                        href="#reconstrucao"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                    >
                        📘 Reconstrução de Informações
                    </a>
                    <a
                        href="#generos"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                    >
                        🧩 Gêneros e Tipos Textuais
                    </a>
                </nav>
            </aside>

            {/* Conteúdo principal */}
            <main className="md:w-3/4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left"
                >
                    Leitura e Compreensão de Textos
                </motion.h1>

                {/* Reconstrução de informações */}
                <section id="reconstrucao" className="mb-16 scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Reconstrução de Informações do Texto
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        A leitura e a compreensão de textos exigem mais do que decifrar palavras.
                        É um processo ativo de reconstrução de sentido, no qual o leitor interpreta,
                        relaciona e infere informações a partir do que lê.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Informações implícitas:</strong> o que o texto sugere, mas não diz explicitamente.</li>
                        <li><strong>Relações com conhecimentos prévios:</strong> o leitor usa o que já sabe para compreender melhor o texto.</li>
                        <li><strong>Reconhecimento de tema e finalidade:</strong> identificar sobre o que o texto fala e qual seu objetivo.</li>
                        <li><strong>Hierarquia de ideias:</strong> distinguir ideias principais e secundárias.</li>
                        <li><strong>Ambiguidade, ironia e humor:</strong> compreender jogos de sentido e intencionalidade do autor.</li>
                        <li><strong>Sentido de palavras pelo contexto:</strong> entender o significado dependendo da situação comunicativa.</li>
                        <li><strong>Locutor e interlocutor:</strong> quem fala no texto e para quem se fala.</li>
                        <li><strong>Intertextualidade:</strong> perceber quando um texto dialoga com outro.</li>
                        <li><strong>Síntese e paráfrase:</strong> resumir ou reescrever mantendo o sentido original.</li>
                    </ul>
                </section>

                {/* Gêneros e tipos textuais */}
                <section id="generos" className="scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Gêneros e Tipos Textuais
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Cada texto pertence a um gênero que possui estrutura, função e estilo próprios.
                        Entender esses elementos é essencial para interpretar e produzir textos com clareza.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Texto narrativo:</strong> relata fatos e ações. Exemplos: crônica, notícia e relato.</li>
                        <li><strong>Texto argumentativo:</strong> defende uma tese com base em argumentos e refutações.</li>
                        <li><strong>Estratégias de persuasão:</strong> recursos usados para convencer o leitor (emoção, lógica, autoridade).</li>
                        <li><strong>Aspectos literários:</strong> temas como amor, injustiça, morte e esperança.</li>
                        <li><strong>Tipos textuais:</strong>
                            <ul className="list-disc ml-6 space-y-1">
                                <li><strong>Descritivo:</strong> descreve pessoas, lugares ou objetos.</li>
                                <li><strong>Injuntivo:</strong> orienta ações — manuais, receitas, editais.</li>
                                <li><strong>Expositivo:</strong> apresenta informações de forma objetiva.</li>
                            </ul>
                        </li>
                        <li><strong>Análise discursiva:</strong> estuda como o contexto e a intenção moldam o sentido.</li>
                    </ul>
                </section>
            </main>

            {/* Botão "Voltar ao topo" */}
            {showTopButton && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105 cursor-pointer"
                    aria-label="Voltar ao topo"
                >
                    ⬆️
                </motion.button>
            )}
        </div>
    );
}
