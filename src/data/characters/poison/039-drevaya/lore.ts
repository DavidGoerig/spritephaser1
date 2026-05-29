import type { PersonnageLoreComplet } from '../../../lore-types';

const drevaya: PersonnageLoreComplet = {
  id: 39,
  nom: 'Drevaya',
  element: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonienne de 44 ans — une gardienne de zone dont la corpulence dit les années passées dans les niveaux inférieurs. Elle est dense, basse de taille, avec des muscles d\'escalade souterraine. Elle ne se déplace pas vite en surface — elle n\'a pas besoin.',
    peau: 'Foncée avec des taches claires aux mains — une réaction à l\'exposition prolongée aux spores des niveaux 7-8. Ces taches sont le signe qu\'elle va plus profond et plus longtemps que la durée recommandée. Elle ne le mentionne pas dans ses rapports.',
    yeux: 'Verts-noirs adaptés à la bioluminescence fongique — elle voit dans le noir des niveaux inférieurs sans équipement supplémentaire. En surface, elle plisse souvent les yeux. La lumière naturelle lui est moins utile que les lueurs des champignons.',
    vetements: 'Combinaison de gardienne — noire avec des capteurs de spores intégrés qu\'elle a modifiés au fil des ans. La combinaison officielle a été remplacée pièce par pièce jusqu\'à ce qu\'il n\'en reste presque plus rien d\'original. Elle connaît la Fosse mieux que ses équipements ne sont conçus pour le gérer.',
    signes_particuliers: 'Elle note tout dans un carnet physique — pas de système numérique, pas d\'archive partagée. Ses observations des 6 derniers mois sont dans ce carnet et nulle part ailleurs. Elle n\'a pas décidé quoi en faire.',
  },

  psychologie: {
    dominante: 'Gardienne de zone qui voit quelque chose qu\'elle n\'est pas censée voir — des micro-fractures dans les parois de confinement des niveaux 7-9. Elle n\'a pas rapporté parce qu\'elle n\'est pas encore certaine de ce qu\'elle voit. Ou parce qu\'elle est certaine et qu\'elle ne sait pas à qui le dire.',
    mecanisme_de_defense: 'L\'observation comme protection. Tant qu\'elle continue à observer et à documenter sans conclure, elle n\'a pas à décider. La décision arrive quand la documentation est complète. Elle prolonge la documentation.',
    contradiction_interne: 'Elle a lu des fragments des journaux de Valyx (38) — suffisamment pour reconnaître que ce qu\'elle voit correspond à ce que Valyx appelait un "signal de refus". Si elle a raison, les micro-fractures ne sont pas une dégradation des parois — elles sont une communication de la zone fongique. Et elle n\'a rien dit depuis 6 mois.',
    rapport_aux_autres: 'Karm (41) est l\'archiviste qui reconstitue les journaux de Valyx — elle aurait dû aller le voir il y a 5 mois. Elle sait qu\'il est là. Elle n\'est pas allée. Graveth (43) est venu lui poser des questions sur la zone fongique il y a 3 mois — des questions trop précises pour un simple chercheur de la Convergence. Elle a répondu prudemment. Elle pense qu\'il cherche accès au niveau 9.',
    vision_du_monde: 'La Fosse Interdite n\'est pas interdite parce qu\'elle est dangereuse — elle est interdite parce que les gens qui y entrent sans comprendre ce qu\'ils font deviennent des problèmes. Elle comprend ce qu\'elle fait. Ce qui est en train de se passer dans la Fosse, elle ne comprend pas encore.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier niveau',
      contenu: 'À 16 ans, dans une formation accélérée des gardiens de zone après la mort de trois gardiens dans un incident de spores, elle avait été affectée au niveau 5 — normalement inaccessible avant 25 ans. Elle avait survécu sans incident. Elle avait demandé à descendre au niveau 6 la semaine suivante. On lui avait dit non. Elle y était descendue seule deux jours après.',
    },
    arrivee: {
      titre: 'La formation aux journaux de Valyx',
      contenu: 'À 24 ans, lors d\'une formation avancée des gardiens de zone, elle avait eu accès à des extraits des journaux de Valyx (38) — pas les journaux complets, des extraits sélectionnés. Ces extraits décrivaient la zone fongique d\'une façon qui correspondait à ce qu\'elle avait observée depuis 8 ans mieux que n\'importe quel manuel officiel.',
    },
    premier_conflit: {
      titre: 'Le rapport non soumis',
      contenu: 'À 31 ans, après une descente au niveau 8 où elle avait observé des changements dans les structures fongiques, elle avait commencé à rédiger un rapport. À mi-chemin, elle avait compris que le rapport nécessitait une explication sur la nature des changements — et que son explication ne correspondrait pas à ce que les structures officielles attendaient d\'un rapport de gardienne. Elle avait rangé le brouillon.',
    },
    revelation: {
      titre: 'Les micro-fractures',
      contenu: 'À 43 ans, lors d\'une routine d\'inspection, elle avait vu la première micro-fracture — une fissure dans les cristaux de confinement du niveau 7 qui ne correspondait à aucune dégradation normale. Elle avait comparé avec les journaux de Valyx. La correspondance était exacte avec ce que Valyx appelait un "signal de refus". Elle avait noté dans son carnet privé. Elle n\'avait rien dit d\'autre.',
    },
    etat_actuel: {
      titre: 'Six mois de silence',
      contenu: 'Elle a documenté 23 micro-fractures sur les niveaux 7 à 9 depuis 6 mois. Le rythme s\'accélère — 4 nouvelles fractures dans les 2 dernières semaines. Elle a noté que la progression correspond à une évolution géométrique, pas linéaire. Elle sait ce que ça veut dire. Elle n\'a toujours pas décidé à qui parler en premier.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drevaya_karm',
      titre: 'La décision de parler',
      description: 'Drevaya a 23 micro-fractures documentées. Karm (41) a reconstitué les termes de l\'accord de Valyx et est "terrified" par ce qu\'il a trouvé. Si Drevaya allait voir Karm, leurs informations combinées créeraient une image complète de ce qui se passe dans la Fosse. Mais Drevaya n\'est pas encore allée voir Karm. Elle attend encore — peut-être une dernière observation, peut-être le courage.',
      personnages_impliques: [41, 40],
      declencheur: 'Décision de Drevaya de partager ses observations avec Karm',
      consequence: 'Compréhension combinée de l\'état réel de la Fosse — et obligation d\'agir',
    },
    {
      id: 'drevaya_graveth',
      titre: 'La demande de la Convergence',
      description: 'Graveth (43) lui a posé des questions trop précises sur la zone fongique. Elle pense qu\'il cherche accès au niveau 9. Si la Convergence accède au niveau 9 dans l\'état actuel de la Fosse, les conséquences sont imprévisibles — et peut-être irréversibles. Elle n\'a pas encore rapporté la demande de Graveth.',
      personnages_impliques: [43, 42],
      declencheur: 'Rapporter la demande de Graveth à Thyss (42) ou garder le silence',
      consequence: 'Soit Thyss est informé et peut agir, soit Graveth accède au niveau 9 sans obstacle officiel',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Gardienne de zone qui voit les micro-fractures depuis 6 mois et n\'a rien dit. A 23 fractures documentées, rythme en accélération géométrique. Reconnaît le "signal de refus" décrit par Valyx (38). N\'a pas encore décidé à qui parler. Graveth (43) lui a posé des questions suspectes.',

  relations: [
    { id: 38, nom: 'Valyx', type: 'contact', note: 'Morte il y a 40 ans. A lu ses journaux. Reconnaît ce qu\'elle décrivait dans ses propres observations.' },
    { id: 41, nom: 'Karm', type: 'contact', note: 'L\'archiviste qui devrait savoir ce qu\'elle sait. Elle n\'est pas encore allée le voir.' },
    { id: 43, nom: 'Graveth', type: 'contact', note: 'A posé des questions trop précises. Elle pense qu\'il veut accès au niveau 9.' },
  ],

  combat: {
    sorts: [
      'Voile de spores (Poison) — nuage de spores désorientation — perte de perception environnementale dans une zone',
      'Symbiose fongique (Poison) — contact avec les réseaux fongiques — navigation souterraine sans équipement',
      'Corruption organique (Poison) — injection de toxines adaptatives — affaiblissement progressif d\'une cible',
    ],
  },

  image_prompts: [
    {
      id: 'drevaya_fracture',
      description: 'Drevaya au niveau 7 de la Fosse Interdite — une Chthonienne de 44 ans accroupie devant une paroi de cristaux de confinement, tenant un carnet dans une main. Elle regarde une fissure dans les cristaux. Sa lumière frontale est la seule source de lumière visible. Son expression est de quelqu\'un qui voit quelque chose et prend une décision sur quoi en faire.',
      style: 'réaliste Chthonienne gardienne, niveau 7 de la Fosse, micro-fracture, carnet de notes, lumière de front, décision imminente, bioluminescence fongique',
    },
  ],

  lore_long: `Drevaya voit les micro-fractures depuis 6 mois. Elle a 23 fractures documentées dans son carnet privé. Le rythme s'accélère.

Elle a lu les journaux de Valyx (38) — elle reconnaît ce que Valyx appelait un "signal de refus". Si elle a raison, ce n'est pas une dégradation des parois. C'est une communication.

Karm (41) a reconstitué les termes de l'accord et est terrified. Graveth (43) cherche accès au niveau 9. Elle n'a toujours pas décidé à qui parler.`,
};

export default drevaya;
