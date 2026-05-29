import type { PersonnageLoreComplet } from '../../../lore-types';

const korraven: PersonnageLoreComplet = {
  id: 212,
  nom: 'Korraven',
  element: 'Acier',
  element2: 'Feu',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonien de 48 ans, marchand d\'armes — corpulence massive, posture de quelqu\'un qui vend des choses dangereuses et n\'a pas peur de le montrer.',
    peau: 'Grise rocheuse avec des intégrations acier et des traces thermiques orangées dans les articulations.',
    yeux: 'Gris-métalliques avec des éclats orangés chauds.',
    vetements: 'Tenue de marchand robuste — pas d\'identification de faction, pas d\'insignes. Neutre par principe affiché.',
    signes_particuliers: 'Il vend des armes à toutes les factions, avec une seule règle absolue : pas à l\'Empire. Cette règle est connue. Elle est ce qui maintient sa crédibilité auprès de ses autres clients.',
  },

  psychologie: {
    dominante: 'Marchand d\'armes Chthonien indépendant d\'Ormn-Dur. Il vend à tous — Dissidentes, Confédération, indépendants, partis locaux. Une seule exception : l\'Empire. Cette règle n\'est pas idéologique — elle est commerciale. Vendre à l\'Empire lui ferait perdre tous ses autres clients.',
    mecanisme_de_defense: 'La règle visible comme protection. Sa règle contre l\'Empire est connue de tous ses clients. Cette transparence est ce qui lui permet de maintenir des relations avec des factions qui s\'opposent par ailleurs.',
    contradiction_interne: 'Sa règle contre l\'Empire est commerciale, pas idéologique. Si l\'Empire lui offrait suffisamment de garanties commerciales pour compenser la perte de ses autres clients, la règle n\'aurait plus de raison d\'être. Il préfère ne pas y penser.',
    rapport_aux_autres: 'Vordrak (142) est dans son réseau — un ingénieur Dissident d\'Ormn-Dur qui est aussi un client régulier. Drekryn (202) est dans son réseau — le marchand mixte Varkhôl/Vel\'Nox qui lui fournit des accès à des marchés qu\'il ne couvre pas directement.',
    vision_du_monde: 'Les armes sont vendues à ceux qui ont les ressources pour les payer et les intentions pour les utiliser — pas nécessairement des intentions qu\'il approuve, mais des intentions qui ne compromettent pas sa règle. Il vend à tous sauf un.',
  },

  histoire: {
    enfance: {
      titre: 'Le commerce d\'Ormn-Dur',
      contenu: 'Né dans une famille de marchands à Ormn-Dur. Il avait commencé par vendre des matériaux miniers avant de comprendre que les armes avaient des marges supérieures et une demande plus constante.',
    },
    arrivee: {
      titre: 'La règle',
      contenu: 'À 30 ans, il avait établi sa règle contre l\'Empire — non pas parce qu\'il avait des convictions politiques, mais parce qu\'un client Dissident lui avait expliqué qu\'un marchand d\'armes qui vendait aussi à l\'Empire ne pouvait pas être fait confiance par les autres. Il avait gardé la règle.',
    },
    premier_conflit: {
      titre: 'L\'offre impériale',
      contenu: 'L\'Empire lui avait fait une offre significative pour une livraison d\'armes. Il avait refusé. L\'Empire n\'avait pas insisté — il avait d\'autres fournisseurs. Korraven avait maintenu sa crédibilité auprès de ses autres clients.',
    },
    revelation: {
      titre: 'La règle commerciale',
      contenu: 'Il avait compris que sa règle contre l\'Empire était ce qui lui permettait de vendre à tous les autres. Sans la règle, il perdrait la confiance de tous ses clients non-impériaux. La règle était une décision commerciale rationnelle, pas une décision éthique.',
    },
    etat_actuel: {
      titre: 'Le marchand d\'armes',
      contenu: 'Il vend. Sa règle tient. Ses clients lui font confiance exactement parce qu\'il a une règle visible.',
    },
  },

  evenements_narratifs: [
    {
      id: 'korraven_regle',
      titre: 'L\'offre qui teste la règle',
      description: 'Korraven a une règle commerciale contre la vente à l\'Empire. Si l\'Empire lui fait une offre suffisamment importante — ou si une pression extérieure (arrestation d\'un proche, menace sur son commerce) le place en position de devoir choisir entre sa règle et sa survie — la nature commerciale (et non idéologique) de sa règle deviendra apparente.',
      personnages_impliques: [142, 202],
      declencheur: 'L\'Empire faisant une offre ou une pression qui rend la règle de Korraven commercialement insoutenable',
      consequence: 'Korraven testant si sa règle est une conviction ou une stratégie commerciale — avec des conséquences sur sa crédibilité auprès de tous ses clients',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Marchand d\'armes indépendant à Ormn-Dur. Vend à tous sauf à l\'Empire. La règle est commerciale, pas idéologique.',

  relations: [
    { id: 142, nom: 'Vordrak', type: 'contact', note: 'Ingénieur Dissident d\'Ormn-Dur et client régulier.' },
    { id: 202, nom: 'Drekryn', type: 'contact', note: 'Marchand mixte Varkhôl/Vel\'Nox fournissant l\'accès à des marchés non-couverts.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'acier thermique (Acier/Feu) — impact métallique chauffé — attaque directe',
      'Barrière d\'acier (Acier) — formation défensive dense — protection',
    ],
  },

  image_prompts: [
    {
      id: 'korraven_commerce',
      description: 'Korraven dans son entrepôt à Ormn-Dur — un Chthonien de 48 ans devant des armes rangées par catégorie. Un client Dissident lui passe une commande. Un représentant de la Confédération attend à côté. L\'Empire n\'est pas là. Il sait pourquoi.',
      style: 'réaliste Chthonien marchand d\'armes, Ormn-Dur, commerce neutre avec règle visible, clients multiples, entrepôt d\'armes',
    },
  ],

  lore_long: `Korraven est marchand d'armes indépendant à Ormn-Dur. Il vend à toutes les factions sauf à l'Empire.

Cette règle n'est pas idéologique — elle est commerciale. Vendre à l'Empire lui ferait perdre la confiance de tous ses autres clients. La transparence de la règle est ce qui la rend crédible.

Si l'Empire lui faisait une offre suffisamment importante, la nature commerciale de la règle deviendrait apparente.`,
};

export default korraven;
