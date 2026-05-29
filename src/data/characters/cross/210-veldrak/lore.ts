import type { PersonnageLoreComplet } from '../../../lore-types';

const veldrak: PersonnageLoreComplet = {
  id: 210,
  nom: 'Veldrak',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Parti de l\'Acier',

  apparence: {
    taille_corpulence: 'Pyrien de 39 ans, militant — corpulence de quelqu\'un dont les convictions alimentent le corps autant que la nourriture.',
    peau: 'Rouge-ardente avec des intégrations acier qui marquent son appartenance au Parti de l\'Acier comme une déclaration physique.',
    yeux: 'Orangés avec des éclats argentés forts — son Acier est aussi affirmé que son Feu.',
    vetements: 'Tenue du Parti de l\'Acier avec des éléments Pyriens intégrés — il représente l\'alliance qu\'il défend dans son apparence.',
    signes_particuliers: 'Il croit que seule l\'alliance Feu/Acier peut sauver Varkhôl — une alliance entre les Pyriens et les Chthoniens. Il recrute des Chthoniens pour cette vision. Son propre double élément est sa démonstration vivante.',
  },

  psychologie: {
    dominante: 'Militant Pyrien du Parti de l\'Acier dans Varkhôl. Son double élément Feu/Acier le place naturellement dans une position de pont entre Pyriens et Chthoniens. Il a transformé cette position en idéologie politique : l\'alliance des deux éléments est nécessaire à la survie de Varkhôl face à l\'Empire et aux autres pressions.',
    mecanisme_de_defense: 'La démonstration vivante. Il est l\'argument qu\'il défend — un Pyrien qui porte de l\'Acier, un pont entre les deux éléments. Sa propre existence légitime sa position.',
    contradiction_interne: 'Son idéologie d\'alliance Feu/Acier est sincère — mais les Chthoniens qu\'il recrute ne viennent pas tous pour les mêmes raisons. Certains voient l\'alliance comme un moyen d\'accéder à des ressources Pyrien. La vision idéologique de Veldrak et les motivations pratiques de ses recrues ne s\'alignent pas toujours.',
    rapport_aux_autres: 'Thryss (4) est dans son réseau — le leader Pyrien dont il cherche la validation pour son idéologie d\'alliance. Skarith (9) est dans son réseau — un autre Pyrien dont l\'appui rendrait l\'alliance plus crédible militairement.',
    vision_du_monde: 'Varkhôl ne peut pas tenir seul contre les pressions qui s\'exercent. Les Pyriens ont le Feu. Les Chthoniens ont l\'Acier. Ensemble, ils ont quelque chose que l\'Empire ne peut pas facilement contenir.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément comme identité',
      contenu: 'Né à Varkhôl avec un double élément Feu/Acier. À 20 ans, il avait compris que sa nature mixte était vue comme une curiosité par les Pyriens purs et les Chthoniens purs. Il avait décidé d\'en faire une position politique plutôt qu\'une marginalité.',
    },
    arrivee: {
      titre: 'Le Parti de l\'Acier',
      contenu: 'Il avait rejoint le Parti de l\'Acier à 25 ans — un mouvement qui reconnaissait la valeur de l\'élément Acier dans la politique de Varkhôl. Il y avait trouvé un espace pour développer son idéologie d\'alliance Feu/Acier.',
    },
    premier_conflit: {
      titre: 'Le Chthonien sceptique',
      contenu: 'Un Chthonien potentiellement recruté lui avait demandé ce que les Pyriens apportaient aux Chthoniens — pas ce que les Chthoniens apportaient aux Pyriens. La question avait exposé un déséquilibre dans son discours. Il avait révisé son argumentaire.',
    },
    revelation: {
      titre: 'L\'alliance comme symétrie',
      contenu: 'Il avait compris que son argument d\'alliance fonctionnait seulement si les deux côtés y gagnaient quelque chose de réel. Il avait développé un argument de réciprocité. L\'idéologie était plus cohérente. Les recrutements étaient plus difficiles.',
    },
    etat_actuel: {
      titre: 'Le militant',
      contenu: 'Il recrute. Il milite. L\'alliance reste un projet.',
    },
  },

  evenements_narratifs: [
    {
      id: 'veldrak_alliance',
      titre: 'L\'alliance testée',
      description: 'Veldrak milite pour une alliance Feu/Acier à Varkhôl. Si une crise éclate — une confrontation avec l\'Empire, une rupture interne — les Chthoniens qu\'il a recrutés devront décider si leur alliance avec les Pyriens tient sous pression ou si leurs motivations pratiques priment sur l\'idéologie.',
      personnages_impliques: [4, 9],
      declencheur: 'Une crise forçant les membres de l\'alliance Feu/Acier à choisir entre l\'alliance et leurs intérêts immédiats',
      consequence: 'L\'alliance de Veldrak testée — et les motivations réelles de ses recrues exposées',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Militant du Parti de l\'Acier à Varkhôl avec double élément Feu/Acier. Croit que seule l\'alliance Feu/Acier peut sauver Varkhôl. Recrute des Chthoniens. Sa propre nature est sa démonstration.',

  relations: [
    { id: 4, nom: 'Thryss', type: 'contact', note: 'Leader Pyrien dont il cherche la validation pour l\'idéologie d\'alliance.' },
    { id: 9, nom: 'Skarith', type: 'contact', note: 'Pyrien dont l\'appui renforcerait l\'alliance militairement.' },
  ],

  combat: {
    sorts: [
      'Poing d\'acier ardent (Feu/Acier) — frappe combinée chaleur et impact métallique — attaque signature',
      'Bouclier de l\'alliance (Acier) — défense démonstrative — protection et argumentaire simultanés',
    ],
  },

  image_prompts: [
    {
      id: 'veldrak_discours',
      description: 'Veldrak devant un groupe mixte de Pyriens et de Chthoniens à Varkhôl — un Pyrien de 39 ans dont les mains montrent alternativement du Feu et de l\'Acier pour illustrer son argument. Il est l\'argument qu\'il défend. Son audience est partiellement convaincue, partiellement sceptique.',
      style: 'réaliste Pyrien militant double élément, Varkhôl, Parti de l\'Acier, recrutement Chthonien, alliance Feu/Acier comme idéologie',
    },
  ],

  lore_long: `Veldrak milite pour une alliance Feu/Acier dans Varkhôl. Son double élément est sa démonstration vivante — un Pyrien qui porte de l'Acier.

Il recrute des Chthoniens pour cette vision. Les motivations pratiques de ses recrues et son idéologie ne s'alignent pas toujours.

L'alliance reste un projet. La prochaine crise révèlera si elle tient sous pression.`,
};

export default veldrak;
