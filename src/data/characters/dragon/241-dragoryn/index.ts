import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 241,
  nom: `Dragoryn`,
  element: 'dragon',
  classe: 'Enchanteur-Soutien',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Pyrien dont la lignée porte une mutation draconique ancienne — des écailles dures couvrent ses épaules, son dos et l'arrière de ses bras, en plaques bordeaux sombre qui captent la chaleur ambiante et la redistribuent comme armure thermique. Ses yeux sont verticaux, pupilles de reptile en ambre doré. Il porte des robes avec des encoches sur les épaules pour exposer les plaques dont la chaleur soigne les alliés proches. Il a trouvé des empreintes de ses écailles dans des parois de la Forge Silencieuse — des formations de pierre-dragon d'avant l'Empire.`,
    personnalite: `Gardien de mémoire autant que combattant. Porte les codes ancestraux des premiers Élus Dragon de Varkhôl — ceux que le Calendrier des Fées n'a jamais pu dater parce qu'ils préexistaient à la méthode. Sa colère contre l'Empire est froide et documentée : ils ont remplacé les sites draconiques par des infrastructures de surveillance.`,
    lore: `Dissident depuis la découverte que la Citadelle du Voile possède des dossiers sur chaque site draconique de Varkhôl, classés comme 'anomalies pré-calendrier à neutraliser' — des zones de naissance potentielle d'Élus Dragon que les Fées veulent éliminer ou contrôler avant qu'elles ne produisent des Élus imprévisibles. Dragoryn opère dans ces sites, les cartographie, les protège. Il est en contact régulier avec Khossaëre (Capteur, Empire) qui tente de cataloguer ces mêmes sites pour les Fées.`,
    combat: `Résonnance des Écailles (soutien de zone : les alliés dans le rayon résistent mieux aux dégâts élémentaires), Écailles Partagées (transfert de protection draconique à un allié ciblé), Rugissement de Soutien (amplifie la résistance de toute la brigade), Vol Draconique (repositionnement aérien pour coordination). Passif Mémoire des Écailles : les alliés sur des cases Dragon réduisent les dégâts reçus.`,
  },
  stats: ELEMENT_KITS['dragon']['Enchanteur-Soutien'],
  modificateurs: [],
};

export default character;
