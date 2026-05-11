import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 486,
  nom: `Disciplinaire`,
  element: 'Combat',
  classe: 'Battlemage',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',
  description_physique: `Homme-Lien a la posture d'un officier forme dans les ecoles militaires de Virex que l'Empire a converties en academies d'application du Voile. Cicatrices de formation propres et symetriques, temoignant d'un entrainement methodique plutot que de combats improvises. Porte l'uniforme imperial avec une precision qui est elle-meme un message.`,
  description_personnalite: `Disciplinaire dans le sens literal : il croit que la discipline est la seule reponse au chaos de la Saturation des Elus. Virex sans le Calendrier serait uninhabitablle. Les anomalies elementaires de la ville le confirment chaque jour. L'Empire maintient ce qui rend Virex vivable.`,
  position_lore: `Forme dans les academies militaires de Virex que l'Empire a etablies apres la Saturation des Elus, specifiquement pour gerer les crises elementaires locales. Son element Combat lui permet d'adapter sa technique de combat a l'element adverse en temps reel : il a appris a combattre dans toutes les zones d'anomalie de Virex, ou les regles changent selon l'endroit ou on se trouve. Applique la loi feerique avec une efficacite adaptative rare.`,
  style_combat: `Combat avec une technique qui s'adapte automatiquement a l'element et aux conditions du terrain. Dans les zones d'anomalie de Virex, sa flexibilite tactique le rend redoutable la ou les combattants specialises perdent leurs reperes.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
