import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 324,
  nom: `Enthia`,
  element: 'Insecte',
  element2: 'Normal',
  classe: 'Mage-Burst',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Entomologiste pragmatique. Utilise ses insectes avec la précision d'un scientifique. Chaque insecte a un rôle. Aucun gaspillage de colonie. Redoutable par la maîtrise, pas par la puissance.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Ses insectes peuvent être rappelés et recyclés (0 coût de reproduction). Son Essaim ne diminue jamais — chaque insecte tué est remplacé instantanément.`,
};

export default character;
