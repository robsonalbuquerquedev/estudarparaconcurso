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

export default function PageDocumentacaoEGestaoDeTI() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Documentação e Gestão de TI
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Documentação e Gestão de TI
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        A <strong>documentação e gestão de TI</strong> garantem que todos os processos,
                        ativos e atendimentos técnicos sejam controlados, monitorados e otimizados.
                        Elas são essenciais para manter a **organização, a segurança e a eficiência**
                        na infraestrutura tecnológica.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🧾
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine a TI como um hospital:
                            a documentação é o **prontuário** dos sistemas, o inventário é o **cadastro
                            dos equipamentos**, o controle de chamados é o **setor de triagem** e os
                            indicadores são os **exames** que mostram se tudo está saudável.
                        </p>
                    </div>
                </section>

                {/* Relatórios Técnicos */}
                <section>
                    <InfoCard title="1. Elaboração de Relatórios Técnicos">
                        <p>
                            Os <strong>relatórios técnicos</strong> registram as atividades e decisões
                            realizadas pela equipe de TI, servindo como histórico e ferramenta de
                            auditoria.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Descrevem problemas encontrados e soluções aplicadas.</li>
                            <li>Podem incluir prints, logs e detalhes de configuração.</li>
                            <li>Facilitam a comunicação entre técnicos, gestores e usuários.</li>
                            <li>Devem ser claros, objetivos e padronizados.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Estrutura de relatório técnico
- Data e responsável
- Descrição do incidente
- Causa identificada
- Ação corretiva realizada
- Observações e recomendações`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🧠 Um bom relatório é como um manual de aprendizado para futuras ocorrências.
                        </p>
                    </InfoCard>
                </section>

                {/* Inventário de Hardware e Software */}
                <section>
                    <InfoCard title="2. Inventário de Hardware e Software">
                        <p>
                            O <strong>inventário de TI</strong> controla todos os ativos tecnológicos
                            da organização — desde computadores e impressoras até licenças de software.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Hardware:</strong> código patrimonial, modelo, número de série,
                                data de aquisição e status.
                            </li>
                            <li>
                                <strong>Software:</strong> versão, licença, data de instalação e
                                validade.
                            </li>
                            <li>
                                <strong>Ferramentas de inventário:</strong> GLPI, OCS Inventory,
                                FusionInventory.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            💡 Manter o inventário atualizado ajuda a identificar equipamentos obsoletos,
                            controlar licenças e planejar substituições.
                        </div>
                    </InfoCard>
                </section>

                {/* Controle de Chamados */}
                <section>
                    <InfoCard title="3. Controle de Chamados (GLPI, OTRS)">
                        <p>
                            O <strong>controle de chamados</strong> organiza as solicitações de suporte
                            técnico e manutenção, garantindo que cada problema seja resolvido dentro
                            do prazo e com registro adequado.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>GLPI:</strong> sistema gratuito para gerenciamento de chamados,
                                inventário e contratos.
                            </li>
                            <li>
                                <strong>OTRS:</strong> software open source para atendimento ao cliente
                                e suporte técnico.
                            </li>
                            <li>
                                <strong>Funcionalidades comuns:</strong> registro de tickets, prazos
                                (SLAs), categorias de problema e histórico de atendimento.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de fluxo de chamado
1. Usuário abre ticket → "Problema com impressora"
2. Sistema classifica e encaminha ao suporte
3. Técnico diagnostica e registra ação
4. Chamado encerrado com relatório`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🎯 Esses sistemas tornam o suporte técnico mais eficiente e rastreável.
                        </p>
                    </InfoCard>
                </section>

                {/* Indicadores de Desempenho */}
                <section>
                    <InfoCard title="4. Indicadores de Desempenho (KPIs e SLAs)">
                        <p>
                            Os <strong>indicadores de desempenho</strong> medem a eficiência e a
                            qualidade dos serviços de TI, ajudando na tomada de decisões.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>KPI (Key Performance Indicator):</strong> indicadores de
                                desempenho.
                                Exemplo: tempo médio de resolução de chamados, percentual de uptime.
                            </li>
                            <li>
                                <strong>SLA (Service Level Agreement):</strong> acordo de nível de
                                serviço.
                                Define prazos e padrões mínimos de atendimento.
                            </li>
                            <li>
                                <strong>Ferramentas de apoio:</strong> Zabbix, Grafana, Power BI.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            📈 Exemplo: SLA de 24h para chamados críticos e KPI de satisfação do usuário
                            acima de 90%.
                        </div>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Relatórios técnicos documentam ações e soluções.</li>
                            <li>Inventários mantêm controle sobre ativos e licenças.</li>
                            <li>Sistemas como GLPI e OTRS otimizam o suporte técnico.</li>
                            <li>KPIs e SLAs garantem qualidade e eficiência dos serviços de TI.</li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🧩 Uma boa gestão de TI começa com dados organizados e termina com decisões
                            bem informadas.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Documentação e Gestão de TI</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
