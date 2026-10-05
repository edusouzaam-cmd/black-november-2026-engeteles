export type LegalSection = { id: string; title: string; paragraphs: string[] };
export type LegalDocument = { title: string; introduction: string; sections: LegalSection[] };
export const legalDocuments: Record<"terms" | "privacy", LegalDocument> = {
  "terms": {
    "title": "Termos de Uso",
    "introduction": "Conheça as condições de navegação, contratação e uso dos cursos e do livro da Black November Engeteles.",
    "sections": [
      {
        "id": "quem-somos",
        "title": "1. Quem somos e como falar conosco",
        "paragraphs": [
          "Este site apresenta a campanha Black November 2026 da ENGETELES Capacitação Profissional e Consultoria LTDA, CNPJ 23.607.144/0001-06, em Brasília/DF, dedicada à capacitação profissional e à gestão da manutenção.",
          "Dúvidas sobre a oferta, acesso, entrega, cancelamento ou estes Termos podem ser encaminhadas para contato@engeteles.com.br. Informe seu nome e, quando houver, o número do pedido. Não envie senhas ou dados completos do cartão."
        ]
      },
      {
        "id": "abrangencia",
        "title": "2. Abrangência e condições da contratação",
        "paragraphs": [
          "Estes Termos regulam a navegação neste site e as condições gerais da oferta. A contratação também considera a descrição do produto, as condições comerciais exibidas antes do pagamento e as regras aplicáveis da plataforma de compra e de estudos.",
          "As condições específicas informadas na contratação complementam estes Termos, preservados os direitos previstos em lei e a oferta efetivamente aceita. A Política de Privacidade explica o tratamento de dados; sua leitura não equivale a consentimento geral para publicidade."
        ]
      },
      {
        "id": "entregaveis",
        "title": "3. Cursos e livro da Black November",
        "paragraphs": [
          "O combo apresentado reúne PCM Descomplicado — Planejamento e Controle da Manutenção, RCM PRO — Manutenção Centrada na Confiabilidade e GFM — Gestão Financeira da Manutenção. O livro físico PCM Descomplicado — 4ª edição (2026) é apresentado como brinde.",
          "Aulas, módulos, materiais de apoio, certificados e demais benefícios são aqueles descritos na oferta adquirida. A entrega não inclui consultoria individual, implantação de projetos ou serviços presenciais, salvo quando expressamente incluídos.",
          "A campanha está prevista para 1º a 30 de novembro de 2026, no horário de Brasília. Preço, parcelamento, prazo de acesso, liberação, envio, frete e eventuais limites devem estar informados antes da conclusão da compra. A navegação ou o contador, isoladamente, não reservam uma vaga nem concluem uma contratação."
        ]
      },
      {
        "id": "compra",
        "title": "4. Compra, pagamento e confirmação",
        "paragraphs": [
          "A compra ocorre pelo checkout indicado na campanha quando disponível. Confira o valor total, encargos, parcelas, descrição dos produtos e dados do fornecedor antes de pagar. Uma contratação somente deve ser concluída com as condições essenciais apresentadas de forma clara.",
          "O processamento e a aprovação do pagamento seguem os procedimentos da plataforma utilizada. Não envie informações de pagamento por e-mail ou redes sociais. Guarde o comprovante e a confirmação do pedido.",
          "Estas condições não instituem assinatura ou renovação automática. Eventual produto recorrente depende de informação expressa e contratação específica."
        ]
      },
      {
        "id": "acesso",
        "title": "5. Cadastro, acesso e certificados",
        "paragraphs": [
          "Forneça dados corretos e mantenha o e-mail de cadastro atualizado para receber instruções de acesso. A liberação e a duração do acesso seguem o que foi informado na oferta aceita, sem presunção de acesso vitalício.",
          "As credenciais são pessoais. Proteja sua senha, não compartilhe sua conta e comunique suspeitas de uso indevido ao suporte. Contratações por empresas devem observar a quantidade de acessos adquirida.",
          "É necessário dispor de conexão e dispositivo compatíveis com a plataforma de estudos. Certificados dependem do cumprimento dos requisitos informados em cada curso. A capacitação não garante emprego, promoção, resultado financeiro ou habilitação profissional regulamentada."
        ]
      },
      {
        "id": "livro",
        "title": "6. Entrega do livro físico",
        "paragraphs": [
          "O envio do brinde depende dos dados de entrega e das condições informadas na compra. Confira destinatário, endereço, CEP, prazo estimado, regiões atendidas e frete antes da confirmação.",
          "Problemas de entrega, avaria, extravio ou divergência do exemplar devem ser comunicados ao suporte com o número do pedido e uma descrição do ocorrido. O atendimento observará a oferta e os direitos do consumidor; custos de reenvio não serão atribuídos automaticamente ao comprador."
        ]
      },
      {
        "id": "cancelamento",
        "title": "7. Arrependimento, cancelamento e reembolso",
        "paragraphs": [
          "Nas contratações realizadas fora do estabelecimento comercial, o consumidor pode exercer o direito de arrependimento no prazo legal de 7 dias, contado da assinatura ou do recebimento do produto ou serviço, conforme o caso e o artigo 49 do Código de Defesa do Consumidor.",
          "Solicite o cancelamento pelo suporte oficial ou pelos canais da plataforma de compra, identificando o pedido. O exercício do arrependimento não depende de justificativa nem é afastado pelo início do acesso ao conteúdo.",
          "A restituição dos valores e a devolução de eventual livro recebido observarão a legislação, sem ônus indevido ao consumidor. Garantias adicionais expressamente oferecidas também serão respeitadas. Prazos operacionais do meio de pagamento serão informados no atendimento, sem limitar os direitos legais.",
          "Defeitos, descumprimento da oferta e outros problemas permanecem sujeitos aos direitos e prazos aplicáveis, independentemente do período de arrependimento."
        ]
      },
      {
        "id": "uso",
        "title": "8. Uso adequado e propriedade intelectual",
        "paragraphs": [
          "A marca, as aulas, os textos, os livros, as imagens e os materiais pertencem à Engeteles ou aos respectivos titulares. O acesso autoriza o uso pessoal para estudo nos limites da contratação.",
          "Não é permitido revender acessos, distribuir cópias não autorizadas, reproduzir aulas para terceiros, remover créditos de autoria, tentar invadir sistemas ou usar o serviço para atividades ilícitas. São preservadas as utilizações permitidas pela legislação.",
          "Indícios de abuso poderão ser apurados e resultar em medidas proporcionais, com informação ao usuário e possibilidade de esclarecimento, respeitados a legislação e os direitos da contratação."
        ]
      },
      {
        "id": "responsabilidades",
        "title": "9. Disponibilidade e responsabilidades",
        "paragraphs": [
          "A aplicação do conteúdo técnico exige avaliação das condições reais dos ativos e das normas de segurança pertinentes. Exemplos educacionais não substituem análise técnica específica de cada operação.",
          "Manutenções ou falhas técnicas podem afetar temporariamente a navegação e o acesso. Ocorrências devem ser comunicadas ao suporte para orientação e solução. Estas disposições não excluem a responsabilidade legal da Engeteles por falhas na prestação do serviço.",
          "Links para redes sociais, checkout ou outras plataformas levam a ambientes com regras próprias. Consulte seus documentos, sem prejuízo das responsabilidades da Engeteles na relação de consumo."
        ]
      },
      {
        "id": "alteracoes",
        "title": "10. Atualizações, legislação e solução de dúvidas",
        "paragraphs": [
          "Esta versão foi atualizada em 5 de outubro de 2026. Alterações futuras serão identificadas pela data de atualização e não reduzirão retroativamente direitos de contratações já realizadas.",
          "Aplicam-se as leis brasileiras, especialmente o Código de Defesa do Consumidor e a LGPD. O atendimento oficial está disponível para buscar uma solução, sem impedir o acesso aos órgãos de defesa do consumidor ou ao Judiciário competente, inclusive no domicílio do consumidor quando aplicável."
        ]
      }
    ]
  },
  "privacy": {
    "title": "Política de Privacidade",
    "introduction": "Entenda quais dados estão envolvidos em cada interação e como exercer seus direitos.",
    "sections": [
      {
        "id": "controlador",
        "title": "1. Responsável e abrangência",
        "paragraphs": [
          "A ENGETELES Capacitação Profissional e Consultoria LTDA, CNPJ 23.607.144/0001-06, em Brasília/DF, é responsável pelo tratamento de dados realizado sob sua gestão na divulgação e entrega dos cursos e do livro da campanha.",
          "Esta Política explica os dados relacionados à navegação, ao atendimento, à compra, aos estudos e à entrega. Plataformas externas podem realizar tratamentos próprios, descritos em suas políticas. Solicitações de privacidade podem ser enviadas a contato@engeteles.com.br, com o assunto Privacidade."
        ]
      },
      {
        "id": "dados",
        "title": "2. Dados envolvidos em cada interação",
        "paragraphs": [
          "Navegação: o acesso a um site envolve dados técnicos, como endereço IP, horário, navegador e recurso solicitado, tratados pela infraestrutura que entrega a página. Esta página utiliza recursos externos, como fontes e imagens; ao carregá-los, o navegador estabelece conexão com os respectivos servidores.",
          "Atendimento: quando você entra em contato, podem ser tratados nome, e-mail, telefone, mensagens e dados do pedido necessários à resposta. Não envie documentos ou dados sensíveis sem necessidade.",
          "Compra e entrega: quando você contrata a oferta, os canais envolvidos podem solicitar identificação, CPF ou CNPJ, contato, dados de faturamento, endereço de entrega e informações do pedido. Dados financeiros são fornecidos no ambiente do processador de pagamento; esta landing page não possui campo para cartão.",
          "Estudos: na plataforma utilizada para os cursos, cadastro, acessos, progresso, avaliações e dados de certificação podem ser necessários à entrega da formação. Os campos e procedimentos efetivos são apresentados nesse ambiente.",
          "Esta landing page não disponibiliza formulário de cadastro. Abrir um link de rede social ou compra leva a outro serviço; os dados solicitados naquele ambiente devem ser conferidos antes do envio."
        ]
      },
      {
        "id": "finalidades",
        "title": "3. Finalidades e bases legais",
        "paragraphs": [
          "Atender solicitações e executar a contratação: informações de contato, pedido, entrega e estudos podem ser necessárias a procedimentos preliminares solicitados por você e à execução do contrato.",
          "Cumprir obrigações legais: dados fiscais, registros e informações requeridas por autoridades são tratados quando houver obrigação legal ou regulatória. A defesa em processos pode exigir tratamento para o exercício regular de direitos.",
          "Segurança e operação: dados técnicos podem ser necessários para prevenir abusos e manter o funcionamento do serviço. Eventual uso com base em legítimo interesse deve considerar necessidade, proporcionalidade e os direitos do titular.",
          "Comunicações promocionais e tecnologias opcionais, quando utilizadas, devem observar a base legal adequada e os controles aplicáveis. Quando dependerem de consentimento, ele deve ser específico, livre e revogável. A mera visita ou leitura desta Política não autoriza todos os usos de dados."
        ]
      },
      {
        "id": "cookies",
        "title": "4. Cookies, métricas e preferências",
        "paragraphs": [
          "Cookies são pequenos arquivos que podem guardar informações no navegador. Tecnologias essenciais servem ao funcionamento de um serviço; tecnologias opcionais podem apoiar métricas ou publicidade.",
          "Na versão atual do código da campanha, os identificadores do Google Tag Manager e do Meta Pixel estão vazios. Eventos de visualização e clique são registrados em uma estrutura local da página (dataLayer); esse registro, por si só, não envia os eventos a essas ferramentas.",
          "Uma eventual ativação de medição ou publicidade deve ser acompanhada de informação sobre os provedores, as finalidades e os controles necessários, incluindo consentimento quando aplicável. Este documento não substitui a implementação desses controles.",
          "Você pode gerenciar cookies nas configurações do navegador. Em plataformas externas, consulte também os controles oferecidos pelo próprio serviço."
        ]
      },
      {
        "id": "compartilhamento",
        "title": "5. Compartilhamento e ambientes externos",
        "paragraphs": [
          "Na execução da contratação, os dados necessários podem ser disponibilizados aos prestadores envolvidos em pagamento, hospedagem, plataforma de estudos, atendimento, emissão fiscal e transporte do livro, conforme a atividade efetivamente utilizada.",
          "O compartilhamento deve se limitar à finalidade e aos dados necessários, observando as obrigações de proteção. Também pode ocorrer para cumprir determinação legal ou exercer direitos.",
          "Instagram, LinkedIn e outros destinos externos possuem tratamentos próprios. Recursos externos da página também recebem os dados técnicos necessários ao carregamento. Consulte as políticas desses serviços.",
          "Caso um serviço utilizado envolva armazenamento ou acesso fora do Brasil, o tratamento deverá observar os mecanismos e as garantias de transferência internacional aplicáveis pela LGPD. Informações sobre os prestadores e transferências efetivamente envolvidos podem ser solicitadas ao canal de privacidade."
        ]
      },
      {
        "id": "retencao",
        "title": "6. Conservação e eliminação",
        "paragraphs": [
          "Os dados devem ser conservados pelo período necessário às finalidades que justificaram o tratamento, considerando a duração da contratação, o atendimento e as obrigações legais aplicáveis.",
          "Registros fiscais, contratuais ou necessários à defesa de direitos podem exigir conservação após o encerramento da relação. Não existe nesta Política um prazo único para todas as categorias de dados.",
          "Quando não houver finalidade ou fundamento para a conservação, os dados devem ser eliminados ou anonimizados, observadas as hipóteses legais de retenção. A exclusão de uma conta não implica eliminação imediata de todos os registros legalmente necessários."
        ]
      },
      {
        "id": "direitos",
        "title": "7. Seus direitos e como exercê-los",
        "paragraphs": [
          "Nos termos da LGPD, você pode solicitar confirmação e acesso ao tratamento; correção de dados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou irregulares; portabilidade conforme a regulamentação; e informações sobre compartilhamento.",
          "Também pode solicitar eliminação dos dados tratados com consentimento, observadas as exceções legais; conhecer as consequências de não consentir; revogar consentimento; opor-se ao tratamento nas hipóteses legais; e solicitar revisão de decisões exclusivamente automatizadas que afetem seus interesses, quando houver.",
          "Envie sua solicitação a contato@engeteles.com.br. Para proteger você, poderão ser necessárias informações mínimas para confirmar a identidade e localizar os registros. A resposta observará os prazos legais e explicará eventuais limites ou obrigações de conservação.",
          "Você pode procurar a Autoridade Nacional de Proteção de Dados e os órgãos de defesa do consumidor. O uso do canal de atendimento não restringe esse direito."
        ]
      },
      {
        "id": "comunicacoes",
        "title": "8. Comunicações e menores de idade",
        "paragraphs": [
          "Mensagens operacionais sobre compra, acesso, suporte ou entrega são distintas de publicidade. Para deixar de receber comunicações promocionais, utilize o descadastramento disponível na mensagem ou solicite pelo atendimento.",
          "Os cursos são voltados à capacitação profissional. Quando houver dados de crianças ou adolescentes, o tratamento deverá observar seu melhor interesse e as exigências legais aplicáveis, com participação do responsável quando necessária. Não encaminhe dados de menores sem necessidade para o serviço."
        ]
      },
      {
        "id": "seguranca",
        "title": "9. Segurança e cuidados",
        "paragraphs": [
          "O tratamento de dados exige medidas técnicas e administrativas proporcionais ao risco para prevenir acesso indevido, perda e uso irregular. Nenhum ambiente digital permite prometer segurança absoluta.",
          "Use senhas exclusivas, proteja as credenciais da plataforma de estudos e confirme os canais antes de compartilhar informações. Suspeitas de incidente podem ser comunicadas ao atendimento; incidentes sujeitos a comunicação serão tratados conforme a legislação aplicável."
        ]
      },
      {
        "id": "atualizacoes",
        "title": "10. Atualizações e contato",
        "paragraphs": [
          "Última atualização: 5 de outubro de 2026. Esta Política deve acompanhar mudanças nos dados, provedores e finalidades efetivamente utilizados. Alterações relevantes serão informadas pelos canais apropriados, com obtenção de novo consentimento quando exigido.",
          "Para dúvidas, exercício de direitos ou esclarecimentos sobre o tratamento, escreva para contato@engeteles.com.br. A leitura desta Política fornece informação e não representa renúncia aos seus direitos."
        ]
      }
    ]
  }
};
