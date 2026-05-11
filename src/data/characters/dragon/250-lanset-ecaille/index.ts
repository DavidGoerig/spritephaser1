import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 250,
  nom: `Lancerak`,
  element: 'dragon',
  classe: 'Escrimeur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',
  description: {
    physique: `Dragon Élu dont la mutation a produit des excroissances d'écailles acrées sur les avant-bras — des lames naturelles que l'Empire a affinées et tempérées pour les convertir en armes de duel précises. Il est le duelliste préféré des Fées pour résoudre les conflits politiques qui ne peuvent pas être traités ouvertement.`,
    personnalite: `Pragmatique, formel, profondément indépendant dans ses jugements même en servant l'Empire. Il n'exécute que les duels qu'il juge légitimes selon son propre code — ce qui a créé plusieurs fois des situations diplomatiques délicates avec la Citadelle quand il a refusé une mission.`,
    lore: `L'Empire l'utilise parce qu'un Dragon Élu défiant quelqu'un en duel officiel est politiquement puissant — cela implique que la cause impériale est assez légitime pour que même une anomalie pré-Calendrier la serve. Cette instrumentalisation, il la connaît et l'accepte à condition de garder son droit de refus. Il a refusé trois fois. Chaque fois, les Fées ont trouvé un autre arrangement plus coûteux.`,
    combat: `Lame d'Écaille (attaque rapide des avant-bras), Para de Draconique (contre-attaque avec les écailles qui inflige en retour), Tranche Ancestrale (frappe précise ignorant la parade normale). Passif Code du Duel : en défi officiel, les dégâts sont augmentés de 25%.`,
  },
  stats: ELEMENT_KITS['dragon']['Escrimeur'],
  modificateurs: [],
};

export default character;
