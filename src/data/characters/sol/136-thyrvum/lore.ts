import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvum: PersonnageLoreComplet = {
  id: 136,
  nom: 'Thyrvum',
  element: 'Sol',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Chthonien de 38 ans, ancien mineur reconverti en messager. Mobile pour un Chthonien — il a développé une agilité souterraine inhabituelle.',
    peau: 'Pierre grise avec des traces de tunnels variés — les marques de passages dans des zones différentes.',
    yeux: 'Gris avec une qualité de navigation permanente. Il calcule les routes.',
    vetements: 'Tenue de mineur ordinaire — il voyage sous cette couverture. Rien qui signale qu\'il transporte autre chose que de l\'équipement.',
    signes_particuliers: 'Il transporte de l\'information entre Ormn-Dur et Vel\'Nox via les tunnels. Les tunnels de la Fosse Interdite sont sa route principale.',
  },

  psychologie: {
    dominante: 'Ancien mineur reconverti en passeur d\'information pour les Dissidentes. Il transporte des messages entre Ormn-Dur et Vel\'Nox en utilisant les tunnels — y compris les tunnels proches de la Fosse Interdite. Sa couverture de mineur est crédible. Sa route est risquée.',
    mecanisme_de_defense: 'La couverture professionnelle crédible. Un mineur dans des tunnels est invisible — c\'est son travail. Il n\'a pas à expliquer sa présence.',
    contradiction_interne: 'Il passe par les tunnels de la Fosse Interdite — une zone dont les risques sont réels. Sa route est efficace précisément parce qu\'elle est dangereuse — personne n\'y va sans raison.',
    rapport_aux_autres: 'Vethis (46) est dans son réseau Dissident à Vel\'Nox. Ossira (44) est son point de contact à Ormn-Dur.',
    vision_du_monde: 'L\'information voyage plus vite que les gens. Un réseau d\'information efficace vaut une armée. Il est un rouage de ce réseau — pas le centre.',
  },

  histoire: {
    enfance: {
      titre: 'Les mines',
      contenu: 'Né et formé comme mineur à Ormn-Dur. Il avait travaillé dans les tunnels pendant 10 ans — une connaissance pratique des passages souterrains qui était devenue sa compétence principale.',
    },
    arrivee: {
      titre: 'Les Dissidentes',
      contenu: 'Ossira (44) l\'avait approché après que ses conditions de travail à la mine s\'étaient dégradées suite aux réductions de Thyss. Il avait rejoint les Dissidentes en voyant une façon de rendre sa connaissance des tunnels utile.',
    },
    premier_conflit: {
      titre: 'La Fosse Interdite',
      contenu: 'Sa route passait naturellement par les tunnels proches de la Fosse Interdite — les passages les moins surveillés. Il avait appris à calibrer sa présence pour éviter les zones de contamination fongique active.',
    },
    revelation: {
      titre: 'La valeur de la route',
      contenu: 'Il avait compris que sa route par la Fosse était irremplaçable — aucun autre passeur ne la connaissait assez pour s\'y risquer. Cette valeur unique le rendait indispensable au réseau Dissident.',
    },
    etat_actuel: {
      titre: 'Les passages',
      contenu: 'Il transporte. Sa route passe par la Fosse. Il connaît les zones sûres. Pour l\'instant.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvum_fosse',
      titre: 'La route par la Fosse',
      description: 'Thyrvum utilise les tunnels de la Fosse Interdite comme route principale. Si la zone fongique se déstabilise — une rupture, une contamination accrue — sa route devient inutilisable. Le réseau d\'information entre Ormn-Dur et Vel\'Nox perdrait sa connexion principale.',
      personnages_impliques: [46, 44],
      declencheur: 'Déstabilisation de la zone fongique de la Fosse Interdite',
      consequence: 'Route de Thyrvum coupée — réseau Dissident entre Ormn-Dur et Vel\'Nox perturbé',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Passeur Dissident entre Ormn-Dur et Vel\'Nox. Route principale via les tunnels de la Fosse Interdite. Couverture de mineur.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Point de contact Dissident à Vel\'Nox.' },
    { id: 44, nom: 'Ossira', type: 'contact', note: 'Point de contact Dissident à Ormn-Dur.' },
  ],

  combat: {
    sorts: [
      'Tunnel éclair (Sol) — création de passage souterrain rapide — fuite ou surprise',
      'Tremblement localisé (Sol) — vibration de tunnel — désorientation en espace clos',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvum_tunnel',
      description: 'Thyrvum dans un tunnel proche de la Fosse Interdite — un Chthonien de 38 ans qui avance vite, un message caché sur lui. La zone fongique est visible en périphérie. Il connaît les zones sûres. Son expression est concentrée et alerte.',
      style: 'réaliste Chthonien passeur Dissident, tunnels d\'Ormn-Dur, Fosse Interdite, couverture de mineur, transport d\'information',
    },
  ],

  lore_long: `Thyrvum transporte de l'information entre Ormn-Dur et Vel'Nox via les tunnels de la Fosse Interdite. C'est la route la moins surveillée.

Sa couverture de mineur est crédible. Sa route est risquée.

Si la zone fongique se déstabilise, sa route devient inutilisable.`,
};

export default thyrvum;
