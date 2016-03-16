var ro = (function() {

  var data = {
    clone: {
      attack: [{
        weapon: "Rapier",
        attack: "5",
        damage: "1d6+1",
        critical: "18–20/x2",
        range: "",
        ammo: ""
      }, {
        weapon: "Shortbow",
        attack: "5",
        damage: "1d6",
        critical: "x3",
        range: "60 ft",
        ammo: "50"
      }],
      consumable: [{
        item: "Arcane Pool",
        total: "4",
        used: "1"
      }]
    },
    input: {
      name: "Ro Flint",
      race: "Elf",
      class: "Magus",
      level: "2",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "1,971",
      height: "6'0",
      weight: "",
      age: "120 years",
      gender: "Male",
      speed: "30 feet/6 squares",
      initiative: "4",
      platinum: "",
      gold: "570",
      silver: "",
      copper: "",
      hero_points: "",
      luck_points: "",
      stat_str: "12",
      stat_dex: "18",
      stat_con: "10",
      stat_int: "16",
      stat_wis: "10",
      stat_cha: "7",
      light_load: "43 lbs or less",
      medium_load: "44–86 lbs",
      heavy_load: "87–130 lbs",
      stat_str_temp: "",
      stat_dex_temp: "",
      stat_con_temp: "",
      stat_int_temp: "",
      stat_wis_temp: "",
      stat_cha_temp: "",
      body_slot_armor: "Studded leather",
      body_slot_belts: "",
      body_slot_body: "",
      body_slot_chest: "",
      body_slot_eyes: "",
      body_slot_feet: "",
      body_slot_hands: "",
      body_slot_head: "",
      body_slot_headband: "",
      body_slot_neck: "",
      body_slot_ring_left_hand: "",
      body_slot_ring_right_hand: "",
      body_slot_shield: "",
      body_slot_shoulders: "",
      body_slot_wrist: "",
      hp: "14",
      temp_hp: "",
      current_hp: "14",
      current_non_lethal_hp: "",
      ac_misc: "",
      ac_temp: "",
      ac_flat_footed_misc: "",
      ac_flat_footed_temp: "",
      ac_touch_misc: "",
      ac_touch_temp: "",
      ac_armor: "3",
      ac_shield: "",
      ac_deflect: "",
      ac_dodge: "",
      ac_natural: "",
      size_bonus: "",
      fortitude_base: "3",
      fortitude_racial: "",
      fortitude_misc: "",
      fortitude_temp: "",
      reflex_base: "0",
      reflex_racial: "",
      reflex_misc: "",
      reflex_temp: "",
      will_base: "3",
      will_racial: "",
      will_misc: "",
      will_temp: "",
      cmb_misc: "",
      cmb_temp: "",
      cmd_misc: "",
      cmd_temp: "",
      melee_attack_misc: "",
      melee_attack_temp: "",
      ranged_attack_misc: "",
      ranged_attack_temp: "",
      base_attack: "1",
      special_size_bonus: "",
      concentration: "6",
      skill_acrobatics_ranks: "2",
      skill_acrobatics_misc: "",
      skill_appraise_ranks: "",
      skill_appraise_misc: "",
      skill_bluff_ranks: "",
      skill_bluff_misc: "",
      skill_climb_ranks: "",
      skill_climb_misc: "",
      skill_craft_ranks: "",
      skill_craft_misc: "",
      skill_diplomacy_ranks: "",
      skill_diplomacy_misc: "",
      skill_disguise_ranks: "",
      skill_disguise_misc: "",
      skill_escape_artist_ranks: "",
      skill_escape_artist_misc: "",
      skill_fly_ranks: "",
      skill_fly_misc: "",
      skill_heal_ranks: "",
      skill_heal_misc: "",
      skill_intimidate_ranks: "",
      skill_intimidate_misc: "",
      skill_knowledge_arcana_ranks: "1",
      skill_knowledge_arcana_misc: "3",
      skill_knowledge_dungeoneering_ranks: "",
      skill_knowledge_dungeoneering_misc: "",
      skill_knowledge_engineering_ranks: "",
      skill_knowledge_engineering_misc: "",
      skill_knowledge_geography_ranks: "",
      skill_knowledge_geography_misc: "",
      skill_knowledge_history_ranks: "",
      skill_knowledge_history_misc: "",
      skill_knowledge_local_ranks: "",
      skill_knowledge_local_misc: "",
      skill_knowledge_nature_ranks: "",
      skill_knowledge_nature_misc: "",
      skill_knowledge_nobility_ranks: "",
      skill_knowledge_nobility_misc: "",
      skill_knowledge_planes_ranks: "",
      skill_knowledge_planes_misc: "",
      skill_knowledge_religion_ranks: "",
      skill_knowledge_religion_misc: "",
      skill_linguistics_ranks: "",
      skill_linguistics_misc: "",
      skill_perception_ranks: "2",
      skill_perception_misc: "2",
      skill_perform_ranks: "",
      skill_perform_misc: "",
      skill_ride_ranks: "2",
      skill_ride_misc: "3",
      skill_sense_motive_ranks: "",
      skill_sense_motive_misc: "",
      skill_spellcraft_ranks: "2",
      skill_spellcraft_misc: "3",
      skill_stealth_ranks: "1",
      skill_stealth_misc: "",
      skill_survival_ranks: "",
      skill_survival_misc: "",
      skill_swim_ranks: "",
      skill_swim_misc: "",
      skill_use_magic_device_ranks: "",
      skill_use_magic_device_misc: "",
      spells_known_level_0: "",
      spells_daily_level_0: "4",
      spell_dc_level_0: "13",
      spells_known_level_1: "",
      spells_daily_level_1: "3",
      spell_dc_level_1: "14",
      spells_known_level_2: "",
      spells_daily_level_2: "",
      spell_dc_level_2: "",
      spells_known_level_3: "",
      spells_daily_level_3: "",
      spell_dc_level_3: "",
      spells_known_level_4: "",
      spells_daily_level_4: "",
      spell_dc_level_4: "",
      spells_known_level_5: "",
      spells_daily_level_5: "",
      spell_dc_level_5: "",
      spells_known_level_6: "",
      spells_daily_level_6: "",
      spell_dc_level_6: "",
      spells_known_level_7: "",
      spells_daily_level_7: "",
      spell_dc_level_7: "",
      spells_known_level_8: "",
      spells_daily_level_8: "",
      spell_dc_level_8: "",
      spells_known_level_9: "",
      spells_daily_level_9: "",
      spell_dc_level_9: ""
    },
    textarea: {
      feats: "Weapon Finesse",
      traits: "<strong>Magical Lineage</strong> (Shocking Grasp), <strong>Focused Mind</strong> (+2 on concentration checks)",
      languages: "Common, Draconic, Dwarven, Elven, Orc",
      special_abilities: "Low-Light Vision (Ex), Elven Immunities (Ex), Elven Magic (Ex), Weapon Familiarity (Ex), Keen Senses (Ex), Arcane Pool, Cantrips, Spell Combat (EX)",
      gear: "Fur coat and cold weather outfit, Rapier, Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Trained Donkey (commands: come, down, stay heal, work), Alchemist Fire (3)",
      magic_gear: "",
      defense_notes: "Immune to sleep effecrs, +2 against enchantment spells and effects, +7 against cold weather",
      attack_notes: "",
      notes: "<strong>Low-Light Vision (Ex)</strong> See x2 as far as humans in low illumination,<br><br><strong>Elven Immunities (Ex)</strong> Immune to magic sleep effects, +2 against Enchantment spells and effects,<br><br><strong>Elven Magic (Ex)</strong> +2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items,<br><br><strong>Weapon Familiarity (Ex)</strong> Proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), treat weapon with \"elven\" in name as a martial weapon),<br><br><strong>Keen Senses (Ex)</strong> +2 Perception checks,<br><br><strong>Arcane Pool</strong> 4,<br><br><strong>Cantrips</strong> <strong>Spell Combat (EX)</strong> cast spells and wield his weapons at the same time."
    },
    spells: [
      // level 1
      { name: "Acid Splash", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Arcane Mark", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Dancing Lights", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Daze", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Detect Magic", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Disrupt Undead", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Flare", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Ghost Sound", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Light", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Mage Hand", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Open Close", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Prestidigitation", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Ray of Frost", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Read Magic", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Spark", level: 0, prepared: 0, active: false, cast: 0 },
      // level 2
      { name: "Color Spray", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Grease", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Shocking Grasp", level: 1, prepared: 2, active: false, cast: 0 },
      { name: "True Strike", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Magic Missile", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Shield", level: 1, prepared: 1, active: false, cast: 0 },
      { name: "Vanish", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Obscuring Mist", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Chill Touch", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Frostbite", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Infernal Healing", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Windy Escape", level: 1, prepared: 0, active: false, cast: 0 }
    ]
  };

  // exposed methods
  return {
    data: data
  };

})();
