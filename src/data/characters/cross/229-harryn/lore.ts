// ============================================================
//  HARRYN — Lore complet (D3 · Cross Feu/Spectre · Arc La Forge Confisquée)
//  id: 229 | Feu + Spectre | Pyriens | Dissidentes | Artillerie
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [V] — travaillait dans la Forge Silencieuse, survécu, son élément Spectre a émergé après
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 229,
  nom: 'Harryn',
  element: 'Feu',
  element2: 'Spectre',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Un mètre soixante-dix-sept, bâti moyen. Avant la Rupture, il était charpentier de chantier — une corpulence de travail physique, des épaules larges, des mains solides. Depuis la Rupture, il a maigri d'une façon qu'il n'explique pas entièrement mais qui correspond à quelque chose qu'il dit rarement : il dort mal depuis cinq ans.`,
    peau: `Rouge-brique avec les fissures Pyriens standard luisant orange. Mais depuis l'émergence de son élément Spectre, les fissures aux tempes et au cou ont une qualité différente la nuit — elles prennent une teinte légèrement translucide, comme si quelque chose d'intérieur regardait vers l'extérieur. Il l'a remarqué lui-même dans les miroirs. Il ne le mentionne à personne.`,
    yeux: `Ambre foncé avec une qualité que les gens décrivent différemment. Certains disent qu'il regarde "à travers" les personnes. D'autres disent qu'il semble voir quelque chose que personne d'autre ne voit dans la pièce. Les deux descriptions sont plus ou moins exactes.`,
    vetements: `Pratiques, sombres, sans insigne. Il portait les couleurs du Parti du Feu pendant deux ans après la Rupture. Il a arrêté quand il a rejoint les Dissidentes. Maintenant il ne porte rien qui le marque.`,
    signes_particuliers: `Il ne va pas dans la Forge Silencieuse. Pas par règlement — l'accès est officiellement interdit à tout le monde. Mais d'autres y entrent clandestinement pour voir. Lui ne le fait pas. Il dit qu'il n'en a pas besoin. Ce n'est pas tout à fait ça.`,
  },

  psychologie: {
    dominante: `Harryn ne cherche pas à comprendre ce qui lui est arrivé. Il cherche à l'utiliser. Son élément Spectre a émergé après la Rupture — un trauma élémentaire déclenché par l'exposition à la mort massive dans la Forge Silencieuse. Ce n'est pas une théorie — c'est documenté dans les archives de l'Ordre des Soigneurs, pour les rares cas similaires. Il le sait. Il a fait la paix avec le fait d'être quelqu'un que la mort a changé.`,
    contradictions: `Il est Dissident et croit dans la cause. Mais certains jours il entend les morts de la Forge Silencieuse d'un endroit de Khar-Vurn trop éloigné pour que ce soit possible physiquement. Ces jours-là, il fait son travail quand même.`,
    peur: `Que ce qu'il entend dans la Forge Silencieuse soit réel de la façon dont ça l'affecte — pas de la paranoïa, une perception authentique. Et que si c'est authentique, il ait une responsabilité envers ces morts qu'il ne sait pas encore formuler.`,
    desir: `Que la Forge Silencieuse soit reconnue publiquement pour ce qu'elle est. Pas un accident de maintenance — une conséquence directe du retrait délibéré d'un Élu Ice par l'Empire. Si ce fait devenait public, ce qui reste dans le verre basaltique aurait un contexte.`,
    rapport_au_pouvoir: `Il a rejoint les Dissidentes précisément pour ça — ils sont les seuls à admettre ouvertement que la Forge Silencieuse n'était pas un accident. Il fait un travail de terrain pour eux, pas idéologique. Il est praticien, pas orateur.`,
  },

  histoire: {
    origine: {
      titre: 'Charpentier de la Forge Silencieuse',
      texte: `Harryn travaillait comme charpentier de chantier dans le quartier nord-est de Khar-Vurn — la zone qui est devenue la Forge Silencieuse. Il y était le matin de la Rupture Thermique. Il avait vingt-sept ans.

Il avait survécu parce qu'il était dans une cage d'escalier intérieure quand la surtension thermique avait atteint son quartier. La cage d'escalier avait une structure en calcaire épais — pas une protection idéale, mais suffisante. La chaleur avait vitrifié l'extérieur du bâtiment mais la structure interne avait absorbé le choc thermique.

Il était sorti dans un quartier qui n'existait plus tel qu'il était.

Son élément Feu existait avant — il était enregistré, documenté, jugé insuffisant pour le service militaire et donc non-mobilisé par l'Empire. Son élément Spectre n'existait pas avant la Rupture.`,
    },
    eveil: {
      titre: 'L'Émergence',
      texte: `Trois mois après la Rupture, il avait commencé à entendre des choses.

Pas de façon constante — par moments, surtout la nuit. Des sons qui ne correspondaient à rien de visible. Parfois des fragments de voix, indistinctes, sans contenu intelligible. Des fois juste une présence thermique vide — de la chaleur sans source.

Les Soigneurs qu'il avait consultés avaient dit : trauma élémentaire. L'exposition à la mort de masse dans la Forge Silencieuse avait déclenché une émergence élémentaire secondaire. C'était rare mais documenté. Le Spectre était l'élément de la persistance — de ce qui reste après la fin. Il avait été suffisamment exposé à la fin des autres pour que quelque chose en lui y réponde.

L'Ordre des Soigneurs avait voulu le transférer à la Citadelle pour études. Il avait refusé. La Citadelle aurait voulu comprendre le mécanisme. Lui voulait vivre à Khar-Vurn.`,
    },
    rupture: {
      titre: 'Ce Qu'Il Entend',
      texte: `Il avait mis deux ans à comprendre ce qu'il entendait.

Ce n'était pas des voix — pas de messages, pas d'intentions. C'était de la présence persistante. Les Élus et non-Élus qui avaient été vitrifiés dans la Forge Silencieuse laissaient une empreinte dans les flux spectraux de Khar-Vurn. Une empreinte diffuse, dégradée, sans personnalité identifiable. Mais là.

Il ne pouvait pas leur parler. Il ne pouvait pas les "entendre" clairement. Ce qu'il percevait était plus proche de ce que percevrait quelqu'un qui entend une pièce entière parler à travers un mur — présence collective, pas individus.

Ce qui avait changé sa façon de voir la Forge Silencieuse : il savait, de façon viscérale et irréfutable pour lui, que ces gens y étaient encore d'une certaine façon. Que la Forge Silencieuse n'était pas un monument à des morts — c'était un espace où des morts étaient encore présents sous une forme dégradée.

Il avait rejoint les Dissidentes parce qu'ils étaient les seuls à ne pas chercher à lui expliquer que ce qu'il percevait était psychologique.`,
    },
    maintenant: {
      titre: 'Le Travail de Terrain',
      texte: `Il fait du travail de terrain pour les Dissidentes depuis trois ans. Pas du combat — de la reconnaissance, des transmissions, des passages de documents d'un point à un autre. Il est discret, fiable, motivé. Brasia (id:1) lui fait confiance dans les zones où d'autres Dissidentes seraient reconnus.

En parallèle, il documente. Il tient un carnet de ce qu'il perçoit depuis la Forge Silencieuse — pas pour publier, pas pour prouver quoi que ce soit. Pour lui-même, et peut-être un jour pour les archives Dissidentes.

Ce qu'il a noté depuis trois ans : la présence dans la Forge Silencieuse n'est pas statique. Elle fluctue. À certaines périodes — lors de manifestations politiques, lors de votes sur la reconstruction, lors de discours qui mentionnent le quartier nord-est — la présence augmente légèrement. Pas une réaction, pas une intelligence. Quelque chose de plus simple. Comme si les événements qui touchent au souvenir de leur mort leur parvenaient d'une façon ou d'une autre.`,
    },
    objectif: {
      titre: 'La Reconnaissance',
      texte: `Son objectif est que la Forge Silencieuse soit reconnue publiquement pour ce qu'elle est — le résultat du retrait délibéré d'un Élu Ice par l'Empire, pas un accident de maintenance.

Si ce fait était public, si les archives qui le prouvent (que les Dissidentes ont, que Brasia connaît) devenaient accessibles, alors ce qu'il entend dans les flux spectraux aurait un contexte. Les gens qui y sont vitrifiés auraient une vérité attachée à leur mort.

Il ne sait pas si c'est de la superstition — que la vérité change quelque chose pour eux. Il sait que ça change quelque chose pour lui.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Survivant de la Forge Silencieuse. Double élément Feu/Spectre, le Spectre ayant émergé post-Rupture. Perçoit la présence persistante des morts de la Forge via son élément Spectre. Fait du travail de terrain pour les Dissidentes depuis 3 ans. Documente les fluctuations de présence dans la Forge Silencieuse. Cherche à faire reconnaître publiquement l'origine délibérée de la catastrophe.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'chef_de_terrain',
      depuis_ici: `Elle lui fait confiance pour le terrain — pas parce qu'il est exceptionnel tactiquement, parce qu'il est là depuis trois ans et qu'il ne l'a jamais mis en danger. Elle n'a pas posé de questions sur ce qu'il perçoit dans la Forge Silencieuse. Il n'a pas offert les détails. C'est un accord non formulé.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 10,
      nom: 'Thessandra',
      type: 'collègue_Dissident',
      depuis_ici: `Thessandra soigne dans des espaces clandestins. Harryn lui a servi de convoyeur de patients à deux reprises — des Élus non-enregistrés qui avaient besoin de soins et n'avaient pas accès aux Soigneurs officiels. Elle ne lui a pas demandé comment il trouvait les endroits sûrs dans Khar-Vurn. Il n'a pas expliqué que certains d'entre eux, il les trouve en suivant des flux spectraux qui lui indiquent les zones sans présence impériale active.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 5,
      nom: 'Yssara',
      type: 'rencontre_récente',
      depuis_ici: `Yssara est traqueuse de Capteurs impériaux. Harryn a facilité une de ses échappées il y a quatre mois — elle avait besoin d'un passage dans une zone qu'il connaissait bien. Elle était efficace, indépendante, et n'avait pas demandé comment il savait que le passage était sûr. Il la respecte pour ça.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Harryn est Artillerie — il frappe de loin, avec précision, en utilisant la combinaison de son Feu offensif et de son Spectre pour créer des effets que les adversaires ne comprennent pas immédiatement. Il ne cherche pas à détruire — il cherche à déstabiliser, à créer des zones que l'adversaire ne peut pas traverser facilement.`,
    sorts: [
      {
        nom: 'Tir Thermique',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Tir de base — Harryn projette une boule de feu concentrée sur une cible à portée de 5 cases. Dégâts moyens, brûlure légère (2 tours). Si la cible est déjà en état de brûlure, les dégâts sont augmentés de 50%.`,
        description_lore: `Son élément Feu de base, direct et efficace. Pas de finesse — de la précision.`,
      },
      {
        nom: 'Empreinte Spectrale',
        type: 'sort_situationnel',
        elements: ['Spectre'],
        description_gameplay: `Harryn marque une zone de 2×2 cases d'une empreinte spectrale. Les ennemis qui entrent dans la zone subissent un effet de ralentissement (50% de vitesse) et voient leurs sorts avoir 20% de chances de rater pendant qu'ils y sont. Durée de la zone : 3 tours.`,
        description_lore: `Une version projetée de ce qu'il perçoit dans la Forge Silencieuse — une présence persistante qui affecte ceux qui y pénètrent.`,
      },
      {
        nom: 'Feu des Absents',
        type: 'sort_situationnel',
        elements: ['Feu', 'Spectre'],
        description_gameplay: `Harryn canalise les deux éléments simultanément. Il projette une zone de feu spectral (4 cases en ligne) qui inflige des dégâts de brûlure et applique un effet de "présence" — les cibles dans la zone ont 30% de chances de perdre leur prochaine action à cause d'une interférence spectrale.`,
        description_lore: `La combinaison des deux éléments, celle qu'il n'a pas choisie mais qu'il a appris à utiliser. Le feu qui détruit ; le spectre qui persiste.`,
      },
      {
        nom: 'Forge Silencieuse',
        type: 'ultimate',
        elements: ['Feu', 'Spectre'],
        description_gameplay: `Harryn crée une zone de 3×3 cases qui réplique brièvement la nature de la Forge Silencieuse. Pendant 2 tours, toute unité ennemie qui subit des dégâts dans cette zone est également affectée par une "empreinte persistante" qui lui inflige des dégâts Spectre mineurs pendant 3 tours supplémentaires après avoir quitté la zone.`,
        description_lore: `Il n'aime pas utiliser ça. Il l'utilise quand rien d'autre ne suffit.`,
      },
      {
        nom: 'Présence Persistante',
        type: 'passif',
        elements: ['Spectre'],
        description_gameplay: `Passif. Quand Harryn est tué en combat, il laisse une empreinte spectrale à son emplacement pendant 2 tours. Cette empreinte inflige des dégâts Spectre mineurs aux ennemis adjacents à chaque début de tour et empêche la zone d'être occupée sans pénalité.`,
        description_lore: `Ce qu'il a appris à faire avec son élément : la présence persiste après la fin. Même la sienne, s'il le faut.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Harryn',
      description: `Pyrien masculin, 32 ans, 1m77, corpulence de travail mais légèrement appauvri. Peau rouge-brique avec fissures Feu orange et légère translucidité spectrale aux tempes la nuit. Yeux ambre foncé avec qualité de "voir à travers". Expression distante mais présente. Tenue sobre sans insigne. Fond : rues de Khar-Vurn avec la Forge Silencieuse visible au loin, figures figées dans le verre basaltique perceptibles. Éclairage nocturne. Style concept art Riot Games, tons orange-brique avec touches spectrales froides.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 900,

  lore_long: `CE QUI RESTE
Un chapitre de la vie de Harryn, survivant de la Forge Silencieuse

—

I.

Il avait noté dans son carnet : "Fluctuation haute, troisième semaine de suite."

La présence dans la Forge Silencieuse avait augmenté pendant les trois semaines de débat public sur la reconstruction du quartier nord-est. Ce n'était pas la première fois qu'il observait ça — chaque événement politique qui touchait au souvenir du quartier créait une fluctuation. Pas de façon intelligente ou dirigée. Juste... plus présente.

Il ne savait pas quoi faire de cette information.

—

II.

Il avait survécu dans une cage d'escalier.

C'était le fait central de sa vie depuis cinq ans, la chose autour de laquelle tout le reste s'organisait. Ses voisins dans la cage d'escalier avaient aussi survécu — quatre personnes, dont une était morte d'une insuffisance pulmonaire due à la chaleur deux jours après. Les trois autres vivaient encore à Khar-Vurn.

Ce que les trois autres n'avaient pas : un élément Spectre.

Il n'y avait pas de raison évidente pour que lui le développe et pas eux. Les Soigneurs avaient dit "terrain élémentaire préexistant" — comme si quelque chose dans sa physiologie avait été prêt à recevoir cet élément et que l'exposition à la mort de masse avait fourni le déclencheur. Il n'avait pas demandé comment prévoir ça. Il avait demandé si d'autres l'avaient eu. Il y en avait eu deux, dans d'autres événements de mort de masse historiques. Aucun à Khar-Vurn.

Il était, dans un sens précis, unique.

—

III.

Ce soir, il avait livré des documents à Thessandra dans le sous-sol du quartier ouest.

Elle soignait deux Élus non-enregistrés — une Élue Plante dont les racines poussaient involontairement dans ses propres tissus (une urgence), et un adolescent Électrique qui n'avait pas encore le contrôle de ses décharges. Elle avait besoin de fournitures médicales qui n'arrivaient pas par les voies officielles. Il les avait convoyées.

Elle ne lui avait pas demandé comment il trouvait les zones sûres de Khar-Vurn. C'était une des choses qu'il appréciait chez Thessandra — elle ne demandait pas comment, elle demandait si.

La vérité simple : il les trouvait en partie en suivant les zones de présence spectrale basse. Les agents impériaux actifs laissaient une trace dans les flux spectraux — une chaleur vide, différente de celle des civils. Là où cette trace était absente, la zone était généralement sûre.

C'était une information utile. Il ne savait pas comment l'expliquer sans expliquer tout le reste.

—

IV.

En rentrant, il était passé à une rue de la Forge Silencieuse.

Pas intentionnellement — une route qu'il n'avait pas prise depuis six mois et qui passait plus près qu'il s'en souvenait. Il avait senti la présence augmenter dans les trois cents derniers mètres, puis atteindre quelque chose qui ressemblait à un mur invisible.

Il s'était arrêté. Avait regardé la direction de la Forge.

Ce qu'il ne dirait jamais à Brasia, à Thessandra, à qui que ce soit dans les Dissidentes : certains soirs, ce qu'il perçoit dans la Forge Silencieuse ressemble à de l'attente. Pas intelligente, pas dirigée. Juste persistante.

Il ne savait pas ce que ça attendait. Il n'était pas certain que ça attendait quelque chose. Mais le mot qui lui venait était "attente", et il n'avait pas de meilleur mot.

Il avait changé de route et était rentré chez lui.

Son carnet l'attendait sur la table. Il avait encore deux points à noter avant de dormir. S'il dormait cette nuit.`.trim(),
};

export default lore;
