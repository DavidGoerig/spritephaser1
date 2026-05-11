import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Artillerie'];

export const personnage: Personnage = {
  id: 127,
  nom: 'Sporen',
  element: 'plante',
  classe: 'Artillerie',
  espece: 'Sylvan',
  region: 'Sylvera',
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
    physique: `Sylvan trapu, sacs de spores-bombes attachés à tout le corps, peau couverte de champignons bioluminescents. Odeur de sous-bois intense.`,
    personnalite: `Pragmatique. Pense que les infrastructures de surveillance impériale dans Sylvera peuvent être biologiquement neutralisées — les spores n'ont pas besoin d'autorisation.`,
    lore: `Depuis la Faim des Racines, les agents du Calendrier ont installé des capteurs de signature élémentaire déguisés en formations végétales dans Leth'Var. Sporen les neutralise en les recouvrant de spores qui brouillent les lectures. Il en a désactivé onze depuis un an.`,
    combat: `Bombardement de spores à longue portée — chaque sac fait une zone d'effet différente. Neutralisation d'équipements par contamination biologique. Nuage de spores persistant qui désoriente et brouille.`,
  },
};
