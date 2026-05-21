import type { PersonnageLoreComplet } from '../../../lore-types';

const aelthys: PersonnageLoreComplet = {
  id: 268,
  nom: 'Aelthys',
  element: 'Vent',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Léger, rapide — silhouette de messager, corps calibré pour la vitesse et la discrétion.',
    peau: 'Cuivrée, avec des reflets argentés Stellaires aux tempes et aux épaules — caractéristique plus visible depuis un mois, comme si quelque chose s\'était amplifié.',
    yeux: 'Gris clair avec des éclats Stellaires qui apparaissent quand il traite de l\'information complexe — ils clignotent irrégulièrement depuis qu\'il a commencé à lire les messages.',
    vetements: 'Tenue de voyage légère, neutre. Des poches partout — ancienne habitude de messager qui transportait des choses. La plupart des poches sont vides maintenant.',
    signes_particuliers: 'Il a arrêté de siffler depuis un mois — ancienne habitude de route. L\'information qu\'il porte maintenant dans sa tête occupe l\'espace que le sifflement occupait.',
  },

  psychologie: {
    dominante: 'Transformation en cours. Pendant 4 ans, transporter sans lire était une identité claire. Depuis un mois, il n\'a plus cette clarté. Il a quelque chose d\'autre à la place — de la connaissance, et l\'impossibilité de ne pas la porter.',
    mecanisme_de_defense: 'Il n\'en a pas encore — la transformation est trop récente. Il navigue.',
    contradiction_interne: 'Velath (49) lui a enseigné la règle : ne lis pas ce que tu transportes. Cette règle existe pour protéger le réseau et pour le protéger lui. Il l\'a transgressée. Et maintenant il sait pourquoi la règle existait et comprend également pourquoi ça ne change pas ce qu\'il sait.',
    rapport_aux_autres: 'Il transporte des messages pour des gens dont certains sont réels pour lui et d\'autres non. Depuis un mois, certains sont devenus plus réels parce qu\'il sait ce qu\'ils font.',
    vision_du_monde: 'Il pensait que l\'information était neutre tant qu\'elle était en transit. Il sait maintenant que l\'information change celui qui la porte, même brièvement.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant du vent',
      contenu: 'Né à l\'Isthme dans une famille de voyageurs — son père était guide de caravane, sa mère guérisseuse de route. Il avait grandi entre les destinations. Son élément Vent se manifestait comme une perception précoce des changements météorologiques et des routes praticables. L\'élément Stellaire secondaire — rare, apparu à 16 ans — s\'était manifesté comme une mémoire photographique des cartes.',
    },
    arrivee: {
      titre: 'Le messager',
      contenu: 'Recruté à 23 ans par les Dissidentes pour sa capacité à passer entre les checkpoints impériaux — son élément Vent lui permettait de sentir les patrouilles avant qu\'elles arrivent, son élément Stellaire de mémoriser des routes complexes sans les noter. Velath lui avait enseigné la règle fondamentale dès le premier jour : ne lis pas ce que tu transportes.',
    },
    premier_conflit: {
      titre: 'La règle pendant 4 ans',
      contenu: 'Il avait respecté la règle pendant 4 ans. C\'était une identité : je transporte sans savoir. Cette ignorance le protégeait — ce qu\'on ne sait pas ne peut pas être extrait. Elle protégeait le réseau — un messager capturé sans connaissance du contenu est moins dangereux qu\'un messager qui sait. Il avait accepté ça entièrement. Jusqu\'au mois dernier.',
    },
    revelation: {
      titre: 'Le message lu',
      contenu: 'Il y a 4 semaines, lors d\'une attente prolongée dans une maison de transit, un message destiné à Eiravel (248) avait été ouvert par accident — une mauvaise manipulation du sceau. Il avait vu deux lignes avant de refermer. Ces deux lignes contenaient le nom "Second Avatar" et une série de coordonnées. Il avait refermé le message. Et avait relu ces deux lignes dans sa tête pendant les 8 heures suivantes.',
    },
    etat_actuel: {
      titre: 'La lecture qui ne s\'arrête pas',
      contenu: 'Il a lu d\'autres messages depuis. Pas tous — pas les codes chiffrés qu\'il ne pourrait pas interpréter. Ceux qui sont en clair, ou partiellement en clair. Il sait maintenant des choses sur le réseau qu\'il transporte — des fragments qui s\'assemblent. Il sait que "Second Avatar" est une personne et que deux organisations la cherchent pour des raisons opposées. Il ne sait pas quoi faire de ça.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aelthys_velath_regle',
      titre: 'La règle transgressée',
      description: 'Velath (49) lui a enseigné la règle. Velath est quelqu\'un dont il pense du bien — patient, précis, protecteur de ce qu\'il dit protéger. Si Velath lui demandait maintenant s\'il respectait la règle, il devrait mentir ou avouer. Il ne sait pas lequel il choisirait. Il ne veut pas que cette conversation ait lieu.',
      personnages_impliques: [49],
      declencheur: 'Transgression de la règle fondamentale du réseau',
      consequence: 'Relation potentiellement brisée si découverte — et information que Velath voudrait peut-être connaître',
    },
    {
      id: 'aelthys_eiravel_message',
      titre: 'Le message à Eiravel',
      description: 'Le message accidentellement ouvert était destiné à Eiravel (248). Il l\'a livré — refermé, sceau recollé, apparence intacte. Il ne sait pas si Eiravel a remarqué que le sceau avait été ouvert et refermé. Il ne sait pas si Eiravel lirait le message différemment en sachant qu\'il avait été compromis. Il ne lui a rien dit.',
      personnages_impliques: [248],
      declencheur: 'Ouverture accidentelle d\'un message en transit',
      consequence: 'Information partagée involontairement — Aelthys porte une connaissance qui appartient à Eiravel',
    },
    {
      id: 'aelthys_second_avatar_messages',
      titre: 'Les messages qui en parlent',
      description: 'Plusieurs des messages qu\'il a transportés depuis un mois mentionnent le Second Avatar sans le nommer — "le sujet", "le cas exceptionnel", "la cible prioritaire". Il a assemblé les fragments. Il sait que quelqu\'un le cherche pour le protéger et quelqu\'un le cherche pour le capturer. Il sait qu\'il a transporté des messages des deux côtés sans le savoir.',
      personnages_impliques: [59],
      declencheur: 'Accumulation de fragments dans plusieurs messages',
      consequence: 'Connaissance partielle de la traque — portée par quelqu\'un qui n\'était pas censé l\'avoir',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Porteur dangereux. Il a la connaissance sans la position — il sait des choses sur la traque du Second Avatar depuis les deux côtés, sans appartenir entièrement à aucun. C\'est une position précaire.',

  relations: [
    { id: 49, nom: 'Velath', type: 'mentor', note: 'A enseigné la règle qu\'il transgresse. Ne sait pas. Aelthys ne veut pas que cette conversation ait lieu.' },
    { id: 248, nom: 'Eiravel', type: 'contact_nécessaire', note: 'Destinataire du message accidentellement lu — ne sait pas qu\'il a été compromis.' },
    { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'A transporté des messages le concernant sans le savoir. Maintenant il sait. Ne sait pas quoi faire de ça.' },
    { id: 274, nom: 'Vethyskel', type: 'allié', note: 'Utilise ses cartes de route sans le savoir — partage indirectement les mêmes corridors.' },
  ],

  combat: {
    sorts: [
      'Vent de fuite (Vent) — accélération de déplacement par poussée aérienne — vitesse de sprint doublée pendant 30 secondes',
      'Mémoire stellaire (Stellaire) — rappel photographique d\'une carte ou d\'un texte mémorisé — précision totale sur des routes complexes',
      'Perception préventive (Vent) — détection des changements de pression indiquant une approche dans un rayon de 200m',
    ],
  },

  image_prompts: [
    {
      id: 'aelthys_transit',
      description: 'Aelthys dans une maison de transit, assis, tenant un message scellé dans les mains. Les éclats Stellaires dans ses yeux clignotent irrégulièrement. Il regarde le message avec une expression entre la question et la décision. Il sait que la règle est là. Il sait aussi ce qu\'il y a dedans.',
      style: 'réaliste humain, lumière basse de maison de transit, tons cuivré et argenté, tension calme',
    },
  ],

  lore_long: `Il a respecté la règle pendant 4 ans. C'était une identité.

Le transport sans lecture, c'est une façon d'être utile sans être impliqué. Tu portes. Tu livres. Ce qu'il y a entre les deux ne te regarde pas. Velath lui avait expliqué pourquoi : ce qu'on ne sait pas ne peut pas être extrait, et la capture d'un messager est moins catastrophique si le messager est vide d'information.

La mauvaise manipulation du sceau, il y a 4 semaines. Deux lignes visibles avant de refermer. Deux lignes.

Il avait livré le message. Il n'avait pas pu arrêter de relire les deux lignes dans sa tête pendant les 8 heures suivantes.

La première lecture avait été un accident. Les suivantes ne l'étaient pas.

Il a des fragments d'une image qu'il n'était pas censé avoir : une personne que deux organisations cherchent pour des raisons opposées, des routes de fuite que certains construisent et que d'autres traquent, des coordonnées qui changent de semaine en semaine, des noms qui reviennent dans des contextes différents.

Il ne sait pas quoi faire de ça. Ce n'est pas sa décision à prendre — mais maintenant il a la connaissance, et la connaissance change le porteur même quand le porteur n'a pas demandé à être changé.

Velath lui a enseigné la règle. Si Velath lui demandait maintenant, il devrait choisir entre mentir à quelqu'un qu'il respecte et avouer quelque chose qui pourrait l'exclure du réseau.

Il n'a pas encore eu à faire ce choix.

Il espère continuer à ne pas avoir à le faire.`,
};

export default aelthys;
