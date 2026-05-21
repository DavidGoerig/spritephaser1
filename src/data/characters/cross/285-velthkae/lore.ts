import type { PersonnageLoreComplet } from '../../../lore-types';

const velthkae: PersonnageLoreComplet = {
  id: 285,
  nom: 'Velthkae',
  element: 'Fée',
  element2: 'Plante',
  espece: 'Fées',
  region: 'Sylvera',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Petite, avec une luminosité naturelle qu\'elle a appris à ne pas atténuer sous l\'Empire — ils veulent voir ce qu\'elle est.',
    peau: 'Irisée vert-doré, avec une bioluminescence stable qui ne fluctue presque plus selon son état — elle a appris à la contrôler parfaitement, ce qui lui coûte une énergie constante.',
    yeux: 'Vert lumineux, expressifs malgré elle — le seul endroit où son état intérieur se lit encore.',
    vetements: 'Tenue de botaniste impériale propre et formelle. Elle portait autrefois des ornements fée naturels — des fleurs dans les cheveux. Elle ne le fait plus depuis 5 ans.',
    signes_particuliers: 'Ses plantes poussent parfaitement et sans déviation — le signe d\'un contrôle qui s\'étend à tout. Même son jardin ne pousse pas naturellement.',
  },

  psychologie: {
    dominante: 'Survie par la compétence. Si son travail est indispensable, ils ne peuvent pas se permettre de la perdre. Elle construit cette indispensabilité méthodiquement.',
    mecanisme_de_defense: 'Le perfectionnisme comme bouclier. Un travail parfait ne donne pas de prise à la critique.',
    contradiction_interne: 'Elle continue ses recherches parce qu\'elle les aime — la botanique fée est réellement sa passion. Ces recherches, sous surveillance impériale, produisent des résultats qui servent des objectifs qu\'elle désapprouve. Elle ne peut pas séparer ce qu\'elle aime de ce qu\'on en fait.',
    rapport_aux_autres: 'Aeris (35) utilise ses données sans jamais la rencontrer — ses rapports remontent via une chaîne administrative qu\'elle ne voit pas. Aelkorn (126) est dans une situation similaire à la sienne — recherche réquisitionnée, pas de choix. Ils ne se sont jamais parlé.',
    vision_du_monde: 'Elle n\'a pas choisi cette situation. Elle a choisi de continuer à faire son travail dedans. C\'est différent de collaborer. Elle se le dit régulièrement.',
  },

  histoire: {
    enfance: {
      titre: 'La botaniste fée',
      contenu: 'Née dans une communauté fée avec un double élément Fée/Plante — rare même dans les communautés fées. Elle avait commencé ses recherches en botanique fée à 15 ans, avant que l\'Empire ne s\'intéresse à elle. La botanique fée existait à peine comme discipline — elle avait contribué à la définir.',
    },
    arrivee: {
      titre: 'La réquisition',
      contenu: 'À 32 ans, l\'Empire avait "invité" ses recherches à intégrer un programme botanique impérial. L\'invitation n\'était pas refusable — pas ouvertement. Elle avait compris ce qu\'on lui demandait et ce qui se passerait si elle refusait. Elle avait dit oui.',
    },
    premier_conflit: {
      titre: 'Le premier rapport détourné',
      contenu: 'Son premier rapport sur les propriétés régénératives de certaines espèces fées avait été classifié et détourné vers une division militaire. Elle ne savait pas exactement à quoi il avait servi. Elle avait compris que ses recherches allaient servir des usages qu\'elle n\'approuvait pas. Elle avait continué.',
    },
    revelation: {
      titre: 'La surveillance allégée',
      contenu: 'Deux ans après son intégration, la surveillance directe sur son travail s\'était allégée — elle était devenue fiable selon les critères impériaux. Cet espace de relative liberté, elle l\'utilisait pour maintenir des notes personnelles de recherche — des travaux qu\'elle ne remet pas à l\'Empire, qui existent séparément.',
    },
    etat_actuel: {
      titre: 'Le double travail',
      contenu: 'Elle produit deux corpus de recherche. L\'un pour l\'Empire — complet, utile, produit pour ce qu\'ils veulent. L\'autre pour elle-même — les aspects de la botanique fée que l\'Empire n\'a pas pensé à demander, ou qu\'elle a jugé bon de ne pas leur soumettre. Ces notes personnelles ne sont pas des secrets dangereux. Ce sont juste ses recherches à elle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthkae_double_corpus',
      titre: 'Les notes personnelles',
      description: 'Elle maintient un corpus de recherche personnel que l\'Empire n\'a pas. Ce ne sont pas des informations classifiées ou des secrets militaires — c\'est la partie de la botanique fée qui n\'intéressait pas les objectifs impériaux. Si quelqu\'un un jour pouvait les récupérer, ce serait un apport significatif à une discipline qui existe à peine.',
      personnages_impliques: [],
      declencheur: 'Espace de liberté relative créé par la confiance impériale acquise',
      consequence: 'Archive de recherche indépendante — valeur future non garantie',
    },
    {
      id: 'velthkae_aeris_invisible',
      titre: 'Les données qui remontent',
      description: 'Ses rapports alimentent Aeris (35) via une chaîne administrative qu\'elle ne voit pas. Elle n\'a aucun contrôle sur leur usage une fois soumis. Elle ne connaît pas Aeris. Aeris ne la connaît pas. Leurs travaux sont liés par une bureaucratie qui efface les connexions personnelles.',
      personnages_impliques: [35],
      declencheur: 'Chaîne administrative impériale sans contact direct',
      consequence: 'Contribution involontaire aux objectifs d\'Aeris sans pouvoir y contribuer ou y résister consciemment',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Ressource récupérée. Ses recherches avancent la botanique fée — pour l\'Empire. Elle maintient ce qu\'elle peut à l\'écart.',

  relations: [
    { id: 35, nom: 'Aeris', type: 'contact_nécessaire', note: 'Utilise ses données sans la connaître. Connexion administrative sans relation personnelle.' },
    { id: 126, nom: 'Aelkorn', type: 'allié', note: 'Dans une situation similaire — recherche réquisitionnée. Ne se sont jamais parlé.' },
  ],

  combat: {
    sorts: [
      'Floraison forcée (Plante) — libération soudaine de spores et pollens en concentration — effet respiratoire',
      'Lumière de Fée concentrée (Fée) — aveuglement ciblé via bioluminescence amplifiée',
      'Croissance parasitaire (Plante/Fée) — encerclement végétal accéléré par magie fée — immobilisation progressive',
    ],
  },

  image_prompts: [
    {
      id: 'velthkae_notes',
      description: 'Velthkae dans son laboratoire impérial, en train d\'écrire dans un petit carnet personnel — séparé du rapport officiel ouvert devant elle. Sa bioluminescence est parfaitement contrôlée. Ses yeux verts sont les seuls endroits où quelque chose de moins parfait se lit.',
      style: 'réaliste fée-botanique, lumière de laboratoire froide, tension entre le travail officiel et le carnet personnel',
    },
  ],

  lore_long: `Velthkae produit deux corpus de recherche.

L'un va à l'Empire. Complet, précis, utile à leurs objectifs. Elle l'a fait depuis le début, depuis la réquisition à 32 ans. Elle a dit oui parce que le non n'était pas disponible.

L'autre est dans un petit carnet qu'elle ne remet à personne. La botanique fée que l'Empire n'a pas pensé à demander. Les espèces qui n'ont pas d'application militaire visible. Les comportements des végétaux fée qui n'intéressent personne dans une administration de résultats. C'est la partie qu'elle aime.

Elle a passé 5 ans à devenir indispensable. La surveillance directe s'est allégée. C'est dans cet espace de confiance acquise qu'elle écrit ses notes personnelles.

Ce n'est pas de la résistance. Elle ne prétend pas que c'est de la résistance. C'est juste qu'elle aime la botanique fée et qu'il y a une partie de cette discipline qui lui appartient encore.

Ses rapports remontent à Aeris via une chaîne qu'elle ne voit pas. Elle ne sait pas ce qu'Aeris en fait. Elle sait que si elle avait refusé, quelqu'un d'autre aurait produit quelque chose de moins bon. Elle se le dit.`,
};

export default velthkae;
