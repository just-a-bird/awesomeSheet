var featsData = (function() {

  var _all_featsObject = null;

  function get(options) {
    var defaultOptions = {
      all: null,
      name: null,
      index: null,
      full: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var all_featName = [
      "Ability Focus",
      "Abundant Revelations",
      "Accursed",
      "Accursed Critical",
      "Accursed Hex",
      "Accursed Hex",
      "Acrobatic",
      "Acrobatic",
      "Acrobatic Steps",
      "Adaptive Fortune",
      "Adder Strike",
      "Additional Traits",
      "Adept Champion",
      "Adept Channel",
      "Advanced Defensive Combat Training",
      "Advanced Ranger Trap",
      "Agile Maneuvers",
      "Agile Tongue",
      "Airy Step",
      "Aldori Dueling Mastery",
      "Alertness",
      "Alertness",
      "Alignment Channel",
      "Alignment Channel",
      "Allied Spellcaster",
      "Altitude Affinity",
      "Amateur Gunslinger",
      "Ammo Drop",
      "Amplified Rage",
      "Ancestral Scorn",
      "Ancient Draconic",
      "Andoren Falconry",
      "Angel Wings",
      "Angelic Blood",
      "Angelic Flesh",
      "Animal Affinity",
      "Animal Affinity",
      "Animal Ally",
      "Ankle Biter",
      "Antagonize",
      "Apotheosis",
      "Aquatic Ancestry",
      "Arc Slinger",
      "Arcane Armor Mastery",
      "Arcane Armor Training",
      "Arcane Armor Training",
      "Arcane Blast",
      "Arcane Blast",
      "Arcane Insight",
      "Arcane School Spirit",
      "Arcane Shield",
      "Arcane Shield",
      "Arcane Strike",
      "Arcane Strike",
      "Arcane Talent",
      "Arcane Trap Suppressor",
      "Arcane Vendetta",
      "Archon Diversion",
      "Archon Justice",
      "Archon Style",
      "Arisen",
      "Armor of the Pit",
      "Artifact Hunter",
      "Ascendant Spell",
      "Aspect of the Beast",
      "Aspect Of The Beast",
      "Atheist Abjurations",
      "Athletic",
      "Athletic",
      "Attuned to the Wild",
      "Augment Summoning",
      "Augment Summoning",
      "Aversion Tolerance",
      "Awesome Blow",
      "Babau Rogue Talent",
      "Babble-Peddler",
      "Back to Back",
      "Banishing Critical",
      "Banner of Doom",
      "Bashing Finish",
      "Bat Shape",
      "Battle Singer",
      "Battlefield Healer",
      "Bear Hug",
      "Beartrap Bite",
      "Beast Rider",
      "Belier's Bite",
      "Bend With The Wind",
      "Bestow Hope",
      "Bestow Luck",
      "Betrayer",
      "Betraying Blow",
      "Bewildering Koan",
      "Binding Throw",
      "Black Cat",
      "Blazing Aura",
      "Bleeding Critical",
      "Bleeding Critical",
      "Blessed",
      "Blighted Critical",
      "Blighted Critical Mastery",
      "Blind-Fight",
      "Blind-Fight",
      "Blinding Critical",
      "Blinding Flash",
      "Blinding Light",
      "Blinding Sneak Attack",
      "Blistering Feint",
      "Bloatmage Initiate",
      "Blood Beak",
      "Blood Drinker",
      "Blood Feaster",
      "Blood Of Heroes",
      "Blood Salvage",
      "Blood Ties",
      "Blood Vengeance",
      "Blood Vengeance",
      "Bloodletting",
      "Bloodmarked Flight",
      "Bloodstone Manhunter",
      "Bloody Assault",
      "Bloody Vengeance",
      "Blowout Shot Deed",
      "Bludgeoner",
      "Blundering Defense",
      "Boar Ferocity",
      "Boar Shred",
      "Boar Style",
      "Body Control",
      "Body Mastery",
      "Body Shield",
      "Bodyguard",
      "Bolstered Resilience",
      "Bonebreaker",
      "Boon Companion",
      "Born Alone",
      "Bouncing Spell",
      "Bounding Hammer",
      "Branded for Retribution",
      "Breadth of Experience",
      "Break Guard",
      "Brew Potion",
      "Brewmaster",
      "Broken Wing Gambit",
      "Brutal Grappler",
      "Bull Rush Strike",
      "Bullseye Shot",
      "Bullying Blow",
      "Burn! Burn! Burn!",
      "Burning Spell",
      "Burrowing Teeth",
      "Butterfly's Sting",
      "Calm Disposition",
      "Careful Speaker",
      "Carrion Feeder",
      "Cartwheel Dodge",
      "Casual Illusionist",
      "Catch Off-Guard",
      "Catch Off-Guard",
      "Catfolk Exemplar",
      "Caustic Slur",
      "Cautious Fighter",
      "Cavalry Formation",
      "Celestial Obedience",
      "Celestial Servant",
      "Center Of Power",
      "Chainbreaker",
      "Champion",
      "Channel Force",
      "Channel Smite",
      "Channel Smite",
      "Channeled Revival",
      "Channeled Shield Wall",
      "Channeling Scourge",
      "Charge of the Righteous",
      "Charge Through",
      "Charge Through",
      "Charging Hurler",
      "Childlike",
      "Chokehold",
      "Circling Offense",
      "Claw Pounce",
      "Cleave",
      "Cleave",
      "Cleave Through",
      "Cleaving Finish",
      "Close Call",
      "Close-Quarters Thrower",
      "Cloud Gazer",
      "Cloud Step",
      "Cloven Helm",
      "Clustered Shots",
      "Coaxing Spell",
      "Cockatrice Strike",
      "Cold Celerity",
      "Collective Recollection",
      "Combat Casting",
      "Combat Distraction",
      "Combat Expertise",
      "Combat Expertise",
      "Combat Medic",
      "Combat Meditation",
      "Combat Patrol",
      "Combat Reflexes",
      "Combat Reflexes",
      "Combat Style Master",
      "Command Undead",
      "Command Undead",
      "Concussive Spell",
      "Consecrate Spell",
      "Consume Undeath",
      "Contingent Channeling",
      "Conviction",
      "Cooperative Crafting",
      "Coordinated Charge",
      "Coordinated Defense",
      "Coordinated Distraction",
      "Coordinated Maneuvers",
      "Cornugon Shield",
      "Cornugon Smash",
      "Cornugon Stun",
      "Cornugon Trip",
      "Cosmopolitan",
      "Courage In Numbers",
      "Courageous Resolve",
      "Covering Defense",
      "Covering Shield",
      "Craft Construct",
      "Craft Magic Arms and Armor",
      "Craft Rod",
      "Craft Staff",
      "Craft Wand",
      "Craft Wondrous Item",
      "Crane Riposte",
      "Crane Style",
      "Crane Wing",
      "Create Reliquary Arms and Shields",
      "Create Sanguine Elixir",
      "Crippling Critical",
      "Crisis Of Conscience",
      "Critical Conduit",
      "Critical Focus",
      "Critical Focus",
      "Critical Mastery",
      "Critical Mastery",
      "Critical Versatility",
      "Crossbow Mastery",
      "Crusader's Fist",
      "Crusader's Flurry",
      "Crushing Blow",
      "Cursed Item Detection",
      "Cut Your Losses",
      "Cypher Magic",
      "Cypher Script",
      "Damned",
      "Damned",
      "Dampen Presence",
      "Dark Sight",
      "Darting Viper",
      "Dastardly Finish",
      "Dastardly Finish",
      "Dauntless Destiny",
      "Dazing Assault",
      "Dazing Spell",
      "Dazzling Display",
      "Dazzling Display",
      "Deadly Aim",
      "Deadly Aim",
      "DEADLY DEALER",
      "Deadly Finish",
      "Deadly Stroke",
      "Deadly Stroke",
      "Deafening Critical",
      "Deafening Explosion",
      "Death from Above",
      "Death From Above",
      "Death Frombelow",
      "Death or Glory",
      "Death's Suitor",
      "Deathless Initiate",
      "Deathless Master",
      "Deathless Zealot",
      "Deceitful",
      "Deceitful",
      "Deceptive Exchange",
      "Deep Drinker",
      "Deepsight",
      "Deepsight",
      "Defending Eidolon",
      "Defensive Combat Training",
      "Defensive Combat Training",
      "Defensive Weapon Training",
      "Defiant Luck",
      "Deflect Arrows",
      "Deflect Arrows",
      "Deft Hands",
      "Deft Hands",
      "Deft Shootist Deed",
      "Demon Grafter",
      "Demon Hunter",
      "Demonic Nemesis",
      "Demonic Obedience",
      "Demonic Possession",
      "Demonologist",
      "Demoralizing Lash",
      "Dented Helm",
      "Deny Death",
      "Deny The Reaper",
      "Dervish Dance",
      "Desert Dweller",
      "Desperate Battler",
      "Desperate Swing",
      "Destroy Identity",
      "Destroyer's Blessing",
      "Destroyer's Blessing",
      "Destructive Dispel",
      "Detect Expertise",
      "Detect Expertise",
      "Devastating Strike",
      "Devil's Foe",
      "Die for Your Master",
      "Diehard",
      "Dimensional Agility",
      "Dimensional Assault",
      "Dimensional Dervish",
      "Dimensional Maneuvers",
      "Dimensional Savant",
      "Dire Bat Shape",
      "Dirty Trick Master",
      "Disarming Strike",
      "Disassemble Magic Item",
      "Discerning Eye",
      "Discordant Voice",
      "Disengaging Feint",
      "Disengaging Flourish",
      "Disengaging Shot",
      "Disorienting Blow",
      "Disorienting Maneuver",
      "Dispel Synergy",
      "Dispelling Critical",
      "Dispelling Fist",
      "Disposable Weapon",
      "Disrupting Shot",
      "Disruptive",
      "Disruptive",
      "Disruptive Recall",
      "Disruptive Spell",
      "Distance Thrower",
      "Distance Thrower",
      "Diverse Palate",
      "Divert Harm",
      "Divination Guide",
      "Divine Deception",
      "Divine Defiance",
      "Divine Denouncer",
      "Divine Interference",
      "Divine Interference",
      "Diviner's Delving",
      "Djinni Spin",
      "Djinni Spirit",
      "Djinni Style",
      "Dodge",
      "Dodge",
      "Dog Killer, Horse Hunter",
      "Dog-Sniff-Hate",
      "Domain Strike",
      "Dorn-Dergar Master",
      "Double Bane",
      "Double Slice",
      "Draconic Aspect",
      "Draconic Breath",
      "Draconic Glide",
      "Draconic Paragon",
      "Drag Down",
      "Dragon Ferocity",
      "Dragon Roar",
      "Dragon Style",
      "Dragonbane Aura",
      "Dragoncrafting",
      "Dragonheart",
      "Dragonslayer",
      "Dramatic Display",
      "Dreadful Carnage",
      "Dreadful Carnage",
      "Drink Is Life",
      "Drow Nobility",
      "Druidic Decoder",
      "Drunken Brawler",
      "Dual Path",
      "Duck and Cover",
      "Dwarf Blooded",
      "Dynasty Founder",
      "Eagle Eyes",
      "Eagle Eyes",
      "Eagle Knight Candidate",
      "Earth Child Binder",
      "Earth Child Style",
      "Earth Child Topple",
      "Echoes of Stone",
      "Echoing Spell",
      "Eclectic",
      "Ectoplasmic Spell",
      "Efreeti Stance",
      "Efreeti Style",
      "Efreeti Touch",
      "Eldritch Claws",
      "Eldritch Heritage",
      "Eldritch Heritage",
      "Eldritch Researcher",
      "Elemental Channel",
      "Elemental Channel",
      "Elemental Fist",
      "Elemental Fist",
      "Elemental Focus",
      "Elemental Focus",
      "Elemental Jaunt",
      "Elemental Spell",
      "Elephant Stomp",
      "Elusive Redirection",
      "Elven Accuracy",
      "Elven Accuracy",
      "Elven Battle Training",
      "Elven Spirit",
      "Emergency Attunement",
      "Empower Spell",
      "Empower Spell-Like Ability",
      "Endurance",
      "Endurance",
      "Enfilading Fire",
      "Enforcer",
      "Enhanced Ki Throw",
      "Enlarge Spell",
      "Ensemble",
      "Equipment Trick",
      "Escape Route",
      "Eschew Materials",
      "Eschew Materials",
      "Esoteric Advantage",
      "Evolved Familiar",
      "Exhausting Critical",
      "Exile's Path",
      "Exorcist's Rebuttal",
      "Exotic Weapon Proficiency",
      "Expanded Arcana",
      "Expanded Fiendish Resistance",
      "Expanded Resistance",
      "Expert Driver",
      "Expert Trainer",
      "Exploit Lore",
      "Explorer",
      "Extend Spell",
      "Extend The Bulwark",
      "Extended Bane",
      "Extra Arcana",
      "Extra Arcane Pool",
      "Extra Bane",
      "Extra Bombs",
      "Extra Cantrips or Orisons",
      "Extra Channel",
      "Extra Discovery",
      "Extra Elemental Assault",
      "Extra Evolution",
      "Extra Feature",
      "Extra Grit",
      "Extra Hex",
      "Extra Item Slot",
      "Extra Ki",
      "Extra Lay On Hands",
      "Extra Mercy",
      "Extra Mythic Power",
      "Extra Path Ability",
      "Extra Performance",
      "Extra Rage",
      "Extra Rage Power",
      "Extra Ranger Trap",
      "Extra Revelation",
      "Extra Rogue Talent",
      "Extra Summons",
      "Eye of the Arclord",
      "Eyes of Judgment",
      "Fabulist",
      "Fabulous Figments",
      "False Casting",
      "False Focus",
      "False Opening",
      "Familiar Focus",
      "Familiar Spell",
      "Famine Tolerance",
      "Far Shot",
      "Far Shot",
      "Fast Change",
      "Fast Crawl",
      "Fast Drinker",
      "Fast Empathy",
      "Fast Empathy",
      "Fast Healer",
      "Fast Learner",
      "Favored Defense",
      "Favored Judgment",
      "Fearless Aura",
      "Fearless Curiosity",
      "Fearless Zeal",
      "Fearsome Barricade",
      "Fearsome Finish",
      "Feint Partner",
      "Feinting Flurry",
      "Feline Grace",
      "Felling Escape",
      "Felling Smash",
      "Feral Combat Training",
      "Feral Heart",
      "Ferocious Action",
      "Ferocious Loyalty",
      "Ferocious Resolve",
      "Ferocious Summons",
      "Ferocious Tenacity",
      "Ferocious Tenacity",
      "Ferocious Tenacity",
      "Fey Foundling",
      "Field Repair",
      "Fiend Sight",
      "Fiendish Darkness",
      "Fiendish Facade",
      "Fiendish Resilience",
      "Fight On",
      "Final Embrace",
      "Final Embrace Horror",
      "Final Embrace Master",
      "Fire God's Blessing",
      "Fire Hand",
      "Fire Music",
      "Fire Music",
      "Fire Tamer",
      "Firebrand",
      "Firesight",
      "Flagbearer",
      "Flame Heart",
      "Flanking Foil",
      "Flaring Spell",
      "Flaying Critical",
      "Fleet",
      "Fleet",
      "Flensing Strike",
      "Flyby Attack",
      "Focused Disbelief",
      "Focused Discipline",
      "Focused Eidolon",
      "Focused Overseer",
      "Focused Shot",
      "Focused Spell",
      "Focused Worker",
      "Focusing Blow",
      "Foeslayer",
      "Foeslayer",
      "Following Step",
      "Foment the Blood",
      "Footslasher",
      "Forge Ring",
      "Forgotten Past",
      "Fortified Armor Training",
      "Fortunate Manager",
      "Fortunate One",
      "Fortunate Ruler",
      "Fortune Teller",
      "Free Spirit",
      "Friend To Animals",
      "Furious Finish",
      "Furious Focus",
      "Furious Focus",
      "Fury of the Tainted",
      "Fury's Fall",
      "Fury's Snare",
      "Gang Up",
      "Giant Killer",
      "Giant Steps",
      "Gliding Steps",
      "Glimpse Beyond",
      "Gloom Sight",
      "Gloom Strike",
      "Glorious Heat",
      "Gnome Trickster",
      "Gnome Trickster",
      "Gnome Weapon Focus",
      "Go Unnoticed",
      "Goblin Cleaver",
      "Goblin Gunslinger",
      "Godless Healing",
      "Gore Fiend",
      "Gore Fiend",
      "Gorgon's Fist",
      "Gorgon's Fist",
      "Gory Finish",
      "Grand Master Performer",
      "Grant Initiative",
      "Grasping Tail",
      "Great Cleave",
      "Great Fortitude",
      "Great Fortitude",
      "Great Hatred",
      "Greater Blighted Critical",
      "Greater Blind-Fight",
      "Greater Bull Rush",
      "Greater Channel Force",
      "Greater Channel Smite",
      "Greater Dirty Trick",
      "Greater Disarm",
      "Greater Drag",
      "Greater Drow Nobility",
      "Greater Eldritch Heritage",
      "Greater Elemental Focus",
      "Greater Feint",
      "Greater Grapple",
      "Greater Mercy",
      "Greater Overrun",
      "Greater Penetrating Strike",
      "Greater Rending Fury",
      "Greater Reposition",
      "Greater Serpent Lash",
      "Greater Shield Focus",
      "Greater Shield Specialization",
      "Greater Snap Shot",
      "Greater Spell Focus",
      "Greater Spell Penetration",
      "Greater Spell Specialization",
      "Greater Steal",
      "Greater Sunder",
      "Greater Trip",
      "Greater Two-Weapon Fighting",
      "Greater Vital Strike",
      "Greater Weapon Focus",
      "Greater Weapon Specialization",
      "Greater Whip Mastery",
      "Greater Wild Empathy",
      "Green Faith Acolyte",
      "Groundling",
      "Grudge Fighter",
      "Guardian of the Wild",
      "Guided Hand",
      "Guided Hand",
      "Gun Twirling",
      "Gunsmithing",
      "Half-Drow Paragon",
      "Halfling Slinger",
      "Hamatula Grasp",
      "Hamatula Strike",
      "Hamatulatsu",
      "Hammer the Gap",
      "Hard-Headed",
      "Harmonic Sage",
      "Harmonic Spell",
      "Harrowed",
      "Haunted Gnome",
      "Haunted Gnome Assault",
      "Haunted Gnome Shroud",
      "Heavenly Radiance",
      "Heavy Armor Proficiency",
      "Heighten Spell",
      "Hellcat Pounce",
      "Hellcat Stealth",
      "Helpless Prisoner",
      "Hermean Blood",
      "Hero's Display",
      "Hero's Fortune",
      "Heroic Defiance",
      "Heroic Defiance",
      "Heroic Recovery",
      "Heroic Recovery",
      "Heroic Will",
      "Hex Strike",
      "Hobgoblin Discipline",
      "Hold the Blade",
      "Horde Charge",
      "Horn Of The Criosphinx",
      "Horse Master",
      "Hover",
      "Human Spirit",
      "Huntmaster",
      "Hydraulic Maneuver",
      "Hymn Singer",
      "Iconoclast",
      "Impact Critical Shot",
      "Impaling Critical",
      "Implant Bomb",
      "Improved Back to Back",
      "Improved Blind-Fight",
      "Improved Bull Rush",
      "Improved Bull Rush",
      "Improved Channel",
      "Improved Channel",
      "Improved Channel Force",
      "Improved Charging Hurler",
      "Improved Cleaving Finish",
      "Improved Counterspell",
      "Improved Counterspell",
      "Improved Critical",
      "Improved Critical",
      "Improved Dark Sight",
      "Improved Day Job",
      "Improved Death-Stealing",
      "Improved Devastating Strike",
      "Improved Dirty Trick",
      "Improved Dirty Trick",
      "Improved Disarm",
      "Improved Disarm",
      "Improved Drag",
      "Improved Drag",
      "Improved Drow Nobility",
      "Improved Eldritch Heritage",
      "Improved Familiar",
      "Improved Familiar",
      "Improved Feint",
      "Improved Feint Partner",
      "Improved Feinting Flurry",
      "Improved Fiendish Darkness",
      "Improved Fiendish Sorcery",
      "Improved Fury of the Tainted",
      "Improved Grapple",
      "Improved Grapple",
      "Improved Great Fortitude",
      "Improved Impaling Critical",
      "Improved Improvisation",
      "Improved Infuse Weapon",
      "Improved Initiative",
      "Improved Initiative",
      "Improved Iron Will",
      "Improved Ki Throw",
      "Improved Learn Ranger Trap",
      "Improved Lightning Reflexes",
      "Improved Low Blow",
      "Improved Monster Lore",
      "Improved Natural Armor",
      "Improved Natural Attack",
      "Improved Overrun",
      "Improved Overrun",
      "Improved Possession",
      "Improved Precise Shot",
      "Improved Rending Fury",
      "Improved Reposition",
      "Improved Reposition",
      "Improved Second Chance",
      "Improved Share Spells",
      "Improved Shield Bash",
      "Improved Sidestep",
      "Improved Snap Shot",
      "Improved Stalwart",
      "Improved Steal",
      "Improved Steal",
      "Improved Stench",
      "Improved Stonecunning",
      "Improved Stonecunning",
      "Improved Sunder",
      "Improved Sunder",
      "Improved Surprise Follow-Through",
      "Improved Trip",
      "Improved Trip",
      "Improved Two-Weapon Feint",
      "Improved Two-Weapon Fighting",
      "Improved Umbral Scion",
      "Improved Unarmed Strike",
      "Improved Unarmed Strike",
      "Improved Underhanded Teamwork",
      "Improved Vital Strike",
      "Improved Whip Mastery",
      "Improvisation",
      "Improvised Weapon Mastery",
      "In Harm's Way",
      "Incremental Elemental Assault",
      "Inexplicable Luck",
      "Inner Breath",
      "Inner Flame",
      "Inner Light",
      "Innocent Blood",
      "Inscribe Magical Tattoo",
      "Insightful Gaze",
      "Inspirational Commander",
      "Instant Judgment",
      "Intensified Spell",
      "Intimidating Bane",
      "Intimidating Confidence",
      "Intimidating Gaze",
      "Intimidating Prowess",
      "Intimidating Prowess",
      "Invoke Primal Instinct",
      "Iron Will",
      "Iron Will",
      "Ironguts",
      "Ironhide",
      "Jackal Heritage",
      "Jaguar Pounce",
      "Janni Rush",
      "Janni Style",
      "Janni Tempest",
      "Jawbreaker",
      "Judgment Surge",
      "Juggle Load",
      "Jumper",
      "Keen Scent",
      "Ki Diversity",
      "Ki Stand",
      "Ki Throw",
      "Kirin Path",
      "Kirin Strike",
      "Kirin Style",
      "Knockout Artist",
      "Knockout Artist",
      "Kobold Ambusher",
      "Kobold Confidence",
      "Kobold Flood",
      "Kobold Groundling",
      "Kobold Sniper",
      "Kobold Style",
      "Landing Roll",
      "Large Target",
      "Lastwall Phalanx",
      "LastwallPhalanx",
      "Lead from the Back",
      "Leadership",
      "Leaf Singer",
      "Leaping Shot Deed",
      "Learn Ranger Trap",
      "Learn Ranger Trap",
      "Ledge Walker",
      "Legacy of Ozem",
      "Legendary Teamwork",
      "Let Them Come",
      "Letter Fury",
      "Liberator",
      "Liberator",
      "Life Lure",
      "Life-Dominant Soul",
      "Life's Blood",
      "Light Armor Proficiency",
      "Light Step",
      "Lightning Reflexes",
      "Lightning Reflexes",
      "Lightning Stance",
      "Lingering Invisibility",
      "Lingering Performance",
      "Lingering Spell",
      "Lithe Attacker",
      "Long-Nose Form",
      "Lookout",
      "Lost Legacy",
      "Low Profile",
      "Luck Of Heroes",
      "Lucky Halfling",
      "Lucky Halfling",
      "Lucky Healer",
      "Lucky Strike",
      "Lucky Surge",
      "Lunge",
      "Lunge",
      "Mage of the Wild",
      "Magical Aptitude",
      "Magical Aptitude",
      "Magical Tail",
      "Magnum Opus",
      "Major Spell Expertise",
      "Mantis Style",
      "Mantis Torment",
      "Mantis Wisdom",
      "Manyshot",
      "Manyshot",
      "Marid Coldsnap",
      "Marid Spirit",
      "Marid Style",
      "Marked For Glory",
      "Martial Mastery",
      "Martial Versatility",
      "Martial Weapon Proficiency",
      "Master Alchemist",
      "Master Combat Performer",
      "Master Craftsman",
      "Master ofYour Kind",
      "Master Performer",
      "Master Siege Engineer",
      "Masterful Display",
      "Maximize Spell",
      "Maximize Surge",
      "Maximized Spellstrike",
      "Measured Response",
      "Meditation Master",
      "Meditative Concentration",
      "Medium Armor Proficiency",
      "Medusa's Wrath",
      "Medusa's Wrath",
      "Menacing Bane",
      "Merciful Bane",
      "Merciful Spell",
      "Merciless Magic",
      "Merciless Precision",
      "Merciless Rush",
      "Metallic Wings",
      "Minor Spell Expertise",
      "Missile Shield",
      "Missile Shield",
      "Mixed Scales",
      "Mobility",
      "Mobility",
      "Mocking Dance",
      "Monastic Legacy",
      "Monastic Legacy",
      "Monkey Lunge",
      "Monkey Moves",
      "Monkey Shine",
      "Monkey Style",
      "Monstrous Mask",
      "Monument Builder",
      "Moonlight Stalker",
      "Moonlight Stalker Feint",
      "Moonlight Stalker Master",
      "Moonlight Summons",
      "Mother's Gift",
      "Motivating Display",
      "Mounted Archery",
      "Mounted Archery",
      "Mounted Blade",
      "Mounted Combat",
      "Mounted Combat",
      "Mounted Shield",
      "Mounted Skirmisher",
      "Multiattack",
      "Multitalented Mastery",
      "Multiweapon Defense",
      "Multiweapon Fighting",
      "Multiweapon Specialist",
      "Murderer's Circle",
      "Murmurs of Earth",
      "Mystic Stride",
      "Mythic Companion",
      "Mythic Crafter",
      "Mythic Paragon",
      "Mythic Spell Lore",
      "Named Bullet",
      "Nameless Servitor",
      "Narrow Frame",
      "Nation Builder",
      "Natural Charmer",
      "Natural Jouster",
      "Natural Ruler",
      "Natural Spell",
      "Natural Spell",
      "Nature Soul",
      "Neckbreaker",
      "Necromantic Affinity",
      "Neither Elf nor Human",
      "Nemesis",
      "Net Adept",
      "Net and Trident",
      "Net Maneuvering",
      "Net Trickery",
      "Nightmare Fist",
      "Nightmare Striker",
      "Nightmare Weaver",
      "Nimble Moves",
      "Nimble Moves",
      "Nimble Natural Summons",
      "Nimble Striker",
      "No Name",
      "Noble Scion",
      "Noble Spell Resistance",
      "Object Of Legend",
      "Old Cults Awakener",
      "Ominous Mien",
      "Opening Volley",
      "Oracular Intuition",
      "Orc Hewer",
      "Orc Weapon Expertise",
      "Ordered Mind",
      "Oread Burrower",
      "Oread Earth Glider",
      "Osirionology",
      "Ostentatious Display",
      "Osyluth Guile",
      "Out Of The Sun",
      "Outer Planes Traveler",
      "Outflank",
      "Overwhelm",
      "Pack Attack",
      "Painful Anchor",
      "Paired Opportunists",
      "Panther Claw",
      "Panther Parry",
      "Panther Style",
      "Parry Spell",
      "Parting Shot",
      "Pass For Human",
      "Passing Trick",
      "Patient Strike",
      "Peacemaker",
      "Penetrating Possession",
      "Penetrating Strike",
      "Penetrating Strike",
      "Perfect Awareness",
      "Perfect Center",
      "Perfect Strike",
      "Performance Weapon Mastery",
      "Performing Combatant",
      "Persistent Spell",
      "Persuasive",
      "Persuasive",
      "Piercing Spell",
      "Pin Down",
      "Pinning Knockout",
      "Pinning Rend",
      "Pinpoint Poisoner",
      "Pinpoint Targeting",
      "Pinpoint Targeting",
      "Piranha Strike",
      "Planar Hunter",
      "Planar Preservationist",
      "Planar Traveler",
      "Planar Wild Shape",
      "Planned Spontaneity",
      "Point Blank Master",
      "Point-Blank Shot",
      "Point-Blank Shot",
      "Porcupine Defense",
      "Potent HolySymbol",
      "Potent Surge",
      "Power Attack",
      "Power Attack",
      "Powerful Shape",
      "Powerful Shape",
      "Practiced Leadership",
      "Practiced Tactician",
      "Precise Shot",
      "Precise Strike",
      "Precocious Youth",
      "Preferred Spell",
      "Prodigy",
      "Prone Shooter",
      "Prone Slinger",
      "Prophet",
      "Prophet",
      "Prophetic Visionary",
      "Prophetic Visionary",
      "Protector's Strike",
      "Punch Through",
      "Pungent Stench",
      "Punishing Kick",
      "Pure Faith",
      "Pushing Assault",
      "Quarterstaff Master",
      "Quick Bull Rush",
      "Quick Channel",
      "Quick Dirty Trick",
      "Quick Drag",
      "Quick Draw",
      "Quick Draw",
      "Quick Preparation",
      "Quick Reposition",
      "Quick Steal",
      "Quick Wild Shape",
      "Quicken Spell",
      "Quicken Spell-Like Ability",
      "Quillbreaker Defense",
      "Quivering Palm Adept",
      "Quivering Palm Versatility",
      "Racial Heritage",
      "Racial Heritage",
      "Radiant Charge",
      "Raging Brutality",
      "Raging Deathblow",
      "Raging Hurler",
      "Raging Throw",
      "Raging Vitality",
      "Rapid Grappler",
      "Rapid Reload",
      "Rapid Reload",
      "Rapid Shot",
      "Rapid Shot",
      "Ray Shield",
      "Razortusk",
      "Reach Defense",
      "Reach Spell",
      "Realistic Likeness",
      "Rebounding Leap",
      "Rebuffing Reduction",
      "Reckless Aim",
      "Redeemed Kobold",
      "Redemption",
      "Reject Poison",
      "Remote Bomb",
      "Rending Claws",
      "Rending Fury",
      "Renown",
      "Repositioning Strike",
      "Resilient Brute",
      "Resilient Eidolon",
      "Resolute Rager",
      "Revelation Strike",
      "Revered Guidance",
      "Reverse-Feint",
      "Reward of Grace",
      "Reward of Life",
      "Rhetorical Flourish",
      "Rhetorical Flourish",
      "Rhino Charge",
      "Ricochet Shot Deed",
      "Ricochet Splash Weapon",
      "Ride-By Attack",
      "Ride-By Attack",
      "Righteous Healing",
      "Rime Spell",
      "Riptide Attack",
      "Risky Striker",
      "Roll With It",
      "Rugged Northerner",
      "Run",
      "Run",
      "Sacred Summons",
      "Saddle Shrieker",
      "Sap Adept",
      "Sap Master",
      "Savage Display",
      "Saving Shield",
      "Saving Shield",
      "Scaled Disciple",
      "Scavenger's Eye",
      "Scholar",
      "School Strike",
      "SchooledResolve",
      "Scorching Weapons",
      "Scorpion Style",
      "Scorpion Style",
      "Scribe Scroll",
      "Sea Hunter",
      "Sea Legs",
      "Second Chance",
      "Secret Signs",
      "Secret Stash Deed",
      "Seeds Ofdoubt",
      "Seen and Unseen",
      "Seize the Moment",
      "Selective Channeling",
      "Selective Channeling",
      "Selective Spell",
      "Self-Sufficient",
      "Self-Sufficient",
      "Sense Link",
      "Serpent Lash",
      "Shade of the Uskwood",
      "Shadow Caster",
      "Shadow Dodge",
      "Shadow Gambit",
      "Shadow Ghost",
      "Shadow Grasp",
      "Shadow Strike",
      "Shadow Walker",
      "Shadowy Dash",
      "Shaitan Earthblast",
      "Shaitan Skin",
      "Shaitan Style",
      "Shake It Off",
      "Shamed",
      "Shapeshifter Foil",
      "Shapeshifting Hunter",
      "Shaping Focus",
      "Shared Insight",
      "Shared Judgment",
      "Shared Manipulation",
      "Sharp Senses",
      "Sharpclaw",
      "Shatter Defenses",
      "Shatter Defenses",
      "Shatter Resolve",
      "Shatterspell",
      "Shield Focus",
      "Shield Focus",
      "Shield Master",
      "Shield of Swings",
      "Shield Proficiency",
      "Shield Slam",
      "Shield Slam",
      "Shield Snag",
      "Shield Specialization",
      "Shield Wall",
      "Shielded Caster",
      "Shot on the Run",
      "Shot On The Run",
      "Shrewd Tactician",
      "Sickening Critical",
      "Sickening Spell",
      "Sidestep",
      "Siege Commander",
      "Siege Engineer",
      "Siege Gunner",
      "Signature Deed",
      "Silent Performer",
      "Silent Spell",
      "Simple Weapon Proficiency",
      "Sin Seer",
      "Siphon Poison",
      "Skeleton Summoner",
      "Skill Focus",
      "Skill Focus",
      "Skilled Driver",
      "Slayer's Knack",
      "Slaying Sprint",
      "Sleep Venom",
      "Sleeper Hold",
      "Sliding Axe Throw",
      "Sling Flail",
      "Slow Time",
      "Small But Deadly",
      "Smash",
      "Smell Fear",
      "Snake Fang",
      "Snake Style",
      "Snap Shot",
      "Snapping Turtle Clutch",
      "Snapping Turtle Shell",
      "Snapping Turtle Style",
      "Snatch",
      "Snatch Arrows",
      "Snatch Arrows",
      "Sneaking Precision",
      "Snoutgrip",
      "Sociable",
      "Sociable",
      "Solo Maneuvers",
      "Sorcerous Bloodstrike",
      "Sorcerous Strike",
      "Spear Dancer",
      "Spell Bane",
      "Spell Bluff",
      "Spell Chain",
      "Spell Focus",
      "Spell Focus",
      "Spell Hex",
      "Spell Mastery",
      "Spell Mastery",
      "Spell Penetration",
      "Spell Penetration",
      "Spell Perfection",
      "Spell Specialization",
      "Spell Sponge",
      "Spellbreaker",
      "Spellbreaker",
      "Spellsong",
      "Spider Step",
      "Spider Step",
      "Spider Summoner",
      "Spiked Destroyer",
      "Spinning Throw",
      "Spirit of the Wild",
      "Spirit Vision",
      "Spirited Charge",
      "Spirited Charge",
      "Spit Venom",
      "Splintering Weapon",
      "Split Hex",
      "Split Major Hex",
      "Spontaneous Metafocus",
      "Spontaneous Metafocus",
      "Spring Attack",
      "Spring Attack",
      "Squash Flat",
      "Stabbing Shot",
      "Stable Gallop",
      "Stable Spell",
      "Stage Combatant",
      "Staggering Critical",
      "Stalwart",
      "Stance of the Xorn",
      "Stand Still",
      "Starlight Summons",
      "Steadfast Mind",
      "Steady Engagement",
      "Stealth Synergy",
      "Stealthy",
      "Stealthy",
      "Steam Caster",
      "Steel Soul",
      "Step Up",
      "Step Up and Strike",
      "Still Spell",
      "Stoic",
      "Stoic Pose",
      "Stone Read",
      "Stone Sense",
      "Stone Singer",
      "Stone-Faced",
      "Stony Step",
      "Storm-Lashed",
      "Strangler",
      "Stretched Wings",
      "Strike Back",
      "Strike Back",
      "Strong Comeback",
      "Strong Comeback",
      "Stronghold",
      "Stunning Assault",
      "Stunning Critical",
      "Stunning Fist",
      "Stunning Fist",
      "Stunning Fist Adept",
      "Stunning Pin",
      "Summoner's Call",
      "Sundering Strike",
      "Sunlight Summons",
      "Sunlit Strike",
      "Superior Summoning",
      "Supernal Feast",
      "Sure and Fleet",
      "Sure Grasp",
      "Sure-Footed",
      "Surge of Success",
      "Surprise Follow-Through",
      "Surprise Strike",
      "Surprising Combatant",
      "Survivor",
      "Swap Places",
      "Swarm Scatter",
      "Swarm Strike",
      "Swift Aid",
      "Sword and Pistol",
      "Sympathetic Rage",
      "Sympathetic Rage",
      "Tactical Reposition",
      "Tail Terror",
      "Taldan Duelist",
      "Talmandor's Lifting",
      "Tandem Trip",
      "Tandemevasion",
      "Tangle Feet",
      "Tantrum",
      "Tapestry Traveler",
      "Target of Opportunity",
      "Taskmaster",
      "Taunt",
      "Team Pickpocketing",
      "Team Up",
      "Teleport Tactician",
      "Tenacious Survivor",
      "Tenacious Transmutation",
      "Tenebrous Spell",
      "Tengu Raven Form",
      "Tengu Wings",
      "Terrifying Mask",
      "Terrorizing Display",
      "Thanatopic Spell",
      "Theurgy",
      "Thief Of Legend",
      "Thoughtful Discernment",
      "Threnodic Spell",
      "Thrill of the Kill",
      "Thrill of the Kill",
      "Throw Anything",
      "Throw Anything",
      "Thunder And Fang",
      "Thundering Spell",
      "Thuvian Grenadier",
      "Tiger Claws",
      "Tiger Pounce",
      "Tiger Style",
      "Tiring Critical",
      "Titan Strike",
      "Topple Foe",
      "Toppling Spell",
      "TORCH HANDLING",
      "Totem Spirit",
      "Touch of Serenity",
      "Touched By Sacred Fire",
      "Toughness",
      "Toughness",
      "Tower Shield Proficiency",
      "Town Tamer",
      "Toxic Recovery",
      "Toxic Stench",
      "Trample",
      "Trample",
      "Trap Wrecker",
      "Trapper's Setup",
      "Tree Hanger",
      "Tribal Scars",
      "Tribe Mentality",
      "Trick Riding",
      "Tripping Staff",
      "Tripping Staff",
      "Tripping Strike",
      "Tripping Twirl",
      "Triton Portal",
      "True Love",
      "Truth-Seeker",
      "Tunnel Rat",
      "Turn Undead",
      "Twin Thunders",
      "Twin Thunders Flurry",
      "Twin Thunders Master",
      "Two-Fisted Drinker",
      "Two-Handed Thrower",
      "Two-Weapon Defense",
      "Two-Weapon Defense",
      "Two-Weapon Feint",
      "Two-Weapon Fighting",
      "Two-Weapon Fighting",
      "Two-Weapon Rend",
      "Two-Weapon Rend",
      "Ultimate Mercy",
      "Ultimate Resolve",
      "Umbral Scion",
      "Umbral Spell",
      "Uncanny Activation",
      "Uncanny Alertness",
      "Uncanny Concentration",
      "Uncanny Defense",
      "Undead Master",
      "Undead Master",
      "Under and Over",
      "Underfoot",
      "Underhanded Teamwork",
      "Undermine",
      "Undermining Exploit",
      "Unforgotten",
      "Unsanctioned Detection",
      "Unsanctioned Knowledge",
      "Unseat",
      "Unseat",
      "Valiant Steed",
      "Valiant Vault",
      "VampiricCompanion",
      "Vandal",
      "Variant Prayer Scroll",
      "Varisian Tattoo",
      "Vast Hatred",
      "Vengeance",
      "Vengeful Banisher",
      "Verbose Performer",
      "Vermin Heart",
      "Versatile Channeler",
      "Versatile Spontaneity",
      "Vicious Stomp",
      "Vigilant Eidolon",
      "Violent Display",
      "Vital Strike",
      "Vital Strike",
      "Voice of the Sibyl",
      "Voice Of The Sibyl",
      "Wall Offlesh",
      "Wand Dancer",
      "War Singer",
      "Warleader's Rage",
      "Warrior Priest",
      "Warrior Priest",
      "Water Skinned",
      "Wave Strike",
      "Weapon Finesse",
      "Weapon Finesse",
      "Weapon Focus",
      "Weapon Focus",
      "Weapon Specialization",
      "Weapon Specialization",
      "Weather Eye",
      "Well-Prepared",
      "Whip Mastery",
      "Whip-Shot Deed",
      "Whip-Slinger",
      "Whirlwind Attack",
      "Whispered Knowledge",
      "Wicked Valor",
      "Widen Spell",
      "Wild Speech",
      "Wind Stance",
      "Wingclipper",
      "Wingover",
      "Wings of Air",
      "Wings Of The Androsphinx",
      "Witch Knife",
      "Witch Knife",
      "Witchbreaker",
      "Witty Feint",
      "Wolf Savage",
      "Wolf Style",
      "Wolf Trip",
      "Word of Healing",
      "Worldwound Walker"
    ];
    var mached = [];
    var _checkForFeatsName = function() {
      all_featName.forEach(function(arrayItem, index) {
        if (arrayItem.toLowerCase().includes(options.name.toLowerCase())) {
          var object = {
            index: index,
            name: arrayItem
          };
          mached.push(object);
        };
      });
    };
    if (options.name != null || options.index != null || options.all != null) {
      if (options.name != null) {
        _checkForFeatsName();
        if (mached.length > 0) {
          if (options.full != null) {
            return _get_featsObject({
              array: mached
            });
          } else {
            return mached;
          };
        } else {
          return false;
        };
      } else if (options.index != null) {
        return _get_featsObject({
          index: options.index
        });
      } else if (options.all != null) {
        return _all_featsObject;
      };
    } else {
      return false;
    };
  };

  function _get_featsObject(options) {
    var defaultOptions = {
      array: null,
      index: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    var _findSpells = function() {
      if (options.array != null) {
        var spellsObject = [];
        options.array.forEach(function(arrayItem) {
          spellsObject.push(_all_featsObject[arrayItem.index]);
        });
        return spellsObject;
      } else if (options.index != null) {
        return _all_featsObject[options.index];
      } else {
        return false;
      };
    };
    if (_all_featsObject != null) {
      return _findSpells();
    } else {
      return false;
    };
  };

  function load() {
    var _cleanUpFeatObject = function(arrayItem) {
      for (var key in arrayItem) {
        // console.log(key, arrayItem[key]);
      };
    };
    var _get_allfeats = function(data) {
      _all_featsObject = helper.csvToJSON(data);
      _all_featsObject.forEach(function(arrayItem) {
        _cleanUpFeatObject(arrayItem);
      });
      // console.log(_all_featsObject);
    };
    helper.loadCsv("db/feats.csv", function(data) {
      _get_allfeats(data);
    });
  };

  // exposed methods
  return {
    load: load,
    get: get
  };

})();