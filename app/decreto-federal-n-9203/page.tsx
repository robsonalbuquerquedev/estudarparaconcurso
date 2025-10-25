"use client";

import { motion } from "framer-motion";

export default function DecretoFederal9203() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Decreto Federal nº 9.203, de 22 de novembro de 2017
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Dispõe sobre a <strong>Política de Governança da Administração Pública Federal direta, autárquica e fundacional</strong>.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        O Decreto Federal nº 9.203, de 22 de novembro de 2017, estabelece as diretrizes para a implementação da{" "}
                        <strong>Política de Governança da Administração Pública Federal</strong>, com o objetivo de aprimorar
                        a tomada de decisão, a transparência e a prestação de contas no âmbito do governo federal.
                    </p>

                    <p>
                        Essa política busca garantir que os órgãos e entidades públicas atuem de forma integrada, eficiente e responsável,
                        assegurando que as ações do Estado estejam alinhadas aos princípios da boa governança e à entrega de valor à sociedade.
                    </p>

                    <ul>
                        <li>
                            Define princípios fundamentais como <strong>integridade, transparência, responsabilidade e accountability</strong>.
                        </li>
                        <li>
                            Estabelece diretrizes para a estruturação de comitês de governança nos órgãos públicos federais.
                        </li>
                        <li>
                            Incentiva a adoção de práticas de gestão de riscos e de controles internos eficientes.
                        </li>
                        <li>
                            Promove o uso de evidências, dados e indicadores para orientar decisões e políticas públicas.
                        </li>
                    </ul>

                    <p>
                        O Decreto nº 9.203/2017 é um marco na consolidação de uma administração pública mais moderna,
                        ética e orientada a resultados, reforçando o compromisso do Estado com o interesse público e
                        com o fortalecimento da confiança da sociedade nas instituições.
                    </p>
                </article>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Texto oficial</h2>
                    <p className="text-gray-700">
                        Acesse o decreto completo no portal da Presidência da República:
                        <br />
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9203.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Decreto nº 9.203/2017 – Texto completo (Planalto)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Decretos e normas relacionadas à integridade, ética e governança na Administração Pública Federal:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside">
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
                                href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11529.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 11.529/2023 – Institui o Sistema de Integridade, Transparência e Acesso à Informação (SITAI)
                            </a>
                        </li>
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}
