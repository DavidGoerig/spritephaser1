import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 2,
  nom: `Cendrix`,
  element: 'feu',
  classe: 'Enchanteur-Capteur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',
  description: {
    physique: `Grande et élancée, peau gris-acier profond de forge, pupilles remplacées par des noyaux de flamme vacillants — modification réalisée lors de son initiation comme Capteur impériale pour lire les signatures élémentaires à distance. Ses mains portent des gants de liaison-silk qui enregistrent chaque Élu touché dans les registres de la Citadelle du Voile. Son collier marqué ne quitte jamais son cou.`,
    personnalite: `Croit au Voile d'Équité par conviction analytique, pas par naïveté — elle a vu des régions prospérer sous la redistribution féerique et d'autres s'effondrer en son absence. Utilise le charme comme outil professionnel. Copie les techniques des Élus qu'elle capture dans des journaux chiffrés qu'elle nierait posséder.`,
    lore: `Formée à l'Académie d'Intelligence de la Citadelle du Voile après avoir identifié, à quinze ans, une naissance d'Élu non enregistrée dans le Troisième District de Forge de Khar-Vurn — une enfant née lors d'une conjonction solaire que le Calendrier avait détectée des années à l'avance. Elle dirige maintenant une unité qui lit les anomalies thermiques pour anticiper les naissances avant que les Dissidentes ne puissent intervenir.`,
    combat: `Tison Traceur (marque un ennemi, révèle sa position + dégâts continus), Réseau de Cendres (grille de surveillance révélant les unités cachées), Extraction Pycho-Thermique (capture la signature élémentaire d'une cible, la debuffant). Passif Instinct du Traqueur : vision à travers les murs sur les cibles marquées pendant 2 tours.`,
  },
  stats: ELEMENT_KITS['feu']['Enchanteur-Capteur'],
  modificateurs: [],
};

export default character;
