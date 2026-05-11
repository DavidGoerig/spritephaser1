import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 323,
  nom: `Acrnikon`,
  element: 'Insecte',
  element2: 'Combat',
  classe: 'Plongeur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Chorégraphie homme-insecte — ses coups de poing sont complétés par des piqûres d'insectes. Il frappe, ses insectes concluent. La Tempête de Coups envoie simultanément ses insectes sur chaque cible.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Chaque attaque physique libère un insecte sur la cible (piqûre garantie). Tempête de Coups libère l'Essaim complet sur toutes les cibles frappées.`,
};

export default character;
