import type { PersonnageLoreComplet } from '../../../lore-types';

const kessravel: PersonnageLoreComplet = {
  id: 288,
  nom: 'Kessravel',
  element: 'Plante',
  element2: 'Poison',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Moyen, méthodique dans ses mouvements. Il ne déplace rien sans raison — économie de gestes qui vient de l\'observation scientifique.',
    peau: 'Brun Sylvan avec des stries lilas légères aux avant-bras — le Poison qui remonte au travail prolongé.',
    yeux: 'Vert-noisette avec une habitude de noter des détails sans les commenter immédiatement.',
    vetements: 'Tenue de chercheur de terrain avec des protections multiples — gants, masque respiratoire roulé au col, lunettes protectrices. Il est équipé pour le contact avec des agents fongiques dangereux.',
    signes_particuliers: 'Il prend des notes pendant les conversations — une habitude de chercheur qui irrite certaines personnes. Il dit que noter n\'est pas enregistrer — c\'est différent.',
  },

  psychologie: {
    dominante: 'Curiosité scientifique appliquée à un problème qui n\'a pas encore de réponse : comment la zone fongique affecte-t-elle les espèces végétales sylvanes ?',
    mecanisme_de_defense: 'Le cadrage scientifique. Quand les implications éthiques de son travail deviennent difficiles, il revient aux données.',
    contradiction_interne: 'Ses recherches sur l\'interaction zone fongique/espèces sylvanes produisent des données utiles pour comprendre — et potentiellement contrôler — cette interaction. La Convergence veut ces données pour ses propres objectifs. Il ne veut pas que ses objectifs et les leurs soient la même chose.',
    rapport_aux_autres: 'Graveth (43) est son contact Convergence — celui qui lui a proposé le financement et qui recueille ses rapports. Aelvyn (119) travaille sur des aspects botaniques complémentaires du côté Conservateur, sans se douter que Kessravel existe.',
    vision_du_monde: 'La zone fongique et les espèces sylvanes coexistent depuis des siècles dans des zones de transition. Quelqu\'un doit comprendre cette coexistence systématiquement. C\'est lui qui le fait. La question de qui finance ça est secondaire.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant de la lisière',
      contenu: 'Né à la lisière de Sylvera, là où la forêt commence à donner sur les zones transitionnelles vers Ormn-Dur. Les premières plantes qu\'il avait étudiées poussaient dans les deux milieux — ni entièrement sylvanes ni entièrement chthoniennes. Cette zone intermédiaire avait façonné sa curiosité.',
    },
    arrivee: {
      titre: 'Le financement Convergence',
      contenu: 'À 30 ans, après 5 ans de recherches sans financement sur les espèces de lisière, Graveth l\'avait approché avec une offre. Ressources, accès, protection pour les zones de terrain difficile. En échange : des rapports réguliers sur ses découvertes. Il avait accepté parce que sa recherche en avait besoin. Il savait qu\'il y aurait une friction sur les usages à un moment donné.',
    },
    premier_conflit: {
      titre: 'Le rapport qui manquait',
      contenu: 'Il y a 6 mois, il avait découvert que les spores fongiques modifiaient légèrement les mécanismes d\'absorption racinaire de certaines espèces sylvanes — une adaptation qui rendait ces espèces partiellement résistantes à l\'exposition fongique prolongée. Il avait choisi de ne pas mettre cette découverte dans son rapport immédiat — il voulait comprendre le mécanisme avant de le transmettre. Graveth lui avait demandé si quelque chose manquait. Il avait dit que c\'était en cours.',
    },
    revelation: {
      titre: 'L\'adaptation documentée',
      contenu: 'Après 4 mois de travail, il avait documenté le mécanisme d\'adaptation racinaire complet. C\'était une découverte significative — elle impliquait que certaines espèces sylvanes étaient capables d\'une forme d\'immunité acquise à l\'exposition fongique. Il avait transmis le rapport à Graveth. Il ne savait pas encore ce que Graveth en ferait.',
    },
    etat_actuel: {
      titre: 'La question du rapport',
      contenu: 'Il attend de voir ce que Graveth fait de la découverte sur l\'adaptation racinaire. Selon la réponse, il décidera ce qu\'il garde pour lui dans les prochains rapports. Ce n\'est pas encore de la résistance — c\'est de l\'évaluation en cours.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kessravel_adaptation_racinaire',
      titre: 'L\'immunité acquise',
      description: 'Certaines espèces sylvanes des zones de transition ont développé une adaptation racinaire partielle à l\'exposition fongique prolongée. C\'est une découverte significative — elle implique une évolution en cours dans les zones de lisière. Il l\'a transmise à Graveth. Si la Convergence utilise ça pour le Protocole ou pour le Drain, la question de sa complicité se posera.',
      personnages_impliques: [43],
      declencheur: 'Découverte sur les mécanismes d\'adaptation espèces sylvanes/zone fongique',
      consequence: 'Données transmises — usage par Graveth inconnu et potentiellement problématique',
    },
    {
      id: 'kessravel_aelvyn_parallele',
      titre: 'Le travail parallèle',
      description: 'Aelvyn (119) travaille sur la reconstruction du réseau racinaire perdu — un angle botanique complémentaire au sien. Leurs recherches se complèteraient. Aelvyn est Conservateur. Lui est financé par la Convergence. Ils ne peuvent pas collaborer sans que cette affiliation soit un problème.',
      personnages_impliques: [119],
      declencheur: 'Existence de recherches parallèles complémentaires',
      consequence: 'Opportunité de collaboration non réalisable à cause des affiliations contradictoires',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Chercheur dont les découvertes intéressent la Convergence. La question de ce que Graveth fait de ses rapports définira ses prochaines décisions.',

  relations: [
    { id: 43, nom: 'Graveth', type: 'allié', note: 'Financeur et destinataire de ses rapports. La relation est fonctionnelle mais sous surveillance éthique de sa part.' },
    { id: 119, nom: 'Aelvyn', type: 'contact_nécessaire', note: 'Recherches complémentaires aux siennes. Collaboration impossible à cause des affiliations.' },
  ],

  combat: {
    sorts: [
      'Spores toxiques (Poison) — libération de spores fongiques adaptées — effet respiratoire progressif',
      'Racines défensives (Plante) — activation de systèmes racinaires dormants pour immobiliser',
      'Analyse de terrain (Plante) — lecture rapide de la composition biologique d\'une zone — informations de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'kessravel_terrain',
      description: 'Kessravel en zone de transition, masque respiratoire au cou, en train de prélever un échantillon racinaire. Il note quelque chose. Son expression est celle d\'un homme concentré sur un problème scientifique intéressant — ni inquiet, ni indifférent à ce qui l\'entoure.',
      style: 'réaliste de lisière, lumière de zone de transition, équipement de terrain, concentration scientifique',
    },
  ],

  lore_long: `Kessravel a découvert que certaines espèces sylvanes des zones de transition développent une adaptation partielle à l'exposition fongique prolongée.

Il a transmis cette découverte à Graveth. Il attend de voir ce qu'il en fait.

La Convergence le finance depuis 8 ans. Sans ce financement, ses recherches n'auraient pas les ressources pour les zones de terrain difficile. Il a accepté l'échange en sachant que la friction sur les usages viendrait à un moment donné.

Il a retenu la découverte sur l'adaptation racinaire 4 mois avant de la transmettre — il voulait comprendre le mécanisme complètement. Graveth lui a demandé si quelque chose manquait. Il a dit que c'était en cours. C'était techniquement vrai.

Aelvyn travaille sur la reconstruction du réseau racinaire perdu — un angle complémentaire au sien. Leurs recherches se compléteraient bien. Aelvyn est Conservateur. Il est financé par la Convergence. Cette collaboration n'est pas possible.

Il attend de voir ce que Graveth fait du rapport. La réponse lui dira ce qu'il garde dans les suivants.`,
};

export default kessravel;
