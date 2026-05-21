import type { PersonnageLoreComplet } from '../../../lore-types';

const drektharv: PersonnageLoreComplet = {
  id: 319,
  nom: 'Drektharv',
  element: 'Acier',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Moyen-grand avec la posture d\'un chimiste — légèrement penché en avant, comme si quelque chose d\'intéressant se passait toujours à hauteur de table.',
    peau: 'Gris-argent Chthonien avec des zones de coloration brunâtre sur le dos des mains — réaction cutanée aux alliages sol/acier qu\'il travaille depuis 15 ans. Inoffensif mais permanent.',
    yeux: 'Argentés avec des reflets dorés — les deux éléments qui s\'expriment dans le regard. Il voit les structures cristallines dans les matériaux à l\'œil nu.',
    vetements: 'Blouse de chimiste sur une tenue Technocratie standard. La blouse a des marques de divers alliages — pas d\'accidents, mais des tests. Il travaille proprement mais ses vêtements témoignent de ce qu\'il a fait.',
    signes_particuliers: 'Il décrit les propriétés des matériaux comme on parlerait de personnalités. "Cet alliage est obstinément rigide", "celui-là est accommodant sous la chaleur". Ce n\'est pas de l\'anthropomorphisme — c\'est sa façon de comprendre rapidement les comportements complexes.',
  },

  psychologie: {
    dominante: 'Compréhension chimique de ce que les ingénieurs font intuitivement. Si on comprend pourquoi un alliage se comporte d\'une certaine façon, on peut le faire se comporter autrement.',
    mecanisme_de_defense: 'La précision terminologique. Si ses conclusions sont précises et documentées, personne ne peut les déformer. Il passe beaucoup de temps sur les formulations.',
    contradiction_interne: 'Il travaille pour la Technocratie sur des équipements de la Fosse. Certains de ses alliages ont été utilisés dans des applications dont il n\'avait pas été informé — il l\'a découvert en voyant un rapport technique qui citait sa composition sans mentionner d\'où elle venait. La Technocratie réutilise ses travaux sans lui dire pour quoi.',
    rapport_aux_autres: 'Thyss (42) est son superviseur technique — il reçoit les missions et valide les travaux. Kaevorn (243) lui a posé des questions sur ses alliages sol/acier depuis la perspective d\'une autre région — des questions qui suggèrent une application différente de ce que la Technocratie lui donne comme objectif.',
    vision_du_monde: 'La chimie des alliages est une langue. Si on comprend la langue, on peut écrire de nouvelles phrases. Ce qu\'on fait des phrases ensuite est une question séparée.',
  },

  histoire: {
    enfance: {
      titre: 'La laboratoire familiale',
      contenu: 'Né dans une famille de chimistes de la Technocratie. Le père travaillait les alliages standards. À 12 ans, il avait commencé à mélanger des compositions hors protocole dans le labo familial — pas pour désobéir, pour comprendre ce qui se passait à la frontière des propriétés connues. Son père l\'avait laissé faire tant que les résultats étaient documentés.',
    },
    arrivee: {
      titre: 'Le premier alliage sol/acier',
      contenu: 'À 27 ans, il avait développé un alliage sol/acier avec des propriétés de résistance chimique supérieures aux standards — une réponse à la corrosion accélérée des équipements de la Fosse par les émanations fongiques. La Technocratie avait intégré l\'alliage dans ses équipements de la Fosse. Il avait été reconnu comme spécialiste de la chimie des alliages pour environnements extrêmes.',
    },
    premier_conflit: {
      titre: 'L\'application inconnue',
      contenu: 'À 36 ans, un rapport technique circulant en interne citait une composition d\'alliage identique à l\'une des siennes — sans attribution. L\'application décrite était différente de ce qu\'on lui avait demandé de développer : des contraintes d\'un équipement d\'extraction de la Fosse profonde qu\'il n\'avait pas connaissance d\'avoir aidé à construire. La Technocratie réutilisait ses travaux sans l\'informer.',
    },
    revelation: {
      titre: 'Les questions de Kaevorn',
      contenu: 'Kaevorn (243) — un spécialiste d\'une autre région — l\'avait contacté pour des questions sur ses alliages sol/acier depuis une perspective différente : des applications à des environnements géologiques distincts de ceux de la Fosse. Les questions étaient précises et pertinentes. Kaevorn avait accès à ses publications techniques. La conversation avait été utile dans les deux sens.',
    },
    etat_actuel: {
      titre: 'Les trois projets en cours',
      contenu: 'Trois projets d\'alliage en cours pour la Technocratie — des améliorations de résistance pour différentes zones de la Fosse. Il soumet ses compositions avec une documentation complète des propriétés et des limites. Il a commencé à ajouter une mention sur les usages recommandés et les usages déconseillés. La Technocratie n\'a pas commenté ces ajouts.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drektharv_reuse_non_authorisee',
      titre: 'Les compositions réutilisées',
      description: 'Un rapport technique citait une de ses compositions dans une application qu\'il ne savait pas avoir aidé à créer. Il a vérifié ses archives. Trois de ses compositions ont été utilisées dans des applications non mentionnées dans ses mandats originaux. Il a signalé ce constat à Thyss (42) comme une question administrative — il voulait savoir si ses mandats couvraient toutes les applications. La réponse : ses compositions appartiennent à la Technocratie dès validation.',
      personnages_impliques: [42],
      declencheur: 'Découverte d\'une composition réutilisée dans une application non déclarée',
      consequence: 'Clarification que ses travaux peuvent être utilisés sans notification — il continue de documenter les usages recommandés et déconseillés quand même',
    },
    {
      id: 'drektharv_kaevorn_collaboration',
      titre: 'La perspective de Kaevorn',
      description: 'Kaevorn (243) lui a posé des questions sur des applications de ses alliages dans des environnements géologiques différents de la Fosse. La conversation a ouvert des pistes que ses mandats Technocratie ne couvrent pas. Il a noté les questions de Kaevorn dans ses archives de recherche. Si la Technocratie demande si il a des contacts extérieurs, il répondra oui.',
      personnages_impliques: [243],
      declencheur: 'Contact d\'un spécialiste extérieur avec des questions pertinentes',
      consequence: 'Pistes de recherche non couvertes par les mandats Technocratie — notées, pas encore développées',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Chimiste dont les alliages permettent le fonctionnement des équipements de la Fosse dans des environnements extrêmes. Ses compositions sont réutilisées sans notification. Il documente les usages recommandés et déconseillés comme réponse passive.',

  relations: [
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Superviseur technique. A informé que les compositions appartiennent à la Technocratie dès validation. Relation fonctionnelle mais asymétrique.' },
    { id: 243, nom: 'Kaevorn', type: 'allié', note: 'Spécialiste extérieur avec questions pertinentes. A ouvert des pistes de recherche non couvertes par les mandats. Contact maintenu.' },
  ],

  combat: {
    sorts: [
      'Corrosion d\'acier (Acier) — application d\'un agent chimique qui fragilise les métaux adverses — sabotage d\'équipement',
      'Sol traité (Sol) — modification chimique d\'une zone de sol pour créer une surface à propriétés particulières — piège ou barrière',
      'Alliage de protection (Acier) — revêtement d\'une surface avec un alliage résistant — renforcement d\'urgence',
    ],
  },

  image_prompts: [
    {
      id: 'drektharv_laboratoire',
      description: 'Drektharv dans un laboratoire souterrain, examinant un échantillon d\'alliage sous un instrument d\'analyse. Sur son bureau, plusieurs petits pots d\'alliages différents, chacun étiqueté avec une composition et des notes. Il regarde l\'échantillon avec l\'expression de quelqu\'un qui découvre quelque chose d\'intéressant.',
      style: 'réaliste chimiste technique, laboratoire souterrain, analyse d\'alliage, curiosité scientifique visible',
    },
  ],

  lore_long: `Drektharv développe des alliages sol/acier qui permettent aux équipements de fonctionner dans les environnements chimiques extrêmes de la Fosse Interdite.

Trois de ses compositions ont été réutilisées dans des applications qu'il ne savait pas avoir aidé à créer. Il a signalé ça à Thyss (42) comme question administrative. Réponse : ses compositions appartiennent à la Technocratie dès validation. Il continue de documenter les usages recommandés et déconseillés dans ses soumissions. La Technocratie n'a pas commenté ces ajouts.

Kaevorn (243) l'a contacté avec des questions sur des applications dans des environnements géologiques différents de la Fosse. La conversation a ouvert des pistes que ses mandats Technocratie ne couvrent pas. Il les a notées.

Il décrit les alliages comme des personnalités. Ce n'est pas de l'anthropomorphisme — c'est sa façon de comprendre rapidement ce qu'il a devant lui.`,
};

export default drektharv;
