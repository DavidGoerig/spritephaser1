import type { PersonnageLoreComplet } from '../../../lore-types';

const tharyn: PersonnageLoreComplet = {
  id: 50,
  nom: 'Tharyn',
  element: 'Insecte',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de 52 ans — un marchand des marchés nocturnes dont la corpulence dit des années passées à attendre et observer plutôt qu\'à courir. Il est large, lent dans ses mouvements de surface, rapide dans ses décisions internes. Cette dissociation entre le rythme extérieur et intérieur est délibérée.',
    peau: 'Gris noirci avec des marques chitineuses aux articulations — l\'expression de l\'élément Insecte sur une peau Umbrienne. Ces marques rendent ses mains moins agréables à serrer mais plus mémorables. Il s\'en sert comme signature dans les transactions.',
    yeux: 'Noirs facettés — l\'adaptation la plus visible de son élément. Ses yeux voient en 180° sans tourner la tête. Dans les marchés nocturnes, cette vision périphérique est un avantage opérationnel qu\'il ne signale jamais.',
    vetements: 'Tenue de marchand neutre — assez bonne pour entrer dans les secteurs supérieurs des marchés nocturnes, assez ordinaire pour ne pas attirer l\'attention dans les secteurs inférieurs. Ses vêtements changent selon les marchés qu\'il fréquente ce jour-là.',
    signes_particuliers: 'Il dit peu et ce qu\'il dit est utile. Ses clients ont appris que quand il dit quelque chose spontanément — sans qu\'on lui demande — c\'est important. Quand il a dit à Shael (48) que de nouvelles marchandises circulaient, c\'était important.',
  },

  psychologie: {
    dominante: 'Marchand des marchés nocturnes de Vel\'Nox depuis 25 ans — il voit tout et dit peu. Il commence à voir des nouvelles marchandises dans les marchés depuis 4 mois : des types de données qu\'il ne reconnaissait pas, des transactions avec des patterns qu\'il n\'avait jamais vus. Quelque chose a changé dans les marchés. Il ne sait pas encore quoi.',
    mecanisme_de_defense: 'L\'information comme monnaie d\'échange plutôt que comme action. Tant qu\'il vend ce qu\'il voit sans prendre position, il reste neutre. La neutralité est la condition de sa survie à Vel\'Nox depuis 25 ans.',
    contradiction_interne: 'Ce qu\'il voit maintenant dans les marchés n\'est pas quelque chose qu\'il peut vendre sans risque. Les nouvelles marchandises qu\'il commence à identifier ressemblent à quelque chose d\'organisé — pas des transactions isolées, un réseau. Vendre des informations sur un réseau à quelqu\'un qui n\'est pas dans ce réseau, c\'est choisir un camp. Il ne choisit jamais de camp.',
    rapport_aux_autres: 'Shael (48) est son acheteur régulier depuis 8 ans — Tharyn lui vend des informations sur les marchés sans savoir exactement pour quoi Shael les utilise. Il a dit à Shael que quelque chose avait changé. Il n\'a pas dit ce qu\'il avait vu spécifiquement. Vethis (46) lui achète parfois des informations sur des routes des marchés nocturnes qui empiètent sur les Trois Couches — une collaboration pratique depuis 12 ans. Osara (51) passe dans ses marchés régulièrement depuis 71 ans — elle est l\'une des personnes les plus anciennes qu\'il connaît à Vel\'Nox et l\'une des moins prévisibles.',
    vision_du_monde: 'Les marchés nocturnes de Vel\'Nox ont leur propre logique. Quelqu\'un qui comprend cette logique peut y survivre. Quelqu\'un qui la perturbe — volontairement ou non — rend les marchés moins prévisibles pour tout le monde. Ce qui se passe en ce moment dans les marchés perturbe la logique qu\'il a apprise en 25 ans.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier marché',
      contenu: 'À 18 ans, il avait vendu pour la première fois dans un marché nocturne de Vel\'Nox — des informations sur des routes entre les Première et Deuxième Couches qu\'il avait cartographiées seul. L\'acheteur lui avait demandé comment il avait accès à ces routes. Il avait dit qu\'il les avait marchées. L\'acheteur avait dit que ce n\'était pas possible — ces routes étaient supposées inaccessibles. Tharyn lui avait montré la sortie. L\'acheteur était revenu avec plus d\'argent.',
    },
    arrivee: {
      titre: 'La réputation',
      contenu: 'En 25 ans, il avait construit une réputation de précision et de neutralité. Il ne vendait jamais des informations à deux acheteurs concurrents sur le même sujet. Il ne prenait jamais position. Il ne mentait jamais — ce qu\'il vendait était vrai ou il ne le vendait pas. Cette combinaison lui avait valu une position unique dans les marchés.',
    },
    premier_conflit: {
      titre: 'Les nouvelles marchandises',
      contenu: 'Il y a 4 mois, des transactions avaient commencé à apparaître dans les marchés nocturnes qu\'il ne reconnaissait pas — des types de données échangées avec des patterns de paiement inhabituels. Pas des transactions isolées. Un réseau organisé opérant à l\'intérieur des marchés sans passer par ses canaux habituels. La première fois qu\'il avait vu quelque chose de semblable, c\'était lors du Vol de la Lumière. Il ne l\'avait pas dit à Shael.',
    },
    revelation: {
      titre: 'Le pattern',
      contenu: 'En analysant les transactions sur 4 mois : les nouvelles marchandises circulaient entre des acheteurs qu\'il n\'avait pas vus avant et des vendeurs qui disparaissaient après une seule transaction. Les données échangées avaient une structure qu\'il reconnaissait maintenant — des profils d\'Élus. Quelqu\'un collectait des profils d\'Élus à Vel\'Nox de façon systématique. Ce n\'était pas Shael — le réseau était trop organisé pour lui.',
    },
    etat_actuel: {
      titre: 'L\'observation',
      contenu: 'Il observe depuis 4 mois. Il a dit à Shael que quelque chose avait changé. Il a dit à Vethis (46) que des routes de marché empiètent sur des zones des Trois Couches qu\'il n\'avait pas vues utilisées depuis longtemps. Il n\'a pas encore dit à l\'un ou l\'autre ce qu\'il pense vraiment : quelqu\'un construit quelque chose dans les marchés nocturnes de Vel\'Nox, et ce quelqu\'un n\'est pas un habitant ordinaire des Trois Couches.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tharyn_pattern',
      titre: 'La collecte systématique',
      description: 'Tharyn a identifié un réseau de collecte de profils d\'Élus opérant dans les marchés nocturnes de Vel\'Nox. Ce réseau est trop organisé pour Shael (48) seul. Si Tharyn révèle ce qu\'il a vu à Vethis (46), les gardiens du réseau des Trois Couches peuvent agir. Si Tharyn continue à observer sans agir, le réseau de collecte grossit.',
      personnages_impliques: [46, 48],
      declencheur: 'Tharyn décidant de partager ce qu\'il a observé avec Vethis',
      consequence: 'Vethis comprenant que les flux changés dans les Trois Couches sont liés à cette collecte systématique',
    },
    {
      id: 'tharyn_osara',
      titre: 'La plus ancienne habitante',
      description: 'Osara (51) est l\'une des personnes les plus anciennes qu\'il connaît à Vel\'Nox. Elle a vécu le Vol de la Lumière. Les nouvelles marchandises qu\'il voit ressemblent à quelque chose de cette époque. Si Tharyn lui demandait, elle pourrait reconnaître le pattern.',
      personnages_impliques: [51, 47],
      declencheur: 'Tharyn approchant Osara pour lui décrire ce qu\'il voit dans les marchés',
      consequence: 'Osara reconnaissant le pattern et faisant le lien avec ce qui s\'est passé lors du Vol de la Lumière',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Marchand des marchés nocturnes de Vel\'Nox depuis 25 ans. Voit tout, dit peu. Observe depuis 4 mois un réseau organisé de collecte de profils d\'Élus dans les marchés. N\'a pas encore décidé à qui parler entièrement. A donné des informations partielles à Shael (48) et Vethis (46).',

  relations: [
    { id: 48, nom: 'Shael', type: 'allié', note: 'Acheteur régulier depuis 8 ans. Tharyn lui a dit que quelque chose a changé. Pas dit ce qu\'il a vu.' },
    { id: 46, nom: 'Vethis', type: 'allié', note: 'Collaboration pratique depuis 12 ans. A dit à Vethis que des routes empiètent sur les Trois Couches.' },
    { id: 51, nom: 'Osara', type: 'contact', note: 'La plus ancienne de Vel\'Nox qu\'il connaît. Pourrait reconnaître le pattern des nouvelles marchandises.' },
  ],

  combat: {
    sorts: [
      'Nuée d\'insectes (Insecte) — déploiement d\'un essaim de scouts — surveillance d\'une zone étendue',
      'Dard paralysant (Insecte) — injection d\'une toxine d\'insecte — paralysie temporaire d\'une cible',
      'Carapace d\'essaim (Insecte) — protection par une masse d\'insectes — réduction des impacts physiques',
    ],
  },

  image_prompts: [
    {
      id: 'tharyn_marche',
      description: 'Tharyn dans un marché nocturne de Vel\'Nox — un Umbrien de 52 ans debout derrière son étal, ses yeux facettés regardant la foule en 180°. En arrière-plan : des transactions dont il reconnaît pas les patterns. Son expression est de quelqu\'un qui voit quelque chose qu\'il ne reconnaît pas et qui décide quoi en faire.',
      style: 'réaliste Umbrien marchand, marché nocturne Vel\'Nox, vision panoramique, nouvelles marchandises, observation neutre et inquiète, décision imminente',
    },
  ],

  lore_long: `Tharyn voit tout dans les marchés nocturnes de Vel'Nox depuis 25 ans. Il a vu des choses qui ressemblaient à des patterns organisés une seule fois avant — lors du Vol de la Lumière.

Depuis 4 mois, un réseau de collecte de profils d'Élus opère dans les marchés. Trop organisé pour Shael (48) seul. Quelqu'un d'autre construit quelque chose dans les Trois Couches.

Il n'a pas encore dit entièrement ce qu'il a vu. La neutralité est la condition de sa survie. Mais garder ça pour lui devient de plus en plus difficile.`,
};

export default tharyn;
