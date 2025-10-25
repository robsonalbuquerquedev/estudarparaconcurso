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

export default function PageInstalacaoEConfiguracaoDeSoftware() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Instalação e Configuração de Software
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Instalação e Configuração de Software
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        A instalação e configuração de software garantem que sistemas e aplicativos
                        funcionem corretamente no ambiente de trabalho. Envolve instalar, atualizar,
                        corrigir falhas, ajustar compatibilidades e manter o
                        <strong> compliance</strong> com licenças e boas práticas de segurança.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🧩
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Instalar um software é como **mudar-se para uma casa nova**:
                            primeiro você instala o necessário (fogão, geladeira),
                            depois faz ajustes (configura as tomadas, a internet)
                            e, por fim, mantém tudo atualizado e funcionando com segurança.
                        </p>
                    </div>
                </section>

                {/* Instalação */}
                <section>
                    <InfoCard title="1. Instalação de Sistemas e Aplicativos">
                        <p>
                            A instalação é o processo de adicionar um novo programa ao computador.
                            Pode ser feita a partir de um instalador, mídia física ou download.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Instaladores automáticos:</strong> guiam o usuário passo a
                                passo (ex.: assistente do Windows).
                            </li>
                            <li>
                                <strong>Instalação manual:</strong> usada em sistemas avançados como
                                Linux, via linha de comando.
                            </li>
                            <li>
                                <strong>Instalação silenciosa:</strong> executada sem interação do
                                usuário, ideal para empresas.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo no Windows (prompt de comando)
msiexec /i software.msi /quiet

# Exemplo no Linux (terminal)
sudo apt install nome-do-pacote`}
                        </div>

                        <p className="text-sm text-gray-600">
                            💡 Dica: sempre baixe softwares de fontes oficiais para evitar riscos de
                            segurança.
                        </p>
                    </InfoCard>
                </section>

                {/* Atualização e Patches */}
                <section>
                    <InfoCard title="2. Atualização e Aplicação de Patches">
                        <p>
                            Atualizar softwares mantém o sistema estável, compatível e protegido.
                            Os <strong>patches</strong> são correções lançadas pelos fabricantes
                            para eliminar falhas ou vulnerabilidades.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Atualizações automáticas:</strong> o sistema baixa e instala
                                sozinho (Windows Update, Linux Update Manager).
                            </li>
                            <li>
                                <strong>Patches de segurança:</strong> corrigem brechas exploradas
                                por hackers.
                            </li>
                            <li>
                                <strong>Atualizações de recursos:</strong> adicionam novas funções.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Atualizar pacotes no Linux
sudo apt update && sudo apt upgrade

# Atualizar sistema no Windows
Configurações → Windows Update → Verificar atualizações`}
                        </div>

                        <p className="text-sm text-gray-600">
                            ⚙️ Mantenha sempre o sistema atualizado — é uma das principais formas de
                            evitar invasões e falhas.
                        </p>
                    </InfoCard>
                </section>

                {/* Compatibilidade */}
                <section>
                    <InfoCard title="3. Solução de Compatibilidade">
                        <p>
                            A compatibilidade garante que o software funcione corretamente no
                            sistema operacional e hardware em uso.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Requisitos mínimos:</strong> verifique memória, processador e
                                sistema operacional antes da instalação.
                            </li>
                            <li>
                                <strong>Modo de compatibilidade:</strong> executa programas antigos
                                em sistemas novos (Windows, Linux Wine).
                            </li>
                            <li>
                                <strong>Drivers e dependências:</strong> atualize-os para evitar
                                erros.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            💡 Exemplo: executar um software antigo no Windows 11 usando o “Modo de
                            compatibilidade com Windows 7”.
                        </p>
                    </InfoCard>
                </section>

                {/* Ferramentas de Produtividade */}
                <section>
                    <InfoCard title="4. Ferramentas de Produtividade">
                        <p>
                            Softwares de produtividade aumentam a eficiência no trabalho e estudo.
                            Podem ser gratuitos ou pagos.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Pacotes de escritório:</strong> Microsoft Office, LibreOffice,
                                Google Workspace.
                            </li>
                            <li>
                                <strong>Ferramentas de comunicação:</strong> Teams, Slack, Zoom.
                            </li>
                            <li>
                                <strong>Gerenciamento de tarefas:</strong> Trello, Notion, Asana.
                            </li>
                            <li>
                                <strong>Desenvolvimento:</strong> VS Code, Git, Docker.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧠 Dica: escolha ferramentas que atendam à necessidade sem sobrecarregar
                            o sistema.
                        </p>
                    </InfoCard>
                </section>

                {/* Compliance */}
                <section>
                    <InfoCard title="5. Compliance de Software">
                        <p>
                            O <strong>compliance de software</strong> garante o uso legal, ético e
                            seguro de programas.
                            Empresas e órgãos públicos devem estar em conformidade com licenças e
                            normas de segurança.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Licenciamento:</strong> uso de software conforme o tipo de
                                licença (livre, proprietário, OEM, educacional).
                            </li>
                            <li>
                                <strong>Auditoria de software:</strong> verifica se todos os sistemas
                                instalados estão devidamente licenciados.
                            </li>
                            <li>
                                <strong>Conformidade:</strong> segue padrões legais e de segurança
                                (ex.: LGPD, ISO/IEC 27001).
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                ⚖️ Usar software pirata é ilegal e pode comprometer a segurança do
                                sistema e os dados da organização.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                Instalação pode ser automática, manual ou silenciosa.
                            </li>
                            <li>
                                Atualizações e patches mantêm o sistema estável e seguro.
                            </li>
                            <li>
                                Compatibilidade garante funcionamento ideal.
                            </li>
                            <li>
                                Ferramentas de produtividade otimizam o trabalho.
                            </li>
                            <li>
                                Compliance assegura o uso legal e ético dos softwares.
                            </li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            💡 Uma boa gestão de software evita falhas, aumenta a segurança e garante
                            eficiência no ambiente de TI.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Instalação e Configuração de Software</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
