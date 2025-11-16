const data = JSON.parse(`
{
    "hulls": [
        {
            "name": "shipname",
            "size": 0,
            "locked": [],
            "RP": 0,
            "stats": {
                "CR": 0,
                "HP": 0,
                "SP": 0,
                "SR": 0
            },
            "text": [
                ""
            ],
            "slots": [
                {
                    "type": null,
                    "size": 0,
                    "number": 0,
                    "required": false
                }
            ]
        },
        {
            "name": "Fighter",
            "size": 1,
            "locked": [],
            "RP": 10,
            "stats": {
                "CR": 5,
                "HP": 5,
                "SP": 0,
                "SR": 0
            },
            "text": [
                "Squadron 1",
                "Small Ship"
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "FW",
                    "size": 1,
                    "number": 2,
                    "required": false
                }
            ]
        },
        {
            "name": "Bombers",
            "size": 1,
            "locked": [],
            "RP": 12,
            "stats": {
                "CR": 3,
                "HP": 6,
                "SP": 3,
                "SR": 0
            },
            "text": [
                "Squadron 2",
                "Bombing Run: Unless equipped with the Drill Torpedo, this model must fly over its target to use its SW and may only fire out of the rear arc. If the unit fires their SW within 3'' of the target improve Acc by 1."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "SW",
                    "size": 1,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 1,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Transports",
            "size": 1,
            "locked": [],
            "RP": 16,
            "stats": {
                "CR": 2,
                "HP": 6,
                "SP": 0,
                "SR": 0
            },
            "text": [
                "Squadron 3",
                "Boarding Action: After coming into base contact with a size 2+ ship, both players roll 6D6 one at a time. For each result greater than your opponents, they lose 1 CR. This ability may only be used once before being restored to its original condition at a hanger."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "FW",
                    "size": 1,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "Named",
                    "number": 1,
                    "name": "Boarding Laser",
                    "required": false
                }
            ]
        },
        {
            "name": "Interceptors",
            "size": 1,
            "locked": [],
            "RP": 12,
            "stats": {
                "CR": 2,
                "HP": 4,
                "SP": 0,
                "SR": 0
            },
            "text": [
                "Squadron 2",
                "Attache: When this unit is first deployed, choose another unit within 3'' for it to attach to. When the attached unit is attacked the damage and any crit effects may be allocated to this interceptor. At the end of any activation phase if this unit is more than 1'' from its attached ship, this interceptor detaches and behaves normally."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "FW",
                    "size": 1,
                    "number": 4,
                    "required": false
                }
            ]
        },
        {
            "name": "Freighters",
            "size": 2,
            "locked": [],
            "RP": 25,
            "stats": {
                "CR": 12,
                "HP": 8,
                "SP": 20,
                "SR": 0
            },
            "text": [
                "Supply Ship: During this units activation, remove up to 4 SP from this unit and add that amount of SP to a target wholley within 6''."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 1,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AA",
                    "size": 2,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 2,
                    "number": 2,
                    "required": false
                }
            ]
        },
        {
            "name": "Destroyers",
            "size": 2,
            "locked": [],
            "RP": 45,
            "stats": {
                "CR": 15,
                "HP": 12,
                "SP": 0,
                "SR": 0
            },
            "text": [
                "Advanced Movement: During the Tactical Phase, this unit can move up to 3'' and rotate its full amount. This does not effect the units usual movement."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 2,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "FW",
                    "size": 2,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Frigates",
            "size": 2,
            "locked": [],
            "RP": 40,
            "stats": {
                "CR": 12,
                "HP": 10,
                "SP": 3,
                "SR": 0
            },
            "text": [
                "Vulnerable Target: This unit has -2 MR when more than 9'' away from friendly units.",
                "Artillery Platform: Add 3'' to the range of SW weapons this unit has equipped."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "FW",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "SW",
                    "size": 3,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 2,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Light Cruisers",
            "size": 2,
            "locked": [],
            "RP": 60,
            "stats": {
                "CR": 18,
                "HP": 16,
                "SP": 0,
                "SR": 1
            },
            "text": [
                ""
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "FW",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "BW",
                    "size": 2,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 2,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 2,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Assault Carrier",
            "size": 2,
            "locked": [],
            "RP": 50,
            "stats": {
                "CR": 20,
                "HP": 12,
                "SP": 0,
                "SR": 4
            },
            "text": [
                "Quick Deployment: This unit may deploy all size 1 units in its hangar in one activation with a maximum deployment range of 3''"
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "FW",
                    "size": 2,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 2,
                    "number": 3,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 3,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Heavy Cruisers",
            "size": 3,
            "locked": [],
            "RP": 75,
            "stats": {
                "CR": 22,
                "HP": 18,
                "SP": 3,
                "SR": 2
            },
            "text": [
                ""
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 3,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 3,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "FW",
                    "size": 3,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "SW",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 2,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 3,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Carriers",
            "size": 3,
            "locked": [],
            "RP": 70,
            "stats": {
                "CR": 28,
                "HP": 18,
                "SP": 0,
                "SR": 12
            },
            "text": [
                "Linked AA Guns: Improve Acc by 1 when targeting size 1 ships with this ships AA weapons",
                "Fighter Retrieval Arm: Size 1 units can be returned to the hanger from 3'' away"
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 3,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 3,
                    "number": 4,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 4,
                    "number": 2,
                    "required": false
                }
            ]
        },
        {
            "name": "Battleships",
            "size": 3,
            "locked": [],
            "RP": 90,
            "stats": {
                "CR": 25,
                "HP": 22,
                "SP": 4,
                "SR": 2
            },
            "text": [
                "Heavy Cannon Hull: This unit can fire its SW out of its side arcs as well as the front arc"
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 3,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 3,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 3,
                    "number": 4,
                    "required": false
                },
                {
                    "type": "FW",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "SW",
                    "size": 2,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 3,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Weapon Platforms",
            "size": 3,
            "locked": [],
            "RP": 80,
            "stats": {
                "CR": 18,
                "HP": 16,
                "SP": 6,
                "SR": 0
            },
            "text": [
                "Stationary Emplacement: This unit has a movement of 0'' and cannot move unless its unless as part of a warzone/scenario rule.",
                "Defensive Instalment: This unit cannot be effected by captain or admiral abilities unless specifically mentioned.",
                "Defense Commander: This unit has a MR of 5. When rattled this unit remains stationary, when this unit fails two morale tests remove it."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 3,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "AR",
                    "size": 2,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "SW",
                    "size": 4,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "BW",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 3,
                    "number": 2,
                    "required": false
                }
            ]
        },
        {
            "name": "Command Ship",
            "size": 4,
            "locked": [],
            "RP": 120,
            "stats": {
                "CR": 30,
                "HP": 18,
                "SP": 0,
                "SR": 1
            },
            "text": [
                "Admiral's Quarters: If this ship is taken you must take an admiral and it must be assigned to this unit.",
                "Central Command: When this unit is activated, choose either two size 1 units or one size 2 unit to activate at the same time. These activations may be executed in any order."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 4,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "Named",
                    "name": "Command Ship",
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "FW",
                    "size": 3,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 2,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Dreadnought",
            "size": 4,
            "locked": [],
            "RP": 150,
            "stats": {
                "CR": 35,
                "HP": 30,
                "SP": 4,
                "SR": 3
            },
            "text": [
                "Heavy Cannon Hull: This unit can fire its SW out of its side arcs as well as the front arc",
                "Material Intensive Ship: You may only take one of this type of ship",
                "Blink Drive: Once per game this unit can use its whole activation to move 12''"
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 4,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "Named",
                    "name": "Dreadnought",
                    "number": 1,
                    "required": true
                },
                {
                    "type": "CA",
                    "size": 0,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 4,
                    "number": 4,
                    "required": false
                },
                {
                    "type": "FW",
                    "size": 4,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 3,
                    "number": 4,
                    "required": false
                },
                {
                    "type": "SW",
                    "size": 4,
                    "number": 1,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 4,
                    "number": 1,
                    "required": false
                }
            ]
        },
        {
            "name": "Stations",
            "size": 4,
            "locked": [],
            "RP": 100,
            "stats": {
                "CR": 40,
                "HP": 20,
                "SP": 0,
                "SR": 9
            },
            "text": [
                "Open Air Hangers: This unit may deploy all units in its hangar in one activation with a maximum deployment range of 3''",
                "Stationary Emplacement: This unit has a movement of 0'' and cannot move unless its unless as part of a warzone/scenario rule.",
                "Defensive Instalment: This unit cannot be effected by captain or admiral abilities unless specifically mentioned.",
                "Station Commander: This unit has a MR of 7. When rattled this unit remains stationary, when this unit fails two morale tests remove it."
            ],
            "slots": [
                {
                    "type": "OS",
                    "size": 4,
                    "number": 1,
                    "required": true
                },
                {
                    "type": "Named",
                    "name": "Stations",
                    "number": 1,
                    "required": true
                },
                {
                    "type": "BW",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "AA",
                    "size": 4,
                    "number": 4,
                    "required": false
                },
                {
                    "type": "MS",
                    "size": 3,
                    "number": 2,
                    "required": false
                },
                {
                    "type": "HS",
                    "size": 4,
                    "number": 3,
                    "required": false
                }
            ]
        }
    ],
    "FW": [
        {
            "name": "XR-2 Gatling Guns",
            "RP": 2,
            "size": 1,
            "locked": [],
            "stats": {
                "R": 6,
                "SC": 4,
                "AP": 1,
                "D": 1,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Punisher 15mm Cannon",
            "RP": 2,
            "size": 1,
            "locked": [],
            "stats": {
                "R": 6,
                "SC": 2,
                "AP": 3,
                "D": 1,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Mini Rail Lance",
            "RP": 4,
            "size": 1,
            "locked": [
                "Fighter Doctrine"
            ],
            "stats": {
                "R": 6,
                "SC": 1,
                "AP": 4,
                "D": 3,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Boarding Laser",
            "RP": 3,
            "size": 1,
            "locked": [
                "Fighter Doctrine"
            ],
            "stats": {
                "R": 3,
                "SC": 1,
                "AP": 6,
                "D": 2,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Snub Missile Pack",
            "RP": 10,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 8,
                "SC": 4,
                "AP": 4,
                "D": 3,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Rail Lance",
            "RP": 14,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 10,
                "SC": 1,
                "AP": 7,
                "D": 2,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Thunder Cannon",
            "RP": 16,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 12,
                "SC": 1,
                "AP": 5,
                "D": 3,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Inferno Missile Rack",
            "RP": 24,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 12,
                "SC": 4,
                "AP": 5,
                "D": 2,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Heavy Rail Lance",
            "RP": 32,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 16,
                "SC": 1,
                "AP": 8,
                "D": 4,
                "crit": "STN"
            },
            "info": ""
        },
        {
            "name": "Splicer Autocannon",
            "RP": 18,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 12,
                "SC": 6,
                "AP": 4,
                "D": 3,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Sparrow Volley Missiles",
            "RP": 32,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 16,
                "SC": 10,
                "AP": 5,
                "D": 2,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Mass Driver",
            "RP": 50,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 32,
                "SC": 1,
                "AP": 8,
                "D": 4,
                "crit": "STN"
            },
            "info": ""
        }
    ],
    "BW": [
        {
            "name": "Quad 20mm Cannon Array",
            "RP": 24,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 12,
                "SC": 8,
                "AP": 4,
                "D": 2,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Destroyer 80mm Array",
            "RP": 22,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 14,
                "SC": 3,
                "AP": 5,
                "D": 3,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Blitz Gatling Array",
            "RP": 20,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 8,
                "SC": 24,
                "AP": 3,
                "D": 1,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Rail Lance Array",
            "RP": 24,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 10,
                "SC": 3,
                "AP": 7,
                "D": 2,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Triple 250mm Array",
            "RP": 38,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 18,
                "SC": 3,
                "AP": 7,
                "D": 4,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Dual 85mm Destroyers",
            "RP": 28,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 14,
                "SC": 4,
                "AP": 5,
                "D": 3,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Devastation Cannon Array",
            "RP": 42,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 10,
                "SC": 26,
                "AP": 4,
                "D": 2,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Velocity Lance Array",
            "RP": 40,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 30,
                "SC": 3,
                "AP": 6,
                "D": 2,
                "crit": "STN"
            },
            "info": ""
        },
        {
            "name": "Quad 12 Inch Array",
            "RP": 58,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 20,
                "SC": 4,
                "AP": 8,
                "D": 4,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Quad 12 Inch Array",
            "RP": 58,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 20,
                "SC": 4,
                "AP": 8,
                "D": 4,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Firestorm Rotary Array",
            "RP": 76,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 14,
                "SC": 30,
                "AP": 6,
                "D": 2,
                "crit": "INC"
            },
            "info": ""
        }
    ],
    "AA": [
        {
            "name": "XR-4 Twin Gatling",
            "RP": 3,
            "size": 1,
            "locked": [],
            "stats": {
                "R": 6,
                "SC": 6,
                "AP": 1,
                "D": 1,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Twin 10mm Flak",
            "RP": 3,
            "size": 1,
            "locked": [],
            "stats": {
                "R": 6,
                "SC": 4,
                "AP": 2,
                "D": 1,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Quad XR-4B",
            "RP": 6,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 8,
                "SC": 8,
                "AP": 1,
                "D": 1,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Flak 20mm",
            "RP": 8,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 8,
                "SC": 2,
                "AP": 3,
                "D": 2,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Gatling Flak",
            "RP": 14,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 8,
                "SC": 8,
                "AP": 3,
                "D": 2,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Dual Thud Gun",
            "RP": 18,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 12,
                "SC": 4,
                "AP": 4,
                "D": 4,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Triple 120mm Flak",
            "RP": 24,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 14,
                "SC": 3,
                "AP": 4,
                "D": 4,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Star Spear Guided Missile",
            "RP": 34,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 20,
                "SC": 2,
                "AP": 6,
                "D": 4,
                "crit": "INC"
            },
            "info": ""
        }
    ],
    "SW": [
        {
            "name": "Drill Torpedo",
            "RP": 7,
            "size": 1,
            "locked": [],
            "stats": {
                "R": 8,
                "SC": 1,
                "AP": 6,
                "D": 3,
                "crit": "KNT"
            },
            "info": ""
        },
        {
            "name": "Cluster Bomb",
            "RP": 7,
            "size": 1,
            "locked": [],
            "stats": {
                "R": 4,
                "SC": 3,
                "AP": 3,
                "D": 2,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Napalm Bomb",
            "RP": 7,
            "size": 1,
            "locked": [
                "Fighter Doctrine"
            ],
            "stats": {
                "R": 4,
                "SC": 1,
                "AP": 4,
                "D": 5,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Cluster EMP",
            "RP": 5,
            "size": 1,
            "locked": [
                "Fighter Doctrine"
            ],
            "stats": {
                "R": 4,
                "SC": 5,
                "AP": 5,
                "D": 0,
                "crit": "EMP"
            },
            "info": ""
        },
        {
            "name": "Howler Torpedo",
            "RP": 20,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 16,
                "SC": 3,
                "AP": 5,
                "D": 3,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Implosion Cannon",
            "RP": 18,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 10,
                "SC": 1,
                "AP": 6,
                "D": 3,
                "crit": "STN"
            },
            "info": ""
        },
        {
            "name": "Volcano Beam",
            "RP": 26,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 18,
                "SC": 1,
                "AP": 6,
                "D": 4,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "DET Mines",
            "RP": 18,
            "size": 2,
            "locked": [],
            "stats": {
                "R": 4,
                "SC": 10,
                "AP": 4,
                "D": 2,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "EMP Cutlass",
            "RP": 24,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 12,
                "SC": 6,
                "AP": 5,
                "D": 1,
                "crit": "EMP"
            },
            "info": ""
        },
        {
            "name": "Hail Cluster Torpedo",
            "RP": 30,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 20,
                "SC": 4,
                "AP": 6,
                "D": 4,
                "crit": "HE"
            },
            "info": ""
        },
        {
            "name": "Extinction Cannon",
            "RP": 46,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 28,
                "SC": 2,
                "AP": 8,
                "D": 4,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "Nightmare Missile Rack",
            "RP": 28,
            "size": 3,
            "locked": [],
            "stats": {
                "R": 14,
                "SC": 4,
                "AP": 6,
                "D": 3,
                "crit": "INC"
            },
            "info": ""
        },
        {
            "name": "EMP Destroyer Cannon",
            "RP": 56,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 18,
                "SC": 2,
                "AP": 9,
                "D": 4,
                "crit": "EMP"
            },
            "info": ""
        },
        {
            "name": "Life's End",
            "RP": 70,
            "size": 4,
            "locked": [],
            "stats": {
                "R": 24,
                "SC": 1,
                "AP": 10,
                "D": 6,
                "crit": "KNT"
            },
            "info": ""
        }
    ],
    "OS": [
        {
            "name": "Light Craft OS",
            "RP": 3,
            "size": 1,
            "locked": [],
            "acc": 5,
            "ability": "Small Ship"
        },
        {
            "name": "Civtec Firmware",
            "RP": 8,
            "size": 2,
            "locked": [],
            "acc": 4,
            "ability": ""
        },
        {
            "name": "Merc Corp OS",
            "RP": 10,
            "size": 2,
            "locked": [],
            "acc": 4,
            "ability": "5+ Fire Control"
        },
        {
            "name": "Navy Systems",
            "RP": 14,
            "size": 2,
            "locked": [],
            "acc": 3,
            "ability": ""
        },
        {
            "name": "Pirate 3.0",
            "RP": 16,
            "size": 3,
            "locked": [],
            "acc": 3,
            "ability": ""
        },
        {
            "name": "Future Industries",
            "RP": 20,
            "size": 3,
            "locked": [],
            "acc": 3,
            "ability": "6+ EMP Negate"
        },
        {
            "name": "Milspec OS",
            "RP": 28,
            "size": 3,
            "locked": [],
            "acc": 3,
            "ability": "This unit has an ACC of 2+ when targeting size 3+ units"
        },
        {
            "name": "Dominion Tech",
            "RP": 36,
            "size": 4,
            "locked": [],
            "acc": 3,
            "ability": "Immunity to EMP and STN"
        },
        {
            "name": "Federation Systems",
            "RP": 42,
            "size": 4,
            "locked": [],
            "acc": 2,
            "ability": "5+ All Effect Negate"
        },
        {
            "name": "Alliance Computers",
            "RP": 48,
            "size": 4,
            "locked": [],
            "acc": 2,
            "ability": "Decrease the ACC Target when firing at Size 1 units by 1 (this ships usual 3+ would become its regular 2+)"
        }
    ],
    "AR": [
        {
            "name": "Carbon Alloy",
            "RP": 5,
            "size": 1,
            "locked": [
                "Fighter Doctrine"
            ],
            "ar": 4,
            "ability": "Increase this unit's movement by 3''"
        },
        {
            "name": "Stealth Composite",
            "RP": 5,
            "size": 1,
            "locked": [
                "Fighter Doctrine"
            ],
            "ar": 5,
            "ability": "Increase the ACC needed to hit this unit by 1"
        },
        {
            "name": "Plasteel Plate Armour",
            "RP": 3,
            "size": 1,
            "locked": [],
            "ar": 6,
            "ability": ""
        },
        {
            "name": "Nanotube Plating",
            "RP": 10,
            "size": 2,
            "locked": [],
            "ar": 6,
            "ability": "6+ HE Negate"
        },
        {
            "name": "Crystalline Plating",
            "RP": 12,
            "size": 2,
            "locked": [],
            "ar": 6,
            "ability": "Increase the ACC needed to hit this unit by 1"
        },
        {
            "name": "Carbon Lined Panels",
            "RP": 16,
            "size": 2,
            "locked": [],
            "ar": 7,
            "ability": "Ignore the first INC Crit allocated to this unit"
        },
        {
            "name": "Reinforced Hull",
            "RP": 20,
            "size": 2,
            "locked": [],
            "ar": 8,
            "ability": ""
        },
        {
            "name": "Megasteel",
            "RP": 26,
            "size": 3,
            "locked": [],
            "ar": 9,
            "ability": ""
        },
        {
            "name": "Spaced Armour",
            "RP": 30,
            "size": 3,
            "locked": [],
            "ar": 9,
            "ability": "Ignore the first HE Crit allocated to this unit"
        },
        {
            "name": "Nano Composite",
            "RP": 40,
            "size": 3,
            "locked": [],
            "ar": 10,
            "ability": "6+ STN Negate"
        },
        {
            "name": "Black Block Plate",
            "RP": 48,
            "size": 3,
            "locked": [],
            "ar": 11,
            "ability": "6+ HE Negate"
        },
        {
            "name": "Command Ship",
            "RP": 50,
            "size": 4,
            "locked": [],
            "ar": 11,
            "ability": "6+ STN Negate"
        },
        {
            "name": "Stations",
            "RP": 60,
            "size": 4,
            "locked": [],
            "ar": 12,
            "ability": "6+ EMP Negate"
        },
        {
            "name": "Dreadnought",
            "RP": 70,
            "size": 4,
            "locked": [],
            "ar": 13,
            "ability": ""
        }
    ],
    "CA": [
        {
            "name": "Navy Pilot",
            "size": 1,
            "RP": 0,
            "MR": 3,
            "ability": ""
        },
        {
            "name": "Junior Captain",
            "size": 0,
            "RP": 10,
            "MR": 4,
            "ability": "In the first tactical phase, select one size 1 unit and increase its starting MR to 4"
        },
        {
            "name": "Academy Officer",
            "size": 0,
            "RP": 18,
            "MR": 5,
            "ability": "This unit can redeploy during the first tactical phase"
        },
        {
            "name": "Ship AI",
            "size": 0,
            "RP": 30,
            "MR": 6,
            "ability": "Reduce the effects on attrition of losing friendly units by 1 to a minimum of 1"
        },
        {
            "name": "Decorated Officer",
            "size": 0,
            "RP": 40,
            "MR": 7,
            "ability": "Reduce the target needed to remove status effects from this unit to 5+"
        },
        {
            "name": "Expedition Veteran",
            "size": 0,
            "RP": 50,
            "MR": 7,
            "ability": "This unit can deploy in the second tactical phase wholly within 3'' of any board edge"
        },
        {
            "name": "Grand Captain",
            "size": 0,
            "RP": 60,
            "MR": 8,
            "ability": "Once per game, activate one size 2 or two size 1 units at the same time as this unit"
        }
    ],
    "MS": [
        {
            "name": "Cargo Bay",
            "RP": 18,
            "size": 2,
            "locked": [],
            "ability": "Increase this unit's SP by 4. This effect can stack."
        },
        {
            "name": "Armoured Compartment",
            "RP": 20,
            "size": 2,
            "locked": [],
            "ability": "Increase this unit's HP by 2. This effect can stack."
        },
        {
            "name": "Fighter Repair Bay",
            "RP": 16,
            "size": 2,
            "locked": [],
            "ability": "Once per round, a size 1 unit that remained in the hangar for its activation is restored to its original stats."
        },
        {
            "name": "Damage Control",
            "RP": 24,
            "size": 2,
            "locked": [],
            "ability": "Once per game, this unit restores 4 HP. Only one of this MS slot can be used per round and HP may not exceed the max."
        },
        {
            "name": "Dead Man's Switch",
            "RP": 30,
            "size": 2,
            "locked": [],
            "ability": "If this unit is reduced to 0 CR or 0 HP, it explodes dealing D3 damage to all units within D6''. This can also be triggered during this units activation."
        },
        {
            "name": "Shield Generator",
            "RP": 32,
            "size": 2,
            "locked": [],
            "ability": "This unit has a shield value of 6. Shield value is reduced before HP but does not affect CR when reduced."
        },
        {
            "name": "Cargo Bay",
            "RP": 24,
            "size": 3,
            "locked": [],
            "ability": "Increase this unit's SP by 6. This effect can stack."
        },
        {
            "name": "Armoured Compartment",
            "RP": 24,
            "size": 3,
            "locked": [],
            "ability": "Increase this unit's HP by 4. This effect can stack."
        },
        {
            "name": "Fighter Repair Bay",
            "RP": 26,
            "size": 3,
            "locked": [],
            "ability": "Twice per round, a size 1 unit that remained in the hangar for its activation is restored to its original stats."
        },
        {
            "name": "Damage Control",
            "RP": 30,
            "size": 3,
            "locked": [],
            "ability": "Once per game, this unit restores 6 HP. Only one of this MS slot can be used per round and HP may not exceed the max."
        },
        {
            "name": "Dead Man's Switch",
            "RP": 40,
            "size": 3,
            "locked": [],
            "ability": "If this unit is reduced to 0 CR or 0 HP, it explodes dealing D6 damage to all units within D6''. This can also be triggered during this units activation."
        },
        {
            "name": "Shield Generator",
            "RP": 38,
            "size": 3,
            "locked": [],
            "ability": "This unit has a shield value of 8. Shield value is reduced before HP but does not affect CR when reduced."
        }
    ],
    "HS": [
        {
            "name": "Standard Hangar",
            "size": 2,
            "RP": 10,
            "locked": [],
            "ability": "Hangar 1"
        },
        {
            "name": "Stacked Hangar",
            "size": 2,
            "RP": 20,
            "locked": [],
            "ability": "Hangar 2"
        },
        {
            "name": "Standard Hangar",
            "size": 3,
            "RP": 20,
            "locked": [],
            "ability": "Hangar 1"
        },
        {
            "name": "Stacked Hangar",
            "size": 3,
            "RP": 30,
            "locked": [],
            "ability": "Hangar 2"
        },
        {
            "name": "Standard Hangar",
            "size": 4,
            "RP": 40,
            "locked": [],
            "ability": "Hangar 2"
        },
        {
            "name": "Dynamic Hangar",
            "size": 4,
            "RP": 60,
            "locked": [
                "Large Hangar Space"
            ],
            "ability": "Hangar ∞"
        },
        {
            "name": "Compact Hangar",
            "size": 4,
            "RP": 60,
            "locked": [
                "Large Hangar Space"
            ],
            "ability": "Hangar 2, Increase this units SR. This effect can stack."
        },
        {
            "name": "Automated Hangar",
            "size": 4,
            "RP": 60,
            "locked": [
                "Large Hangar Space"
            ],
            "ability": "Hangar 2, Units that exit this hangar are restored to their original stats."
        }
    ]
}
`);