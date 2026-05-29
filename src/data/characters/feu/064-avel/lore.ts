import type { PersonnageLoreComplet } from '../../../lore-types';

const avel: PersonnageLoreComplet = {
  id: 64,
  nom: 'Avel',
  element: 'Feu',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 38 ans — un Capteur de l\'Empire dont la corpulence dit la formation plus que l\'héritage. Il est dense, économique dans ses mouvements, avec une façon d\'entrer dans un espace qui évalue d\'abord les sorties. Formé depuis l\'enfance à être efficace dans des situations où l\'efficacité était la condition de la survie.',
    peau: 'Brune Homme-Lien avec une luminescence rouge aux avant-bras — l\'élément Feu visible en permanence à faible intensité. Il ne la contrôle pas complètement. C\'est la seule chose qu\'il n\'a pas entièrement maîtrisée.',
    yeux: 'Rouge foncé — la couleur la plus intense de l\'élément Feu. Ses yeux sont reconnaissables. Dans une mission qui nécessite la discrétion, c\'est un problème. Il porte des lentilles tintées en service. Il ne les porte pas maintenant.',
    vetements: 'Tenue de Capteur impérial en déplacement — pas les insignes officiels, pas de couleurs de l\'Empire. Ce qu\'il porte dit "voyageur". Seul le port de ses armes dit quelque chose d\'autre à qui sait lire.',
    signes_particuliers: 'Il ne parle pas de sa mission à moins qu\'on lui pose la question directement. Et si on lui pose la question directement, il répond avec une vérité suffisante pour satisfaire sans révéler le reste.',
  },

  psychologie: {
    dominante: 'Capteur de l\'Empire envoyé pour les 39 enfants de Virex — sa mission est d\'évaluer leur potentiel et de déterminer si certains doivent être "reclassés" (un terme dont il connaît la définition complète). Il croit à la mission. Il ne se pose pas les questions qui le rendraient moins efficace.',
    mecanisme_de_defense: 'La mission comme identité. Tant qu\'il fait son travail, il n\'a pas à décider de ce qu\'il pense de son travail. Cette protection a fonctionné pendant 14 ans. Elle commence à avoir des fissures.',
    contradiction_interne: 'Il est Homme-Lien avec un élément Feu fort — le type de profil que le Premier Avatar (60) avait quand il a été "intégré" plutôt qu\'éliminé. Avel ne sait pas entièrement pourquoi lui est devenu Capteur et d\'autres ont été éliminés. Il ne cherche pas à le savoir.',
    rapport_aux_autres: 'Le Second Avatar (59) est sa cible — pas pour être éliminé, pour être capturé. Ces deux options ne sont pas équivalentes. Il a ses instructions et elles sont claires. Thyven (62) est l\'administrateur de Virex — Avel le considère comme un fonctionnaire confédéral qui sera neutre dans la mission. Il n\'a pas encore rencontré Thyven. Lysael (63) est une complication non anticipée — il ne sait pas qu\'elle opère à Virex pour la Convergence.',
    vision_du_monde: 'L\'Empire est l\'ordre. L\'ordre permet la vie. Les Capteurs maintiennent l\'ordre. Cette chaîne logique est sa fondation. Il ne l\'examine pas parce qu\'une fondation qu\'on examine pendant qu\'on marche dessus est dangereuse.',
  },

  histoire: {
    enfance: {
      titre: 'L\'intégration',
      contenu: 'Identifié à 9 ans comme Homme-Lien Feu avec un potentiel de Capteur. L\'Empire avait fait une offre à sa famille — éducation, formation, position. Sa famille avait accepté. Il n\'avait pas eu le choix à l\'époque. À 38 ans, il considère que c\'était le bon choix. Il ne sait pas si c\'est vrai ou si c\'est ce qu\'on lui a appris à penser.',
    },
    arrivee: {
      titre: 'Les 14 ans',
      contenu: 'En 14 ans de service comme Capteur, il avait réalisé 23 missions. Il n\'avait pas échoué. La mission de Virex était la 24e. C\'est la première pour laquelle on lui avait dit que la cible était un Avatar.',
    },
    premier_conflit: {
      titre: 'La 24e mission',
      contenu: 'Quand le Premier Avatar (60) lui avait dit que la cible était le Second Avatar — un Homme-Lien multi-élémentaire de 28 ans — il avait posé une seule question : "capturer ou éliminer". On lui avait dit "capturer". Il avait pris ses instructions et était parti. La question suivante qu\'il n\'avait pas posée : pourquoi capturer plutôt qu\'éliminer.',
    },
    revelation: {
      titre: 'Les 48 heures',
      contenu: 'Il est à 48h de Virex. Il a les coordonnées approximatives du Second Avatar dans la ville. Il a aussi les informations sur les 39 enfants — sa mission inclut une évaluation des 39 pendant qu\'il est sur place. Ces deux objectifs, simultanément à Virex, dans une ville où un administrateur confédéral et une recruteuse de la Convergence opèrent déjà, créent une situation qu\'il n\'a pas entièrement modélisée.',
    },
    etat_actuel: {
      titre: 'En route',
      contenu: 'Il est en route. Il sera à Virex dans 48h. Il ne sait pas encore que Thyven (62) est au courant de la présence du Second Avatar et ne l\'a pas dénoncé. Il ne sait pas que Lysael (63) est la pour la Convergence. Ces informations changent la mission sans la changer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'avel_second_avatar',
      titre: 'La confrontation',
      description: 'Dans 48h, Avel et le Second Avatar (59) seront dans la même ville. Avel a des instructions claires — capturer. Le Second Avatar a appris à survivre à 28 ans de fuite. Ce que Thyven (62) fait dans les 48h suivantes détermine si la confrontation se produit dans des conditions où Avel peut appliquer ses instructions.',
      personnages_impliques: [59, 62],
      declencheur: 'Arrivée d\'Avel à Virex',
      consequence: 'Confrontation avec le Second Avatar dans des conditions que ni l\'un ni l\'autre ne contrôle entièrement',
    },
    {
      id: 'avel_39',
      titre: 'Les 39 et la Convergence',
      description: 'Sa mission inclut une évaluation des 39 enfants. Lysael (63) a 24 familles en confiance pour la Convergence. Si Avel et Lysael opèrent simultanément à Virex, leurs objectifs entrent en collision. La Convergence et l\'Empire ont des positions opposées sur les 39 — et Avel n\'était pas préparé à gérer une opération Convergence active en même temps que sa mission principale.',
      personnages_impliques: [63, 62],
      declencheur: 'Avel découvrant la présence de Lysael à Virex',
      consequence: 'Complication de la mission principale par un conflit de juridiction avec la Convergence',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Capteur impérial à 48h de Virex. Mission : capturer le Second Avatar (59), évaluer les 39 enfants. Ne sait pas que Thyven (62) connaît la présence du Second Avatar, ni que Lysael (63) opère pour la Convergence à Virex.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'adversaire', note: 'Sa cible. Instructions : capturer. Pas éliminer. La différence est importante.' },
    { id: 60, nom: 'Premier Avatar', type: 'allié', note: 'Lui a donné la mission. Attend les résultats.' },
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administrateur confédéral qu\'il considère neutre. Ne sait pas encore qu\'il ne l\'est pas.' },
  ],

  combat: {
    sorts: [
      'Frappe de Capteur (Feu) — décharge concentrée à courte distance — paralysie d\'une cible sans dommages permanents',
      'Bouclier thermique (Feu) — protection contre les éléments adverses — résistance aux attaques élémentaires',
      'Poursuite ardente (Feu) — accélération par propulsion de Feu — vitesse maximale sur courte distance',
    ],
  },

  image_prompts: [
    {
      id: 'avel_route',
      description: 'Avel en route vers Virex — un Homme-Lien de 38 ans marchant dans une route de l\'Isthme, ses yeux rouges derrière des lentilles tintées. Il ne regarde pas le paysage. Il regarde vers sa destination. Son expression est de quelqu\'un qui a une mission et qui avance. La question de ce que la mission implique est mise de côté.',
      style: 'réaliste Homme-Lien Capteur, route de l\'Isthme vers Virex, yeux rouges sous lentilles, mission claire, questions mises de côté, efficacité comme identité',
    },
  ],

  lore_long: `Avel est le Capteur de l'Empire envoyé par le Premier Avatar (60) pour capturer le Second Avatar (59) à Virex. Il sera sur place dans 48h.

Sa mission inclut aussi une évaluation des 39 enfants double-puissance de Virex. Lysael (63) opère pour la Convergence dans la même ville. Il ne le sait pas encore.

Thyven (62) a rencontré le Second Avatar et ne l'a pas dénoncé. Avel ne le sait pas non plus. Ces deux informations changent les conditions de sa mission sans la changer.`,
};

export default avel;
