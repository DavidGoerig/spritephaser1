import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 335,
  nom: `Sepia`,
  element: 'Tenebres',
  classe: 'Mage-Burst',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Independent',
  description_physique: `Jeune femme a la peau couleur d'encre de seiche, yeux d'un brun dore presque lumineux, heredite rare liee a l'exposition prolongee de ses aieux a l'obscurite post-Vol de la Lumiere. Ses mains sont tatouees de circuits d'ombre en encre photosensible : visibles seulement dans le noir complet.`,
  description_personnalite: `Impulsive et brillante, peu interessee par les consequences a long terme. A ete reclamee par l'Empire, la Convergence et les Dissidentes. A refuse les trois fois, par principe autant que par instinct de survie. Tire. Ce qui se passe apres, c'est de la physique, pas de la politique.`,
  position_lore: `Nee d'une explosion de naissance exceptionnelle dans les sous-sols de Vel'Nox : sa signature elementaire a grille deux capteurs imperiaux a distance le jour de son eveil. Les Fees ont mis son nom sur la liste noire du Calendrier sous la mention 'anomalie de puissance, capture prioritaire'. Vit depuis dans l'illegalite totale, utilisant les archives des guildes d'ombre pour eviter les patrouilles.`,
  style_combat: `Libere des salves d'obscurite compressee avec une puissance brute qui depasse la norme de sa categorie. Ses explosions d'ombre ont une zone d'effet large et partiellement aleatoire : dangereuse pour ses allies si mal dirigee, devastatrice si canalisee.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
