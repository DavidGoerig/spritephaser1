import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 9,
  nom: `Ashvrak`,
  element: 'feu',
  classe: 'Assassin',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Peau d'obsidienne fissurée presque noire, avec seulement la lueur du feu supprimé visible à travers des microfissures le long de la colonne vertébrale. Il manque l'extrémité de l'index gauche depuis une opération sur la Forge Silencieuse. Se déplace sans bruit malgré une carrure solide.`,
    personnalite: `Émotionnellement contrôlé à un degré qui déconcerte ceux qui l'approchent. N'a pas d'idéologie formelle — combat pour les Dissidentes parce que leurs cibles coïncident avec ses objectifs personnels. N'a jamais prétendu croire à la Naissance du Besoin. Il croit à la liste.`,
    lore: `L'Empire a décidé que son village au bord de la Forge Silencieuse occupait un emplacement stratégique pour une infrastructure de surveillance du Calendrier. Le commandant régional a ordonné l'évacuation forcée — ce qui, dans ce district, signifiait un déplacement violent. Ashvrak était à Khar-Vurn ce jour-là. Il a passé cinq ans à perfectionner les techniques impériales d'élimination, puis est revenu régler les comptes. Les Dissidentes l'ont trouvé après.`,
    combat: `Voile de Cendres (dissimulation fumigène), Frappe de l'Obsidienne (dégâts garantis depuis la furtivité adjacente), Brasier Intérieur (brulüure qui monte en puissance avec les PV restants de la cible). Passif Éclat Noir : les attaques depuis la furtivité ignorent les boucliers élémentaires.`,
  },
  stats: ELEMENT_KITS['feu']['Assassin'],
  modificateurs: [],
};

export default character;
