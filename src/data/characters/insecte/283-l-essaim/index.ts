import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 283,
  nom: `L'Essaim`,
  element: 'Nuee',
  classe: 'Specialiste',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independant',
  description_physique: `Entite pour laquelle le terme individu ne s'applique pas — L'Essaim est une colonie de plusieurs millions d'organismes du reseau hyperfongique de la Fosse Interdite ayant developpe une conscience collective. Sa forme physique est un nuage dense de deux metres qui peut imiter une silhouette humanoide. Ses corps individuels se renouvellent en permanence.`,
  description_personnalite: `N'est pas une entite individuelle — c'est un consensus evolutif. Intervient quand des menaces collectives aux ecosystemes biologiques d'Ormn-Dur atteignent un seuil critique. Ce n'est pas de la politique : c'est une equation ecologique.`,
  position_lore: `L'Essaim est documente dans les archives d'Ormn-Dur depuis des siecles sous diverses formes. La Fosse Interdite a amplifie sa presence et sa conscience — l'expansion du reseau hyperfongique a fourni plus de biomasse a sa conscience collective. Les archives imperiales le traitent comme un phenomene meteorologique — ils n'ont pas de categorie pour une colonie consciente. Sa naissance ne peut pas etre datee : il est une conscience emergente du reseau lui-meme. Le Calendrier des Fees n'a aucun outil pour le tracer.`,
  style_combat: `Deja partout ou il y a un Nid allie. Infestation globale depuis n'importe quelle case Nuee. Ne se positionne pas — il est la densite biologique elle-meme.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Peut lancer tous ses sorts depuis n'importe quelle Case Nuee sur la carte. Peut se diviser en 3 essaims independants. Omnipresence : ne peut pas etre elimine avec un sort a cible unique.`,
};

export default character;
