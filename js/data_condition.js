data_condition = [
    {
        title: "Blind",
        icon: "one-eyed",
        subtitle: "Du kannst nicht sehen",
        description: "Du kannst nicht sehen",
        reference: "PHB, Seite 290.",
        bullets: [
            "Du verlierst Fähigkeitenproben die Sicht benötigen automatisch.",
			"Du hast Nachteil auf Angriffswürfe.",
            "Angriffswürfe gegen dich haben Vorteil.",
        ]
    },
    {
        title: "Bezaubert",
        icon: "smitten",
        subtitle: "Du bist bezaubert",
        description: "Du bist von einer anderen Kreatur bezaubert",
        reference: "PHB, Seite 290.",
        bullets: [
            "Du kannst den Bezaubernden nicht angreifen oder als Ziel für verletztende Fähigkeiten oder magische Effekte wählen.",
			"Der Bezaubernde hat Vorteil auf Fähigkeitenproben in sozialer Interaktion mit dir."
        ]
    },
    {
        title: "Taub",
        icon: "elf-ear",
        subtitle: "Du kannst nicht hören",
        description: "Du kannst nicht hören",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du verlierst Fähigkeitenproben die Hören benötigen automatisch.",
        ]
    },
    {
        title: "Erschöpfung",
        icon: "crawl",
        subtitle: "Du bist erschöpft",
        description: "Erschöpfung wird in sechs Stufen unterschieden",
        reference: "PHB, Seite 291.",
        bullets: [
            "<table><tr><th>Stufe</th><th></th><th></th><th style='text-align:left'>Effekt</th></tr><tr><td>1</td><td></td><td></td><td>Nachteil auf Fähigkeitenproben</td></tr><tr><td>2</td><td></td><td></td><td>Geschwindigkeit halbiert</td></tr><tr><td>3</td><td></td><td></td><td>Nachteil auf Angriffe und Rettungswürfe</td></tr><tr><td>4</td><td></td><td></td><td>Trefferpunkte-Maximum halbiert</td></tr><tr><td>5</td><td></td><td></td><td>Geschwindigkeit auf 0 reduziert</td></tr><tr><td>6</td><td></td><td></td><td>Tod</td></tr></table>",
            "Du erleidest den Effekt deiner aktuelle Erschöpfungsstufe, sowie aller niedrigeren Stufen.",
            "Eine lange Rast zu beenden reduziert deine Erschöpfungsstufe um 1, vorausgesetzt du hattest zu essen und zu trinken.",
			"Von den Toten erweckt zu werden, reduziert deine Erschöpfungsstufe um 1."
        ]
    },
    {
        title: "Verängstigt",
        icon: "sharp-smile",
        subtitle: "Du hast Angst",
        description: "Du hast Angst",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du bist bei Fähigkeitenproben und Angriffen im Nachteil, solange die Quelle deiner Angst für dich sichtbar ist.",
			"Du kannst dich nicht willentlich der Quelle deiner Angst nähern.",
        ]
    },
    {
        title: "Gepackt",
        icon: "grab",
        subtitle: "Geschwindigkeit: 0",
        description: "Du bist im Haltegriff",
        reference: "PHB, Seite 291.",
        bullets: [
            "Deine Geschwindigkeit ist 0 und du kannst nicht von Bonus auf deine Geschwindigkeit profitieren.",
			"Der Zustand endet, wenn der Haltende kampfunfähig wird.",
            "Der Zustand endet außerdem, wenn du aus der Reichweite des Haltenden entfernt wirst."
        ]
    },
    {
        title: "Kampfunfähig",
        icon: "internal-injury",
        subtitle: "Weder Aktion noch Reaktion",
        description: "Du kannst weder Aktionen noch Reaktionen ausführen",
        reference: "PHB, Seite 291.",
        bullets: [
        ]
    },
    {
        title: "Unsichtbar",
        icon: "invisible",
        subtitle: "Du wirst nicht gesehen",
        description: "Ohne die Hilfe von Magie oder speziellen Sinnen kannst du nicht gesehen werden",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du giltst als komplett verschleiert, wenn du versuchst dich zu verstecken.",
			"Du kannst immer noch durch Geräusche oder von dir hinterlassene Spuren entdeckt werden.",
            "Du hast Vorteil auf Angriffswürfe.",
            "Angriffswürfe gegen dich sind im Nachteil.",
        ]
    },
    {
        title: "Gelähmt",
        icon: "internal-injury",
        subtitle: "Du bist gelähmt",
        description: "Du kannst nichts tun",
		reference: "PHB, Seite 291.",
        bullets: [
            "Du bist <i>kampfunfähig</i> und kannst dich weder bewegen noch sprechen.",
			"Angriffswürfe gegen dich sind im Vorteil.",
            "Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "Versteinert",
        icon: "stone-pile",
        subtitle: "Du wirst zu Stein",
        description: "Du bist, zusammen mit allen nicht-magischen Objekten die du trägst oder mitführst, in eine feste, unbewegliche Substanz (meistens Stein) verwandelt worden",
        reference: "PHB, Seite 292.",
        bullets: [
            "Dein Gewicht verzehnfacht sich und du hörst auf zu altern.",
			"Du bist <i>kampfunfähig</i>, kannst dich weder bewegen noch sprechen und nimmst deine Umgebung nicht mehr wahr.",
            "Angriffswürfe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "Du bist gegen jeden Schaden resistent",
            "Du bist immun gegen Gifte und Krankheit, allerdings ist ein Gift, von dem du bereits betroffen bist, nur ruhend und nicht neutralisiert."
        ]
    },
    {
        title: "Vergiftet",
        icon: "deathcab",
        subtitle: "Du bist vergiftet",
        description: "Du bist vergiftet",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du bist bei Fähigkeitenproben und Angriffen im Nachteil.",
        ]
    },
    {
        title: "Liegend",
        icon: "crawl",
        subtitle: "Du liegst",
        description: "Du liegst",
        reference: "PHB, Seite 291.",
        bullets: [
            "Deine einzige Bewegungsoption ist <i>Kriechen</i>, wenn du nicht aufstehst.",
			"Du bist bei Angriffen im Nachteil.",
			"Angriffe gegen dich sind im Vorteil, wenn der Angreifer innerhalb von 5 Fuß von dir ist, anderenfalls sind sie im Nachteil."
        ]
    },
    {
        title: "Festgesetzt",
        icon: "imprisoned",
        subtitle: "Du bist festgesetzt",
        description: "Du bist festgesetzt",
        reference: "PHB, Seite 290.",
        bullets: [
            "Deine Geschwindigkeit ist 0 und du kannst nicht von Bonus auf deine Geschwindigkeit profitieren.",
            "Du bist bei Angriffen im Nachteil.",
            "Angriffe gegen dich sind im Vorteil.",
            "Du bist bei Rettungswürfen auf Geschicklichkeit im Nachteil."
        ]
    },
    {
        title: "Betäubt",
        icon: "internal-injury",
        subtitle: "Du bist betäubt",
        description: "Du bist betäubt",
        reference: "PHB, Seite 290.",
        bullets: [
            "Du bist <i>kampfunfähig</i>, kannst dich nicht bewegen und nur stammelnd reden.",
			"Angriffe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "Bewusstlos",
        icon: "coma",
        subtitle: "Du bist bewusstlos",
        description: "Du bist bewusstlos",
        reference: "PHB, Seite 290.",
        bullets: [
            "Du bist <i>kampfunfähig</i>, kannst dich nicht bewegen und nimmst deine Umgebung nicht wahr.",
            "Du lässt fallen was du in Händen hältst und fällst hin.",
            "Angriffe gegen dich sind im Vorteil.",
			"Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "0 Trefferpunkte",
        icon: "death-skull",
        subtitle: "Du stirbst",
        description: "Du stirbst",
        reference: "PHB, Seite 197.",
        bullets: [
            "Du bist <i>bewusstlos</i>, es sei denn, du hast auf einmal soviel Schaden erhalten, dass du auf 0 Trefferpunkte fällst und der überschüssige Schaden noch einmal mindestens so hoch wie dein Trefferpunkte-Maximum ist. In diesem Fall stirbst du sofort.",
            "Diese Bewusstlosigkeit endet, wenn du mindestens einen Trefferpunkt erhältst.",
            "Wenn du deinen Zug mit 0 Trefferpunkten beginnst, musst du einen Todesrettungswurf machen. Würfle einen W20. Ein Ergebnis von mindestens 10 ist ein Erfolg, darunter ein Misserfolg. Bei deinem dritten Erfolg bist du stabil. Bei deinem dritten Misserfolg stirbst du.",
			"Eine gewürfelte 1 wird als zwei Misserfolge gewertet. Bei einer gewürfelten 20 erhältst du sofort einen Trefferpunkt.",
			"Wenn du Schaden erleidest während du 0 Trefferpunkte hast, erleidest du einen Misserfolg. Bei einem kritischen Treffer, erleidest zu zwei Misserfolge.",
			"Angriffe gegen dich sind im Vorteil (siehe <i>bewusstlos</i>).",
			"Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist (siehe <i>bewusstlos</i>).",
        ]
    }
]
