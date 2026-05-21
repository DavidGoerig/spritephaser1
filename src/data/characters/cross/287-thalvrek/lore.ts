import type { PersonnageLoreComplet } from '../../../lore-types';

const thalvrek: PersonnageLoreComplet = {
  id: 287,
  nom: 'Thalvrek',
  element: 'Poison',
  element2: 'Plante',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Trapu et large comme un Chthonien, mais ses mouvements ont une fluidité sylvane — le métissage qui se lit dans la façon de porter le corps.',
    peau: 'Gris-brun mêlé de reflets verts — les deux lignées visibles simultanément. Les teintes Poison Chthonien sont là, mais atténuées par les reflets végétaux.',
    yeux: 'Marron foncé avec des points verts — inhabituels pour un Chthonien, non remarquables pour un mixte.',
    vetements: 'Tablier d\'herboriste avec des dizaines de poches de tailles différentes. Il porte les herbes dans l\'ordre dans lequel il en aura besoin selon la journée.',
    signes_particuliers: 'Il cultive une barbe courte entrelacée de petites herbes séchées — ni un style, ni une curiosité, juste un endroit pratique pour ranger ce dont il a besoin rapidement.',
  },

  psychologie: {
    dominante: 'Pragmatisme biologique. Les maladies fongiques des zones de transition ont trop longtemps été traitées avec des approches soit sylvanes soit chthoniennes. Lui fait les deux simultanément.',
    mecanisme_de_defense: 'L\'utilité immédiate. Si quelqu\'un peut douter de sa loyauté (ni faction, ni espèce unique), son utilité est indiscutable.',
    contradiction_interne: 'Ses potions guérissent des maladies fongiques que personne d\'autre ne peut traiter. Les deux communautés en ont besoin. Les deux communautés le regardent comme un entre-deux — utile mais pas entièrement le leur.',
    rapport_aux_autres: 'Drevaya (39) — une Chthonienne travaillant sur la zone fongique — lui envoie des patients que les médecins de la Technocratie ne savent pas traiter. Kraethyn (122) lui envoie les cas sylvans qui ont eu une exposition fongique aux zones de transition.',
    vision_du_monde: 'Il y a une frontière entre Sylvera et Ormn-Dur où aucun des deux systèmes médicaux ne fonctionne entièrement. Il habite cette frontière. C\'est là qu\'il est utile.',
  },

  histoire: {
    enfance: {
      titre: 'La frontière comme foyer',
      contenu: 'Né d\'un père Chthonien et d\'une mère Sylvan dans un village de la zone de transition entre les deux régions. Les deux lignées avaient donné deux éléments qui ne se combinaient pas souvent — Poison Chthonien et Plante Sylvan. À 14 ans, il avait commencé à expérimenter des combinaisons botaniques qui utilisaient les deux.',
    },
    arrivee: {
      titre: 'La première guérison fongique',
      contenu: 'À 26 ans, il avait traité son premier cas de maladie fongique avancée — un mineur Chthonien exposé aux vapeurs de la zone proche de la Fosse. Les traitements standard de la Technocratie n\'avaient pas fonctionné. Il avait utilisé une combinaison de plantes sylvanes et d\'extraits que son élément Poison lui avait permis de calibrer pour neutraliser la toxicité fongique spécifique. Ça avait marché.',
    },
    premier_conflit: {
      titre: 'La méfiance croisée',
      contenu: 'Les Chthoniens lui font confiance pour les maladies fongiques et se méfient de son côté Sylvan. Les Sylvans lui font confiance pour les expositions fongiques des zones de transition et se méfient de son côté Chthonien. Il a appris à ne pas chercher à changer ces méfiances — juste à les travailler dans leurs interstices.',
    },
    revelation: {
      titre: 'Le traitement Drevaya',
      contenu: 'Drevaya lui avait envoyé un patient avec une exposition fongique à un type de champignon qu\'il n\'avait jamais rencontré — une espèce de la zone profonde de la Fosse. Il avait travaillé 4 jours sur le traitement. La solution impliquait des plantes sylvanes qui n\'avaient jamais eu de contact avec la zone fongique — leur "ignorance" des toxines était leur efficacité. Il avait documenté.',
    },
    etat_actuel: {
      titre: 'La pharmacopée de la frontière',
      contenu: 'Il a maintenant une pharmacopée de 47 traitements spécifiques aux maladies de la zone de transition. Elle n\'existe nulle part ailleurs — ni dans les archives de la Technocratie, ni dans les textes sylvans. Il l\'a rédigée dans un registre qu\'il garde chez lui. Le registre a besoin d\'un héritier qu\'il n\'a pas encore.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalvrek_pharmacopee',
      titre: 'Le registre unique',
      description: 'Sa pharmacopée de 47 traitements n\'existe nulle part ailleurs. Si quelque chose lui arrivait, ces connaissances disparaîtraient. Il le sait. Il cherche un apprenti qui vit dans la zone de transition, qui a accès aux deux types de matériaux, et qui comprend les deux logiques de soin. C\'est un profil rare.',
      personnages_impliques: [39, 122],
      declencheur: 'Accumulation de 20 ans de pratique unique',
      consequence: 'Connaissance à risque de disparition sans transmission',
    },
    {
      id: 'thalvrek_espece_profonde',
      titre: 'Le champignon inconnu',
      description: 'L\'espèce fongique profonde que Drevaya lui a envoyée — il l\'a documentée et traitée, mais il n\'a pas encore compris son origine. Elle vient de plus profond que les zones de la Fosse connues. Si elle se répand, il a un traitement. Si elle mute, il n\'en a pas encore.',
      personnages_impliques: [39],
      declencheur: 'Cas clinique d\'exposition fongique inhabituelle',
      consequence: 'Traitement documenté pour une espèce dont l\'origine et le potentiel d\'expansion restent inconnus',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Médecin de la frontière. Sa pharmacopée unique le rend indispensable aux deux communautés — et potentiellement important si la zone fongique s\'étend.',

  relations: [
    { id: 39, nom: 'Drevaya', type: 'allié', note: 'Envoie des cas Chthoniens non traitables par la Technocratie. Source de patients et d\'informations sur la zone fongique.' },
    { id: 122, nom: 'Kraethyn', type: 'allié', note: 'Envoie des cas Sylvans exposés aux zones de transition. Complémentarité médicale.' },
  ],

  combat: {
    sorts: [
      'Extraction toxinique (Poison) — neutralisation active d\'un poison ou toxine dans un organisme — usage médical mais adaptable',
      'Enveloppement végétal (Plante) — encerclement protecteur de végétaux qui absorbent les toxines environnantes',
      'Brume neutralisante (combiné) — nuage qui annule les effets élémentaires des vapeurs fongiques dans une zone',
    ],
  },

  image_prompts: [
    {
      id: 'thalvrek_registre',
      description: 'Thalvrek dans son atelier de la zone de transition, son registre ouvert devant lui, en train d\'annoter un traitement nouveau. Des herbes sèchent autour de lui — sylvanes et chthoniennes mélangées. Il est concentré. Il n\'est ni tout à fait ici ni tout à fait là-bas.',
      style: 'réaliste de frontière, lumière chaude d\'atelier, mélange de matériaux des deux biomes, expertise tranquille',
    },
  ],

  lore_long: `Thalvrek habite la frontière entre Sylvera et Ormn-Dur parce que c'est là que son travail est possible.

Les maladies fongiques des zones de transition ne peuvent pas être traitées avec une approche purement sylvane ni purement chthonienne. Il fait les deux simultanément. Ce n'est pas une spécialisation — c'est une capacité que sa double lignée lui a donnée et qu'il a passé 20 ans à développer en une pharmacopée.

47 traitements. Nulle part ailleurs. Ni dans les archives de la Technocratie, ni dans les textes sylvans.

Drevaya lui envoie les cas que la Technocratie ne sait pas traiter. Kraethyn lui envoie les Sylvans exposés. Le champignon inconnu que Drevaya lui a transmis il y a 3 mois venait de plus profond que les zones connues de la Fosse. Il a documenté et traité. Il ne sait pas si ce champignon peut muter ou se répandre.

Son registre a besoin d'un héritier. Le profil requis est rare : quelqu'un qui vit dans la zone de transition, qui a accès aux deux types de matériaux, qui comprend les deux logiques de soin. Il cherche.`,
};

export default thalvrek;
