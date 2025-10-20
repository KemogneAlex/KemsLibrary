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
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fantasy / Fiction',
    rating: 4.6,
    totalCopies: 20,
    availableCopies: 10,
    description:
      "Un roman éblouissant sur tous les choix qui mènent à une vie bien vécue. La Bibliothèque de Minuit raconte l'histoire de Nora Seed qui se retrouve entre la vie et la mort.",
    coverColor: '#1c1f40',
    coverUrl: 'https://m.media-amazon.com/images/I/81J6APjwxlL.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Un roman éblouissant sur tous les choix qui mènent à une vie bien vécue. La Bibliothèque de Minuit raconte l'histoire de Nora Seed qui se retrouve entre la vie et la mort. Un roman éblouissant sur tous les choix qui mènent à une vie bien vécue. La Bibliothèque de Minuit raconte l'histoire de Nora Seed qui se retrouve entre la vie et la mort.",
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Développement Personnel / Productivité',
    rating: 4.9,
    totalCopies: 99,
    availableCopies: 50,
    description:
      "Un guide révolutionnaire pour créer de bonnes habitudes, éliminer les mauvaises et s'améliorer de 1% chaque jour.",
    coverColor: '#fffdf6',
    coverUrl: 'https://m.media-amazon.com/images/I/81F90H7hnML.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Un guide révolutionnaire pour créer de bonnes habitudes, éliminer les mauvaises et s'améliorer de 1% chaque jour.",
  },
  {
    id: '3',
    title: "You Don't Know JS: Scope & Closures",
    author: 'Kyle Simpson',
    genre: 'Informatique / JavaScript',
    rating: 4.7,
    totalCopies: 9,
    availableCopies: 5,
    description:
      'Un guide essentiel pour comprendre les mécanismes de base de JavaScript, en se concentrant sur la portée et les closures.',
    coverColor: '#f8e036',
    coverUrl:
      'https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Un guide essentiel pour comprendre les mécanismes de base de JavaScript, en se concentrant sur la portée et les closures.',
  },
  {
    id: '4',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Philosophie / Aventure',
    rating: 4.5,
    totalCopies: 78,
    availableCopies: 50,
    description:
      'Un conte magique sur Santiago, un jeune berger andalou, qui se lance dans un voyage pour trouver un trésor terrestre.',
    coverColor: '#ed6322',
    coverUrl:
      'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Un conte magique sur Santiago, un jeune berger andalou, qui se lance dans un voyage pour trouver un trésor terrestre.',
  },
  {
    id: '5',
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Développement Personnel / Productivité',
    rating: 4.7,
    totalCopies: 23,
    availableCopies: 23,
    description:
      'Règles pour réussir dans un monde distrait, enseignant comment cultiver une concentration profonde pour atteindre une productivité maximale.',
    coverColor: '#ffffff',
    coverUrl: 'https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Règles pour réussir dans un monde distrait, enseignant comment cultiver une concentration profonde pour atteindre une productivité maximale.',
  },
  {
    id: '6',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Informatique / Programmation',
    rating: 4.8,
    totalCopies: 56,
    availableCopies: 56,
    description:
      "Un manuel d'artisanat logiciel agile, offrant les meilleures pratiques et principes pour écrire un code propre et maintenable.",
    coverColor: '#080c0d',
    coverUrl:
      'https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Un manuel d'artisanat logiciel agile, offrant les meilleures pratiques et principes pour écrire un code propre et maintenable.",
  },
  {
    id: '7',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    genre: 'Informatique / Programmation',
    rating: 4.8,
    totalCopies: 25,
    availableCopies: 3,
    description:
      'Un guide intemporel pour les développeurs pour affiner leurs compétences et améliorer leurs pratiques de programmation.',
    coverColor: '#100f15',
    coverUrl:
      'https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      'Un guide intemporel pour les développeurs pour affiner leurs compétences et améliorer leurs pratiques de programmation.',
  },
  {
    id: '8',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Finance / Développement Personnel',
    rating: 4.8,
    totalCopies: 10,
    availableCopies: 5,
    description:
      "Morgan Housel explore les comportements et états d'esprit uniques qui façonnent le succès et la prise de décision financière.",
    coverColor: '#ffffff',
    coverUrl:
      'https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg',
    videoUrl: '/sample-video.mp4?updatedAt=1722593504152',
    summary:
      "Morgan Housel explore les comportements et états d'esprit uniques qui façonnent le succès et la prise de décision financière.",
  },
];
