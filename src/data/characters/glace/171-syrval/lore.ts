import type { PersonnageLoreComplet } from '../../../lore-types';

const syrval: PersonnageLoreComplet = {
  id: 171,
  nom: 'Syrval',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Givrine de 44 ans, commerçante — corpulence active, habituée aux négociations et aux déplacements entre Crysalme et l\'extérieur.',
    peau: 'Blanche-cristalline avec des marques d\'exposition aux températures chaudes — son commerce l\'amène régulièrement dans des environnements non-givrins.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui calcule les marges en permanence.',
    vetements: 'Tenue de commerçante pratique — adaptée aux deux environnements, chaude sans être encombrante.',
    signes_particuliers: 'Elle importe des produits chauds dans Crysalme — des épices, des matières organiques non-glacées, des textiles des régions tempérées. Son commerce dépend de la stase politique du Gel Éternel.',
  },

  psychologie: {
    dominante: 'Commerçante Givrine indépendante spécialisée dans l\'importation de produits chauds à Crysalme. Son commerce existe parce que le Gel Éternel maintient Crysalme dans un état d\'isolation qui crée une demande pour ce qu\'elle peut apporter. Toute résolution du Gel changerait son marché.',
    mecanisme_de_defense: 'La neutralité commerciale. Elle vend à tous — Monarchie, Dissidentes, indépendants. Son commerce est apolitique par nécessité économique. La politique changerait ses marges, pas ses valeurs.',
    contradiction_interne: 'Son commerce dépend de la stase du Gel Éternel — mais les produits chauds qu\'elle importe rappellent aux Givrins qu\'un monde sans gel permanent existe. Elle est à la fois bénéficiaire et perturbatrice de l\'équilibre.',
    rapport_aux_autres: 'Thyskra (161) est dans ses contacts — l\'ambassadrice à Asterciel facilite ses passages aux points de contrôle. Le Gel Éternel est son contexte commercial complet.',
    vision_du_monde: 'Les marchés s\'adaptent. Si le Gel changeait, elle trouverait un nouveau commerce. En attendant, elle répond à une demande réelle. Il n\'y a pas de mal à vouloir des épices chaudes quand on vit dans le gel permanent.',
  },

  histoire: {
    enfance: {
      titre: 'Le commerce',
      contenu: 'Famille de commerçants Givrins. Elle avait commencé à voyager entre Crysalme et les régions tempérées à 20 ans — d\'abord pour son père, puis pour son propre compte.',
    },
    arrivee: {
      titre: 'La demande',
      contenu: 'Elle avait identifié une niche : les Givrins voulaient des produits des régions chaudes — des expériences sensorielles différentes du froid permanent. Elle avait construit un réseau d\'approvisionnement.',
    },
    premier_conflit: {
      titre: 'Les taxes de passage',
      contenu: 'La Monarchie avait imposé des taxes sur les produits chauds importés — une décision qui visait à contrôler les influences extérieures. Thyskra (161) l\'avait aidée à naviguer dans les procédures. Ses marges avaient diminué. Elle avait continué.',
    },
    revelation: {
      titre: 'La dépendance au gel',
      contenu: 'Elle avait compris que son commerce existait grâce à l\'isolement de Crysalme. Si les conditions de Crysalme changeaient — si le gel se résolvait — sa niche disparaîtrait. Cette réalisation avait été inconfortable.',
    },
    etat_actuel: {
      titre: 'Le commerce neutre',
      contenu: 'Elle importe. Elle vend. Elle maintient sa neutralité. Les marges sont stables.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrval_marche',
      titre: 'L\'économie du gel',
      description: 'Syrval maintient un commerce qui dépend de l\'isolement de Crysalme. Si quelqu\'un — Thyval (55), un Dissident — lui demande directement si elle préférerait que le Gel Éternel se résolve, sa réponse révèle une contradiction : elle bénéficie de l\'état qu\'elle n\'a pas choisi.',
      personnages_impliques: [161],
      declencheur: 'Quelqu\'un lui posant directement la question sur sa position face à une résolution du Gel',
      consequence: 'Révélation que des acteurs économiques ont intérêt à la stase du Gel — sans être affiliés à la Monarchie',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Commerçante indépendante important des produits chauds dans Crysalme. Son commerce dépend de la stase politique du Gel Éternel. Neutralité absolue par nécessité économique.',

  relations: [
    { id: 161, nom: 'Thyskra', type: 'contact', note: 'Facilite les passages aux points de contrôle pour son commerce.' },
  ],

  combat: {
    sorts: [
      'Frappe commerciale (Glace) — impact rapide — défense personnelle',
      'Barrière marchande (Glace) — formation défensive temporaire — protection de marchandises',
    ],
  },

  image_prompts: [
    {
      id: 'syrval_commerce',
      description: 'Syrval à un marché de Crysalme — une Givrine de 44 ans vendant des épices chaudes à des clients Givrins. Elle tient un paquet de poivre rouge vif — une couleur qui contraste avec le blanc de Crysalme. Ses clients regardent avec une curiosité teintée de quelque chose qui ressemble à de la nostalgie pour un monde qu\'ils n\'ont pas connu.',
      style: 'réaliste Givrine commerçante, Crysalme, produits chauds dans environnement glacé, contraste thermique, commerce neutre',
    },
  ],

  lore_long: `Syrval importe des produits chauds dans Crysalme — des épices, des textiles, des denrées des régions tempérées. Son commerce répond à une demande réelle.

Son commerce dépend de l'isolement de Crysalme. Si le Gel Éternel se résolvait, sa niche disparaîtrait.

Elle vend à tous, indépendamment des factions. Sa neutralité est économique.`,
};

export default syrval;
