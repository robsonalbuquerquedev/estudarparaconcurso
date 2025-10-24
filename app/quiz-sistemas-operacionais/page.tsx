// app/questoes-sistemas-operacionais/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// 🔹 Função utilitária para embaralhar arrays
function embaralhar<T>(array: T[]): T[] {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
}

export default function QuestoesSistemasOperacionais() {
    const questoesBase = [
        {
            texto: "É conhecido como o mais importante software do computador, que gerencia todos os arquivos e programas.",
            alternativas: ["Hardware", "Sistema Operacional", "Pacote Office", "Firewall", "Backup"],
            resposta: "Sistema Operacional",
            fonte: "OBJETIVA / PREF. SIMÃO DIAS / 2022",
        },
        {
            texto: "Assinale a alternativa que representa um sistema operacional.",
            alternativas: ["Google Android", "Google Windows", "Microsoft Windows", "Telegram"],
            resposta: "Microsoft Windows",
            fonte: "UNIFIL / PREF. RONDON / 2021",
        },
        {
            texto: "Assinale a alternativa que representa um sistema operacional.",
            alternativas: ["Microsoft Word", "Microsoft Windows", "Microsoft Opertation", "Microsoft System"],
            resposta: "Microsoft Windows",
            fonte: "UNIFIL / PREF. CAMBÉ / 2011",
        },
        {
            texto: "Um Sistema Operacional é composto por dois subsistemas que fazem a interação entre usuário e máquina. Quais são?",
            alternativas: ["BIOS e Setup", "Shell e Kernel", "Processador e Memória", "Registradores e Memória Cache"],
            resposta: "Shell e Kernel",
            fonte: "INSTITUTO CONSULPLAN / PREF. FORMIGA / 2020",
        },
        {
            texto: "As versões atuais do Windows, Linux e MacOS são considerados sistemas:",
            alternativas: [
                "multiusuário perceptivo",
                "multitarefa preemptiva",
                "monotarefa preditiva",
                "multiprocessador preeminente",
            ],
            resposta: "multitarefa preemptiva",
            fonte: "IBFC / DETRAN AM / 2022",
        },
        {
            texto: "Parte do Sistema Operacional responsável pela interface de comunicação com o usuário é chamada de:",
            alternativas: ["Kernel", "Shell", "RAM", "EPROM", "BIOS"],
            resposta: "Shell",
            fonte: "COMPEC / UFAM / 2022",
        },
        {
            texto: "Um sistema operacional multitarefas permite:",
            alternativas: [
                "A execução de mais de um programa ao mesmo tempo.",
                "A execução de apenas um programa por vez.",
                "No máximo 5 programas ao mesmo tempo.",
                "Não tem relação com a execução simultânea de programas.",
            ],
            resposta: "A execução de mais de um programa ao mesmo tempo.",
            fonte: "FUNDUNISUL / CRC SC / 2019",
        },
        {
            texto: "Sistema operacional projetado para dispositivos móveis com tela sensível ao toque, desenvolvido pelo Google.",
            alternativas: ["Windows Phone", "Linux", "Windows 10", "Android"],
            resposta: "Android",
            fonte: "IBGP / PREF. ANDRADAS",
        },
        {
            texto: "O sistema operacional que possui código aberto é:",
            alternativas: ["Windows 7", "Windows Server", "Vmware", "Linux", "Z/OS"],
            resposta: "Linux",
            fonte: "IBADE / PREF. LINHARES / 2020",
        },
        {
            texto: "Assinale a alternativa que apresente um tipo de sistema operacional.",
            alternativas: ["Word", "Excel", "Windows", "Multitarefa"],
            resposta: "Multitarefa",
            fonte: "IBGP / PREF. / 2019",
        },
        {
            texto: "Na informática, o que é o conjunto principal de software em um dispositivo que mantém tudo junto e se comunica com o hardware do dispositivo?",
            alternativas: ["Planilha Eletrônica", "Editor de Textos", "Antivírus", "Navegador de Internet", "Sistema Operacional"],
            resposta: "Sistema Operacional",
            fonte: "IDCAP / SAAE IBIRAÇU / 2020",
        },
        {
            texto: "Diferente de suas versões anteriores, o Windows não é considerado um sistema multitarefas.",
            alternativas: ["Certo", "Errado"],
            resposta: "Errado",
            fonte: "QUADRIX / CRP / 2018",
        },
        {
            texto: "Não são características do Sistema Operacional Windows:",
            alternativas: ["Multitarefa", "Código fonte", "Monousuário", "Gráfico"],
            resposta: "Código fonte",
            fonte: "CONSULPAM / SURG",
        },
        {
            texto: "Os softwares gratuitos, em regra, permitem que o usuário altere o código-fonte.",
            alternativas: ["Certo", "Errado"],
            resposta: "Errado",
            fonte: "QUADRIX / CRMV MS / 2022",
        },
        {
            texto: "Com o Windows 10 é possível executar várias tarefas ao mesmo tempo, pois é um sistema operacional:",
            alternativas: ["Compartilhado", "Multitarefa", "Polivalente", "Proprietário"],
            resposta: "Multitarefa",
            fonte: "IBGP / PREF. ITABIRA / 2020",
        },
        {
            texto: "Com o Windows 10 é possível criar uma conta para cada usuário, pois é um sistema operacional:",
            alternativas: ["Aberto", "Arquitetura livre", "Domínio público", "Multiusuário"],
            resposta: "Multiusuário",
            fonte: "IBGP / PREF. ITABIRA / 2020",
        },
        {
            texto: "Entre os sistemas abaixo, assinale o que NÃO é um sistema operacional.",
            alternativas: ["Windows", "Skype", "Linux", "MacOS"],
            resposta: "Skype",
            fonte: "IBGP / PREF. ANDRELÂNDIA / 2019",
        },
        {
            texto: "As principais características do sistema operacional Windows é ser multitarefa e multiusuário.",
            alternativas: ["Certo", "Errado"],
            resposta: "Certo",
            fonte: "CESPE / CNPQ",
        },
        {
            texto: "O Sistema Operacional Windows utiliza multitarefa com preempção, pois permite a execução de diversos programas ao mesmo tempo.",
            alternativas: ["Certo", "Errado"],
            resposta: "Errado",
            fonte: "CESPE / CNPQ",
        },
    ];

    const [questoes, setQuestoes] = useState(
        embaralhar(
            questoesBase.map((q) => ({
                ...q,
                alternativas: embaralhar(q.alternativas),
            }))
        )
    );

    const [respostas, setRespostas] = useState(Array(questoes.length).fill(null));
    const [finalizado, setFinalizado] = useState(false);

    const handleResposta = (index: number, alternativa: string) => {
        if (!finalizado) {
            const novas = [...respostas];
            novas[index] = alternativa;
            setRespostas(novas);
        }
    };

    const handleFinalizar = () => setFinalizado(true);

    const handleReiniciar = () => {
        setQuestoes(
            embaralhar(
                questoesBase.map((q) => ({
                    ...q,
                    alternativas: embaralhar(q.alternativas),
                }))
            )
        );
        setRespostas(Array(questoesBase.length).fill(null));
        setFinalizado(false);
    };

    const acertos = respostas.filter(
        (r, i) => r === questoes[i].resposta
    ).length;

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
            <section className="max-w-5xl mx-auto">
                {/* Cabeçalho */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        Quiz — Sistemas Operacionais 💻
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Responda as questões abaixo e teste seus conhecimentos!
                        Cada tentativa apresenta **ordens diferentes de perguntas e alternativas.**
                    </p>
                </motion.div>

                {/* Questões */}
                <div className="space-y-8">
                    {questoes.map((q, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-3 text-blue-600">
                                <FaQuestionCircle />
                                <h2 className="font-semibold text-lg">{q.fonte}</h2>
                            </div>

                            <p className="text-gray-800 text-base mb-4">{q.texto}</p>

                            <ul className="grid sm:grid-cols-2 gap-3">
                                {q.alternativas.map((alt, i) => {
                                    const selecionada = respostas[index] === alt;
                                    const correta = q.resposta === alt;

                                    let estilo = "border-gray-300";
                                    if (finalizado) {
                                        if (selecionada && correta)
                                            estilo = "border-green-500 bg-green-100";
                                        else if (selecionada && !correta)
                                            estilo = "border-red-400 bg-red-100";
                                        else if (correta)
                                            estilo = "border-green-400 bg-green-50";
                                    } else if (selecionada) {
                                        estilo = "border-blue-400 bg-blue-50";
                                    }

                                    return (
                                        <li
                                            key={i}
                                            onClick={() => handleResposta(index, alt)}
                                            className={`cursor-pointer border-2 rounded-lg p-3 text-sm sm:text-base text-gray-700 transition ${estilo}`}
                                        >
                                            {alt}
                                        </li>
                                    );
                                })}
                            </ul>

                            {finalizado && (
                                <div className="mt-4 flex items-center gap-2 text-gray-700">
                                    {respostas[index] === q.resposta ? (
                                        <FaCheckCircle className="text-green-600" />
                                    ) : (
                                        <FaTimesCircle className="text-red-500" />
                                    )}
                                    <p className="text-sm">
                                        <strong>Resposta correta:</strong> {q.resposta}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Rodapé */}
                {!finalizado ? (
                    <div className="text-center mt-10">
                        <button
                            onClick={handleFinalizar}
                            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition cursor-pointer"
                        >
                            Finalizar Quiz
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-10 bg-green-100 border border-green-300 rounded-2xl p-8 shadow-md"
                    >
                        <h2 className="text-3xl font-bold text-green-700 mb-3">
                            🏁 Resultado Final
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Você acertou <strong>{acertos}</strong> de{" "}
                            <strong>{questoes.length}</strong> questões.
                        </p>
                        <button
                            onClick={handleReiniciar}
                            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Novo Quiz Aleatório
                        </button>
                    </motion.div>
                )}
            </section>
        </main>
    );
}
