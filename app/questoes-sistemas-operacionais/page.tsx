// app/questoes-sistemas-operacionais/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

export default function QuestoesSistemasOperacionais() {
    const questoes = [
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
            texto: "Assinale a alternativa que apresente um tipo de sistema operacional.",
            alternativas: ["Word", "Excel", "Windows", "Multitarefa"],
            resposta: "Multitarefa",
            fonte: "IBGP / PREF. 2019",
        },
        {
            texto: "Assinale a alternativa que representa um sistema operacional.",
            alternativas: ["Microsoft Word", "Microsoft Windows", "Microsoft Opertation", "Microsoft System"],
            resposta: "Microsoft Windows",
            fonte: "UNIFIL / PREF. CAMBÉ / 2011",
        },
        {
            texto: "Na informática, o que é o conjunto principal de software em um dispositivo que mantém tudo junto e se comunica com o hardware do dispositivo?",
            alternativas: ["Planilha Eletrônica", "Editor de Textos", "Antivírus", "Navegador de Internet", "Sistema Operacional"],
            resposta: "Sistema Operacional",
            fonte: "IDCAP / SAAE IBIRAÇU / 2020",
        },
        {
            texto: "Um Sistema Operacional é composto por dois subsistemas que fazem a interação entre usuário e máquina. Quais são?",
            alternativas: ["BIOS e Setup", "Shell e Kernel", "Processador e Memória", "Registradores e Memória Cache"],
            resposta: "Shell e Kernel",
            fonte: "INSTITUTO CONSULPLAN / PREF. FORMIGA / 2020",
        },
        {
            texto: "Parte do Sistema Operacional responsável pela interface de comunicação com o usuário é chamada de:",
            alternativas: ["Kernel", "Shell", "RAM", "EPROM", "BIOS"],
            resposta: "Shell",
            fonte: "COMPEC / UFAM / 2022",
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
            texto: "Diferente de suas versões anteriores, o Windows não é considerado um sistema multitarefas.",
            alternativas: ["Certo", "Errado"],
            resposta: "Errado",
            fonte: "QUADRIX / CRP / 2018",
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

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
            <section className="max-w-5xl mx-auto">
                {/* Cabeçalho */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        Questões sobre Sistemas Operacionais 💻
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        Teste seus conhecimentos com questões reais de concursos públicos.
                        Confira cada pergunta e veja a **resposta correta** destacada ao final.
                    </p>
                </motion.div>

                {/* Lista de questões */}
                <div className="space-y-6">
                    {questoes.map((q, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-2 text-blue-600">
                                <FaQuestionCircle />
                                <h2 className="font-semibold text-lg">{q.fonte}</h2>
                            </div>

                            <p className="text-gray-800 text-base mb-4">{q.texto}</p>

                            <ul className="list-disc ml-6 mb-4 text-gray-700">
                                {q.alternativas.map((alt, i) => (
                                    <li key={i}>{alt}</li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-2 text-green-700 font-semibold">
                                <FaCheckCircle />
                                <p>
                                    <strong>Resposta correta:</strong> {q.resposta}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
