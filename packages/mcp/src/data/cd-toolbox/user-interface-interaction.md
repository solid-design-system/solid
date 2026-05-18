---
description: >
  Use when a user needs information about the interaction design principles and guidelines for user interfaces in Union Investment's digital products. This includes best practices for making interactive elements recognizable, indicating active states, handling inactive elements, and ensuring accessibility in user interactions.
---

## Interaktionen kenntlich machen

### Do

- Weisen Sie durch UI-Blau auf Interaktionsmöglichkeiten hin.
- Klickbare Elemente erhalten zusätzlich einen Hover-, einen Pressed- und einen Fokus-Status zusätzliche Outline).
- Interaktive Elemente (z. B. Links, Buttons, Karten) müssen auch ohne Mausbedienung nutzbar sein, rein über die Tastatur.
- Der Fokus-Zustand muss immer sichtbar und deutlich unterscheidbar sein.
- Achten Sie auf eine eindeutige visuelle Unterscheidung zwischen interaktiven und nicht interaktiven Elementen z. B. UI-Blau + Unterstreichung bei Links, aber nicht bei reinem Fließtext.

 

### Don't

- Es sollten keine anderen Farben für Interaktionen verwendet werden.
- Nur Texte, die verlinkt sind werden "unterstrichen" dargestellt.
- Verwenden Sie nicht nur Farbe zur Interaktionsanzeige, z. B. „blauer Text = klickbar“ ohne weitere visuelle oder semantische Kennzeichnung.
- Gestalten Sie keine Klickbereiche, die nicht als solche erkennbar oder nur durch Hover sichtbar sind.
- Keine Fokuszustände ausblenden oder durch Design „entfernen“ – sie sind essenziell für Tastatur-Nutzer.

### Hinweis auf aktiven Status

### Do

- Ist etwas aktiv ausgewählt (durch Nutzer oder im Prozess) wird das Element in UI-Grün gehighlighted.
- Dies gilt beispielsweise für Checkboxen, Tabs, Accordeons und Navigationselemente.
- Der aktive Status sollte nicht nur farblich (UI-Grün) signalisiert werden, sondern zusätzlich durch Form, Text, Symbol oder Position – z. B. durch einen Rahmen, eine Markierung, ein Häkchen oder das Attribut aria-selected="true".
- Achten Sie darauf, dass der aktive Zustand per Tastatur erreichbar und der Wechsel des Status auch für Screenreader kommunizierbar ist.
- Testen Sie aktive Zustände auf Farbkontrast, besonders bei UI-Grün: Mindestkontrast 3:1 bei großem Text oder UI-Komponenten.

 

### Don't

- Die farbliche Wahrnehmung der Seite sollte UI-Blau und Weiß sein.
- Verzichten Sie bei nicht aktiven Elemente auf UI-Grün, um die Bedeutung des "Aktiven Status" nicht zu mindern.
- Verlassen Sie sich nicht ausschließlich auf Farbe (z. B. nur UI-Grün), um den aktiven Zustand zu kennzeichnen – dies ist nicht barrierefrei.
- Kein UI-Grün bei nicht aktiven Zuständen – das schwächt die Bedeutung des aktiven Status und sorgt für Verwirrung bei Nutzern mit kognitiven oder visuellen Einschränkungen.

### Inaktive Elemente

### Do

- Interaktive Elemente, die nicht klickbar sind, werden als inaktiv dargestellt. Sie werden in der in Grau kenntlich gemacht.
- Achten Sie darauf, dass inaktive Elemente nicht fokussierbar sind – sie dürfen nicht per Tastatur erreichbar oder per Screenreader anspringbar sein.

### Don't

- Inaktives sollte nicht aktiv/klickbar aussehen.
- Dinge die nicht "inaktiv" sind sollten auch nicht als "ausgegraut" dargestellt werden.

 

Mehr zu Buttons, Links, Input

## Interaktionsmöglichkeiten und Hierarchie

### Do

- Wann ein Button oder ein Link verwendet wird, ist abhängig von Art/Ziel/Wichtigkeit der Interaktion.
- Die Buttons unterscheiden sich in ihrer Hierarchie. Der Call-to-Action Button wird nur einmal auf einer Seite verwendet (Main Conversion der Seite). Die Primary Buttons stehen hierarchisch über den Secondary Buttons und den Links.
- Buttons nutzen wir für Aktionen auf derselben Seite und um auf eine neue Seite zu leiten, die ein neues Thema einführt. Generell wirken Button wichtiger als Links (Beispiel: "Wie können Sie die Vorsorgelücke schließen?", Button "Unsere Riester-Produkte")
- Grundsätzlich werden Buttons ohne Icon verwendet. Buttons mit Icons nutzen wir, wenn durch Klicken auf den Button etwas aktiv ausgeführt wird (Beispiel: Drucken, Telefonieren, E-Mail schreiben, Suchen, Teilen). Das Icon kann links oder rechts neben dem Text sein. Auch reine Icon Buttons sind möglich.
- Links nutzen wir, wenn wir thematisch im selben Bereich bleiben, aber auf eine neue Seite verweisen (Beispiel: Im Bereich "Chatten Sie mit uns"  finden wird ein CTA-Button "Jetzt chatten" genutzt. Es gibt aber gleichzeitig den Hinweis "Mit der Nutzung des Chats akzeptieren Sie unsere Datenschutzhinweise". Dieser ist an der Stelle als Link dargestellt.).
- Alle interaktiven Elemente – Buttons, Links, Icon-Buttons – müssen tastaturbedienbar sein.
- Nutzen Sie aussagekräftige Link- und Buttontexte, die den Zweck klar benennen – z. B. „Jetzt Produkt vergleichen“ statt „Mehr“ oder „Hier“.
- Ergänzen Sie reine Icon-Buttons mit einem sichtbaren oder technisch hinterlegten Text.

### Don't

- Achten Sie bei der Interaktionswahl auf eine klare Zielsetzung. Zu viele Primary Buttons nebeneinander sind uneindeutig. Als Faustregel gilt: Maximal 2 nebeneinander, den Rest über Secondary Buttons oder Links lösen.
- Achten Sie auf eine klare Unterscheidung der Hierarchie. Es kann nur eine Main Conversion pro Seite geben.
- Halten Sie Text für Interaktionen kurz. Er sollte mit einem Blick erfassbar sein. Insbesondere auf mobilen Geräten kann es sonst zu mehrzeiligen Buttons kommen.
- Icons in Buttons oder vor Links sind sparsam zu verwenden. Sie sollen immer aktiv auf die ausgeführte Aktion hinweisen und nicht als „Schmuckelement“ dienen (Pfeil vor "Mehr erfahren").
- Verwenden Sie nicht denselben Buttontext für unterschiedliche Aktionen, z. B. zwei Buttons mit der Aufschrift „Mehr erfahren“, die zu verschiedenen Inhalten führen.

## Temporäre Aktionen durch Überlagerungen

### Do

- Um sekundäre Inhalte wie Navigationsunterpunkte, weitere Teilinformationen und Tooltips, aber auch Login-Masken und Formulare darzustellen, empfiehlt sich ein überlagerndes Fenster (Flyout/Overlay). Als sekundäre Information sind Inhalte zu verstehen, die helfen, den Zusammenhang/Fachbegriffe verständlich zu machen oder weitere Details und Unterpunkte zu zeigen.
- Der Tooltip ist standardmäßig UI-Blau, das Flyout kann mit Elementen wie Bild/Text oder Links befüllt werden. Ein Schatten zeigt an, dass sich das Element über dem eigentlichen Inhalt befindet.
- Überlagerungen müssen beim Öffnen automatisch den Tastaturfokus erhalten. Der Fokus darf nicht im Hintergrund sein, während eine Überlagerung aktiv ist („Fokusfalle“).
- Alle überlagerten Inhalte müssen per Tastatur schließbar sein, z. B. über die ESC-Taste oder einen klar erkennbaren „Schließen“-Button.
- Inhalte in Flyouts oder Tooltips sollten auch mit Screenreader vollständig erfasst werden können.

### Don't

- Verstecken Sie keine wichtigen/essentiellen Informationen. Prüfen Sie die Sinnhaftigkeit der Überlagerung aus Sicht des Nutzers.
- Achten Sie auf kurze Texte/Inhalte, um insbesondere auf mobilen Geräten das Scrollen innerhalb der Überlagerung zu vermeiden.
- Tooltips nicht nur bei Hover erscheinen lassen, sie müssen auch per Tastatur aufrufbar sein.

 

## Form Elemente

### Do

- Formfelder sind interaktive Elemente in Webformularen über die Daten und Informationen eingegeben oder ausgewählt werden.
- Das Solid Design System bietet verschiedene Formfelder nach WCAG Standards an. Nutzen Sie diese und achten Sie stets auf eine kurze und verständliche Beschriftung. Nutzer sollten sofort verstehen, welche Informationen von ihnen erwartet werden.
- Nutzen Sie auch die Platzhaltertexte oder zusätzliche Hilfetexte, um Kontext und Anleitung zu geben.
- Verwenden Sie immer ein sichtbares Label für jedes Formularfeld – der Platzhaltertext (placeholder) ersetzt kein Label, da er beim Ausfüllen verschwindet.
- Stellen Sie sicher, dass das Formular komplett per Tastatur bedienbar ist – in logischer Reihenfolge, ohne Fokusverluste.
- Fehlermeldungen müssen sowohl visuell als auch programmatisch übermittelt werden.
- Geben Sie konkrete Hinweise zur Fehlerbehebung, durch zusätzliche Texte wie „Bitte geben Sie eine gültige E-Mail-Adresse ein“ statt nur einem roten Feld.

### Don't

- Achten Sie auf Pflichtfelder. Nur unbedingt notwendige Felder sollten als obligatorisch markiert werden.
- Hilfetexte und Fehlermeldungen sollten kurz und präzise sein, um die Benutzeroberfläche nicht zu überladen. Für eine optimale Nutzerführung sollten sie zudem in ihrem Inhalt klar verständlich und kontextbezogen formuliert sein.
- Die Gesamtheit des Formulars sollte logisch in seiner Anordnung und Struktur sein.
- Keine wichtigen Informationen nur als Platzhaltertext angeben.

## Grundregeln für barrierefreie Interaktionen

Barrierefreie Interaktionen bedeuten nicht nur Technik, sondern Klarheit. Menschen müssen erkennen können, was anklickbar oder bedienbar ist, wie sie dorthin gelangen und wie sie damit interagieren können – unabhängig von Endgerät, Eingabemethode oder Einschränkungen.

### Do

- Machen Sie interaktive Elemente klar erkennbar – z. B. durch Farbe, Form, Text und Fokuszustände.
- Sorgen Sie für vollständige Tastaturbedienbarkeit aller Funktionen (Tab, Enter, Esc etc.).
- Verwenden Sie verständliche, aussagekräftige Beschriftungen für Buttons, Links und Formularelemente – keine generischen Texte wie „Mehr“ oder „Hier“.
- Kennzeichnen Sie aktive Zustände zusätzlich zur Farbe, z. B. durch Highlighting, Text oder Hervorhebung.
- Gestalten Sie Formulare mit klaren Labels, Fehlermeldungen und Hilfetexten, die auch für Screenreader zugänglich sind.
- Sorgen Sie bei Overlays, Tooltips und Dialogen für erreichbaren Fokus, klare Navigation und guten Kontrast.

### Don't

- Keine rein farbliche Kommunikation („Grün = aktiv“).
- Keine versteckten Interaktionen, die nur mit Hover oder Maus erreichbar sind.
- Keine klickbaren Elemente ohne visuelle Hinweise oder Fokuszustände.
- Keine mehrfach verwendeten, gleichlautenden Buttontexte mit unterschiedlichen Zielen.
- Kein Overlay oder Formular, das sich von alleine öffnet, schließt oder verschiebt.
