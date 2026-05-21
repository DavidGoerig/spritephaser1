// ============================================================
//  VELINDRA — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 8 | Glace | Givrins | Empire | Enchanteur-Soutien
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [H] successeuse de Veldris
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 8,
  nom: 'Velindra',
  element: 'Glace',
  espece: 'Givrins',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: `Mètre soixante-neuf, silhouette propre et anguleuse — les Givrins ont une façon de se tenir qui semble toujours légèrement rigide aux Pyriens. Ce n'est pas de la froideur. C'est de l'économie thermique : les Givrins bougent différemment dans la chaleur de Khar-Vurn, comme quelqu'un qui porte un manteau lourd qu'on ne voit pas.`,
    peau: `Blanc-bleu pâle, la teinte caractéristique des Givrins à haute capacité d'absorption de froid. Dans la chaleur de Khar-Vurn, sa peau développe un légèrement rosé aux joues — réaction de stress thermique. Elle en est consciente et ne peut rien y faire.`,
    yeux: `Bleu très pâle, presque incolore par temps gris. Dans la chaleur des forges, ils prennent une teinte légèrement plus soutenue — le froid qu'ils contiennent réagit à la chaleur ambiante. C'est l'un des signes qui la trahissent dans les quartiers de forge.`,
    cheveux: `Blanc-argent, courts, taillés avec précision. Les Givrins de service impérial portent souvent les cheveux courts — pratique dans les environnements chauds.`,
    vetements: `Uniforme de Régulateur thermique — bleu-gris impérial avec les symboles de régulation glaciaire sur les épaules. Sa veste est surdimensionnée d'un cran par rapport à sa taille pour masquer les capteurs thermiques qu'elle porte intégrés dans la doublure. Elle dit que c'est le style standard. Les autres Régulateurs n'ont pas cette veste.`,
    signes_particuliers: `Elle transpire légèrement en permanence à Khar-Vurn — une condensation visible sur ses tempes et ses mains dans les environnements à plus de vingt-cinq degrés. Elle porte des gants légers même en intérieur pour le masquer. Les gens qui la connaissent savent. Les gens qui ne la connaissent pas trouvent les gants élégants.`,
  },

  psychologie: {
    dominante: `Velindra travaille sous la peur depuis onze ans. Pas une peur spectaculaire — une peur administrative, quotidienne : le poste de Veldris (son prédécesseur) a été supprimé dans des circonstances non expliquées. "Supprimé" est l'euphémisme de service. Elle a pris le poste six mois après et elle l'occupe en sachant exactement ce que ça a coûté à Veldris.`,
    contradictions: `Elle a aidé Brasia une heure. Un seul acte, une couverture thermique d'une heure qui avait permis à treize Élus non enregistrés de passer dans les corridors sans déclencher les capteurs. Elle ne sait pas ce qu'elle ferait si on lui posait la question directement. Elle ne sait pas non plus pourquoi elle l'a fait. Elle l'a fait parce qu'elle l'a fait.`,
    peur: `Disparaître comme Veldris. Pas la mort — la disparition administrative. Un poste supprimé, une appartenance effacée, une existence réduite à une ligne dans un registre de ressources humaines.`,
    desir: `Continuer à exister à Khar-Vurn dans un équilibre qui ne la force pas à choisir entre ce qu'elle sait être juste et ce qui la gardera en vie.`,
    rapport_au_pouvoir: `Son Glace est de la régulation, pas de l'attaque. Elle maintient les températures, crée des zones tampons, ralentit les processus thermiques. Sa puissance est dans la durée et la stabilité, pas dans l'intensité. À Khar-Vurn, un Régulateur Givrin est un instrument de précision — les forges ont besoin de froid contrôlé autant que de chaleur.`,
  },

  histoire: {
    origine: {
      titre: 'Givrin à Khar-Vurn',
      texte: `Les Givrins de Khar-Vurn sont une minorité fonctionnelle — quelques dizaines de Régulateurs thermiques impériaux qui assurent l'équilibre entre la chaleur géothermique de la ville et les besoins de refroidissement des forges de précision. Velindra est née à Crysalme et affectée à Khar-Vurn à vingt-six ans, sur recommandation de son formateur. Elle n'avait pas demandé Khar-Vurn. Elle y avait été envoyée parce que le poste de Régulateur thermique était vacant depuis la "suppression" de Veldris et que quelqu'un de compétent était nécessaire rapidement.`,
    },
    eveil: {
      titre: 'Le poste de Veldris',
      texte: `Les premiers mois, elle avait essayé de comprendre ce qui s'était passé avec Veldris. Les archives de son prédécesseur étaient partielles — ce qui restait suggérait un Givrin compétent, respecté, avec une longévité de service au-dessus de la moyenne. Les circonstances de sa "suppression" n'étaient pas dans les archives accessibles à son niveau.

Elle avait arrêté de chercher quand un superviseur de rang supérieur lui avait fait une remarque sur "la qualité de concentration nécessaire dans un poste sensible". C'était une remarque de supervision ordinaire. Elle l'avait entendue comme un avertissement.`,
    },
    rupture: {
      titre: 'Une heure de couverture',
      texte: `Il y a deux ans, une femme avait frappé à sa porte de service à deux heures du matin. Petite, capuche relevée, perles de pierre cendrée dans les cheveux qu'on voyait à peine. Elle avait dit un seul mot : un code de protocole d'urgence médical que Velindra connaissait théoriquement mais n'avait jamais entendu en dehors des formations.

La femme avait besoin d'une heure de couverture thermique dans le corridor C-7. Un groupe de personnes devait passer. Elle ne lui avait pas demandé de regarder, juste de ne pas signaler l'anomalie thermique que ses capteurs allaient détecter pendant cette heure.

Velindra avait dit oui. Elle ne sait toujours pas pourquoi.

Elle a su plus tard que c'était Brasia.`,
    },
    maintenant: {
      titre: 'L\'équilibre fragile',
      texte: `Velindra fait son travail avec la précision qui lui a valu sa nomination. Les forges de précision de Khar-Vurn ont besoin de températures stables. Elle les maintient. Les rapports de régulation thermique qu'elle soumet sont corrects et complets.

Elle sait que Cendrix (id:2) est en mission active à Khar-Vurn. Elle sait que Cendrix cherche Brasia. Elle ne sait pas si Cendrix sait ce qu'elle a fait il y a deux ans. Elle procède comme si Cendrix ne savait pas, en espérant que c'est vrai.

Ce qui la préoccupe en ce moment : son rapport mensuel doit inclure une anomalie thermique mineure dans le corridor C-7. Une résiduelle de l'heure de couverture d'il y a deux ans, détectée par les nouveaux capteurs installés en janvier. Elle a reformulé la note d'anomalie six fois depuis hier.`,
    },
    objectif: {
      titre: 'Continuer',
      texte: `Continuer à être Régulateur thermique à Khar-Vurn. Maintenir l'équilibre entre ce qu'elle sait et ce qu'elle peut supporter de faire. Ne pas disparaître comme Veldris.`,
    },
    evenements_narratifs: ['Purge_des_Ordres_Soigneurs'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Régulateur thermique Givrin, Empire. Successeuse du poste de Veldris (disparu). A accordé une heure de couverture à Brasia il y a deux ans. Vit sous la peur d'être découverte. Sait que Cendrix est à Khar-Vurn.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'a_aidée',
      depuis_ici: `Elle lui a accordé une heure de couverture thermique sans savoir exactement pourquoi. Elle a su après que c'était pour treize Élus non enregistrés. Elle ne sait pas comment elle se sentait à ce sujet et elle ne veut pas s'interroger là-dessus parce que les conclusions ne seraient pas utiles à sa situation actuelle.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'menace_potentielle',
      depuis_ici: `Une Capteur impériale en mission active dans sa ville. Elle ne peut pas l'éviter — leurs fonctions se croisent sur les systèmes de surveillance thermique. Elle est professionnelle dans leurs échanges. Elle vérifie chaque soir si ses rapports contiennent quelque chose que Cendrix pourrait utiliser.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 4,
      nom: 'Thryss',
      type: 'collègue_technique',
      depuis_ici: `Le représentant du Parti de l'Acier qui travaille sur les normes thermiques. Ils ont des réunions techniques régulières — leurs domaines se chevauchent. Elle apprécie sa rigueur et lui fournit des données de régulation qui ne sont pas toujours dans les rapports officiels. Une relation de travail qui lui rappelle que des gens compétents essaient de construire quelque chose de mieux, même lentement.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Velindra n'est pas une combattante. Sa Glace est de la régulation. Si elle combat, c'est parce que quelque chose a très mal tourné et elle utilise son élément comme elle l'utilise au travail — pour stabiliser, ralentir, créer des marges.`,
    sorts: [
      {
        nom: 'Gel de Régulation',
        type: 'sort_de_base',
        elements: ['Glace'],
        description_gameplay: `Velindra ralentit le flux élémentaire d'une cible — elle est ralentie de 30% et ses sorts de zone ont leur rayon réduit d'une case pendant 2 tours.`,
        description_lore: `C'est son travail : ralentir les flux thermiques incontrôlés. Elle applique ça aux adversaires avec la même précision qu'aux conduits de forge.`,
      },
      {
        nom: 'Zone Tampon',
        type: 'sort_situationnel',
        elements: ['Glace'],
        description_gameplay: `Velindra crée une zone 3×3 de froid régulé. Les dégâts de feu et de chaleur dans la zone sont réduits de 35%. Les ennemis de type Feu ou avec résistance thermique ont leur résistance ignorée dans cette zone.`,
        description_lore: `La même technique qu'elle utilise pour équilibrer les températures des forges de précision. Un équilibre forcé.`,
      },
      {
        nom: 'Couverture Thermique',
        type: 'sort_situationnel',
        elements: ['Glace'],
        description_gameplay: `Velindra masque la signature élémentaire d'un allié pendant 3 tours — il devient indétectable aux capteurs thermiques et de détection élémentaire ennemis.`,
        description_lore: `Ce qu'elle a accordé à Brasia. Elle s'en souvient exactement à chaque fois qu'elle l'utilise.`,
      },
      {
        nom: 'Neutralisation',
        type: 'ultimate',
        elements: ['Glace'],
        description_gameplay: `Velindra projette un gel total sur une cible — elle est immobilisée et son élément est supprimé pendant 2 tours (aucun sort élémentaire). Elle subit des dégâts continus pendant cette période.`,
        description_lore: `Elle n'a jamais déclenché ça contre un être humain. Elle l'a déclenchée sur un conduit de forge en surtension il y a sept ans. Ça avait fonctionné.`,
      },
      {
        nom: 'Peur du Poste',
        type: 'passif',
        elements: ['Glace'],
        description_gameplay: `Aura passive. Velindra est hypervigilante — elle détecte automatiquement les sorts d'observation et de surveillance ennemis dans un rayon de 4 cases. Elle voit les Capteurs et espions ennemis même camouflés. Elle gagne +20% d'esquive si elle se déplace d'au moins 2 cases par tour.`,
        description_lore: `Onze ans à surveiller ses propres rapports avant de les soumettre. Elle a développé un instinct pour ce qui observe.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Velindra',
      description: `Femme Givrin, 37 ans, peau blanc-bleu pâle avec rosé aux joues, yeux bleu très pâle. Cheveux blanc-argent courts. Uniforme bleu-gris de Régulateur impérial. Gants légers aux mains. Expression tendue, attentive — quelqu'un qui écoute ce que les autres ne disent pas. Légère condensation visible sur les tempes. Fond : couloir thermique de Khar-Vurn avec capteurs de température. Style concept art Riot Games, contraste chaud-froid, éclairage industriel.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1000,

  lore_long: `L'ANOMALIE DU CORRIDOR C-7
Un chapitre de la vie de Velindra, Régulateur thermique impérial (Khar-Vurn)

—

I.

Le rapport mensuel attendait depuis trois jours sur son bureau.

Elle l'avait rédigé en vingt minutes — les données de régulation étaient propres, les températures stables, les forges de précision avaient fonctionné sans incident notable. Un rapport sans problème.

Sauf la note en bas de page, section 4.b, anomalies résiduelles : une fluctuation thermique détectée dans le corridor C-7, quatorzième du mois, 02h17. Durée : 58 minutes. Amplitude : inférieure aux seuils d'alerte standard. Source probable : condensation sur les capteurs suite à variations climatiques nocturnes.

Elle avait relu cette note six fois depuis hier.

—

II.

Il y a deux ans, elle avait accordé une heure à une femme qui avait frappé à sa porte de service à deux heures du matin. La femme avait dit un code de protocole d'urgence médicale. Velindra ne savait pas d'où elle connaissait ce code. Elle ne posait pas de questions sur les codes qu'elle reconnaissait.

Elle avait masqué les capteurs du corridor C-7 pendant une heure. Elle avait regardé ses instruments sans rien noter. Elle avait attendu. Une heure plus tard, tout était revenu à la normale.

Elle avait su plus tard que la femme s'appelait Brasia. Que treize Élus non enregistrés avaient passé le corridor C-7 cette nuit-là. Que cette heure avait fait partie d'un réseau d'exfiltration qui avait sorti ces personnes des registres impériaux.

Elle n'avait pas su quoi faire de ces informations alors. Elle ne savait toujours pas.

—

III.

Les nouveaux capteurs avaient une sensibilité supérieure aux anciens. La résiduelle thermique du passage de deux ans plus tôt — infime, imperceptible aux standards de l'époque — était suffisamment visible pour les nouvelles unités pour générer une note d'anomalie.

Condensation sur les capteurs suite à variations climatiques nocturnes.

Ce n'était pas faux. C'était une explication plausible. Les anciens capteurs auraient produit la même lecture. Si quelqu'un avait des raisons de creuser — une Capteur impériale en mission active dans sa ville, par exemple — la plausibilité ne serait pas suffisante.

Velindra pensa à Veldris. Elle l'avait fait six fois cette semaine.

Veldris avait fait quelque chose. Elle ne savait pas quoi exactement. Son poste avait été "supprimé" et les archives de la suppression n'étaient pas à son niveau de clearance.

Elle prit la note d'anomalie. La relu une septième fois.

—

IV.

Elle avait deux options.

Option A : conserver la note comme rédigée, condensation sur les capteurs, aucune suite. Probabilité qu'on la creuse : faible si Cendrix cherchait Brasia pour d'autres raisons, élevée si Cendrix était précisément là pour les corridors thermiques de deux ans plus tôt.

Option B : supprimer la note. Réel risque si les nouveaux capteurs généraient des rapports automatiques en parallèle — elle n'était pas sûre de leur architecture de sauvegarde.

Option C : modifier la note pour éliminer la référence temporelle précise tout en conservant l'anomalie. Plus difficile à détecter qu'une suppression, moins risqué qu'une conservation intégrale.

Elle opta pour C. Elle reformula la note pendant vingt minutes.

"Fluctuation thermique résiduelle mineure dans le corridor C-7, quatorzième trimestre, indéterminée. Source probable : condensation nocturne sur capteurs récemment installés. Aucune suite requise."

Elle relut. Signa. Soumit le rapport.

—

V.

Elle resta assise devant son bureau après ça, sans rien faire pendant quelques minutes.

Veldris avait fait quelque chose. Son poste avait été supprimé. Elle avait fait quelque chose de similaire à ce que Veldris avait fait — elle n'en était pas sûre, elle ne connaissait pas les détails du cas Veldris, mais la similitude était là.

Ce qui la distinguait de Veldris, si quelque chose la distinguait : elle avait modifié un rapport. Elle ne l'avait jamais fait avant. Elle n'était pas sûre de comment elle se sentait à ce sujet.

Elle se leva. Il y avait des relevés de température à vérifier dans les forges du nord. Son travail était là, régulier, précis. Elle continuerait à faire son travail.

C'était la seule chose qui la gardait à sa place. Et sa place était la seule chose qui la gardait existante.`.trim(),
};

export default lore;
