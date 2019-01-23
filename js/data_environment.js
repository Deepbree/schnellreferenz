data_environment_obscurance = [
    {
        title: "Leicht verschleiert",
        icon: "bleeding-eye",
        subtitle: "Nachteil auf Wahrnehmung",
        description: "Dämmriges Licht, ungleichmäßiger Nebel, mäßiges Blattwerk",
        reference: "PHB, Seite 183.",
        bullets: [
            "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ]
    },
    {
        title: "Komplett verschleiert",
        icon: "lightning-tear",
        subtitle: "Effektiv Blind",
        description: "Dunkelheit, dichter Nebel, dichtes Blattwerk",
        reference: "PHB, Seite 183.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Helles Licht",
        icon: "star-pupil",
        subtitle: "Normales Sehen",
        description: "Helles Licht lässt die meisten Kreaturen normal sehen",
        reference: "PHB, Seite 183.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dämmriges Licht",
        icon: "semi-closed-eye",
        subtitle: "Leicht verschleiert",
        description: "Dämmriges Licht, bzw. Schatten",
        reference: "PHB, Seite 183.",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Dunkelheit",
        icon: "worried-eyes",
        subtitle: "Komplett verschleiert",
        description: "Dunkelheit erzeigt einen komplett verschleierten Bereich",
        reference: "PHB, Seite 183.",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsicht",
        icon: "one-eyed",
        subtitle: "Wahrnehmen ohne zu sehen",
        description: "Nimm deine Umgebung in einem bestimmten Radius war, ohne dich auf dein Augenlicht zu verlassen",
        reference: "PHB, Seite 183.",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "Dunkelsicht",
        icon: "semi-closed-eye",
        subtitle: "Begrenzte Sicht in Dunkelheit",
        description: "Eine Kreatur mit Dunkelsicht kann innerhalb eines bestimmten Radius in der Dunkelheit und bei wenig Licht besser sehen",
        reference: "PHB, Seiten 183-184.",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ]
    },
    {
        title: "Wahrer Blick",
        icon: "eye-shield",
        subtitle: "In Dunkelheit sehen",
        description: "Eine Kreatur mit Wahrem Blick kann unabhängig von der Umgebung alles in seiner wahren Form sehen",
        reference: "PHB, Seite 184.",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.",
            "Furthermore, the creature can see into the Ethereal Plane."
        ]
    }
]

data_environment_cover = [
    {
        title: "Teildeckung",
        icon: "broken-shield",
        subtitle: "Niedrige Mauern, Möbel, Kreaturen",
        description: "Ein Ziel hat Teildeckung wenn ein Hinderniss mindestens die Hälfte seines Körpers verdeckt",
        reference: "PHB, Seite 196.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Dreivierteldeckung",
        icon: "cracked-shield",
        subtitle: "Fallgatter, Pfeilschlitze",
        description: "Ein Ziel hat Dreivierteldeckung wenn ein Hinderniss ungefähr drei Viertel seines Körpers verdeckt",
        reference: "PHB, Seite 196.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Volle Deckung",
        icon: "shield",
        subtitle: "Komplett verdeckt",
        description: "Ein Ziel hat Volle Deckung wenn es durch ein Hinderniss vollständig verdeckt wird",
        reference: "PHB, Seite 196.",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
]
