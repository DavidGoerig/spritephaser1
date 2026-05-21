import type { PersonnageLoreComplet } from '../../../lore-types';

const iskravelis: PersonnageLoreComplet = {
  id: 349,
  nom: 'Iskravelis',
  element: 'Glace',
  element2: 'Spectre',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Compacte, avec une capacité à se rendre invisible dans un espace — pas une invisibilité spectrale, une invisibilité comportementale. Elle ne prend pas de place qu\'elle n\'a pas besoin.',
    peau: 'Blanc Givrin avec des marques de gel cicatrisées aux mains — les zones de contact lors des passages à travers les zones de gel vif les plus intenses. Ces marques ne guérissent plus complètement.',
    yeux: 'Gris très pâle, presque blancs. Dans les zones glacées denses, ils captent une luminosité réfléchie qui les fait sembler légèrement brillants — une adaptation à la navigation dans des environnements de glace à faible lumière.',
    vetements: 'Tenue de traversée minimale — le moins d\'équipement possible pour faciliter les transitions entre glace physique et couche spectrale. Elle a calculé que chaque kilo supplémentaire augmentait le temps de traversée de 4 minutes. Elle a réduit.',
    signes_particuliers: 'Elle calcule toujours le temps de traversée avant de partir et arrive dans la marge calculée à moins de 10 minutes. Cette régularité est une forme de signature — ceux qui la connaissent savent exactement quand elle arrivera.',
  },

  psychologie: {
    dominante: 'Passage de personnes et de messages à travers les zones glacées de Crysalme via des routes spectrales que l\'Empire ignore. Ces routes utilisent la couche spectrale de la glace — accessible à ceux qui peuvent naviguer les deux couches — comme chemin alternatif aux passages physiques surveillés.',
    mecanisme_de_defense: 'La route comme seul actif. Ses routes sont inconnues. Tant qu\'elles le restent, elle est utile. Si une route est compromise, elle en développe une autre. Les routes ne sont pas la résistance — elles sont l\'infrastructure de la résistance.',
    contradiction_interne: 'Elle ne sait pas ce que toutes les personnes qu\'elle fait passer transportent. Elle a posé des conditions minimales — pas d\'armes offensives, pas de personnes recherchées pour des crimes violents. Ces conditions sont vérifiées par Thyrkra (168) avant qu\'il lui confie des passages. Elle fait confiance à sa vérification. Cette confiance est structurelle — elle n\'a pas d\'autre moyen de vérifier.',
    rapport_aux_autres: 'Thyrkra (168) est son contact Dissident — il valide les passages et les personnes avant de les lui confier. Velath (49) est un passeur Dissident d\'une autre région avec qui elle a comparé des méthodes — une collaboration de praticiens.',
    vision_du_monde: 'Crysalme est coupée en zones par le gel et la surveillance impériale. Ces coupures empêchent des personnes de se déplacer librement. Elle fournit des alternatives aux coupures.',
  },

  histoire: {
    enfance: {
      titre: 'La première traversée dans la couche spectrale',
      contenu: 'À 15 ans, elle avait découvert accidentellement qu\'elle pouvait naviguer la couche spectrale de la glace — un espace entre la surface physique et la présence spectrale de la glace ancienne. Elle y était restée 20 minutes avant de comprendre comment en sortir. Elle y était retournée le lendemain.',
    },
    arrivee: {
      titre: 'Le réseau Dissident',
      contenu: 'À 22 ans, Thyrkra (168) l\'avait contactée via une chaîne d\'intermédiaires. Le réseau avait besoin d\'un passeur qui pouvait franchir des zones de gel vif inaccessibles physiquement. Elle avait demandé des conditions sur les passages. Thyrkra avait accepté les conditions.',
    },
    premier_conflit: {
      titre: 'Le passage refusé',
      contenu: 'À 27 ans, Thyrkra lui avait proposé un passage dont le profil ne correspondait pas à ses conditions — une personne dont les antécédents étaient vagues de façon suspecte. Elle avait refusé. Thyrkra avait refusé le passage à son tour. Elle avait noté que Thyrkra avait soutenu son refus sans pression.',
    },
    revelation: {
      titre: 'La comparaison avec Velath',
      contenu: 'Velath (49) lui avait partagé ses méthodes de passage à travers des zones différentes de Crysalme — des méthodes plus physiques que les siennes. La comparaison avait été instructive dans les deux sens. Il avait dit que sa méthode spectrale avait un avantage qu\'il ne pouvait pas répliquer : les traces dans la couche spectrale se dissipent plus vite que les traces physiques.',
    },
    etat_actuel: {
      titre: 'Les routes actuelles',
      contenu: 'Elle maintient 6 routes actives à travers les zones glacées de Crysalme. Deux routes sont en cours de reconsolidation — des changements récents dans les zones spectrales de la glace ont rendu des sections instables. Elle a effectué 3 passages ce mois, 2 prévus pour le suivant. Thyrkra lui a dit que la "fenêtre de 18 mois" va augmenter la demande.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskravelis_routes_instables',
      titre: 'Les sections instables',
      description: 'Deux de ses 6 routes ont des sections instables suite à des changements dans les zones spectrales de la glace. Ces changements pourraient être liés aux activités dans le Champ Gelé — Velskravel (348) mène des études qui perturbent partiellement les présences spectrales. Si les perturbations s\'étendent aux zones qu\'elle utilise comme routes, elle devra recalculer.',
      personnages_impliques: [168, 348],
      declencheur: 'Instabilité dans les zones spectrales de la glace affectant deux routes',
      consequence: 'Reconsolidation en cours — cause possible liée aux activités de Velskravel dans le Champ',
    },
    {
      id: 'iskravelis_fenetre_demande',
      titre: 'La demande de la fenêtre',
      description: 'Thyrkra (168) lui a dit que la "fenêtre de 18 mois" va augmenter la demande de passages — si le dégel approche, plus de personnes voudront se repositionner avant que les zones physiques deviennent accessibles. Cette augmentation de demande sur des routes partiellement instables crée un risque opérationnel qu\'elle doit gérer.',
      personnages_impliques: [168, 49],
      declencheur: 'Information de Thyrkra sur l\'augmentation attendue de la demande pendant la fenêtre',
      consequence: 'Demande en hausse sur routes instables — besoin de reconsolidation avant la fenêtre',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Passeuse spectrale dans les zones glacées de Crysalme. Ses routes utilisent la couche spectrale de la glace — inconnues de l\'Empire. Deux routes instables à reconsolider avant que la demande augmente avec la fenêtre de 18 mois.',

  relations: [
    { id: 168, nom: 'Thyrkra', type: 'allié', note: 'Contact Dissident. Valide les passages et les profils. A soutenu son refus sans pression. Signale l\'augmentation de demande prévue.' },
    { id: 49, nom: 'Velath', type: 'allié', note: 'Passeur d\'une autre région. Partage de méthodes. A noté l\'avantage des traces spectrales sur les traces physiques.' },
  ],

  combat: {
    sorts: [
      'Traversée de glace (Glace + Spectre) — passage à travers une zone de gel physique via la couche spectrale — mobilité dans des environnements normalement bloquants',
      'Gel spectral (Glace) — cristallisation rapide d\'une zone d\'eau ou d\'humidité — obstacle ou plateforme',
      'Projection fantôme (Spectre) — envoi d\'une présence spectrale dans une zone — reconnaissance avant traversée',
    ],
  },

  image_prompts: [
    {
      id: 'iskravelis_traversee_spectrale',
      description: 'Iskravelis à mi-traversée d\'un mur de glace épais — sa silhouette est à moitié dans la couche physique, à moitié dans la couche spectrale. La glace autour d\'elle est légèrement translucide à l\'endroit où elle passe. Elle regarde devant elle. Elle ne regarde pas derrière.',
      style: 'réaliste passage spectral dans la glace, dualité physique/spectrale, Crysalme zones de gel vif',
    },
  ],

  lore_long: `Iskravelis fait passer des personnes et des messages à travers les zones glacées de Crysalme via des routes spectrales dans la couche spectrale de la glace — routes inconnues de l'Empire.

6 routes actives. 2 avec des sections instables — changements dans les zones spectrales de la glace, peut-être liés aux activités de Velskravel (348) dans le Champ.

Thyrkra (168) dit que la "fenêtre de 18 mois" va augmenter la demande. Elle doit reconsolider les routes instables avant que la demande arrive.

Elle ne sait pas toujours ce que les personnes transportent. Thyrkra vérifie les profils. Elle fait confiance à sa vérification. C'est structurel.`,
};

export default iskravelis;
