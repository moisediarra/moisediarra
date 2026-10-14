# Moise Diarra — portfolio

Portfolio bilingue (anglais / français) de Moise Diarra, ingénieur logiciel spécialisé en IA agentique et générative.
Construit avec Next.js 16 (App Router, Cache Components), React 19, TypeScript et Tailwind CSS 4, avec un assistant IA (Claude) qui répond aux visiteurs à partir du contenu du site.

- `/en` : version anglaise (langue par défaut)
- `/fr` : version française
- `/` redirige vers la langue du visiteur : dernière langue consultée, sinon langue du navigateur, sinon anglais.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000.

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Textes anglais | `src/i18n/dictionaries/en.ts` |
| Textes français | `src/i18n/dictionaries/fr.ts` (même structure, vérifiée par TypeScript) |
| Liste des projets (stack, statut, liens) | `src/content/projects.ts`, puis leurs textes dans les deux dictionnaires (`projects.items`) |
| Technologies par catégorie | `src/content/skills.ts` |
| E-mail, LinkedIn, GitHub, photo, CV | `src/lib/site.ts` |
| CV téléchargeables | `public/cv/` |
| Couleurs et thème clair / sombre | `src/app/globals.css` |

Les liens vides (LinkedIn, GitHub, démo ou code d’un projet) sont simplement masqués. Pour afficher votre photo, déposez-la dans `public/images/` et renseignez `photo` dans `src/lib/site.ts`.

## Assistant IA

Le bouton « Ask my AI / Demander à mon IA » ouvre un chat qui répond aux questions sur votre parcours.

- Ses connaissances sont générées à partir du dictionnaire anglais, de la liste des projets et des compétences (`src/lib/ai/system-prompt.ts`) : quand vous modifiez le contenu du site, l’assistant est à jour.
- Il ne doit répondre qu’à partir de ce profil. Sinon, il renvoie vers votre e-mail.
- Les réponses sont diffusées en streaming par la route `src/app/api/chat/route.ts`, avec le modèle `claude-opus-5-5` (modifiable dans `src/lib/ai/config.ts`) et le fallback serveur d’Anthropic en cas de refus d’un filtre de sécurité.

### L’activer

1. Créez une clé API sur https://platform.claude.com.
2. Copiez `.env.example` en `.env.local` et renseignez `ANTHROPIC_API_KEY`.
3. Relancez `npm run dev`.

Sans clé, l’assistant est masqué et le reste du site fonctionne normalement. La page étant générée au build, **redéployez après avoir ajouté ou retiré la clé** en production.

### Garde-fous

- Questions de 1 000 caractères maximum, conversations de 11 messages maximum.
- Limite de 20 questions par visiteur toutes les 10 minutes (`src/lib/ai/rate-limit.ts`). Ce compteur vit dans la mémoire de chaque instance du serveur : il freine les abus, mais ne constitue pas un plafond strict sur un hébergement serverless. **Fixez une limite de dépense mensuelle dans la console Anthropic.**

## Déployer sur Vercel

1. Poussez ce dossier sur un dépôt GitHub.
2. Sur https://vercel.com/new, importez le dépôt : Vercel détecte Next.js automatiquement.
3. Ajoutez les variables d’environnement :
   - `ANTHROPIC_API_KEY` pour activer l’assistant ;
   - `NEXT_PUBLIC_SITE_URL` si vous utilisez un nom de domaine personnalisé (ex. `https://moisediarra.dev`), pour que les liens de partage, le sitemap et le référencement l’utilisent.

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (vérifie aussi les types) |
| `npm start` | Sert le build de production |
| `npm run lint` | ESLint |
