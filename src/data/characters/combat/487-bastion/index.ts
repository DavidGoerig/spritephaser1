import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 487,
  nom: `Bastion`,
  element: 'Combat',
  classe: 'Artillerie',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Homme-Lien dont le corps est une architecture de resistance : large, stable, chaque position qu'il prend semble impossible a deloger. Ses bras fonctionnent comme des catapultes naturelles, propulsant des charges de puissance combat avec une force et une precision acquises dans les zones les plus denses des anomalies de Virex.`,
  description_personnalite: `Defenseur avant tout, mais compris que la meilleure defense est parfois de detruire les infrastructures qui permettent a l'Empire de controler les flux de Virex. Tire avec methode, en ciblant les noeuds d'information plutot que les individus. Des gens dirigent des systemes. Detruire les systemes sauve plus de gens que d'en eliminer quelques-uns.`,
  position_lore: `Ancien ingenieur des infrastructures de Virex, specialise dans les zones d'anomalie elementaire de la Saturation des Elus. Son don Combat lui a permis de comprendre les points de faiblesse structurelle de n'importe quel systeme physique : il voit les fractures avant qu'elles n'existent. Utilise cette connaissance pour cibler precisement les relais d'information du Calendrier dans Virex, la ville ou l'Empire a sa plus grande presence administrative.`,
  style_combat: `Propulse des charges de puissance combat sur des cibles structurelles a distance, chaque impact calcule pour creer une reaction en chaine dans le systeme cible. Ses bombardements semblent aleatoires mais suivent une logique d'ingenierie inverse que les adversaires dechiffrent trop tard.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
