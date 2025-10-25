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

export default function PageVirtualizacaoECloudComputing() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Virtualização e Cloud Computing
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Virtualização e Cloud Computing
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        A <strong>virtualização</strong> e a <strong>computação em nuvem</strong> revolucionaram a forma como usamos e administramos recursos de TI.
                        Elas permitem criar múltiplos sistemas dentro de uma única máquina física e
                        acessar servidores e aplicações de qualquer lugar do mundo.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida ☁️
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Pense em um computador como um **prédio**: a virtualização permite
                            construir vários **apartamentos independentes** dentro dele (máquinas
                            virtuais).
                            Já a **nuvem** é como um condomínio de prédios espalhados pelo mundo —
                            você usa o espaço e os serviços sem se preocupar com a estrutura física.
                        </p>
                    </div>
                </section>

                {/* Conceitos de Virtualização */}
                <section>
                    <InfoCard title="1. Conceitos de Virtualização">
                        <p>
                            A <strong>virtualização</strong> é a técnica que permite executar
                            múltiplos sistemas operacionais em um único computador físico, simulando
                            máquinas independentes.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Máquina física:</strong> o hardware real onde tudo roda.
                            </li>
                            <li>
                                <strong>Máquina virtual (VM):</strong> um ambiente isolado criado por
                                software que imita um computador completo.
                            </li>
                            <li>
                                <strong>Hypervisor:</strong> o software responsável por criar e
                                gerenciar as máquinas virtuais.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                💡 Exemplo: em um computador com 16 GB de RAM, é possível criar duas
                                VMs, uma com 8 GB e outra com 4 GB, funcionando como se fossem PCs
                                separados.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Hypervisors */}
                <section>
                    <InfoCard title="2. Hypervisors (Tipos 1 e 2)">
                        <p>
                            O <strong>hypervisor</strong> é o coração da virtualização. Ele cria,
                            gerencia e isola as máquinas virtuais dentro do hardware físico.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Tipo 1 (Bare Metal):</strong> roda diretamente no hardware,
                                oferecendo mais desempenho.
                                Exemplo: VMware ESXi, Microsoft Hyper-V Server, Xen.
                            </li>
                            <li>
                                <strong>Tipo 2 (Hosted):</strong> roda sobre um sistema operacional
                                já existente.
                                Exemplo: VirtualBox, VMware Workstation.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            ⚙️ Hypervisors tipo 1 são usados em servidores, enquanto os tipo 2 são
                            comuns em ambientes de testes e aprendizado.
                        </p>
                    </InfoCard>
                </section>

                {/* Máquinas Virtuais */}
                <section>
                    <InfoCard title="3. Máquinas Virtuais (VirtualBox, VMware)">
                        <p>
                            As <strong>máquinas virtuais</strong> são sistemas operacionais completos
                            que rodam dentro de outro sistema.
                            Elas são amplamente usadas para testes, simulações e ambientes de
                            desenvolvimento.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>VirtualBox:</strong> software gratuito da Oracle, ideal para
                                testes e aprendizado.
                            </li>
                            <li>
                                <strong>VMware Workstation:</strong> versão comercial, com mais
                                recursos de integração e desempenho.
                            </li>
                            <li>
                                <strong>Snapshots:</strong> permitem salvar o estado atual da VM e
                                retornar a ele depois.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de uso
- Criar VM com Ubuntu
- Definir CPU, RAM e disco virtual
- Instalar o sistema normalmente
- Testar softwares sem afetar o PC principal`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🧩 Dica: isole as máquinas virtuais em redes diferentes para simular
                            ambientes reais.
                        </p>
                    </InfoCard>
                </section>

                {/* Fundamentos de Cloud Computing */}
                <section>
                    <InfoCard title="4. Fundamentos da Computação em Nuvem">
                        <p>
                            A <strong>Computação em Nuvem</strong> (Cloud Computing) permite acessar
                            recursos de TI pela internet — como servidores, armazenamento e bancos de
                            dados — sem precisar investir em infraestrutura própria.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>IaaS (Infraestrutura como Serviço):</strong> fornece máquinas
                                virtuais e servidores.
                                Exemplo: AWS EC2, Google Compute Engine.
                            </li>
                            <li>
                                <strong>PaaS (Plataforma como Serviço):</strong> oferece ambiente
                                para desenvolvimento de aplicativos.
                                Exemplo: Google App Engine, Heroku.
                            </li>
                            <li>
                                <strong>SaaS (Software como Serviço):</strong> fornece softwares prontos
                                via internet.
                                Exemplo: Gmail, Google Docs, Office 365.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            ☁️ A nuvem reduz custos, aumenta a escalabilidade e permite acesso de
                            qualquer lugar.
                        </p>
                    </InfoCard>
                </section>

                {/* Principais Provedores */}
                <section>
                    <InfoCard title="5. Principais Provedores de Nuvem (AWS, Google Cloud, Azure)">
                        <p>
                            Os principais provedores de serviços em nuvem oferecem plataformas
                            completas com soluções para empresas e desenvolvedores:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>AWS (Amazon Web Services):</strong> pioneira e líder de
                                mercado, com centenas de serviços (EC2, S3, Lambda, RDS).
                            </li>
                            <li>
                                <strong>Google Cloud Platform:</strong> foco em inteligência artificial
                                e análise de dados (BigQuery, Vertex AI).
                            </li>
                            <li>
                                <strong>Microsoft Azure:</strong> integração nativa com Windows Server,
                                Active Directory e Office 365.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                💡 Dica: todas essas plataformas oferecem **planos gratuitos** para
                                estudo e testes iniciais.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                A virtualização permite criar várias máquinas virtuais em um único
                                hardware.
                            </li>
                            <li>
                                Hypervisors podem ser tipo 1 (servidor) ou tipo 2 (desktop).
                            </li>
                            <li>
                                A nuvem fornece recursos de TI sob demanda pela internet.
                            </li>
                            <li>
                                IaaS, PaaS e SaaS são os principais modelos de serviço.
                            </li>
                            <li>
                                AWS, Google Cloud e Azure dominam o mercado de Cloud Computing.
                            </li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🚀 Virtualização e nuvem são o futuro (e o presente) da infraestrutura de
                            TI moderna.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Virtualização e Cloud Computing</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
