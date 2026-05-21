import type { PersonnageLoreComplet } from '../../../lore-types';

const aelkaeth: PersonnageLoreComplet = {
  id: 281,
  nom: 'Aelkaeth',
  element: 'Fée',
  element2: 'Plante',
  espece: 'Fées',
  region: 'Sylvera',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Petite, lumineuse d\'une façon qu\'elle atténue délibérément. Elle a appris à éteindre la bioluminescence Fée naturelle — un effort constant.',
    peau: 'Légèrement irisée, qu\'elle couvre avec des pigments végétaux. Sa peau "naturelle" brille d\'une façon qui attirerait le regard dans n\'importe quel contexte Sylvan.',
    yeux: 'Vert lumineux, difficile à masquer. Elle évite le contact visuel direct avec les inconnus.',
    vetements: 'Tenue de jardinage simple sans aucun ornement fée — ce qui est inhabituel pour une Fée et suffit à la faire passer pour Sylvan à distance.',
    signes_particuliers: 'Ses plantes poussent 15% plus vite qu\'autour des autres jardiniers. Elle dit que c\'est la qualité du sol. C\'est son élément Fée.',
  },

  psychologie: {
    dominante: 'Aide concrète sans déclaration. Elle peut faire quelque chose d\'utile ici. Elle le fait. Elle ne le signe pas.',
    mecanisme_de_defense: 'L\'anonymat fonctionnel. Passer pour quelqu\'un d\'autre est à la fois une protection et une compétence qu\'elle entretient.',
    contradiction_interne: 'Elle aide les Conservateurs parce qu\'elle croit en leur cause — préserver la forêt contre la Faim des Racines et contre les Gardiens destructeurs. Mais elle ne peut pas se déclarer Fée sans être récupérée par quelqu\'un. Aider sans exister officiellement est une position inconfortable à long terme.',
    rapport_aux_autres: 'Thyrvae (120) est une Fée Sylvan qui a trouvé un équilibre différent — ni faction, ni anonymat, juste l\'évitement. Elles se sont croisées une fois. Thyrvae avait reconnu Aelkaeth comme Fée instantanément. Elles n\'en avaient pas parlé.',
    vision_du_monde: 'Les factions veulent les Fées pour ce qu\'elles peuvent faire, pas pour ce qu\'elles sont. Faire quelque chose d\'utile sans être réduite à une ressource est le seul mode de vie qui lui convient.',
  },

  histoire: {
    enfance: {
      titre: 'La Fée sans territoire',
      contenu: 'Née dans une communauté Fée à la frontière entre Sylvera et l\'Isthme — ni entièrement de la forêt ni entièrement de l\'isthme. Son élément Plante secondaire, rare chez les Fées, lui avait donné une connexion naturelle avec Sylvera que les Fées pures n\'avaient pas. Sylvera avait senti comme un foyer avant qu\'elle y arrive.',
    },
    arrivee: {
      titre: 'Le masque végétal',
      contenu: 'Elle était arrivée à Sylvera à 28 ans, avec une technique de masquage de la bioluminescence qu\'elle avait mis 2 ans à perfectionner. Elle s\'était présentée comme une herboriste Sylvan d\'ascendance mixte. Les Conservateurs l\'avaient acceptée sans questionnement approfondi — ils avaient besoin de jardiniers.',
    },
    premier_conflit: {
      titre: 'La reconnaissance de Thyrvae',
      contenu: 'Thyrvae avait traversé le jardin où elle travaillait. Leurs regards s\'étaient croisés. Thyrvae avait reconnu l\'élément Fée derrière le masque — une Fée reconnaît une autre Fée à des signaux que les non-Fées ne perçoivent pas. Thyrvae n\'avait rien dit. Elle n\'avait rien dit. Elles avaient continué.',
    },
    revelation: {
      titre: 'Le texte de Sylvae',
      contenu: 'Sylvae (31) lui avait demandé de l\'aider à préserver un texte sur les arbres-mémoire perdus — un travail de transcription et de restauration de documents endommagés. C\'était la première fois qu\'on lui demandait quelque chose en la traitant comme une experte plutôt que comme une aide. Elle avait passé 3 semaines dessus.',
    },
    etat_actuel: {
      titre: 'L\'aide qui continue',
      contenu: 'Elle est à Sylvera depuis 6 ans sous son identité masquée. Elle aide les Conservateurs dans des tâches de jardinage, de restauration de documents et de soin des espèces végétales rares. Elle transmet parfois des informations aux Dissidentes via un canal que Sylvae ne connaît pas. Ces deux activités ne se croisent jamais — délibérément.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aelkaeth_double_identite',
      titre: 'Les deux services',
      description: 'Elle aide les Conservateurs avec ses compétences de jardinage Fée/Plante. Elle transmet parfois des informations aux Dissidentes sur les activités des Gardiens dans les zones forestières. Ces deux services ne se parlent pas — ni les Conservateurs ne savent qu\'elle est Dissidente, ni les Dissidentes ne savent qu\'elle est Fée. Ce cloisonnement l\'épuise.',
      personnages_impliques: [31, 120],
      declencheur: 'Double affiliation non déclarée',
      consequence: 'Utilité maximale, vulnérabilité maximale si une couverture tombe',
    },
    {
      id: 'aelkaeth_thyrvae_silence',
      titre: 'La reconnaissance muette',
      description: 'Thyrvae sait qu\'elle est Fée. Elle sait que Thyrvae le sait. Aucune des deux n\'en a parlé. C\'est une forme de pacte implicite entre deux Fées qui ont trouvé des façons différentes de survivre dans un monde qui les veut pour ce qu\'elles sont plutôt que pour qui elles sont.',
      personnages_impliques: [120],
      declencheur: 'Reconnaissance mutuelle lors d\'un croisement',
      consequence: 'Alliance silencieuse non formulée',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Ressource cachée des Conservateurs. Elle fait avancer leur cause de l\'intérieur sans que personne ne sache entièrement ce qu\'elle est.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'mentor', note: 'L\'a impliquée dans des travaux de préservation sérieux — le premier à la traiter comme experte.' },
    { id: 120, nom: 'Thyrvae', type: 'allié', note: 'L\'a reconnue comme Fée. N\'en a rien dit. Pacte implicite de silence mutuel.' },
  ],

  combat: {
    sorts: [
      'Lumière fée ciblée (Fée) — libération soudaine de la bioluminescence masquée — aveuglement temporaire',
      'Croissance entrelacée (Plante) — pousse accélérée et entrelacée de végétaux — immobilisation ou protection',
      'Voile végétal (combiné) — camouflage via végétation et atténuation fée — discrétion en terrain forestier',
    ],
  },

  image_prompts: [
    {
      id: 'aelkaeth_masque',
      description: 'Aelkaeth travaillant dans un jardin Conservateur, sa bioluminescence Fée soigneusement atténuée. Elle se penche sur une plante malade. Ses mains ont une légère luminosité qu\'elle n\'a pas entièrement réussi à éteindre ce matin. Elle le sait. Elle espère que personne ne le voit.',
      style: 'réaliste sylvan-fée, lumière de jardin diffuse, tension subtile entre ce qu\'elle montre et ce qu\'elle est',
    },
  ],

  lore_long: `Aelkaeth est Fée. À Sylvera, personne ne le sait — sauf Thyrvae, qui le sait et n'en a rien dit.

Elle est là depuis 6 ans. Elle a mis 2 ans à perfectionner le masquage de sa bioluminescence avant d'arriver. Elle se présente comme herboriste Sylvan d'ascendance mixte. Les Conservateurs l'ont acceptée parce qu'ils avaient besoin de jardiniers et qu'elle est très bonne.

Ses plantes poussent 15% plus vite qu'autour des autres. Elle dit que c'est le sol.

Elle aide les Conservateurs en jardinière compétente. Elle transmet parfois des informations aux Dissidentes sur les mouvements des Gardiens. Ces deux services ne se connaissent pas. Ni les Conservateurs ne savent qu'elle est Dissidente, ni les Dissidentes ne savent qu'elle est Fée.

Ce cloisonnement la protège. Il l'épuise aussi.

Thyrvae avait traversé son jardin il y a 3 ans. Leurs regards s'étaient croisés. Une Fée reconnaît une autre Fée. Thyrvae n'avait rien dit. Elle non plus. Elles avaient continué. C'est la seule personne à Sylvera qui sait ce qu'elle est réellement.`,
};

export default aelkaeth;
