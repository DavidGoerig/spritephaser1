import type { PersonnageLoreComplet } from '../../../lore-types';

const kossael: PersonnageLoreComplet = {
  id: 80,
  nom: 'Kossael',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 50 ans, maigre avec la résistance de quelqu\'un qui vit dans des conditions difficiles par choix. Il n\'est pas brisé — il est entêté. Sa maigreur est celle de qui mange peu et marche beaucoup dans des ruines.',
    peau: 'Brune Pyrien avec une luminescence rouge-orangée inégale — l\'élément Feu qui s\'exprime différemment depuis 15 ans dans des ruines. Comme si l\'élément lui-même avait adapté sa façon d\'exister à l\'espace fracturé.',
    yeux: 'Rouges avec une qualité de quelqu\'un qui a décidé. Pas de doute, pas de question. Il est là. C\'est tout.',
    vetements: 'Tenue assemblée depuis 15 ans à partir de ce qu\'il a trouvé. Fonctionnelle, réparée plusieurs fois. Aucun insigne, aucun symbole — dans les ruines, il n\'y a pas de place pour les symboles.',
    signes_particuliers: '15 ans après la Rupture, il vit encore dans les ruines du Quatrième District. On lui a proposé de partir. Il a dit non. Ce refus est une position politique même s\'il ne l\'a jamais formulé comme telle.',
  },

  psychologie: {
    dominante: 'Survivant de la Rupture qui refuse de quitter les ruines du Quatrième District 15 ans après. Son refus n\'est pas de l\'entêtement aveugle — c\'est une déclaration. Ces ruines sont son quartier. Il ne part pas.',
    mecanisme_de_defense: 'La présence comme résistance. Tant qu\'il reste, le quartier n\'est pas entièrement effacé. C\'est ce qu\'il croit.',
    contradiction_interne: 'Rester dans les ruines n\'a pas arrêté leur dégradation. Son quartier disparaît quand même, lentement. Sa présence ne change pas le rythme de la disparition. Il le sait.',
    rapport_aux_autres: 'Gravel (3) est quelqu\'un qu\'il a croisé — une figure de résistance qui choisit une forme différente. Kossael respecte ça sans y adhérer. La Rupture est son contexte quotidien, pas son passé.',
    vision_du_monde: 'On n\'abandonne pas son quartier parce qu\'il a été détruit. On reste. Le fait qu\'il soit le seul à rester change quelque chose — il ne sait pas quoi.',
  },

  histoire: {
    enfance: {
      titre: 'Le Quatrième District',
      contenu: 'Né et grandi dans le Quatrième District de Varkhôl. Troisième génération dans le même quartier. À 35 ans, la Rupture l\'avait effacé. Il était un des rares à avoir survécu dans le District lui-même.',
    },
    arrivee: {
      titre: 'Le refus',
      contenu: 'Dans les jours suivant la Rupture, l\'administration avait évacué le District. Kossael avait attendu que les agents partent et était retourné dans les ruines. Ça s\'était produit trois fois. La quatrième fois, personne n\'avait essayé de le faire partir.',
    },
    premier_conflit: {
      titre: 'Les années',
      contenu: 'Les premières années avaient été difficiles — eau des pluies, nourriture de ce qu\'il pouvait récupérer ou acheter discrètement, abri dans les structures les moins endommagées. Il avait appris à lire les ruines. Il savait quelle structure tiendrait encore une saison.',
    },
    revelation: {
      titre: 'Les visiteurs',
      contenu: 'Périodiquement, des gens venaient — curieux, journalistes du Parti, factions diverses. Il leur parlait. Il décrivait le District tel qu\'il était, pas tel qu\'ils voulaient l\'entendre. Certains revenaient. La plupart ne revenaient pas.',
    },
    etat_actuel: {
      titre: 'Le dernier habitant',
      contenu: 'Il est seul dans les ruines du Quatrième District. Sa présence est connue. Aucune faction ne l\'a utilisé de façon directe. Aucune faction ne l\'a fait partir non plus.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kossael_temoignage',
      titre: 'Le témoignage qui ne sert aucun camp',
      description: 'Kossael est le seul témoin direct de ce qu\'est le Quatrième District 15 ans après la Rupture. Son témoignage ne sert aucun camp entièrement — trop précis pour les exagérations de Kraevolt, trop douloureux pour les minimisations de Vrassyn. Si quelqu\'un voulait la vérité non-instrumentalisée de la Rupture, c\'est à lui qu\'il faudrait parler.',
      personnages_impliques: [3],
      declencheur: 'Quelqu\'un cherchant un témoignage direct de la Rupture sans agenda politique',
      consequence: 'Kossael devant décider s\'il donne un témoignage qui ne servira aucun camp particulier',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Dernier habitant des ruines du Quatrième District. 15 ans après la Rupture. Refus de partir. Témoin sans agenda.',

  relations: [
    { id: 3, nom: 'Gravel', type: 'contact', note: 'Figure de résistance différente. Respect sans adhésion.' },
  ],

  combat: {
    sorts: [
      'Feu de survie (Feu) — flamme contrôlée dans les conditions difficiles — chaleur et lumière dans les ruines',
      'Aura d\'endurance (Feu) — résistance aux conditions extrêmes — adaptation aux structures endommagées',
    ],
  },

  image_prompts: [
    {
      id: 'kossael_ruines',
      description: 'Kossael dans les ruines du Quatrième District de Varkhôl — un Pyrien maigre de 50 ans assis dans ce qui était une place de quartier. 15 ans après la Rupture. Il est le seul. Son expression est de quelqu\'un qui a décidé et qui ne regrette pas sa décision.',
      style: 'réaliste Pyrien survivant, ruines du Quatrième District, 15 ans après la Rupture, refus de partir, solitude choisie',
    },
  ],

  lore_long: `Kossael vit dans les ruines du Quatrième District de Varkhôl depuis 15 ans — depuis la Rupture Thermique. Il refuse de partir.

Son refus n'est pas de l'entêtement aveugle. C'est une déclaration : ces ruines sont son quartier.

Il est le seul témoin direct de ce qu'est le District 15 ans après. Son témoignage ne sert aucun camp entièrement.`,
};

export default kossael;
