// ============================================================
//  VAREK — Lore complet (D18 · Empire · Arc L'Avatar)
//  id: 247 | Combat/Stellaire | Hommes-Liens | Empire | Vanguard
//  Arc : L'Avatar (Citadelle du Voile — garde d'élite)
//  Rôle : A vu la chambre du Drain Préparatoire. A des observations sans cadre.
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 247,
  nom: 'Varek',
  element: 'Combat',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Citadelle du Voile',
  faction: 'Empire',

  apparence: {
    taille_corpulence: `Un mètre quatre-vingt-cinq, masse fonctionnelle. Varek a la stature d'un garde d'élite de la Citadelle — construit pour la durée, pas pour la démonstration. Quinze ans de faction lui ont donné un maintien qui n'est pas de la rigidité mais de l'économie : chaque geste à sa place, rien de superflu.`,
    peau: `Brun moyen, métissage Hommes-Liens indéterminable. Sa longue résidence à la Citadelle lui a donné une pâleur légère — les gardes de l'intérieur voient peu de soleil direct. Des cicatrices aux mains et à l'avant-bras gauche, souvenirs d'entraînements et de deux confrontations en quinze ans.`,
    yeux: `Gris-vert, stables. Le regard d'un homme qui a appris à observer sans être vu en train d'observer. Dans les espaces partagés de la Citadelle, son regard ne s'arrête jamais sur la même chose plus de deux secondes — pas de la nervosité, de la vigilance professionnelle.`,
    vetements: `Uniforme de garde d'élite de la Citadelle — cuir traité, plaques renforcées aux points de contact, couleurs grises et or de l'Empire. L'uniforme est entretenu à la perfection non pas par coquetterie mais parce que l'état de l'uniforme est un indicateur visible de la qualité du garde.`,
    signes_particuliers: `Son élément Stellaire est rare chez les Hommes-Liens et il ne le mentionne jamais. Il se manifeste par des éclairs de précognition — des pressentiments sur ce qui va se passer dans les secondes ou minutes suivantes. Pas de visions, pas de détails. Juste un sens de la direction que prend une situation. Il en a eu trois qui se sont révélés vrais en quinze ans. Trois fois sur combien ? Il ne compte pas les fausses alarmes.`,
  },

  psychologie: {
    dominante: `Varek est professionnel dans le sens le plus complet du terme. Il est bon à ce qu'il fait, il fait ce pour quoi il est payé, il garde les limites de son mandat. La Citadelle fonctionne en partie parce que les gardes comme lui ne cherchent pas à comprendre ce qu'ils ne sont pas censés comprendre. C'est une vertu dans ce contexte.`,
    contradictions: `Il a trois observations dont il ne sait pas quoi faire. Trois collègues transférés dans des conditions qui ne ressemblent pas à des mutations normales. La discipline qui l'a rendu bon à son travail — ne pas poser de questions hors de son mandat — est la même discipline qui l'a empêché de poser les questions dont les réponses lui auraient peut-être permis de comprendre ce qu'il voit.`,
    peur: `D'avoir raté quelque chose. Pas par peur abstraite — par peur concrète : si ce qu'il a observé signifie ce qu'il commence à penser que ça signifie, il aurait pu le voir plus tôt. Et il n'a pas posé de questions.`,
    desir: `Faire son travail sans que son travail lui demande des choses qu'il n'est pas préparé à décider.`,
    rapport_au_pouvoir: `Loyal à la Citadelle par choix raisonné, pas par déférence aveugle. Il a choisi ce travail parce qu'il croit que les structures qui maintiennent l'ordre sont préférables à leur absence. Si ces structures font des choses qui contredisent leur propre prémisse — il n'a pas encore décidé ce que ça impliquerait.`,
  },

  histoire: {
    origine: {
      titre: 'Quinze Ans de Faction',
      texte: `Varek est entré à la garde de la Citadelle à vingt-quatre ans, après quatre ans dans la garde régionale d'Isthme. Son élément Combat le prédisposait à un rôle militaire. Son élément Stellaire — détecté tard, à vingt-deux ans, et jamais pleinement compris — avait été noté dans son dossier de recrutement comme "aptitude perceptive non-standard potentiellement utile."

Il ne s'était jamais demandé ce que ça voulait dire exactement. Il avait accepté le poste et il avait fait son travail.

En quinze ans : deux promotions, un commendement de la garde d'accès de l'aile administrative, trois sessions de formation avancée. Une réputation de fiabilité et de discrétion. Aucune question hors mandat.`,
    },
    eveil: {
      titre: 'La Chambre Restreinte',
      texte: `L'aile administrative de la Citadelle a plusieurs zones d'accès restreint. La chambre de modification du Calendrier est la plus restreinte — accès limité à cinq administratrices Fée, rotation fixe, aucune présence de garde à l'intérieur.

Il avait accédé au couloir d'accès de cette chambre pendant une maintenance de sécurité il y avait sept ans. Il avait vu l'intérieur depuis la porte — des équipements qu'il ne pouvait pas nommer, une architecture qui semblait conçue pour canaliser des flux élémentaires dans une direction précise.

On lui avait dit que c'était une "chambre de régulation saisonnière des équilibres élémentaires." Il avait accepté cette explication. Il ne savait rien de la régulation élémentaire.`,
    },
    rupture: {
      titre: 'Les Trois Transferts',
      texte: `Sorkan, dix-huit mois plus tôt : avait demandé pourquoi la chambre restreinte n'apparaissait pas dans les registres de planification externe de l'aile. Transfert annoncé trois jours plus tard. Poste : garde régional en zone nord de Varkhôl. Varek lui avait envoyé trois messages. Pas de réponse.

Melen, onze mois plus tôt : avait demandé à un technicien de maintenance les spécifications de consommation énergétique de l'aile restreinte. Le lendemain, Melen n'était plus là. Transfert vers Thalassyr, zone côtière. Varek avait envoyé deux messages. Pas de réponse.

Praxa, huit mois plus tôt : n'avait pas posé de question. Avait simplement prolongé sa pause dans le couloir adjacent à l'aile restreinte lors d'un changement de garde. Une semaine plus tard, elle était transférée à Asterciel. Varek n'avait pas envoyé de message. Il avait regardé son nom dans les registres de transfert et il avait décidé de ne pas poser de questions.

Il n'avait pas posé de questions depuis huit mois.`,
    },
    maintenant: {
      titre: 'Ce Qu\'Il Ne Dit Pas',
      texte: `Ce soir, en finissant son quart, il avait regardé la porte de l'aile restreinte.

Il l'avait gardée pendant sept ans. Il avait vu Sorkan, Melen et Praxa disparaître en dix mois. Il avait une question — la même question que Sorkan avait posée, reformulée différemment dans sa tête pour qu'elle ressemble moins à une question : pourquoi les activités d'une chambre "de régulation saisonnière" nécessitent-elles qu'aucun de ses voisins administratifs ne sache ce qui s'y passe ?

Il n'allait pas poser la question. Pas aujourd'hui.`,
    },
    objectif: {
      titre: 'La Discipline Qui Coûte',
      texte: `Il va continuer à faire son travail. La discipline qui l'a amené là — ne pas questionner hors de son mandat, faire confiance à la structure — est la discipline qui a construit sa carrière. Elle lui a été utile.

Ce qu'il ne formule pas encore clairement : la discipline qui l'a protégé jusqu'ici est peut-être la même discipline qui a protégé Sorkan, Melen et Praxa jusqu'à ce qu'ils s'arrêtent de l'appliquer. Et ils n'étaient plus là pour confirmer si c'était le cas.`,
    },
    evenements_narratifs: ['Saturation_des_Elus'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Vanguard d'élite, garde de l'aile administrative de la Citadelle du Voile. A accès à toutes les zones y compris le couloir de la chambre de modification du Calendrier (Drain Préparatoire). Trois collègues transférés après questions sur cette chambre. N'a pas posé de question depuis 8 mois. La question se reformule dans sa tête depuis ce soir.`,
  },

  relations: [
    {
      personnage_id: 246,
      nom: 'Sylviel',
      type: 'collègue_quotidienne',
      depuis_ici: `La spécialiste Fée/Psy qu'il voit tous les matins à l'entrée de l'aile. Elle est précise, professionnelle, et ne le regarde jamais de la façon dont il sait qu'elle pourrait le regarder si elle le voulait. Il apprécie cette discrétion. Ce soir, il a remarqué qu'elle avait capté quelque chose dans son état avant de détourner son regard. Il ne sait pas ce qu'elle a vu.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 248,
      nom: 'Eiravel',
      type: 'collègue_administrative',
      depuis_ici: `Une administratrice Calendrier dans l'aile. Discrète, régulière, rien d'inhabituel. Il l'a vue entrer dans la chambre restreinte une fois — comme administratrice autorisée, pas de façon suspecte. Si quelqu'un avait accès aux registres de cette chambre depuis l'intérieur, ce serait elle. Il n'a jamais pensé à le vérifier d'une façon ou d'une autre.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
    {
      personnage_id: 13,
      nom: 'Nyreth',
      type: 'contact_externe',
      depuis_ici: `Un Dissident sous identité changeante qu'il a croisé une fois lors d'une mission externe — il ne savait pas que c'était un Dissident. Ce qu'il sait : cette personne lui avait posé une question sur les rotations de garde de la Citadelle d'une façon qui semblait anodine mais ne l'était pas. Il avait répondu sans information sensible. Il y repense parfois.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Varek combat avec la discipline d'un garde d'élite : protéger la zone, neutraliser les menaces, minimiser les dommages collatéraux. Il ne cherche pas à impressionner. Il cherche à finir proprement.`,
    sorts: [
      {
        nom: 'Position de Garde',
        type: 'sort_de_base',
        elements: ['Combat'],
        description_gameplay: `Varek entre en mode défensif. Pendant 2 tours, toutes les attaques sur un allié adjacent passent d'abord par Varek (interception). Il reçoit 30% de réduction sur ces dégâts interceptés.`,
        description_lore: `Ce qu'on lui a appris pendant quinze ans à la Citadelle. La garde n'est pas spectaculaire. Elle est efficace.`,
      },
      {
        nom: 'Pressentiment',
        type: 'sort_situationnel',
        elements: ['Stellaire'],
        description_gameplay: `Varek anticipe l'action de la prochaine cible qui l'attaquera. Il reçoit un bonus d'esquive de 50% contre cette attaque spécifique. Peut être activé en réaction (hors tour) sans coûter son action.`,
        description_lore: `Les trois fois où son élément Stellaire s'est révélé exact en quinze ans, c'était dans ces moments — un sens de la direction que prend une attaque avant qu'elle commence.`,
      },
      {
        nom: 'Maîtrise de Zone',
        type: 'sort_situationnel',
        elements: ['Combat'],
        description_gameplay: `Varek contrôle une zone de 3×3 cases pendant 2 tours. Les ennemis qui entrent dans cette zone sont ralentis (moitié de mouvement) et subissent une attaque d'opportunité gratuite. Les alliés dans la zone ne peuvent pas être renversés.`,
        description_lore: `Quinze ans à contrôler des espaces — couloirs, salles d'accès, périmètres. Il sait ce que ça signifie de posséder une zone.`,
      },
      {
        nom: 'Interdiction de Zone',
        type: 'ultimate',
        elements: ['Combat', 'Stellaire'],
        description_gameplay: `Varek verrouille une zone de 5×5 cases pendant 3 tours. Aucun ennemi ne peut entrer ou sortir de la zone. Les alliés peuvent se déplacer librement. Les ennemis déjà dans la zone reçoivent des dégâts de combat à chaque tour.`,
        description_lore: `La synthèse de son Combat et de son Stellaire — contrôler le terrain en anticipant les mouvements. Ce qu'il fait instinctivement dans un couloir, amplifié à son maximum.`,
      },
      {
        nom: 'Vigilance Permanente',
        type: 'passif',
        elements: ['Stellaire', 'Combat'],
        description_gameplay: `Passif. Varek ne peut pas être surpris. Il détecte les ennemis invisibles dans un rayon de 2 cases. Une fois par combat, si une attaque devait le mettre à 0 PV, il survit avec 1 PV et gagne immédiatement une réaction gratuite.`,
        description_lore: `Quinze ans à être responsable de zones qu'il ne pouvait pas voir entièrement. Son Stellaire lui a appris à sentir ce qu'il ne voit pas. Son Combat lui a appris à répondre avant d'avoir le temps d'y penser.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Varek',
      description: `Homme Hommes-Liens, 39 ans, 1m85, masse fonctionnelle de garde d'élite. Peau brun moyen, cicatrices aux mains et à l'avant-bras gauche. Yeux gris-vert stables et observateurs. Uniforme de garde d'élite de la Citadelle — cuir traité, plaques grises et or. Expression de vigilance professionnelle, regard qui balaie sans s'arrêter. Fond : couloir de l'aile administrative de la Citadelle du Voile, architecture impériale, lumière tamisée. Style concept art Riot Games, palette grise et or.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 850,

  lore_long: `LES TROIS TRANSFERTS
Un soir de la vie de Varek, garde d'élite de la Citadelle

—

I.

Varek avait commencé à compter sans décider de compter.

C'est arrivé pendant son quart du soir, en regardant la porte de l'aile restreinte. Il avait fait ça sans s'en rendre compte — regardé la porte, regardé le registre de passage vide, regardé l'heure, et commencé à calculer.

Dix-huit mois depuis Sorkan. Onze mois depuis Melen. Huit mois depuis Praxa.

Trois collègues. Trois transferts. Un intervalle qui diminuait entre chaque.

—

II.

Sorkan avait posé la question en réunion de brigade — pas une grande réunion, juste l'équipe de l'aile administrative, sept personnes autour d'une table. Il avait dit : "La chambre restreinte n'a pas de registre de planification externe. Pour les rotations de garde adjacentes, c'est compliqué à coordonner."

C'était une observation logistique. Légitime. Varek avait pensé la même chose et ne l'avait pas posée.

Trois jours plus tard, Sorkan était muté en zone nord de Varkhôl. Haute priorité de garde, bon poste, aucune explication spécifique. Il avait envoyé trois messages. Pas de réponse.

—

III.

Melen était plus prudent que Sorkan. Il n'avait pas posé de question en réunion. Il avait parlé à un technicien de maintenance, en aparté, pendant une pause. Il avait demandé des spécifications techniques — le genre de question fonctionnelle qu'un garde pose pour comprendre son environnement de travail.

Le lendemain matin, son nom n'était plus dans les rotations. Transfer vers Thalassyr. Deux messages. Pas de réponse.

—

IV.

Praxa n'avait rien dit.

Elle avait prolongé sa pause dans le couloir adjacent lors d'un changement de garde. Peut-être dix minutes de plus que d'habitude. Varek l'avait remarqué. Personne d'autre, en apparence, ne l'avait remarqué.

Une semaine plus tard, Asterciel.

—

V.

Il y avait une façon de lire les trois transferts qui ne les reliait pas. Sorkan avait de la famille à Varkhôl — il avait mentionné vouloir se rapprocher. Melen avait demandé une mutation quelques mois avant l'incident. Praxa était moins engagée dans l'équipe, peut-être à la recherche de quelque chose d'autre.

Varek avait construit cette lecture en détail, dans sa tête, pendant les huit mois qui avaient suivi le départ de Praxa.

Il savait que c'était une lecture. Il n'en avait pas de meilleure.

—

VI.

Ce soir, en finissant son quart, il était resté une minute de plus devant la porte de l'aile restreinte.

La chambre à l'intérieur régulait les équilibres saisonniers élémentaires. C'est ce qu'on lui avait dit. Il ne connaissait pas la régulation élémentaire suffisamment pour confirmer ou infirmer. Il avait vu les équipements de l'intérieur une fois — des canaux, des cristaux, une architecture qui orientait des flux dans une direction. Il n'avait pas les outils pour interpréter ça.

Ce qu'il avait : trois observations. Trois collègues. Un intervalle.

Ce qu'il n'avait pas : une question à poser sans que ça ressemble à la question que Sorkan avait posée.

—

VII.

Il avait passé son rapport de quart au garde suivant — tout normal, rien à signaler — et il était allé au mess.

La question s'était reformulée dans sa tête pendant le trajet. Pas la même que Sorkan, pas la même que Melen. Quelque chose de plus indirect, quelque chose qui n'impliquait pas directement la chambre restreinte.

Il l'avait reformulée trois fois. Chaque version ressemblait un peu moins à une question directe. La cinquième version ressemblait à une conversation anodine sur les procédures administratives.

Il avait mangé son dîner sans poser la question.

Demain, il aurait peut-être une sixième version.`.trim(),
};

export default lore;
