import type { PersonnageLoreComplet } from '../../../lore-types';

const velara: PersonnageLoreComplet = {
  id: 81,
  nom: 'Velara',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 31 ans, mince avec les mouvements précis d\'une diplomate de bas rang — efficace dans un espace bureaucratique. Elle sait filtrer l\'information par entraînement, pas par calcul.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse aux doigts — l\'élément Eau d\'une femme qui travaille avec les documents et les communications.',
    yeux: 'Bleus avec une qualité d\'attention aux détails — elle lit les sous-textes par formation.',
    vetements: 'Tenue confédérale de bas rang — fonctionnelle, correcte sans être ostentatoire. Elle est dans la catégorie de ceux qui présentent les dossiers, pas de ceux qui les lisent en entier.',
    signes_particuliers: 'Elle filtre les communications de la Confédération à Thalassyr. Elle ne sait pas que Shaleth fait la même chose à un niveau plus élevé — et que leurs filtres se superposent.',
  },

  psychologie: {
    dominante: 'Diplomate de bas rang qui filtre les communications officielles de la Confédération à Thalassyr. Son travail consiste à trier ce qui remonte. Elle le fait bien et ne questionne pas le filtre au-dessus d\'elle.',
    mecanisme_de_defense: 'Le rôle limité comme protection. Elle fait son travail. Ce qui passe au-dessus d\'elle n\'est pas sa responsabilité.',
    contradiction_interne: 'Elle filtre des communications dont certaines concernent des situations qu\'elle a vues directement. Ses propres observations ne remontent pas — elles correspondent à ce qu\'elle filtre vers le bas.',
    rapport_aux_autres: 'Shaleth (16) est son supérieur hiérarchique indirect — ils opèrent dans la même structure sans se voir souvent. Le Silence des Vents est le contexte quotidien de son travail.',
    vision_du_monde: 'La Confédération a des niveaux. Chaque niveau fait son travail. Le résultat global est censé être cohérent. Elle croit ça.',
  },

  histoire: {
    enfance: {
      titre: 'La bureaucratie',
      contenu: 'Formée dans les services diplomatiques de la Confédération depuis l\'âge de 20 ans. Le filtrage des communications est sa spécialité — une compétence valorisée dans une structure où l\'information est une ressource.',
    },
    arrivee: {
      titre: 'Thalassyr',
      contenu: 'Affectée à Thalassyr à 28 ans. Le contexte post-Silence des Vents avait multiplié les communications à filtrer. Sa charge de travail avait doublé en 3 ans.',
    },
    premier_conflit: {
      titre: 'Le filtre',
      contenu: 'Elle avait filtré une communication concernant une anomalie qu\'elle avait personnellement observée dans les courants artificiels. La communication avait été classée "non-urgence". Elle avait continué son travail.',
    },
    revelation: {
      titre: 'Shaleth',
      contenu: 'En 3 ans, elle avait compris que Shaleth (16) filtrait les communications au-dessus d\'elle. Ce que cela signifiait pour ce qui remontait réellement — elle n\'y pensait pas directement.',
    },
    etat_actuel: {
      titre: 'Le travail continue',
      contenu: 'Elle filtre. Le flux de communications continue. Le Silence des Vents génère des anomalies que personne ne lit entièrement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velara_filtre',
      titre: 'Deux filtres superposés',
      description: 'Velara et Shaleth (16) filtrent les mêmes communications à des niveaux différents. Si quelqu\'un compare ce que Velara laisse passer avec ce que Shaleth retient, l\'écart entre les deux filtres révèle quelque chose sur ce que Shaleth cache.',
      personnages_impliques: [16],
      declencheur: 'Quelqu\'un comparant les archives de Velara avec les rapports officiels de Shaleth',
      consequence: 'Révélation de l\'écart entre les deux niveaux de filtrage',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Diplomate de bas rang qui filtre les communications de Thalassyr. Ne sait pas que Shaleth fait la même chose plus haut.',

  relations: [
    { id: 16, nom: 'Shaleth', type: 'contact', note: 'Supérieur indirect. Filtre au-dessus d\'elle. Elle ne mesure pas encore l\'écart.' },
  ],

  combat: {
    sorts: [
      'Flux d\'eau (Eau) — manipulation d\'un courant d\'eau — déplacement ou obstacle',
      'Voile aquatique (Eau) — rideau d\'eau — protection visuelle temporaire',
    ],
  },

  image_prompts: [
    {
      id: 'velara_bureau',
      description: 'Velara dans son bureau confédéral à Thalassyr — une Néréide de 31 ans triant des communications. Ses doigts luisent légèrement. Elle classe, filtre, transmet. Elle ne sait pas ce que Shaleth fait au-dessus d\'elle.',
      style: 'réaliste Néréide bureaucrate, bureau confédéral, Thalassyr, filtrage de communications, Silence des Vents',
    },
  ],

  lore_long: `Velara filtre les communications de la Confédération à Thalassyr depuis 3 ans. Elle fait son travail bien.

Elle ne sait pas que Shaleth (16) fait la même chose à un niveau plus élevé — et que leurs filtres se superposent.

L'écart entre ce qu'elle laisse passer et ce que Shaleth retient révèle quelque chose que personne ne compare.`,
};

export default velara;
