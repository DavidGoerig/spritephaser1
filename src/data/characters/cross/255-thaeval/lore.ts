import type { PersonnageLoreComplet } from '../../../lore-types';

const thaeval: PersonnageLoreComplet = {
  id: 255,
  nom: 'Thaeval',
  element: 'Fée',
  element2: 'Plante',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand, légèrement voûté mais pas par âge — par l\'habitude de se pencher vers les plantes, de se mettre à leur hauteur.',
    peau: 'Fée verte pâle, presque argentée, avec des marques de Plante qui ressemblent à des nervures végétales légèrement visibles le long des avant-bras.',
    yeux: 'Vert profond, avec une luminescence basse au niveau des iris — caractéristique fée rare, plus prononcée depuis 3 semaines.',
    vetements: 'Tenue de botaniste de la Citadelle, vert sombre avec tablier de lin. Toujours des traces de terre ou de sève quelque part. Il ne les efface pas entièrement.',
    signes_particuliers: 'Parle aux arbres depuis l\'enfance — ce n\'est pas une métaphore, c\'est une pratique. Pendant 58 ans aucun arbre n\'avait répondu. Il y a 3 semaines, un l\'a fait.',
  },

  psychologie: {
    dominante: 'Présence contemplative. Il vit dans une attention lente, accordée aux cycles des plantes et des saisons. Les 400 ans des arbres fées qu\'il entretient lui donnent une perspective que les humains trouvent parfois déconcertante.',
    mecanisme_de_defense: 'Le silence pratique. Ce qu\'il ne sait pas comment nommer, il ne le nomme pas encore. Ce n\'est pas du refoulement — c\'est de la patience. Les arbres ne pressent rien.',
    contradiction_interne: 'Il entend une résonance qu\'aucun des 4 autres jardiniers qui travaillent sur le même arbre ne perçoit. Il ne sait pas si c\'est lui qui est différent ou l\'arbre qui le choisit — et si c\'est l\'arbre qui le choisit, il se demande pourquoi maintenant, à 58 ans, après 30 ans dans ces jardins.',
    rapport_aux_autres: 'Cordial et légèrement absent. Les gens à la Citadelle l\'apprécient comme on apprécie un jardin — pour ce qu\'il crée, pas pour ce qu\'il est. Il n\'en souffre pas. Il a ses arbres.',
    vision_du_monde: 'Les choses qui existent depuis 400 ans savent quelque chose que les choses récentes ignorent. Il leur a toujours fait confiance pour ça. Ce qui a changé il y a 3 semaines, c\'est qu\'un de ces choses lui a répondu directement.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant qui attendait une réponse',
      contenu: 'Né dans une communauté fée rurale à la périphérie de l\'Empire, entouré d\'arbres fées de 200 ans. À 7 ans il avait commencé à leur parler — pas des prières, des conversations. Aucun n\'avait répondu. À 12 ans il avait conclu que soit les arbres répondaient d\'une façon qu\'il ne pouvait pas encore entendre, soit ils ne répondaient pas. Les deux possibilités lui semblaient également dignes d\'attention.',
    },
    arrivee: {
      titre: 'Les jardins de la Citadelle',
      contenu: 'Recruté à 28 ans pour les jardins de la Citadelle — les seuls à héberger des arbres fées de 400 ans sur ce continent. L\'offre était une évidence. Il n\'a jamais considéré d\'autre position.',
    },
    premier_conflit: {
      titre: 'Trente ans d\'attention sans retour',
      contenu: 'Pendant 30 ans dans les jardins de la Citadelle, il a continué à parler aux arbres. Pas tous les jours — aux vieux, aux arbres fées qui avaient des cycles assez longs pour qu\'une conversation ait un sens différent du bavardage. Aucune réponse. Il n\'a pas perdu confiance. Il a ajusté ses attentes temporelles.',
    },
    revelation: {
      titre: 'La résonance',
      contenu: 'Il y a 3 semaines, un vendredi matin, il travaillait seul sur le plus ancien des arbres fées — 412 ans. Sa main gauche était posée sur l\'écorce, la droite taillait une branche. La résonance a duré 4 secondes. Pas une voix — une pression dans sa poitrine, une qualité d\'attention qu\'il avait, la sensation d\'être regardé de l\'intérieur vers l\'extérieur. Quand elle s\'est arrêtée il a posé ses outils, s\'est assis par terre, et est resté là 20 minutes. Puis il s\'est levé et a repris le travail. N\'a rien dit à personne.',
    },
    etat_actuel: {
      titre: 'L\'arbre qui a répondu',
      contenu: 'Depuis 3 semaines, il est retourné à l\'arbre chaque jour. La résonance s\'est reproduite 6 fois. Jamais quand un autre jardinier est présent. Les 4 autres travaillent régulièrement sur le même arbre sans percevoir rien de particulier — il les a discrètement observés. Il ne sait pas comment dire ça. "L\'arbre m\'a répondu" est vrai et complètement inadéquat comme formulation. Il continue à attendre de comprendre ce qu\'il entend avant de tenter de le nommer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thaeval_arbre_leth',
      titre: 'La même résonance à 2000 km',
      description: 'Leth (34) — Sylvan à Sylvera — ressent depuis des mois une résonance similaire via certains arbres anciens du réseau de Thalindre. La distance entre eux est de plus de 2000 km. Ils ne savent pas que l\'autre existe. Ce qu\'ils perçoivent est peut-être le même signal, la même conversation, le même appel — ou deux aspects différents de quelque chose qui n\'a pas encore de nom.',
      personnages_impliques: [34],
      declencheur: 'Signal élémentaire commun via le réseau des arbres anciens',
      consequence: 'Deux points de réception d\'un signal sans émetteur connu — ou avec un émetteur connu seulement par les arbres',
    },
    {
      id: 'thaeval_thalorn_racine',
      titre: 'La racine partagée',
      description: 'Thalorn (33) entretient le réseau de Thalindre — les forêts-tisseuses qui connectent les écosystèmes végétaux du continent. L\'arbre de 412 ans dans les jardins de la Citadelle partage peut-être une racine avec ce réseau. Si c\'est le cas, ce que l\'arbre transmet à Thaeval est peut-être filtré depuis Thalorn — ou depuis quelque chose que Thalorn entend aussi.',
      personnages_impliques: [33],
      declencheur: 'Architecture végétale des arbres fées anciens',
      consequence: 'Hypothèse de connexion réseau — non vérifiée, non vérifiable par Thaeval seul',
    },
    {
      id: 'thaeval_pur_signal',
      titre: 'L\'hypothèse du pur',
      description: 'Les 4 autres jardiniers qui travaillent sur le même arbre ne perçoivent rien. Deux d\'entre eux sont également Fée. La différence entre Thaeval et eux n\'est pas l\'élément — c\'est peut-être la cohérence élémentaire. Si Thaeval est un pur Fée, l\'arbre ne lui répond pas parce qu\'il est présent mais parce qu\'il est ce qu\'il est.',
      personnages_impliques: [],
      declencheur: 'Observation comparative des réactions des jardiniers',
      consequence: 'Signal de pureté élémentaire — non identifié par l\'Empire, non compris par Thaeval lui-même',
    },
  ],

  arcs: ['arc_citadelle_empire', 'arc_convergence_drain'],
  position_dans_arc: 'Pivot potentiel entre le monde végétal et le monde politique. Il est peut-être ce que les arbres attendent de trouver — et ce que la Convergence chercherait à drainer s\'ils savaient qu\'il existe. Il ne sait ni l\'un ni l\'autre.',

  relations: [
    { id: 34, nom: 'Leth', type: 'inconnue_qui_change_tout', note: 'Ressent la même résonance à 2000 km de distance. Ils ne se connaissent pas. Peut-être la même fréquence, peut-être le même arbre-réseau.' },
    { id: 33, nom: 'Thalorn', type: 'fantôme', note: 'Entretient le réseau auquel l\'arbre de 412 ans est peut-être connecté. Thaeval ne connaît pas son existence.' },
    { id: 246, nom: 'Sylviel', type: 'mentor', note: 'Employeur indirect — Thaeval ne la voit que rarement. Elle ne sait pas ce qu\'il entend dans les jardins.' },
  ],

  combat: {
    sorts: [
      'Croissance dirigée (Plante) — accélération ciblée de la croissance végétale dans un rayon de 5m',
      'Résonance fée-végétale (Fée) — communion avec les arbres anciens — perception de leur état et parfois de leurs messages',
      'Filet de racines (Plante) — immobilisation par croissance accélérée des racines souterraines',
    ],
  },

  image_prompts: [
    {
      id: 'thaeval_arbre',
      description: 'Thaeval debout contre l\'arbre fée de 412 ans, sa main posée sur l\'écorce. Sa poitrine se soulève légèrement différemment — la résonance est en train de se produire. Ses yeux vert profond sont mi-clos. Les nervures végétales sur ses avant-bras sont légèrement plus visibles. Autour de lui les jardins de la Citadelle, vides pour l\'instant.',
      style: 'réaliste fée-végétal, lumière dorée matinale, jardins de pierre et racines anciennes, tons verts et argentés',
    },
  ],

  lore_long: `L'arbre lui a répondu il y a 3 semaines. Il n'a pas encore dit à qui que ce soit.

Pas par secret — il n'y a rien à cacher. Mais "l'arbre m'a répondu" est une phrase qui mérite d'être comprise avant d'être prononcée, et il ne comprend pas encore ce qu'il entend.

La résonance dure entre 3 et 7 secondes. Ce n'est pas une voix. Thaeval a 58 ans et il a passé 40 de ces 58 ans à parler aux arbres sans recevoir de réponse — il sait la différence entre une projection et une réception. Ce qu'il reçoit depuis 3 semaines est une réception. Il ne projette rien qui ressemble à ça.

Les 4 autres jardiniers ne perçoivent rien. Il les a observés. Deux sont Fée comme lui. La différence n'est pas l'élément.

Leth perçoit quelque chose de similaire à 2000 km. Thaeval ne le sait pas. Si les arbres fées anciens partagent un réseau via les racines profondes — ce que Thalorn (33) entretient depuis des années sans que Thaeval ait jamais entendu son nom — alors ce qu'ils perçoivent l'un et l'autre est peut-être le même signal transmis à travers ce réseau. Ou deux aspects d'une même chose qui cherche des récepteurs suffisamment accordés.

Suffisamment accordés. C'est peut-être la clé. Si la cohérence élémentaire est ce qui permet la réception — si être un pur Fée est ce que l'arbre de 412 ans cherche à trouver — alors Thaeval n'est pas seulement un botaniste qui entend des arbres. Il est une fréquence particulière dans un réseau qui a attendu quelque chose.

La Convergence cherche des purs depuis des années. Sethara (238) a probablement produit un profil sur des Fées à haute cohérence. Thaeval n'est pas dans les registres. Les jardins de la Citadelle ne font pas l'objet d'évaluations systématiques — les botanistes ne sont pas des Élus.

L'arbre sait quelque chose que les deux systèmes ignorent encore.`,
};

export default thaeval;
