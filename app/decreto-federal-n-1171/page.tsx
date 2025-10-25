"use client";

import { motion } from "framer-motion";

export default function DecretoFederal1171() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Decreto Federal nº 1.171, de 22 de junho de 1994
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Aprova o <strong>Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal</strong>.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        O Decreto Federal nº 1.171, de 22 de junho de 1994, institui o{" "}
                        <strong>Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal</strong>,
                        com o objetivo de orientar a conduta dos servidores públicos em todas as suas atividades funcionais,
                        reforçando valores como honestidade, respeito, responsabilidade, justiça e compromisso com o bem comum.
                    </p>

                    <p>
                        O Código de Ética define princípios e normas de comportamento esperadas dos servidores públicos federais,
                        buscando promover uma administração pública mais íntegra e transparente, fortalecendo a confiança da sociedade
                        nas instituições governamentais.
                    </p>

                    <ul>
                        <li>
                            Define deveres fundamentais do servidor, como o zelo pelo interesse público, a cortesia e a imparcialidade.
                        </li>
                        <li>
                            Estabelece proibições, como o uso do cargo para obtenção de vantagens pessoais ou favorecimento indevido.
                        </li>
                        <li>
                            Cria a <strong>Comissão de Ética Pública</strong>, responsável por orientar e aconselhar sobre a conduta ética
                            dos servidores no âmbito do Poder Executivo Federal.
                        </li>
                        <li>
                            Determina que todos os órgãos e entidades da administração pública instituam suas próprias comissões de ética.
                        </li>
                    </ul>

                    <p>
                        O Decreto nº 1.171/1994 é considerado um marco na institucionalização da ética pública no Brasil,
                        servindo como referência para a elaboração de códigos de conduta em diversas esferas da administração.
                    </p>
                </article>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Texto oficial</h2>
                    <p className="text-gray-700">
                        Acesse o decreto completo no portal da Presidência da República:
                        <br />
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Decreto nº 1.171/1994 – Texto completo (Planalto)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Outros decretos e normas relacionadas à ética e integridade na administração pública:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11529.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 11.529/2023 – Institui o Sistema de Integridade, Transparência e Acesso à Informação (SITAI)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/decreto/d6029.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 6.029/2007 – Institui o Sistema de Gestão da Ética do Poder Executivo Federal
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.planalto.gov.br/ccivil_03/decreto/d9203.htm"
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
