import type { PersonnageLoreComplet } from '../../../lore-types';

const drekkel: PersonnageLoreComplet = {
  id: 145,
  nom: 'Drekkel',
  element: 'Poison',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonien de 26 ans, jeune chercheur — la corpulence de quelqu\'un qui n\'a pas encore le corps de son ambition. Il grandira dedans.',
    peau: 'Pierre grise légère, pas encore densifiée par les décennies. Sa jeunesse est visible dans la texture de sa roche.',
    yeux: 'Gris-vert avec une qualité de quelqu\'un qui veut vraiment comprendre et n\'accepte pas qu\'on lui dise non.',
    vetements: 'Tenue de jeune chercheur — correcte, académique, avec trop de parchemins et pas assez d\'équipement de terrain.',
    signes_particuliers: 'Il a demandé à étudier la zone fongique de la Fosse Interdite dans un cadre académique. Sa demande a été refusée depuis 3 ans. Il continue à demander.',
  },

  psychologie: {
    dominante: 'Jeune chercheur de 26 ans qui veut étudier la zone fongique de la Fosse Interdite dans un cadre académique légal. Ses demandes sont refusées depuis 3 ans. Il ne comprend pas entièrement pourquoi — les raisons officielles sont vagues. Il continue à demander parce qu\'il ne connaît pas d\'autre façon d\'avancer.',
    mecanisme_de_defense: 'La persistance formelle. Il refait les demandes correctement, en améliorant les dossiers. Si le problème est académique, un meilleur dossier résoudra le problème. Cette logique ne fonctionne pas mais il n\'a pas encore compris pourquoi.',
    contradiction_interne: 'Ses refus répétés signifient que la zone est protégée pour des raisons non-académiques. Il commence à le comprendre — et à se demander si accéder par voies académiques est réellement possible.',
    rapport_aux_autres: 'La Fosse Interdite est son sujet d\'étude. Drevaya (39) est dans son réseau — une figure qui comprend la zone et qui a peut-être des voies d\'accès alternatives.',
    vision_du_monde: 'La zone fongique de la Fosse Interdite est scientifiquement significative. L\'accès restreint à une zone scientifiquement significative est un problème académique qui peut être résolu par des voies académiques. Il commence à douter de cette prémisse.',
  },

  histoire: {
    enfance: {
      titre: 'La formation',
      contenu: 'Formation académique en biologie souterraine à Ormn-Dur. Il avait choisi la zone fongique de la Fosse comme sujet de thèse à 23 ans — la zone la plus intéressante et la moins documentée.',
    },
    arrivee: {
      titre: 'Le premier refus',
      contenu: 'Sa première demande d\'accès académique à la zone fongique avait été refusée en 2 semaines avec une formule administrative vague. Il avait amélioré son dossier et refait la demande.',
    },
    premier_conflit: {
      titre: 'Les refus répétés',
      contenu: '3 ans, 6 demandes, 6 refus. Les raisons changeaient — "conditions de sécurité", "protocole de recherche insuffisant", "zone sensible". Aucune raison n\'était suffisamment précise pour être corrigée.',
    },
    revelation: {
      titre: 'La protection non-académique',
      contenu: 'Il avait commencé à comprendre que ses refus n\'étaient pas académiques. La zone était protégée pour des raisons que les formulaires de demande ne reflétaient pas. La voie académique était peut-être bloquée structurellement.',
    },
    etat_actuel: {
      titre: 'La 7ème demande',
      contenu: 'Il prépare sa 7ème demande. Il cherche aussi des voies alternatives — notamment Drevaya (39), qui a accès à la zone par d\'autres canaux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekkel_acces',
      titre: 'Le jeune chercheur et la zone interdite',
      description: 'Drekkel veut accéder à la zone fongique de la Fosse Interdite depuis 3 ans. Ses demandes académiques sont bloquées. Si Drevaya (39) lui donne un accès alternatif — ou si une crise dans la zone fongique justifie l\'inclusion d\'un chercheur spécialisé — il aura enfin accès à ce qu\'il étudie. Ce qu\'il trouve confirmera ou infirmera ce que Dravek (135) soupçonnait.',
      personnages_impliques: [39],
      declencheur: 'Drevaya donnant accès alternatif, ou crise justifiant l\'inclusion d\'un chercheur',
      consequence: 'Drekkel accédant à la zone fongique — et ses observations se connectant aux questions de Dravek sur l\'accord de Valyx',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Jeune chercheur dont les demandes académiques d\'accès à la zone fongique sont refusées depuis 3 ans. Cherche des voies alternatives.',

  relations: [
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'Accès alternatif possible à la zone fongique.' },
  ],

  combat: {
    sorts: [
      'Analyse toxique (Poison) — identification et utilisation des agents fongiques — connaissance de terrain',
      'Spore ciblée (Poison) — projection fongique concentrée — attaque précise',
    ],
  },

  image_prompts: [
    {
      id: 'drekkel_demande',
      description: 'Drekkel dans une salle administrative d\'Ormn-Dur — un jeune Chthonien de 26 ans déposant sa 7ème demande d\'accès académique à la Fosse Interdite. Le fonctionnaire en face lui a déjà vu son dossier. Son expression à lui est de quelqu\'un qui continue à essayer sans savoir si ça sert encore à quelque chose.',
      style: 'réaliste Chthonien jeune chercheur, Ormn-Dur, demande académique refusée, Fosse Interdite, persistance institutionnelle',
    },
  ],

  lore_long: `Drekkel veut étudier la zone fongique de la Fosse Interdite dans un cadre académique. Ses demandes sont refusées depuis 3 ans. Six refus, raisons vagues et changeantes.

Il commence à comprendre que la voie académique est structurellement bloquée — pas pour des raisons académiques.

Il cherche Drevaya (39) pour un accès alternatif.`,
};

export default drekkel;
