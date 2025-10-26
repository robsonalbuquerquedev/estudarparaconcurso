"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopicosLinguisticos() {
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        // Rolagem suave
        document.documentElement.style.scrollBehavior = "smooth";

        const handleScroll = () => {
            setShowTopButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 gap-8 relative">
            {/* Sidebar */}
            <aside className="md:w-1/4 bg-white p-5 rounded-xl shadow-md border border-gray-200 h-fit sticky top-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Navegação Rápida
                </h2>
                <nav className="flex flex-col space-y-3">
                    <a href="#coesivas" className="text-blue-700 hover:text-blue-900">🔗 Relações Coesivas</a>
                    <a href="#semantico" className="text-blue-700 hover:text-blue-900">🧠 Relações Semântico-Sintáticas</a>
                    <a href="#pontuacao" className="text-blue-700 hover:text-blue-900">✍️ Emprego da Pontuação</a>
                    <a href="#sintaxe" className="text-blue-700 hover:text-blue-900">📚 Sintaxe de Concordância e Regência</a>
                    <a href="#acordo" className="text-blue-700 hover:text-blue-900">📝 Novo Acordo Ortográfico</a>
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
                    Tópicos Linguísticos
                </motion.h1>

                {/* Relações Coesivas */}
                <section id="coesivas" className="mb-16 scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Relações Coesivas
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed">
                        As relações coesivas garantem que as ideias de um texto estejam conectadas, evitando repetições e tornando a leitura fluida.
                        São criadas principalmente por meio do uso de <strong>pronomes</strong> e <strong>advérbios</strong>.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                        <li><strong>Pronomes:</strong> substituem ou retomam termos já mencionados (ex.: <em>Maria</em> chegou. <em>Ela</em> estava cansada).</li>
                        <li><strong>Advérbios:</strong> indicam tempo, lugar, modo e estabelecem continuidade (ex.: <em>Depois</em>, <em>lá</em>, <em>assim</em>).</li>
                    </ul>
                </section>

                {/* Relações Semântico-Sintáticas */}
                <section id="semantico" className="mb-16 scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Relações Semântico-Sintáticas
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        As conjunções e locuções conjuntivas expressam diferentes relações de sentido entre as orações:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Explicação:</strong> porque, que, pois.</li>
                        <li><strong>Oposição:</strong> mas, porém, todavia.</li>
                        <li><strong>Conclusão:</strong> logo, portanto, por isso.</li>
                        <li><strong>Adição:</strong> e, nem, não só... mas também.</li>
                        <li><strong>Alternância:</strong> ou, ora... ora.</li>
                        <li><strong>Causa:</strong> porque, visto que, como.</li>
                        <li><strong>Consequência:</strong> de modo que, tanto que.</li>
                        <li><strong>Tempo:</strong> quando, enquanto, antes que.</li>
                        <li><strong>Finalidade:</strong> para que, a fim de que.</li>
                        <li><strong>Condição:</strong> se, caso, contanto que.</li>
                        <li><strong>Comparação:</strong> como, assim como, tal qual.</li>
                        <li><strong>Conformidade:</strong> conforme, segundo.</li>
                        <li><strong>Proporção:</strong> à medida que, quanto mais... mais.</li>
                    </ul>
                </section>

                {/* Emprego da Pontuação */}
                <section id="pontuacao" className="mb-16 scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Emprego da Pontuação
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed">
                        A pontuação tem papel fundamental na clareza e expressividade do texto.
                        Além de separar ideias, ela influencia o ritmo e o tom da leitura.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                        <li><strong>Vírgula:</strong> separa elementos, indica pausa e evita ambiguidades.</li>
                        <li><strong>Ponto:</strong> encerra períodos e marca o fim de uma ideia.</li>
                        <li><strong>Ponto e vírgula:</strong> separa orações longas ou termos complexos.</li>
                        <li><strong>Dois-pontos:</strong> introduzem explicações, citações ou enumerações.</li>
                        <li><strong>Ponto de interrogação e exclamação:</strong> expressam questionamento e emoção.</li>
                    </ul>
                </section>

                {/* Sintaxe de Concordância e Regência */}
                <section id="sintaxe" className="mb-16 scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Sintaxe de Concordância e Regência
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        A sintaxe garante a harmonia entre as palavras da frase.
                        As principais regras dizem respeito à concordância e à regência.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Concordância nominal:</strong> o adjetivo concorda em gênero e número com o substantivo (ex.: <em>as casas bonitas</em>).</li>
                        <li><strong>Concordância verbal:</strong> o verbo concorda com o sujeito (ex.: <em>os alunos estudam</em>).</li>
                        <li><strong>Regência nominal:</strong> relação entre nome e preposição (ex.: <em>orgulho de você</em>).</li>
                        <li><strong>Regência verbal:</strong> relação entre verbo e preposição (ex.: <em>gostar de música</em>).</li>
                    </ul>
                </section>

                {/* Novo Acordo Ortográfico */}
                <section id="acordo" className="scroll-mt-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4"
                    >
                        Novo Acordo Ortográfico
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        O Novo Acordo Ortográfico da Língua Portuguesa entrou em vigor em 2016 e unificou regras entre os países lusófonos.
                        Algumas das principais mudanças foram:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Fim do trema:</strong> palavras como “linguiça” e “tranquilo” deixaram de usar o sinal.</li>
                        <li><strong>Inclusão das letras K, W e Y</strong> no alfabeto oficial (total de 26 letras).</li>
                        <li><strong>Alterações no uso do hífen:</strong> casos como <em>autoescola</em> (sem hífen) e <em>micro-ondas</em> (com hífen).</li>
                        <li><strong>Regras de acentuação:</strong> fim do acento em palavras como <em>ideia</em> e <em>voo</em>.</li>
                    </ul>
                </section>
            </main>

            {/* Botão Voltar ao topo */}
            {showTopButton && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-105"
                    aria-label="Voltar ao topo"
                >
                    ⬆️
                </motion.button>
            )}
        </div>
    );
}
