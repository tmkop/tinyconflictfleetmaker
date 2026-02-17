
const HULLS = [
    {
        "filepath": "hulls/fighter.png", "RP": 10, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "hulls/bomber.png", "RP": 12, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "hulls/transport.png", "RP": 16, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "hulls/interceptor.png", "RP": 12, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 4, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "hulls/freighter.png", "RP": 25, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "hulls/destroyer.png", "RP": 45, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "hulls/frigate.png", "RP": 40, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_LONG", "y": "ROW3" } }
        ]
    },
    {
        "filepath": "hulls/light_cruiser.png", "RP": 60, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "LEFT_LONG", "y": "ROW3" } },
            { "number": 1, "position": { "x": "LEFT_LONGOFFSET_LONG", "y": "ROW3" } }
        ]
    },
    {
        "filepath": "hulls/assault_carrier.png", "RP": 50, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW2" } },
            { "number": 3, "position": { "x": "LEFT_SHORT", "y": "ROW3" } },
            { "number": 1, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW3" } }
        ]
    },
    {
        "filepath": "hulls/heavy_cruiser.png", "RP": 75, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW3" } },
            { "number": 1, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW3" } },
            { "number": 1, "position": { "x": "LEFT_LONG", "y": "ROW4" } }
        ]
    },
    {
        "filepath": "hulls/carrier.png", "RP": 70, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW2" } },
            { "number": 4, "position": { "x": "LEFT_SHORT", "y": "ROW3" } },
            { "number": 2, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW3" } }
        ]
    },
    {
        "filepath": "hulls/battleship.png", "RP": 90, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 4, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW3" } },
            { "number": 2, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW3" } },
            { "number": 1, "position": { "x": "LEFT_LONG", "y": "ROW4" } }
        ]
    },
    {
        "filepath": "hulls/weapon_platform.png", "RP": 80, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW3" } }
        ]
    },
    {
        "filepath": "hulls/command_ship.png", "RP": 120, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "LEFT_LONG", "y": "ROW3" } },
            { "number": 2, "position": { "x": "LEFT_LONGOFFSET_LONG", "y": "ROW3" } }
        ]
    },
    {
        "filepath": "hulls/dreadnought.png", "RP": 150, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 4, "position": { "x": "LEFT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 4, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "RIGHT_LONG", "y": "ROW3" } },
            { "number": 1, "position": { "x": "RIGHT_LONGOFFSET_SHORT", "y": "ROW3" } },
            { "number": 1, "position": { "x": "RIGHT_LONG", "y": "ROW4" } }

        ]
    },
    {
        "filepath": "hulls/station.png", "RP": 100, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 3, "position": { "x": "RIGHT_LONG", "y": "ROW2" } },
            { "number": 2, "position": { "x": "RIGHT_LONGOFFSET_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "RIGHT_LONG", "y": "ROW3" } },
            { "number": 4, "position": { "x": "RIGHT_LONGOFFSET_SHORT", "y": "ROW3" } },
        ]
    },
];
const CAPTAINS = [
    { "RP": 0, "filepath": "captains/navy_pilot.png" },
    { "RP": 10, "filepath": "captains/junior_captain.png" },
    { "RP": 18, "filepath": "captains/academy_officer.png" },
    { "RP": 30, "filepath": "captains/ship_ai.png" },
    { "RP": 40, "filepath": "captains/decorated_officer.png" },
    { "RP": 50, "filepath": "captains/expedition_veteran.png" },
    { "RP": 60, "filepath": "captains/grand_captain.png" }
];
const S1_WEAPONS = [
    { "RP": 2, "filepath": "weapons/size1/xr-2_gatling_guns.png" },
    { "RP": 2, "filepath": "weapons/size1/punisher_15mm_cannon.png" },
    { "RP": 4, "filepath": "weapons/size1/mini_rail_lance.png" },
    { "RP": 3, "filepath": "weapons/size1/xr-4_twin_gatling.png" },
    { "RP": 3, "filepath": "weapons/size1/twin_10mm_flak.png" },
    { "RP": 7, "filepath": "weapons/size1/drill_torpedo.png" },
    { "RP": 7, "filepath": "weapons/size1/cluster_bomb.png" },
    { "RP": 7, "filepath": "weapons/size1/napalm_bomb.png" },
    { "RP": 5, "filepath": "weapons/size1/cluster_emp.png" },
    { "RP": 3, "filepath": "weapons/size1/boarding_laser.png" }
]
const S2_WEAPONS = [
    { "RP": 10, "filepath": "weapons/size2/snub_missile_rack.png" },
    { "RP": 14, "filepath": "weapons/size2/rail_lance.png" },
    { "RP": 16, "filepath": "weapons/size2/thunder_cannon.png" },
    { "RP": 6, "filepath": "weapons/size2/quad_xr-4b.png" },
    { "RP": 8, "filepath": "weapons/size2/flak_20mm.png" },
    { "RP": 20, "filepath": "weapons/size2/howler_torpedo.png" },
    { "RP": 18, "filepath": "weapons/size2/implosion_cannon.png" },
    { "RP": 26, "filepath": "weapons/size2/volcano_beam.png" },
    { "RP": 18, "filepath": "weapons/size2/det_mines.png" },
    { "RP": 24, "filepath": "weapons/size2/quad_20mm_cannon_array.png" },
    { "RP": 22, "filepath": "weapons/size2/destroyer_80mm_array.png" },
    { "RP": 20, "filepath": "weapons/size2/blitz_gatling_array.png" },
    { "RP": 24, "filepath": "weapons/size2/rail_lance_array.png" }
]
const S3_WEAPONS = [
    { "RP": 24, "filepath": "weapons/size3/inferno_missile_rack.png" },
    { "RP": 32, "filepath": "weapons/size3/heavy_rail_lance.png" },
    { "RP": 18, "filepath": "weapons/size3/splicer_autocannon.png" },
    { "RP": 14, "filepath": "weapons/size3/gatling_flak.png" },
    { "RP": 18, "filepath": "weapons/size3/dual_thud_gun.png" },
    { "RP": 24, "filepath": "weapons/size3/emp_cutlass.png" },
    { "RP": 30, "filepath": "weapons/size3/hail_cluster_torpedo.png" },
    { "RP": 46, "filepath": "weapons/size3/extinction_cannon.png" },
    { "RP": 28, "filepath": "weapons/size3/nightmare_missile_rack.png" },
    { "RP": 38, "filepath": "weapons/size3/triple_250mm_array.png" },
    { "RP": 28, "filepath": "weapons/size3/dual_85mm_destroyers.png" },
    { "RP": 42, "filepath": "weapons/size3/devistation_cannon_array.png" },
    { "RP": 40, "filepath": "weapons/size3/velocity_lance_array.png" }
]
const S4_WEAPONS = [
    { "RP": 32, "filepath": "weapons/size4/sparrow_volley_missiles.png" },
    { "RP": 50, "filepath": "weapons/size4/mass_driver.png" },
    { "RP": 24, "filepath": "weapons/size4/triple_120mm_flak.png" },
    { "RP": 34, "filepath": "weapons/size4/star_spear_guided_missile.png" },
    { "RP": 56, "filepath": "weapons/size4/emp_destroyer_cannon.png" },
    { "RP": 70, "filepath": "weapons/size4/lifes_end.png" },
    { "RP": 58, "filepath": "weapons/size4/quad_12_inch_array.png" },
    { "RP": 76, "filepath": "weapons/size4/firestorm_rotary_array.png" }
]
const S1_EQUIPMENT = [
    { "RP": 5, "filepath": "equipment/size1/carbon_alloy.png" },
    { "RP": 5, "filepath": "equipment/size1/stealth_composite.png" },
    { "RP": 3, "filepath": "equipment/size1/plasteel_plate_armour.png" },
    { "RP": 3, "filepath": "equipment/size1/light_craft_os.png" }
]
const S2_EQUIPMENT = [
    { "RP": 8, "filepath": "equipment/size2/civtec_firmware.png" },
    { "RP": 10, "filepath": "equipment/size2/merc_corp_os.png" },
    { "RP": 14, "filepath": "equipment/size2/navy_systems.png" },
    { "RP": 10, "filepath": "equipment/size2/nanotube_plating.png" },
    { "RP": 12, "filepath": "equipment/size2/crystalline_plating.png" },
    { "RP": 16, "filepath": "equipment/size2/carbon_lined_panels.png" },
    { "RP": 20, "filepath": "equipment/size2/reinforced_hull.png" },
    { "RP": 18, "filepath": "equipment/size2/cargo_bay.png" },
    { "RP": 20, "filepath": "equipment/size2/armoured_compartment.png" },
    { "RP": 16, "filepath": "equipment/size2/fighter_repair_bay.png" },
    { "RP": 24, "filepath": "equipment/size2/damage_control.png" },
    { "RP": 30, "filepath": "equipment/size2/dead_mans_switch.png" },
    { "RP": 32, "filepath": "equipment/size2/shield_generator.png" },
    { "RP": 10, "filepath": "equipment/size2/standard_hangar.png" },
    { "RP": 20, "filepath": "equipment/size2/stacked_hangar.png" }
]
const S3_EQUIPMENT = [
    { "RP": 16, "filepath": "equipment/size3/pirate_30.png" },
    { "RP": 20, "filepath": "equipment/size3/future_industries.png" },
    { "RP": 28, "filepath": "equipment/size3/milspec_os.png" },
    { "RP": 26, "filepath": "equipment/size3/megasteel.png" },
    { "RP": 30, "filepath": "equipment/size3/spaced_armour.png" },
    { "RP": 40, "filepath": "equipment/size3/nano_composite.png" },
    { "RP": 48, "filepath": "equipment/size3/blast_block_plate.png" },
    { "RP": 24, "filepath": "equipment/size3/cargo_bay.png" },
    { "RP": 28, "filepath": "equipment/size3/armoured_compartment.png" },
    { "RP": 26, "filepath": "equipment/size3/fighter_repair_bay.png" },
    { "RP": 30, "filepath": "equipment/size3/damage_control.png" },
    { "RP": 40, "filepath": "equipment/size3/dead_mans_switch.png" },
    { "RP": 38, "filepath": "equipment/size3/shield_generator.png" },
    { "RP": 20, "filepath": "equipment/size3/standard_hangar.png" },
    { "RP": 30, "filepath": "equipment/size3/stacked_hangar.png" }
]
const S4_EQUIPMENT = [
    { "RP": 36, "filepath": "equipment/size4/dominion_tech.png" },
    { "RP": 42, "filepath": "equipment/size4/federation_systems.png" },
    { "RP": 48, "filepath": "equipment/size4/alliance_computers.png" },
    { "RP": 50, "filepath": "equipment/size4/command_ship.png" },
    { "RP": 60, "filepath": "equipment/size4/stations.png" },
    { "RP": 70, "filepath": "equipment/size4/dreadnought.png" },
    { "RP": 40, "filepath": "equipment/size4/standard_hangar.png" },
    { "RP": 60, "filepath": "equipment/size4/dynamic_hangar.png" },
    { "RP": 60, "filepath": "equipment/size4/compact_hangar.png" },
    { "RP": 60, "filepath": "equipment/size4/automated_hangar.png" }
]
const FACT_HULLS = [
    { "filepath": "faction/hulls/ugnn_drones.png", "RP": 10, "sockets": [] },
    {
        "filepath": "faction/hulls/stealth_corvette.png", "RP": 30, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "faction/hulls/stealth_corvette.png", "RP": 30, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } }
        ]
    },
    {
        "filepath": "faction/hulls/homestead_skiff.png", "RP": 35, "sockets": [
            { "number": 1, "position": { "x": "LEFT_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "CENTER_SHORT", "y": "ROW1" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW1" } },
            { "number": 2, "position": { "x": "CENTER_SHORT", "y": "ROW2" } },
            { "number": 1, "position": { "x": "RIGHT_SHORT", "y": "ROW2" } },
            { "number": 2, "position": { "x": "LEFT_SHORTOFFSET_LONG", "y": "ROW3" } }
        ]
    },
    { "filepath": "faction/hulls/centauri_serpent.png", "RP": 175, "sockets": [] },
    { "filepath": "faction/hulls/void_squids.png", "RP": 60, "sockets": [] }
];
const FACT_OTHERS = [
    { "RP": 40, "filepath": "faction/others/bile_cannon.png" },
    { "RP": 14, "filepath": "faction/others/bile_caster.png" },
    { "RP": 18, "filepath": "faction/others/bile_spitters.png" },
    { "RP": 0, "filepath": "faction/others/hivemind_tendril.png" },
    { "RP": 20, "filepath": "faction/others/darikin_accelerator.png" },
    { "RP": 0, "filepath": "faction/others/darikin_accelerator_2.png" },
    { "RP": 50, "filepath": "faction/others/norock_vortex.png" },
    { "RP": 0, "filepath": "faction/others/norock_vortex_2.png" },
    { "RP": 35, "filepath": "faction/others/tratek_beam.png" },
    { "RP": 0, "filepath": "faction/others/tratek_beam_2.png" }
];