import type { PersonnageLoreComplet } from '../../../lore-types';

const iskral: PersonnageLoreComplet = {
  id: 163,
  nom: 'Iskral',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrin de 44 ans, garde du Champ Gelé — corpulence de terrain, habituée aux conditions extrêmes du nord de Crysalme.',
    peau: 'Blanche-cristalline avec des craquelures de gel prononcées — les gardes du Champ passent tellement de temps dans la glace que leur propre peau en porte les marques.',
    yeux: 'Bleus pâles avec une qualité de quelqu\'un qui garde une zone vaste et vide depuis longtemps.',
    vetements: 'Tenue de garde du Champ Gelé — conçue pour les températures extrêmes du nord. Insigne de la Monarchie.',
    signes_particuliers: 'Il a vu Velsa (58) rôder autour du Champ Gelé. Il a décidé de ne pas la signaler. Il ne sait pas entièrement pourquoi.',
  },

  psychologie: {
    dominante: 'Gardien du Champ Gelé à Crysalme. Sa mission est de surveiller la zone nord et de signaler toute activité non-autorisée. Il a vu Velsa (58) rôder — une personne qui n\'aurait pas dû être là. Il n\'a pas signalé. Cette non-action est une décision qu\'il n\'a pas entièrement formulée.',
    mecanisme_de_defense: 'La justification technique. Il n\'était pas certain de l\'identité de la personne. Signaler une observation incertaine est une erreur professionnelle. Cette justification est partiellement vraie.',
    contradiction_interne: 'Il a reconnu Velsa (58) — pas avec certitude absolue, mais avec une forte probabilité. La justification de l\'incertitude est confortable. Il y a peut-être une autre raison pour laquelle il n\'a pas signalé.',
    rapport_aux_autres: 'Velsa (58) est le contexte de sa non-action. Le Gel Éternel est son contexte opérationnel direct.',
    vision_du_monde: 'Le Champ Gelé a ses règles. Il les applique. Cette non-application unique avait une raison qu\'il n\'a pas encore formulée clairement.',
  },

  histoire: {
    enfance: {
      titre: 'Le Champ Gelé',
      contenu: 'Né dans les régions nord de Crysalme. Formation de garde du Champ Gelé depuis 20 ans. Un travail difficile dans des conditions extrêmes — mais il connaissait ces conditions depuis l\'enfance.',
    },
    arrivee: {
      titre: 'L\'observation',
      contenu: 'Il y a 3 mois, lors d\'une patrouille de nuit, il avait vu une silhouette dans une zone du Champ où personne n\'avait accès. La silhouette correspondait à Velsa (58) — une figure dont il avait entendu parler mais qu\'il n\'avait jamais rencontrée officiellement.',
    },
    premier_conflit: {
      titre: 'La non-action',
      contenu: 'Il était rentré de sa patrouille sans signaler. Il avait noté l\'observation dans son carnet personnel — pas dans le registre officiel. Il n\'avait pas expliqué pourquoi dans son carnet.',
    },
    revelation: {
      titre: 'La question sans réponse',
      contenu: 'Il avait commencé à chercher une justification pour sa non-action — une raison professionnelle défendable. Il n\'en avait pas trouvé de satisfaisante. Il avait arrêté de chercher.',
    },
    etat_actuel: {
      titre: 'La patrouille',
      contenu: 'Il patrouille. Il n\'a pas revu Velsa (58). Sa non-action reste dans son carnet personnel.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskral_velsa',
      titre: 'Ce que le garde a vu',
      description: 'Iskral a vu Velsa (58) dans le Champ Gelé et ne l\'a pas signalé. Si quelqu\'un — un supérieur, une enquête — découvre son observation non-signalée, il devra expliquer sa décision. S\'il ne peut pas, sa carrière de garde est en jeu. S\'il révèle Velsa, les activités de Velsa dans le Champ seront exposées.',
      personnages_impliques: [58],
      declencheur: 'Découverte de son observation non-signalée, ou Velsa rencontrée à nouveau dans le Champ',
      consequence: 'Iskral devant choisir entre révéler son observation ou maintenir son silence avec des conséquences',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Garde du Champ Gelé. A vu Velsa (58) dans une zone interdite. N\'a pas signalé. Ne sait pas pourquoi.',

  relations: [
    { id: 58, nom: 'Velsa', type: 'contact', note: 'A vu dans le Champ. N\'a pas signalé. Lien ambigu.' },
  ],

  combat: {
    sorts: [
      'Armure de glace (Glace) — protection cristalline — défense physique',
      'Tempête de glace (Glace) — blizzard localisé — contrôle de zone',
    ],
  },

  image_prompts: [
    {
      id: 'iskral_champ',
      description: 'Iskral en patrouille nocturne dans le Champ Gelé de Crysalme — un Givrin de 44 ans dans l\'obscurité et le froid. Au loin, une silhouette qui n\'aurait pas dû être là. Il la regarde. Il ne consigne pas l\'observation. Son expression est de quelqu\'un qui prend une décision sans entièrement la formuler.',
      style: 'réaliste Givrin garde du Champ Gelé, Crysalme, zone nord, observation non-signalée, Velsa dans la nuit',
    },
  ],

  lore_long: `Iskral garde le Champ Gelé au nord de Crysalme. Il y a 3 mois, il a vu Velsa (58) dans une zone interdite.

Il n'a pas signalé. Il a noté l'observation dans son carnet personnel. Pas de justification professionnelle satisfaisante.

Si quelqu'un découvre son observation non-signalée, il devra décider entre révéler Velsa ou expliquer son silence.`,
};

export default iskral;
