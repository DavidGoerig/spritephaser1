import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvalvae: PersonnageLoreComplet = {
  id: 336,
  nom: 'Thyvalvae',
  element: 'Fée',
  element2: 'Glace',
  espece: 'Fées',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Petite même pour une Fée, avec une légèreté de mouvement adaptée aux surfaces glacées — elle ne glisse jamais, même sur la glace vive. Elle a appris à marcher sur ce que les autres redoutent.',
    peau: 'Dorée légère Fée avec des reflets bleutés aux extrémités — l\'élément Glace secondaire qui colore sa magie Fée d\'une teinte froide. Dans les zones de gel intense, les reflets bleus montent jusqu\'aux épaules.',
    yeux: 'Vert-bleu. Ils lisent les surfaces glacées — épaisseur, solidité, zones de rupture. Elle a développé cette lecture pour guider des personnes en sécurité.',
    vetements: 'Tenue légère de Fée adaptée au froid — traitée thermiquement mais sans l\'aspect lourd des équipements Givrins standard. Elle a besoin de légèreté pour les traversées rapides.',
    signes_particuliers: 'Elle trace parfois des lignes dans la glace avec un doigt — des routes, des contours de zones, des repères de traversée. Ces traces durent quelques minutes puis disparaissent.',
  },

  psychologie: {
    dominante: 'Passage de réfugiés à travers les zones glacées de la frontière de Crysalme. Ces zones sont inaccessibles aux personnes sans capacité Glace ou adaptation au froid extrême. Elle les rend accessibles en les guidant et en utilisant sa magie Fée pour maintenir leurs fonctions vitales pendant la traversée.',
    mecanisme_de_defense: 'L\'action comme réponse suffisante. Chaque passage réussi est une réponse à la question de l\'utilité de ce qu\'elle fait. Elle ne s\'interroge pas longtemps sur les structures plus larges.',
    contradiction_interne: 'Certains réfugiés qu\'elle aide à passer sont des personnes que l\'Empire ou la Monarchie recherche activement — des Dissidents, des personnes avec des informations politiques. Elle les aide sans demander pourquoi ils fuient. La frontière entre aide humanitaire et aide opérationnelle est floue pour elle.',
    rapport_aux_autres: 'Aethren (54) coordonne les réfugiés côté Crysalme — il sait qui doit traverser et dans quel ordre de priorité. Thyrkra (168) est un contact à la frontière du côté opposé — il réceptionne les arrivants et les intègre dans les réseaux de l\'autre côté.',
    vision_du_monde: 'La frontière est une ligne tracée par des gens qui ont de l\'autorité. La frontière n\'est pas une vérité. Elle est quelqu\'un qui peut traverser cette ligne. Elle aide les autres à la traverser aussi.',
  },

  histoire: {
    enfance: {
      titre: 'La frontière vue de l\'autre côté',
      contenu: 'Née à la frontière de Crysalme — une zone où les Fées et les Givrins coexistaient avant le Gel Éternel. Après le Gel Éternel, la frontière était devenue une zone de gel qui empêchait les passages normaux. À 16 ans, elle avait traversé pour la première fois — seule, pour voir ce qu\'il y avait de l\'autre côté. Il y avait des gens qui ne pouvaient pas revenir.',
    },
    arrivee: {
      titre: 'Le premier passage guidé',
      contenu: 'À 22 ans, elle avait guidé sa première personne à travers la frontière glacée — un Givrin dont la famille était de l\'autre côté depuis le Gel. 3 heures de traversée dans des zones de gel vif. La personne était arrivée. Elle avait des engelures légères aux mains. Thyvalvae avait noté les points où la traversée était la plus difficile.',
    },
    premier_conflit: {
      titre: 'Le réfugié politique',
      contenu: 'À 27 ans, Aethren (54) lui avait demandé de faire passer un Dissident dont l\'Empire cherchait l\'arrestation. Elle avait demandé pourquoi l\'Empire le cherchait. Aethren avait répondu partiellement — le Dissident avait des informations. Elle avait fait passer. Elle n\'avait pas insisté pour les détails.',
    },
    revelation: {
      titre: 'Les routes cartographiées',
      contenu: 'Après 6 ans de passages, elle avait cartographié mentalement 8 routes différentes à travers les zones glacées de la frontière — chacune avec des conditions optimales différentes selon la saison et l\'état de la glace. Ces routes étaient inconnues des patrouilles impériales. Thyrkra (168) lui avait demandé de les partager avec les Dissidents côté opposé. Elle avait hésité avant d\'accepter.',
    },
    etat_actuel: {
      titre: 'Les 3 passages prévus',
      contenu: 'Aethren (54) lui a demandé 3 passages pour le mois suivant — un groupe de 4 personnes, une personne seule avec des informations urgentes, et un passage "à confirmer" dont les détails ne lui ont pas été donnés. Elle attend les détails du troisième. Elle a dit qu\'elle ne passerait pas sans informations minimales sur la personne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvalvae_passage_urgent',
      titre: 'Le passage d\'urgence',
      description: 'Aethren (54) a demandé un passage urgent pour une personne avec des informations. La priorité a été désignée comme maximale. Thyvalvae n\'a pas encore de détails sur la personne — qui elle est, ce qu\'elle transporte, pourquoi c\'est urgent. Elle attend. Aethren lui a dit dans les prochaines 48 heures.',
      personnages_impliques: [54, 168],
      declencheur: 'Demande de passage urgent avec informations minimales',
      consequence: 'Passage en attente de détails — délai 48 heures selon Aethren',
    },
    {
      id: 'thyvalvae_routes_partagees',
      titre: 'Les routes transmises',
      description: 'Elle a partagé ses 8 routes cartographiées avec Thyrkra (168) côté opposé. Ces routes ne sont pas dans les plans de l\'Empire. Leur partage les transforme en actifs Dissidents. Si une route est compromise, elle peut en développer une nouvelle — mais cela prend du temps.',
      personnages_impliques: [168, 54],
      declencheur: 'Demande de partage des routes par Thyrkra',
      consequence: 'Routes intégrées au réseau Dissident — valeur augmentée, risque de compromission augmenté',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Passeuse Dissidente à la frontière glacée de Crysalme. Ses routes à travers les zones de gel sont inconnues des patrouilles impériales. Elle guide des réfugiés sans toujours savoir qui ils sont.',

  relations: [
    { id: 54, nom: 'Aethren', type: 'allié', note: 'Coordonne les passages côté Crysalme. Donne les priorités et les profils — parfois partiellement. Demande urgente en cours.' },
    { id: 168, nom: 'Thyrkra', type: 'allié', note: 'Réceptionne les arrivants côté opposé. A reçu les routes cartographiées. Contact de coordination finale.' },
  ],

  combat: {
    sorts: [
      'Voie de glace (Glace) — stabilisation d\'une surface glacée instable — création de chemin praticable en zone de gel',
      'Cocon féerique (Fée) — maintien des fonctions vitales d\'une personne dans des conditions de froid extrême — protection thermique',
      'Brume frontière (Fée + Glace) — création d\'un brouillard glacé masquant le passage — dissimulation de traversée',
    ],
  },

  image_prompts: [
    {
      id: 'thyvalvae_traversee',
      description: 'Thyvalvae guidant une personne à travers une zone de gel vif à la frontière de Crysalme. Elle marche devant, légère sur la glace. La personne qu\'elle guide pose les pieds exactement là où elle a posé les siens. Le paysage autour d\'eux est blanc et hostile. Thyvalvae ne regarde pas en arrière — elle connaît la route.',
      style: 'réaliste frontière glacée, Fée légère sur glace, réfugié guidé, Crysalme frontière hostile',
    },
  ],

  lore_long: `Thyvalvae guide des réfugiés à travers les zones glacées de la frontière de Crysalme — des zones inaccessibles sans capacité Glace ou accompagnement adapté.

8 routes cartographiées mentalement sur 6 ans de passages. Ces routes sont maintenant partagées avec le réseau Dissident via Thyrkra (168).

Elle ne demande pas toujours pourquoi les personnes fuient. La frontière est une ligne tracée par l'autorité. Elle aide à la traverser.

Aethren (54) lui a demandé un passage urgent avec informations minimales. Elle attend les détails. 48 heures selon Aethren.`,
};

export default thyvalvae;
