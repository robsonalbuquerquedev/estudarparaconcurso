// app/conhecimento-especifico/page.tsx
"use client";

import CardAnimado from "../components/CardAnimado";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaMicrochip,
    FaWindows,
    FaCode,
    FaLaptopCode,
    FaDatabase,
    FaNetworkWired,
    FaLock,
    FaCogs,
    FaHeadset,
    FaWifi,
    FaServer,
    FaCloud,
    FaClipboardList,
    FaTools,
} from "react-icons/fa";

export default function ConhecimentoEspecifico() {
    const topicos = [
        {
            icone: <FaMicrochip className="text-blue-600" />,
            titulo: "1. Fundamentos de Informática",
            descricao:
                "Componentes de hardware (placa-mãe, processador, memória, discos, periféricos), tipos de memória (RAM, ROM, cache), sistemas de numeração (binário, hexadecimal, octal) e conceitos de software (sistema operacional, aplicativos, drivers).",
            link: "/fundamentos-de-Informatica",
        },
        {
            icone: <FaWindows className="text-sky-600" />,
            titulo: "2. Sistemas Operacionais",
            descricao:
                "Arquitetura, funções principais, instalação e configuração de sistemas Windows e Linux, comandos básicos, gerenciamento de usuários, permissões e processos.",
            link: "/sistemas-operacionais",
        },
        {
            icone: <FaCode className="text-purple-600" />,
            titulo: "3. Desenvolvimento de Software",
            descricao:
                "Lógica de programação, variáveis, operadores, estruturas de controle, algoritmos e estruturas de dados (listas, filas, pilhas), linguagens populares (Python, JavaScript, PHP), scripts e Git.",
            link: "/desenvolvimento-de-software",
        },
        {
            icone: <FaLaptopCode className="text-indigo-600" />,
            titulo: "4. Desenvolvimento Web",
            descricao:
                "Fundamentos de HTML, CSS e JavaScript, design responsivo, frameworks (Bootstrap), back-end com PHP ou Node.js, e conceitos de APIs e REST.",
            link: "/desenvolvimento-web",
        },
        {
            icone: <FaDatabase className="text-emerald-600" />,
            titulo: "5. Banco de Dados",
            descricao:
                "Conceitos básicos (tabelas, campos, chaves), comandos SQL (SELECT, INSERT, UPDATE, DELETE), MySQL, PostgreSQL, backup, restauração e introdução ao NoSQL (MongoDB).",
            link: "/banco-de-dados",
        },
        {
            icone: <FaNetworkWired className="text-teal-600" />,
            titulo: "6. Redes de Computadores",
            descricao:
                "Fundamentos de redes (LAN, WAN, MAN, PAN), topologias, dispositivos (switch, roteador, modem), endereçamento IPv4/IPv6, DNS, DHCP e protocolos (TCP/IP, HTTP, FTP).",
            link: "/redes-de-computadores",
        },
        {
            icone: <FaLock className="text-red-600" />,
            titulo: "7. Segurança da Informação",
            descricao:
                "Princípios de confidencialidade, integridade e disponibilidade, criptografia (SSL/TLS), firewalls, antivírus, ataques cibernéticos e políticas de backup e recuperação.",
            link: "/seguranca-da-informacao",
        },
        {
            icone: <FaCogs className="text-orange-600" />,
            titulo: "8. Instalação e Configuração de Software",
            descricao:
                "Instalação e atualização de sistemas e aplicativos, aplicação de patches, solução de compatibilidade, ferramentas de produtividade e compliance de software.",
            link: "/instalacao-e-configuracao-de-software",
        },
        {
            icone: <FaHeadset className="text-yellow-600" />,
            titulo: "9. Suporte Técnico",
            descricao:
                "Atendimento ao usuário, diagnóstico de hardware e software, ferramentas de suporte remoto (TeamViewer, AnyDesk) e manutenção preventiva e corretiva.",
            link: "/suporte-tecnico",
        },
        {
            icone: <FaWifi className="text-blue-500" />,
            titulo: "10. Redes Sem Fio e Segurança",
            descricao:
                "Redes Wi-Fi (802.11a/b/g/n/ac), configuração de roteadores, segurança (WPA2, WPA3), VPNs e diagnóstico de redes sem fio.",
            link: "/redes-sem-fio-e-seguranca",
        },
        {
            icone: <FaServer className="text-gray-700" />,
            titulo: "11. Infraestrutura de Redes",
            descricao:
                "Cabeamento estruturado, montagem de redes locais, configuração de switches e roteadores, solução de problemas e ferramentas de monitoramento (Wireshark, Zabbix).",
            link: "/infraestrutura-de-redes",
        },
        {
            icone: <FaCloud className="text-cyan-600" />,
            titulo: "12. Virtualização e Cloud Computing",
            descricao:
                "Conceitos de virtualização, hypervisors, máquinas virtuais (VirtualBox, VMware), e fundamentos da computação em nuvem (AWS, Google Cloud, Azure).",
        },
        {
            icone: <FaClipboardList className="text-pink-600" />,
            titulo: "13. Documentação e Gestão de TI",
            descricao:
                "Elaboração de relatórios técnicos, inventário de hardware e software, controle de chamados (GLPI, OTRS) e indicadores de desempenho (KPIs, SLAs).",
        },
        {
            icone: <FaTools className="text-green-700" />,
            titulo: "14. Manutenção de Computadores e Periféricos",
            descricao:
                "Diagnóstico de hardware, substituição de peças, montagem e desmontagem de PCs, manutenção de impressoras, scanners e dispositivos móveis.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8">
            <section className="max-w-6xl mx-auto">
                {/* 🔹 Cabeçalho e Introdução */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Conhecimento Específico 💻
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Esta seção aborda os <strong>conceitos técnicos essenciais</strong> para concursos e
                        atuação profissional na área de Tecnologia da Informação.
                        Cada tópico reúne os fundamentos teóricos e práticos de hardware, redes, segurança,
                        programação e suporte.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Image
                            src="/conhecimento-banner.png"
                            alt="Ilustração de tecnologia e estudo"
                            width={520}
                            height={300}
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </motion.div>

                {/* 🔹 Lista de Tópicos */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topicos.map((item, index) => (
                        <CardAnimado
                            key={index}
                            icone={item.icone}
                            titulo={item.titulo}
                            descricao={item.descricao}
                            variant="primary"
                            link={item.link}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
