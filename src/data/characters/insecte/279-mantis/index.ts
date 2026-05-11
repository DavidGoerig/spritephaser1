import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 279,
  nom: `Mantis`,
  element: 'Nuee',
  classe: 'Assassin',
  espece: 'Chthonienne',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthonienne dont la symbiose avec la Fosse Interdite l'a orientee vers la morphologie d'une mante religieuse — avant-bras articules en faucilles naturelles. Sa tete pivote a cent quatre-vingts degres. Immobile pendant des minutes avant de frapper, impossible a distinguer du decor de galerie.`,
  description_personnalite: `Considere la precision de l'elimination d'une menace comme de l'artisanat. Les Dissidentes ont appris a ne pas la questionner sur ses methodes et a apprecier ses resultats.`,
  position_lore: `Mantis est la plus efficace des Dissidentes d'Ormn-Dur dans l'elimination des agents de la Citadelle qui cherchent a mesurer et cataloguer les Elus Nuee. La Fosse Interdite lui a fourni une morphologie que le Calendrier classe comme 'anomalie multitype' — ses faucilles biologiques ne correspondent a aucun profil d'Elu standard. Les archives imperiales la documentent sous le nom de 'probleme Mantis' : ils n'ont pas trouve de contre-mesure fiable a son immobilite pre-frappe.`,
  style_combat: `Immobilite totale dans une position strategique. Invisibilite par immoilite. Frappe instantanee. Acide injecte dans les blessures. Retraite immediate.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Invisible tant que stationnaire sur une Case Nuee. Premiere attaque depuis l'immobilite inflige 250% degats.`,
};

export default character;
