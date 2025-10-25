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

export default function PageRedesSemFioESeguranca() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Redes Sem Fio e Segurança
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Redes Sem Fio e Segurança
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        As <strong>redes sem fio</strong> revolucionaram a forma como nos
                        conectamos.
                        Elas permitem mobilidade, praticidade e acesso rápido à internet, mas
                        exigem cuidados com **segurança e configuração adequada**.
                        Nesta página, você vai aprender sobre os **padrões Wi-Fi**, a
                        **configuração de roteadores**, os **protocolos de segurança (WPA2/WPA3)**,
                        **VPNs** e o **diagnóstico de redes sem fio**.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🌐
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Pense na rede Wi-Fi como uma **conversa em voz alta** em um ambiente
                            público:
                            todos podem ouvir se você não proteger.
                            Usar senhas fortes e criptografia é como **falar em código**, para que
                            só quem deve entender, entenda.
                        </p>
                    </div>
                </section>

                {/* Padrões Wi-Fi */}
                <section>
                    <InfoCard title="1. Padrões Wi-Fi (802.11a/b/g/n/ac)">
                        <p>
                            O Wi-Fi segue a norma <strong>IEEE 802.11</strong>, que define como os
                            dispositivos se comunicam sem fio. Cada versão traz melhorias em
                            velocidade, alcance e estabilidade.
                        </p>

                        <table className="w-full border border-gray-300 text-sm text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">Padrão</th>
                                    <th className="p-2 border">Frequência</th>
                                    <th className="p-2 border">Velocidade Máx.</th>
                                    <th className="p-2 border">Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border">802.11a</td>
                                    <td className="p-2 border">5 GHz</td>
                                    <td className="p-2 border">54 Mbps</td>
                                    <td className="p-2 border">1999</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">802.11b</td>
                                    <td className="p-2 border">2.4 GHz</td>
                                    <td className="p-2 border">11 Mbps</td>
                                    <td className="p-2 border">1999</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">802.11g</td>
                                    <td className="p-2 border">2.4 GHz</td>
                                    <td className="p-2 border">54 Mbps</td>
                                    <td className="p-2 border">2003</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">802.11n</td>
                                    <td className="p-2 border">2.4/5 GHz</td>
                                    <td className="p-2 border">600 Mbps</td>
                                    <td className="p-2 border">2009</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">802.11ac</td>
                                    <td className="p-2 border">5 GHz</td>
                                    <td className="p-2 border">1.3 Gbps+</td>
                                    <td className="p-2 border">2013</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="text-sm text-gray-600 mt-3">
                            💡 Dica: quanto maior a frequência (GHz), mais rápida a conexão — mas
                            menor o alcance.
                        </p>
                    </InfoCard>
                </section>

                {/* Configuração de Roteadores */}
                <section>
                    <InfoCard title="2. Configuração de Roteadores">
                        <p>
                            O roteador é o “cérebro” da rede sem fio. Ele distribui o sinal de
                            internet e define as regras de conexão.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Acesso ao painel:</strong> feito pelo navegador digitando o
                                IP (geralmente <code>192.168.0.1</code> ou <code>192.168.1.1</code>).
                            </li>
                            <li>
                                <strong>SSID:</strong> nome da rede Wi-Fi.
                            </li>
                            <li>
                                <strong>Senha:</strong> deve ser forte e conter letras, números e
                                símbolos.
                            </li>
                            <li>
                                <strong>Canal:</strong> define a frequência usada; escolha canais
                                menos congestionados.
                            </li>
                            <li>
                                <strong>Modo dual-band:</strong> combina 2.4 GHz (alcance) e 5 GHz
                                (velocidade).
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            ⚙️ Mantenha o firmware do roteador atualizado para evitar falhas de
                            segurança.
                        </p>
                    </InfoCard>
                </section>

                {/* Segurança WPA2 / WPA3 */}
                <section>
                    <InfoCard title="3. Segurança (WPA2, WPA3)">
                        <p>
                            O padrão de segurança Wi-Fi define como os dados são criptografados entre
                            o roteador e o dispositivo.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>WEP (obsoleto):</strong> primeira geração, facilmente
                                quebrável.
                            </li>
                            <li>
                                <strong>WPA/WPA2:</strong> usa criptografia mais forte (AES),
                                protegendo contra invasões.
                            </li>
                            <li>
                                <strong>WPA3:</strong> padrão mais recente, com autenticação
                                reforçada e proteção extra contra ataques de força bruta.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                🔒 Sempre use <strong>WPA2</strong> ou <strong>WPA3</strong> — evite
                                “Aberta (Open)” ou “WEP”, pois são extremamente inseguras.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* VPNs */}
                <section>
                    <InfoCard title="4. VPNs (Redes Privadas Virtuais)">
                        <p>
                            Uma <strong>VPN (Virtual Private Network)</strong> cria uma conexão
                            criptografada entre o dispositivo e a internet, garantindo privacidade e
                            segurança.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Oculta o endereço IP do usuário.</li>
                            <li>Protege dados em redes públicas (como Wi-Fi de cafés e aeroportos).</li>
                            <li>Permite acesso seguro a redes corporativas remotamente.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧠 Dica: use VPNs confiáveis e evite serviços gratuitos que possam
                            registrar suas informações.
                        </p>
                    </InfoCard>
                </section>

                {/* Diagnóstico de Redes */}
                <section>
                    <InfoCard title="5. Diagnóstico de Redes Sem Fio">
                        <p>
                            Diagnosticar problemas em redes sem fio envolve verificar o sinal, a
                            interferência e a configuração dos dispositivos.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Verificar intensidade do sinal:</strong> quanto mais distante
                                do roteador, menor o desempenho.
                            </li>
                            <li>
                                <strong>Usar ferramentas:</strong> Wi-Fi Analyzer, NetSpot, Ping e
                                Traceroute.
                            </li>
                            <li>
                                <strong>Redefinir o roteador:</strong> em último caso, retorne às
                                configurações de fábrica e reconfigure.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Testar conectividade
ping 8.8.8.8

# Verificar IP e adaptadores
ipconfig /all    (Windows)
ifconfig          (Linux/macOS)`}
                        </div>

                        <p className="text-sm text-gray-600">
                            📶 Paredes, micro-ondas e outros roteadores podem interferir no sinal.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Wi-Fi segue o padrão IEEE 802.11 (a/b/g/n/ac).</li>
                            <li>Roteadores devem ter firmware atualizado e senha forte.</li>
                            <li>WPA2/WPA3 garantem segurança e criptografia.</li>
                            <li>VPNs protegem a navegação em redes públicas.</li>
                            <li>Diagnósticos ajudam a manter estabilidade e desempenho.</li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🔐 Segurança em redes sem fio não é luxo — é necessidade!
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Redes Sem Fio e Segurança</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
