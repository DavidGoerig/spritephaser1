import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 226,
  nom: `Mraknéine`,
  element: 'Eau',
  element2: 'Ténèbres',
  classe: 'Vanguard',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Eau noire et profonde — ses zones aquatiques sont enveloppées d'obscurité. Personne ne peut voir sous la surface de ses Inondations. Il combat depuis les profondeurs obscures.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Les zones Eau qu'il contrôle sont considérées comme zones Ténèbres pour ses sorts. Voile d'Ombre peut être déployé sous la surface de ses canaux.`,
};

export default character;
