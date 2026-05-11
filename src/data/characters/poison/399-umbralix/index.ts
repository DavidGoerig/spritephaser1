import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 399,
  nom: `Umbralix`,
  element: 'Poison',
  classe: 'Assassin',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Silhouette fine, peau d'un brun-noir profond qui se fond dans les ombres de Vel'Nox. Ses lames sont enduites d'un venin extrait des laboratoires clandestins de la ville, une formulation qui laisse une signature chimique indectable par les analyseurs imperiaux standard.`,
  description_personnalite: `Chirurgical. N'elimine pas par vengeance mais par necessite tactique. Ne hait pas les agents du Voile : il les retire de l'equation. Maintient une distance emotionnelle totale avec ses cibles, ce qui lui permet de fonctionner sous couverture pendant des mois avant de frapper.`,
  position_lore: `Forme dans les guildes d'ombre de Vel'Nox qui vendent des informations aux deux camps. A retourne sa formation au profit des Dissidentes apres avoir decouvert que les guildes transmettaient egalement les positions de ses propres contacts a l'Empire. Specialiste des operations longue duree : il s'infiltre dans les structures imperiales de Noctea, attend, apprend, puis frappe les noeuds les plus critiques du reseau.`,
  style_combat: `Attaque avec des lames empoisonnees dont le venin s'active a retardement, permettant a la cible de s'eloigner avant que l'effet soit perceptible. Difficile a relier a l'attaque apres le fait, caracteristique precieuse dans les guildes d'ombre de Vel'Nox.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
