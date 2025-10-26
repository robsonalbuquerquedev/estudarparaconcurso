"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopicosLinguisticos() {
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
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

    const Exemplo = ({ errado, correto, explicacao }: { errado: string; correto: string; explicacao: string }) => (
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md my-3">
            <p className="text-red-600">
                ❌ <strong>Errado:</strong> {errado}
            </p>
            <p className="text-green-700 mt-1">
                ✅ <strong>Correto:</strong> {correto}
            </p>
            <p className="text-gray-600 text-sm mt-1">{explicacao}</p>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 gap-8 relative">
            {/* Sidebar */}
            <aside className="md:w-1/4 bg-white p-5 rounded-xl shadow-md border border-gray-200 h-fit sticky top-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Navegação Rápida</h2>
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
                    <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4">
                        Relações Coesivas
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed">
                        As relações coesivas conectam ideias e mantêm a continuidade do texto, evitando repetições.
                        São feitas com pronomes e advérbios.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                        <li><strong>Pronomes:</strong> retomam palavras já ditas.</li>
                        <li><strong>Advérbios:</strong> indicam tempo, lugar e modo para ligar ideias.</li>
                    </ul>

                    <Exemplo
                        errado="Maria pegou o livro. Maria guardou o livro."
                        correto="Maria pegou o livro e o guardou."
                        explicacao="O pronome 'o' retoma 'livro', criando coesão e evitando repetição."
                    />
                </section>

                {/* Relações Semântico-Sintáticas */}
                <section id="semantico" className="mb-16 scroll-mt-20">
                    <motion.h2 initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4">
                        Relações Semântico-Sintáticas
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        As conjunções unem orações e estabelecem relações de sentido como causa, consequência, oposição, entre outras.
                    </p>
                    <Exemplo
                        errado="Ele estudou muito, mas passou na prova."
                        correto="Ele estudou muito, por isso passou na prova."
                        explicacao="A conjunção 'por isso' expressa consequência; 'mas' indicaria oposição."
                    />
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Causa:</strong> porque, visto que.</li>
                        <li><strong>Consequência:</strong> portanto, por isso.</li>
                        <li><strong>Oposição:</strong> mas, porém.</li>
                        <li><strong>Finalidade:</strong> para que, a fim de que.</li>
                        <li><strong>Condição:</strong> se, caso.</li>
                    </ul>
                </section>

                {/* Pontuação */}
                <section id="pontuacao" className="mb-16 scroll-mt-20">
                    <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4">
                        Emprego da Pontuação
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed">
                        A pontuação orienta o ritmo e o sentido do texto. Um sinal mal colocado pode mudar completamente a mensagem.
                    </p>

                    <Exemplo
                        errado="Vamos comer crianças!"
                        correto="Vamos comer, crianças!"
                        explicacao="A vírgula separa o vocativo, evitando ambiguidade cômica."
                    />
                    <Exemplo
                        errado="Se você vier eu fico feliz."
                        correto="Se você vier, eu fico feliz."
                        explicacao="A vírgula separa a oração subordinada da principal, tornando o texto mais claro."
                    />
                </section>

                {/* Sintaxe */}
                <section id="sintaxe" className="mb-16 scroll-mt-20">
                    <motion.h2 initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4">
                        Sintaxe de Concordância e Regência
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        A concordância e a regência garantem a harmonia entre os termos de uma frase.
                    </p>

                    <Exemplo
                        errado="Os aluno estudou para a prova."
                        correto="Os alunos estudaram para a prova."
                        explicacao="O verbo precisa concordar com o sujeito em número e pessoa."
                    />
                    <Exemplo
                        errado="Assisti o filme ontem."
                        correto="Assisti ao filme ontem."
                        explicacao="O verbo 'assistir' exige a preposição 'a' quando tem sentido de 'ver'."
                    />
                </section>

                {/* Acordo Ortográfico */}
                <section id="acordo" className="scroll-mt-20">
                    <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold text-gray-800 mb-4">
                        Novo Acordo Ortográfico
                    </motion.h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        O Acordo Ortográfico unificou as regras de escrita entre os países de língua portuguesa.
                    </p>

                    <Exemplo
                        errado="Lingüiça"
                        correto="Linguiça"
                        explicacao="O trema foi abolido no Novo Acordo Ortográfico."
                    />
                    <Exemplo
                        errado="Ideía"
                        correto="Ideia"
                        explicacao="Palavras com ditongos abertos 'éi' e 'ói' deixaram de ser acentuadas quando nas paroxítonas."
                    />
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
