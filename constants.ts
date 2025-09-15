import type { TimelineStep, Partner, CorreiosPreset } from './types';

export const TIMELINE_STEPS: TimelineStep[] = [
  { step: 1, icon: '📱', title: 'Baixe o App', description: 'Disponível para iOS e Android' },
  { step: 2, icon: '👤', title: 'Cadastro Rápido', description: 'E-mail, telefone ou redes sociais' },
  { step: 3, icon: '📦', title: 'Dados do Produto', description: 'Insira as dimensões e peso' },
  { step: 4, icon: '📍', title: 'Localização', description: 'Correios mais próximo' },
  { step: 5, icon: '🚗', title: 'Veículo Ideal', description: 'IA escolhe o melhor transporte' },
  { step: 6, icon: '💰', title: 'Cotação Instantânea', description: 'Preço transparente e justo' },
  { step: 7, icon: '✅', title: 'Confirmação', description: 'Aceite com um toque' },
  { step: 8, icon: '💳', title: 'Pagamento Seguro', description: 'PIX, cartão, ou dinheiro' },
  { step: 9, icon: '🚀', title: 'Acionamento', description: 'Entregador notificado' },
  { step: 10, icon: '🗺️', title: 'Rastreamento', description: 'Tempo real no mapa' },
  { step: 11, icon: '📸', title: 'Comprovante Digital', description: 'Foto automática do recibo' },
  { step: 12, icon: '📧', title: 'Envio Automático', description: 'E-mail e WhatsApp' },
  { step: 13, icon: '⭐', title: 'Avaliação', description: 'Feedback do serviço' },
  { step: 14, icon: '👨‍💼', title: 'Gestão Total', description: 'Controle administrativo' },
];

export const PRODUCT_CATEGORIES: string[] = [
    'Acessórios de informática',
    'Alimentos e Suplementos',
    'Brinquedos e jogos',
    'Calçados',
    'Cartas ou contratos e certidões',
    'Cosméticos e perfumes',
    'Eletrônicos',
    'Itens de papelaria',
    'Jóias',
    'Livros e revistas',
    'Peças pequenas para automóveis e motos',
    'Roupas',
    'Outros',
];

export const PARTNERS: Partner[] = [
    { name: "ACE Startups", logo: "https://i.imgur.com/uBh6N6m.png", website: "https://acestartups.com.br/", phone: "(11) 3521-5544", description: "Uma das maiores aceleradoras de startups da América Latina, focada em escalar negócios inovadores." },
    { name: "Bossanova Investimentos", logo: "https://i.imgur.com/2sY1s7E.png", website: "https://www.bossainvest.com/", phone: "N/A", description: "O mais ativo Venture Capital da América Latina, investindo em startups em estágio pré-seed e seed." },
    { name: "Anjos do Brasil", logo: "https://i.imgur.com/w1c9v6d.png", website: "https://www.anjosdobrasil.net/", phone: "N/A", description: "Organização sem fins lucrativos que visa fomentar o investimento anjo para apoiar o empreendedorismo brasileiro." },
    { name: "Darwin Startups", logo: "https://i.imgur.com/K9b5R2E.png", website: "https://darwinstartups.com/", phone: "(48) 3222-1768", description: "Aceleradora de startups que investe em empresas de base tecnológica, oferecendo capital e mentoria." }
];

export const CORREIOS_PRESETS: CorreiosPreset[] = [
    { id: 'env', name: 'Envelope (Até 1kg)', dimensions: 'Máx: 33x23cm', weight: '1kg', price: 12.50, h: 1, w: 23, l: 33, kg: 1 },
    { id: 'pac-p', name: 'Caixa PAC Pequena', dimensions: '18x13.5x9cm', weight: 'Até 2kg', price: 25.80, h: 9, w: 13.5, l: 18, kg: 2 },
    { id: 'pac-m', name: 'Caixa PAC Média', dimensions: '27x18x13.5cm', weight: 'Até 5kg', price: 38.40, h: 13.5, w: 18, l: 27, kg: 5 },
    { id: 'sedex-g', name: 'Caixa SEDEX Grande', dimensions: '36x27x18cm', weight: 'Até 10kg', price: 55.20, h: 18, w: 27, l: 36, kg: 10 },
];
