import type { PersonnageLoreComplet } from '../../../lore-types';

const selara: PersonnageLoreComplet = {
  id: 96,
  nom: 'Selara',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 78 ans, courbée par l\'âge mais avec une lucidité dans les yeux. Elle se déplace lentement. Elle se souvient vite.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse tenue — l\'élément Eau d\'une vieille qui ne l\'a jamais perdu, mais qui ne l\'amplifie plus.',
    yeux: 'Bleus profonds avec une qualité de quelqu\'un qui a vu plusieurs versions d\'un même lieu.',
    vetements: 'Tenue sobre de vieille citadine — confortable, usée avec dignité.',
    signes_particuliers: 'Elle était apprentie de Lyraen — une figure qui n\'existe plus. Elle se souvient du vent naturel avec Lysara (14). Elle est la dernière à avoir cette mémoire directe parmi les vivants ordinaires.',
  },

  psychologie: {
    dominante: 'Ancienne apprentie de Lyraen, maintenant âgée de 78 ans. Elle se souvient de Thalassyr avant le Silence des Vents — le vent naturel, la façon dont la mer répondait à ce vent, la différence que ça faisait sur la vie quotidienne. Personne ne lui demande.',
    mecanisme_de_defense: 'La mémoire comme présent. Elle vit dans ses souvenirs sans les confondre avec le présent — mais ils restent plus vivants que ce qui l\'entoure.',
    contradiction_interne: 'Elle a une mémoire précieuse que personne ne cherche à recueillir. Le Silence des Vents a effacé le contexte dans lequel sa mémoire aurait de la valeur pour la plupart des gens.',
    rapport_aux_autres: 'Lysara (14) est une figure qu\'elle a connue — elles avaient partagé l\'expérience directe du vent naturel. Lysara est morte ou partie. Selara reste.',
    vision_du_monde: 'Le vent naturel avait une qualité que le réseau artificiel n\'a pas. Ce n\'est pas de la nostalgie — c\'est de l\'observation. Les deux choses sont différentes et elle peut dire en quoi.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage',
      contenu: 'Apprentie de Lyraen à 15 ans — une érudie Néréide qui étudiait les patterns de vent à Thalassyr. L\'apprentissage avait duré 10 ans. Elle avait appris à sentir le vent comme un système.',
    },
    arrivee: {
      titre: 'Le Silence',
      contenu: 'Le Silence des Vents s\'était produit quand elle avait 35 ans. Elle se souvenait du jour exact. La transition entre les vents naturels et le réseau artificiel d\'Orven avait pris 3 ans. Elle avait observé chaque phase.',
    },
    premier_conflit: {
      titre: 'Après le Silence',
      contenu: 'Elle avait essayé de transmettre ses observations sur la différence entre les systèmes. Personne n\'avait été vraiment intéressé — le réseau artificiel fonctionnait, le naturel ne fonctionnait plus. La question de la différence semblait théorique.',
    },
    revelation: {
      titre: 'La solitude',
      contenu: 'Avec les années, les gens qui avaient connu le vent naturel disparaissaient. Elle était progressivement devenue la dernière personne de sa communauté avec cette mémoire directe.',
    },
    etat_actuel: {
      titre: 'La mémoire',
      contenu: 'Elle a 78 ans. Sa mémoire est précise. Sa capacité à la transmettre dépend de qui veut l\'entendre. Personne ne lui a demandé depuis longtemps.',
    },
  },

  evenements_narratifs: [
    {
      id: 'selara_memoire',
      titre: 'La dernière mémoire directe',
      description: 'Selara est la dernière personne vivante à Thalassyr avec une mémoire directe du vent naturel pré-Silence. Si quelqu\'un — Talvyn (23), Thariel (18), quelqu\'un qui cherche à comprendre ce qui a changé — lui demandait, elle pourrait donner une comparaison directe entre les deux systèmes. Cette mémoire disparaît avec elle.',
      personnages_impliques: [14],
      declencheur: 'Quelqu\'un cherchant un témoignage direct sur le vent naturel pré-Silence',
      consequence: 'Accès à une comparaison directe entre les deux systèmes — ou perte de cette mémoire sans qu\'elle ait été recueillie',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Dernière mémoire vivante du vent naturel à Thalassyr. Ancienne apprentie de Lyraen. Contemporaine de Lysara (14). Personne ne lui demande.',

  relations: [
    { id: 14, nom: 'Lysara', type: 'contact', note: 'Contemporaine. Ont partagé l\'expérience directe du vent naturel.' },
  ],

  combat: {
    sorts: [
      'Flux d\'eau (Eau) — usage utilitaire — pas de combat',
    ],
  },

  image_prompts: [
    {
      id: 'selara_memoire',
      description: 'Selara sur un quai de Thalassyr — une vieille Néréide de 78 ans regardant le réseau artificiel de vent. Son expression est de quelqu\'un qui voit deux choses à la fois : ce qui est et ce qui était. Personne autour d\'elle ne demande la différence.',
      style: 'réaliste Néréide ancienne, quai de Thalassyr, mémoire du vent naturel, réseau artificiel présent, témoin oublié',
    },
  ],

  lore_long: `Selara a 78 ans. Elle était apprentie de Lyraen avant le Silence des Vents.

Elle est la dernière personne à Thalassyr avec une mémoire directe du vent naturel pré-Silence. Elle pourrait décrire la différence précisément.

Personne ne lui demande depuis longtemps. Sa mémoire disparaît avec elle.`,
};

export default selara;
