import type { PersonnageLoreComplet } from '../../../lore-types';

const velskraeth: PersonnageLoreComplet = {
  id: 335,
  nom: 'Velskraeth',
  element: 'Glace',
  element2: 'Fée',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Grande et précise dans ses mouvements — quelqu\'un dont le geste est calibré depuis des années pour ne pas aggraver ce qu\'il touche.',
    peau: 'Blanc-bleu Givrin avec une légère iridescence aux mains — l\'effet de la magie Fée qui se combine avec la stase glacée. Les mains sont toujours légèrement plus froides que le reste du corps.',
    yeux: 'Bleu très pâle, presque blanc. Ils évaluent en permanence — l\'état d\'un blessé, la progression d\'une stase, la durée restante avant qu\'une préservation ne devienne irréversible.',
    vetements: 'Tenue médicale royale — blanche avec des bords cristallisés. Fonctionnelle avant tout. Elle a retiré les ornements décoratifs il y a longtemps.',
    signes_particuliers: 'Elle parle de ses patients en termes de temps — "il lui reste 4 heures", "la stase tient depuis 3 jours". Le temps est sa ressource principale.',
  },

  psychologie: {
    dominante: 'Préservation des blessés graves en combinant stase glacée et magie Fée. La stase glacée ralentit les fonctions vitales. La magie Fée maintient la cohésion tissulaire pendant la stase. Ensemble, les deux permettent de stabiliser des blessures qui tueraient autrement en heures.',
    mecanisme_de_defense: 'L\'objectif médical comme priorité absolue. Les décisions politiques sur qui soigner ne la concernent pas — elle soigne ce qui lui est amené. Cette neutralité revendiquée est régulièrement mise à l\'épreuve.',
    contradiction_interne: 'Ses techniques de stase prolongée ont été adaptées par la Monarchie pour des usages non médicaux — préservation de prisonniers politiques dans des états de conscience réduite. Elle le sait. Elle n\'a pas fourni la méthode directement pour cet usage. Elle l\'a fournie pour des blessés. L\'adaptation a été faite sans elle.',
    rapport_aux_autres: 'Sylkra (53) est son supérieur hiérarchique à la cour — il coordonne les ressources médicales royales et décide des priorités de soin. Leth (34) est une Fée dont la maîtrise de la magie de cohésion est supérieure à la sienne — une référence technique.',
    vision_du_monde: 'La glace est un conservateur. Ce qu\'elle gèle ne meurt pas — il attend. Elle gèle des gens pour les laisser attendre le soin qui n\'est pas encore disponible.',
  },

  histoire: {
    enfance: {
      titre: 'La première stase',
      contenu: 'À 17 ans, son frère cadet avait été blessé lors d\'une chute dans une zone de glace vive. Elle avait instinctivement appliqué une stase glacée sur la blessure — sans formation, par réflexe. La blessure avait cessé de saigner. Un médecin Givrin avait dit qu\'elle avait fait exactement ce qu\'il fallait. Elle avait compris qu\'elle avait une capacité utile.',
    },
    arrivee: {
      titre: 'L\'intégration médicale royale',
      contenu: 'À 25 ans, Sylkra (53) l\'avait recrutée pour les services médicaux royaux après avoir observé sa technique. Elle avait demandé des ressources en Fée — Leth (34) lui avait été assigné comme référence. Les deux avaient développé ensemble la technique combinée stase-cohésion.',
    },
    premier_conflit: {
      titre: 'La stase politique',
      contenu: 'À 34 ans, elle avait appris que sa technique de stase prolongée avait été adaptée pour la préservation de prisonniers politiques. Elle avait demandé à Sylkra une explication. Sylkra avait répondu que les usages des techniques médicales royales appartenaient à la Monarchie. Elle n\'avait pas insisté. Elle n\'avait pas non plus trouvé la réponse satisfaisante.',
    },
    revelation: {
      titre: 'La durée irréversible',
      contenu: 'Leth (34) avait calculé avec elle la durée maximale d\'une stase avant que la cohésion tissulaire ne soit affectée de façon irréversible — au-delà de 18 jours pour un adulte Givrin. La technique de préservation politique utilisait des durées de 40 à 60 jours. Elle n\'avait pas fourni la méthode pour ces durées. La méthode avait été extrapolée.',
    },
    etat_actuel: {
      titre: 'Les 12 patients en stase',
      contenu: 'Elle a 12 patients en stase actuellement — 9 blessés graves en attente d\'intervention, 3 dont elle ne connaît pas le statut exact (assignés par ordre royal, sans dossier médical fourni). Les 3 sans dossier la préoccupent. Elle a demandé à Sylkra. Il n\'a pas encore répondu.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velskraeth_patients_inconnus',
      titre: 'Les 3 patients sans dossier',
      description: '3 patients en stase sans dossier médical, assignés par ordre royal direct. Velskraeth a demandé à Sylkra (53) une clarification. Pas de réponse. Les patients sont stables. Elle maintient la stase. Mais la demande d\'explication reste ouverte — et le délai de réponse de Sylkra est inhabituel.',
      personnages_impliques: [53, 34],
      declencheur: 'Assignation de patients sans dossier médical par ordre royal',
      consequence: 'Stase maintenue sans information — demande d\'explication ouverte, réponse de Sylkra retardée',
    },
    {
      id: 'velskraeth_duree_irréversible',
      titre: 'L\'extrapolation non autorisée',
      description: 'La technique de stase prolongée développée avec Leth (34) a été extrapolée au-delà de 18 jours — la limite au-delà de laquelle des effets irréversibles sont possibles. Elle n\'a pas fourni la méthode pour ces durées. Elle n\'a pas été consultée. Les 3 patients sans dossier pourraient être dans ces conditions.',
      personnages_impliques: [34, 53],
      declencheur: 'Découverte de l\'usage politique de la stase prolongée hors durées sûres',
      consequence: 'Risque irréversible possible sur les 3 patients non documentés — sans accès aux informations pour évaluer',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Guérisseuse royale combinant stase glacée et magie Fée à Crysalme. Sa technique de préservation a des usages médicaux légitimes et des applications politiques qu\'elle n\'a pas autorisées.',

  relations: [
    { id: 53, nom: 'Sylkra', type: 'supérieur', note: 'Coordonne les ressources médicales royales. A refusé de répondre sur les patients sans dossier. Délai inhabituel.' },
    { id: 34, nom: 'Leth', type: 'allié', note: 'Référence Fée pour la magie de cohésion. A calculé les durées maximales sûres. Collaboration technique principale.' },
  ],

  combat: {
    sorts: [
      'Stase de préservation (Glace) — ralentissement complet des fonctions vitales d\'une cible — gel temporaire offensif ou défensif',
      'Cohésion féerique (Fée) — maintien de l\'intégrité tissulaire sous conditions extrêmes — résistance aux dommages physiques',
      'Barrière de glace médicale (Glace + Fée) — création d\'une zone de stase combinée — zone de protection et d\'immobilisation',
    ],
  },

  image_prompts: [
    {
      id: 'velskraeth_stase',
      description: 'Velskraeth debout devant un patient en stase dans une salle médicale royale de Crysalme. Le patient est enveloppé d\'une fine couche de glace iridescente — la signature de la combinaison stase-cohésion. Elle vérifie un point de la stase avec deux doigts. Son expression est concentrée, clinique.',
      style: 'réaliste médical givrin, stase iridescente, salle royale Crysalme, précision clinique',
    },
  ],

  lore_long: `Velskraeth combine stase glacée et magie Fée pour préserver des blessés graves à la cour de Crysalme. Sa technique permet de maintenir des blessures critiques stables au-delà de ce que les méthodes séparées permettent.

Leth (34) a calculé la limite au-delà de laquelle la stase devient irréversible : 18 jours pour un adulte Givrin. La Monarchie a adapté la technique pour des préservations de 40 à 60 jours. Elle n'a pas fourni la méthode pour ces durées.

3 patients en stase sans dossier médical. Elle a demandé à Sylkra (53). Pas de réponse encore.

Elle maintient la stase. Elle n'a pas d'autre option sans information.`,
};

export default velskraeth;
