import type { PersonnageLoreComplet } from '../../../lore-types';

const rhethora: PersonnageLoreComplet = {
  id: 270,
  nom: 'Rhethora',
  element: 'Poison',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Petite, très rapide — les personnes de sa profession qui durent sont rarement imposantes.',
    peau: 'Sable foncé, reflets légèrement verdâtres aux avant-bras — marque de Poison, très discrète.',
    yeux: 'Ambre chaud, qui contredisent tout le reste — ils ont une qualité de présence que les gens ne s\'attendent pas chez quelqu\'un dans sa position.',
    vetements: 'Tenue de terrain Convergence, fonctionnelle. Elle ne porte pas d\'armes visibles. Elle a des armes.',
    signes_particuliers: 'Elle pose des questions avant d\'agir — une habitude professionnelle qu\'elle maintient avec une rigueur que ses supérieurs trouvent parfois retardante.',
  },

  psychologie: {
    dominante: 'Interprétation délibérée. Ses ordres sont ambigus. Elle a décidé d\'interpréter à sa façon jusqu\'à précision. Cette décision est calculée — elle sait ce qu\'elle fait.',
    mecanisme_de_defense: 'L\'ambiguïté comme marge de manœuvre. Tant que l\'ordre n\'est pas précis, elle choisit l\'interprétation qu\'elle préfère. Elle préfère l\'interprétation qui ne nécessite pas de tuer quelqu\'un dont elle ne comprend pas encore la valeur.',
    contradiction_interne: 'Elle travaille pour la Convergence depuis 12 ans. Elle est bonne dans ce qu\'elle fait. Et cette mission spécifique l\'a mise dans un état d\'inconfort qu\'elle n\'a pas eu souvent — pas de la réticence morale, quelque chose de plus proche de la curiosité sur ce qu\'on lui demande d\'empêcher.',
    rapport_aux_autres: 'Khorath (235) est un partenaire de terrain — elle le respecte, il est efficace, ils travaillent bien ensemble. Elle ne lui a pas dit que ses ordres sont ambigus. Il ne lui a pas demandé.',
    vision_du_monde: 'Les ordres imprécis sont des ordres qui laissent une latitude. Elle a appris à voir ça comme une ressource, pas comme une insuffisance.',
  },

  histoire: {
    enfance: {
      titre: 'Le Poison dans les Déserts',
      contenu: 'Née dans les Déserts dans une tribu de tradition nomade. L\'élément Poison — rare et craindra dans les Déserts — avait été accueilli différemment selon les anciens : une malédiction pour certains, une ressource pour d\'autres. Elle avait grandi avec les deux points de vue et décidé très tôt qu\'elle appartenait à la catégorie "ressource".',
    },
    arrivee: {
      titre: 'La Convergence',
      contenu: 'Recrutée à 27 ans après une période de mercenariat. La Convergence cherchait quelqu\'un avec son profil — Poison et Combat combinés, capacité à opérer seule sur le terrain, absence d\'attachements qui compliqueraient les missions. Elle répondait à ces critères.',
    },
    premier_conflit: {
      titre: 'Douze ans de missions claires',
      contenu: 'Pendant 12 ans, ses missions avaient un verbe précis. Elle savait ce qu\'on lui demandait. Elle évaluait si c\'était faisable, elle faisait ou ne faisait pas, elle revenait. Les ordres avaient toujours été suffisamment clairs pour permettre ça.',
    },
    revelation: {
      titre: 'L\'ordre ambigu',
      contenu: '"Empêchez la récupération impériale." C\'est tout. Pas "éliminez la cible". Pas "capturez". "Empêchez la récupération impériale" peut vouloir dire beaucoup de choses — certaines létales, certaines non. Ses supérieurs n\'ont pas précisé. Elle a demandé une précision. Ils ont répété l\'ordre original. Elle a conclu qu\'ils lui laissaient délibérément la latitude.',
    },
    etat_actuel: {
      titre: 'L\'interprétation en attente',
      contenu: 'Elle est dans un port de l\'Isthme depuis 4 jours, avec les coordonnées de Sythavel. Le Second Avatar devrait arriver d\'ici 2 semaines selon la prédiction. Elle utilise ce temps pour observer le port, comprendre les patterns de présence impériale, et se faire une idée de qui est la cible avant de décider ce que "empêcher" signifiera dans ce cas précis.',
    },
  },

  evenements_narratifs: [
    {
      id: 'rhethora_ordre_ambigu',
      titre: 'La précision refusée',
      description: 'Elle a demandé une précision à ses supérieurs : "tuer ou empêcher autrement ?" Ils ont répété l\'ordre original sans réponse. Elle a interprété ça comme une latitude délibérée. C\'est peut-être correct. C\'est peut-être que ses supérieurs ne savaient pas eux-mêmes ce qu\'ils voulaient et ne voulaient pas l\'admettre.',
      personnages_impliques: [],
      declencheur: 'Demande de précision refusée',
      consequence: 'Interprétation laissée à sa discrétion — responsabilité transférée sans être reconnue',
    },
    {
      id: 'rhethora_khorath_partenaire',
      titre: 'Khorath et le terrain',
      description: 'Khorath (235) travaille avec elle sur le terrain. Elle a choisi de ne pas lui dire que ses ordres sont ambigus — elle ne sait pas si ça changerait sa façon de travailler, mais elle ne veut pas introduire une variable qu\'elle ne contrôle pas. Khorath fait ce qu\'on lui dit d\'une façon efficace. Ça lui suffit pour l\'instant.',
      personnages_impliques: [235],
      declencheur: 'Partenariat de terrain',
      consequence: 'Asymétrie d\'information entre partenaires — potentiellement problématique si les décisions divergent',
    },
    {
      id: 'rhethora_observation_port',
      titre: 'L\'observation préalable',
      description: 'Depuis 4 jours, elle observe le port. Elle a identifié 3 agents impériaux actifs et 1 présence qu\'elle ne peut pas catégoriser — peut-être Orven II (263), peut-être quelqu\'un d\'autre. Si Orven II est déjà dans le port et en avance sur ses propres prédictions, la situation est plus complexe qu\'elle n\'était. "Empêcher la récupération impériale" devient concrètement : empêcher Orven II.',
      personnages_impliques: [263],
      declencheur: 'Présence non identifiée dans le port',
      consequence: 'Convergence de plusieurs acteurs dans le même espace — situation multi-joueurs non prévue',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Acteur de terrain ambivalent. Ses ordres lui permettent de protéger ou d\'éliminer. Elle n\'a pas encore décidé lequel des deux elle fera. Cette décision se prendra au moment du contact.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'Cible ou sujet à protéger selon l\'interprétation. Elle n\'a pas encore décidé.' },
    { id: 269, nom: 'Sythavel', type: 'allié', note: 'Lui a transmis les coordonnées. Ne se sont jamais rencontrées directement.' },
    { id: 235, nom: 'Khorath', type: 'allié', note: 'Partenaire terrain efficace — ne sait pas que ses ordres sont ambigus.' },
    { id: 263, nom: 'Orven II', type: 'ennemi', note: 'Présence possible dans le port — si c\'est lui, "empêcher la récupération" signifie l\'arrêter.' },
  ],

  combat: {
    sorts: [
      'Venin de précision (Poison) — injection d\'un agent paralysant ou soporifique à contact, dosage contrôlable',
      'Neutralisation ciblée (Poison) — annulation temporaire des capacités élémentaires d\'une cible via toxine élémentaire',
      'Frappe d\'interception (Combat) — mouvement d\'interposition entre deux acteurs — défensif ou offensif selon l\'intention',
    ],
  },

  image_prompts: [
    {
      id: 'rhethora_port',
      description: 'Rhethora dans un marché du port, immobile dans la foule, qui observe. Elle a les yeux ambre posés sur quelque chose dans la direction du quai. Elle ne semble pas dangereuse. Elle l\'est. L\'expression est celle de quelqu\'un qui accumule des informations avant de prendre une décision qu\'elle n\'est pas encore prête à prendre.',
      style: 'réaliste humain, lumière de port, foule de marché, tons sable et ocre',
    },
  ],

  lore_long: `"Empêchez la récupération impériale."

Elle a demandé une précision. Ils ont répété l'ordre. Elle a conclu à une latitude délibérée.

C'est peut-être ce qu'ils voulaient dire. C'est peut-être qu'ils n'avaient pas encore décidé eux-mêmes et n'ont pas voulu l'admettre. Elle ne peut pas savoir lequel des deux — et dans sa profession, "je ne peux pas savoir" signifie "je choisis l'interprétation qui me convient".

L'interprétation qui lui convient est celle qui ne tue pas quelqu'un avant qu'elle comprenne ce qu'on lui demande d'empêcher.

Elle est dans le port depuis 4 jours. Elle a identifié une présence non catégorisée — peut-être un capteur impérial, peut-être autre chose. Si c'est un capteur impérial à ce niveau de discrétion, ça signifie que l'Empire a des informations de haute précision sur la cible. Ce qui signifie que quelqu'un dans le réseau de la Convergence a communiqué ces informations, ou que les Impériaux ont leurs propres sources.

Elle n'aime pas les situations multi-joueurs. Elles réduisent la marge de manœuvre.

Khorath est efficace et ne pose pas de questions. Elle lui demandera d'agir quand elle saura comment elle veut qu'il agisse.

Le Second Avatar devrait arriver dans 2 semaines selon Sythavel. Elle a 2 semaines pour décider ce que "empêcher" signifie dans son cas précis.

Elle a rarement autant réfléchi avant d'agir. Elle n'est pas sûre de savoir pourquoi cette mission est différente. Elle a l'intention de comprendre ça aussi avant que les 2 semaines soient écoulées.`,
};

export default rhethora;
