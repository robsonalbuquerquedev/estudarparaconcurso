"use client";

import { motion } from "framer-motion";

export default function LeiFederal13709() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Lei Federal nº 13.709, de 14 de agosto de 2018
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Dispõe sobre a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>, que regula o tratamento de dados pessoais
                    e garante a <strong>privacidade</strong> e a <strong>segurança das informações</strong>.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        A <strong>Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>, instituída pela Lei Federal nº 13.709/2018, estabelece regras
                        claras sobre como dados pessoais podem ser coletados, processados, armazenados e compartilhados no Brasil.
                        Seu principal objetivo é <strong>proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade</strong> da pessoa natural.
                    </p>

                    <p>
                        A LGPD aplica-se tanto a pessoas físicas quanto jurídicas, públicas ou privadas, que realizem tratamento de dados pessoais
                        em território nacional ou em operações que visem oferecer bens ou serviços a indivíduos no Brasil.
                    </p>

                    <ul>
                        <li>
                            Define princípios como finalidade, necessidade, transparência, segurança e responsabilização no tratamento de dados.
                        </li>
                        <li>
                            Exige o <strong>consentimento explícito</strong> do titular para o uso de seus dados, salvo exceções previstas em lei.
                        </li>
                        <li>
                            Garante aos cidadãos direitos como acesso, correção, exclusão e portabilidade de seus dados pessoais.
                        </li>
                        <li>
                            Cria a <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>, responsável por fiscalizar e aplicar sanções.
                        </li>
                        <li>
                            Prevê sanções administrativas em caso de descumprimento, que vão de advertências a multas de até 2% do faturamento da empresa.
                        </li>
                    </ul>

                    <p>
                        A LGPD representa um avanço significativo na cultura de proteção de dados no Brasil, alinhando o país a padrões internacionais,
                        como o Regulamento Geral de Proteção de Dados da União Europeia (GDPR).
                    </p>
                </article>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Texto oficial</h2>
                    <p className="text-gray-700">
                        Acesse o texto completo da lei no portal da Presidência da República:
                        <br />
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Lei nº 13.709/2018 – Texto completo (Planalto)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Outras leis e decretos relacionados à privacidade, transparência e governança digital:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/L12527.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Lei nº 12.527/2011 – Lei de Acesso à Informação (LAI)
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
