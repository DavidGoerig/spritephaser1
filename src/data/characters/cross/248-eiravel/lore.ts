// ============================================================
//  EIRAVEL — Lore complet (D18 · Dissidentes infiltrée · Arc L'Avatar)
//  id: 248 | Fée/Vent | Fées | Dissidentes (infiltrée) | Enchanteur-Soutien
//  Arc : L'Avatar — PIVOT Arc 7 (Archives Gelées) / Arc 8
//  Rôle : Administratrice Calendrier infiltrée — accès aux logs Drain Préparatoire
//         sans savoir qu'Isvara existe ni qu'elle a les données qu'elle cherche
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 248,
  nom: 'Eiravel',
  element: 'Fée',
  element2: 'Vent',
  espece: 'Fées',
  region: 'Citadelle du Voile',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Un mètre cinquante-six, la taille standard des Fées de la Citadelle. Eiravel a les ailes vestigiales réduites — des appendices de trente centimètres à peine, vestige fonctionnel plutôt qu'anatomique, qu'elle a délibérément gardés discrets. Les grandes ailes signalent le rang et la puissance dans les hiérarchies Fée — les siennes, petites, suggèrent soit une puissance élémentaire modeste, soit une origine modeste. Les deux lui sont utiles comme couverture.`,
    peau: `Blanc-doré translucide, la teinte Fée standard. Sa luminescence interne est plus faible que chez les Fées de vieilles lignées — pas une faiblesse, une caractéristique de naissance qu'elle n'a jamais cherché à changer. Elle se fond mieux dans les espaces neutres de la Citadelle.`,
    yeux: `Bleu-gris pâle, calmes. Les yeux Fée changent de teinte selon la perception active — les siens changent très peu, ce qu'elle a appris à contrôler consciemment. Un Fée qui regarde ses yeux peut difficilement savoir ce qu'elle est en train de percevoir.`,
    vetements: `Uniforme administratif Calendrier de milieu de rang, sans broche de spécialiste. Des vêtements qui disent "administratrice compétente" sans dire "à surveiller" ni "à promouvoir." Elle les choisit pour leur discrétion depuis neuf ans. Elle est douée pour ça.`,
    signes_particuliers: `Son élément Vent lui permet d'envoyer des communications sans support physique — des messages portés dans le flux d'air ambiant, lisibles par ceux qui savent les détecter, invisibles pour les autres. C'est le seul canal de communication qu'elle utilise pour ses rapports Dissident. Il ne laisse pas de trace matérielle.`,
  },

  psychologie: {
    dominante: `Eiravel croit dans les Dissidentes avec la conviction tranquille de quelqu'un qui a eu neuf ans pour examiner ses doutes et les trouver insuffisants pour changer de camp. Elle n'est pas idéologique. Elle est pratique — l'Empire confisque des ressources et des libertés, les Dissidentes travaillent à réduire cette confiscation, et elle a une position qui lui permet de contribuer à cet effort de façon concrète.`,
    contradictions: `Elle est Fée. Elle travaille pour une institution qui maintient l'Empire des Fées. Elle transmet des informations à des gens qui travaillent à démanteler cet Empire. Elle a réconcilié cette contradiction il y a longtemps : être Fée n'implique pas de soutenir ce que l'Empire fait au nom des Fées. C'est une position confortable à tenir quand elle ne réfléchit pas trop à ce que ça lui prendrait si l'Empire tombait vraiment.`,
    peur: `D'être découverte. Pas de façon abstraite — de façon concrète : elle a vu ce qui arrive aux Fées qui trahissent la Citadelle. Elle a vu les trois gardes de Varek disparaître en dix mois. Elle suppose que ce qui lui arriverait à elle serait différent seulement dans les détails.`,
    desir: `Que l'information circule correctement. Elle croit que la plupart des problèmes sont des problèmes d'information — des gens qui ne savent pas ce qu'ils devraient savoir, des décisions prises sur des données incomplètes. Son travail Dissident est fondamentalement un travail de correction de flux d'information.`,
    rapport_au_pouvoir: `Méfiante de l'institution, fidèle à ses valeurs. Elle a rencontré des Fées de la Citadelle qu'elle respecte — Sylviel est l'une d'elles, même si elle ne lui a jamais dit pourquoi. Ça ne change pas ce qu'elle fait.`,
  },

  histoire: {
    origine: {
      titre: 'Neuf Ans à L\'Intérieur',
      texte: `Eiravel a rejoint les Dissidentes à vingt-deux ans, deux ans après être entrée à la Citadelle du Voile comme stagiaire administrative. Elle avait été recrutée par un réseau Dissident via sa cousine — pas dramatiquement, pas après un événement déclencheur. Elle avait simplement été approchée, elle avait dit oui après réflexion, et elle avait commencé à transmettre des informations.

En neuf ans, elle n'avait jamais eu de contact direct avec un autre agent. Ses rapports passaient par un réseau de courriers Vent — des messages portés dans les flux d'air, déposés dans des zones de réception connues des deux côtés, relayés vers les Dissidentes via Vel'Nox.

Son contact s'appelait "Canal Gris." Elle ne savait pas si c'était une personne ou un système. Elle ne l'avait jamais demandé. Le protocole ne posait pas cette question.`,
    },
    eveil: {
      titre: 'La Valeur de L\'Accès',
      texte: `Ses deux premières années, elle avait transmis des informations de niveau modeste — rotations d'Élus, décisions de redistribution, nominations administratives. Utiles, mais pas critiques.

À vingt-cinq ans, elle avait été promue administratrice de niveau 3 du Calendrier — un poste qui lui donnait accès aux registres de modification des lignes élémentaires. Ses rapports avaient changé de qualité. Les Dissidentes avaient commencé à lui envoyer des demandes spécifiques.

Elle n'avait jamais répondu à une demande qu'elle estimait trop risquée. Elle en avait refusé quatre en neuf ans. Chaque refus avait été accepté sans pression. C'est ce qui lui donnait confiance que son réseau comprenait ce qu'elle faisait.`,
    },
    rupture: {
      titre: 'Ce Qu\'Elle N\'A Pas Encore Cherché',
      texte: `Ce soir, en composant son rapport bi-mensuel, une collègue avait mentionné en passant que le comité de direction discutait des "préoccupations de Crysalme" — des anomalies dans la situation climatique du nord qui semblaient connectées aux modifications récentes du Calendrier.

Elle avait noté ça pour son rapport.

Puis, en le rédigeant, elle avait pensé : les modifications récentes du Calendrier. Elle avait accès aux logs de modification. Pas les décisions — les logs. Les entrées techniques, horodatées, avec les paramètres de chaque ajustement.

Elle avait ouvert l'interface pendant deux secondes.

Puis une collègue était entrée dans le bureau pour une signature administrative, et le moment était passé.`,
    },
    maintenant: {
      titre: 'Le Rapport Habituel',
      texte: `Son rapport contenait les informations habituelles : trois décisions de redistribution d'Élus, deux nominations administratives, les modifications de rotation de garde de la semaine.

La mention des "préoccupations de Crysalme" et des modifications du Calendrier était dans le rapport, comme observation sans analyse.

Elle avait envoyé le rapport via Vent avant de quitter le bureau.

Ce qu'elle n'avait pas fait : ouvrir les logs de modification du Calendrier avec le terme "Crysalme" ou "Champ Gelé" comme filtre. Ce qu'elle aurait trouvé : les entrées du Drain Préparatoire que Isvara avait identifiées depuis l'extérieur, trois ans plus tôt. Les données qui confirmeraient que les modifications du Calendrier causent le dégel du Champ Gelé.

Elle ne savait pas qu'Isvara existait. Elle ne savait pas qu'elle avait les données.`,
    },
    objectif: {
      titre: 'Le Prochain Rapport',
      texte: `Elle va continuer à travailler. Son rapport part toutes les six à huit semaines. Le prochain sera dans six semaines.

Dans six semaines, peut-être que les "préoccupations de Crysalme" seront encore dans l'actualité de la Citadelle. Peut-être qu'elle ouvrira les logs de modification avec un peu plus de curiosité.

Peut-être pas. Elle n'a pas de raison particulière de penser que ces logs contiennent quelque chose qu'elle n'a pas déjà vu.`,
    },
    evenements_narratifs: ['Saturation_des_Elus'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Administratrice Calendrier Fée infiltrée par les Dissidentes depuis 9 ans. Accès aux logs de modification du Calendrier Principal — les mêmes données qu'Isvara cherche depuis l'extérieur. Ne sait pas qu'Isvara existe. A failli ouvrir les logs ce soir sur les "préoccupations de Crysalme." Ne l'a pas fait. Pivot narratif potentiel entre Arc 7 et Arc 8.`,
  },

  relations: [
    {
      personnage_id: 246,
      nom: 'Sylviel',
      type: 'collègue_respectée',
      depuis_ici: `Sylviel est précise, honnête, et profondément loyale à l'Empire dans un sens qui n'est pas de la déférence mais d'une conviction réfléchie. Eiravel la respecte et la surveille avec une attention particulière — si quelqu'un dans l'aile pouvait détecter quelque chose d'inhabituel chez elle, ce serait Sylviel. Elle a été très prudente pendant neuf ans. Elle continue.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 56,
      nom: 'Isvara',
      type: 'contact_inexistant',
      depuis_ici: `Elle n'existe pas dans la réalité d'Eiravel. Mais Isvara est archiviste Fée à Iskral avec accès partiel aux données du Calendrier Principal depuis l'extérieur — et Eiravel a accès aux logs complets depuis l'intérieur. Elles ont les deux moitiés d'une image complète. Personne ne le sait. La connexion n'a pas encore été faite.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
    {
      personnage_id: 49,
      nom: 'Velath',
      type: 'relais_de_réseau',
      depuis_ici: `Elle ne connaît pas le nom de Velath. Elle connaît "Canal Gris" — le point de relais de son réseau Dissident, quelque part à Vel'Nox. Chaque rapport qu'elle envoie par Vent passe par ce relais. Elle ne sait pas qui maintient ce canal. Elle suppose que c'est quelqu'un de fiable. Elle l'a supposé pendant neuf ans.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Eiravel n'est pas une combattante — neuf ans de travail infiltré ont développé des réflexes d'évitement plutôt que de confrontation. Si elle doit combattre, c'est que quelque chose a déjà échoué. Elle utilise son Vent pour créer de la confusion et ses probabilités Fée pour survivre.`,
    sorts: [
      {
        nom: 'Rapport de Vent',
        type: 'sort_de_base',
        elements: ['Vent'],
        description_gameplay: `Envoie une observation tactique à tous les alliés dans un rayon de 5 cases — révèle la position de tous les ennemis pour 2 tours. Les alliés qui reçoivent ce rapport gagnent +10% d'esquive contre les ennemis révélés.`,
        description_lore: `Ce qu'elle fait depuis neuf ans — collecter et transmettre l'information. En combat, le vecteur est le même. L'urgence est différente.`,
      },
      {
        nom: 'Couverture de Vent',
        type: 'sort_situationnel',
        elements: ['Vent', 'Fée'],
        description_gameplay: `Crée une zone de vent tourbillonnant sur 2×2 cases pendant 2 tours. Les alliés dans la zone sont plus difficiles à cibler (-25% précision ennemie). Les projectiles entrant dans la zone sont déviés de 30%.`,
        description_lore: `Neuf ans à utiliser le Vent pour qu'aucun de ses messages ne laisse de trace. Appliqué en protection physique, c'est le même réflexe dans une direction différente.`,
      },
      {
        nom: 'Déplacement Silencieux',
        type: 'sort_situationnel',
        elements: ['Vent'],
        description_gameplay: `Eiravel se déplace jusqu'à 4 cases sans déclencher d'attaques d'opportunité. Si elle termine son déplacement hors de la ligne de vision ennemie, elle devient "non-détectée" pour 1 tour.`,
        description_lore: `Neuf ans à se déplacer dans la Citadelle sans attirer l'attention. Ça laisse des réflexes.`,
      },
      {
        nom: 'Probabilité Favorable',
        type: 'ultimate',
        elements: ['Fée'],
        description_gameplay: `Pendant 3 tours, Eiravel et tous ses alliés adjacents bénéficient d'une modification de probabilité : chaque action qu'ils entreprennent a 20% de chances supplémentaires de réussir son effet optimal. Les effets critiques se déclenchent plus souvent. Les ratés critiques sont évités.`,
        description_lore: `L'élément Fée à pleine expression — pas changer les règles, légèrement incliner le monde dans une direction. Ce qu'elle fait depuis neuf ans, sans que personne s'en rende compte.`,
      },
      {
        nom: 'Présence Discrète',
        type: 'passif',
        elements: ['Fée', 'Vent'],
        description_gameplay: `Passif. Eiravel génère moins d'aggro — les ennemis la ciblent en dernier à qualité de menace égale. La première attaque qu'elle reçoit dans chaque combat est automatiquement esquivée.`,
        description_lore: `Neuf ans à être la personne que personne ne remarque en premier. Ce n'est pas de l'invisibilité — c'est de la neutralité active, cultivée jusqu'à devenir réflexe.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Eiravel',
      description: `Fée femme, 38 ans, 1m56, peau blanc-doré translucide à luminescence légère. Petites ailes vestigiales de 30cm pliées discrètement. Yeux bleu-gris pâle, calmes et contrôlés. Uniforme administratif Calendrier milieu de rang, sans ornements distinctifs. Expression de concentration tranquille, rien qui attire le regard. Fond : bureau administratif de la Citadelle du Voile, paperasse, interface de données, fenêtre sur l'intérieur de la Citadelle. Style concept art Riot Games, palette blanc-or et gris, lumière tamisée.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 950,

  lore_long: `LA QUESTION QUI N'A PAS ÉTÉ POSÉE
Un soir de la vie d'Eiravel, administratrice Calendrier

—

I.

La journée avait été ordinaire.

Eiravel aimait les journées ordinaires. Elles signifiaient que personne n'avait remarqué quelque chose qu'elle n'aurait pas voulu qu'on remarque, que les flux d'information avaient circulé normalement, que son rapport pouvait contenir ce qu'elle avait collecté sans nécessiter de décision difficile sur ce qu'elle incluait.

Ce soir, en finissant ses notes, elle composait le rapport habituel. Trois décisions de redistribution d'Élus. Deux nominations administratives. Modifications de rotation de garde de l'aile Ouest. Une mention des "préoccupations de Crysalme" entendues en réunion de direction — pas de détails, juste la référence et le fait que les modifications du Calendrier étaient liées.

—

II.

Elle avait rejoint les Dissidentes à vingt-deux ans.

La décision n'avait pas été dramatique. Sa cousine l'avait contactée. Elle avait réfléchi pendant six semaines. Elle avait dit oui.

Ce qui l'avait convaincue n'était pas un événement. C'était une accumulation d'observations — la façon dont les Élus de certaines régions disparaissaient dans les registres de redistribution et n'apparaissaient plus dans aucun registre après. La façon dont les décisions du Calendrier qui touchaient les populations les plus vulnérables étaient présentées comme des décisions techniques plutôt que politiques. La façon dont certaines informations circulaient à la Citadelle dans une seule direction.

Elle pouvait corriger ça, légèrement, régulièrement. Elle l'avait fait pendant neuf ans.

—

III.

"Crysalme fait des vagues au comité de direction," avait dit Lyriel — une collègue de l'aile Nord — en venant chercher une signature. "Apparemment les anomalies climatiques là-bas sont connectées à des ajustements du Calendrier. Elles cherchent quelqu'un à interroger sur les modifications récentes."

Eiravel avait signé le formulaire. "Je n'étais pas dans cette section de modification. Tu as un nom ?"

"Non. C'est flou encore. Peut-être que ça ira nulle part."

Lyriel était repartie. Eiravel avait repris ses notes.

—

IV.

Les modifications récentes du Calendrier.

Elle avait accès aux logs de modification depuis sa promotion de niveau 3 — pas les décisions politiques, les logs techniques. Les entrées horodatées avec les paramètres de chaque ajustement des lignes élémentaires. Des données précises sur ce qui avait changé dans les flux depuis cinq ans.

Elle avait ouvert l'interface pendant deux secondes.

Puis Varek avait passé sa ronde dans le couloir — elle l'entendait à travers la cloison, pas de façon menaçante, juste la routine de son quart — et elle avait refermé l'interface par réflexe.

—

V.

Ce n'était pas une décision. C'était un réflexe.

Elle avait neuf ans de réflexes calibrés pour la survie dans un espace où une requête inhabituelle pouvait être notée. Les logs de modification du Calendrier n'étaient pas interdits à son niveau d'accès — elle les consultait régulièrement pour son travail ordinaire. Mais une requête filtrée sur "Crysalme" ou "Champ Gelé" dans les logs serait une requête non-standard. Les requêtes non-standard laissaient des traces.

Elle avait refermé l'interface. Elle avait continuécà composer son rapport.

—

VI.

Le rapport était parti via Vent à vingt heures trente-deux.

Il contenait la mention des préoccupations de Crysalme, comme observation sans analyse. Canal Gris en ferait ce qu'il pouvait. Les Dissidentes avaient peut-être des sources sur la question climatique du nord qui ne venaient pas des logs du Calendrier.

Peut-être qu'ils savaient déjà. Peut-être que la connexion entre les modifications du Calendrier et les anomalies de Crysalme était déjà documentée quelque part dans leur réseau.

Peut-être pas.

—

VII.

Elle avait rangé ses affaires. Elle avait vérifié que l'interface du Calendrier était fermée — elle l'était. Elle avait regardé une dernière fois la liste des requêtes de la journée dans le registre de l'aile, pour s'assurer qu'aucune de ses activités du soir n'était anormale.

Rien d'anormal.

En sortant de l'aile, elle avait croisé Sylviel qui finissait une session tardive. Elles s'étaient saluées. Sylviel avait ce regard particulier — l'attention légèrement trop précise de quelqu'un qui perçoit plus que ce qui est visible. Eiravel avait appris à ne pas y répondre de façon inhabituellement neutre, parce que l'inhabituellement neutre était lui-même une réponse.

"Bonne fin de semaine," avait dit Sylviel.

"Toi aussi."

Eiravel était sortie. Dans six semaines, elle enverrait un autre rapport. Peut-être que d'ici là, les préoccupations de Crysalme seraient plus claires. Peut-être qu'elle aurait une raison ordinaire de regarder les logs de modification.

Peut-être que quelqu'un d'autre ferait la connexion avant elle.

Elle espérait que quelqu'un le fasse. Elle ne savait pas qui.`.trim(),
};

export default lore;
