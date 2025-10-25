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

export default function PageSegurancaDaInformacao() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Segurança da Informação
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Segurança da Informação
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        A <strong>Segurança da Informação</strong> tem como objetivo proteger os
                        dados contra acessos não autorizados, modificações indevidas e perdas.
                        Envolve práticas, ferramentas e políticas que garantem a
                        <strong> confidencialidade</strong>, <strong>integridade</strong> e
                        <strong> disponibilidade</strong> das informações.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🔐
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine que seus dados são como um **cofre de banco**:
                            - A <strong>confidencialidade</strong> é a chave do cofre (só quem deve
                            entra).
                            - A <strong>integridade</strong> garante que o dinheiro guardado não
                            seja alterado.
                            - A <strong>disponibilidade</strong> garante que o cofre esteja acessível
                            quando necessário.
                        </p>
                    </div>
                </section>

                {/* Princípios CID */}
                <section>
                    <InfoCard title="1. Princípios da Segurança: Confidencialidade, Integridade e Disponibilidade">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Confidencialidade:</strong> garante que apenas pessoas
                                autorizadas tenham acesso à informação.
                                Exemplo: senhas, criptografia e controle de acesso.
                            </li>
                            <li>
                                <strong>Integridade:</strong> assegura que os dados não sejam
                                alterados indevidamente.
                                Exemplo: assinatura digital e verificação de integridade (hash).
                            </li>
                            <li>
                                <strong>Disponibilidade:</strong> garante que os dados estejam
                                acessíveis quando necessário.
                                Exemplo: backups e servidores redundantes.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧩 Esses três princípios formam o famoso “**triângulo CID**” da segurança
                            da informação.
                        </p>
                    </InfoCard>
                </section>

                {/* Criptografia */}
                <section>
                    <InfoCard title="2. Criptografia (SSL/TLS)">
                        <p>
                            A <strong>criptografia</strong> é a técnica de transformar informações
                            legíveis em códigos indecifráveis, para garantir a confidencialidade
                            durante a transmissão de dados.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Criptografia simétrica:</strong> usa a mesma chave para
                                criptografar e descriptografar.
                            </li>
                            <li>
                                <strong>Criptografia assimétrica:</strong> usa duas chaves — uma
                                pública e uma privada.
                            </li>
                            <li>
                                <strong>SSL/TLS:</strong> protocolos usados em sites seguros
                                (<code>https://</code>) para proteger a comunicação entre servidor e
                                usuário.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de site seguro:
https://www.gov.br

# O cadeado na barra do navegador indica uso de SSL/TLS`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🔐 Dica: nunca envie dados pessoais em sites sem o cadeado HTTPS!
                        </p>
                    </InfoCard>
                </section>

                {/* Firewalls e Antivírus */}
                <section>
                    <InfoCard title="3. Firewalls e Antivírus">
                        <p>
                            Essas são as primeiras linhas de defesa contra ataques externos e
                            softwares maliciosos.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Firewall:</strong> funciona como um “porteiro digital” —
                                controla o que entra e sai da rede, bloqueando acessos suspeitos.
                            </li>
                            <li>
                                <strong>Antivírus:</strong> identifica, bloqueia e remove programas
                                maliciosos (vírus, trojans, spywares).
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                💡 Dica: mantenha o antivírus e o firewall sempre ativados e
                                atualizados!
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Ataques Cibernéticos */}
                <section>
                    <InfoCard title="4. Ataques Cibernéticos Mais Comuns">
                        <p>
                            Ataques cibernéticos são tentativas de roubo, dano ou interrupção de
                            informações e sistemas. Conhecer os principais ajuda a preveni-los:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Phishing:</strong> tentativa de enganar o usuário para roubar
                                dados (ex.: e-mails falsos).
                            </li>
                            <li>
                                <strong>Ransomware:</strong> sequestro de dados — o criminoso
                                bloqueia o acesso e exige pagamento.
                            </li>
                            <li>
                                <strong>DDoS:</strong> sobrecarrega um servidor com tráfego falso até
                                ele cair.
                            </li>
                            <li>
                                <strong>Malware:</strong> programa malicioso que causa danos ou rouba
                                informações.
                            </li>
                            <li>
                                <strong>Engenharia social:</strong> manipulação psicológica de
                                pessoas para obter informações sigilosas.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🚨 Lembre-se: o elo mais fraco da segurança é quase sempre o usuário.
                        </p>
                    </InfoCard>
                </section>

                {/* Políticas de Backup */}
                <section>
                    <InfoCard title="5. Políticas de Backup e Recuperação">
                        <p>
                            O <strong>backup</strong> é a cópia de segurança dos dados, essencial
                            para garantir a continuidade do negócio em caso de falhas, ataques ou
                            desastres.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Backup completo:</strong> copia todos os arquivos.
                            </li>
                            <li>
                                <strong>Backup incremental:</strong> copia apenas os arquivos
                                modificados desde o último backup.
                            </li>
                            <li>
                                <strong>Backup diferencial:</strong> copia tudo que mudou desde o
                                último backup completo.
                            </li>
                            <li>
                                <strong>Recuperação:</strong> processo de restaurar os dados a partir
                                do backup.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de política de backup:
- Backup diário automático
- Cópia externa (nuvem)
- Teste de restauração mensal`}
                        </div>

                        <p className="text-sm text-gray-600">
                            💾 Dica: mantenha cópias em locais diferentes e verifique periodicamente
                            se o backup está funcionando.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                A segurança da informação protege os dados contra acesso, alteração e
                                perda.
                            </li>
                            <li>
                                O triângulo CID: <strong>Confidencialidade</strong>,
                                <strong> Integridade</strong> e <strong>Disponibilidade</strong>.
                            </li>
                            <li>
                                A <strong>criptografia</strong> protege dados em trânsito.
                            </li>
                            <li>
                                <strong>Firewalls</strong> e <strong>antivírus</strong> defendem
                                contra ameaças.
                            </li>
                            <li>
                                <strong>Backups</strong> e planos de recuperação garantem
                                disponibilidade e continuidade.
                            </li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🔒 A melhor segurança é a combinação de tecnologia, boas práticas e
                            conscientização.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Segurança da Informação</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
