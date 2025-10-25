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

export default function PageFundamentosDeInformatica() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Título principal */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Fundamentos de Informática
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Fundamentos de Informática
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        Esta página apresenta os princípios básicos da computação e seus elementos
                        essenciais. Aqui você vai entender o que é hardware, o que é software, como
                        a memória funciona, por que computador “pensa” em binário e qual é o papel
                        do sistema operacional, dos aplicativos e dos drivers.
                    </p>
                </header>

                {/* Seção: Visão geral rápida */}
                <section aria-labelledby="visao-geral" className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <h2
                            id="visao-geral"
                            className="text-lg font-semibold text-gray-800 mb-2"
                        >
                            O que você vai aprender
                        </h2>
                        <ul className="text-gray-700 text-sm leading-relaxed space-y-2 list-disc pl-5">
                            <li>O que existe fisicamente dentro de um computador (hardware).</li>
                            <li>Tipos de memória e por que algumas são rápidas e outras são permanentes.</li>
                            <li>
                                Como o computador representa números e informações (binário, octal,
                                hexadecimal).
                            </li>
                            <li>
                                O que é software e por que ele manda no hardware (sistema operacional,
                                aplicativos, drivers).
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 😎
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine um computador como uma empresa:
                            <br />
                            <strong>Hardware</strong> é o prédio e as máquinas.
                            <br />
                            <strong>Memória</strong> são os arquivos e anotações usadas no dia.
                            <br />
                            <strong>Sistema operacional</strong> é o gerente que organiza tudo.
                            <br />
                            <strong>Aplicativos</strong> são os funcionários fazendo tarefas
                            específicas.
                            <br />
                            <strong>Drivers</strong> são tradutores que permitem que as máquinas
                            especiais trabalhem sem erro.
                        </p>
                    </div>
                </section>

                {/* Seção: Hardware */}
                <section aria-labelledby="hardware" className="space-y-6">
                    <InfoCard title="1. Componentes de Hardware">
                        <p>
                            <strong>Hardware</strong> é toda a parte física do computador — tudo que
                            você pode tocar. Ele forma a base para que o software funcione. Sem
                            hardware, nada liga. Sem software, nada acontece.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Placa-mãe (Motherboard)
                                </h3>
                                <p>
                                    É a “placa principal” onde todos os outros componentes são
                                    conectados. Ela permite que as peças conversem entre si por meio
                                    de circuitos e barramentos. Se você imaginar o computador como
                                    uma cidade, a placa-mãe é o mapa urbano inteiro com as ruas.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Processador (CPU – Unidade Central de Processamento)
                                </h3>
                                <p>
                                    É o “cérebro” do computador. Ele interpreta e executa instruções.
                                    Toda conta, toda decisão lógica (“se isso, faça aquilo”) passa
                                    pela CPU. A velocidade da CPU influencia o desempenho geral.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Memória</h3>
                                <p>
                                    Área onde dados e instruções ficam guardados para uso imediato
                                    ou futuro. Atenção: “memória” aqui é um termo geral. Já já vamos
                                    detalhar tipos diferentes (RAM, ROM e cache).
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Discos (Armazenamento)</h3>
                                <p>
                                    São os dispositivos que guardam dados de forma permanente, mesmo
                                    quando o computador é desligado. Exemplos: HD (disco rígido
                                    mecânico) e SSD (unidade de estado sólido, mais rápida e sem
                                    partes móveis).
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Periféricos</h3>
                                <p className="mb-2">
                                    São os equipamentos que permitem interação com o computador.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>
                                        <strong>Entrada:</strong> teclado, mouse, scanner, microfone.
                                    </li>
                                    <li>
                                        <strong>Saída:</strong> monitor, impressora, caixas de som.
                                    </li>
                                    <li>
                                        <strong>Entrada/Saída:</strong> pendrive, tela sensível ao
                                        toque (touchscreen), HD externo.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </InfoCard>
                </section>

                {/* Seção: Tipos de memória */}
                <section aria-labelledby="memoria" className="space-y-6">
                    <InfoCard title="2. Tipos de Memória (RAM, ROM e Cache)">
                        <p>
                            O computador usa vários tipos de memória ao mesmo tempo. Cada tipo tem
                            uma função diferente em relação à <em>velocidade</em>,{" "}
                            <em>capacidade</em> e <em>permanência</em> dos dados.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    RAM (Random Access Memory)
                                </h3>
                                <p>
                                    É a memória principal de trabalho. Ela guarda temporariamente os
                                    programas e dados que estão sendo usados agora. Quando você fecha
                                    um programa ou desliga o PC, o conteúdo da RAM some. Por isso
                                    dizemos que a RAM é <strong>volátil</strong>.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Analogia: a RAM é como a mesa onde você espalha papéis para
                                    trabalhar. Quanto maior a mesa, mais coisas você consegue ter
                                    abertas ao mesmo tempo sem bagunça.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    ROM (Read-Only Memory)
                                </h3>
                                <p>
                                    É uma memória que normalmente só pode ser lida, não alterada
                                    (pelo usuário comum). Nela ficam instruções importantes para o
                                    início do computador, como o firmware/BIOS ou UEFI. A ROM é
                                    <strong> não volátil</strong>, ou seja, mantém os dados mesmo sem
                                    energia.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Analogia: a ROM é o manual fixo da máquina, dizendo “como
                                    ligar”, guardado em um cofre.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Memória Cache</h3>
                                <p>
                                    A cache é uma memória extremamente rápida, localizada muito
                                    próxima (às vezes dentro) do processador. Ela guarda cópias dos
                                    dados e instruções mais usados recentemente, para evitar que a
                                    CPU tenha que buscar tudo de novo na RAM, que é mais lenta.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Analogia: cache é como post-its colados no monitor com as
                                    informações mais importantes, em vez de procurar tudo no armário
                                    toda hora.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm leading-relaxed">
                            <p className="font-semibold text-gray-800 mb-1">
                                Resumindo as diferenças:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    <strong>Cache:</strong> muito rápida, muito cara, muito pequena.
                                </li>
                                <li>
                                    <strong>RAM:</strong> rápida, média capacidade, apaga ao desligar.
                                </li>
                                <li>
                                    <strong>Disco (HD/SSD):</strong> mais lento, muito espaço, guarda
                                    tudo mesmo desligado.
                                </li>
                            </ul>
                        </div>
                    </InfoCard>
                </section>

                {/* Seção: Sistemas de numeração */}
                <section aria-labelledby="numeracao" className="space-y-6">
                    <InfoCard title="3. Sistemas de Numeração (Binário, Octal e Hexadecimal)">
                        <p>
                            Computadores não entendem palavras diretamente. Eles trabalham com
                            sinais elétricos: ligado (1) e desligado (0). Por isso, a base da
                            computação é o <strong>sistema binário</strong>.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">Binário (base 2)</h3>
                                <p>
                                    Usa apenas dois dígitos: 0 e 1. Cada posição representa uma
                                    potência de 2. Exemplo rápido:
                                </p>
                                <p className="bg-gray-100 rounded-lg border border-gray-300 p-3 font-mono text-sm overflow-x-auto">
                                    Binário 1011 = (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1) = 11 em
                                    decimal
                                </p>
                                <p className="text-sm text-gray-600">
                                    Em nível físico: 1 = tem corrente elétrica, 0 = não tem.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Octal (base 8)</h3>
                                <p>
                                    Usa os dígitos 0 até 7. Octal é útil historicamente porque cada
                                    dígito octal corresponde exatamente a um grupo de 3 bits binários.
                                    Exemplo:
                                </p>
                                <p className="bg-gray-100 rounded-lg border border-gray-300 p-3 font-mono text-sm overflow-x-auto">
                                    Binário 111 010 = Octal 72
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Hexadecimal (base 16)
                                </h3>
                                <p>
                                    Usa 0 a 9 e depois A, B, C, D, E, F (onde A = 10, B = 11, ... F =
                                    15). O hexadecimal é muito usado em programação, endereços de
                                    memória e cores, porque cada dígito hexadecimal representa um
                                    grupo de 4 bits binários.
                                </p>
                                <p className="bg-gray-100 rounded-lg border border-gray-300 p-3 font-mono text-sm overflow-x-auto">
                                    Binário 1111 = Hexadecimal F
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-sm leading-relaxed text-yellow-900">
                            <p className="font-semibold mb-1">
                                Por que isso cai em prova (e na vida real)?
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Endereços de memória → representados em hexadecimal.</li>
                                <li>
                                    Permissões em sistemas Unix/Linux → frequentemente aparecem em
                                    octal (ex.: 755, 644).
                                </li>
                                <li>
                                    Toda informação digital → no fim das contas, é binário puro.
                                </li>
                            </ul>
                        </div>
                    </InfoCard>
                </section>

                {/* Seção: Software */}
                <section aria-labelledby="software" className="space-y-6">
                    <InfoCard title="4. Conceitos de Software (Sistema Operacional, Aplicativos e Drivers)">
                        <p>
                            Se o hardware é o corpo, o software é a mente. O software é o conjunto
                            de instruções que dizem ao computador o que fazer, como fazer e quando
                            fazer.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Sistema Operacional (SO)
                                </h3>
                                <p>
                                    É o software principal que gerencia todo o computador. Exemplos:
                                    Windows, Linux, macOS. Ele controla memória, processador,
                                    arquivos, segurança, redes e ainda oferece a interface para o
                                    usuário (telas, janelas, menus).
                                </p>
                                <p className="text-sm text-gray-600">
                                    Analogia: o SO é o gerente da empresa. Nada acontece sem ele
                                    autorizar.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Aplicativos</h3>
                                <p>
                                    São programas criados para tarefas específicas: editor de texto,
                                    navegador de internet, planilha eletrônica, player de música,
                                    mensageiro, etc. Você usa aplicativos para trabalhar, estudar,
                                    jogar, navegar, conversar.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">Drivers</h3>
                                <p>
                                    São softwares especiais que permitem que o sistema operacional
                                    “entenda” o hardware. Exemplo: o driver da placa de vídeo deixa o
                                    Windows conversar corretamente com a GPU. Sem driver, o sistema
                                    até pode enxergar o dispositivo, mas não usa todo o potencial.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Analogia: o driver é o tradutor entre o gerente (SO) e uma
                                    máquina especializada (impressora, placa de vídeo, webcam etc.).
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-300 rounded-xl p-4 text-sm leading-relaxed text-green-900">
                            <p className="font-semibold mb-1">
                                Por que isso é importante para prova e para a vida?
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Sem sistema operacional, você nem entra na área de trabalho.
                                </li>
                                <li>
                                    Sem aplicativos, você não consegue fazer tarefas úteis (digitar,
                                    navegar, calcular).
                                </li>
                                <li>
                                    Sem drivers corretos, impressora não imprime, áudio não sai,
                                    placa de vídeo não performa.
                                </li>
                            </ul>
                        </div>
                    </InfoCard>
                </section>

                {/* Seção final / resumo */}
                <section aria-labelledby="resumo" className="space-y-6">
                    <InfoCard title="Resumo Geral">
                        <p className="font-medium text-gray-800">
                            Para dominar informática básica, você precisa entender três pilares:
                        </p>

                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                <strong>Hardware:</strong> é o físico (placa-mãe, CPU, memória,
                                disco, periféricos).
                            </li>
                            <li>
                                <strong>Memória:</strong> RAM (trabalho temporário), ROM
                                (inicialização), cache (acesso ultrarrápido).
                            </li>
                            <li>
                                <strong>Software:</strong> sistema operacional, aplicativos e
                                drivers — tudo que manda no hardware.
                            </li>
                        </ol>

                        <p>
                            E, por baixo de tudo isso, o computador fala em <strong>binário</strong>
                            . Para nós é texto, imagem, vídeo. Para ele é 0 e 1.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo de Fundamentos de Informática.</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
