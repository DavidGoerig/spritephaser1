import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 422,
  nom: `Phantomeon`,
  element: 'Spectre',
  classe: 'Enchanteur-Capteur',
  espece: 'Aeride',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Corps qui projette sa propre ombre de facon incorrecte, decalee de quelques degres par rapport a la source lumineuse reelle. Ses yeux captent des frequences au-dela du visible. Porte l'uniforme des lecteurs de destin d'Heliora, caste sacerdotale nee apres la Chute des Nuages.`,
  description_personnalite: `Mystique rationnel qui croit que les signatures elementaires des Elus morts constituent une carte du destin accessible uniquement aux agents de l'Empire. Interprete les spectres elementaires comme des confirmations de l'ordre feerique. Sa devotion a la Citadelle est sincere et philosophiquement elaboree.`,
  position_lore: `Forme dans la caste sacerdotale des lecteurs de destin d'Heliora apres la Chute des Nuages, quand l'aristocratie verticale a integre la lecture spectrale comme outil de gouvernance. Son don lui permet de lire les dernieres empreintes elementaires des Elus avant leur mort ou leur capture. Utilise ces lectures pour traquer les lignees cachees que le Calendrier des Fees n'a pas encore enregistrees.`,
  style_combat: `Localise les Elus vivants par resonance avec les signatures elementaires de leurs ancetres morts. Sa detection traverse les ecrans standards et les masquages elementaires, rendant les refuges des Dissidentes vulnerables a son analyse.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
