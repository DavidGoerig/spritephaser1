// ============================================================
//  THESSANDRA — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 10 | Feu | Pyriens | Dissidentes | Enchanteur-Soutien
//  Arc : La Forge Confisquée
//  Événements : Purge des Ordres Soigneurs [H] formée par Brasia
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 10,
  nom: 'Thessandra',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Mètre soixante-cinq, agile et rapide. Le genre de corps qui est à l'aise dans des espaces étroits — couloirs de maintenance, caves, passages de service. Elle ne prend pas plus de place que nécessaire, ce qui chez elle est une compétence acquise plutôt qu'une timidité.`,
    peau: `Rouge vif pour une Pyrienne — une teinte riche, vivante. Le Feu de Thessandra court près de la surface et ça se voit dans sa peau qui rayonne légèrement en toutes circonstances.`,
    yeux: `Ambre doré, expressifs, rapides. Elle regarde les gens en entier — mains, épaules, façon de se tenir. Une habitude de soignant : lire le corps avant de lire les mots.`,
    cheveux: `Brun-roux, longs, portés tressés en couronne autour de la tête pour les missions et défaits le reste du temps. Elle change coiffure selon le statut de la situation — couronne = mission, défaits = repos relatif.`,
    vetements: `Vêtements de civil neutres en mission — ni Dissidentes ni impériaux, des vêtements d'artisan ordinaire dans des tons gris et brun. Elle a une sacoche médicale qu'elle dissimule sous un manteau ou dans un faux fond de panier selon le contexte. Elle ne porte pas d'insigne.`,
    signes_particuliers: `Ses mains. Comme Brasia, elle soigne au contact — chaleur thermique précise, directe, médicale. Ses mains sont toujours légèrement plus chaudes que la normale. Elle porte parfois des gants dans les rues pour que ça ne se remarque pas. Contrairement à Brasia, elle sourit facilement — une qualité de présence chaleureuse qui met les patients à l'aise et qui n'est pas calculée.`,
  },

  psychologie: {
    dominante: `Thessandra soigne parce qu'elle sait comment et parce que les gens ont besoin d'être soignés. Ce n'est pas plus compliqué que ça pour elle. Brasia lui avait dit une fois que "soigner c'est politique qu'on le veuille ou non" — Thessandra avait hoché la tête mais ce n'était pas sa façon de voir les choses. Pour elle : quelqu'un est blessé, elle a les moyens de le soigner, elle soigne. La politique vient après.`,
    contradictions: `Elle a appris à disparaître, à ne pas laisser de traces, à ne jamais utiliser deux fois le même itinéraire. Ce sont des compétences que Brasia lui a transmises et qu'elle a perfectionnées. Elle les applique avec une efficacité qui étonne parfois les Dissidentes plus expérimentées. Elle n'est pas faite pour l'espionnage — elle l'a quand même appris, parce que sans ça elle ne pouvait pas soigner.`,
    peur: `Manquer d'équipement quand quelqu'un en a besoin. Pas la mort, pas l'arrestation — l'impuissance. Arriver trop tard ou sans assez.`,
    desir: `Un réseau de soin qui couvre tous les districts de Khar-Vurn sans que les soignants aient à se cacher. Elle sait que ce n'est pas maintenant. Elle travaille à maintenant en espérant que ça contribue à plus tard.`,
    rapport_au_pouvoir: `Son Feu est médical — des flux de chaleur précis à des températures exactes, appliqués directement. Elle n'a jamais utilisé son élément de façon offensive avant ses vingt-cinq ans. Elle l'a appris depuis, par nécessité. Mais son Feu préfère réparer à brûler.`,
  },

  histoire: {
    origine: {
      titre: 'Étudiante des Ordres Soigneurs',
      texte: `Thessandra avait rejoint les Ordres Soigneurs à dix-huit ans — sa mère était soignante, sa grand-mère aussi, la famille avait une tradition de soin qui n'était pas idéologique. Elle apprenait vite, travaillait bien, posait des questions précises. À vingt-deux ans, elle était en formation avancée avec Brasia (id:1) comme pratiquante senior référente.

Elle avait compris immédiatement ce que Brasia était : quelqu'un qui soignait d'abord et posait les questions politiques après. Ce n'était pas naïf — c'était une façon de fonctionner que Thessandra reconnaissait parce qu'elle y aspirait elle-même.`,
    },
    eveil: {
      titre: 'Le décret',
      texte: `Le décret impérial interdisant les soins prioritaires aux Élus non enregistrés était arrivé lors d'une réunion d'ordre ordinaire. Thessandra l'avait lu une fois et compris qu'il signifiait que certaines personnes allaient mourir de façon administrative — pas de leur blessure, mais de la décision de quelqu'un que leur blessure ne méritait pas d'être soignée.

Brasia avait dit non dans la réunion. Thessandra avait dit rien — pas par lâcheté, par calcul. Si Brasia disait non et qu'elle disait non aussi, les deux seraient inutilisables. Elle avait gardé sa tête baissée pendant que Brasia gérait les conséquences directes.

Huit jours plus tard, elle avait aidé à évacuer les treize non-enregistrés. Pas en première ligne — en logistique. Elle avait fait les routes, noté les chemins, mémorisé ce qui était sûr.`,
    },
    rupture: {
      titre: 'La formation parallèle',
      texte: `Brasia lui avait appris tout ce qu'elle savait en cinq mois. Les techniques médicales d'abord — Thessandra les connaissait déjà, Brasia les avait perfectionnées. Puis les techniques de survie : disparaître, changer d'itinéraire, ne jamais utiliser le même point de contact deux fois, ne pas laisser de traces.

Brasia lui avait dit à la fin des cinq mois : "Tu es meilleure que moi sur les deux. Ça te met en danger différemment."

Thessandra avait demandé pourquoi. Brasia avait dit : "Parce que les gens qui sont bons pour disparaître finissent par croire qu'ils peuvent tout faire seuls."

Elle y pensait encore. Brasia avait raison sur ça.`,
    },
    maintenant: {
      titre: 'Le réseau de Khar-Vurn',
      texte: `Thessandra gère le réseau de soin clandestin de Khar-Vurn — sept points de contact dans sept districts, une rotation d'équipements médicaux tous les quinze jours, une liste de patients prioritaires que les Capteurs n'ont pas encore repérés et qu'elle essaie de soigner avant qu'ils les repèrent.

Brasia l'a formée et elle gère maintenant seule. Brasia est encore là mais pas à Khar-Vurn en permanence — elle circule. Ce que Thessandra ne dit pas aux autres Dissidentes : elle gère mieux quand Brasia n'est pas là. Pas parce que Brasia est un poids — parce que Brasia est meilleure qu'elle sur certaines choses et que savoir ça la rend moins précise.

Yssara (id:5) lui a transmis ce matin une liste de sept Élus non enregistrés dans le District Quatorze. Elle les a ajoutés à sa liste prioritaire. Sept de plus. Elle a l'équipement pour quatre.`,
    },
    objectif: {
      titre: 'Les trois patients manquants',
      texte: `Trouver de l'équipement médical pour les trois patients prioritaires qu'elle ne peut pas encore soigner. Elle a un contact dans le Sixième District qui peut peut-être obtenir des fournitures. Elle a rendez-vous demain.`,
    },
    evenements_narratifs: ['Purge_des_Ordres_Soigneurs'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Soignante clandestine Dissidente, formée par Brasia. Gère le réseau de soin de Khar-Vurn. Coordonne avec Yssara sur les Élus non enregistrés à risque. Meilleure pour disparaître que Brasia ne le prédit — ce qui est la force et le danger.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'mentor',
      depuis_ici: `Brasia lui a tout appris. Elle ne peut pas ne pas penser à ce que Brasia aurait fait dans chaque situation difficile — ce n'est pas de la déférence, c'est une référence calibrante. La différence : Brasia soigne en traçant des lignes politiques. Thessandra soigne et trace les lignes après. Elle pense que c'est une amélioration. Elle pense aussi que Brasia pense que c'est un risque.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 5,
      nom: 'Yssara',
      type: 'réseau_commun',
      depuis_ici: `Elles se voient deux ou trois fois par mois. Yssara lui apporte des informations sur les mouvements de Capteurs. Thessandra lui donne les zones à éviter et les points de contact sûrs. Leur accord est fonctionnel et sans chaleur particulière — Yssara n'est pas quelqu'un qu'on approche facilement. Thessandra respecte ça.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 8,
      nom: 'Velindra',
      type: 'contact_inconnu',
      depuis_ici: `Elle sait que quelqu'un a accordé une couverture thermique lors de l'exfiltration des treize. Elle ne sait pas qui. Elle ne cherche pas à savoir — les informations non nécessaires sont des risques non nécessaires. Mais si elle avait besoin d'une exfiltration similaire, elle saurait vers qui se tourner pour trouver qui chercher.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Thessandra ne combat pas si elle peut l'éviter. Sa stratégie de survie est d'être là où personne ne regarde et de disparaître avant qu'on commence à regarder. Si elle est forcée de combattre, son Feu soigne en priorité — elle reste à l'arrière, maintient les alliés en vie, et utilise l'offensive seulement quand il n'y a plus d'autre option.`,
    sorts: [
      {
        nom: 'Flux de Chaleur',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Thessandra canalise de la chaleur précise vers un allié — soin direct proportionnel à son niveau de Feu. Si l'allié est en état de brûlure (dégâts actifs), le Flux neutralise la brûlure avant de soigner.`,
        description_lore: `La technique de base de Brasia, affinée par cinq ans de pratique clandestine. Elle peut le faire dans n'importe quelles conditions — obscurité totale, bruit, stress — parce qu'elle l'a fait dans ces conditions.`,
      },
      {
        nom: 'Cautérisation Rapide',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Soin d'urgence instantané sur un allié à moins de 2 cases. Guérit une blessure critique (évite la mise à terre si l'allié serait tombé ce tour). Coût élevé en PM, temps de recharge 2 tours.`,
        description_lore: `Pour les situations qui n'attendent pas. Elle a développé la rapidité d'exécution après sa deuxième nuit où un patient avait failli mourir parce qu'elle avait mis trois secondes de trop.`,
      },
      {
        nom: 'Chaleur Partagée',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Thessandra crée un lien thermique entre deux alliés — pendant 2 tours, 30% des soins reçus par l'un sont automatiquement transmis à l'autre.`,
        description_lore: `Développée pour soigner deux patients simultanément quand elle était seule dans sa cache. Elle l'a utilisée en combat pour la première fois à vingt-cinq ans lors d'un incident qui ne s'était pas passé comme prévu.`,
      },
      {
        nom: 'Disparition Thermique',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Thessandra supprime la signature thermique d'un allié ou d'elle-même pendant 3 tours. L'unité devient indétectable et peut traverser des zones surveillées. Si Thessandra s'applique le sort à elle-même, ses soins à distance pendant cette période sont augmentés de 40%.`,
        description_lore: `Ce que Brasia lui avait dit de maîtriser en priorité. "Si tu ne peux pas disparaître, tu ne peux pas soigner longtemps."`,
      },
      {
        nom: 'Instinct du Soignant',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura passive. Thessandra détecte automatiquement les alliés sous 30% PV dans un rayon de 5 cases, même à travers les obstacles. Ses sorts de soin sur ces alliés ont leur efficacité augmentée de 25%. Si un allié tombe à 0 PV à portée, elle peut déclencher immédiatement une Cautérisation Rapide sans coût de PM (une fois par combat).`,
        description_lore: `Elle lit les corps avant de lire les mots. Ce réflexe s'est traduit dans son Feu — elle sait qui a besoin d'elle avant qu'ils le demandent.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Thessandra',
      description: `Femme Pyrienne, 28 ans, agile, peau rouge vif rayonnante. Yeux ambre doré expressifs et rapides. Cheveux brun-roux en couronne tressée (état mission). Vêtements civils neutres gris-brun. Sacoche médicale visible sous le manteau entrouvert. Expression chaleureuse mais concentrée — quelqu'un de présent. Ses mains légèrement lumineuses. Fond : cave ou couloir sombre de Khar-Vurn. Style concept art Riot Games, éclairage chaud dans l'ombre.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1000,

  lore_long: `SEPT DE PLUS
Un chapitre de la vie de Thessandra, soignante clandestine (Dissidentes, Khar-Vurn)

—

I.

Sept noms. Yssara lui avait transmis la liste ce matin, par un canal qui changeait chaque semaine.

Thessandra l'avait lue deux fois, mémorisée, brûlé le papier.

Elle avait l'équipement médical pour quatre patients. Elle avait les points de contact sûrs pour cinq des sept districts concernés. Elle avait un rendez-vous demain avec un contact dans le Sixième qui pouvait peut-être lui obtenir des fournitures. Peut-être.

Les trois patients pour lesquels elle n'avait pas encore l'équipement : deux avec des conditions chroniques qui nécessitaient des produits spécifiques, un avec une blessure qui ne pouvait pas attendre longtemps. Elle mit le troisième en tête de liste et planifie une visite ce soir.

—

II.

Brasia lui avait dit une fois : "Tu gères mieux seule parce que tu ne te compares pas à quelqu'un devant toi."

Thessandra n'avait pas répondu à ça sur le moment. Elle y pensait encore.

Ce n'était pas entièrement vrai — elle se comparait à Brasia en permanence, comme référence. Mais Brasia avait raison que la comparaison ne la paralysait pas. Elle l'utilisait comme calibration.

Ce que Brasia faisait mieux qu'elle : tracer des lignes. Brasia savait dire "jusqu'ici et pas plus loin" et tenir ce tracé. Thessandra était moins bonne là-dessus. Elle avait tendance à accepter le patient suivant et le suivant et le suivant jusqu'à ce que la liste soit trop longue pour ses ressources.

Sept de plus. Quatre couverts. Trois en attente.

Elle se demanda si Brasia aurait dit non à certains des sept. Elle décida que la question ne l'aidait pas.

—

III.

Le patient du soir s'appelait Marev — vingt-six ans, Élu Vent non enregistré, blessure à l'épaule suite à une confrontation avec des agents impériaux il y a dix jours. Il avait attendu avant de contacter le réseau parce qu'il avait peur que le réseau le signale.

Elle l'avait rassuré par relais de contact. Ce soir, elle venait.

Sa cache du District Onze était dans une cave de bâtiment de service — propre, sécurisée, trois sorties. Elle y avait de l'équipement pour deux patients.

Elle prit son matériel, vérifia ses routes, changea son itinéraire habituel pour un de secours. Couronne dans les cheveux — état mission.

—

IV.

L'épaule de Marev était dans un état pire qu'elle l'avait prévu.

Elle travailla pendant quarante-cinq minutes. Son Feu à la peau de Marev — chaleur précise, progressive, le flux thermique qui accélère la régénération sans brûler. Elle avait fait ça des centaines de fois. Chaque fois était la première fois pour la personne devant elle.

À un moment, Marev avait fermé les yeux. Thessandra avait vu ses épaules se détendre légèrement.

C'était toujours ce moment-là qui la convainquait que c'était la bonne chose. Pas les raisonnements politiques, pas les arguments doctrinaux. Ce moment-là.

—

V.

Elle était rentrée par la route longue.

Dans sa tête : demain matin, le rendez-vous pour les fournitures. Si son contact livrait, quatre des sept patients pourraient être couverts d'ici la fin de la semaine. Si la livraison échouait, elle devrait prioriser et deux patients attendraient encore.

Elle se demanda comment Brasia gérait ça — la liste qui ne se vide jamais, les ressources qui ne suffisent jamais. Peut-être que c'était ça, tracer des lignes. Pas de la dureté — une façon de rester en état de soigner le prochain.

Elle n'y était pas encore. Elle continuerait à accepter les sept. Et le huit et le neuf.

Elle espérait avoir les fournitures demain.`.trim(),
};

export default lore;
