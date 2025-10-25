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

export default function PageInfraestruturaDeRedes() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Infraestrutura de Redes
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Infraestrutura de Redes
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        A <strong>infraestrutura de redes</strong> é o conjunto de cabos,
                        equipamentos e softwares que possibilitam a comunicação entre computadores e
                        dispositivos.
                        Ela é a base física e lógica de qualquer ambiente de TI, garantindo
                        desempenho, segurança e conectividade estável.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🧩
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine uma cidade: as **ruas** são os cabos de rede, os **semáforos**
                            são os switches, os **cruzamentos principais** são os roteadores, e o
                            **Wireshark** é o radar que monitora o trânsito dos dados.
                        </p>
                    </div>
                </section>

                {/* Cabeamento Estruturado */}
                <section>
                    <InfoCard title="1. Cabeamento Estruturado">
                        <p>
                            O <strong>cabeamento estruturado</strong> é um conjunto de normas e boas
                            práticas que organizam fisicamente os cabos de rede em um ambiente.
                            Segue padrões definidos pela <strong>norma TIA/EIA-568</strong>.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Categorias de cabos:</strong> Cat5e (100 Mbps), Cat6 (1 Gbps),
                                Cat6a (10 Gbps).
                            </li>
                            <li>
                                <strong>Padrões de conexão:</strong> T568A e T568B (definem a ordem
                                dos fios nos conectores RJ45).
                            </li>
                            <li>
                                <strong>Patch panel:</strong> organiza as conexões de rede no rack.
                            </li>
                            <li>
                                <strong>Racks e dutos:</strong> protegem e organizam os cabos,
                                evitando interferências e danos.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Ordem padrão T568B
Pino 1 - Branco/Laranja
Pino 2 - Laranja
Pino 3 - Branco/Verde
Pino 4 - Azul
Pino 5 - Branco/Azul
Pino 6 - Verde
Pino 7 - Branco/Marrom
Pino 8 - Marrom`}
                        </div>

                        <p className="text-sm text-gray-600">
                            💡 Sempre teste os cabos com um certificador de rede antes de colocar em
                            produção.
                        </p>
                    </InfoCard>
                </section>

                {/* Montagem de Redes Locais */}
                <section>
                    <InfoCard title="2. Montagem de Redes Locais (LAN)">
                        <p>
                            As <strong>redes locais</strong> (LANs) conectam computadores dentro de
                            um mesmo ambiente, como uma escola, empresa ou laboratório.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Planeje a topologia (estrela, malha, etc.).</li>
                            <li>Distribua pontos de rede estrategicamente.</li>
                            <li>Use switches gerenciáveis para controle e monitoramento.</li>
                            <li>Identifique e rotule todos os cabos e portas.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🏗️ Uma boa montagem evita cabos cruzados, conexões instáveis e facilita
                            futuras manutenções.
                        </p>
                    </InfoCard>
                </section>

                {/* Configuração de Switches e Roteadores */}
                <section>
                    <InfoCard title="3. Configuração de Switches e Roteadores">
                        <p>
                            Os dispositivos de rede garantem o tráfego eficiente de dados. É
                            essencial saber configurá-los corretamente.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Switches:</strong> distribuem o tráfego entre os
                                dispositivos; podem ser gerenciáveis (VLANs, QoS) ou simples.
                            </li>
                            <li>
                                <strong>Roteadores:</strong> conectam diferentes redes e fazem a
                                comunicação com a internet.
                            </li>
                            <li>
                                <strong>VLANs (Virtual LANs):</strong> separam redes lógicas dentro
                                de um mesmo switch, melhorando segurança e desempenho.
                            </li>
                            <li>
                                <strong>DHCP e DNS:</strong> configuração de IPs automáticos e
                                resolução de nomes.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de configuração de VLAN (Cisco)
Switch(config)# vlan 10
Switch(config-vlan)# name Professores
Switch(config)# interface fastEthernet 0/1
Switch(config-if)# switchport access vlan 10`}
                        </div>

                        <p className="text-sm text-gray-600">
                            ⚙️ Mantenha o firmware dos equipamentos atualizado e use senhas fortes
                            para acesso administrativo.
                        </p>
                    </InfoCard>
                </section>

                {/* Solução de Problemas */}
                <section>
                    <InfoCard title="4. Solução de Problemas de Rede">
                        <p>
                            Quando a rede apresenta falhas, é necessário seguir uma
                            <strong> metodologia de diagnóstico</strong> para localizar o problema:
                        </p>

                        <ul className="list-decimal pl-5 space-y-2">
                            <li>Verifique cabos e conexões físicas.</li>
                            <li>Confirme o status das luzes no switch e roteador.</li>
                            <li>Teste o IP e gateway com <code>ping</code>.</li>
                            <li>Use <code>tracert</code> ou <code>traceroute</code> para rastrear
                                rotas.</li>
                            <li>Monitore tráfego e pacotes com o Wireshark.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Testar conectividade
ping 192.168.0.1

# Rastrear rota
tracert google.com (Windows)
traceroute google.com (Linux)

# Monitorar pacotes
wireshark`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🧠 Dica: comece o diagnóstico do simples para o complexo — primeiro o
                            cabo, depois o IP, e só então o roteador.
                        </p>
                    </InfoCard>
                </section>

                {/* Ferramentas de Monitoramento */}
                <section>
                    <InfoCard title="5. Ferramentas de Monitoramento (Wireshark e Zabbix)">
                        <p>
                            O monitoramento garante o desempenho e a segurança da rede,
                            identificando falhas e gargalos em tempo real.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Wireshark:</strong> analisa pacotes de rede em tempo real,
                                útil para detectar falhas de comunicação e ataques.
                            </li>
                            <li>
                                <strong>Zabbix:</strong> monitora servidores, roteadores e switches,
                                gerando alertas sobre desempenho e disponibilidade.
                            </li>
                            <li>
                                <strong>Outras ferramentas:</strong> PRTG, Nagios, e The Dude.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            📊 Com monitoramento contínuo, é possível agir antes que o problema
                            impacte os usuários.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                Cabeamento estruturado garante organização e desempenho.
                            </li>
                            <li>
                                A montagem da LAN deve seguir boas práticas e topologias eficientes.
                            </li>
                            <li>
                                Switches e roteadores precisam de configuração e segurança adequadas.
                            </li>
                            <li>
                                Ferramentas como Wireshark e Zabbix ajudam a diagnosticar e
                                monitorar redes.
                            </li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🧠 Uma infraestrutura de rede bem planejada é como o alicerce de um
                            prédio: invisível, mas essencial para sustentar tudo.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Infraestrutura de Redes</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
