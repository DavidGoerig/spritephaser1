# LORE_PLAN.md — Plan d'exécution complet, session par session

> **Usage :** dire "continue" relance la prochaine session non terminée.
> Claude vérifie les fichiers produits pour déterminer où on en est.
> Chaque session est indépendante — elle a ses prérequis, son scope, ses livrables.

---

## ÉTAT GLOBAL

| Phase | Titre | Statut |
|-------|-------|--------|
| A | Fondations monde | ✅ TERMINÉ |
| B | Roster des personnages | EN COURS (arcs 1-8 core done) |
| C | Personnages étalons | ✅ TERMINÉ (C1 Brasia ✅, C2 Cendrix ✅, C3 Arev ✅) |
| D | Réécriture arc par arc | À FAIRE |
| E | Validation lore | À FAIRE |
| F | Prompts images | À FAIRE |
| G | Intégration website | EN COURS (timeline.html fait) |
| H | Intégration jeu | À FAIRE |

---

## PHASE A — Fondations monde (4 sessions)

### A1 — World Geography & Espèces ✅ TERMINÉ
### A2 — Schéma lore-types ✅ TERMINÉ  
### A3 — Timeline mondiale ✅ TERMINÉ
### A4 — Arcs narratifs ✅ TERMINÉ

---

> **SESSION EN COURS :** B1 partiel + G1 fait. Prochaine session = finir B1 (80 persos) puis C1 (Brasia).

---

### SESSIONS TERMINÉES (résumé rapide)
**Livrable :** `WORLD_GEOGRAPHY.md`
**Contenu :** Carte ASCII du monde, descriptions géographiques des 10 régions et leurs villes, descriptions canoniques visuelles des 9 espèces (taille, peau, yeux, cheveux, vêtements, signes particuliers), table d'impact élémentaire sur les villes.

### A2 — Schéma lore-types ✅ TERMINÉ
**Livrable :** `src/data/lore-types.ts`
**Contenu :** Interfaces TypeScript complètes — `Apparence`, `Psychologie`, `Histoire`, `Relation`, `CombatLore`, `ImagePrompt`, `PersonnageLoreComplet`, `EvenementData` + données des 9 événements fondateurs avec descriptions longues.

### A3 — Timeline mondiale 🔲 À FAIRE
**Livrable :** `WORLD_TIMELINE.md`
**Contenu :**
- Axe chronologique de -350 à Aujourd'hui (an 0)
- Les 9 événements fondateurs placés sur l'axe avec leurs dates relatives
- Entre chaque événement : faits politiques, formations de factions, naissances d'Élus remarquables
- Pour chaque événement : quels personnages y participent (rôles : cause/victime/héros/témoin/profiteur)
- "Aujourd'hui" = la situation au moment où le joueur entre dans le monde
- Section finale : les 5 fils de crise actuels (ce qui va exploser si personne n'intervient)

### A4 — Arcs narratifs 🔲 À FAIRE
**Livrable :** `ARCS.md`
**Contenu :** Pour chacun des 8 arcs :
- Résumé de la tension centrale (ce qui est en jeu)
- Les 3-5 personnages CLÉS de l'arc (ceux qui le font avancer, pas juste les témoins)
- Comment l'arc se relie aux autres (les fils narratifs croisés)
- La question que pose l'arc (pas une réponse — une question ouverte)
- Comment le joueur peut influer sur cet arc via son Élu
- Les personnages "pivots" — ceux dont le lore connecte deux arcs

---

## PHASE B — Roster des personnages (3 sessions)

### B1 — Roster Feu, Eau, Glace, Ténèbres (arcs principaux)
**Livrable :** `CHARACTER_ROSTER.md` — Section 1
**Contenu :** Pour chaque personnage : `id | nom | espèce | élément1 | élément2 | classe | faction | région | arcs[] | events[] | rôle_narratif`
**Scope :** 80 personnages — les arcs La Forge Confisquée + Le Neutre Qui Ment + Les Archives Gelées + Vel'Nox Double Jeu
**Note :** TOUS les noms sont nouveaux. Les espèces correspondent aux affinités canoniques du WORLD_GEOGRAPHY.md.

### B2 — Roster Electrique, Vent, Plante, Sol/Roche
**Livrable :** `CHARACTER_ROSTER.md` — Section 2
**Scope :** 90 personnages — arcs Le Ciel Vendu + L'Héritage Brûlé + La Fosse Ouverte

### B3 — Roster cross-éléments, Convergence, Avatar
**Livrable :** `CHARACTER_ROSTER.md` — Section 3
**Scope :** ~217 personnages restants — tous les personnages double-élément + arc L'Avatar
**Note :** Les cross-éléments ont un élément dominant (leur arc principal) et un secondaire (qui enrichit le lore et les sorts). Leur rôle narratif est souvent de connecter deux arcs.

---

## PHASE C — Personnages étalons (3 sessions)

> Ces 3 personnages définissent le niveau de qualité pour tout le reste.
> Chaque "continue" après C-étalons doit produire un lore de qualité égale ou supérieure.

### C1 — Brasia (Feu/Pyrienne/Dissidentes)
**Livrable :** `src/data/characters/feu/001-brasia/lore.ts`
**Scope :**
- Apparence canonique Pyrienne avec variations individuelles
- Psychologie : médecin qui soigne par nécessité tactique, pas par sentiment
- Histoire complète en 5 moments (2500-3500 mots au total)
- Relations : Cendrix (ennemi/ancienne amie), 3 Dissidentes nommés, 1 Forgeur Silencieux
- Combat : 5 sorts nommés avec description lore (Flux de Feu, Cage Braisée, etc.)
- 3 image prompts (portrait, scène lore devant la Forge Silencieuse, action)
- Chapitre roman : 2500 mots, POV à la 3e personne proche, style Riot Games

### C2 — Cendrix (Feu/Pyrienne/Empire) ✅ TERMINÉ
**Livrable :** `src/data/characters/feu/002-kaelsa-la-braise/lore.ts`
**Scope :**
- Même format que C1
- Psychologie : croit sincèrement au Voile d'Équité, charme comme outil, journaux chiffrés
- Histoire : a identifié sa première naissance d'Élu à 15 ans, formée à la Citadelle
- Relations : Brasia (cible/ancienne amie), son supérieur impérial, une source Dissidente
- Combat : sorts de traqueur (Tison Traceur, Réseau de Cendres, etc.)
- Chapitre roman : 2000 mots, POV intimiste, tension entre conviction et doute

### C3 — Personnage Convergence (Déserts) — à nommer en B1/B3
**Livrable :** `src/data/characters/sol/[id-nom]/lore.ts`
**Scope :**
- Personnage Sol ou Ténèbres, Déserts, Convergence
- Psychologie : croit en la justice redistributive, a vu des Élus souffrir de leur puissance
- Histoire : a vécu dans une zone sans Élus, a rejoint la Convergence après le Premier Drain
- Chapitre roman : 2500 mots, POV de quelqu'un qui pense être du bon côté

---

## PHASE D — Réécriture arc par arc

> Chaque session produit 5-8 personnages complets (lore.ts + chapitre roman).
> Ordre recommandé : suivre la chronologie des arcs pour que les références croisées
> entre personnages soient cohérentes (on peut écrire "Brasia est mon mentor" une fois
> que Brasia existe).

### D1 — Arc La Forge Confisquée — Personnages 3-10 (Feu/Varkhôl/Khar-Vurn) ✅ TERMINÉ
**Prérequis :** C1 (Brasia), C2 (Cendrix), B1
**Scope :** 8 personnages Feu/Pyriens de Varkhôl, divers factions
**Narrative à couvrir :** La Rupture Thermique vue de 4 POVs différents (cause/victime/héros/témoin). La vie quotidienne à Khar-Vurn avant et après. Le Parti du Feu vs Parti de l'Acier. La Forge Silencieuse comme blessure collective.

### D2 — Arc La Forge Confisquée — Personnages 11-20 (suite Feu)
**Scope :** 8-10 personnages, incluant les Élus Glace de Varkhôl (les Régulateurs thermiques) et les premiers Dissidentes locaux.

### D3 — Arc La Forge Confisquée — Personnages cross-feu ✅ TERMINÉ (partiel)
**Scope :** Personnages Feu/[secondaire] — leur élément secondaire enrichit leur rôle dans l'arc. Un Feu/Psy (lit les tensions avant qu'elles explosent). Un Feu/Acier (forgeron militaire). Un Feu/Spectre (survivant de la Rupture, hanté).
**Produit :**
- `cross/206-kethval/lore.ts` — Kethval (Feu/Acier, Parti de l'Acier) — forgeron qui a refusé les armatures du D-7, liste encadrée dans son atelier, problème d'ingénierie anti-Rupture à 70%
- `cross/226-vrash/lore.ts` — Vrash (Feu/Psy, Indépendant) — lit les tensions sociales, traduit ses lectures en intelligence "actionnable" avec Brasia, détecte nouvelle saturation dans le quartier impérial
- `cross/229-harryn/lore.ts` — Harryn (Feu/Spectre, Dissidentes) — élément Spectre émergé post-Rupture, perçoit 187 morts vitrifiés à la Forge Silencieuse, utilise le flux spectral pour les opérations Dissidentes

### D4 — Arc Les Archives Gelées — Personnages Fées/Glace ✅ TERMINÉ (partiel)
**Prérequis :** D1
**Scope :** Couvre : Le Gel Éternel (312 ans d'histoire — certains personnages sont des descendants, d'autres des gardiens du Champ Gelé). La tension Fée/Glace d'Iskral. Les Archives Givrin et ce qu'elles cachent.
**Produit :**
- `fee/034-leth/lore.ts` — Leth (Fée, Gardien, Sylvan, 400 ans) — témoin de la Faim des Racines, archive vivante du monde pré-Calendrier, perçoit dissonance depuis 50 ans dans les lignes du Calendrier
- `fee/056-isvara/lore.ts` — Isvara (Fée/Fées, Spécialiste, Empire) — a découvert que les modifications du Calendrier Principal = signature Drain Préparatoire causant le dégel du Champ Gelé ; rapport v4 en archive chiffrée personnelle depuis 6 ans, jamais transmis
- `fee/054-aethren/lore.ts` — Aethren (Fée non-déclaré, Givrin, Dissidentes) — ancêtre Karev gelé côté est depuis 312 ans ; élément Fée lui permet de lire la fenêtre de convergence (18 mois pour le dégel)

### D5 — Arc Les Archives Gelées — Personnages cross-glace (51-65)

### D6 — Arc Vel'Nox Double Jeu — Personnages Ténèbres/Umbriens ✅ TERMINÉ (partiel)
**Scope :** Couvre : Le Vol de la Lumière. Les Trois Couches de Vel'Nox (proscrits, marchés nocturnes, réseaux criminels). L'ambiguïté de l'ombre comme outil de liberté vs prédation.
**Produit :**
- `tenebres/046-vethis/lore.ts` — Vethis (Ténèbres, Gardien, Dissidentes) — maintient les Trois Couches depuis 20 ans, détecte flux Ténèbres dirigé vers la Couche Noire (Convergence achète profils de 18 élémentaires purs)
- `tenebres/049-velath/lore.ts` — Velath (Ténèbres, Assassin, Dissidentes) — routes d'ombre non-cartographiées, prépare corridor sud de 70km vers Ash'Rael pour réfugiés Élus anticipés à l'An 0

### D7 — Arc Vel'Nox Double Jeu — Personnages cross-ténèbres (81-95)

### D8 — Arc Le Neutre Qui Ment — Personnages 96-110 (Eau+Psy/Néréides/Thalassyr)
**Scope :** 10 personnages. Couvre : Le Silence des Vents. Les Maisons de Mémoire. Le Réseau Blanc (vents artificiels, information filtrée). Les archivistes qui savent que la neutralité est fausse.

### D9 — Arc Le Neutre Qui Ment — Personnages cross-eau/psy (111-125)

### D10 — Arc Le Ciel Vendu — Personnages 126-140 (Electrique+Vent/Aérides/Asterciel)
**Scope :** 10 personnages. Couvre : La Chute des Nuages. La hiérarchie verticale. Les ingénieurs du vent vs l'aristocratie stellaire. La reconstruction post-Chute.

### D11 — Arc Le Ciel Vendu — Personnages cross-electrique/vent (141-155)

### D12 — Arc L'Héritage Brûlé — Personnages 156-170 (Plante/Sylvans/Sylvera)
**Scope :** 10 personnages. Couvre : La Faim des Racines. Les Conservateurs de la Sève vs Gardiens de la Clairière. Les arbres-mémoire survivants. Le Feu comme nécessité honteuse.

### D13 — Arc L'Héritage Brûlé — Personnages cross-plante (171-185)

### D14 — Arc La Fosse Ouverte — Personnages 186-200 (Sol+Roche/Chthoniens/Ormn-Dur)
**Scope :** 10 personnages. Couvre : La Fosse Interdite. La technocratie de contribution. Les gardiens de zone fongique. La dette entre profondeur et surface.

### D15 — Arc La Fosse Ouverte — Personnages cross-sol/roche (201-215)

### D16 — Arc L'Avatar — Personnages 216-230 (Isthme/Virex/tous éléments)
**Scope :** 10 personnages. Couvre : La Saturation des Élus. Les anomalies de Virex. Les pré-avatars (nés double-puissance). La bureaucratie qui gère l'impossible.

### D17 — Arc L'Avatar — Personnages Convergence (231-245)
**Scope :** 10 personnages. Couvre : Le Premier Drain. La doctrine sacrificielle. Les Élus Convergence (certains convaincus, d'autres manipulés). Les zones sans Élus des déserts.

### D18 — Arc L'Avatar — Personnages Citadelle/Empire (246-260)
**Scope :** 10 personnages. Couvre : L'Empire des Fées de l'intérieur. Les gardes de la Citadelle. Les Élus "retenus". Les Dissidentes du Voile infiltrées dans l'Empire.

### D19 — Arc L'Avatar — Personnages du Second Avatar (261-275)
**Scope :** 10 personnages. Couvre : La fuite du Second Avatar. Ceux qui l'ont aidé. Ceux qui le traquent. Les premières fissures dans l'Empire.

### D20 — Personnages hors-arc (276-290) — Indépendants, Neutres, Exilés
**Scope :** 10 personnages. Les "Indépendants" au sens réel — pas sans allégeance par paresse narrative, mais avec leurs propres agendas qui ne collent dans aucun arc. Chacun est une histoire autonome qui enrichit un angle oublié du monde.

### D21 — Personnages hors-arc (291-305) — suite

### D22 — Personnages hors-arc (306-320) — suite

### D23 — Personnages hors-arc (321-335) — suite

### D24 — Cross-éléments restants et rôles narratifs finaux (336-387)
**Scope :** Les derniers personnages. Chacun doit comporter au moins une référence à un personnage déjà existant (tissage final du réseau).

---

## PHASE E — Validation lore (2 sessions)

### E1 — Validation des références croisées
**Livrable :** `scripts/lore/validate_lore.ts`
**Ce que le script vérifie :**
- Chaque `relation.personnage_id` référence un personnage qui existe
- Chaque `evenements_narratifs[]` référence un événement valide de `EVENEMENTS_FONDATEURS`
- Chaque sort nomme un élément valide
- Word count de `lore_long` entre 1500 et 5000
- Chaque personnage a au moins 1 relation, 1 événement, 1 arc
**Sortie :** rapport JSON + rapport lisible en console

### E2 — Couverture narrative
**Livrable :** `scripts/lore/coverage_report.ts`
**Ce que le script vérifie :**
- Chaque événement fondateur a au moins 3 POV (cause, victime, héros/témoin)
- Chaque arc a au moins 10 personnages qui s'y référencent
- Les 8 arcs sont tous couverts
- Toutes les factions sont représentées dans chaque arc (pas d'arc 100% mono-faction)
**Sortie :** matrice événement × rôle + matrice arc × faction

---

## PHASE F — Prompts images (1 session)

### F1 — Extraction et export des prompts images
**Livrable :** `scripts/lore/export_image_prompts.ts`
**Sortie :** `public/characters/image-prompts.json` + `image-prompts.csv`
**Format du prompt :**
```
[NOM], [ESPÈCE], [DESCRIPTION_PHYSIQUE_CONDENSÉE], [ACTION], devant [LIEU_CANONIQUE], [MOOD], pixel art style, isometric view, Riot Games concept art quality, [PALETTE_COULEUR]
```
**Usage :** coller directement dans Midjourney, ComfyUI ou autre générateur IA

---

## PHASE G — Intégration website (4 sessions)

### G1 — Frise temporelle interactive
**Livrable :** `public/characters/timeline.html` + `public/characters/timeline.js`
**Fonctionnalités :**
- Timeline horizontale scrollable, axe de -350 à 0 (Aujourd'hui)
- Les 9 événements fondateurs comme nœuds cliquables (couleur par région)
- Clic événement → panneau latéral : description + liste des personnages impliqués avec leur rôle (cause/victime/héros/témoin)
- Clic personnage dans le panneau → navigation vers sa fiche dans `app.js`
- Mini-carte du monde en haut montrant la région de l'événement surligné
- Responsive, dark theme (cohérent avec Vel'Nox)

### G2 — Onglet Lore dans le Character Bank
**Livrable :** mise à jour `public/characters/app.js`
**Fonctionnalités :**
- Nouvel onglet "Lore" dans le panneau personnage (à côté de Modèle / Animations)
- Affiche : portrait generé (ou placeholder avec prompt), texte lore_long formaté en chapitres, psychologie résumée
- Section Relations : liste des personnages liés, type de relation, clic pour naviguer
- Section Combat : philosophie + 5 sorts nommés avec description lore

### G3 — Graphe de relations
**Livrable :** `public/characters/relations.js` (composant intégré dans app.js)
**Fonctionnalités :**
- Force-directed graph en SVG/Canvas des relations d'un personnage
- Nœuds = personnages (couleur par faction), arêtes = relations (style par type)
- Clic nœud → navigate vers ce personnage
- Profondeur configurable (1 = relations directes, 2 = amis d'amis)

### G4 — Lecteur narratif
**Livrable :** `public/characters/reader.html` + `public/characters/reader.js`
**Fonctionnalités :**
- Mode lecture roman : personnages présentés dans l'ordre chronologique de leur arc
- Navigation "Suivant dans cet arc" / "Même événement, autre POV"
- Progression : bookmark dans localStorage
- Dark mode, police lisible, mise en page type e-reader
- En-tête contextuel : "Arc 1 — La Forge Confisquée | Événement : Rupture Thermique"

---

## PHASE H — Intégration jeu (2 sessions)

### H1 — Scène Timeline Phaser
**Livrable :** `src/scenes/timeline-scene.ts`
**Fonctionnalités :**
- Scène Phaser activable depuis le jeu (touche T long-press ou menu)
- Rendu isométrique de la frise (chaque événement = bloc 3D cliquable)
- Clic événement → panneau latéral de lore (même données que G1)
- Retour au jeu : l'événement cliqué définit le "moment T" du contexte narratif

### H2 — Marqueurs de contexte narratif in-game
**Livrable :** mise à jour `src/game.ts`, `src/engine/grid.ts`
**Fonctionnalités :**
- Le "moment T" (événement actif) colore les tuiles des régions concernées
- Certaines zones de la grille deviennent "marquées" par les événements lore
- Tooltip sur les zones marquées : lien vers le personnage qui y a vécu son histoire
- Panneau info (déjà existant en bas à gauche) peut afficher le contexte narratif actuel

---

## CONVENTIONS DE NOMMAGE

### Fichiers de lore
```
src/data/characters/[element]/[id-nom]/lore.ts
```
Exemples :
- `src/data/characters/feu/001-brasia/lore.ts`
- `src/data/characters/glace/045-karath/lore.ts`
- `src/data/characters/cross/200-ashva/lore.ts` (double-élément)

### IDs
- 001-199 : personnages mono-élément (par élément dans l'ordre alphabétique)
- 200-387 : personnages double-élément (cross)
- Réservés : 388-390 = les Avatars (Premier, Second, éventuel Troisième)

### Qualité minimum par personnage
- `lore_long` : ≥ 1500 mots
- Sections Histoire : ≥ 5 moments narratifs (origine/éveil/rupture/maintenant/objectif)
- Relations : ≥ 2 personnages nommés (avec leurs IDs)
- Sorts : ≥ 4 sorts nommés avec description lore
- Image prompts : ≥ 1 (portrait minimum)
- Événements référencés : ≥ 1

### Qualité cible pour personnages clés
- Personnages d'arc (protagonistes d'un arc) : 3000-5000 mots
- Personnages secondaires : 1500-2500 mots
- Personnages de liaison (connectent deux arcs) : 2000-3000 mots

---

## RÈGLES NARRATIVES CANONIQUES

Ces règles doivent être respectées dans tous les lores :

1. **La Sélection du Besoin** est la loi naturelle du monde — les Élus naissent là où le monde souffre. L'Empire des Fées l'a capturée. Les Dissidentes veulent la restaurer.

2. **Un Élu n'est pas un superhéros** — son élément le marque, le coûte, l'expose. Avoir une puissance n'est pas une bénédiction simple.

3. **Les Fées ne sont pas des dieux** — elles lisent les lignes du Calendrier, mais elles peuvent se tromper. Le Second Avatar est leur erreur.

4. **Chaque région a sa blessure** — les 9 événements fondateurs ne sont pas de l'histoire ancienne. Ils sont dans les corps, les lois, les rues. Chaque personnage en porte la trace.

5. **L'Empire, la Convergence, les Dissidentes ont TOUTES raison sur quelque chose** — le joueur/lecteur ne doit pas avoir de réponse facile. L'Empire a stabilisé le monde. La Convergence a des griefs légitimes. Les Dissidentes proposent un retour à quelque chose d'organique mais imprévisible.

6. **Le Second Avatar change tout** — son existence seule est une preuve que l'Empire peut rater. Son lore et ses relations à travers les 387 personnages forment le fil rouge de l'histoire.

7. **An 0 = naissance de l'Avatar Total** — le jeu se déroule à an -1/-2. L'Avatar Total est forgé par le peuple des sables via le drainage d'un "pur élémentaire" par élément (18 éléments = 18 purs). Ni l'Empire ni le Calendrier ne l'avaient prévu. Le roman de l'auteur commence là.

8. **Chaque élément a un "pur"** — le personnage le plus intensément pur dans son élément est une cible. Certains sont chassés ouvertement, certains sont isolés progressivement. Dans chaque arc élémentaire, identifier et écrire le pur de cet élément. Sa condition de pur doit être visible dans son lore sans être explicitement nommée.

9. **Le Drain de la Convergence est la technologie du forgeage** — les membres de terrain (comme Arev) ne savent pas. La doctrine de redistribution est réelle et les griefs sont légitimes. Mais les méthodes développées servent aussi une finalité que seuls les hauts responsables connaissent.

7. **Les personnages meurent dans le lore** — pas nécessairement dans le jeu, mais dans l'histoire. Certaines relations référencent des morts (TypeRelation 'fantôme'). Les sacrifices ont des conséquences réelles.

---

## WORKFLOW PAR SESSION — LIVRABLE DOUBLE

Chaque session produit **deux livrables** :
1. `src/data/characters/[element]/[id-nom]/lore.ts` — données narratives complètes (source de vérité)
2. Mise à jour de `public/characters/characters.json` — nom + descriptions de base pour le character bank

Le `lore.ts` sert de tracker de progression : **existence du fichier = personnage terminé**.
Le `characters.json` est mis à jour immédiatement après chaque lore.ts — le character bank reste à jour au fur et à mesure.

```python
# Champs à mettre à jour dans characters.json après chaque lore.ts :
# nom, description_physique, description_personnalite, position_lore,
# style_combat, modifications_classe
# Conserver : id, element, element2, classe, espece, region, faction, folder, assets, animSlots
```

---

## CHECKLIST AVANT DE COMMENCER UNE SESSION

- [ ] Lire le plan (ce fichier) et identifier la prochaine session non terminée
- [ ] Lire `WORLD_GEOGRAPHY.md` pour la description canonique de l'espèce du personnage
- [ ] Lire `ARCS.md` pour les tensions de l'arc du personnage
- [ ] Vérifier `CHARACTER_ROSTER.md` pour les IDs des personnages avec qui il a des relations
- [ ] Vérifier les lore.ts déjà existants pour les personnages référencés (cohérence des noms et des détails)
- [ ] Respecter la qualité étalon définie en C1 (Brasia)
- [ ] Après le lore.ts : mettre à jour characters.json pour ce personnage
