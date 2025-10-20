# KemsLibrary

<div align="center">
  <img src="./public/images/image3.png" alt="KemsLibrary" width="800" />

  # KemsLibrary - Plateforme de Gestion de Bibliothèque Universitaire

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.6-000000?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?logo=postgresql)](https://www.postgresql.org/)
  [![Neon](https://img.shields.io/badge/Neon-00D7FF?logo=neon&logoColor=white)](https://neon.tech/)
  [![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.44.6-4A90E2?logo=drizzle&logoColor=white)](https://orm.drizzle.team/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![NextAuth.js](https://img.shields.io/badge/NextAuth.js-5.0.0--beta.29-000000?logo=auth0&logoColor=white)](https://next-auth.js.org/)
  [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-0.8.0-000000?logo=react&logoColor=white)](https://ui.shadcn.com/)

  *Plateforme moderne de gestion de bibliothèque universitaire*
  *Une solution complète pour la gestion des livres, des emprunts et des utilisateurs*
</div>

## 🌟 Qu'est-ce que KemsLibrary ?

KemsLibrary est une plateforme innovante de gestion de bibliothèque conçue spécialement pour les établissements universitaires. Elle offre une solution complète pour gérer efficacement les collections de livres, les emprunts, les retours et les utilisateurs de la bibliothèque.

### 🔍 Pourquoi choisir KemsLibrary ?

- **Gestion complète des livres** : Catalogue organisé avec métadonnées détaillées
- **Suivi des emprunts en temps réel** : Système de prêt automatisé avec dates d'échéance
- **Interface utilisateur moderne** : Design responsive et intuitif
- **Authentification sécurisée** : Gestion des utilisateurs avec rôles différenciés
- **Administration simplifiée** : Outils puissants pour les administrateurs

## 🚀 Fonctionnalités Principales

### 📚 Gestion des Livres

- **Catalogue interactif** : Recherche et navigation facilitées
- **Fiches détaillées** : Informations complètes sur chaque ouvrage
- **Couvertures personnalisées** : Sélection de couleurs et images de couverture
- **Gestion des stocks** : Suivi des exemplaires disponibles
- **Métadonnées enrichies** : Auteur, genre, résumé, vidéo de présentation

### 👥 Gestion des Utilisateurs

- **Inscription sécurisée** : Processus d'enregistrement avec validation
- **Profils étudiants** : Carte universitaire et informations personnelles
- **Système de rôles** : Utilisateurs et administrateurs
- **Historique d'activité** : Suivi des emprunts et retours

### 📋 Système d'Emprunts

- **Emprunts automatisés** : Réservation et prêt en quelques clics
- **Gestion des dates d'échéance** : Rappels et suivi automatique
- **Historique complet** : Traçabilité de tous les mouvements
- **États de disponibilité** : Statut en temps réel des ouvrages

### 🔐 Authentification et Sécurité

- **Authentification NextAuth.js** : Connexion sécurisée
- **Gestion des sessions** : Séances utilisateurs protégées
- **Protection anti-abus** : Rate limiting avec Upstash Redis
- **Autorisations granulaires** : Contrôle d'accès basé sur les rôles
- **Protection des données** : Chiffrement et sécurité renforcée

### 🎨 Interface Utilisateur Moderne

- **Design responsive** : Adaptation parfaite à tous les appareils
- **Thème cohérent** : Interface utilisateur uniforme
- **Navigation intuitive** : Parcours utilisateur optimisé
- **Composants réutilisables** : Architecture modulaire

## 🛠️ Stack Technique

### Frontend

- **Framework** : Next.js 15.5.6 avec App Router
- **Langage** : TypeScript 5.3.3
- **Styling** :
  - Tailwind CSS 4 pour les styles utilitaires
  - class-variance-authority pour les variantes de composants
  - tailwind-merge pour la fusion des classes
- **UI Components** :
  - shadcn/ui et Radix UI pour les composants de base accessibles
  - Composants personnalisés adaptés aux besoins
- **Gestion d'État** :
  - React Hooks (useState, useEffect, useMemo, useCallback)
  - Server State Management avec React Server Components
- **Formulaires** :
  - React Hook Form pour la gestion et validation
  - @hookform/resolvers pour les schémas de validation
- **UI/UX** :
  - Lucide React pour les icônes
  - Sonner pour les notifications toast

### Backend

- **Base de données** :
  - PostgreSQL avec Neon Database (serverless)
  - Drizzle ORM pour les requêtes typées
- **Authentification** :
  - NextAuth.js 5.0.0-beta.29 avec adaptateur personnalisé
  - Gestion sécurisée des sessions utilisateur
- **API** :
  - Routes API Next.js avec Server Actions
  - Gestion centralisée des erreurs
  - Validation des entrées avec Zod
- **Images** :
  - ImageKit pour l'optimisation et le stockage d'images

### DevOps et Outils

- **Linting** : ESLint avec configuration Next.js
- **Formatage** : Prettier pour la cohérence du code
- **Migrations** : Drizzle Kit pour la gestion du schéma
- **Rate Limiting** : Upstash Redis pour la protection anti-abus
- **Workflows** : Upstash Workflow pour les tâches asynchrones

## 🚀 Mise en Route

### Prérequis

- Node.js 20+
- PostgreSQL (Neon Database recommandé)
- Compte ImageKit pour la gestion des images
- Redis Upstash pour le rate limiting

### Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/KemogneAlex/KemsLibrary.git
   cd KemsLibrary
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configuration de l'environnement** Créez un fichier `.env.local` à la racine du projet :

   ```env
   # Base de données
   DATABASE_URL="votre-url-neon-postgresql"

   # NextAuth.js
   AUTH_SECRET=votre-secret-tres-long-et-securise
   NEXTAUTH_URL=http://localhost:3000

   # API Endpoints
   NEXT_PUBLIC_API_ENDPOINT=votre-endpoint-api
   NEXT_PUBLIC_PROD_API_ENDPOINT=votre-endpoint-api-production

   # ImageKit
   IMAGEKIT_PRIVATE_KEY=votre-cle-privee
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=votre-cle-publique
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=votre-endpoint-url

   # Redis Upstash
   UPSTASH_REDIS_URL=votre-url-redis
   UPSTASH_REDIS_TOKEN=votre-token-redis

   # Rate Limiting
   UPSTASH_WORKFLOW_URL=votre-workflow-url

   # QStash
   QSTASH_TOKEN=votre-token-qstash

   # Email Service
   RESEND_TOKEN=votre-token-resend
   ```

4. **Préparer la base de données**

   ```bash
   # Générer les migrations
   npm run db:generate

   # Appliquer les migrations
   npm run db:migrate

   # (Optionnel) Ouvrir Drizzle Studio
   npm run db:studio
   ```

5. **Lancer l'application en mode développement**

   ```bash
   npm run dev
   ```

6. **Accéder à l'application**
   - Application principale : [http://localhost:3000](http://localhost:3000)
   - Application déployée : [https://kemslibrary.kemogne-malone.fr/](https://kemslibrary.kemogne-malone.fr/)

## 🏗️ Structure du Projet

```
KemsLibrary/
├── app/                    # Pages et layouts Next.js
│   ├── (auth)/            # Pages d'authentification
│   ├── (root)/            # Pages principales
│   ├── admin/             # Interface d'administration
│   ├── api/               # Routes API
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI de base
│   └── ...               # Composants spécialisés
├── database/             # Configuration et schéma Drizzle
├── lib/                  # Utilitaires et configurations
│   ├── actions/          # Actions serveur
│   └── ...               # Autres utilitaires
├── public/               # Fichiers statiques
│   ├── images/           # Images de l'application
│   └── ...               # Autres ressources
└── types/                # Définitions TypeScript
```

## 📜 Scripts Utiles

### Installation Initiale
```bash
# Création du projet Next.js
npx create-next-app@latest

# Initialisation de shadcn/ui
npx shadcn@latest init

# Ajout des composants shadcn/ui de base
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add avatar
npx shadcn@latest add textarea

# Installation de Prettier
npm i --save-dev prettier

# Installation de Zod pour la validation
npm install zod@^3.24.1
```

### Images et UI
```bash
# Installation d'ImageKit
npm install @imagekit/next
npm i imagekitio-next
npm i imagekit

# Installation des notifications toast (remplace toast de shadcn)
npm install sonner

# Installation du sélecteur de couleurs
npm i react-colorful

# Installation de dayjs pour la gestion des dates
npm i dayjs
```

### Base de Données
```bash
# Installation de Drizzle ORM
npm i drizzle-orm
npm i -D drizzle-kit

# Installation de Neon Database
npm install @neondatabase/serverless

# Installation de dotenv
npm install dotenv
npm install -D @types/dotenv

# Génération et migration de la base de données
npx drizzle-kit generate
npx drizzle-kit migrate
npm run db:studio
```

### Authentification
```bash
# Installation de NextAuth.js (version beta)
npm install next-auth@beta

# Installation de bcryptjs pour le hachage des mots de passe
npm install next-auth@beta bcryptjs --legacy-peer-deps

# Génération du secret d'authentification
npx auth secret

# Installation des types TypeScript pour bcryptjs
npm i --save-dev @types/bcryptjs
```

### Services Externes
```bash
# Installation du rate limiting Upstash
npm install @upstash/ratelimit
npm install @upstash/redis
npm install @upstash/workflow

# Peuplement initial de la base de données
npm run seed
```

### Développement
```bash
# Lancer en mode développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm run start

# Linting
npm run lint
```

## 🔗 Ressources et Documentation

### Technologies Principales

- [Next.js](https://nextjs.org/) - Framework React moderne
- [Drizzle ORM](https://orm.drizzle.team/) - ORM TypeScript pour SQL
- [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle
- [Neon Database](https://neon.tech/) - PostgreSQL serverless
- [ImageKit](https://imagekit.io/) - Gestion et optimisation d'images
- [Upstash](https://upstash.com/) - Redis et Workflows serverless

### Composants UI

- [shadcn/ui](https://ui.shadcn.com/) - Composants UI accessibles et personnalisables
- [Radix UI](https://www.radix-ui.com/) - Composants accessibles
- [Lucide React](https://lucide.dev/) - Icônes modernes
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire

## 🔗 Liens Utiles

### Développement
- [Next.js Documentation (v15.5.6)](https://nextjs.org/docs) - Apprendre les fonctionnalités et API de Next.js
- [shadcn/ui Installation](https://ui.shadcn.com/docs/installation/next) - Guide d'installation pour Next.js
- [ImageKit Dashboard](https://imagekit.io/dashboard) - Gestion et optimisation d'images
- [Neon Console](https://neon.com/) - Base de données PostgreSQL serverless
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/get-started/postgresql-new) - Guide de démarrage avec PostgreSQL

### Authentification et API
- [Auth.js (NextAuth.js)](https://authjs.dev/getting-started) - Solution d'authentification moderne
- [Upstash Console](https://console.upstash.com/) - Gestion Redis et Workflows
- [Upstash Rate Limiting](https://upstash.com/docs/redis/sdks/ratelimit-ts/gettingstarted) - Protection anti-abus

### Communication
- [EmailJS Dashboard](https://dashboard.emailjs.com/) - Service d'envoi d'emails
- [Resend](https://resend.com/) - Plateforme d'emails transactionnels

Ce projet est sous licence MIT.

## 📞 Support

Pour toute question ou assistance, veuillez contacter
[kemognemalone@gmail.com](mailto:kemognemalone@gmail.com).

---

<div align="center">
  <p>Développé avec ❤️ par Kemogne Alex</p>
  <p>© 2025 KemsLibrary - Tous droits réservés</p>
</div>
