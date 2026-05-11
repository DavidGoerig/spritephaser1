import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 200,
  nom: `Ashva`,
  element: 'Feu',
  element2: 'Ténèbres',
  classe: 'Assassin',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',
  description_physique: `Décrit dans la section Feu (id 9). Sa double nature Feu/Ténèbres est visible : veines de feu orange sur peau grise-bleutée Umbrienne.`,
  description_personnalite: `Voir id 9.`,
  position_lore: `Voir id 9. L'élément Ténèbres lui donne accès à l'invisibilité et à la traversée des zones sombres. Sa double nature est une 'anomalie de saturation' typique de l'Isthme — une naissance multi-types rare.`,
  style_combat: `Combinaison unique : l'invisibilité des Ténèbres + le burst du Feu. Approche cachée dans les zones sombres, frappe avec une Boule de Feu qui révèle sa position, puis disparaît à nouveau dans la fumée.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Peut utiliser 3 sorts du kit Ténèbres : Voile d'Ombre (pour approcher invisible), Pas dans l'Ombre (téléportation), Frappe des Ombres (sort de base remplace Boule de Feu pour l'initiation). Les sorts Ténèbres réduisent ses ressources max de 20% — sa double nature coûte quelque chose.`,
};

export default character;
