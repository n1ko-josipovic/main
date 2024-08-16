const createEcho = (): string[] => {
    return [
        "<br>",
        "&nbsp;Naredba <span class='command'>'echo'</span> prikazuje željenu poruku na zaslonu.",
        "&nbsp;Sintaksa: echo &lt;poruka&gt;",
        "<br>",
        "&nbsp;Primjer:",
        "<br>",
        "&nbsp;&nbsp;&nbsp;→ echo Hello, World!",
        "<br>",
        "&nbsp;&nbsp;&nbsp;Ispis:",
        "<br>",
        "&nbsp;&nbsp;&nbsp;→ Hello, World!",
        "<br>"
    ]
}

export const ECHO = createEcho();
