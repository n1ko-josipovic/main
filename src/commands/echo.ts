const createEcho = (): string[] => {
    return [
        "<br>",
        "Naredba <span class='command'>'echo'</span> služi za prikazivanje upisane poruke na ekranu.",
        "<br>",
        "&nbsp;Sintaksa:",
        "&nbsp;&nbsp;→ echo &lt;poruka&gt;",
        "<br>",
        "&nbsp;Primjer:",
        "&nbsp;&nbsp;→ echo Hello, World!",
        "<br>",
        "&nbsp;Ispis:",
        "&nbsp;&nbsp;→ Hello, World!",
        "<br>"
    ]
}

export const ECHO = createEcho();
