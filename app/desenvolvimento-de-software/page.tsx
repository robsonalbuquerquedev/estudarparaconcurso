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

export default function PageDesenvolvimentoDeSoftware() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho principal */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Desenvolvimento de Software
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Desenvolvimento de Software
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        O <strong>desenvolvimento de software</strong> é o processo de planejar,
                        escrever, testar e manter programas de computador. Envolve desde a
                        <strong> lógica de programação</strong> até o uso de linguagens e
                        ferramentas como <strong>Python</strong>, <strong>JavaScript</strong>,
                        <strong> PHP</strong> e o controle de versões com <strong>Git</strong>.
                    </p>
                </header>

                {/* Analogia introdutória */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 💡
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine que programar é como <strong>ensinar um robô</strong> a fazer
                            algo: você precisa explicar passo a passo, de forma clara, lógica e sem
                            erros. O computador não “pensa”, ele apenas executa o que você manda —
                            exatamente como você mandou.
                        </p>
                    </div>
                </section>

                {/* Lógica de Programação */}
                <section>
                    <InfoCard title="1. Lógica de Programação">
                        <p>
                            A lógica de programação é a base de todo o desenvolvimento. É a
                            capacidade de resolver problemas criando uma sequência de passos
                            organizados — o famoso “passo a passo lógico”.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Entrada:</strong> dados que o programa recebe (ex.: número
                                digitado pelo usuário).
                            </li>
                            <li>
                                <strong>Processamento:</strong> o que o programa faz com os dados
                                (ex.: cálculos, comparações, decisões).
                            </li>
                            <li>
                                <strong>Saída:</strong> resultado exibido ao usuário.
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧠 Exemplo: “Some dois números e mostre o resultado” → Entrada: 3 e 5 →
                            Processamento: 3 + 5 → Saída: 8.
                        </p>
                    </InfoCard>
                </section>

                {/* Variáveis e Operadores */}
                <section>
                    <InfoCard title="2. Variáveis e Operadores">
                        <p>
                            As <strong>variáveis</strong> são como caixas com nomes, usadas para
                            guardar valores. Já os <strong>operadores</strong> são símbolos usados
                            para fazer operações matemáticas ou lógicas.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Tipos de Variáveis</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>
                                        <strong>Inteiros:</strong> números sem casas decimais (ex.:
                                        10)
                                    </li>
                                    <li>
                                        <strong>Reais:</strong> números com casas decimais (ex.:
                                        3.14)
                                    </li>
                                    <li>
                                        <strong>Texto (string):</strong> sequência de caracteres
                                        (ex.: "Robson")
                                    </li>
                                    <li>
                                        <strong>Lógicos (booleanos):</strong> valores
                                        <code> true</code> ou <code>false</code>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    Principais Operadores
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>
                                        <strong>Aritméticos:</strong> +, -, *, /, %
                                    </li>
                                    <li>
                                        <strong>Relacionais:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=
                                    </li>
                                    <li>
                                        <strong>Lógicos:</strong> and, or, not
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm mt-4">
                            <p>
                                🧩 <strong>Exemplo em Python:</strong>
                            </p>
                            <pre className="font-mono text-xs mt-2">
                                {`a = 5
b = 3
soma = a + b
print("Resultado:", soma)  # Saída: Resultado: 8`}
                            </pre>
                        </div>
                    </InfoCard>
                </section>

                {/* Estruturas de Controle */}
                <section>
                    <InfoCard title="3. Estruturas de Controle">
                        <p>
                            São os comandos que controlam o fluxo do programa, permitindo que ele
                            tome decisões e repita ações.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Decisão (if/else):</strong> executa blocos de código
                                dependendo de uma condição.
                            </li>
                            <li>
                                <strong>Repetição (for/while):</strong> repete ações enquanto uma
                                condição for verdadeira.
                            </li>
                            <li>
                                <strong>Desvio (break/continue):</strong> interrompe ou pula partes
                                do loop.
                            </li>
                        </ul>

                        <pre className="font-mono text-xs bg-gray-100 border border-gray-300 rounded-xl p-4">
                            {`# Exemplo em Python
idade = 18
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`}
                        </pre>
                    </InfoCard>
                </section>

                {/* Algoritmos e Estruturas de Dados */}
                <section>
                    <InfoCard title="4. Algoritmos e Estruturas de Dados">
                        <p>
                            Um <strong>algoritmo</strong> é uma sequência lógica e finita de passos
                            que resolve um problema.
                            Já as <strong>estruturas de dados</strong> são maneiras de organizar e
                            armazenar informações para facilitar o acesso e a modificação.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Lista:</strong> coleção ordenada de elementos (ex.: lista de
                                nomes ou números).
                            </li>
                            <li>
                                <strong>Fila (Queue):</strong> o primeiro a entrar é o primeiro a
                                sair (FIFO).
                            </li>
                            <li>
                                <strong>Pilha (Stack):</strong> o último a entrar é o primeiro a sair
                                (LIFO).
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm mt-4">
                            <p>
                                📘 <strong>Exemplo prático:</strong>
                            </p>
                            <pre className="font-mono text-xs mt-2">
                                {`# Lista em Python
nomes = ["Ana", "Bia", "Carlos"]
nomes.append("Robson")  # Adiciona ao final
print(nomes)  # ['Ana', 'Bia', 'Carlos', 'Robson']

# Pilha
pilha = []
pilha.append(1)
pilha.append(2)
pilha.pop()  # Remove o último (2)

# Fila
from collections import deque
fila = deque([1, 2, 3])
fila.popleft()  # Remove o primeiro (1)
`}
                            </pre>
                        </div>
                    </InfoCard>
                </section>

                {/* Linguagens Populares */}
                <section>
                    <InfoCard title="5. Linguagens Populares de Programação">
                        <p>
                            Existem centenas de linguagens, mas algumas se destacam por sua
                            praticidade, desempenho ou popularidade:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Python:</strong> fácil de aprender, ideal para ciência de
                                dados, automação e IA.
                            </li>
                            <li>
                                <strong>JavaScript:</strong> usada em sites, aplicações web e
                                back-end (Node.js).
                            </li>
                            <li>
                                <strong>PHP:</strong> muito usada em sistemas web e sites dinâmicos
                                (como o WordPress).
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            🧠 Curiosidade: cada linguagem tem sua sintaxe, mas a lógica é a mesma —
                            se você entende lógica, aprende qualquer uma.
                        </p>
                    </InfoCard>
                </section>

                {/* Scripts e Git */}
                <section>
                    <InfoCard title="6. Scripts e Git">
                        <p>
                            Um <strong>script</strong> é um conjunto de comandos executados de forma
                            automática por um programa. Por exemplo: um script em Python que
                            renomeia vários arquivos de uma vez.
                        </p>

                        <p>
                            O <strong>Git</strong> é um sistema de <strong>controle de versão</strong>
                            . Ele guarda o histórico de alterações do seu código e permite trabalhar
                            em equipe sem perder nada.
                        </p>

                        <pre className="font-mono text-xs bg-gray-100 border border-gray-300 rounded-xl p-4">
                            {`# Principais comandos Git
git init        # Cria um repositório
git add .       # Adiciona arquivos
git commit -m "Primeiro commit"  # Salva alterações
git push        # Envia para o repositório remoto (ex.: GitHub)
`}
                        </pre>

                        <p className="text-sm text-gray-600">
                            🚀 Dominar Git é essencial para trabalhar com projetos profissionais e
                            colaborar com outros desenvolvedores.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                <strong>Lógica de programação</strong> é o alicerce de qualquer
                                linguagem.
                            </li>
                            <li>
                                <strong>Variáveis</strong> guardam dados, e
                                <strong> operadores</strong> realizam operações.
                            </li>
                            <li>
                                <strong>Estruturas de controle</strong> definem o fluxo do programa.
                            </li>
                            <li>
                                <strong>Algoritmos e estruturas de dados</strong> organizam o
                                raciocínio e as informações.
                            </li>
                            <li>
                                <strong>Git</strong> mantém o histórico e o trabalho em equipe seguro.
                            </li>
                        </ol>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Desenvolvimento de Software</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
