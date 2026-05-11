import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 427,
  nom: `Banshira`,
  element: 'Spectre',
  classe: 'Artillerie',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Silhouette longiligne dont la voix peut porter des resonances spectrales capables de traverser les murs. Ses cheveux flottent independamment de tout courant d'air, animes par les signatures elementaires qui la traversent. Porte des amplificateurs de resonance artisanaux fabriques dans les laboratoires des guildes noires de Vel'Nox.`,
  description_personnalite: `Convaincue que les signatures elementaires des Elus morts ont le droit d'etre entendues, pas seulement exploitees. Canalise leur memoire comme projectiles ciblant precisement les infrastructures du Calendrier. Toute archive brulee par l'Empire est une voix qu'elle restitue.`,
  position_lore: `Nee a Vel'Nox dans une famille qui tenait les archives des morts pour les guildes clandestines. La destruction de ces archives par le Bureau d'Application lors d'une operation imperiale l'a poussee vers les Dissidentes. Son don lui permet de lancer des cris spectraux qui portent les dernieres empreintes elementaires des Elus morts comme obus acoustiques, desintegrant les surfaces de stockage d'information ennemies.`,
  style_combat: `Tire des salves de resonance spectrale a longue portee depuis les zones riches en residus. Ses cris paralysent temporairement les Capteurs en surchargeant leurs instruments de detection avec les signatures des morts.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
