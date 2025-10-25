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

export default function PageDesenvolvimentoWeb() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho principal */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Desenvolvimento Web
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Desenvolvimento Web
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        O <strong>Desenvolvimento Web</strong> envolve a criação de sites, sistemas
                        e aplicações que funcionam na internet. Para isso, usamos tecnologias como
                        <strong> HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>,
                        além de frameworks e linguagens de back-end, como <strong>PHP</strong> e
                        <strong> Node.js</strong>. Também são essenciais conceitos como
                        <strong> design responsivo</strong> e <strong>APIs REST</strong>.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 🌐
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine a web como uma casa:
                            <br />
                            <strong>HTML</strong> é a estrutura (paredes e colunas),
                            <strong> CSS</strong> é a decoração (cores, tamanhos e estilos),
                            <strong> JavaScript</strong> é a eletricidade e os botões interativos,
                            enquanto o <strong>back-end</strong> é o encanamento invisível que faz
                            tudo funcionar.
                        </p>
                    </div>
                </section>

                {/* HTML */}
                <section>
                    <InfoCard title="1. Fundamentos de HTML">
                        <p>
                            O <strong>HTML (HyperText Markup Language)</strong> é a base da Web. Ele
                            define a estrutura e o conteúdo de uma página usando “tags”.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>&lt;h1&gt; a &lt;h6&gt;</strong>: títulos.
                            </li>
                            <li>
                                <strong>&lt;p&gt;</strong>: parágrafos.
                            </li>
                            <li>
                                <strong>&lt;a&gt;</strong>: links.
                            </li>
                            <li>
                                <strong>&lt;img&gt;</strong>: imagens.
                            </li>
                            <li>
                                <strong>&lt;div&gt; / &lt;section&gt; / &lt;header&gt;</strong>:
                                estrutura semântica.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`<!DOCTYPE html>
<html>
  <head>
    <title>Meu Site</title>
  </head>
  <body>
    <h1>Bem-vindo!</h1>
    <p>Este é o meu primeiro site em HTML.</p>
  </body>
</html>`}
                        </div>
                    </InfoCard>
                </section>

                {/* CSS */}
                <section>
                    <InfoCard title="2. Fundamentos de CSS">
                        <p>
                            O <strong>CSS (Cascading Style Sheets)</strong> é responsável pelo
                            visual da página. Ele define cores, tamanhos, fontes e o layout dos
                            elementos.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>Define estilos de texto, botões e imagens.</li>
                            <li>Permite criar layouts modernos com Flexbox e Grid.</li>
                            <li>Controla espaçamento, margens e alinhamento.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`body {
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h1 {
  color: #0077ff;
  text-align: center;
}`}
                        </div>

                        <p className="text-sm text-gray-600">
                            💡 Dica: sempre separe estrutura (HTML) de estilo (CSS) para manter o
                            código limpo.
                        </p>
                    </InfoCard>
                </section>

                {/* JavaScript */}
                <section>
                    <InfoCard title="3. Fundamentos de JavaScript">
                        <p>
                            O <strong>JavaScript</strong> adiciona interatividade às páginas. Ele
                            permite manipular elementos, responder a cliques e buscar dados
                            dinamicamente.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>Manipula o conteúdo da página em tempo real.</li>
                            <li>Trabalha com eventos, como cliques e digitação.</li>
                            <li>Faz comunicação com APIs e back-end.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`<button id="botao">Clique aqui</button>
<p id="mensagem"></p>

<script>
  document.getElementById("botao").onclick = function() {
    document.getElementById("mensagem").innerText = "Você clicou!";
  };
</script>`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🚀 O JavaScript roda diretamente no navegador e é a base de frameworks
                            como React, Vue e Angular.
                        </p>
                    </InfoCard>
                </section>

                {/* Design Responsivo */}
                <section>
                    <InfoCard title="4. Design Responsivo">
                        <p>
                            O <strong>design responsivo</strong> adapta a página para diferentes
                            tamanhos de tela — de celulares a monitores grandes.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>Usa unidades relativas como % e em.</li>
                            <li>
                                Utiliza <code>@media queries</code> para ajustar estilos conforme o
                                tamanho da tela.
                            </li>
                            <li>Permite um site bonito e funcional em qualquer dispositivo.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}`}
                        </div>

                        <p className="text-sm text-gray-600">
                            📱 Dica: use o modo “Responsivo” do navegador para testar diferentes
                            tamanhos.
                        </p>
                    </InfoCard>
                </section>

                {/* Frameworks */}
                <section>
                    <InfoCard title="5. Frameworks (Bootstrap)">
                        <p>
                            Frameworks como <strong>Bootstrap</strong> aceleram o desenvolvimento,
                            oferecendo componentes prontos e responsivos.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>Botões, tabelas e formulários já estilizados.</li>
                            <li>Grades (grids) para criar layouts alinhados.</li>
                            <li>Classes CSS pré-definidas para facilitar o design.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">

<button class="btn btn-primary">Botão Bootstrap</button>`}
                        </div>

                        <p className="text-sm text-gray-600">
                            ⚡ Dica: Bootstrap é ótimo para iniciantes, mas dominar CSS puro é
                            fundamental.
                        </p>
                    </InfoCard>
                </section>

                {/* Back-end */}
                <section>
                    <InfoCard title="6. Back-end com PHP e Node.js">
                        <p>
                            O <strong>back-end</strong> é a parte que roda no servidor. Ele processa
                            dados, conecta-se a bancos e envia respostas para o navegador.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>PHP:</strong> linguagem tradicional e amplamente usada em
                                sites e sistemas web.
                            </li>
                            <li>
                                <strong>Node.js:</strong> usa JavaScript no servidor, ideal para
                                aplicações rápidas e em tempo real.
                            </li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <p className="font-semibold">🧩 Exemplo em PHP</p>
                                <pre className="font-mono text-xs bg-gray-100 border border-gray-300 rounded-xl p-3">
                                    {`<?php
$nome = "Robson";
echo "Olá, $nome!";
?>`}
                                </pre>
                            </div>

                            <div>
                                <p className="font-semibold">⚙️ Exemplo em Node.js</p>
                                <pre className="font-mono text-xs bg-gray-100 border border-gray-300 rounded-xl p-3">
                                    {`import http from "http";

http.createServer((req, res) => {
  res.write("Hello, world!");
  res.end();
}).listen(3000);`}
                                </pre>
                            </div>
                        </div>
                    </InfoCard>
                </section>

                {/* APIs e REST */}
                <section>
                    <InfoCard title="7. Conceitos de APIs e REST">
                        <p>
                            Uma <strong>API (Application Programming Interface)</strong> permite que
                            sistemas diferentes se comuniquem entre si.
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>REST</strong> é um padrão de arquitetura para APIs que usa o
                                protocolo HTTP.
                            </li>
                            <li>As requisições usam métodos como GET, POST, PUT e DELETE.</li>
                            <li>As respostas geralmente são em formato JSON.</li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Exemplo de resposta JSON
{
  "usuario": "Robson",
  "idade": 30,
  "linguagem": "JavaScript"
}`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🔗 Exemplo: um site pode usar uma API REST para buscar dados de clima ou
                            notícias em tempo real.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>HTML → estrutura</li>
                            <li>CSS → aparência</li>
                            <li>JavaScript → interatividade</li>
                            <li>Bootstrap → acelera o design</li>
                            <li>PHP/Node.js → back-end</li>
                            <li>APIs REST → comunicação entre sistemas</li>
                        </ol>

                        <p className="text-sm text-gray-600 mt-4">
                            🌍 Entender esses pilares é essencial para se tornar um desenvolvedor
                            web completo e construir projetos reais com confiança.
                        </p>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Desenvolvimento Web</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
