"use client";

import { motion } from "framer-motion";

export default function DecretoFederal12122() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Decreto Federal nº 12.122, de 30 de julho de 2024
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Institui o <strong>Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação</strong>.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        O Decreto Federal nº 12.122, de 30 de julho de 2024, cria o{" "}
                        <strong>Programa Federal de Prevenção e Enfrentamento do Assédio e da Discriminação</strong>,
                        com o objetivo de promover ambientes de trabalho e convivência mais saudáveis, seguros e inclusivos
                        na Administração Pública Federal.
                    </p>

                    <p>
                        O programa foi instituído para fortalecer as ações de prevenção, acolhimento, responsabilização e
                        enfrentamento de práticas de <strong>assédio moral, assédio sexual</strong> e de qualquer forma de{" "}
                        <strong>discriminação</strong> no serviço público federal.
                    </p>

                    <ul>
                        <li>
                            Estabelece diretrizes para prevenir e combater o assédio e a discriminação em órgãos e entidades públicas federais.
                        </li>
                        <li>
                            Determina a criação de comissões especializadas e capacitação de servidores para lidar com denúncias e acolhimento de vítimas.
                        </li>
                        <li>
                            Promove a valorização da diversidade, equidade e respeito nas relações institucionais e de trabalho.
                        </li>
                        <li>
                            Estimula campanhas educativas e a implementação de políticas internas de prevenção e enfrentamento.
                        </li>
                    </ul>

                    <p>
                        O decreto reforça o compromisso do governo federal com a construção de um serviço público livre de violência,
                        discriminação e qualquer forma de opressão, garantindo o respeito à dignidade humana e aos direitos fundamentais.
                    </p>
                </article>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Texto oficial</h2>
                    <p className="text-gray-700">
                        Acesse o decreto completo no portal da Presidência da República:
                        <br />
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/decreto/D12122.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Decreto nº 12.122/2024 – Texto completo (Planalto)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Decretos e normas complementares sobre integridade, ética e conduta no serviço público:
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
                                href="https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Decreto nº 1.171/1994 – Código de Ética Profissional do Servidor Público Civil
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
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}
