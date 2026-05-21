import type { PersonnageLoreComplet } from '../../../lore-types';

const iskraven: PersonnageLoreComplet = {
  id: 341,
  nom: 'Iskraven',
  element: 'Stellaire',
  element2: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Compact, avec une tension physique permanente — quelqu\'un qui s\'attend à être contredit et qui s\'est préparé à tenir sa position.',
    peau: 'Blanc légèrement grisé Givrin avec des éclats stellaires visibles aux tempes et aux poignets — des points de concentration de l\'élément Stellaire primaire.',
    yeux: 'Blanc-or. Lumineux dans l\'obscurité d\'une façon qui a été source de malaise pour ceux qui ne le connaissent pas. Il a appris à baisser les yeux dans les premières rencontres.',
    vetements: 'Tenue simple, modifiée pour minimiser les marqueurs sociaux. Il a été associé à la cour astronomique pendant 12 ans — il a retiré tous les marqueurs de cette appartenance.',
    signes_particuliers: 'Il montre les alignements directement — il lève une main et trace les trajectoires dans l\'air, comme s\'il dessinait sur quelque chose que les autres devraient voir. Ce n\'est pas une métaphore. Il les voit.',
  },

  psychologie: {
    dominante: 'Maintien de la prédiction : le gel actuel correspond à un alignement stellaire immuable qui détermine la durée du Gel Éternel. Cette durée est calculable. Elle a été calculée. Le dégel n\'est pas imminent — l\'alignement n\'est pas à son point de retournement. La "fenêtre de 18 mois" que d\'autres annoncent est une mauvaise lecture des trajectoires.',
    mecanisme_de_defense: 'La précision comme résistance. Il répond aux contradictions avec des calculs. Si les calculs sont incorrects, il veut voir les calculs alternatifs. Pas l\'interprétation — les calculs.',
    contradiction_interne: 'Il a été marginalisé par la Monarchie et la communauté scientifique Givrin. Sa marginalisation est réelle. Mais la marginalisation n\'est pas une preuve qu\'il a tort. Il le sait. Il ne sait pas si son attachement à cette prédiction est basé sur les données ou sur le refus d\'avoir eu tort pendant 12 ans.',
    rapport_aux_autres: 'Karath (52) a archivé sa prédiction — sans la valider, sans l\'invalider. Il l\'a archivée comme perspective minoritaire. Velkris (166) est l\'astronome indépendant avec qui il a eu le plus de confrontations directes sur les calculs — des confrontations où ni l\'un ni l\'autre n\'a plié.',
    vision_du_monde: 'Les alignements stellaires déterminent les conditions climatiques à Crysalme depuis que l\'histoire a été enregistrée. Ignorer les alignements pour annoncer des dégels politiquement utiles est une façon de mentir avec des données incomplètes.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier calcul',
      contenu: 'À 19 ans, il avait calculé qu\'un cycle de gel intense à Crysalme correspondait à un alignement stellaire sur 200 ans de données archivées. La correspondance était presque parfaite. Il avait présenté la corrélation à ses professeurs. Ils avaient dit "intéressant" et n\'en avaient plus parlé.',
    },
    arrivee: {
      titre: 'L\'intégration à la cour astronomique',
      contenu: 'À 28 ans, Thyval (55) l\'avait inclus dans la cour astronomique pour sa méthode de calcul des cycles longs. Il avait travaillé 12 ans avec la cour. Ses calculs sur le Gel Éternel avaient conclu que l\'alignement responsable ne serait pas à son point de retournement avant 80 à 120 ans. Ce n\'était pas le résultat attendu.',
    },
    premier_conflit: {
      titre: 'La marginalisation',
      contenu: 'À 42 ans, Velskrevyn (342) avait présenté ses calculs sur la "fenêtre de 18 mois". La cour astronomique avait accueilli ces calculs favorablement. Iskraven avait présenté ses contre-calculs. La cour avait choisi la méthode de Velskrevyn. Il n\'avait pas été exclu formellement — les commandes s\'étaient taries.',
    },
    revelation: {
      titre: 'Les données d\'Iskraeth',
      contenu: 'Iskraeth (337) lui avait partagé ses observations sur les cycles précédents — 300 ans de données directes. Iskraven avait passé 4 mois à intégrer ces données dans ses modèles. La conclusion avait changé marginalement — le retournement d\'alignement était à 60 à 90 ans, pas 80 à 120. Il avait ajusté sa prédiction. Il n\'avait pas abandonné la prédiction.',
    },
    etat_actuel: {
      titre: 'La prédiction révisée',
      contenu: 'Sa prédiction actuelle : le dégel possible dans 60 à 90 ans, pas 18 mois. Cette prédiction n\'a pas d\'oreilles à la cour. Karath (52) l\'a archivée. Velkris (166) continue de débattre. Thyvalskren (340) n\'a pas pris position publiquement sur le débat entre les deux méthodes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskraven_prediction_revisee',
      titre: 'La prédiction ajustée',
      description: 'L\'intégration des données d\'Iskraeth (337) a réduit sa prédiction de 80-120 ans à 60-90 ans pour le dégel. Cet ajustement est une correction de sa méthode, pas une capitulation. La fenêtre de 18 mois reste une mauvaise lecture selon ses calculs. La différence entre 18 mois et 60 ans n\'est pas une différence de degré.',
      personnages_impliques: [337, 52],
      declencheur: 'Intégration des données directes d\'Iskraeth dans les modèles',
      consequence: 'Prédiction révisée de 60-90 ans — ajustement sans abandon, désaccord avec la fenêtre de 18 mois maintenu',
    },
    {
      id: 'iskraven_debat_velkris',
      titre: 'Les confrontations avec Velkris',
      description: 'Ses débats avec Velkris (166) sont les seuls contextes où ses calculs sont traités sérieusement — ni acceptés, ni ignorés, mais disputés avec les mêmes outils. Ces confrontations ont produit des ajustements des deux côtés sans résolution. Ils continuent de débattre. Le résultat du débat n\'est pas certain.',
      personnages_impliques: [166],
      declencheur: 'Débat continu sur les méthodes de calcul des cycles stellaires',
      consequence: 'Débat non résolu — ajustements mutuels, prédictions divergentes maintenues',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Prophète marginalisé à Crysalme. Sa prédiction d\'un dégel dans 60-90 ans contredit la "fenêtre de 18 mois" dominante. Ses calculs sont archivés par Karath mais ignorés par la cour.',

  relations: [
    { id: 52, nom: 'Karath', type: 'allié', note: 'A archivé sa prédiction comme perspective minoritaire sans la valider ni l\'invalider.' },
    { id: 166, nom: 'Velkris', type: 'contact', note: 'Seul astronome qui débat avec ses calculs sérieusement. Confrontations répétées, aucune résolution.' },
  ],

  combat: {
    sorts: [
      'Rayon stellaire (Stellaire) — projection d\'énergie stellaire concentrée — impact ciblé à longue distance',
      'Tempête de glace (Glace) — déclenchement d\'une rafale de cristaux glacés — zone de dommages',
      'Alignement stellaire (Stellaire + Glace) — création d\'un champ de résonance entre glace et énergie stellaire — perturbation des capacités adverses',
    ],
  },

  image_prompts: [
    {
      id: 'iskraven_calculs',
      description: 'Iskraven seul dans un espace ouvert de Crysalme — pas un bureau d\'astronome, un endroit quelconque. Il trace des trajectoires dans l\'air devant lui — des lignes lumineuses que lui seul voit clairement. Son expression est concentrée. Il n\'a pas l\'air de quelqu\'un qui est marginalisé. Il a l\'air de quelqu\'un qui fait quelque chose d\'important que les autres ne comprennent pas encore.',
      style: 'réaliste astronome marginalisé, trajectoires lumineuses dans l\'air, Crysalme extérieur, concentration solitaire',
    },
  ],

  lore_long: `Iskraven calcule que le dégel de Crysalme n\'aura pas lieu dans 18 mois. L\'alignement stellaire responsable du Gel Éternel ne sera à son point de retournement que dans 60 à 90 ans.

Sa prédiction contredit Velskrevyn (342). La cour a choisi Velskrevyn. Il n\'a pas abandonné ses calculs.

Les données directes d\'Iskraeth (337) ont ajusté sa prédiction de 80-120 ans à 60-90 ans. Pas une capitulation — une correction.

Karath (52) a archivé sa prédiction comme perspective minoritaire. Velkris (166) débat avec lui sérieusement. Personne d\'autre.`,
};

export default iskraven;
