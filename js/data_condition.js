data_condition = [
    {
        title: "Blind",
        icon: "one-eyed",
        subtitle: "Du kannst nicht sehen",
        description: "Du kannst nicht sehen",
        reference: "PHB, Seite 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Bezaubert",
        icon: "smitten",
        subtitle: "Du bist bezaubert",
        description: "Du bist von einer anderen Kreatur bezaubert",
        reference: "PHB, Seite 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Taub",
        icon: "elf-ear",
        subtitle: "Du kannst nicht hören",
        description: "Du kannst nicht hören",
        reference: "PHB, Seite 292.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Erschöpfung",
        icon: "crawl",
        subtitle: "Du bist erschöpft",
        description: "Erschöpfung wird in sechs Stufen unterschieden",
        reference: "PHB, Seite 291.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink."
        ]
    },
    {
        title: "Verängstigt",
        icon: "sharp-smile",
        subtitle: "Du bist verängstigt",
        description: "Du bist verängstigt",
        reference: "PHB, Seite 292.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Gepackt",
        icon: "grab",
        subtitle: "Du bist gepackt",
        description: "Du bist gepackt",
        reference: "PHB, Seite 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "Kampfunfähig",
        icon: "internal-injury",
        subtitle: "Weder Aktionen noch Reaktionen",
        description: "Du kannst weder Aktionen noch Reaktionen ausführen",
        reference: "PHB, Seite 290.",
        bullets: [
        ]
    },
    {
        title: "Unsichtbar",
        icon: "invisible",
        subtitle: "Du kannst nicht gesehen werden",
        description: "Ohne die Hilfe von Magie oder speziellen Sinnen kannst du nicht gesehen werden",
        reference: "PHB, Seite 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Gelähmt",
        icon: "internal-injury",
        subtitle: "Du bist gelähmt",
        description: "Du kannst nichts tun",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Versteinert",
        icon: "stone-pile",
        subtitle: "Du bist in Stein verwandelt",
        description: "Du bist, zusammen mit allen nichtmagischen Objekten die du trägst oder mitführst, in eine feste, unbewegliche Substanz (meistens Stein) verwandelt worden",
        reference: "PHB, Seite 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Vergiftet",
        icon: "deathcab",
        subtitle: "Du bist vergiftet",
        description: "Du bist vergiftet",
        reference: "PHB, Seite 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Liegend",
        icon: "crawl",
        subtitle: "Du liegst",
        description: "Du liegst",
        reference: "PHB, Seite 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Festgesetzt",
        icon: "imprisoned",
        subtitle: "Du bist festgesetzt",
        description: "Du bist festgesetzt",
        reference: "PHB, Seite 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Betäubt",
        icon: "internal-injury",
        subtitle: "Du bist betäubt",
        description: "Du bist betäubt",
        reference: "PHB, Seite 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Bewusstlos",
        icon: "coma",
        subtitle: "Du bist bewusstlos",
        description: "Du bist bewusstlos",
        reference: "PHB, Seite 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    }
]
