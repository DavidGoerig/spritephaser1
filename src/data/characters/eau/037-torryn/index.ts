import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Artillerie'];

export const personnage: Personnage = {
  id: 37,
  nom: 'Torryn',
  element: 'eau',
  classe: 'Artillerie',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Dissidentes',
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
    physique: `Néréide trapue aux bras musculeux habitués à manipuler des canons sous-marins improvisés. Cicatrice de greffe élémentaire à l'épaule droite. Toujours légèrement mouillé.`,
    personnalite: `Bruyant, direct, impatient avec les subtilités. Croit que la politique la plus honnête est un nœud de contrôle détruit : concret, vérifiable, irréversible.`,
    lore: `Après le Silence des Vents, un Élu Électrique a reconstruit les courants de Néris en y intégrant des nœuds de surveillance pour la Citadelle. Torryn a localisé dix-neuf de ces nœuds. Il en a neutralisé cinq. Chaque destruction prive l'Empire d'un canal de lecture en temps réel sur la Confédération marchande. Il en reste quatorze.`,
    combat: `Projectiles aquatiques à haute pression — l'équivalent de grenades sous-marines. Bombes de courant qui perturbent la navigation élémentaire. Destruction d'infrastructures aquatiques à distance.`,
  },
};
