import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 451,
  nom: `Equilibre`,
  element: 'Gravite',
  classe: 'Enchanteur-Soutien',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Nereide aux traits fins, peau de la couleur des grandes profondeurs de Thalassyr. Ses mouvements semblent toujours calibres par une force invisible, jamais trop vifs ni trop lents. Porte des prismes de pression artisanaux qui lui permettent de redistribuer la force gravitationnelle entre ses allies.`,
  description_personnalite: `Pragmatique et sereine, convaincue que les Dissidentes ne peuvent gagner qu'en maintenant leur propre equilibre : trop de violence les corrompt comme l'Empire, trop de passivite les laisse ecraser. Distribue les charges gravitationnelles comme elle distribue les ressources : equitablement, selon le besoin.`,
  position_lore: `Nee dans les profondeurs de Thalassyr, dans les quartiers sous-marins de Neris ou la pression de l'eau calibre les corps differemment des habitants de surface. Le Silence des Vents lui a appris que la neutralite de Neris etait une fiction que l'Empire exploitait : les courants d'information de la confederation marchande alimentaient le Calendrier. Elle aide maintenant les Dissidentes a perturber ces flux en alterant la pression locale autour des relais d'information.`,
  style_combat: `Redistribue la charge gravitationnelle entre ses allies, allegiant ceux qui portent trop et chargeant de poids les adversaires qui avancent trop vite. Ses soins prennent la forme d'une reequilibration des forces physiques qui restaure l'endurance de ceux qui l'ont perdue.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
