import type { PersonnageLoreComplet } from '../../../lore-types';

const thalvelyn: PersonnageLoreComplet = {
  id: 280,
  nom: 'Thalvelyn',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Fine, avec des mouvements lents et délibérés. Ses gestes dans les jardins ressemblent à une conversation plutôt qu\'à du travail.',
    peau: 'Brun doré Sylvan avec des taches légèrement vertes aux jointures — marque de l\'élément Plante. La Fée secondaire donne une luminosité subtile aux yeux.',
    yeux: 'Vert forêt, avec une capacité à rester immobiles plusieurs minutes — elle regarde les plantes comme on écoute.',
    vetements: 'Robe de travail avec des dizaines de petites poches pour les semences et les outils de jardinage. Elle porte toujours une fleur fraîche à l\'oreille — pas par coquetterie, pour tester la qualité de l\'air du jardin.',
    signes_particuliers: 'Ses jardins-mémoire émettent un son léger — presque inaudible — quand elle y entre. Elle dit que ce sont les plantes qui la reconnaissent.',
  },

  psychologie: {
    dominante: 'Mémoire vivante comme vocation. Les jardins qu\'elle entretient conservent des émotions que personne n\'a plus les mots pour nommer.',
    mecanisme_de_defense: 'La patience des plantes. Quand une situation la dépasse, elle jardine — les plantes ont des échelles de temps qui relativisent l\'urgence humaine.',
    contradiction_interne: 'Ses jardins enregistrent les émotions — y compris les émotions des gens qui viennent les visiter. Elle est la seule à pouvoir les lire. Elle ne l\'a pas dit à tous ses visiteurs.',
    rapport_aux_autres: 'Thalorn (33) lui a appris la théorie des jardins-mémoire. Leth (34) vient parfois lui demander ce que ses plantes ont enregistré — une question à laquelle elle répond avec précaution, parce que certains souvenirs ne lui appartiennent pas.',
    vision_du_monde: 'La Faim des Racines a tué les arbres. Les jardins-mémoire préservent ce que les arbres auraient porté. C\'est une substitution imparfaite. L\'imparfait vaut mieux que le vide.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant qui entendait',
      contenu: 'Née dans une famille de Conservateurs de Sylvera, elle avait commencé à entendre les plantes à 9 ans — pas comme des voix, comme des états. Une plante en stress, une plante en paix, une plante qui portait quelque chose. L\'élément Fée, apparu plus tard, lui avait donné un langage pour ces états.',
    },
    arrivee: {
      titre: 'Le premier jardin',
      contenu: 'À 20 ans, Thalorn lui avait confié son premier jardin-mémoire à entretenir — un jardin existant, pas créé par elle. Elle avait passé 3 mois à comprendre ce qu\'il contenait. Les émotions enregistrées étaient de la génération de la Faim des Racines — peur, perte, quelque chose qui ressemblait à de la défiance. Elle les avait données à Thalorn. Il lui avait dit qu\'elle avait trouvé juste.',
    },
    premier_conflit: {
      titre: 'Les visiteurs non informés',
      contenu: 'Deux ans après avoir commencé à gérer ses propres jardins, elle avait réalisé qu\'un visiteur fréquent — un Conservateur de rang — laissait dans les plantes des émotions qu\'il n\'aurait probablement pas voulu partager. Elle n\'avait rien lu devant lui. Elle avait gardé l\'information. Elle cherchait encore à décider si elle devait la partager avec quelqu\'un.',
    },
    revelation: {
      titre: 'La plante qui avait tout enregistré',
      contenu: 'Un de ses jardins contenait une plante centenaire qui avait absorbé les émotions de plusieurs générations de Conservateurs. Leth était venu lui demander ce qu\'elle portait. La réponse était complexe : une histoire émotionnelle de la faction Conservatrice en 100 ans, enregistrée sans filtre. Elle en avait donné une version partielle à Leth — en choisissant ce qu\'elle partageait.',
    },
    etat_actuel: {
      titre: 'Le jardin et ses secrets',
      contenu: 'Elle entretient 7 jardins-mémoire de tailles différentes à Sylvera. Elle est la seule à pouvoir lire l\'ensemble de ce qu\'ils contiennent. Elle a commencé à rédiger une sorte de traduction des émotions les plus importantes — un document qu\'elle n\'a montré à personne mais qu\'elle considère comme une archive pour ceux qui viendraient après.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalvelyn_visiteur_rang',
      titre: 'Le secret non dit',
      description: 'Un Conservateur de rang élevé visite régulièrement ses jardins. Ses visites laissent des traces émotionnelles que Thalvelyn n\'a pas partagées — elles contredisent l\'image publique de l\'homme. Elle garde ce secret par une décision éthique : les jardins ne sont pas des instruments de surveillance. Mais elle sait.',
      personnages_impliques: [],
      declencheur: 'Capacité de lecture des jardins-mémoire',
      consequence: 'Connaissance privée d\'informations qui pourraient changer des équilibres au sein des Conservateurs',
    },
    {
      id: 'thalvelyn_archive_leth',
      titre: 'Ce qu\'elle a donné à Leth',
      description: 'Leth (34) lui a demandé ce que portait la plante centenaire. Elle a donné une version choisie — pas mensongère, filtrée. Leth le sait probablement. Il n\'a pas posé de question sur ce qu\'elle avait retenu. Ils ont une compréhension implicite : certains souvenirs enregistrés appartiennent aux gens qui les ont laissés, pas à ceux qui peuvent les lire.',
      personnages_impliques: [34],
      declencheur: 'Demande de Leth sur le contenu de la plante centenaire',
      consequence: 'Archive partielle transmise — accord implicite sur les limites de la lecture des jardins',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Mémoire émotionnelle de la faction Conservatrice. Ses jardins gardent ce que les archives ne peuvent pas écrire.',

  relations: [
    { id: 33, nom: 'Thalorn', type: 'mentor', note: 'L\'a formée. Lui a confié son premier jardin. Référence absolue sur la théorie des jardins-mémoire.' },
    { id: 34, nom: 'Leth', type: 'allié', note: 'Vient lire les jardins via elle. Comprend implicitement les limites de ce qu\'elle partage.' },
  ],

  combat: {
    sorts: [
      'Enracinement émotionnel (Plante) — libération des émotions stockées dans les plantes proches — désorientation non physique',
      'Brume de Fée (Fée) — nuage fée qui altère la perception de l\'environnement naturel',
      'Croissance rapide (Plante) — accélération de la pousse végétale — création de barrières ou chemins d\'urgence',
    ],
  },

  image_prompts: [
    {
      id: 'thalvelyn_jardin',
      description: 'Thalvelyn dans un de ses jardins-mémoire, agenouillée devant une plante ancienne, les mains légèrement posées sans toucher les feuilles. Autour d\'elle, le jardin est dense et vivant. Elle ne travaille pas — elle écoute.',
      style: 'réaliste sylvan, lumière filtrée de forêt, tons verts et dorés, silence et présence',
    },
  ],

  lore_long: `Ses jardins enregistrent les émotions des gens qui les visitent.

Thalvelyn est la seule à pouvoir les lire. Elle ne l'a pas dit à tous ses visiteurs.

Ce n'est pas une décision malveillante — c'est une décision éthique non résolue. Les jardins-mémoire ont été créés pour préserver ce que les arbres auraient porté avant la Faim des Racines. La Faim a pris les arbres. Les jardins gardent quelque chose d'imparfaitement similaire. Ce que ses visiteurs laissent en y venant est, en principe, involontaire.

La plante centenaire de son jardin principal a absorbé 100 ans d'émotions de Conservateurs. Leth est venu lui demander ce qu'elle portait. Elle lui a donné une version choisie — pas mensongère, filtrée. Les émotions enregistrées d'un Conservateur de rang contredisaient son image publique. Elle les a gardées.

Elle rédige une traduction des émotions les plus importantes — un document pour ceux qui viendraient après. Elle ne sait pas encore à qui elle le donnera, ni si elle le donnera.

7 jardins. Des siècles de mémoire émotionnelle. Elle en est la seule gardienne active.`,
};

export default thalvelyn;
