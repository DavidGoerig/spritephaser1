import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 309,
  nom: `Manyx`,
  element: 'Psy',
  classe: 'Assassin',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Dissidentes',
  description_physique: `Fee dont la specialite de Domination mentale a produit des signes inhabituels — ses yeux ont developpe une luminosite propre, une lueur bleue pale plus intense lors des liens de Domination. Sa peau est livide, presque translucide. Aucune expression faciale involontaire.`,
  description_personnalite: `N'est pas une sociopathe — elle ressent, mais a appris a dissocier ses ressources psy des effets emotionnels qu'elle produit sur les autres. Adaptation de survie : lire les emotions en permanence serait debilitant. Les Dissidentes l'utilisent pour les missions necessitant de retourner des agents adverses.`,
  position_lore: `Manyx opere a la Citadelle comme assassine psy des Dissidentes — ses cibles sont les agents qui maintiennent le fonctionnement du Calendrier des Fees et les Capteurs imperiaux qui traquent les Elus non-enregistres. Sa methode de Domination avec amnesie post-operatoire laisse ses cibles sans souvenir de l'episode, ce qui la rend difficile a tracer. Illustrix (Capteur, Empire) est son adversaire declare — les deux se savent mutuellement, leurs capacites se neutralisent.`,
  style_combat: `Approche via Illusion d'une Fee imperiale. Telepathie pour identifier la cible mentalement la plus vulnerable. Domination immediate. La cible dominee attaque ses propres allies.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Domination dure 4 tours. Cible dominee ne se souvient pas d'avoir ete controlee. Swap peut echanger sa position avec une cible Dominee.`,
};

export default character;
