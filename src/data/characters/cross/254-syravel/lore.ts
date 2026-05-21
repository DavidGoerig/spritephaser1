import type { PersonnageLoreComplet } from '../../../lore-types';

const syravel: PersonnageLoreComplet = {
  id: 254,
  nom: 'Syravel',
  element: 'Fée',
  element2: 'Ténèbres',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyenne, silhouette habituelle d\'une fonctionnaire de la Citadelle — ni remarquable ni effacée, exactement ce qu\'elle a cultivé.',
    peau: 'Fée olive pâle, reflets sombres caractéristiques de l\'élément Ténèbres, perceptibles uniquement à la lumière directe.',
    yeux: 'Brun très foncé, presque noirs. Elle a appris à les garder légèrement détournés dans les interactions de service — le contact direct attire la mémoire.',
    vetements: 'Tenue de fonctionnaire section nord-ouest, bordeaux et gris foncé réglementaires. Elle l\'a portée si longtemps qu\'elle ne la distingue plus de sa propre peau.',
    signes_particuliers: 'Ses 11 ans d\'infiltration lui ont donné une capacité à être présente sans être mémorisée — elle calibre chaque interaction pour rester dans la catégorie "vue, pas remarquée".',
  },

  psychologie: {
    dominante: 'Patience absolue fondée sur une conviction totale. Elle n\'a pas peur d\'être découverte — elle a calculé ce risque il y a 11 ans et continue à le recalculer chaque mois. Le chiffre est acceptable.',
    mecanisme_de_defense: 'La continuité. Chaque jour identique au précédent est un jour où rien n\'a cédé. Elle ne cherche pas à se rassurer — elle documente.',
    contradiction_interne: 'Elle vit à 400 mètres d\'Eiravel (248) depuis 9 ans et ne sait pas qu\'Eiravel existe. Elles font un travail complémentaire sans le savoir. Ce n\'est pas une contradiction qu\'elle peut voir — c\'est une ironie qu\'elle ignorerait si elle était informée, parce que la compartimentation est une rigueur, pas un échec.',
    rapport_aux_autres: 'Elle maintient 7 personas fonctionnelles dans la Citadelle — des collègues qui la connaissent sous des noms différents, aucun complet. Ses contacts Dissidentes sont rares, précis, et limités à ce qui est nécessaire.',
    vision_du_monde: 'Les systèmes d\'oppression durent parce qu\'ils ont des gens à l\'intérieur qui ne savent pas qu\'ils y sont, ou qui savent et ont décidé que c\'était supportable. Elle est là pour les deux.',
  },

  histoire: {
    enfance: {
      titre: 'La Fée qui lisait les rapports',
      contenu: 'Née à la Citadelle dans une famille de fonctionnaires moyens. À 12 ans elle avait accidentellement lu un rapport interne qui décrivait la gestion des "surplus élémentaires". Elle n\'avait pas compris tous les termes. À 17 ans elle avait compris. À 19 ans elle cherchait les Dissidentes.',
    },
    arrivee: {
      titre: 'Le recrutement inverse',
      contenu: 'Ce sont les Dissidentes qui l\'ont trouvée — Vethis (46) l\'avait identifiée comme potentielle via un contact indirect. Elle avait 35 ans, déjà en poste à la Citadelle depuis 7 ans. La proposition d\'infiltration était une formalisation de ce qu\'elle faisait déjà intuitivement. Elle a accepté.',
    },
    premier_conflit: {
      titre: 'La troisième année',
      contenu: 'En troisième année d\'infiltration, un de ses contacts Dissidentes a été arrêté. Elle avait 2 heures pour décider si elle disparaissait ou continuait. Elle est restée. L\'arrestation n\'avait pas de lien avec elle — elle l\'avait calculé dans les 20 premières minutes. Les 100 minutes restantes, elle les a utilisées pour revalider son propre protocole de sécurité.',
    },
    revelation: {
      titre: 'Syrethia',
      contenu: 'Il y a 14 ans, Syrethia (259) — une autre infiltrée — a été extraite via le réseau Vel'Nox. Le trou opérationnel laissé par son départ a mis 3 ans à être repéré par les Dissidentes. Syravel a comblé ce trou à 37 ans sans savoir qu\'il existait ni qui l\'avait laissé. Elle tient maintenant une position qu\'une autre tenait avant elle, sans savoir qu\'il y avait eu une autre.',
    },
    etat_actuel: {
      titre: 'La continuité comme résultat',
      contenu: 'Onze ans à la même position. L\'information qu\'elle recueille circule vers les Dissidentes via 3 canaux rotatifs — elle ne sait pas toujours comment elle est utilisée, et c\'est délibéré. Ce qu\'elle sait : les rapports qu\'elle transmet ont permis 4 extractions en 11 ans. Elle n\'a pas rencontré les personnes extraites. Elle connaît les chiffres.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syravel_eiravel_proximite',
      titre: 'L\'inconnue à 400 mètres',
      description: 'Syravel et Eiravel (248) travaillent dans le même bâtiment depuis 9 ans, section nord-ouest et section centrale, à 400 mètres de distance. Elles ne savent pas que l\'autre existe. Leurs travaux sont complémentaires — Eiravel reconstruit les patterns de modification, Syravel extrait les données opérationnelles brutes. Si elles collaboraient, leur impact serait multiplié. Elles ne collaborent pas parce qu\'elles s\'ignorent mutuellement.',
      personnages_impliques: [248],
      declencheur: 'Position géographique et opérationnelle convergente',
      consequence: 'Efficacité réduite par isolation — protection mutuelle involontaire',
    },
    {
      id: 'syravel_velath_canal_gris',
      titre: 'Le réseau Canal Gris',
      description: 'Velath (49) est dans le même réseau Dissident — secteur différent, contacts différents. Ils ne se sont jamais rencontrés directement, mais les informations qu\'ils transmettent se croisent au niveau de l\'organisation centrale. Si Velath savait que Syravel existe et où elle est, il protégerait différemment certaines transmissions. Il ne le sait pas.',
      personnages_impliques: [49],
      declencheur: 'Appartenance commune au réseau Canal Gris',
      consequence: 'Protection opérationnelle sous-optimale par compartimentation nécessaire',
    },
    {
      id: 'syravel_4_extractions',
      titre: 'Les quatre',
      description: 'Quatre extractions en 11 ans. Elle n\'a pas rencontré les quatre. Elle connaît leurs numéros de dossier et le fait qu\'ils sont vivants — Vethis lui a transmis la confirmation après chacune. Pour deux d\'entre eux elle sait ce qu\'ils faisaient dans la Citadelle. Pour les deux autres elle ne sait que qu\'ils étaient là. Elle trouve que c\'est suffisant pour continuer.',
      personnages_impliques: [46, 49],
      declencheur: 'Résultat des 11 ans de travail',
      consequence: 'Mesure concrète de l\'utilité — 4 personnes vivantes qui ne le seraient peut-être pas',
    },
  ],

  arcs: ['arc_dissidentes', 'arc_citadelle_empire'],
  position_dans_arc: 'Héroïne silencieuse qui ne sait pas qu\'elle n\'est pas seule. Sa plus grande vulnérabilité n\'est pas d\'être découverte mais d\'agir en ignorant Eiravel — deux bras d\'un même travail qui ne savent pas qu\'ils appartiennent au même corps.',

  relations: [
    { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'À 400 mètres depuis 9 ans. Ignorance mutuelle. Si elles se trouvaient, leur efficacité combinée changerait l\'équilibre de ce qu\'elles font.' },
    { id: 49, nom: 'Velath', type: 'allié', note: 'Même réseau Canal Gris, secteur différent. Ne se connaissent pas directement — information circule en parallèle sans coordination.' },
    { id: 46, nom: 'Vethis', type: 'mentor', note: 'Contact Dissident depuis l\'extraction initiale. Confirme les résultats des extractions. Lien de confiance distancé.' },
    { id: 259, nom: 'Syrethia', type: 'fantôme', note: 'Sa remplaçante qu\'elle ne connaît pas. Syravel occupe un rôle qu\'une autre tenait avant elle — elle l\'ignore.' },
  ],

  combat: {
    sorts: [
      'Pas de Ténèbres (Ténèbres) — déplacement sans empreinte sonore ou lumineuse dans un espace connu',
      'Voile fée (Fée) — altération légère de la mémorabilité — rend les interactions plus difficiles à précisément rappeler',
      'Lecture Ténèbres (Ténèbres) — perception des présences dans les zones à faible luminosité',
    ],
  },

  image_prompts: [
    {
      id: 'syravel_couloir',
      description: 'Syravel dans un couloir de la Citadelle, tenue de fonctionnaire, expression neutre, se déplaçant avec la normalité absolue de quelqu\'un qui appartient entièrement à cet endroit. Dans l\'arrière-plan, à distance, une silhouette dans un bureau — Eiravel, sans que ni l\'une ni l\'autre le sache.',
      style: 'réaliste fée, lumière impériale froide, architecture de pierre, tons bordeaux et ombre',
    },
  ],

  lore_long: `Syravel a calculé son risque d'arrestation chaque mois pendant 11 ans. Le chiffre est resté dans la zone acceptable. Elle continue.

Ce n'est pas du courage — c'est de la rigueur. Le courage implique une peur surmontée. Elle a de la peur, elle la connaît, elle l'a quantifiée. Ce qu'elle fait avec elle, c'est de la comptabilité.

La troisième année, quand son contact a été arrêté, elle avait 2 heures pour décider. Elle a décidé en 20 minutes et utilisé le reste du temps pour revalider son protocole. C'est représentatif : les décisions se prennent vite, la validation se prend longtemps.

Elle ne sait pas qu'Eiravel existe. C'est la vérité objective et elle n'est pas troublée par une vérité qu'elle ignore. Si quelqu'un lui disait qu'une analyste travaille dans la même section depuis 9 ans à reconstruire exactement les patterns que Syravel documente du côté opérationnel, elle ne serait pas perturbée par les 9 ans de non-collaboration — elle calculerait immédiatement si un contact était possible et à quel risque. C'est tout.

Les quatre extractions. Elle n'a pas besoin de les connaître. Elle a besoin de savoir qu'ils sont vivants. Vethis lui a transmis la confirmation à chaque fois. Quatre confirmations en 11 ans. C'est une mesure.

Syrethia a été extraite il y a 14 ans et vit à Thalassyr avec la culpabilité des survivants. Syravel a comblé son trou sans le savoir et vit dans le poste que Syrethia avait occupé. Si elles se rencontraient, Syrethia reconnaîtrait quelque chose. Syravel poserait des questions pratiques — comment fonctionnait le réseau avant, quelles vulnérabilités avaient été identifiées, ce qui avait forcé l'extraction.

Onze ans. La patience n'est pas une vertu pour elle — c'est une méthode. La plus fiable qu'elle connaisse pour continuer à être présente dans un endroit où sa présence fait quelque chose.`,
};

export default syravel;
