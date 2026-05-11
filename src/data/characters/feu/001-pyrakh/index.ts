import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 1,
  nom: `Brasia`,
  element: 'feu',
  classe: 'Enchanteur-Soutien',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Pyrienne petite pour son espèce, avec une peau couleur basalte refroidi et des veines qui pulsent orange quand elle canalise la chaleur. Ses cheveux sont gris-fumée en permanence, tressés avec des perles de pierre cendrée venues des sanctuaires cachés des Dissidentes. Elle porte en pendentif un fragment calciné de la Forge Silencieuse — mémorial personnel de la catastrophe que l'Empire refuse d'avoir causée. Ses yeux oscillent entre l'ambre et le blanc quasi-pur lorsque sa puissance atteint son pic.`,
    personnalite: `Patiente, méthodique, protectrice sans sentimentalisme. Sa générosité est clinique : elle maintient ses alliés en vie parce que les perdre serait un gaspillage tactique. Porte une culpabilité profonde depuis la Purge des Ordres Soigneurs ordonnée par l'Empire pour concentrer tous les soins sous contrôle du Voile d'Équité.`,
    lore: `Ancienne médecin licenciée des Temples-Forges de Khar-Vurn, Brasia travaillait dans le district ouvrier du Parti du Feu avant la Rupture Thermique. Quand l'Empire a ordonné de refuser les soins aux Élus non enregistrés captureés par les Capteurs impériaux, elle a refusé. Elle a fait sortir treize Élus blessés par des évents thermiques souterrains que seuls les soigneurs de la Forge connaissaient. Les Capteurs la chassent depuis. Les Dissidentes du Voile l'ont trouvée avant eux.`,
    combat: `Flux de Feu (soin continu sur les alliés adjacents par chaleur canalée), Cage Braiée (anneau brulant retenant les ennemis), Résurrection Incandescente (burst de soin massif en dépensant toute la chaleur stockée). Passif Chaleur Cicatrisante : les alliés régénèrent des PV en début de tour.`,
  },
  stats: ELEMENT_KITS['feu']['Enchanteur-Soutien'],
  modificateurs: [],
};

export default character;
