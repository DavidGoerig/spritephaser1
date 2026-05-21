import type { PersonnageLoreComplet } from '../../../lore-types';

const iskravel: PersonnageLoreComplet = {
  id: 346,
  nom: 'Iskravel',
  element: 'Spectre',
  element2: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Grande pour un Givrin avec des mouvements qui jouent sur la frontière entre présence physique et projection spectrale — difficile de dire exactement où il est dans un espace.',
    peau: 'Blanc-gris avec une translucidité forte aux bras et au cou — l\'élément Spectre primaire qui affecte profondément sa présence physique. Dans certaines conditions, ses contours sont flous.',
    yeux: 'Gris très clair, presque incolores. Dans les zones de forte densité spectrale — le Champ Gelé, certaines zones anciennes — ils deviennent légèrement lumineux.',
    vetements: 'Tenue minimale adaptée au froid — le moins de matériau possible pour faciliter les transitions entre présence physique et spectrale. Il a accepté les engelures occasionnelles comme coût opérationnel.',
    signes_particuliers: 'Il peut envoyer une projection spectrale dans une zone glacée et parler depuis cette projection — sa voix arrive d\'où sa projection est, pas de là où son corps physique se trouve. Cette capacité est à la base de sa méthode de communication.',
  },

  psychologie: {
    dominante: 'Transmission de messages via projections spectrales dans les zones glacées. Les projections spectrales peuvent traverser la glace de Crysalme — une propriété que les méthodes de communication normales n\'ont pas. Il peut transmettre depuis un point et recevoir à un autre sans déplacement physique.',
    mecanisme_de_defense: 'La séparation entre le message et le messager. Il transmet ce qu\'on lui donne à transmettre. Il n\'est pas responsable du contenu. Cette séparation est fonctionnelle — elle lui permet de fonctionner. Elle n\'est pas entièrement satisfaisante.',
    contradiction_interne: 'Il utilise le Champ Gelé comme relais de transmission — les zones spectrales denses amplif ient ses projections. Thyvalskra (347) est le gardien du Champ. Thyvalskra sait qu\'il entre dans le Champ régulièrement. Thyvalskra est de la Monarchie. Cette situation est instable et Iskravel ne sait pas exactement comment.',
    rapport_aux_autres: 'Velsa (58) lui a appris à naviguer les zones spectrales glacées — une combinaison rare que peu de personnes maîtrisent. Thyrkra (168) est son contact Dissident principal — il reçoit les transmissions et les distribue dans le réseau.',
    vision_du_monde: 'L\'information qui ne peut pas circuler physiquement peut circuler spectralement. La glace de Crysalme bloque les corps — elle ne bloque pas les projections. C\'est une lacune dans le dispositif de contrôle impérial.',
  },

  histoire: {
    enfance: {
      titre: 'La traversée de la glace',
      contenu: 'À 17 ans, il avait découvert que ses projections spectrales pouvaient traverser des murs de glace — une propriété qu\'il n\'avait pas anticipée. Il avait testé les limites de cette capacité pendant un an avant de comprendre ses implications pratiques.',
    },
    arrivee: {
      titre: 'Le réseau Dissident',
      contenu: 'À 24 ans, Thyrkra (168) l\'avait contacté via un intermédiaire. Le réseau Dissident de Crysalme avait un problème de communication entre zones séparées par la glace. Sa capacité était la solution. L\'accord était simple — il transmettait, ils payaient en ressources.',
    },
    premier_conflit: {
      titre: 'L\'utilisation du Champ',
      contenu: 'À 29 ans, il avait compris que les zones spectrales denses du Champ Gelé amplifiaient ses projections — il pouvait atteindre des distances plus longues depuis le Champ qu\'ailleurs. Il avait commencé à utiliser le Champ comme relais. Thyvalskra (347) l\'avait vu entrer. Il n\'avait pas demandé qu\'il arrête. Il n\'avait pas donné d\'autorisation non plus.',
    },
    revelation: {
      titre: 'Les leçons de Velsa',
      contenu: 'Velsa (58) lui avait appris que les zones spectrales anciennes comme le Champ avaient des propriétés de mémoire — elles enregistraient les présences qui y passaient. Ses transmissions depuis le Champ laissaient des traces spectrales que quelqu\'un avec les capacités appropriées pourrait détecter et retracer. Il avait ajusté sa méthode pour minimiser les traces.',
    },
    etat_actuel: {
      titre: 'Le volume actuel',
      contenu: 'Il transmet 8 à 12 messages par semaine via les zones glacées de Crysalme. 3 à 4 de ces messages utilisent le Champ comme relais. Thyvalskra (347) entre parfois dans le Champ pendant ses sessions de transmission. Ils ne se sont jamais croisés directement. Cette situation ne peut pas durer indéfiniment.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskravel_champ_instable',
      titre: 'La situation avec Thyvalskra',
      description: 'Thyvalskra (347) est le gardien du Champ Gelé. Il sait qu\'Iskravel y entre. Il n\'a pas demandé qu\'il arrête. Il entre lui-même dans le Champ. Ils ne se sont jamais croisés. Si ils se croisent, la situation de tolérance silencieuse devra être résolue — soit Thyvalskra demande qu\'il arrête, soit il ne demande pas. Les deux options ont des implications.',
      personnages_impliques: [347, 168],
      declencheur: 'Présences simultanées dans le Champ sans contact direct',
      consequence: 'Situation instable — résolution par confrontation directe inévitable',
    },
    {
      id: 'iskravel_traces_spectrales',
      titre: 'Les traces dans le Champ',
      description: 'Velsa (58) a signalé que ses transmissions depuis le Champ laissent des traces spectrales. Il a ajusté sa méthode pour les minimiser — mais pas les éliminer entièrement. Quelqu\'un avec des capacités spectrales avancées dans le Champ pourrait détecter et retracer ses opérations. Velthkra (345) entre régulièrement dans le Champ. Il ne sait pas ce qu\'elle pourrait percevoir.',
      personnages_impliques: [58, 345],
      declencheur: 'Information de Velsa sur la mémoire spectrale du Champ',
      consequence: 'Traces réduites mais non éliminées — risque de détection par perceptions spectrales dans le Champ',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Espion Dissident transmettant des messages via projections spectrales dans les zones glacées de Crysalme. Utilise le Champ Gelé comme relais. Situation instable avec Thyvalskra (347), gardien du Champ.',

  relations: [
    { id: 58, nom: 'Velsa', type: 'mentor', note: 'A appris à naviguer les zones spectrales glacées. A signalé les traces spectrales laissées dans le Champ.' },
    { id: 168, nom: 'Thyrkra', type: 'allié', note: 'Contact Dissident principal. Reçoit et distribue les transmissions dans le réseau.' },
  ],

  combat: {
    sorts: [
      'Transmission spectrale (Spectre) — envoi d\'une projection à travers la glace — communication ou surveillance à distance',
      'Présence fantôme (Spectre) — projection d\'une présence spectrale dans un espace sans être physiquement présent — leurre ou reconnaissance',
      'Gel de projection (Glace + Spectre) — ancrage d\'une projection spectrale dans la glace — signal persistant ou piège',
    ],
  },

  image_prompts: [
    {
      id: 'iskravel_transmission',
      description: 'Iskravel dans le Champ Gelé de Crysalme, en position de transmission — sa silhouette est partiellement translucide, une projection spectrale partant de lui et traversant un mur de glace ancient. Son corps physique est immobile. Sa projection est active. La scène montre les deux états simultanément.',
      style: 'réaliste transmission spectrale, Champ Gelé, corps physique et projection, glace ancienne',
    },
  ],

  lore_long: `Iskravel transmet des messages en envoyant des projections spectrales à travers la glace de Crysalme — une propriété que les méthodes de communication standard n'ont pas.

Il utilise le Champ Gelé comme relais d'amplification. Thyvalskra (347), gardien du Champ, sait qu'il y entre. Il ne lui a pas demandé d'arrêter. Cette tolérance silencieuse est instable.

Velsa (58) lui a signalé que ses transmissions laissent des traces spectrales dans le Champ. Il a réduit les traces. Velthkra (345) entre aussi dans le Champ. Il ne sait pas ce qu'elle pourrait percevoir.

8 à 12 messages par semaine. 3 à 4 via le Champ.`,
};

export default iskravel;
