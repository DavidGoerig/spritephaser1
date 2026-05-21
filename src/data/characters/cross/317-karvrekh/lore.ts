import type { PersonnageLoreComplet } from '../../../lore-types';

const karvrekh: PersonnageLoreComplet = {
  id: 317,
  nom: 'Karvrekh',
  element: 'Acier',
  element2: 'Roche',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Moyen-grand avec une posture fatiguée — quelqu\'un qui fait un travail sérieux sans en avoir les reconnaissances ou les moyens.',
    peau: 'Gris-acier Chthonien avec des cernes profonds qui ressemblent à des fissures dans la surface — la marque d\'un travail chronique sans repos suffisant.',
    yeux: 'Gris terne, qui ont arrêté d\'espérer quelque chose de leurs supérieurs mais qui continuent de regarder les structures avec l\'attention de quelqu\'un qui s\'en sent responsable.',
    vetements: 'Uniforme de la Confédération Ormn-Dur, propre mais légèrement hors du règlement depuis que les nouvelles pièces tardent à arriver. Il a rapiécé lui-même les endroits qui s\'usaient.',
    signes_particuliers: 'Il porte toujours son rapport de maintenance en version papier sur lui — pas par nostalgie du papier, parce que les systèmes informatiques de la Confédération tombent régulièrement et qu\'il ne veut pas perdre ses données.',
  },

  psychologie: {
    dominante: 'Responsabilité continue dans un système qui délibérément retarde l\'information qu\'il produit. Ses rapports sur l\'état des tunnels arrivent systématiquement trop tard ou incomplets dans les décisions de la Confédération. Il continue de les produire.',
    mecanisme_de_defense: 'La documentation comme acte de résistance passive. Si quelque chose s\'effondre et que son rapport l\'avait prédit, le rapport existera. Il ne peut pas forcer la Confédération à lire. Il peut forcer la preuve à exister.',
    contradiction_interne: 'Ses rapports sont systématiquement retardés par le système qu\'il sert. Il a des preuves que les retards sont délibérés — des tunnels en bon état reçoivent une maintenance accélérée selon les priorités de la Confédération, tandis que les tunnels qu\'il signale comme dangereux restent en attente. Quelqu\'un dans la chaîne réordonne les priorités. Il ne sait pas qui ni pourquoi.',
    rapport_aux_autres: 'Thyrum (132) est son supérieur direct à la Confédération. Il reçoit les rapports et les fait avancer dans le système. Draven II (40) l\'a contacté directement une fois — pas pour un rapport, pour demander l\'état d\'un tunnel spécifique.',
    vision_du_monde: 'Un tunnel qui s\'effondre tue des gens. Les rapports qui permettent d\'éviter les effondrements doivent exister. Qu\'on les lise ou non est une autre question.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage de la maintenance',
      contenu: 'Formé à 18 ans dans les corps de maintenance de la Confédération Ormn-Dur. 4 ans d\'apprentissage dans les tunnels avec des superviseurs qui lui avaient transmis une chose : voir ce qui va mal avant que ça casse. À 22 ans, il inspectait seul.',
    },
    arrivee: {
      titre: 'Les premiers retards',
      contenu: 'À 26 ans, il avait soumis un rapport sur un tunnel du secteur est montrant des signes de fatigue métallique. La réparation avait été planifiée pour 6 mois plus tard. Selon son évaluation, le tunnel avait besoin d\'intervention dans les 3 mois. Il avait escaladé. Thyrum (132) avait répondu que la planification était fixée. Le tunnel avait tenu. La planification avait tort dans le bon sens.',
    },
    premier_conflit: {
      titre: 'Le tunnel qui ne tenait pas',
      contenu: 'À 33 ans, un tunnel secondaire s\'était effondré — mineur sans victimes, mais documenté. Il avait retrouvé son rapport de 4 mois plus tôt qui identifiait les fissures. Le rapport était arrivé dans le système de planification 2 mois après sa soumission — délai inexpliqué. La réparation avait été planifiée pour après l\'effondrement. Il avait demandé une explication du délai. Aucune réponse formelle.',
    },
    revelation: {
      titre: 'Le pattern des délais',
      contenu: 'Sur 5 ans de documentation, il avait identifié un pattern : les délais de ses rapports étaient variables — 2 à 8 semaines de retard dans le système. Les tunnels dans des zones à faible trafic avaient des délais plus longs. Les tunnels dans des zones de trafic impérial ou technocratique avaient des délais courts ou nuls. Quelqu\'un dans la chaîne administrative réordonnait les priorités selon une logique qui n\'était pas la sécurité.',
    },
    etat_actuel: {
      titre: 'Les 4 rapports en attente',
      contenu: 'Il a 4 rapports soumis il y a 2 à 6 semaines qui n\'ont pas encore généré de planification. Deux concernent des tunnels qu\'il classe comme urgents. Il a soumis une escalade sur ces deux-là. Thyrum (132) a accusé réception. Il attend.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karvrekh_tunnel_urgent',
      titre: 'Les deux urgences en attente',
      description: 'Deux de ses rapports urgents attendant une réponse depuis 4 et 6 semaines. Les deux concernent des tunnels avec des défaillances structurelles progressives. Selon ses évaluations, l\'un des deux atteindra un seuil critique dans les 3 prochains mois si non traité. Thyrum (132) a accusé réception de l\'escalade. Pas de planification.',
      personnages_impliques: [132, 40],
      declencheur: 'Évaluations urgentes non suivies d\'action dans les délais de sécurité',
      consequence: 'Risque d\'effondrement documenté et non traité — preuves existantes mais inefficaces',
    },
    {
      id: 'karvrekh_contact_draven',
      titre: 'La question de Draven II',
      description: 'Draven II (40) l\'a contacté directement pour demander l\'état d\'un tunnel spécifique dans une zone que Karvrekh connaît bien. La question était précise — un tunnel de jonction rarement inspecté dans ses tournées officielles. Draven II avait une raison de connaître l\'état de ce tunnel. Karvrekh a répondu sur l\'état structural. Il n\'a pas demandé pourquoi Draven II lui posait la question directement plutôt que via Thyrum.',
      personnages_impliques: [40],
      declencheur: 'Contact direct de Draven II hors des canaux officiels',
      consequence: 'Information transmise à Draven II — usage non connu',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Officier de maintenance dont les rapports sont systématiquement retardés par des priorités que quelqu\'un dans la Confédération réordonne. Ses preuves existent. Personne ne les lit à temps.',

  relations: [
    { id: 132, nom: 'Thyrum', type: 'allié', note: 'Supérieur direct. Reçoit les rapports. Les fait avancer dans le système avec des délais variables non expliqués.' },
    { id: 40, nom: 'Draven II', type: 'allié', note: 'A posé une question directe sur un tunnel spécifique hors des canaux officiels. Karvrekh a répondu sans poser de question en retour.' },
  ],

  combat: {
    sorts: [
      'Fracture d\'acier (Acier) — rupture de structures métalliques adverses — désarmement ou sabotage défensif',
      'Roc de protection (Roche) — élévation de parois rocheuses — couverture en espace souterrain',
      'Analyse structurelle (Acier) — perception des points de faiblesse d\'une structure — identification de vulnérabilités',
    ],
  },

  image_prompts: [
    {
      id: 'karvrekh_inspection',
      description: 'Karvrekh dans un tunnel, en train d\'inspecter une fissure dans une paroi métallique avec une lampe de poche et ses mains. Il prend des notes dans un carnet papier. Le tunnel est fonctionnel mais les signes de fatigue sont visibles à qui sait les voir. Il les voit.',
      style: 'réaliste officier de maintenance, tunnel souterrain, inspection minutieuse, documentation papier, lumière de travail',
    },
  ],

  lore_long: `Karvrekh inspecte les tunnels d'Ormn-Dur et produit des rapports sur leur état structural. Ses rapports arrivent systématiquement trop tard dans le système de planification.

Il a documenté le pattern des délais sur 5 ans. Les tunnels dans les zones à faible trafic attendent plus longtemps. Les zones de trafic impérial ou technocratique sont traitées rapidement. Quelqu'un réordonne les priorités selon une logique qui n'est pas la sécurité.

Deux rapports urgents attendent depuis 4 et 6 semaines. L'un des tunnels concernés atteindra un seuil critique dans 3 mois si non traité. Thyrum (132) a accusé réception de l'escalade. Pas de planification.

Draven II (40) l'a contacté directement pour demander l'état d'un tunnel spécifique. Karvrekh a répondu. Il n'a pas demandé pourquoi Draven II lui posait la question directement.

Il porte son rapport en version papier. Les systèmes tombent. Les papiers restent.`,
};

export default karvrekh;
