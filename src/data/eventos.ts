export type EventGalleryImage = {
  src: string;
  alt: string;
};

export type EventData = {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: EventGalleryImage[];
};

export const eventos: EventData[] = [
  {
    name: "Culturais & Festivais",
    slug: "culturais-festivais",
    shortDescription:
      "Cobertura vibrante de eventos que celebram tradição, cultura e identidade.",
    description:
      "Registramos festas culturais e festivais com foco em cores, expressões e autenticidade, valorizando cada detalhe que representa a essência do evento.",
    coverImage: "/images/eventos/culturais-cover.jpg",
    gallery: [
      { src: "/images/eventos/culturais-1.jpg", alt: "Festa cultural com danças típicas" },
      { src: "/images/eventos/culturais-2.jpg", alt: "Apresentação folclórica" },
      { src: "/images/eventos/culturais-3.jpg", alt: "Decoração temática" },
      { src: "/images/eventos/culturais-4.jpg", alt: "Público em festival" },
      { src: "/images/eventos/culturais-5.jpg", alt: "Detalhes culturais" },
      { src: "/images/eventos/culturais-6.jpg", alt: "Evento tradicional brasileiro" },
    ],
  },

  {
    name: "Esportivos & Performance",
    slug: "esportivos-performance",
    shortDescription:
      "Captura precisa de ação, intensidade e momentos decisivos.",
    description:
      "Cobertura dinâmica de eventos esportivos, com foco em movimento, emoção e registros no momento exato da ação.",
    coverImage: "/images/eventos/esportivos-cover.jpg",
    gallery: [
      { src: "/images/eventos/esportivos-1.jpg", alt: "Corrida de rua" },
      { src: "/images/eventos/esportivos-2.jpg", alt: "Jogo de futebol" },
      { src: "/images/eventos/esportivos-3.jpg", alt: "Competição esportiva" },
      { src: "/images/eventos/esportivos-4.jpg", alt: "Atleta em ação" },
      { src: "/images/eventos/esportivos-5.jpg", alt: "Evento esportivo coletivo" },
      { src: "/images/eventos/esportivos-6.jpg", alt: "Momento decisivo" },
    ],
  },

  {
    name: "Corporativos & Acadêmicos",
    slug: "corporativos-academicos",
    shortDescription:
      "Cobertura profissional para eventos institucionais e educacionais.",
    description:
      "Registramos eventos corporativos e acadêmicos com foco em credibilidade, organização e fortalecimento da imagem institucional.",
    coverImage: "/images/eventos/corporativos-cover.jpg",
    gallery: [
      { src: "/images/eventos/corporativos-1.jpg", alt: "Palestra corporativa" },
      { src: "/images/eventos/corporativos-2.jpg", alt: "Evento institucional" },
      { src: "/images/eventos/corporativos-3.jpg", alt: "Formatura" },
      { src: "/images/eventos/corporativos-4.jpg", alt: "Auditório com público" },
      { src: "/images/eventos/corporativos-5.jpg", alt: "Apresentação profissional" },
      { src: "/images/eventos/corporativos-6.jpg", alt: "Evento educacional" },
    ],
  },

  {
    name: "Entretenimento & Grandes Eventos",
    slug: "entretenimento-grandes-eventos",
    shortDescription:
      "Cobertura de eventos de grande público com energia e impacto visual.",
    description:
      "Captamos a atmosfera, emoção e experiência coletiva de grandes eventos, destacando público, shows e momentos marcantes.",
    coverImage: "/images/eventos/entretenimento-cover.jpg",
    gallery: [
      { src: "/images/eventos/entretenimento-1.jpg", alt: "Show ao vivo" },
      { src: "/images/eventos/entretenimento-2.jpg", alt: "Multidão em evento" },
      { src: "/images/eventos/entretenimento-3.jpg", alt: "Palco iluminado" },
      { src: "/images/eventos/entretenimento-4.jpg", alt: "Festival noturno" },
      { src: "/images/eventos/entretenimento-5.jpg", alt: "Público animado" },
      { src: "/images/eventos/entretenimento-6.jpg", alt: "Grande evento ao ar livre" },
    ],
  },

  {
    name: "Lifestyle",
    slug: "lifestyle",
    shortDescription:
      "Registros leves e naturais de experiências e momentos especiais.",
    description:
      "Cobertura de eventos voltados ao bem-estar, lazer e conexões humanas, com foco em espontaneidade e emoção.",
    coverImage: "/images/eventos/lifestyle-cover.jpg",
    gallery: [
      { src: "/images/eventos/lifestyle-1.jpg", alt: "Evento pet" },
      { src: "/images/eventos/lifestyle-2.jpg", alt: "Passeio turístico" },
      { src: "/images/eventos/lifestyle-3.jpg", alt: "Crianças em atividade" },
      { src: "/images/eventos/lifestyle-4.jpg", alt: "Família em evento" },
      { src: "/images/eventos/lifestyle-5.jpg", alt: "Experiência ao ar livre" },
      { src: "/images/eventos/lifestyle-6.jpg", alt: "Momento espontâneo" },
    ],
  },

  {
    name: "Automobilístico & Técnicos",
    slug: "automobilistico-tecnicos",
    shortDescription:
      "Cobertura de eventos de velocidade, tecnologia e alta performance.",
    description:
      "Registramos eventos automobilísticos com foco em detalhes, potência e estética, valorizando cada momento técnico e visual.",
    coverImage: "/images/eventos/automobilistico-cover.jpg",
    gallery: [
      { src: "/images/eventos/automobilistico-1.jpg", alt: "Corrida de carros" },
      { src: "/images/eventos/automobilistico-2.jpg", alt: "Moto em alta velocidade" },
      { src: "/images/eventos/automobilistico-3.jpg", alt: "Exposição automotiva" },
      { src: "/images/eventos/automobilistico-4.jpg", alt: "Detalhe de veículo" },
      { src: "/images/eventos/automobilistico-5.jpg", alt: "Evento automotivo" },
      { src: "/images/eventos/automobilistico-6.jpg", alt: "Competição automobilística" },
    ],
  },
];
