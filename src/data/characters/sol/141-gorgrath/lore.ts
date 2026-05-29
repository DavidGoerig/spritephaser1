import type { PersonnageLoreComplet } from '../../../lore-types';

const gorgrath: PersonnageLoreComplet = {
  id: 141,
  nom: 'Gorgrath',
  element: 'Sol',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 58 ans, directeur adjoint — la corpulence d\'une position d\'autorité sans l\'autorité réelle.',
    peau: 'Pierre grise solide avec une qualité de quelqu\'un qui a appris à maintenir une façade stable.',
    yeux: 'Gris avec une qualité de quelqu\'un qui observe des erreurs se commettre et garde ça pour lui.',
    vetements: 'Tenue de directeur adjoint de la Technocratie — formelle, correcte, sans rien qui suggère une opinion sur son supérieur.',
    signes_particuliers: 'Il pense que Thyss (42) fait une erreur sur la gestion de la Fosse Interdite. Il ne l\'a jamais dit directement à Thyss.',
  },

  psychologie: {
    dominante: 'Directeur adjoint sous Thyss (42) à la Technocratie d\'Ormn-Dur. Il pense que la politique de Thyss sur la Fosse Interdite est une erreur — les réductions de sécurité, les décisions budgétaires. Il ne l\'a jamais dit directement. Ce silence est à la fois de la lâcheté et du calcul.',
    mecanisme_de_defense: 'La position institutionnelle comme protection. Tant qu\'il maintient sa position d\'adjoint, il a accès aux décisions sans les responsabilités. Confronter Thyss mettrait sa position en jeu.',
    contradiction_interne: 'Il voit l\'erreur. Il a l\'information. Il a la position pour être entendu. Il se tait. Cette combinaison — voir, savoir, et se taire — est ce qu\'il ne se pardonne pas entièrement.',
    rapport_aux_autres: 'Thyss (42) est son supérieur dont il ne conteste pas les décisions directement. Draven II (40) est une figure institutionnelle avec qui il partage des préoccupations sans les nommer.',
    vision_du_monde: 'La Technocratie prend des décisions collectives. Un adjoint qui conteste son supérieur directement crée une instabilité institutionnelle. Il préfère l\'instabilité différée — plus grande, moins évitable.',
  },

  histoire: {
    enfance: {
      titre: 'La Technocratie',
      contenu: 'Carrière dans la Technocratie d\'Ormn-Dur depuis 30 ans. Il avait progressé régulièrement jusqu\'au poste d\'adjoint — une progression fondée sur la compétence et la discrétion.',
    },
    arrivee: {
      titre: 'Thyss',
      contenu: 'Thyss (42) était arrivé comme directeur il y a 6 ans. Les deux premières années, Gorgrath avait respecté ses décisions. Les deux suivantes, il avait commencé à voir les erreurs. Les deux suivantes, il avait arrêté de les nommer.',
    },
    premier_conflit: {
      titre: 'La réduction de sécurité',
      contenu: 'Quand Thyss avait imposé la réduction des mesures de sécurité autour de la Fosse, Gorgrath avait préparé une note d\'objection. Il l\'avait gardée dans un tiroir. Il ne l\'avait jamais envoyée.',
    },
    revelation: {
      titre: 'La note dans le tiroir',
      contenu: 'Il avait compris que sa note non-envoyée était maintenant une preuve de son désaccord silencieux. Si quelque chose arrivait, il ne pourrait pas dire qu\'il ne savait pas — ni qu\'il avait agi.',
    },
    etat_actuel: {
      titre: 'L\'adjoint silencieux',
      contenu: 'Il observe. Il prépare. Il garde tout dans ses tiroirs. Il attend — il ne sait pas quoi.',
    },
  },

  evenements_narratifs: [
    {
      id: 'gorgrath_note',
      titre: 'La note qui n\'a jamais été envoyée',
      description: 'Gorgrath a une note d\'objection aux réductions de sécurité de Thyss (42) dans un tiroir depuis 2 ans. Si un incident se produit à la Fosse Interdite, cette note devient à la fois sa protection (preuve qu\'il voyait le problème) et sa condamnation (preuve qu\'il ne l\'a pas envoyée). Il devra décider quoi en faire avant ou après l\'incident.',
      personnages_impliques: [42, 40],
      declencheur: 'Incident à la Fosse Interdite, ou quelqu\'un apprenant l\'existence de la note',
      consequence: 'Gorgrath révélant son désaccord silencieux — et sa complicité par inaction',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Directeur adjoint sous Thyss. Voit les erreurs. Ne les a jamais nommées directement. Note d\'objection non-envoyée dans un tiroir.',

  relations: [
    { id: 42, nom: 'Thyss', type: 'contact', note: 'Supérieur hiérarchique. Ses erreurs sont le sujet du silence de Gorgrath.' },
    { id: 40, nom: 'Draven II', type: 'contact', note: 'Préoccupations partagées non-nommées.' },
  ],

  combat: {
    sorts: [
      'Pression tellurique (Sol) — compression du sol — contrôle de zone',
      'Frappe de sol (Sol) — impact souterrain — attaque de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'gorgrath_tiroir',
      description: 'Gorgrath dans son bureau de directeur adjoint à Ormn-Dur — un Chthonien de 58 ans qui regarde un tiroir fermé. La note d\'objection non-envoyée est dedans. Thyss (42) est au bureau d\'à côté. Son expression est de quelqu\'un qui sait qu\'il devrait ouvrir ce tiroir et qui ne le fait pas.',
      style: 'réaliste Chthonien directeur adjoint, Technocratie d\'Ormn-Dur, silence complice, note non-envoyée, Fosse Interdite',
    },
  ],

  lore_long: `Gorgrath est directeur adjoint de la Technocratie d'Ormn-Dur sous Thyss (42). Il pense que Thyss fait une erreur sur la gestion de la Fosse Interdite.

Il a préparé une note d'objection aux réductions de sécurité. Il l'a gardée dans un tiroir. Il ne l'a jamais envoyée.

Si un incident se produit, cette note sera à la fois sa protection et sa condamnation.`,
};

export default gorgrath;
