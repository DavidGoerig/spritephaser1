import type { PersonnageLoreComplet } from '../../../lore-types';

const vorvdrekh: PersonnageLoreComplet = {
  id: 318,
  nom: 'Vorvdrekh',
  element: 'Roche',
  element2: 'Acier',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Grand, avec des mains sculpteur — plus délicates qu\'on n\'attendrait pour la roche. La précision dans les doigts, la force dans les avant-bras.',
    peau: 'Gris foncé Chthonien avec de la poussière de roche permanente dans les pores — pas de la saleté, une intégration. Il ne s\'en débarrasse plus.',
    yeux: 'Gris-marron profond, qui regardent les volumes. Pas les surfaces — les volumes.',
    vetements: 'Vêtements de travail simples constamment poussiéreux. Il porte les outils de sculpture sur lui — des petits instruments de précision dans une pochette et un marteau de taille au côté. L\'outil est toujours là.',
    signes_particuliers: 'Il touche les roches avant de travailler dessus — il dit qu\'il sent ce que la roche veut devenir. Ce n\'est pas mystique, c\'est de l\'écoute des propriétés du matériau. Mais il le formule comme ça.',
  },

  psychologie: {
    dominante: 'Mémoire des morts comme acte structurellement nécessaire. Si personne ne fait les monuments, les morts disparaissent des surfaces visibles d\'Ormn-Dur. Il les maintient visibles.',
    mecanisme_de_defense: 'La protection par l\'inutilité apparente. Son travail est toléré parce que la Technocratie ne voit pas en quoi des monuments à des mineurs morts la menacent. Cette tolérance dépend du fait qu\'il reste dans les limites de ce qui semble inoffensif.',
    contradiction_interne: 'Ses monuments sont des archives — les noms, les circonstances, parfois des symboles qui indiquent comment quelqu\'un est mort et dans quelle zone. Des personnes qui savent lire ces symboles peuvent retracer des accidents que les rapports officiels ont minimisés ou dissimulés. Il ne dit pas ça publiquement. Il sculte les symboles.',
    rapport_aux_autres: 'Draven II (40) lui a demandé une fois de sculpter un symbole particulier sur un monument — un symbole de demande de reconnaissance formelle d\'un accident. Il avait sculpté. Le monument existe. Draven II n\'a pas expliqué pourquoi. La Fosse Interdite est un espace qu\'il a représenté dans certains de ses monuments — par des symboles que les familles de morts dans la Fosse lui ont demandés.',
    vision_du_monde: 'Les gens morts dans les mines méritent que leur mort soit visible. L\'Empire et la Technocratie préfèrent que les accidents restent des statistiques. Ses monuments transforment les statistiques en noms.',
  },

  histoire: {
    enfance: {
      titre: 'La première mort',
      contenu: 'À 14 ans, le père d\'un ami était mort dans un effondrement de tunnel. Il n\'y avait pas eu de monument — la Technocratie avait enregistré l\'accident, la famille avait reçu une compensation standard, personne n\'avait fait de marque dans la roche. Il avait passé 3 semaines à sculpter un nom dans une paroi proche de l\'effondrement. C\'était grossier. C\'était là.',
    },
    arrivee: {
      titre: 'La première commission',
      contenu: 'À 22 ans, une famille avait entendu parler de son travail et lui avait demandé un monument pour un frère mort dans la Fosse. Il avait demandé des détails — pas juste le nom, mais comment ça s\'était passé, ce que le frère faisait, où exactement. Il avait sculpté tout ça dans la roche. La famille avait pleuré. Il avait compris ce que son travail pouvait faire.',
    },
    premier_conflit: {
      titre: 'La tolérance de la Technocratie',
      contenu: 'À 30 ans, un officier de la Technocratie était venu le voir pour lui dire que ses monuments dans une zone particulière de la Fosse seraient retirés — ils créaient un "attroupement non autorisé" autour d\'une zone de maintenance active. Il avait négocié : il déplacerait les monuments dans une zone adjacente autorisée. L\'officier avait accepté. Il avait compris que la Technocratie tolérait son travail tant qu\'il restait hors de leur chemin.',
    },
    revelation: {
      titre: 'Les symboles qui parlent',
      contenu: 'Une femme était venue voir un de ses monuments et avait lu un symbole qu\'il avait sculpté sur demande de la famille — un symbole d\'accident d\'équipement défectueux dans une zone à risque connu. Elle avait réalisé que c\'était le même type d\'accident que celui qui avait tué son propre père dans une zone différente. Elle avait posé des questions. Il avait dit qu\'il sculptait ce que les familles lui demandaient. Elle était partie chercher d\'autres monuments.',
    },
    etat_actuel: {
      titre: 'Les 87 monuments',
      contenu: 'Il a 87 monuments actifs dans différentes zones d\'Ormn-Dur. Certains sont simples — un nom et une date. D\'autres sont complexes — des récits entiers en symboles. La Technocratie les tolère. Draven II (40) les utilise parfois comme points de rencontre discrets. Il n\'a pas officiellement donné cette autorisation. Il ne l\'a pas non plus refusée.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vorvdrekh_monument_archive',
      titre: 'Les symboles comme archive d\'accidents',
      description: 'Ses monuments les plus complexes contiennent des informations sur les circonstances des décès — informations que les rapports officiels ont minorées ou dissimulées. Des personnes qui savent lire les symboles Chthoniens peuvent reconstituer des accidents que la Technocratie a préféré classer comme statistiques. Ces monuments sont une archive en roche qu\'aucun système officiel ne peut effacer facilement.',
      personnages_impliques: [40],
      declencheur: 'Demandes des familles d\'inscrire les vraies circonstances',
      consequence: 'Archive de 87 monuments contenant des informations sur des accidents officiellement minorés',
    },
    {
      id: 'vorvdrekh_points_rencontre',
      titre: 'Les monuments comme points de rencontre',
      description: 'Draven II (40) et d\'autres utilisent certains de ses monuments comme points de rencontre discrets — des lieux où des personnes peuvent se retrouver sans que ça ait l\'air d\'une réunion planifiée. Vorvdrekh l\'a remarqué. Il n\'a pas objecté. Ses monuments sont publics. Il ne contrôle pas qui s\'y retrouve.',
      personnages_impliques: [40],
      declencheur: 'Emplacements neutres et publics des monuments',
      consequence: 'Infrastructure de rencontre discrète sans coût de coordination pour les utilisateurs',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Mémoire visible des morts de la Fosse. Ses monuments contiennent des informations que les archives officielles ont effacées. La Technocratie les tolère parce qu\'elle ne voit pas encore leur utilité pour d\'autres.',

  relations: [
    { id: 40, nom: 'Draven II', type: 'allié', note: 'A demandé un symbole spécifique sur un monument. Utilise les monuments comme points de rencontre. Vorvdrekh observe sans intervenir.' },
  ],

  combat: {
    sorts: [
      'Roche vivante (Roche) — animation d\'une structure de roche façonnée — défense sculptée active',
      'Tranchant d\'acier (Acier) — extension d\'une lame à partir d\'un objet métallique — attaque de précision',
      'Érection de monument (Roche) — élévation rapide d\'une masse rocheuse — obstacle ou abri',
    ],
  },

  image_prompts: [
    {
      id: 'vorvdrekh_sculpture',
      description: 'Vorvdrekh en train de sculpter dans une paroi souterraine. La roche révèle un visage, des symboles, un nom. Il travaille avec un instrument de précision, pas un marteau. Sa main gauche touche la roche pendant que sa main droite sculpte. Derrière lui, d\'autres monuments alignés dans la galerie.',
      style: 'réaliste sculpteur souterrain, monuments visibles en arrière-plan, travail de précision dans la roche, lumière latérale qui révèle le relief',
    },
  ],

  lore_long: `Vorvdrekh sculpte des monuments aux mineurs morts dans la Fosse Interdite et dans les mines d'Ormn-Dur.

Ses 87 monuments contiennent des noms, des dates, et pour certains des symboles qui décrivent les circonstances réelles des décès — des accidents que les rapports officiels ont minorés. Des personnes qui savent lire ces symboles peuvent reconstituer des histoires que la Technocratie a préféré classer.

La Technocratie tolère ses monuments. Ils créent parfois des attroupements. Il les déplace hors de leur chemin si nécessaire.

Draven II (40) utilise certains monuments comme points de rencontre discrets. Vorvdrekh a remarqué. Il n'a pas objecté. Ses monuments sont publics.

Il touche la roche avant de sculter. Il dit qu'il sent ce qu'elle veut devenir.`,
};

export default vorvdrekh;
