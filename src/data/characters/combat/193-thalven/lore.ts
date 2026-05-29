import type { PersonnageLoreComplet } from '../../../lore-types';

const thalven: PersonnageLoreComplet = {
  id: 193,
  nom: 'Thalven',
  element: 'Combat',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Homme-Lien de 42 ans, officier de sécurité — corpulence de combattant vétéran, maintien d\'un professionnel qui a décidé que la discipline était sa protection.',
    peau: 'Ton méditerranéen avec des cicatrices de service — 10 ans d\'incidents de sécurité à Virex.',
    yeux: 'Gris avec une qualité de quelqu\'un dont la loyauté est divisée et qui sait que c\'est dangereux.',
    vetements: 'Uniforme de sécurité de Virex — tenue officielle Confédérée avec des marques de service.',
    signes_particuliers: 'Sa loyauté est divisée entre la Confédération et la protection personnelle des enfants de Virex dont il a connu les familles depuis 10 ans. Cette division est une vulnérabilité qu\'il n\'a pas résolue.',
  },

  psychologie: {
    dominante: 'Officier de sécurité de Virex depuis 10 ans pour la Confédération. Il a connu les familles des 39 enfants de Virex — il les a vus grandir. Sa mission officielle est la sécurité générale de Virex. Quand sa mission officielle et la protection de ces enfants spécifiques entrent en conflit, il n\'a pas de réponse préparée.',
    mecanisme_de_defense: 'La loyauté institutionnelle comme cadre. Tant qu\'aucune décision directe n\'est exigée, il peut maintenir les deux loyautés simultanément. Il évite les situations qui forceraient un choix.',
    contradiction_interne: 'Sa loyauté institutionnelle à la Confédération et sa loyauté personnelle aux familles des enfants de Virex sont en tension croissante. La Confédération pourrait collaborer avec l\'Empire sur l\'identification des Élus. Ce moment approche.',
    rapport_aux_autres: 'Thyven (62) est dans son réseau — l\'administration impériale avec qui il doit collaborer officiellement. Carevorn (258) est dans son réseau — un contact qui comprend les divisions de loyauté dans les structures de sécurité.',
    vision_du_monde: 'La sécurité d\'une communauté nécessite des institutions stables. Les institutions ont des limites. Quand une institution franchit ces limites, un officier de sécurité doit décider si son service va à l\'institution ou à la communauté qu\'elle est censée protéger.',
  },

  histoire: {
    enfance: {
      titre: 'La sécurité',
      contenu: 'Formation de sécurité dans l\'Isthme. Il avait commencé à travailler pour la Confédération à 25 ans — une carrière dans la protection des communautés, pas dans la politique.',
    },
    arrivee: {
      titre: 'Virex',
      contenu: 'Assigné à Virex à 32 ans. Il avait développé des relations avec les résidents en 10 ans — une présence de terrain qui lui avait donné une compréhension du tissu social de la communauté, incluant les familles des enfants Élus.',
    },
    premier_conflit: {
      titre: 'L\'identification obligatoire',
      contenu: 'L\'Empire avait imposé l\'enregistrement obligatoire des Élus. Sa mission officielle incluait maintenant le signalement des Élus non-enregistrés. Il avait regardé la liste des noms qu\'il connaissait. Il avait transmis une liste incomplète. Il avait dit que c\'était une erreur administrative.',
    },
    revelation: {
      titre: 'La loyauté divisée',
      contenu: 'Il avait compris que sa liste incomplète était une décision, pas une erreur. Et que cette décision était une trahison de son institution. Il vivait maintenant avec les deux.',
    },
    etat_actuel: {
      titre: 'L\'officier divisé',
      contenu: 'Il assure la sécurité. Il transmet des listes incomplètes. Il ne sait pas combien de temps il peut maintenir les deux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalven_loyaute',
      titre: 'La décision directe',
      description: 'Thalven a évité jusqu\'ici les situations qui forçaient un choix direct entre sa loyauté institutionnelle et la protection des enfants de Virex. Si Thyven (62) lui demande d\'identifier personnellement un enfant de Virex qu\'il connaît, l\'évitement devient impossible. Il devra choisir.',
      personnages_impliques: [62, 258],
      declencheur: 'Thyven lui donnant un ordre direct d\'identifier un enfant de Virex spécifique qu\'il connaît',
      consequence: 'Thalven choisissant — et les conséquences de ce choix sur sa position et sur les enfants qu\'il protège',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Officier de sécurité de Virex depuis 10 ans. Loyauté divisée entre la Confédération et la protection personnelle des enfants de Virex qu\'il a connus. N\'a pas encore été forcé à choisir.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administration impériale avec qui il collabore officiellement — et dont les ordres pourraient le forcer à choisir.' },
    { id: 258, nom: 'Carevorn', type: 'contact', note: 'Contact comprenant les divisions de loyauté dans les structures de sécurité.' },
  ],

  combat: {
    sorts: [
      'Neutralisation (Combat) — immobilisation sans dommage permanent — sécurité',
      'Frappe de service (Combat) — attaque directe de combattant professionnel — précision',
    ],
  },

  image_prompts: [
    {
      id: 'thalven_securite',
      description: 'Thalven en patrouille dans un quartier de Virex — un Homme-Lien de 42 ans en uniforme de sécurité Confédérée qui passe devant la maison d\'une famille dont l\'enfant est un Élu non-enregistré. Il les connaît. Il continue sa patrouille. Son expression est de quelqu\'un qui a fait un choix sans avoir décidé de le faire.',
      style: 'réaliste Homme-Lien officier de sécurité, Virex, loyauté divisée, protection personnelle vs institution, tension non-résolue',
    },
  ],

  lore_long: `Thalven est officier de sécurité de Virex depuis 10 ans. Il a connu les familles des enfants de Virex — il les a vus grandir.

Il a transmis des listes d'enregistrement incomplètes. Il a dit que c'était des erreurs administratives. C'était des choix.

Sa loyauté est divisée entre la Confédération et ces familles. Il a évité jusqu'ici les situations qui forçaient un choix direct. Cette situation arrive.`,
};

export default thalven;
