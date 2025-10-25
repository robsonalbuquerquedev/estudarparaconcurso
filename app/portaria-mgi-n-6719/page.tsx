"use client";

import { motion } from "framer-motion";

export default function PortariaMGI6719() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Portaria MGI nº 6.719, de 13 de setembro de 2024
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Institui o <strong>Plano Federal de Prevenção e Enfrentamento do Assédio e da Discriminação</strong> na Administração Pública Federal Direta, suas Autarquias e Fundações.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        A <strong>Portaria MGI nº 6.719/2024</strong>, editada pelo <strong>Ministério da Gestão e da Inovação em Serviços Públicos (MGI)</strong>, estabelece o{" "}
                        <strong>Plano Federal de Prevenção e Enfrentamento do Assédio e da Discriminação</strong>,
                        com o objetivo de concretizar as ações previstas no <strong>Decreto nº 12.122/2024</strong>.
                    </p>

                    <p>
                        O plano tem caráter transversal e busca criar uma cultura institucional baseada no respeito, na diversidade e na segurança psicológica,
                        prevenindo e combatendo práticas de assédio moral, assédio sexual e discriminação em todas as suas formas.
                    </p>

                    <ul>
                        <li>
                            Define diretrizes, metas e responsabilidades para a implementação de ações de prevenção, acolhimento e responsabilização.
                        </li>
                        <li>
                            Determina que cada órgão e entidade da administração pública elabore seu próprio <strong>Plano Setorial</strong> de prevenção e enfrentamento.
                        </li>
                        <li>
                            Prevê a criação de <strong>Comitês de Prevenção e Enfrentamento do Assédio e da Discriminação</strong> em cada instituição.
                        </li>
                        <li>
                            Estabelece mecanismos de capacitação, comunicação institucional e monitoramento das ações implementadas.
                        </li>
                    </ul>

                    <p>
                        A Portaria representa um passo importante para garantir ambientes de trabalho <strong>seguros, respeitosos e inclusivos</strong>,
                        fortalecendo o compromisso da Administração Pública Federal com os direitos humanos e a dignidade de todas as pessoas.
                    </p>
                </article>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Normas relacionadas à ética, integridade e enfrentamento do assédio na administração pública:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/D12122.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 12.122/2024 – Institui o Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 1.171/1994 – Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal
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
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}
