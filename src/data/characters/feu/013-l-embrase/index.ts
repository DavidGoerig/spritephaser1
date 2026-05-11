import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 13,
  nom: `L'Embrase`,
  element: 'feu',
  classe: 'Specialiste',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Independant',
  description: {
    physique: `Impossible à décrire avec précision. Sa forme fluctue avec l'intensité de la chaleur environnante. Au repos : Pyrien de taille moyenne, peau rouge-braise, yeux de flamme constante. En combat : le contour se floute et s'étend. Les Fées l'ont classé une douzaine de fois dans leur Calendrier sous des noms différents. Chaque fois, son comportement a contredit la prédiction.`,
    personnalite: `Parle en énigmes qui s'avèrent systématiquement exactes. Trouve les trois factions également limi tées dans leur ambition. Chaleur profonde et genuine pour tout être essayant de survivre contre toute attente. Irréductible à toute classification.`,
    lore: `La Citadelle du Voile possède trois dossiers sur lui, chacun concluant que la capture est impossible pour des raisons différentes. La Convergence a envoyé des ritualistes pour le drainer. Ils sont revenus calcinés mais en vie — il avait pris soin de ne pas les tuer, juste de rendre la tentative instructive. Les Dissidentes le consultent parfois. Il répond rarement directement mais ses réponses se révèlent utiles des semaines plus tard.`,
    combat: `Singularité Thermique (redirige tous les dégâts de feu du champ vers des cibles choisies), Naissance de Lave (soulève du terrain volcanique temporaire modifiant le champ), L'Éveil (une fois par partie : événement de feu global forçant chaque unité à battre en retraite ou bruler).`,
  },
  stats: ELEMENT_KITS['feu']['Specialiste'],
  modificateurs: [],
};

export default character;
