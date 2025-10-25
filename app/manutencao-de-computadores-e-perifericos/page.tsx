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

export default function PageManutencaoDeComputadoresEPerifericos() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Manutenção de Computadores e Periféricos
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Manutenção de Computadores e Periféricos
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        A <strong>manutenção de computadores e periféricos</strong> é essencial para
                        garantir o funcionamento eficiente e prolongar a vida útil dos equipamentos
                        de informática.
                        Ela envolve o <strong>diagnóstico de hardware</strong>, a
                        <strong> substituição de peças</strong>, a
                        <strong> montagem e desmontagem</strong> de PCs, além da
                        <strong> manutenção de impressoras, scanners e dispositivos móveis</strong>.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🔧
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Pense em um computador como um **carro**: o processador é o motor, a
                            placa-mãe é o chassi, e os periféricos são os acessórios como faróis e
                            vidros elétricos.
                            A manutenção serve para garantir que todas essas partes funcionem em
                            sintonia e que o “veículo digital” continue rodando sem falhas.
                        </p>
                    </div>
                </section>

                {/* Diagnóstico de Hardware */}
                <section>
                    <InfoCard title="1. Diagnóstico de Hardware">
                        <p>
                            O diagnóstico é o primeiro passo na manutenção. Ele identifica falhas em
                            componentes como memória, disco rígido, fonte de alimentação e placa-mãe.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Verificação visual de danos físicos (capacitores estufados, poeira, etc.).</li>
                            <li>Testes de inicialização (POST — Power On Self Test).</li>
                            <li>Uso de ferramentas de diagnóstico como <strong>Hiren’s Boot CD</strong>, <strong>MemTest86</strong> e <strong>CrystalDiskInfo</strong>.</li>
                            <li>Análise de temperatura e desempenho (HWMonitor, AIDA64).</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Teste de memória no Windows
mdsched.exe

# Verificar disco
chkdsk C: /f

# Monitorar temperatura (Linux)
sensors`}
                        </div>

                        <p className="text-sm text-gray-600">
                            💡 Sempre inicie o diagnóstico pelas verificações simples — energia,
                            cabos e conexões — antes de trocar componentes.
                        </p>
                    </InfoCard>
                </section>

                {/* Substituição de Peças */}
                <section>
                    <InfoCard title="2. Substituição de Peças">
                        <p>
                            A substituição de componentes é comum em manutenções corretivas. Deve ser
                            feita com cuidado para evitar danos ao hardware.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Utilize pulseira antiestática para evitar descargas elétricas.</li>
                            <li>Verifique compatibilidade de memória (DDR3, DDR4, DDR5).</li>
                            <li>Troque fontes com atenção à potência e padrão (ATX, SFX).</li>
                            <li>Limpe conectores com pincel e álcool isopropílico.</li>
                            <li>Atualize drivers após substituições de hardware.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧩 Antes de trocar, teste a peça em outro equipamento — isso evita gastos
                            desnecessários.
                        </p>
                    </InfoCard>
                </section>

                {/* Montagem e Desmontagem */}
                <section>
                    <InfoCard title="3. Montagem e Desmontagem de PCs">
                        <p>
                            Saber montar e desmontar um computador é fundamental para manutenção,
                            upgrades e limpezas internas.
                        </p>

                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Desconecte o equipamento da energia.</li>
                            <li>Retire tampas e organize os parafusos.</li>
                            <li>Desconecte cabos de dados e energia com cuidado.</li>
                            <li>Remova componentes na ordem inversa da montagem.</li>
                            <li>Durante a montagem, aplique pasta térmica e fixe bem o cooler da CPU.</li>
                        </ol>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            ⚙️ Dica: monte em superfície lisa, evite tapetes e mantenha o ambiente limpo.
                        </div>
                    </InfoCard>
                </section>

                {/* Manutenção de Periféricos */}
                <section>
                    <InfoCard title="4. Manutenção de Impressoras, Scanners e Dispositivos Móveis">
                        <p>
                            Além do computador, a manutenção também se estende aos dispositivos
                            periféricos, essenciais no dia a dia das empresas e usuários.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Impressoras:</strong> limpeza de roletes, substituição de
                                cartuchos e toners, verificação de drivers e alinhamento de cabeças
                                de impressão.
                            </li>
                            <li>
                                <strong>Scanners:</strong> limpeza do vidro e sensores, atualização de
                                firmware e calibração.
                            </li>
                            <li>
                                <strong>Dispositivos móveis:</strong> atualização de sistema, limpeza
                                de cache, substituição de bateria e conector de carga.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧼 Manutenções periódicas evitam falhas de impressão, atolamentos e lentidão.
                        </p>
                    </InfoCard>
                </section>

                {/* Segurança e Cuidados */}
                <section>
                    <InfoCard title="5. Segurança e Cuidados na Manutenção">
                        <p>
                            A segurança é indispensável em qualquer tipo de manutenção, seja de
                            computadores ou periféricos.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Desligue sempre o equipamento da tomada antes de abrir.</li>
                            <li>Evite tocar diretamente em circuitos e chips.</li>
                            <li>Use ferramentas adequadas (chaves magnéticas, pinças, soprador térmico).</li>
                            <li>Guarde parafusos e peças pequenas em recipientes separados.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            ⚡ A segurança protege o técnico, o cliente e o equipamento.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>O diagnóstico identifica falhas físicas e lógicas.</li>
                            <li>A substituição de peças deve seguir compatibilidade e segurança.</li>
                            <li>A montagem e desmontagem exigem método e cuidado.</li>
                            <li>Periféricos também requerem manutenção preventiva.</li>
                            <li>A segurança é prioridade em todas as etapas.</li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🧠 A manutenção bem feita aumenta a vida útil dos equipamentos e reduz custos a longo prazo.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Manutenção de Computadores e Periféricos</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
