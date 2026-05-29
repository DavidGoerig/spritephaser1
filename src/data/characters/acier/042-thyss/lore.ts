import type { PersonnageLoreComplet } from '../../../lore-types';

const thyss: PersonnageLoreComplet = {
  id: 42,
  nom: 'Thyss',
  element: 'Acier',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 55 ans — un directeur de contribution dont la stature dit l\'autorité plutôt que le travail physique. Il est grand pour un Chthonien, avec une posture droite qui remplit les espaces. Cette verticalité est apprise, pas naturelle : il y a dans ses mouvements une correction intentionnelle.',
    peau: 'Gris acier — la plus métallique des teintes chthoniennes, une expression directe de son élément. Sa peau reflète légèrement la lumière artificielle des salles de réunion de Kar-Dum. Il n\'essaie pas de dissimuler cette qualité métallique.',
    yeux: 'Argentés avec une qualité de calcul — il regarde les situations comme des équations. Ses yeux bougent méthodiquement plutôt que de façon naturelle. Les gens qui l\'ont vu dans des situations d\'urgence disent qu\'il ne panique pas — il calcule.',
    vetements: 'Tenue de direction technocratique — noire avec des finitions acier. Pas d\'insignes décoratifs : les insignes qu\'il porte sont tous fonctionnels, codes d\'accès ou identifications de niveau. Il croit que l\'ornement sans fonction est du gaspillage.',
    signes_particuliers: 'Il annonce ses conclusions avant ses arguments — il dit ce qu\'il a décidé, puis explique pourquoi. Cette méthode est délibérée : elle réduit les négociations. Soit les autres acceptent sa conclusion directement, soit ils écoutent ses arguments. Dans les deux cas, il contrôle le tempo.',
  },

  psychologie: {
    dominante: 'Directeur de contribution qui croit sincèrement au système de contribution de Kar-Dum — un système qui a sauvé la cité après la Fosse Interdite. Il a réduit la contribution individuelle de 12% l\'année dernière et l\'a annoncé comme une victoire. Il pense que c\'est suffisant. Il se trompe.',
    mecanisme_de_defense: 'La confiance dans les métriques. Le système fonctionne si les métriques disent qu\'il fonctionne. Il a de très bonnes métriques. Il n\'a pas de métriques sur ce que Karm (41) a trouvé.',
    contradiction_interne: 'Il croit au système qu\'il gère parce qu\'il en a toujours vu les résultats positifs. Il n\'a jamais vu ce que le système coûte aux personnes qui n\'apparaissent pas dans ses métriques — les Élus Poison qui ont disparu dans la Fosse à intervalles réguliers depuis 68 ans.',
    rapport_aux_autres: 'Draven II (40) est son supérieur hiérarchique — et aussi quelqu\'un qu\'il respecte pour ses qualités de gouvernance. Il a convaincu Draven II pour la réforme de contribution. Il n\'a pas eu de résistance. Il commence à se demander si l\'absence de résistance signifiait que la réforme était bonne ou que Draven II lui fait trop confiance. Karm (41) lui pose une question non dite — l\'archiviste a changé d\'expression depuis 3 semaines. Thyss l\'a remarqué et n\'a pas demandé pourquoi.',
    vision_du_monde: 'Un système juste est un système qui maximise le bien collectif en minimisant le coût individuel. Sa réduction de 12% est un progrès dans cette direction. Il n\'a pas encore intégré l\'idée que "coût individuel" puisse inclure des choses qui n\'apparaissent pas dans les données économiques.',
  },

  histoire: {
    enfance: {
      titre: 'Le système',
      contenu: 'À 14 ans, lors d\'une crise d\'approvisionnement dans son secteur de Kar-Dum, il avait résolu le problème en proposant une redistribution des contributions de 3 secteurs voisins — une solution que les adultes n\'avaient pas trouvée parce qu\'ils pensaient les secteurs comme des silos. On lui avait dit qu\'il avait un don pour les systèmes. Il avait intégré cette description de lui-même.',
    },
    arrivee: {
      titre: 'La direction de contribution',
      contenu: 'À 38 ans, il avait été nommé directeur de contribution — le poste qui supervisait l\'ensemble du système d\'extraction et de distribution des contributions de Kar-Dum. Il avait trouvé un système fonctionnel mais inefficace. Il avait passé 5 ans à l\'optimiser. Le système fonctionnait maintenant mieux qu\'il n\'avait jamais fonctionné. Il était fier de ça.',
    },
    premier_conflit: {
      titre: 'La pression de réforme',
      contenu: 'À 48 ans, des représentants de plusieurs secteurs avaient présenté des données sur la détresse sociale causée par le niveau de contribution. Les données étaient réelles. Il les avait vérifiées. Il avait répondu qu\'il allait étudier des ajustements. L\'étude avait pris 5 ans. La réforme était de 12%. Les représentants avaient demandé 30%. Il avait dit que 12% était soutenable et que 30% ne l\'était pas.',
    },
    revelation: {
      titre: 'L\'annonce de la réduction',
      contenu: 'À 54 ans, il avait annoncé la réduction de contribution de 12% comme une réforme majeure. Il y croyait. Les métriques de satisfaction sociale avaient amélioré de 8 points. Le système continuait à fonctionner correctement. Tout était bien. Karm (41) avait changé d\'expression 2 semaines après l\'annonce. Thyss l\'avait remarqué et n\'avait pas posé la question.',
    },
    etat_actuel: {
      titre: 'Ce qu\'il ne voit pas',
      contenu: 'Il ne sait pas que Drevaya (39) voit des micro-fractures dans la Fosse depuis 6 mois. Il ne sait pas que Karm a reconstitué les termes réels de l\'accord de Valyx (38). Il ne sait pas que la réduction de 12% a peut-être perturbé le mécanisme de contribution biologique décrit dans cet accord. Il gère un système dont il ne comprend pas la fondation.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyss_karm',
      titre: 'L\'archiviste qui change d\'expression',
      description: 'Thyss a remarqué que Karm (41) a changé d\'expression depuis 3 semaines. Il n\'a pas posé de question. Si Thyss avait posé la question, il aurait peut-être obtenu l\'information plus tôt. Son habitude de ne pas demander ce qu\'il n\'a pas besoin de savoir professionnellement pourrait devenir un problème.',
      personnages_impliques: [41, 40],
      declencheur: 'Thyss remarquant le changement de Karm et décidant finalement de poser la question',
      consequence: 'Thyss apprenant la vraie nature du système qu\'il gère — et son rôle dans la perturbation de l\'accord',
    },
    {
      id: 'thyss_reforme',
      titre: 'La réduction insuffisante',
      description: 'Sa réduction de 12% est annoncée comme une victoire. Si la contribution est biologique comme Karm l\'a trouvé, une réduction de 12% a modifié quelque chose dans un mécanisme dont il ne connaissait pas l\'existence. Les micro-fractures de Drevaya (39) pourraient être directement liées à cette réduction.',
      personnages_impliques: [40, 39],
      declencheur: 'Connexion entre la réduction de contribution et les micro-fractures de la Fosse',
      consequence: 'Thyss devant accepter que sa réforme a peut-être aggravé une situation dont il n\'avait aucune connaissance',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Directeur de contribution de Kar-Dum. A réduit la contribution individuelle de 12% — insuffisant selon ce que Karm (41) a trouvé sur la nature réelle de l\'accord. Ne sait pas que ses décisions ont peut-être perturbé un mécanisme qu\'il ne connaît pas.',

  relations: [
    { id: 40, nom: 'Draven II', type: 'allié', note: 'Son supérieur. L\'a convaincu pour la réforme. Lui fait peut-être trop confiance.' },
    { id: 41, nom: 'Karm', type: 'contact', note: 'A changé d\'expression depuis 3 semaines. Thyss n\'a pas posé la question.' },
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'Il ne sait pas qu\'elle observe des micro-fractures.' },
  ],

  combat: {
    sorts: [
      'Armure de métal (Acier) — renforcement de la peau par une couche métallique — résistance maximale aux impacts',
      'Projection d\'acier (Acier) — fragment métallique projeté à haute vitesse — impact précis à distance',
      'Structure magnétique (Acier) — contrôle des métaux dans une zone — désarmement ou manipulation d\'objets métalliques',
    ],
  },

  image_prompts: [
    {
      id: 'thyss_reunion',
      description: 'Thyss dans une salle de direction de Kar-Dum — un Chthonien de 55 ans debout devant un tableau de métriques, expliquant des données à des représentants. Sa peau acier reflète la lumière artificielle. Son expression est de quelqu\'un certain de ce qu\'il dit — parce qu\'il l\'est vraiment. Ce qu\'il ne voit pas est hors champ.',
      style: 'réaliste Chthonien directeur technocratique, salle de réunion Kar-Dum, métriques de contribution, certitude et point aveugle, peau acier',
    },
  ],

  lore_long: `Thyss croit sincèrement au système de contribution de Kar-Dum. Il a réduit la contribution individuelle de 12% et l'a annoncé comme une victoire. Il a tort sur l'importance de cette réduction.

Ce qu'il ne sait pas : l'accord de Valyx (38) impliquait une contribution biologique, pas économique. Sa réduction a peut-être perturbé un mécanisme qu'il ne connaissait pas.

Karm (41) a changé d'expression depuis 3 semaines. Thyss l'a remarqué. Il n'a pas encore posé la question.`,
};

export default thyss;
