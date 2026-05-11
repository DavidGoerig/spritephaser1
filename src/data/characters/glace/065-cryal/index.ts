import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Mage-Burst'];

export const personnage: Personnage = {
  id: 65,
  nom: 'Cryal',
  element: 'glace',
  classe: 'Mage-Burst',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',
  niveau: 1,
  xp: 0,
  stats: {
    hp: modifs.hp,
    atk: modifs.atk,
    def: modifs.def,
    spe_atk: modifs.spe_atk,
    spe_def: modifs.spe_def,
    vit: modifs.vit,
  },
  description: {
    physique: `Givrin dont les mains sont perpétuellement givrées, aura de froid intense qui fait craquer le verre à proximité. Des cristaux se forment spontanément dans son souffle.`,
    personnalite: `Cherche la limite de sa propre puissance sans agenda politique. Le monde l'intéresse comme terrain d'expérience. Les doctrines l'ennuient.`,
    lore: `Cryal a dépassé tous les Élus Glace de sa génération à Iskral. La monarchie rituelle voulait le lier au protocole de stase — qu'il devienne gardien du Gel Éternel. Il a refusé et est parti. Il revient parfois à Crysalme, teste sa puissance contre le champ du Gel Éternel lui-même, repart. L'Empire ne peut pas non plus l'enregistrer : sa signature est trop instable pour le Calendrier.`,
    combat: `Explosion de gel absolu en zone large. Cristallisation totale de l'air ambiant. Avalanche contrôlée déclenchée à distance. Puissance brute sans sophistication tactique nécessaire.`,
  },
};
