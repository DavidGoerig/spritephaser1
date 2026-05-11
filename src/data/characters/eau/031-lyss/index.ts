import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Soutien'];

export const personnage: Personnage = {
  id: 31,
  nom: 'Lyss',
  element: 'eau',
  classe: 'Soutien',
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
    physique: `Petite Néréide aux écailles iridescentes bleu-vert, mains qui s'illuminent d'un halo aqueux quand elle canalise ses soins. Yeux profonds couleur fond marin, ouïes à peine visibles sous les oreilles.`,
    personnalite: `Douce en apparence, acier en dessous. Elle ne supporte pas que l'Empire décide qui mérite de guérir selon le registre du Calendrier. Sa gentillesse est réelle ; son refus de l'ordre féerique l'est tout autant.`,
    lore: `Lyss soignait dans les quartiers portuaires de Néris jusqu'au Silence des Vents — l'événement où l'assassinat d'un Élu Flying coupa les flux d'information qui organisaient la ville. L'Empire en a profité pour cataloguer tous les soigneurs. Lyss a refusé l'enregistrement trois fois. La quatrième convocation n'est jamais arrivée — interceptée par les Dissidentes du Voile, qui l'avaient déjà recrutée. Elle opère maintenant dans les abysses de Thalassyr, loin du Voile d'Équité.`,
    combat: `Soins d'urgence par canalisation de courants aquatiques. Barrières d'eau sous pression pour bloquer les attaques. Si ses alliés sont menacés, elle peut noyer localement un espace de combat — noyade sèche par saturation de l'air ambiant.`,
  },
};
