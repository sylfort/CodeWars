function removeFoil(str) {
  return str
    .replaceAll(" *F*", "  ")
    .replaceAll(" *E*", "   ")
    .replaceAll("  \\n1", "\\")
    .replaceAll("1", "");
}

console.log(
  removeFoil(`1 Ashnod's Transmogrant
1 Atsushi, the Blazing Sky
1 Axgard Cavalry
1 Chef's Kiss
1 Claws of Gix *F*
1 Copper Gnomes
1 Cursed Mirror
1 Cursed Totem
1 Daretti, Scrap Savant
1 Darksteel Citadel
1 Defense Grid *F*
1 Dermotaxi
1 Dragon Tempest
1 Dualcaster Mage *F*
1 Elixir of Immortality *F*
1 Final Fortune
1 Fork
1 Gadrak, the Crown-Scourge *F*
2 Galvanic Blast *F*
1 Goblin Engineer *F*
1 Goblin Welder
1 Goldspan Dragon
1 Grafdigger's Cage
2 Grinding Station *F*
1 Hammerheim
1 Hoard Hauler *F*
1 Imperial Recruiter
1 Isochron Scepter *F*
1 Kaldra Compleat
2 Karn, the Great Creator *F*
1 Leyline Tyrant
1 Lightning Greaves *F*
1 Lion's Eye Diamond
1 March of Reckless Joy
1 Mechtitan Core *F*
1 Mishra's Workshop
1 Mizzium Mortars
1 Mogg Salvage *F*
1 Null Brooch
1 Opportunistic Dragon *F*
1 Pardic Miner
1 Plundering Barbarian *F*
1 Proteus Machine
1 Pyroblast *F*
1 Pyrokinesis *F*
1 Reiterate
1 Ricochet Trap
1 Rite of Flame
1 Shattering Spree
1 Shrapnel Blast *F*
2 Shredded Sails *F*
1 Skarrgan Hellkite *F*
1 Skirk Prospector *F*
1 Sky Skiff
1 Slobad, Goblin Tinkerer *F*
2 Soul-Guide Lantern *F*
1 Stranglehold
1 Sudden Demise
1 Taurean Mauler
1 Thunderclap
1 Tibalt's Trickery *F*
1 Trash for Treasure
1 Twinflame *F*
1 Underworld Breach
1 Valakut Awakening / Valakut Stoneforge
1 Vandalblast *F*
1 Vault Robber
1 Visions of Ruin
1 War Room
1 Wasteland
1 Wheel of Fortune
1 You Find Some Prisoners *F*`)
);

console.log(
  removeFoil(
    `1 Abrade  \n1 Academy Manufactor  \n1 Adaptive Automaton  \n1 Ancient Tomb\n1 Axgard Cavalry  \n1 Barbarian Ring  \n1 Blood Moon\n1 Bloodfire Dwarf  \n1 Bloodline Pretender  \n1 Bogardan Hellkite  \n1 Cavern of Souls  \n1 Chrome Mox  \n1 Clock of Omens  \n1 Clown Car  \n1 Command Beacon  \n1 Cursed Mirror\n1 Damping Sphere  \n1 Deflecting Swat\n1 Delayed Blast Fireball  \n1 Dockside Extortionist\n1 Dwarven Armorer\n1 Dwarven Bloodboiler  \n1 Dwarven Grunt  \n1 Dwarven Scorcher  \n1 Dwarven Trader\n1 Elixir of Immortality  \n1 Enslaved Dwarf  \n1 Fork\n1 Fraying Line  \n1 Galvanic Blast  \n1 Gemstone Caverns  \n1 God-Pharaoh's Statue  \n1 Grafdigger's Cage  \n1 Great Furnace  \n1 High-Speed Hoverbike  \n1 Holdout Settlement  \n1 Jeska's Will  \n1 Jeweled Lotus  \n1 Liberated Dwarf  \n1 Lightning Bolt  \n1 Lightning Greaves  \n1 Liquimetal Coating  \n1 Liquimetal Torque  \n1 Lotus Petal\n1 Mana Crypt  \n1 Maskwood Nexus  \n1 Memory Jar  \n1 Metallic Mimic  \n1 Mighty Servant of Leuk-o  \n1 Mirror of the Forebears\n1 Mizzium Mortars  \n14 Mountain  \n1 Mox Amber  \n1 Mox Diamond\n1 Mox Opal  \n1 Mutavault  \n1 Professional Face-Breaker  \n1 Proteus Machine  \n1 Pyrokinesis  \n1 Ragavan, Nimble Pilferer\n1 Red Elemental Blast\n1 Rite of Flame  \n1 Sculpting Steel  \n1 Shinka, the Bloodsoaked Keep  \n1 Shredded Sails  \n1 Simian Spirit Guide  \n1 Smuggler's Copter  \n1 Sokenzan, Crucible of Defiance\n1 Sol Ring  \n1 Spark Mage  \n1 Sphere of Resistance\n1 Spine of Ish Sah  \n1 Springleaf Drum  \n1 Strip Mine\n1 Sudden Shock  \n1 Survivors' Encampment  \n1 Tangle Wire  \n1 Thorn of Amethyst  \n1 Torpor Orb  \n1 Treasure Vault  \n1 Universal Automaton   \n1 Unlicensed Hearse  \n1 Urza's Saga  \n1 Vandalblast  \n1 Winter Orb\n1 Xorn`
  )
);
