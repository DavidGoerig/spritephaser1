import type { PersonnageLoreComplet } from '../../../lore-types';

const gaelryn: PersonnageLoreComplet = {
  id: 276,
  nom: 'Gaelryn',
  element: 'Electrique',
  element2: 'Vent',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Fine, musclée aux épaules — physique d\'une navigatrice habituée aux raffales. Les cheveux toujours relevés, jamais coiffés.',
    peau: 'Cuivrée par les altitudes, avec de légères traces de brûlures électriques aux mains — marques d\'apprentissage jamais soignées.',
    yeux: 'Gris-bleu changeant, avec des éclairs dans les iris quand elle est concentrée — réflexe électrique non maîtrisé.',
    vetements: 'Combinaison de vol pratique avec compartiments pour instruments de navigation. Elle porte toujours deux paires de gants — l\'une conductrice pour l\'élément, l\'autre isolante pour les équipements.',
    signes_particuliers: 'Parle aux courants. Pas métaphoriquement — elle murmure en vol, comme si les courants avaient besoin d\'être convaincus.',
  },

  psychologie: {
    dominante: 'Liberté de mouvement comme philosophie de vie. Elle n\'appartient à aucun réseau parce qu\'appartenir, c\'est atterrir.',
    mecanisme_de_defense: 'L\'altitude. Plus c\'est haut, plus les complications humaines semblent petites.',
    contradiction_interne: 'Elle vend ses services à Caeryn et Sorthel — deux réseaux dont elle connaît les implications. Elle ne pose pas de questions sur les cargaisons, mais elle sait. Elle choisit de ne pas savoir officiellement.',
    rapport_aux_autres: 'Caeryn (101) lui a appris les passages bas. Elle lui a appris les courants électriques hauts. C\'est un échange honnête entre deux personnes qui ne posent pas de questions.',
    vision_du_monde: 'Entre Asterciel et Thalassyr, il y a 340 kilomètres de ciel que personne ne contrôle vraiment. C\'est l\'endroit le plus libre qu\'elle connaisse.',
  },

  histoire: {
    enfance: {
      titre: 'La strate basse',
      contenu: 'Née dans les strates basses d\'Asterciel d\'un père navigateur et d\'une mère Néréide venue du port de Thalassyr — ce qui explique le double élément. Elle avait appris à voler avant d\'apprendre à nager, ce qui lui avait donné une façon de penser l\'espace que ni les Aérides ni les Néréides ne partageaient entièrement.',
    },
    arrivee: {
      titre: 'La route non-cartographiée',
      contenu: 'À 24 ans, après 4 ans comme messagère des strates basses, elle avait découvert un couloir de vent entre les deux niveaux d\'Asterciel et le port central de Thalassyr — un trajet que les navigateurs officiels évitaient parce que les courants électriques naturels le rendaient dangereux. Pour elle, les courants électriques étaient une aide, pas un obstacle.',
    },
    premier_conflit: {
      titre: 'La cargaison sans question',
      contenu: 'Le premier voyage pour Caeryn (101) : une caisse de "matériaux de maintenance" qui pesait le double de ce que la description indiquait. Elle avait livré. Pas de question. Caeryn lui avait payé le double du tarif standard. C\'est ce jour qu\'elle avait compris le modèle économique de sa neutralité.',
    },
    revelation: {
      titre: 'La jonction',
      contenu: 'Taelvorn (277) travaillait sur les jonctions entre le réseau artificiel d\'Orven et les courants naturels. Ils s\'étaient croisés en vol — lui en inspection, elle en livraison. Il avait remarqué comment elle naviguait dans les courants électriques. Elle avait remarqué qu\'il ne portait pas d\'insigne de faction. Ils avaient parlé de courants pendant 20 minutes sans parler d\'autre chose.',
    },
    etat_actuel: {
      titre: 'La route et ses clients',
      contenu: 'Elle vole entre Asterciel et Thalassyr trois à quatre fois par semaine. Ses clients sont Caeryn pour les passages bas, Sorthel (82) pour les routes maritimes connectées, et des particuliers sans affiliation. Elle ne sait pas exactement ce qu\'elle transporte pour chaque client. C\'est délibéré.',
    },
  },

  evenements_narratifs: [
    {
      id: 'gaelryn_couloir_electrique',
      titre: 'Le couloir dangereux',
      description: 'Elle connaît 3 passages entre Asterciel et Thalassyr que les navigateurs officiels évitent à cause des courants électriques. Pour elle, ces courants sont des guides — elle les lit comme d\'autres lisent les étoiles. Ses routes sont 40% plus rapides que les officielles. Personne d\'autre ne peut les suivre sans son élément électrique.',
      personnages_impliques: [101, 82],
      declencheur: 'Maîtrise du double élément Electrique/Vent',
      consequence: 'Routes exclusives — ce qui la rend indispensable et impossible à remplacer',
    },
    {
      id: 'gaelryn_taelvorn_rencontre',
      titre: 'La rencontre en vol',
      description: 'Taelvorn et elle se sont croisés deux fois en vol sans jamais se reconnaître dans un contexte terrestre. Il ne sait pas qu\'elle utilise ses jonctions pour ses routes. Elle ne sait pas que ses routes dépendent de son infrastructure. Ces deux ignorances sont confortables pour les deux.',
      personnages_impliques: [277],
      declencheur: 'Croisement en inspection et en livraison',
      consequence: 'Dépendance mutuelle non consciente',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Infrastructure de transport entre les deux régions affectées. Elle transporte des choses entre des mondes sans appartenir à aucun des deux.',

  relations: [
    { id: 101, nom: 'Caeryn', type: 'allié', note: 'Échange de savoir-faire : elle apporte les courants hauts, Caeryn apporte les passages bas. Clientèle principale.' },
    { id: 82, nom: 'Sorthel', type: 'allié', note: 'Connecte les routes maritimes aux routes aériennes. Client occasionnel, fiable.' },
    { id: 277, nom: 'Taelvorn', type: 'contact_nécessaire', note: 'Croisé en vol. Dépendance mutuelle non nommée. Conversation de 20 minutes sur les courants.' },
  ],

  combat: {
    sorts: [
      'Arc conducteur (Electrique) — décharge ciblée via les courants atmosphériques — portée augmentée en altitude',
      'Rafale de cap (Vent) — accélération ou déviation de trajectoire — précision de navigation en combat aérien',
      'Navigation électrique (combiné) — lecture et manipulation des champs électriques atmosphériques — avantage de terrain en vol',
    ],
  },

  image_prompts: [
    {
      id: 'gaelryn_vol',
      description: 'Gaelryn en vol dans un couloir de courants électriques entre deux masses nuageuses. Elle ne porte pas de protection contre les arcs — ses mains nues dans les gants conducteurs, les yeux avec des éclairs dans les iris. Elle ne combat pas, elle navigue.',
      style: 'réaliste aérien, lumière électrique bleue dans les nuages, tons gris et cuivré, altitude et liberté',
    },
  ],

  lore_long: `Gaelryn connaît 3 routes entre Asterciel et Thalassyr que personne d'autre ne peut voler.

Ce n'est pas une revendication — c'est un fait technique. Les couloirs traversent des zones de courants électriques naturels que les navigateurs standard évitent. Pour elle, ces courants sont des rails. Son élément Electrique lit le champ avant qu'elle y entre ; son élément Vent ajuste la trajectoire en temps réel. Le résultat : 40% plus rapide que les routes officielles, sans turbulences.

Elle ne pose pas de questions sur les cargaisons. C'est une règle professionnelle et une protection personnelle. Caeryn lui confie des "matériaux" qui pèsent le double de ce que les manifestes indiquent. Sorthel l'envoie ramasser des colis dans des ports où personne ne devrait avoir de contacts. Elle livre. Elle est payée. Elle repart.

Elle s'est croisée avec Taelvorn deux fois en vol sans jamais connecter la personne en inspection aux jonctions électriques qui rendent ses routes possibles. L'infrastructure qu'il maintient et les routes qu'elle emprunte se complètent parfaitement — ni l'un ni l'autre ne le sait consciemment.

Entre Asterciel et Thalassyr, 340 kilomètres de ciel. Personne ne gère vraiment cet espace. Pas l'Empire, pas la Confédération, pas les réseaux. C'est le seul endroit où elle appartient entièrement à elle-même.`,
};

export default gaelryn;
