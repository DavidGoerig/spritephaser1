import type { PersonnageLoreComplet } from '../../../lore-types';

const caerra: PersonnageLoreComplet = {
  id: 28,
  nom: 'Caerra',
  element: 'Vent',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Parti du Feu',

  apparence: {
    taille_corpulence: 'Aéride de 45 ans — une ingénieure dont le corps dit le travail physique autant que la réflexion. Ses mains sont celles de quelqu\'un qui construit. Elle est grande avec des ailes robustes, adaptées aux vents des strates intermédiaires où elle passe la majorité de son temps.',
    peau: 'Pâle Aéride avec des marques de travail sur les paumes — des callus d\'outil et des traces de colle structurale que le lavage n\'efface pas. Elle ne les dissimule pas.',
    yeux: 'Bleu-vert avec une qualité de projection — elle voit les espaces comme ils pourraient être, pas comme ils sont. Cette habitude la rend parfois absente dans les conversations sur le présent.',
    vetements: 'Combinaison de travail avec des outils dans les poches et un rouleau de plans attaché dans le dos. Elle porte son casque d\'ingénieure plus souvent qu\'elle ne le retire.',
    signes_particuliers: 'Elle fait des croquis pendant les conversations — sur n\'importe quel support disponible. Ce qu\'elle dessine n\'est pas toujours lié à la conversation. Parfois c\'est la solution à un problème qu\'elle a en tête.',
  },

  psychologie: {
    dominante: 'Reconstruire la plateforme Ouest d\'Asterciel — un objectif de 27 ans depuis qu\'elle l\'a vue tomber à 18 ans. Ce n\'est pas seulement de la reconstruction : c\'est une démonstration que ce qui a été perdu peut être récupéré si quelqu\'un choisit de ne pas accepter la perte comme définitive.',
    mecanisme_de_defense: 'L\'action continue. Tant qu\'elle avance sur le projet, la question "est-ce que ça peut réussir?" ne se pose pas. L\'avancement est la réponse à cette question.',
    contradiction_interne: 'Son projet de reconstruction nécessite l\'approbation de Serathis (24) pour accéder aux ressources des strates hautes. Serathis ne refuse pas directement — il reporte, il demande des études complémentaires, il reclasse les priorités. Elle sait que ce n\'est pas un manque de budget. Elle ne comprend pas encore exactement pourquoi.',
    rapport_aux_autres: 'Talvyn (23) lui fournit les données techniques sur les champs électriques — sans lui, le projet n\'a pas de fondation solide. Yrith (25) lui fournit la carte des ruines depuis l\'intérieur. Velleth (106) est le coordinateur de ses pétitions populaires pour la reconstruction — la pression politique qu\'elle ne peut pas exercer seule.',
    vision_du_monde: 'Les structures détruites peuvent être reconstruites si quelqu\'un reste assez longtemps pour apprendre ce qui les a fait tomber et pour trouver comment ne pas répéter les mêmes erreurs. La plateforme Ouest ne doit pas être un monument à la Chute — elle doit être une preuve que la Chute n\'est pas le mot final.',
  },

  histoire: {
    enfance: {
      titre: 'La Chute des Nuages',
      contenu: 'À 18 ans, pendant la Chute des Nuages, elle avait vu la plateforme Ouest tomber. Elle était dans les strates moyennes pour des travaux d\'apprentissage. Elle avait aidé à évacuer des personnes pendant les 6 heures suivantes. Elle avait vu Yrith (25) s\'accrocher à une section qui tenait encore. Elle avait pris la décision à ce moment-là : elle reconstruirait.',
    },
    arrivee: {
      titre: 'La formation accélérée',
      contenu: 'À 22 ans, après sa formation d\'ingénieure, elle avait commencé les premiers calculs pour la reconstruction de la plateforme Ouest. À 28 ans, elle avait soumis sa première proposition à la Confédération. La proposition avait été retournée avec des demandes de "compléments d\'étude".',
    },
    premier_conflit: {
      titre: 'Le blocage institutionnel',
      contenu: 'À 35 ans, après 7 ans de compléments d\'étude, elle avait compris que le blocage n\'était pas technique mais politique. La plateforme Ouest détruite servait de symbole à la légitimité de Serathis (24) — il en avait besoin comme rappel de ce que la lignée de Veralith avait "sauvé". La reconstruire retirait ce symbole.',
    },
    revelation: {
      titre: 'Le réseau technique',
      contenu: 'À 38 ans, elle avait changé d\'approche — plutôt que d\'obtenir l\'approbation institutionnelle, elle avait commencé à construire le réseau technique qui rendrait le projet incontournable. Talvyn (23) pour les champs électriques, Yrith (25) pour la cartographie des ruines, Velleth (106) pour la pression politique. Le projet était maintenant trop avancé pour être simplement reporté.',
    },
    etat_actuel: {
      titre: 'Le point de basculement',
      contenu: 'Le projet de reconstruction est à son point le plus avancé — les plans sont complets, les ressources techniques rassemblées, la pression politique réelle. La défaillance prévue par Talvyn dans les connexions centrales dans 8 à 12 semaines change tout : si des plateformes tombent pendant que sa reconstruction est bloquée, son argument politique devient irréfutable.',
    },
  },

  evenements_narratifs: [
    {
      id: 'caerra_defaillance',
      titre: 'La fenêtre politique',
      description: 'La défaillance prévue par Talvyn (23) dans les connexions centrales va créer une crise structurelle. Si elle se produit avant que la reconstruction de Caerra soit approuvée, son projet devient la seule réponse technique disponible. C\'est une fenêtre politique qu\'elle n\'a pas cherchée mais qu\'elle ne peut pas ignorer.',
      personnages_impliques: [23, 25],
      declencheur: 'Défaillance prévisible qui transforme le contexte politique autour de la reconstruction',
      consequence: 'Opportunité d\'approbation forcée du projet — ou risque d\'être associée à la catastrophe si mal géré',
    },
    {
      id: 'caerra_telos',
      titre: 'La demande de Telos',
      description: 'Telos (29) a demandé à rencontrer Talvyn (23) — dans le cadre de sa recherche sur Veralith. Cette demande l\'inquiète indirectement : si Telos trouve quelque chose qui fragilise la légitimité de Serathis (24), la réponse de Serathis pourrait impliquer un resserrement politique qui bloquerait encore son projet.',
      personnages_impliques: [29, 23],
      declencheur: 'Recherche de Telos se rapprochant du réseau de personnes qui soutiennent la reconstruction',
      consequence: 'Risque indirect de blocage si la crise de légitimité de Serathis crée une crispation institutionnelle',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Ingénieure qui reconstruit la plateforme Ouest depuis 27 ans. Projet à son point le plus avancé — bloqué institutionnellement par Serathis (24). La défaillance prévue par Talvyn (23) crée une fenêtre politique. Coordonne Talvyn, Yrith (25) et Velleth (106).',

  relations: [
    { id: 23, nom: 'Talvyn', type: 'allié', note: 'Fournit les données techniques sur les champs. Fondation du projet.' },
    { id: 25, nom: 'Yrith', type: 'allié', note: 'Cartographie des ruines depuis l\'intérieur depuis 14 ans.' },
    { id: 106, nom: 'Velleth', type: 'allié', note: 'Coordinateur des pétitions populaires pour la reconstruction.' },
  ],

  combat: {
    sorts: [
      'Frappe de construction (Vent) — manipulation du vent pour déplacer des structures légères — outil de chantier autant que d\'attaque',
      'Tempête localisée (Vent) — zone de turbulence concentrée — obstacle défensif',
      'Courant de protection (Vent) — flux autour d\'un objet ou d\'une personne — bouclier aérien',
    ],
  },

  image_prompts: [
    {
      id: 'caerra_plans',
      description: 'Caerra devant le bord de la plateforme Ouest d\'Asterciel — une Aéride de 45 ans tenant un rouleau de plans dans une main, regardant les ruines en dessous. Derrière elle : les strates hautes d\'Asterciel. Son expression est de détermination et de patience — la patience de quelqu\'un qui attend depuis 27 ans et continue à construire.',
      style: 'réaliste ingénieure Aéride, bord de plateforme, plans de reconstruction, Asterciel, 27 ans de projet',
    },
  ],

  lore_long: `Caerra a vu la plateforme Ouest tomber à 18 ans pendant la Chute des Nuages. Elle reconstruit depuis 27 ans.

Le blocage n'est pas technique — c'est politique. La plateforme détruite sert de symbole à la légitimité de Serathis (24). La reconstruire retirerait ce symbole.

La défaillance prévue par Talvyn (23) dans les connexions centrales dans 8 à 12 semaines crée une fenêtre politique qu'elle n'a pas cherchée. Elle ne peut pas l'ignorer.`,
};

export default caerra;
