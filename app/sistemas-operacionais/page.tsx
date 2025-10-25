"use client";

import { motion } from "framer-motion";

function InfoCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.article
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg p-6 md:p-8 w-full"
        >
            <header className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            </header>
            <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
                {children}
            </div>
        </motion.article>
    );
}

export default function PageSistemasOperacionais() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Sistemas Operacionais
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Sistemas Operacionais
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        Os sistemas operacionais são o <strong>coração do computador</strong>. Eles
                        controlam todo o hardware, administram recursos e permitem que você use
                        programas e interaja com o sistema. Nesta rota, você vai entender sua
                        arquitetura, funções, instalação e comandos básicos nos sistemas Windows e
                        Linux.
                    </p>
                </header>

                {/* Analogia introdutória */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida ⚙️
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Pense no sistema operacional como o <strong>gerente geral</strong> de uma
                            empresa: ele coordena o trabalho dos funcionários (processos), distribui
                            tarefas, controla quem tem acesso a cada área (permissões) e garante que
                            nada saia do controle (segurança e estabilidade).
                        </p>
                    </div>
                </section>

                {/* Arquitetura */}
                <section>
                    <InfoCard title="1. Arquitetura de um Sistema Operacional">
                        <p>
                            Um sistema operacional (SO) é composto por camadas que trabalham juntas
                            para permitir o funcionamento do computador. Entre elas estão:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Núcleo (Kernel):</strong> é o centro do sistema operacional,
                                responsável por gerenciar memória, processos, dispositivos e o acesso
                                ao hardware.
                            </li>
                            <li>
                                <strong>Shell:</strong> é a interface que permite ao usuário
                                comunicar-se com o sistema. Pode ser gráfica (GUI) ou por linha de
                                comando (CLI).
                            </li>
                            <li>
                                <strong>Sistema de Arquivos:</strong> organiza os dados em pastas,
                                diretórios e permissões de acesso.
                            </li>
                            <li>
                                <strong>Bibliotecas e APIs:</strong> fornecem funções para que os
                                aplicativos se comuniquem com o sistema.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🔍 Exemplo: No Linux, o kernel é o “Linux” propriamente dito; já no
                            Windows, é o “Windows NT Kernel”.
                        </p>
                    </InfoCard>
                </section>

                {/* Funções principais */}
                <section>
                    <InfoCard title="2. Funções Principais de um Sistema Operacional">
                        <p>Entre suas principais funções estão:</p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Gerenciamento de Processador (CPU):</strong> define quais
                                processos (tarefas) serão executados e por quanto tempo.
                            </li>
                            <li>
                                <strong>Gerenciamento de Memória:</strong> distribui e controla o
                                uso da memória entre os programas em execução.
                            </li>
                            <li>
                                <strong>Gerenciamento de Dispositivos:</strong> coordena a
                                comunicação entre o software e o hardware, com ajuda dos drivers.
                            </li>
                            <li>
                                <strong>Gerenciamento de Arquivos:</strong> organiza, grava, apaga e
                                protege dados armazenados.
                            </li>
                            <li>
                                <strong>Gerenciamento de Usuários:</strong> cria contas, define
                                permissões e políticas de segurança.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            💡 Sem o sistema operacional, o computador seria apenas um monte de
                            peças que não “sabem” se comunicar.
                        </p>
                    </InfoCard>
                </section>

                {/* Instalação e Configuração */}
                <section>
                    <InfoCard title="3. Instalação e Configuração (Windows e Linux)">
                        <p>
                            Tanto no <strong>Windows</strong> quanto no <strong>Linux</strong>, o
                            processo de instalação segue uma lógica parecida:
                        </p>

                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Escolher o disco ou partição onde o sistema será instalado.</li>
                            <li>Configurar idioma, fuso horário e rede.</li>
                            <li>Definir usuário e senha.</li>
                            <li>
                                Instalar drivers e atualizações para compatibilidade com o hardware.
                            </li>
                        </ol>

                        <div className="mt-4 space-y-2">
                            <p>
                                🔹 <strong>Windows:</strong> instalação via assistente gráfico
                                (interface amigável). Requer licença e ativação.
                            </p>
                            <p>
                                🔹 <strong>Linux:</strong> diversas distribuições (Ubuntu, Fedora,
                                Mint, Debian). Instalação pode ser gráfica ou via terminal.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Comandos básicos */}
                <section>
                    <InfoCard title="4. Comandos Básicos de Sistemas Operacionais">
                        <p>
                            A linha de comando (CLI) é uma forma poderosa de interagir com o
                            sistema. Veja alguns exemplos:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    🪟 Windows (Prompt de Comando / PowerShell)
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 font-mono text-sm">
                                    <li>dir → lista arquivos e pastas</li>
                                    <li>cd → muda de diretório</li>
                                    <li>mkdir → cria uma nova pasta</li>
                                    <li>del → apaga arquivos</li>
                                    <li>tasklist → mostra processos em execução</li>
                                    <li>ipconfig → exibe informações de rede</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">🐧 Linux (Terminal)</h3>
                                <ul className="list-disc pl-5 space-y-1 font-mono text-sm">
                                    <li>ls → lista arquivos e pastas</li>
                                    <li>cd → muda de diretório</li>
                                    <li>mkdir → cria nova pasta</li>
                                    <li>rm → remove arquivos</li>
                                    <li>ps → exibe processos ativos</li>
                                    <li>ifconfig / ip a → exibe informações de rede</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4">
                            🧠 Dica: os comandos Linux são sensíveis a maiúsculas e minúsculas, já
                            no Windows não.
                        </p>
                    </InfoCard>
                </section>

                {/* Usuários, permissões e processos */}
                <section>
                    <InfoCard title="5. Gerenciamento de Usuários, Permissões e Processos">
                        <p>
                            Um bom sistema operacional precisa garantir segurança e estabilidade.
                            Isso envolve três áreas principais:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Usuários:</strong> cada pessoa tem uma conta com nome e
                                senha. No Linux, o usuário “root” é o administrador. No Windows, é o
                                “Administrador”.
                            </li>
                            <li>
                                <strong>Permissões:</strong> definem quem pode ler, escrever ou
                                executar arquivos. No Linux, usa-se comandos como{" "}
                                <code>chmod</code> e <code>chown</code>.
                            </li>
                            <li>
                                <strong>Processos:</strong> são as tarefas em execução. Eles podem
                                ser monitorados pelo <code>Gerenciador de Tarefas</code> (Windows) ou
                                pelo comando <code>top</code> (Linux).
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p className="font-semibold text-gray-800 mb-1">
                                Exemplo de permissões Linux:
                            </p>
                            <p className="font-mono text-xs">
                                -rwxr-xr-- → Dono pode ler, escrever e executar; grupo pode ler e
                                executar; outros só podem ler.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Resumo final */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                O sistema operacional é o intermediário entre o usuário e o
                                hardware.
                            </li>
                            <li>
                                Possui camadas (kernel, shell, sistema de arquivos) que controlam
                                tudo.
                            </li>
                            <li>
                                É responsável por gerenciar processos, memória, usuários e
                                dispositivos.
                            </li>
                            <li>
                                Pode ser instalado e configurado de formas diferentes no Windows e
                                no Linux.
                            </li>
                            <li>
                                Comandos básicos e permissões são essenciais para administração e
                                segurança.
                            </li>
                        </ol>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Sistemas Operacionais</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
