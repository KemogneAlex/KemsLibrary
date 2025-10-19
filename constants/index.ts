export const navigationLinks = [
  {
    href: '/library',
    label: 'Bibliothèque',
  },

  {
    img: '/icons/user.svg',
    selectedImg: '/icons/user-fill.svg',
    href: '/my-profile',
    label: 'Mon Profil',
  },
];

export const adminSideBarLinks = [
  {
    img: '/icons/admin/home.svg',
    route: '/admin',
    text: 'Accueil',
  },
  {
    img: '/icons/admin/users.svg',
    route: '/admin/users',
    text: 'Tous les Utilisateurs',
  },
  {
    img: '/icons/admin/book.svg',
    route: '/admin/books',
    text: 'Tous les Livres',
  },
  {
    img: '/icons/admin/bookmark.svg',
    route: '/admin/book-requests',
    text: "Demandes d'Emprunt",
  },
  {
    img: '/icons/admin/user.svg',
    route: '/admin/account-requests',
    text: 'Demandes de Compte',
  },
];

export const FIELD_NAMES = {
  fullName: 'Nom complet',
  email: 'Email',
  universityId: "Numéro d'identifiant universitaire",
  password: 'Mot de passe',
  universityCard: 'Téléverser la carte universitaire',
};

export const FIELD_TYPES = {
  fullName: 'text',
  email: 'email',
  universityId: 'number',
  password: 'password',
};

export const sampleBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fantasy / Fiction',
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      "Un roman éblouissant sur tous les choix qui mènent à une vie bien vécue. La Bibliothèque de Minuit raconte l'histoire de Nora Seed qui se retrouve entre la vie et la mort.",
    color: '#1c1f40',
    cover: 'https://m.media-amazon.com/images/I/81J6APjwxlL.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Un roman éblouissant sur tous les choix qui mènent à une vie bien vécue. La Bibliothèque de Minuit raconte l'histoire de Nora Seed qui se retrouve entre la vie et la mort. Un roman éblouissant sur tous les choix qui mènent à une vie bien vécue. La Bibliothèque de Minuit raconte l'histoire de Nora Seed qui se retrouve entre la vie et la mort.",
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Développement Personnel / Productivité',
    rating: 4.9,
    total_copies: 99,
    available_copies: 50,
    description:
      "Un guide révolutionnaire pour créer de bonnes habitudes, éliminer les mauvaises et s'améliorer de 1% chaque jour.",
    color: '#fffdf6',
    cover: 'https://m.media-amazon.com/images/I/81F90H7hnML.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Un guide révolutionnaire pour créer de bonnes habitudes, éliminer les mauvaises et s'améliorer de 1% chaque jour.",
  },
  {
    id: 3,
    title: "You Don't Know JS: Scope & Closures",
    author: 'Kyle Simpson',
    genre: 'Informatique / JavaScript',
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      'Un guide essentiel pour comprendre les mécanismes de base de JavaScript, en se concentrant sur la portée et les closures.',
    color: '#f8e036',
    cover:
      'https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Un guide essentiel pour comprendre les mécanismes de base de JavaScript, en se concentrant sur la portée et les closures.',
  },
  {
    id: 4,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Philosophie / Aventure',
    rating: 4.5,
    total_copies: 78,
    available_copies: 50,
    description:
      'Un conte magique sur Santiago, un jeune berger andalou, qui se lance dans un voyage pour trouver un trésor terrestre.',
    color: '#ed6322',
    cover:
      'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Un conte magique sur Santiago, un jeune berger andalou, qui se lance dans un voyage pour trouver un trésor terrestre.',
  },
  {
    id: 5,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Développement Personnel / Productivité',
    rating: 4.7,
    total_copies: 23,
    available_copies: 23,
    description:
      'Règles pour réussir dans un monde distrait, enseignant comment cultiver une concentration profonde pour atteindre une productivité maximale.',
    color: '#ffffff',
    cover: 'https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Règles pour réussir dans un monde distrait, enseignant comment cultiver une concentration profonde pour atteindre une productivité maximale.',
  },
  {
    id: 6,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Informatique / Programmation',
    rating: 4.8,
    total_copies: 56,
    available_copies: 56,
    description:
      "Un manuel d'artisanat logiciel agile, offrant les meilleures pratiques et principes pour écrire un code propre et maintenable.",
    color: '#080c0d',
    cover:
      'https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Un manuel d'artisanat logiciel agile, offrant les meilleures pratiques et principes pour écrire un code propre et maintenable.",
  },
  {
    id: 7,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    genre: 'Informatique / Programmation',
    rating: 4.8,
    total_copies: 25,
    available_copies: 3,
    description:
      'Un guide intemporel pour les développeurs pour affiner leurs compétences et améliorer leurs pratiques de programmation.',
    color: '#100f15',
    cover:
      'https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Un guide intemporel pour les développeurs pour affiner leurs compétences et améliorer leurs pratiques de programmation.',
  },
  {
    id: 8,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Finance / Développement Personnel',
    rating: 4.8,
    total_copies: 10,
    available_copies: 5,
    description:
      "Morgan Housel explore les comportements et états d'esprit uniques qui façonnent le succès et la prise de décision financière.",
    color: '#ffffff',
    cover:
      'https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg',
    video: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Morgan Housel explore les comportements et états d'esprit uniques qui façonnent le succès et la prise de décision financière.",
  },
];
