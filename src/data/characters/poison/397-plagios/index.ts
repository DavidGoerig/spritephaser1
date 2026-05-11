import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 397,
  nom: `Plagios`,
  element: 'Poison',
  classe: 'Artillerie',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Long et effile, les cheveux tresses dans des lianes seches de Sylvera, hommage aux arbres memoriaux devores lors de la Faim des Racines. Ses fleches sont taillees dans des bois naturellement toxiques de la foret de Leth'Var, leur poison renforce par l'energie elementaire qu'il y insuffle.`,
  description_personnalite: `Idealiste radical qui croit que la foret de Sylvera devait etre liberee du controle imperial, et que ses toxines naturelles sont un argument que les Fees ne savent pas contrer. Les plantes empoisonnent pour se defendre. C'est ce qu'il fait.`,
  position_lore: `Ne a Leth'Var dans une lignee de Conservateurs de la Seve qui ont documente les arbres memoriaux perdus lors de la Faim des Racines. Convaincu que les Fees ont deliberement laisse se produire la catastrophe pour effacer les archives forestieres qui documentaient leurs origines. Utilise des toxines vegetales extraites des zones les plus anciennes de Sylvera pour cibler les relais du Calendrier imperial.`,
  style_combat: `Tire des projectiles de seve toxique a longue portee, chaque impact contaminant la zone et reduisant la visibilite de l'adversaire. Ses fleches empoisonnees laissent des marques durables sur les infrastructures ennemies, les rendant inutilisables.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
