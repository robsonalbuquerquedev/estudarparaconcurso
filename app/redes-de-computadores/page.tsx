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

export default function PageRedesDeComputadores() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Redes de Computadores
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Redes de Computadores
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        As <strong>redes de computadores</strong> permitem a comunicação e a troca de
                        informações entre dispositivos.
                        Elas são a base da internet e de todos os sistemas conectados, desde pequenas
                        redes domésticas até redes globais.
                        Aqui você vai entender seus **fundamentos, dispositivos, protocolos e tipos
                        de endereçamento**.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🕸️
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine uma rede de computadores como uma <strong>cidade</strong>:
                            as <strong>ruas</strong> são os cabos e conexões,
                            os <strong>prédios</strong> são os computadores,
                            e os <strong>protocolos</strong> são as regras de trânsito que garantem
                            que todos os dados cheguem ao destino certo sem acidentes.
                        </p>
                    </div>
                </section>

                {/* Fundamentos */}
                <section>
                    <InfoCard title="1. Fundamentos de Redes">
                        <p>
                            Uma rede conecta computadores, dispositivos e servidores para
                            compartilhar dados e recursos, como arquivos e impressoras.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>LAN (Local Area Network):</strong> rede local, dentro de um
                                mesmo ambiente (ex.: escola, escritório).
                            </li>
                            <li>
                                <strong>WAN (Wide Area Network):</strong> rede de longa distância
                                (ex.: a internet).
                            </li>
                            <li>
                                <strong>MAN (Metropolitan Area Network):</strong> rede que cobre uma
                                cidade inteira.
                            </li>
                            <li>
                                <strong>PAN (Personal Area Network):</strong> rede pessoal, como a
                                conexão Bluetooth entre celular e fone.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            💡 Dica: pense na LAN como sua casa e na WAN como o “mundo exterior”.
                        </p>
                    </InfoCard>
                </section>

                {/* Topologias */}
                <section>
                    <InfoCard title="2. Topologias de Rede">
                        <p>
                            A <strong>topologia</strong> define como os dispositivos estão
                            conectados fisicamente ou logicamente dentro da rede.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Estrela:</strong> todos os dispositivos se conectam a um
                                ponto central (switch). É a mais comum hoje.
                            </li>
                            <li>
                                <strong>Barramento:</strong> todos compartilham o mesmo cabo — se
                                ele falha, toda a rede cai.
                            </li>
                            <li>
                                <strong>Anel:</strong> os dispositivos formam um círculo; os dados
                                circulam de um ponto a outro.
                            </li>
                            <li>
                                <strong>Malha:</strong> cada dispositivo se conecta a vários outros,
                                garantindo redundância.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🔁 Topologias híbridas combinam dois ou mais tipos.
                        </p>
                    </InfoCard>
                </section>

                {/* Dispositivos */}
                <section>
                    <InfoCard title="3. Dispositivos de Rede">
                        <p>
                            São os equipamentos responsáveis pela comunicação entre os computadores
                            e a internet.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Switch:</strong> conecta vários dispositivos dentro de uma
                                LAN e encaminha os dados apenas para o destino correto.
                            </li>
                            <li>
                                <strong>Roteador:</strong> conecta redes diferentes e direciona os
                                pacotes de dados (ex.: sua casa à internet).
                            </li>
                            <li>
                                <strong>Modem:</strong> converte o sinal digital do computador em
                                analógico para a linha telefônica ou fibra óptica.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            ⚙️ Muitas vezes, roteador e modem estão integrados no mesmo aparelho.
                        </p>
                    </InfoCard>
                </section>

                {/* Endereçamento IP */}
                <section>
                    <InfoCard title="4. Endereçamento IPv4 e IPv6">
                        <p>
                            Cada dispositivo na rede precisa de um **endereço IP** (Internet
                            Protocol) para ser identificado.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>IPv4:</strong> formato tradicional, com 4 grupos de números
                                (ex.: 192.168.0.1).
                            </li>
                            <li>
                                <strong>IPv6:</strong> formato mais moderno, com letras e números
                                (ex.: 2001:0db8::1) — criado para resolver o esgotamento dos
                                endereços IPv4.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                💡 Dica: o IPv4 tem cerca de 4 bilhões de endereços; o IPv6 tem mais
                                de <strong>340 undecilhões</strong> (!!!) — é praticamente infinito!
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* DNS e DHCP */}
                <section>
                    <InfoCard title="5. DNS e DHCP">
                        <p>
                            Dois serviços fundamentais que tornam a internet mais prática e
                            automatizada:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>DNS (Domain Name System):</strong> traduz nomes de domínio em
                                endereços IP.
                                Exemplo: traduz <code>google.com</code> em <code>142.250.190.14</code>.
                            </li>
                            <li>
                                <strong>DHCP (Dynamic Host Configuration Protocol):</strong> atribui
                                automaticamente endereços IP aos dispositivos da rede.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🌐 Assim você não precisa decorar endereços numéricos nem configurar IP
                            manualmente.
                        </p>
                    </InfoCard>
                </section>

                {/* Protocolos */}
                <section>
                    <InfoCard title="6. Protocolos de Comunicação">
                        <p>
                            Os <strong>protocolos</strong> são conjuntos de regras que definem como
                            os dados são transmitidos na rede.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>TCP/IP:</strong> base da internet; controla como os pacotes
                                são enviados e recebidos.
                            </li>
                            <li>
                                <strong>HTTP / HTTPS:</strong> usados para navegação web.
                                O HTTPS é a versão segura (com criptografia).
                            </li>
                            <li>
                                <strong>FTP:</strong> usado para transferir arquivos entre
                                computadores.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de endereços e protocolos
https://meusite.com.br  -> protocolo HTTPS
ftp://arquivos.meusite.com -> protocolo FTP
192.168.0.1 -> endereço IPv4`}
                        </div>

                        <p className="text-sm text-gray-600">
                            📡 Pense no protocolo como o idioma que dois computadores usam para se
                            entenderem.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>As redes conectam dispositivos e compartilham informações.</li>
                            <li>LAN, WAN, MAN e PAN são classificações de alcance.</li>
                            <li>Switch, roteador e modem são os principais dispositivos.</li>
                            <li>O IPv6 substitui o IPv4 devido à escassez de endereços.</li>
                            <li>DNS traduz nomes e DHCP distribui IPs automaticamente.</li>
                            <li>Protocolos como TCP/IP e HTTP garantem a comunicação.</li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🌍 Entender redes é entender o que mantém o mundo conectado!
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Redes de Computadores</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
