import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 481,
  nom: `Pacificatrice`,
  element: 'Combat',
  classe: 'Enchanteur-Soutien',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Femme de stature moyenne, musculature definie par des annees de discipline physique, peau marquee de cicatrices de formation dans plusieurs arts martiaux de Virex. Ses mains sont ses armes et ses soins : calleuses, precisses, capables autant de stabiliser une fracture que de mettre fin a un assaut.`,
  description_personnalite: `Pragmatique et humaine, croit que le combat peut etre un outil de paix si on sait l'utiliser avec mesure. Refuse l'ideologie du sacrifice de la Convergence et les mensonges du Voile d'Equite avec la meme serenite. Les Dissidentes lui semblent les seuls a traiter le combat comme ce qu'il est : un cout, pas une gloire.`,
  position_lore: `Nee a Virex dans les zones d'anomalie elementaire de la Saturation des Elus, ou le temps ralentit par endroits et ou des plantes poussent sans sol. Sa signature Combat s'est manifestee non pas comme un element mais comme une capacite de resonance avec toutes les forces physiques en presence. Soigne les combattants des Dissidentes apres les operations en utilisant des techniques developpees dans les ecoles martiales de Virex qui integrent la Saturation comme contexte d'entrainement.`,
  style_combat: `Restaure les capacites physiques de ses allies en canalisant l'energie Combat de facon redistributive. Ses soins sont des ajustements de posture, de tension musculaire, de rythme respiratoire qui permettent a un combattant epuise de retrouver immediatement sa pleine efficacite.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
