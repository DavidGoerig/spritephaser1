import type { PersonnageLoreComplet } from '../../../lore-types';

const vashek: PersonnageLoreComplet = {
  id: 182,
  nom: 'Vashek',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Homme-Lien de 55 ans, bureaucrate — corpulence administrative, habituée aux postures de bureau. Il ressemble exactement à ce qu\'il est.',
    peau: 'Ton pâle avec des lunettes de lecture portées en permanence.',
    yeux: 'Gris avec une qualité de quelqu\'un qui a mémorisé beaucoup de noms et les retrouve au moment précis où ils sont utiles.',
    vetements: 'Tenue de fonctionnaire de la Confédération — complète, sobre, indistinguable de mille autres bureaucrates.',
    signes_particuliers: 'Il maintient les vrais registres des 39 enfants de Virex — les noms réels, les adresses réelles, les identifications réelles. Pas les registres officiels que Thyven (62) maintient, qui sont incomplets ou falsifiés.',
  },

  psychologie: {
    dominante: 'Bureaucrate de la Confédération dans l\'Isthme. Il a découvert que les registres officiels des 39 enfants de Virex — les enfants Élus issus d\'une lignée particulière — étaient incomplets ou falsifiés par Thyven (62). Il maintient ses propres registres exacts depuis 8 ans. Personne ne lui a demandé de le faire.',
    mecanisme_de_defense: 'Le devoir administratif. Un bureaucrate qui maintient des registres exacts ne fait que son travail. Si ses registres divergent de ceux de Thyven, la question est de savoir lesquels sont corrects. Les siens le sont.',
    contradiction_interne: 'Il maintient des registres qui pourraient protéger les 39 enfants — ou les exposer, selon qui y accède. Ces registres exacts existent parce qu\'il les a maintenus. Il ne les a pas partagés. Il attend de savoir avec qui les partager.',
    rapport_aux_autres: 'Thyven (62) est un adversaire indirect — ses registres officiels sont ce que Vashek sait être faux. Lysael (63) est une connexion — quelqu\'un qui a besoin des vrais registres pour ses propres recherches sur les enfants de Virex.',
    vision_du_monde: 'Les registres doivent être exacts. Un bureaucrate qui falsifie des registres trahit la fonction même de son rôle. Il ne peut pas empêcher Thyven de falsifier les registres officiels. Il peut maintenir les vrais.',
  },

  histoire: {
    enfance: {
      titre: 'L\'administration',
      contenu: 'Toute sa carrière dans l\'administration de la Confédération à l\'Isthme. Il avait commencé comme copiste et avait progressé vers la gestion des registres civils.',
    },
    arrivee: {
      titre: 'Les registres faux',
      contenu: 'À 47 ans, il avait découvert que les registres officiels des enfants de Virex contenaient des erreurs — des dates incorrectes, des identifications manquantes. En croisant avec d\'autres sources, il avait compris que les erreurs n\'étaient pas accidentelles.',
    },
    premier_conflit: {
      titre: 'La signalisation',
      contenu: 'Il avait tenté de signaler les discordances à sa hiérarchie. Sa hiérarchie lui avait dit que les registres de Thyven faisaient autorité. Il avait compris que signaler ne changerait rien.',
    },
    revelation: {
      titre: 'Les vrais registres',
      contenu: 'Il avait commencé à maintenir ses propres registres — une copie exacte de ce qu\'il pouvait vérifier comme vrai. Pas par opposition directe à Thyven. Par respect pour ce qu\'un registre devait être.',
    },
    etat_actuel: {
      titre: 'Le bureaucrate discret',
      contenu: 'Il maintient ses registres. Personne ne sait encore qu\'ils existent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vashek_registres',
      titre: 'Les vrais noms',
      description: 'Vashek maintient les vrais registres des 39 enfants de Virex. Si Lysael (63) — qui recherche ces enfants — ou un Dissident cherchant à les protéger obtient accès à ces registres, l\'information exacte pourrait changer l\'issue pour des dizaines de personnes. Si l\'Empire ou Thyven (62) apprend que ces registres existent, Vashek est en danger.',
      personnages_impliques: [62, 63],
      declencheur: 'Lysael ou un Dissident apprenant l\'existence des vrais registres de Vashek',
      consequence: 'Vrai registre partagé — et Vashek exposé à la réaction de Thyven',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Bureaucrate maintenant les vrais registres des 39 enfants de Virex contre les registres falsifiés de Thyven (62). Personne ne sait qu\'ils existent.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'adversaire', note: 'Dont les registres officiels falsifiés sont ce que Vashek documente les erreurs.' },
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Qui a besoin des vrais registres pour ses recherches sur les enfants de Virex.' },
  ],

  combat: {
    sorts: [
      'Frappe neutre (Normal) — attaque directe — défense personnelle',
      'Endurance (Normal) — résistance physique — survie prolongée',
    ],
  },

  image_prompts: [
    {
      id: 'vashek_registres',
      description: 'Vashek dans son bureau administratif de l\'Isthme — un Homme-Lien de 55 ans avec deux registres. L\'un est le registre officiel, ouvert sur son bureau, visible. L\'autre est dans un tiroir fermé à clé — ses vrais registres, avec des noms que le registre officiel a masqués ou falsifiés. Il sait lesquels sont corrects.',
      style: 'réaliste Homme-Lien bureaucrate, Isthme, vrais registres vs registres falsifiés, protection d\'information, discrétion administrative',
    },
  ],

  lore_long: `Vashek maintient les vrais registres des 39 enfants de Virex. Les registres officiels de Thyven (62) sont incomplets ou falsifiés.

Il l'a découvert à 47 ans. Il a signalé. Sa hiérarchie lui a dit que les registres de Thyven faisaient autorité. Il a commencé à maintenir les siens.

Personne ne sait encore qu'ils existent. Ils contiennent des informations qui pourraient protéger ou exposer des dizaines de personnes selon qui y accède.`,
};

export default vashek;
