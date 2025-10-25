"use client";

import { motion } from "framer-motion";

export default function LeiFederal12527() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Lei Federal nº 12.527, de 18 de novembro de 2011
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Dispõe sobre o <strong>direito de acesso às informações públicas</strong>,
                    regulamentando o inciso XXXIII do artigo 5º, o inciso II do §3º do artigo 37 e o §2º do artigo 216 da Constituição Federal.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        A <strong>Lei de Acesso à Informação (LAI)</strong> foi criada para assegurar que todo cidadão tenha o direito
                        de obter informações públicas produzidas ou custodiadas por órgãos e entidades da Administração Pública.
                        Ela é uma das principais ferramentas de <strong>transparência e controle social</strong> no Brasil.
                    </p>

                    <p>
                        Ao regulamentar o acesso à informação, a LAI reforça o princípio de que a <strong>publicidade é a regra</strong> e o <strong>sigilo é a exceção</strong>, garantindo que a sociedade possa acompanhar, fiscalizar e participar
                        da gestão pública.
                    </p>

                    <ul>
                        <li>
                            Estabelece que qualquer pessoa pode solicitar informações públicas, sem precisar justificar o pedido.
                        </li>
                        <li>
                            Determina prazos para resposta dos órgãos públicos e regras para negativa de acesso.
                        </li>
                        <li>
                            Define critérios para classificação de informações como sigilosas, com prazos limitados de restrição.
                        </li>
                        <li>
                            Obriga órgãos e entidades públicas a disponibilizarem informações de interesse coletivo em seus portais de transparência.
                        </li>
                        <li>
                            Prevê sanções a agentes públicos que não cumprirem as determinações da lei.
                        </li>
                    </ul>

                    <p>
                        A LAI fortalece a <strong>cidadania ativa</strong> e a <strong>governança democrática</strong>, promovendo
                        um relacionamento mais transparente entre o Estado e a sociedade.
                    </p>
                </article>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Texto oficial</h2>
                    <p className="text-gray-700">
                        Acesse o texto completo da lei no portal da Presidência da República:
                        <br />
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/L12527.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Lei nº 12.527/2011 – Texto completo (Planalto)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Leis e decretos relacionados à transparência, integridade e governança pública:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9203.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 9.203/2017 – Política de Governança da Administração Pública Federal
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11529.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 11.529/2023 – Sistema de Integridade, Transparência e Acesso à Informação (SITAI)
                            </a>
                        </li>
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}
