"use client";

import { motion } from "framer-motion";

export default function DecretoFederal11529() {
    return (
        <section className="p-6 md:p-10 bg-gray-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Decreto Federal nº 11.529, de 16 de maio de 2023
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Institui o <strong>Sistema de Integridade, Transparência e Acesso à Informação da Administração Pública Federal</strong> e define a <strong>Política de Transparência e Acesso à Informação da Administração Pública Federal</strong>.
                </p>

                <article className="prose prose-gray mb-6">
                    <p>
                        O Decreto Federal nº 11.529, publicado em 16 de maio de 2023, estabelece diretrizes para o fortalecimento da integridade, transparência e acesso à informação na Administração Pública Federal.
                    </p>

                    <p>
                        Entre suas principais disposições, o decreto:
                    </p>

                    <ul>
                        <li>
                            Cria o <strong>Sistema de Integridade, Transparência e Acesso à Informação (SITAI)</strong> – uma estrutura integrada para coordenar políticas de integridade pública.
                        </li>
                        <li>
                            Define responsabilidades dos órgãos e entidades federais quanto à divulgação de informações e à prevenção de irregularidades.
                        </li>
                        <li>
                            Estabelece mecanismos de monitoramento e avaliação da transparência pública.
                        </li>
                        <li>
                            Fortalece a aplicação da Lei nº 12.527/2011 (Lei de Acesso à Informação) no âmbito federal.
                        </li>
                    </ul>

                    <p>
                        Essa política reforça o compromisso do governo federal com a ética, a eficiência e a participação cidadã, alinhando-se a princípios internacionais de governança aberta e integridade pública.
                    </p>
                </article>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Texto oficial</h2>
                    <p className="text-gray-700">
                        Acesse o decreto completo no portal da presidência da república:
                        <br />
                        <a
                            href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11529.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Decreto nº 11.529/2023 – Texto completo (Planalto)
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Saiba Mais</h2>
                    <p className="text-gray-700 mb-2">
                        Outros decretos que podem interessar:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside">
                        <li>
                            <a href="https://www.gov.br/mdh/pt-br/acesso-a-informacao/governanca/programa-de-integridade/legislacao/decretos" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                Decreto nº 9.203, de 22 de novembro de 2017 – Política de Governança da Administração Pública Federal.
                            </a>
                        </li>
                        <li>
                            <a href="https://www.gov.br/mdh/pt-br/acesso-a-informacao/governanca/programa-de-integridade/legislacao/decretos" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                Decreto nº 6.029, de 1º de fevereiro de 2007 – Institui o Sistema de Gestão da Ética no Poder Executivo Federal.
                            </a>
                        </li>
                    </ul>
                </section>
            </motion.div>
        </section>
    );
}
