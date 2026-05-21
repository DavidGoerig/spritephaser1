// ============================================================
//  THRYSS — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 4 | Feu | Pyriens | Parti de l'Acier | Gardien
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [P] survive dans un abri Acier
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 4,
  nom: 'Thryss',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: "Parti de l'Acier",

  apparence: {
    taille_corpulence: `Mètre soixante-dix-huit, bâti compact et stable. Le genre de corps qui ne fait pas d'effort visible — tout est sous-jacent, économique. Thryss ne gesticule pas. Il occupe l'espace qu'il occupe et pas un centimètre de plus.`,
    peau: `Rouge clair avec des taches brunes régulières — le Feu de Thryss court sous la peau d'une façon particulièrement visible chez les Pyriens de lignée Acier. Il ne rosit pas sous l'émotion. Sa peau est stable.`,
    yeux: `Gris-brun avec des reflets dorés très discrets. Yeux d'ingénieur — ils regardent les structures, les angles, les points de tension. Rarement les visages directement.`,
    cheveux: `Brun foncé coupés nets, début de gris aux tempes à trente-sept ans. Il se coupe les cheveux avec une régularité mécanique, le premier lundi de chaque mois.`,
    vetements: `Uniforme de travail gris du Parti de l'Acier avec les bordures bleues — sobre, fonctionnel. Sur les manches : trois bandes horizontales dorées correspondant à son niveau d'ingénierie certifié. Il ne les polisse pas mais il ne les laisse pas non plus se ternir.`,
    signes_particuliers: `Une calculatrice de contraintes thermiques — un outil d'ingénierie qui ressemble à une règle à calcul ancienne, en alliage d'acier. Il l'a construite lui-même à seize ans. Il la garde dans la poche intérieure de sa veste. Il ne la montre pas aux gens. Quand il a besoin de réfléchir, il la sort et la fait tourner dans ses mains.`,
  },

  psychologie: {
    dominante: `Pour Thryss, la structure protège les gens. Ce n'est pas une métaphore politique — c'est une observation empirique. Son père avait conçu l'abri du sous-sol familial vingt ans avant la Rupture, avec des spécifications thermiques qui dépassaient largement le standard de l'époque. Thryss et sa mère et deux voisins ont survécu dans cet abri pendant sept heures. La structure les a protégés. Les gens dans les constructions standard du Quatrième District n'ont pas eu cette chance.`,
    contradictions: `Il sait que l'abri de son père a existé parce que son père était ingénieur certifié du Parti de l'Acier et pouvait construire hors standard pour lui-même. Il sait que les gens du Quatrième District n'avaient pas ça. Il sait que son argument — "la structure protège" — ne s'applique qu'à ceux qui peuvent accéder à la structure. Cette contradiction ne l'a pas convaincu d'abandonner son argument. Elle l'a convaincu de travailler à rendre la structure accessible à plus de monde. Ce qui est plus lent et moins satisfaisant qu'une conversion idéologique.`,
    peur: `Que le Parti du Feu ait raison sur l'essentiel. Pas sur tout — ils exagèrent, ils simplifient, ils exploitent. Mais la rage de Gravel contre la négligence structurelle est légitimement fondée, et Thryss en est conscient.`,
    desir: `Un système de maintenance thermique qui fonctionne pour tout le monde. Standards de construction applicables aux districts défavorisés. Inspections indépendantes financées par le Parti de l'Acier sans attendre le consentement impérial. Il a des propositions précises. Il les soumet depuis six ans. Elles avancent, lentement.`,
    rapport_au_pouvoir: `Son Feu est contrôlé et précis — des cônes thermiques calibrés, des barrières stables, des protections durables. Le Feu de Thryss ne déborde pas. Il fait exactement ce qu'il est censé faire. C'est à la fois sa force et ce qui rend les gens du Parti du Feu méfiants envers lui.`,
  },

  histoire: {
    origine: {
      titre: "L'abri de son père",
      texte: `Thryss est né dans le Sixième District de Khar-Vurn, dans une famille d'ingénieurs du Parti de l'Acier depuis trois générations. Son père Erkhal était spécialisé en thermodynamique structurelle — la science de comment construire des bâtiments qui survivent à la chaleur géothermique au lieu de la subir.

Erkhal avait conçu l'abri familial quand Thryss avait deux ans. Pas parce qu'il prévoyait une catastrophe — parce qu'il ne construisait jamais rien sans prévoir les pires cas. Le sous-sol était en acier renforcé, isolation thermique triple couche, réserves d'air pour douze heures, porte étanche manuelle.

À l'époque, ses collègues avaient trouvé ça excessif.`,
    },
    eveil: {
      titre: 'Sept heures dans le sous-sol',
      texte: `Thryss avait quinze ans le jour de la Rupture. Il était dans le sous-sol avec sa mère et deux voisins que son père avait fait entrer avant de repartir vérifier les systèmes de son bâtiment d'ingénierie à trois cents mètres de là.

Sept heures à entendre ce qui se passait dehors. Sa mère n'avait pas crié. Elle avait regardé la porte étanche et attendu.

Erkhal était revenu après la fin de la surtension. Il avait des brûlures sur les avant-bras mais il marchait. Le bâtiment d'ingénierie avait tenu parce qu'il l'avait construit aussi.

Thryss ne lui a jamais demandé pourquoi il n'était pas resté dans l'abri avec eux. Il connaît la réponse.`,
    },
    rupture: {
      titre: 'Ce que les autres districts n\'avaient pas',
      texte: `Après la Rupture, Thryss avait passé deux semaines à parcourir les quartiers touchés avec les équipes de son père. Il était venu pour aider au déblayage. Ce qu'il avait vu l'avait arrêté.

Les bâtiments qui avaient tenu et ceux qui n'avaient pas tenu n'étaient pas séparés par la chance. Ils étaient séparés par les spécifications de construction. Les bâtiments aux normes standard du Parti de l'Acier avaient résisté à soixante-dix pour cent de la surtension. Les constructions hors-norme ou vieillissantes — principalement dans le Quatrième District — avaient cédé.

L'abri de son père avait tenu à cent pour cent parce que son père avait construit à trois fois les normes standard. Les gens du Quatrième District n'avaient pas eu de Erkhal.

Il s'était inscrit au programme d'ingénierie du Parti de l'Acier le lendemain.`,
    },
    maintenant: {
      titre: 'Ingénieur et représentant',
      texte: `Thryss est ingénieur certifié de niveau 3 et représentant technique du Parti de l'Acier dans les négociations inter-districts sur les normes de construction. Il a soumis six propositions de révision des standards thermiques depuis sa certification. Deux ont été adoptées, partiellement. Quatre sont "en cours d'examen".

Il rencontre Gravel dans les mêmes assemblées depuis deux ans. Ils ne sont pas amis. Ils ne sont pas ennemis. Gravel porte la colère, Thryss porte les plans. Parfois ils pointent dans la même direction.

Ce qui inquiète Thryss en ce moment : Skarith lui a dit que les nouvelles constructions du Septième District ont été approuvées avec les anciens standards. Quelqu'un dans l'administration a contourné les nouvelles normes. Il cherche lequel.`,
    },
    objectif: {
      titre: 'Les normes obligatoires',
      texte: `Thryss veut que les normes de construction thermique deviennent obligatoires pour tous les districts, financées par une taxe sur les surplus industriels. Pas une faveur accordée aux pauvres. Un standard universel qui s'applique à tout le monde de la même façon.

Il sait que ça prend du temps. Il continue de soumettre des propositions. C'est la seule chose qu'il sait faire qui change réellement quelque chose, même lentement.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Ingénieur et représentant Parti de l'Acier. Survivant de la Rupture grâce à l'abri paternel. Travaille à rendre cette protection accessible à tous, par les normes. En désaccord avec Gravel sur les méthodes, pas sur le constat.`,
  },

  relations: [
    {
      personnage_id: 9,
      nom: 'Skarith',
      type: 'allié_Acier',
      depuis_ici: `Skarith était commandant de la garde civile pendant la Rupture. Ils ne se connaissaient pas à l'époque — ils se sont rencontrés dans les assemblées post-Rupture. Skarith respecte la rigueur de Thryss. Thryss apprécie que Skarith ne prenne pas de décisions irréfléchies. C'est une relation de travail productive sans chaleur particulière.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 3,
      nom: 'Gravel',
      type: 'adversaire_politique',
      depuis_ici: `Gravel croit que la colère est motrice. Thryss croit que la colère sans plan ne bâtit rien. Ils ont raison tous les deux et ne peuvent pas se le dire facilement dans des assemblées politiques. Ce qui les rapproche le plus : ils ont tous les deux passé du temps dans les décombres du Quatrième District juste après la Rupture. Ce souvenir commun ne suffit pas pour tout le reste.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'contact_impérial',
      depuis_ici: `Cendrix est passée par les assemblées techniques en mission d'audit il y a un an. Elle avait posé des questions précises sur les normes de maintenance — trop précises pour un audit ordinaire. Thryss avait noté ça sans savoir quoi en faire. Elle était polie, efficace, et portait l'uniforme impérial d'une façon qui indiquait qu'elle avait autre chose dans les poches.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Thryss combat en défenseur — il crée des zones stables que ses alliés peuvent utiliser, contrôle les entrées et sorties d'espace, empêche les débordements. Son Feu est un outil de contrôle thermal, pas d'attaque.`,
    sorts: [
      {
        nom: 'Barricade Thermique',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Thryss crée une barrière de chaleur dense sur une ligne de 2 cases. Les ennemis qui tentent de franchir subissent des dégâts et sont ralentis de 50%. Les alliés traversent librement. Durée : 3 tours.`,
        description_lore: `L'application directe de ce que son père lui a appris — une chaleur qui retient plutôt qu'une chaleur qui brûle. La différence est dans la calibration.`,
      },
      {
        nom: 'Zone Tempérée',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Thryss stabilise la température dans une zone de 3×3 cases. Les dégâts thermiques entrants et sortants dans la zone sont réduits de 40%. Durée : 4 tours. Les alliés dans la zone régénèrent 5% de PV par tour.`,
        description_lore: `Développé après avoir étudié comment les abris Acier régulent la chaleur — créer une bulle de normalité thermique dans le chaos.`,
      },
      {
        nom: 'Scellement Thermique',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Thryss verrouille thermiquement une cible, empêchant l'utilisation de sorts de mouvement (téléportation, dash) pendant 2 tours. La cible subit des dégâts mineurs si elle tente de se déplacer rapidement.`,
        description_lore: `Une application de la thermodynamique structurelle au corps — un être élémentaire qui essaie de se déplacer vite crée des gradients thermiques. Thryss peut bloquer ces gradients.`,
      },
      {
        nom: 'Bouclier du Sous-sol',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Thryss projette un bouclier thermique sur un allié ciblé, absorbant jusqu'à 40% de ses PV max en dégâts. Si le bouclier tient les 3 tours complets, il explose en chaleur vers les ennemis adjacents.`,
        description_lore: `Sept heures dans le sous-sol de son père. La forme ultime de son Feu est protectrice, pas offensive. Il le sait depuis qu'il a quinze ans.`,
      },
      {
        nom: 'Calcul Structural',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura passive. Thryss analyse les patterns de mouvement ennemis. Après 2 tours d'observation, il prédit les prochains déplacements adverses. Ses sorts de zone ont 25% de chances supplémentaires de toucher. Les alliés à portée voient les zones de danger indiquées visuellement.`,
        description_lore: `Il regarde les structures, les angles, les points de tension. En combat, c'est la même chose — des flux thermiques qui ont des trajectoires prévisibles si on sait les lire.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Thryss',
      description: `Homme Pyrien, 37 ans, bâti compact, peau rouge clair avec taches brunes. Yeux gris-brun concentrés. Cheveux brun foncé, début de gris. Uniforme gris du Parti de l'Acier avec bordures bleues et trois bandes dorées sur les manches. Expression calme et évaluatrice. Sa calculatrice d'ingénieur visible dans sa main. Fond : bureau d'ingénierie avec plans de construction. Style concept art Riot Games, éclairage neutre-industriel.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1200,

  lore_long: `CE QUE LA STRUCTURE PROTÈGE
Un chapitre de la vie de Thryss, ingénieur et représentant du Parti de l'Acier

—

I.

Les plans du Septième District étaient approuvés avec les anciens standards.

Thryss les avait reçus ce matin par courrier interne, avec une mention "validation finale accordée" et le tampon de l'administration de district. Il les avait dépliés sur sa table de travail et avait cherché la section thermique pendant dix minutes avant de trouver la ligne qu'il cherchait : Isolation thermique — Standard type B, conformément au règlement de 34.

Le règlement de 34. Celui d'avant la révision. Celui que lui avait fait passer, partiellement, il y a deux ans.

Quelqu'un dans l'administration avait approuvé des plans avec des normes caduques. Délibérément ou par erreur — la différence était importante, mais le résultat était identique : des constructions au Septième District qui résisteraient à soixante-dix pour cent d'une surtension thermique au lieu de quatre-vingt-cinq.

Quinze pour cent. Il avait passé six ans à obtenir ces quinze pour cent.

—

II.

Il n'appela pas immédiatement. Il prit sa calculatrice dans la poche intérieure — reflex de vingt ans — et la fit tourner dans ses doigts pendant quelques minutes.

Son père Erkhal ne s'était jamais énervé contre les systèmes administratifs. Il disait que s'énerver contre un système c'était comme s'énerver contre la gravité : une dépense d'énergie qui ne change rien à la trajectoire de l'objet en chute. Ce qu'on pouvait faire, c'était construire des amortisseurs.

Thryss avait compris ce que son père voulait dire à dix-neuf ans, dans les décombres du Quatrième District, en regardant quels bâtiments avaient tenu et lesquels n'avaient pas tenu. La différence n'était pas dans les intentions. Elle était dans les spécifications.

Le Septième District avait des bâtiments approuvés avec des spécifications insuffisantes. Ça, il pouvait le corriger. Lentement. Par les voies officielles, par les recours techniques, par la démonstration que les nouvelles normes existaient et avaient été adoptées et que leur non-application était une erreur administrative corrigible.

Ce n'était pas satisfaisant. C'était le seul outil qu'il avait qui fonctionnait réellement.

—

III.

Il appela Skarith en premier — pas parce que Skarith pourrait l'aider directement, mais parce que Skarith connaissait les circuits administratifs de la garde civile qui supervisait les inspections de construction. Skarith écouta, posa trois questions précises, dit qu'il verrait ce qu'il pouvait trouver.

Puis il appela le bureau des normes de district. Il fut mis en attente pendant vingt minutes.

Pendant ces vingt minutes, il regarda par la fenêtre le profil de Khar-Vurn — les conduits géothermiques qui couraient le long des bâtiments, les nuages de vapeur permanents au-dessus des zones de forge, la silhouette lointaine des districts hauts où les constructions étaient solides parce que les gens qui y vivaient pouvaient se payer du solide.

Le Septième District était entre les deux. Pas le Quatrième, pas les hauteurs. Des gens ordinaires dans des bâtiments qui devraient être suffisamment solides pour les protéger si quelque chose de semblable à la Rupture se reproduisait un jour.

Ce serait le cas, si les normes s'appliquaient.

—

IV.

"— Bureau des normes, Service technique, district sept, en quoi puis-je vous—"

"Thryss, ingénieur niveau trois, Parti de l'Acier. J'ai les plans du Septième District approuvés ce matin, référence construction 7-D-441. Section thermique, article 12 : isolation standard type B, conformément au règlement de 34. Ce règlement a été révisé il y a dix-huit mois. Les nouvelles normes sont le standard type C. Je veux savoir qui a approuvé ces plans et pourquoi le règlement de 34 est encore utilisé."

Silence bref.

"Je vais devoir vous transférer au responsable de section."

"Je sais. Faites-le."

Il fut transféré deux fois. La troisième personne avait les informations. Un erreur d'archivage, apparemment — le bureau avait utilisé un modèle de validation avec l'ancienne référence réglementaire. Corrigeable. Un nouveau tampon serait émis cette semaine.

"Cette semaine ou aujourd'hui ?" demanda Thryss.

"Cette semaine."

"La construction démarre lundi. J'ai besoin du tampon avant lundi."

Pause.

"Je vais voir ce qu'on peut faire."

"Le règlement l'exige."

Il avait raccroché. Sorti sa calculatrice et l'avait fait tourner encore quelques tours.

Son père aurait dit qu'il avait construit un amortisseur aujourd'hui. Ce n'était pas incorrect. C'était simplement très lent et très peu satisfaisant comme façon de construire quelque chose.

Il avait rappelé le bureau deux heures plus tard pour confirmer. Le tampon serait émis vendredi.

Ce n'était pas une victoire. C'était un ajustement de trajectoire. La trajectoire était correcte. L'amortisseur avait fonctionné.`.trim(),
};

export default lore;
