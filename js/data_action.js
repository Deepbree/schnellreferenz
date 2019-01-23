data_action = [
    {
        title: "Angriff",
        icon: "crossed-swords",
        subtitle: "Nahkampf- oder Fernkampfangriff",
        description: "Vollführe einen Nahkampf- oder Fernkampfangriff mit deiner Waffe",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).",
            "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Ringen",
        icon: "grab",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Versuche eine Kreature zu packen oder ringe mit ihr",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
        ]
    },
    {
        title: "Stoßen",
        icon: "hand",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Stoße eien Kreature, entweder um sie zu Boden zu schlagen oder von dir fort zu schieben",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ]
    },
    {
        title: "Zauberwirken",
        icon: "magic-swirl",
        subtitle: "Zauberzeit von 1 Aktion",
        description: "Wirke einen Zauberspruch mit einer Zauberzeit von 1 Aktion",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Spurt",
        icon: "sprint",
        subtitle: "Verdopple deine Bewegungsgeschwindigkeit",
        description: "Erhalte zusätzliche Bewegung für den aktuellen Zug",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Rückzug",
        icon: "journey",
        subtitle: "Verhindere Gelegenheitsangriffe",
        description: "Deine Bewegung löst für den Rest deines Zuges keine Gelegenheitsangriffe aus",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Ausweichen",
        icon: "aura",
        subtitle: "Stärke deine Abwehr",
        description: "Konzentriere dich darauf Angriffen auszuweichen",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Entkommen",
        icon: "manacles",
        subtitle: "Entkomme einem Haltegriff",
        description: "Entkomme einem Haltegriff",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Hilfe",
        icon: "telepathy",
        subtitle: "Gewähre einem Verbündeten Vorteil",
        description: "Gewähre einem Verbündeten Vorteil auf eine Fähigkeitenprobe oder einen Angriff",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Benutze Objekt",
        icon: "snatch",
        subtitle: "Interagiere, nutze besondere Merkmale",
        description: "Interagiere mit einem zweiten Objekt oder nutze besondere Merkmale eines Objektes",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Schild nutzen",
        icon: "round-shield",
        subtitle: "Lege einen Schild an oder ab",
        description: "Lege einen Schild an oder ab",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Verstecken",
        icon: "hood",
        subtitle: "Versuche dich zu verstecken",
        description: "Versuche dich zu verstecken",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Suchen",
        icon: "magnifying-glass",
        subtitle: "Suche etwas",
        description: "Widme deine Aufmerksamkeit ganz der Suche nach etwas",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Vorbereiten",
        icon: "stopwatch",
        subtitle: "Wähle Auslöser und Aktion",
        description: "Wähle einen Auslöser und deine darauf folgende Aktion",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Nutze ein Merkmal",
        icon: "embrassed-energy",
        subtitle: "Einige Merkmale verbrauchen eine Aktion",
        description: "Nutze ein Rassen- oder Klassenmerkmal, das eine Aktion verbraucht",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Improvisiere",
        icon: "juggler",
        subtitle: "Jeder Aktion, die nicht aufgelistet ist",
        description: "Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
