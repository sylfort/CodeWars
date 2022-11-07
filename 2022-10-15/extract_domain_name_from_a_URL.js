// Extract the domain name from a URL

function domainName(url) {
  // replace http:// && https:// && www.
  let partsArr = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    // split using "." as separator
    .split(".");
  return partsArr[0];
}

// receive string url, return a string with just the domain name

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");

function removeFoil(str) {
  return str.replaceAll(" *F*", "  ").replaceAll(" *E*", "   ");
}

removeFoil(`1 Abrade *F*
1 Academy Manufactor *F*
1 Adaptive Automaton *F*
1 Ancient Tomb
1 Axgard Cavalry *F*
1 Barbarian Ring *F*
1 Blood Moon
1 Bloodfire Dwarf *F*
1 Bloodline Pretender *F*
1 Bogardan Hellkite *F*
1 Cavern of Souls *F*
1 Chrome Mox *F*
1 Clock of Omens *F*
1 Clown Car *F*
1 Command Beacon *F*
1 Cursed Mirror
1 Damping Sphere *F*
1 Deflecting Swat
1 Delayed Blast Fireball *F*
1 Dockside Extortionist
1 Dwarven Armorer
1 Dwarven Bloodboiler *F*
1 Dwarven Grunt *F*
1 Dwarven Scorcher *F*
1 Dwarven Trader
1 Elixir of Immortality *F*
1 Enslaved Dwarf *F*
1 Fork
1 Fraying Line *F*
1 Galvanic Blast *F*
1 Gemstone Caverns *F*
1 God-Pharaoh's Statue *F*
1 Grafdigger's Cage *F*
1 Great Furnace *F*
1 High-Speed Hoverbike *F*
1 Holdout Settlement *F*
1 Jeska's Will *F*
1 Jeweled Lotus *F*
1 Liberated Dwarf *F*
1 Lightning Bolt *F*
1 Lightning Greaves *F*
1 Liquimetal Coating *F*
1 Liquimetal Torque *F*
1 Lotus Petal
1 Mana Crypt *F*
1 Maskwood Nexus *F*
1 Memory Jar *F*
1 Metallic Mimic *F*
1 Mighty Servant of Leuk-o *F*
1 Mirror of the Forebears
1 Mizzium Mortars *F*
14 Mountain *F*
1 Mox Amber *F*
1 Mox Diamond
1 Mox Opal *F*
1 Mutavault *F*
1 Professional Face-Breaker *F*
1 Proteus Machine *F*
1 Pyrokinesis *F*
1 Ragavan, Nimble Pilferer
1 Red Elemental Blast
1 Rite of Flame *F*
1 Sculpting Steel *F*
1 Shinka, the Bloodsoaked Keep *F*
1 Shredded Sails *F*
1 Simian Spirit Guide *F*
1 Smuggler's Copter *F*
1 Sokenzan, Crucible of Defiance
1 Sol Ring *F*
1 Spark Mage *F*
1 Sphere of Resistance
1 Spine of Ish Sah *F*
1 Springleaf Drum *F*
1 Strip Mine
1 Sudden Shock *F*
1 Survivors' Encampment *F*
1 Tangle Wire *F*
1 Thorn of Amethyst *F*
1 Torpor Orb *F*
1 Treasure Vault *F*
1 Universal Automaton *E*
1 Unlicensed Hearse *F*
1 Urza's Saga *F*
1 Vandalblast *F*
1 Winter Orb
1 Xorn *F*`);

removeFoil(
  `"1 Abrade  \n1 Academy Manufactor  \n1 Adaptive Automaton  \n1 Ancient Tomb\n1 Axgard Cavalry  \n1 Barbarian Ring  \n1 Blood Moon\n1 Bloodfire Dwarf  \n1 Bloodline Pretender  \n1 Bogardan Hellkite  \n1 Cavern of Souls  \n1 Chrome Mox  \n1 Clock of Omens  \n1 Clown Car  \n1 Command Beacon  \n1 Cursed Mirror\n1 Damping Sphere  \n1 Deflecting Swat\n1 Delayed Blast Fireball  \n1 Dockside Extortionist\n1 Dwarven Armorer\n1 Dwarven Bloodboiler  \n1 Dwarven Grunt  \n1 Dwarven Scorcher  \n1 Dwarven Trader\n1 Elixir of Immortality  \n1 Enslaved Dwarf  \n1 Fork\n1 Fraying Line  \n1 Galvanic Blast  \n1 Gemstone Caverns  \n1 God-Pharaoh's Statue  \n1 Grafdigger's Cage  \n1 Great Furnace  \n1 High-Speed Hoverbike  \n1 Holdout Settlement  \n1 Jeska's Will  \n1 Jeweled Lotus  \n1 Liberated Dwarf  \n1 Lightning Bolt  \n1 Lightning Greaves  \n1 Liquimetal Coating  \n1 Liquimetal Torque  \n1 Lotus Petal\n1 Mana Crypt  \n1 Maskwood Nexus  \n1 Memory Jar  \n1 Metallic Mimic  \n1 Mighty Servant of Leuk-o  \n1 Mirror of the Forebears\n1 Mizzium Mortars  \n14 Mountain  \n1 Mox Amber  \n1 Mox Diamond\n1 Mox Opal  \n1 Mutavault  \n1 Professional Face-Breaker  \n1 Proteus Machine  \n1 Pyrokinesis  \n1 Ragavan, Nimble Pilferer\n1 Red Elemental Blast\n1 Rite of Flame  \n1 Sculpting Steel  \n1 Shinka, the Bloodsoaked Keep  \n1 Shredded Sails  \n1 Simian Spirit Guide  \n1 Smuggler's Copter  \n1 Sokenzan, Crucible of Defiance\n1 Sol Ring  \n1 Spark Mage  \n1 Sphere of Resistance\n1 Spine of Ish Sah  \n1 Springleaf Drum  \n1 Strip Mine\n1 Sudden Shock  \n1 Survivors' Encampment  \n1 Tangle Wire  \n1 Thorn of Amethyst  \n1 Torpor Orb  \n1 Treasure Vault  \n1 Universal Automaton   \n1 Unlicensed Hearse  \n1 Urza's Saga  \n1 Vandalblast  \n1 Winter Orb\n1 Xorn  "`
);
