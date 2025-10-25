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

export default function PageSuporteTecnico() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Suporte Técnico
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Suporte Técnico
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        O <strong>Suporte Técnico</strong> é a área responsável por garantir que os
                        sistemas, equipamentos e usuários funcionem corretamente.
                        Ele envolve o <strong>atendimento ao usuário</strong>, o
                        <strong> diagnóstico de hardware e software</strong>, o uso de
                        <strong> ferramentas de suporte remoto</strong> e a
                        <strong> manutenção preventiva e corretiva</strong>.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🧠
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Pense no suporte técnico como o **médico dos computadores**:
                            ele faz consultas (diagnósticos), prescreve tratamentos (soluções de
                            software), realiza cirurgias (trocas de peças) e faz check-ups regulares
                            (manutenção preventiva).
                        </p>
                    </div>
                </section>

                {/* Atendimento ao usuário */}
                <section>
                    <InfoCard title="1. Atendimento ao Usuário">
                        <p>
                            O suporte técnico começa com o **atendimento ao usuário**, buscando
                            entender o problema de forma clara e eficiente.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Escuta ativa:</strong> compreender o problema relatado sem
                                interrupções.
                            </li>
                            <li>
                                <strong>Comunicação clara:</strong> explicar soluções com linguagem
                                acessível, sem jargões técnicos.
                            </li>
                            <li>
                                <strong>Registro de chamados:</strong> documentar solicitações e
                                ações para controle e histórico.
                            </li>
                            <li>
                                <strong>Empatia e paciência:</strong> o usuário nem sempre entende o
                                problema técnico — e isso é normal!
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            💡 Dica: um bom suporte não apenas resolve o problema, mas transmite
                            confiança e tranquilidade ao usuário.
                        </p>
                    </InfoCard>
                </section>

                {/* Diagnóstico */}
                <section>
                    <InfoCard title="2. Diagnóstico de Hardware e Software">
                        <p>
                            O diagnóstico identifica a **causa raiz** de um problema. É essencial
                            para aplicar a solução correta, evitando desperdício de tempo e recursos.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Hardware:</strong> verificar componentes físicos — memória,
                                HD/SSD, fonte, cabos, placa-mãe, etc.
                            </li>
                            <li>
                                <strong>Software:</strong> analisar sistema operacional, drivers,
                                atualizações e programas instalados.
                            </li>
                            <li>
                                <strong>Ferramentas úteis:</strong> CPU-Z, CrystalDiskInfo, MemTest,
                                Gerenciador de Tarefas, e logs do sistema.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplos de comandos para diagnóstico
ping 8.8.8.8          # Testa conexão com a internet
sfc /scannow          # Verifica integridade do Windows
chkdsk /f             # Corrige erros no disco
sudo dmesg            # Exibe logs de hardware no Linux`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🧩 Um bom diagnóstico evita “trocar peça à toa” e garante uma solução
                            precisa.
                        </p>
                    </InfoCard>
                </section>

                {/* Ferramentas de suporte remoto */}
                <section>
                    <InfoCard title="3. Ferramentas de Suporte Remoto">
                        <p>
                            O suporte remoto permite ao técnico **acessar o computador do usuário à
                            distância**, facilitando diagnósticos e correções rápidas sem precisar
                            estar fisicamente presente.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>TeamViewer:</strong> acesso remoto seguro e rápido,
                                amplamente usado em empresas.
                            </li>
                            <li>
                                <strong>AnyDesk:</strong> leve e rápido, ideal para conexões em rede
                                lenta.
                            </li>
                            <li>
                                <strong>Google Remote Desktop:</strong> alternativa gratuita e fácil
                                de usar via navegador.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p>
                                ⚠️ Sempre peça autorização do usuário antes de acessar a máquina e
                                garanta que a conexão seja segura (criptografada).
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Manutenção preventiva e corretiva */}
                <section>
                    <InfoCard title="4. Manutenção Preventiva e Corretiva">
                        <p>
                            A manutenção mantém os equipamentos em boas condições de uso e evita
                            falhas inesperadas. Pode ser dividida em dois tipos:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Preventiva:</strong> realizada periodicamente para prevenir
                                falhas.
                                Exemplo: limpeza interna, atualização de software, checagem de
                                cabos e refrigeração.
                            </li>
                            <li>
                                <strong>Corretiva:</strong> ocorre após o problema aparecer.
                                Exemplo: troca de peças, reinstalação de sistema, remoção de vírus.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de rotina preventiva
- Verificar antivírus e atualizações
- Limpar ventoinhas e dissipadores
- Testar memória e armazenamento
- Fazer backup dos dados`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🔧 A manutenção preventiva é como uma consulta de rotina: evita “doenças”
                            mais sérias no futuro.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>O suporte técnico é o “primeiro socorro” da informática.</li>
                            <li>
                                Envolve diagnóstico preciso e comunicação eficaz com o usuário.
                            </li>
                            <li>
                                Ferramentas de suporte remoto agilizam o atendimento e reduzem custos.
                            </li>
                            <li>
                                Manutenções preventiva e corretiva garantem desempenho e durabilidade.
                            </li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            💡 Um bom profissional de suporte técnico é metade técnico, metade
                            detetive — e 100% paciente!
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Suporte Técnico</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
