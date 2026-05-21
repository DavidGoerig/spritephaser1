import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkrithvae: PersonnageLoreComplet = {
  id: 339,
  nom: 'Sylkrithvae',
  element: 'Fée',
  element2: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyenne, avec des mains qui semblent trop fines pour ce qu\'elles font — la sculpture dans la glace est un travail de force autant que de précision. Ses mains sont plus robustes qu\'elles n\'y paraissent.',
    peau: 'Blanc-doré Givrin avec une teinte chaude inhabituelle — l\'élément Fée primaire qui tempère la froideur naturelle des Givrins. Elle est souvent décrite comme "moins froide" que les autres Givrins par ceux qui la touchent.',
    yeux: 'Dorés avec des éclats bleus. Ils évaluent les volumes — elle voit en trois dimensions naturellement et projette le résultat final d\'une sculpture avant d\'avoir commencé.',
    vetements: 'Tenue pratique couvrant les avant-bras — la sculpture dans la glace projette des éclats. Des marques de travail permanentes sur la tenue. Elle ne les enlève pas.',
    signes_particuliers: 'Elle chante en travaillant — pas consciemment, pas fort. C\'est la magie Fée qui se manifeste dans le processus de création. Les sculptures faites dans le silence ont une durée moindre.',
  },

  psychologie: {
    dominante: 'Création de sculptures de glace-mémoire qui durent sans fondre. La technique combine magie Fée de cohésion avec la structure naturelle de la glace Givrin. Ses œuvres durent 100 ans sans intervention — certaines de ses premières sculptures sont encore intactes après 60 ans.',
    mecanisme_de_defense: 'L\'œuvre comme réponse permanente. Ce qu\'elle crée restera après elle. Cette permanence lui permet de ne pas traiter l\'urgence des crises actuelles comme définitive — le Gel Éternel sera passé, ses sculptures seront encore là.',
    contradiction_interne: 'Karath (52) lui a demandé de créer des sculptures-mémoire du Gel Éternel — des œuvres qui documenteraient la période pour les générations futures. Elle est en train d\'en créer. Mais elle ne sait pas si le Gel Éternel aura des générations futures pour les voir. Elle crée quand même.',
    rapport_aux_autres: 'Karath (52) lui commande des sculptures à vocation mémorielle pour l\'archive de Crysalme. Il est son commanditaire principal et sa source d\'informations sur ce qui mérite d\'être documenté. Iskraeth (337) lui fournit des récits de premier plan sur les cycles précédents — des récits qu\'elle traduit en sculptures.',
    vision_du_monde: 'La glace mémorise. Elle donne à la glace une forme. Cette forme est une façon de mémoriser ce qui n\'aurait pas été mémorisé autrement.',
  },

  histoire: {
    enfance: {
      titre: 'La première sculpture',
      contenu: 'À 12 ans, elle avait sculpté une figure dans la glace d\'un mur de son quartier. La figure s\'était dégradée en 3 ans. À 15 ans, elle recommençait la même figure avec sa magie Fée intégrée au processus. La figure tenait toujours 10 ans plus tard. Elle avait compris la différence.',
    },
    arrivee: {
      titre: 'La commande de Karath',
      contenu: 'À 28 ans, Karath (52) l\'avait approchée avec une première commande — une sculpture mémorielle d\'un événement de Crysalme il y a 80 ans. Il lui avait fourni des récits, des témoignages, des archives. Elle avait travaillé 3 mois. La sculpture avait été intégrée à l\'archive de Crysalme. Elle était encore intacte.',
    },
    premier_conflit: {
      titre: 'La sculpture politique',
      contenu: 'À 40 ans, Karath lui avait demandé une sculpture mémorielle d\'une décision monarchique controversée — une décision qui avait causé des morts, documentée dans ses archives. Elle avait créé la sculpture avec précision. La Monarchie avait demandé à Karath que la sculpture ne soit pas mise en circulation. Karath avait gardé la sculpture dans les archives internes. Elle était là, non visible. Elle existait.',
    },
    revelation: {
      titre: 'Les récits d\'Iskraeth',
      contenu: 'Iskraeth (337) lui avait donné accès à ses récits sur les cycles précédents — des récits détaillés d\'un Givrin qui avait vu les cycles de l\'intérieur. Elle avait commencé une série de sculptures sur ces cycles. Ces sculptures donnaient une perspective sur le Gel Éternel actuel — il était dans une série, pas une anomalie. Pas nécessairement rassurant.',
    },
    etat_actuel: {
      titre: 'La série en cours',
      contenu: 'Elle travaille sur une série de 7 sculptures sur les cycles de gel et dégel de Crysalme. Les 4 premières sont terminées. La 5ème sera sur le Gel Éternel actuel — elle ne sait pas encore comment le représenter sans savoir comment il se termine. Elle a commencé des esquisses. Elle les recommence.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkrithvae_sculpture_éternel',
      titre: 'Représenter ce qui n\'est pas terminé',
      description: 'La 5ème sculpture de sa série doit représenter le Gel Éternel actuel. Elle ne sait pas comment représenter un événement sans connaître son dénouement. Ses esquisses actuelles montrent le gel en cours sans horizon de dégel — une représentation de l\'incertitude. Elle n\'est pas satisfaite. Elle continue d\'essayer.',
      personnages_impliques: [52, 337],
      declencheur: 'Atteinte de la sculpture du Gel Éternel dans la série en cours',
      consequence: 'Blocage créatif sur la représentation de l\'incertitude — série incomplète',
    },
    {
      id: 'sylkrithvae_sculpture_archivee',
      titre: 'La sculpture non visible',
      description: 'La sculpture mémorielle de la décision monarchique controversée est dans les archives internes de Karath (52) — non mise en circulation à la demande de la Monarchie. Elle existe. Elle n\'est pas visible. Sylkrithvae sait où elle est. Karath sait où elle est. La Monarchie a demandé qu\'elle ne soit pas mise en circulation, pas qu\'elle soit détruite.',
      personnages_impliques: [52],
      declencheur: 'Décision monarchique de non-circulation d\'une sculpture documentant une décision controversée',
      consequence: 'Œuvre préservée mais invisible — tension entre archive et visibilité',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Sculptrice indépendante de glace-mémoire à Crysalme. Ses œuvres documentent les cycles de gel et dégel sur commande de Karath. La 5ème sculpture — sur le Gel Éternel actuel — est bloquée par l\'incertitude de son dénouement.',

  relations: [
    { id: 52, nom: 'Karath', type: 'client', note: 'Commanditaire principal. Source d\'informations sur ce qui mérite d\'être documenté. A gardé une sculpture controversée dans les archives internes.' },
    { id: 337, nom: 'Iskraeth', type: 'allié', note: 'Fournit des récits de premier plan sur les cycles précédents. Source narrative pour la série de sculptures.' },
  ],

  combat: {
    sorts: [
      'Éclat de sculpture (Glace) — projection de fragments de glace sculptés à haute vitesse — dommages multiples',
      'Cohésion féerique (Fée) — maintien d\'une structure de glace sous pression — bouclier renforcé',
      'Forme figée (Glace + Fée) — immobilisation d\'une cible dans une sculpture de glace temporaire — neutralisation',
    ],
  },

  image_prompts: [
    {
      id: 'sylkrithvae_serie',
      description: 'Sylkrithvae dans son atelier de Crysalme, entourée des 4 premières sculptures de sa série sur les cycles de gel. Les sculptures représentent chacune une époque — la 4ème, la plus récente, montre un dégel partiel. Devant elle, une 5ème surface de travail encore vierge. Elle tient un outil mais ne commence pas encore.',
      style: 'réaliste sculptrice givrin, série de sculptures de glace, atelier Crysalme, surface vierge devant elle',
    },
  ],

  lore_long: `Sylkrithvae crée des sculptures de glace-mémoire qui durent 100 ans sans fondre. Sa technique combine magie Fée de cohésion avec la structure cristalline Givrin.

Une série de 7 sculptures sur les cycles de gel et dégel de Crysalme — 4 terminées, basées sur les récits d'Iskraeth (337). La 5ème doit représenter le Gel Éternel actuel. Elle ne sait pas comment représenter un événement sans connaître son dénouement. Elle recommence ses esquisses.

Une sculpture mémorielle d'une décision monarchique controversée est dans les archives de Karath (52) — non visible à la demande de la Monarchie. Elle existe. Ce n'est pas la même chose que d'être accessible.`,
};

export default sylkrithvae;
