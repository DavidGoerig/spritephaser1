import type { PersonnageLoreComplet } from '../../../lore-types';

const kharven: PersonnageLoreComplet = {
  id: 140,
  nom: 'Kharven',
  element: 'Poison',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Chthonien de 37 ans, discret — la corpulence de quelqu\'un qui fait des choses que d\'autres ne doivent pas voir.',
    peau: 'Pierre grise avec des marques de contamination fongique contrôlée — il travaille avec des matières toxiques régulièrement.',
    yeux: 'Gris-vert avec une qualité de quelqu\'un qui collecte et observe sans juger.',
    vetements: 'Tenue ordinaire sans marquage de faction. La Convergence ne se signale pas.',
    signes_particuliers: 'Contact de la Convergence à Ormn-Dur. Il collecte des échantillons fongiques de la Fosse Interdite pour Graveth (43).',
  },

  psychologie: {
    dominante: 'Contact de la Convergence à Ormn-Dur. Sa fonction est de collecter des échantillons fongiques de la Fosse Interdite et de les transmettre à Graveth (43). Il n\'en comprend pas entièrement l\'usage — la Convergence compartimente ses réseaux.',
    mecanisme_de_defense: 'La compartimentalisation comme protection. Il ne sait que ce qu\'il a besoin de savoir. Si il est identifié, il ne peut trahir que sa propre mission.',
    contradiction_interne: 'Il collecte des échantillons d\'une zone dangereuse pour une organisation qu\'il comprend partiellement. Cette incomplétude de connaissance est une vulnérabilité autant qu\'une protection.',
    rapport_aux_autres: 'Graveth (43) est son contact principal dans la Convergence. Drevaya (39) est dans son réseau — une figure dont les intérêts croisent les siens sans que la relation soit clairement définie.',
    vision_du_monde: 'La Convergence a un projet qui dépasse ce qu\'on lui a dit. Il fait confiance à ce projet sans l\'entièrement comprendre. Cette confiance a une limite qu\'il n\'a pas encore atteinte.',
  },

  histoire: {
    enfance: {
      titre: 'Ormn-Dur',
      contenu: 'Né à Ormn-Dur, formation dans les sciences souterraines de base. Il avait été approché par la Convergence à 28 ans — une approche discrète, une proposition qui semblait raisonnable.',
    },
    arrivee: {
      titre: 'Les échantillons',
      contenu: 'Sa première mission avait été de collecter des échantillons fongiques de zones spécifiques de la Fosse Interdite. Une mission technique, sans explication des raisons. Il avait exécuté.',
    },
    premier_conflit: {
      titre: 'Drevaya',
      contenu: 'Drevaya (39) l\'avait croisé dans une zone de la Fosse où il collectait. Il n\'était pas clair si Drevaya savait ce qu\'il faisait. Il avait couvert ses actions avec une explication plausible. Drevaya ne l\'avait pas questionné plus avant.',
    },
    revelation: {
      titre: 'Les usages des échantillons',
      contenu: 'Il avait vu un résumé partiel d\'une recherche de Graveth (43) qui utilisait ses échantillons. L\'application n\'était pas ce qu\'il avait imaginé. Il n\'avait pas questionné Graveth.',
    },
    etat_actuel: {
      titre: 'Les collectes',
      contenu: 'Il continue à collecter. Les questions sur l\'usage restent en suspens.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kharven_echantillons',
      titre: 'Ce que Graveth fait des échantillons',
      description: 'Kharven collecte des échantillons fongiques pour Graveth (43) sans comprendre entièrement l\'usage. Si Drevaya (39) identifie Kharven comme contact de la Convergence, la chaîne de collecte sera exposée. Si Kharven apprend l\'usage réel des échantillons, il devra décider si il continue ou si ça dépasse sa limite.',
      personnages_impliques: [43, 39],
      declencheur: 'Drevaya identifiant Kharven comme contact Convergence, ou Kharven apprenant l\'usage réel de ses collectes',
      consequence: 'Réseau de collecte exposé — ou Kharven confronté à sa limite de confiance envers la Convergence',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Contact Convergence à Ormn-Dur. Collecte des échantillons fongiques pour Graveth. Compartimentalisation partielle de sa mission.',

  relations: [
    { id: 43, nom: 'Graveth', type: 'contact', note: 'Destinataire des échantillons. Contact principal Convergence.' },
    { id: 39, nom: 'Drevaya', type: 'adversaire', note: 'L\'a croisé dans la Fosse. Relation ambiguë.' },
  ],

  combat: {
    sorts: [
      'Nuage fongique (Poison) — spores de la Fosse — contamination de zone',
      'Toxine adaptée (Poison) — poison souterrain — affaiblissement ciblé',
    ],
  },

  image_prompts: [
    {
      id: 'kharven_collecte',
      description: 'Kharven collectant des échantillons fongiques dans une zone de la Fosse Interdite — un Chthonien de 37 ans avec des contenants scellés. Son geste est précis. Il ne sait pas exactement pourquoi Graveth en a besoin. Il collecte quand même.',
      style: 'réaliste Chthonien contact Convergence, Fosse Interdite d\'Ormn-Dur, collecte fongique, compartimentalisation',
    },
  ],

  lore_long: `Kharven collecte des échantillons fongiques de la Fosse Interdite pour Graveth (43) de la Convergence. Il ne comprend pas entièrement l'usage.

La Convergence compartimente ses réseaux. Il ne sait que ce qu'il a besoin de savoir.

Si il apprend l'usage réel de ses collectes, il devra décider si ça dépasse sa limite de confiance.`,
};

export default kharven;
