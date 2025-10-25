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

export default function PageBancoDeDados() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Cabeçalho */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-wide font-semibold text-blue-600">
                        Banco de Dados
                    </p>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                        Banco de Dados
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        Um <strong>banco de dados</strong> é uma coleção organizada de informações
                        que podem ser acessadas, gerenciadas e atualizadas facilmente. Aqui você
                        vai aprender os <strong>conceitos fundamentais</strong>, comandos SQL,
                        diferenças entre <strong>MySQL</strong>, <strong>PostgreSQL</strong> e uma
                        introdução ao <strong>NoSQL (MongoDB)</strong>.
                    </p>
                </header>

                {/* Analogia */}
                <section>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-blue-900 mb-2">
                            Analogia rápida 📚
                        </h2>
                        <p className="text-blue-900 text-sm leading-relaxed">
                            Imagine um banco de dados como um grande **arquivo de fichas** de uma
                            biblioteca.
                            Cada **tabela** é uma gaveta, cada **registro** é uma ficha, e cada
                            **campo** é uma informação específica (como nome do livro ou autor).
                        </p>
                    </div>
                </section>

                {/* Conceitos básicos */}
                <section>
                    <InfoCard title="1. Conceitos Básicos">
                        <p>
                            Todo banco de dados relacional é composto por estruturas fundamentais:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Tabela:</strong> conjunto de dados organizados em linhas e
                                colunas.
                            </li>
                            <li>
                                <strong>Campo (coluna):</strong> define o tipo de dado (ex. nome,
                                idade, e-mail).
                            </li>
                            <li>
                                <strong>Registro (linha):</strong> representa uma entrada completa na
                                tabela.
                            </li>
                            <li>
                                <strong>Chave primária (PRIMARY KEY):</strong> identifica de forma
                                única cada registro.
                            </li>
                            <li>
                                <strong>Chave estrangeira (FOREIGN KEY):</strong> relaciona dados
                                entre tabelas.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-sm">
                            <p className="font-semibold mb-1">Exemplo:</p>
                            <p>
                                Tabela <code>clientes</code>: campos → id, nome, email, telefone.
                            </p>
                        </div>
                    </InfoCard>
                </section>

                {/* Comandos SQL */}
                <section>
                    <InfoCard title="2. Comandos SQL (Structured Query Language)">
                        <p>
                            O <strong>SQL</strong> é a linguagem usada para criar e manipular bancos
                            de dados relacionais.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>SELECT:</strong> consulta dados.
                            </li>
                            <li>
                                <strong>INSERT:</strong> insere novos registros.
                            </li>
                            <li>
                                <strong>UPDATE:</strong> altera registros existentes.
                            </li>
                            <li>
                                <strong>DELETE:</strong> remove registros.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`-- Criar tabela
CREATE TABLE clientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100)
);

-- Inserir dados
INSERT INTO clientes (nome, email)
VALUES ('Robson Albuquerque', 'robson@email.com');

-- Consultar dados
SELECT * FROM clientes;

-- Atualizar dados
UPDATE clientes SET email = 'novo@email.com' WHERE id = 1;

-- Deletar dados
DELETE FROM clientes WHERE id = 1;`}
                        </div>
                    </InfoCard>
                </section>

                {/* MySQL e PostgreSQL */}
                <section>
                    <InfoCard title="3. MySQL e PostgreSQL">
                        <p>
                            Ambos são sistemas de gerenciamento de banco de dados relacionais (SGBDs)
                            muito populares, porém com características diferentes:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">🟦 MySQL</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Mais simples e leve.</li>
                                    <li>Amplamente usado em aplicações web (ex.: WordPress).</li>
                                    <li>Desempenho otimizado para leitura.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">🟣 PostgreSQL</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    <li>Mais robusto e avançado.</li>
                                    <li>Suporte a funções complexas e tipos de dados personalizados.</li>
                                    <li>Excelente para sistemas corporativos e científicos.</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4">
                            ⚙️ Ambos utilizam SQL, mas o PostgreSQL segue mais fielmente os padrões
                            da linguagem.
                        </p>
                    </InfoCard>
                </section>

                {/* Backup e Restauração */}
                <section>
                    <InfoCard title="4. Backup e Restauração">
                        <p>
                            Fazer <strong>backup</strong> é criar uma cópia de segurança do banco de
                            dados.
                            A <strong>restauração</strong> é o processo inverso — recuperar os dados
                            a partir de um backup.
                        </p>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`# Backup no MySQL
mysqldump -u root -p nome_do_banco > backup.sql

# Restauração no MySQL
mysql -u root -p nome_do_banco < backup.sql

# Backup no PostgreSQL
pg_dump nome_do_banco > backup.sql

# Restauração no PostgreSQL
psql nome_do_banco < backup.sql`}
                        </div>

                        <p className="text-sm text-gray-600">
                            💡 Sempre mantenha backups regulares para evitar perda de informações
                            importantes.
                        </p>
                    </InfoCard>
                </section>

                {/* Introdução ao NoSQL */}
                <section>
                    <InfoCard title="5. Introdução ao NoSQL (MongoDB)">
                        <p>
                            O <strong>NoSQL</strong> surgiu para lidar com grandes volumes de dados
                            e estruturas flexíveis.
                            Diferente do SQL tradicional, o NoSQL não usa tabelas, e sim
                            **coleções** e **documentos**.
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Coleções:</strong> equivalem a tabelas.
                            </li>
                            <li>
                                <strong>Documentos:</strong> equivalem a registros, mas armazenam
                                dados no formato <code>JSON</code>.
                            </li>
                        </ul>

                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 font-mono text-xs">
                            {`// Inserir um documento no MongoDB
db.clientes.insertOne({
  nome: "Robson Albuquerque",
  email: "robson@email.com",
  idade: 30
});

// Buscar documentos
db.clientes.find({ idade: { $gt: 25 } });`}
                        </div>

                        <p className="text-sm text-gray-600">
                            🚀 O MongoDB é muito usado em aplicações modernas e escaláveis, como
                            sistemas em tempo real e aplicativos mobile.
                        </p>
                    </InfoCard>
                </section>

                {/* Resumo */}
                <section>
                    <InfoCard title="Resumo Geral">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                <strong>Tabelas, campos e chaves</strong> são a base dos bancos
                                relacionais.
                            </li>
                            <li>
                                <strong>SQL</strong> permite consultar e manipular dados.
                            </li>
                            <li>
                                <strong>MySQL</strong> → simples e rápido;{" "}
                                <strong>PostgreSQL</strong> → robusto e poderoso.
                            </li>
                            <li>
                                <strong>Backups</strong> são essenciais para segurança.
                            </li>
                            <li>
                                <strong>NoSQL</strong> é ideal para dados dinâmicos e não
                                estruturados.
                            </li>
                        </ol>
                    </InfoCard>
                </section>

                <footer className="text-center text-xs text-gray-500 pt-10 pb-20">
                    <p>Conteúdo para estudo: Banco de Dados</p>
                    <p>Última atualização: 25/10/2025</p>
                </footer>
            </div>
        </main>
    );
}
