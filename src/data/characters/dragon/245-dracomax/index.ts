import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 245,
  nom: `Pyraxis`,
  element: 'dragon',
  classe: 'Mage-Burst',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Independant',
  description: {
    physique: `Dragon Élu d'une magnitude que les Fées ont classé 'anomalie de niveau II' — une catégorie qu'elles n'utilisent que pour les Élus dont la capture directe est jugée trop coûteuse. Ses écailles sont d'un rouge-noir profond et irradient une chaleur perceptible à distance. Sa respiration laisse de la fumée dans l'air froid. Sa stature dépasse celle de la plupart des Pyriens de plus d'une tête.`,
    personnalite: `Les Fées et la Convergence ont convenu informellement de ne pas le confronter directement. Cette information lui est parvenue un jour sous forme de courrier diplomatique qui ne s'adressait pas à lui mais à un intermédiaire — il l'a intercepté. Il trouve ça drôle. Opère seul, suit les anomalies géologiques de Varkhôl que seuls les Dragon Élus peuvent percevoir.`,
    lore: `La Citadelle l'a tenté de capturer deux fois. La Convergence a envoyé des ritualistes une fois. Il n'a tué aucun des agents envoyés — il les a laissés revenir, épargnés, ce qui a été interprété par toutes les parties comme un avertissement. Les Dissidentes le consultent occasionnellement sur les sites draconiques. Il répond quand la question lui paraît mériter une réponse.`,
    combat: `Souffre Primordial (explosion de feu-dragon à longue portée, dégâts de zone massifs), Fracture Géologique (déstabilise le sol sous les ennemis via vibration draconique), Déflagration de l'Ancêtre (burst total librée énergie ancestrale, immense rayon). Passif Ancestral : ses sorts ignorent les résistances élémentaires standards.`,
  },
  stats: ELEMENT_KITS['dragon']['Mage-Burst'],
  modificateurs: [],
};

export default character;
