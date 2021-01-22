# COSMOS-WebUI-Template
Eine Vorlage für COSMOS WebUI Projekte

## Voraussetzungen
* COSMOS Version 2.7
* Texteditor wie Atom oder Notepad++
* Zugriff auf das COSMOS Installationsverzeichnis und den COSMOS-Client

## Einsatz des WebUI
Das COSMOS WebUI ist als deprecated markiert und kann in zukünftigen Versionen wegfallen. Eine Alternative sind Webseiten über die REST API, diese unterstützt allerdings keine LDAP-Anbindung (Stand Jan. 2021).

## Installation
Die folgende Anleitung leitet dich durch den Installationsprozess um eine minimale, aber funktionierende Grundlage für ein eigenes WebUI zu schaffen. Das Befüllen mit Inhalt ist kein Bestandteil dieser Vorlage.

### Verzeichnisse und Dateien einrichten
1. Navigiere im Cosmos Rootverzeichnis in das Unterverzeichnis `/webapps/cosmos-WebUI`.
1. Erstelle einen Ordner für dein Projekt, zum Beispiel `demoprojekt`. Die Anleitung verwendet nachfolgend immer `demoprojekt` als Namen, du musst diesen immer durch den von dir gewählten Projektnamen ersetzen.
1. Erstelle in dem `demoprojekt`-Ordner die zwei Unterordner `controller` und `view`.
1. Kopiere die `Home.controller.js` und die `Home.view.xml` aus diesem Repository in die entsprechenden Unterordner in deinem COSMOS.
1. Wenn du einen anderen Namen als `demoprojekt` verwendet hast, dann:
   1. Öffne die `controller/Home.controller.js` in einem Texteditor und ersetze in Zeile 13 `return Controller.extend("demoprojekt.controller.Home", {` das `demoprojekt` durch deinen Projektnamen.
   1. Öffne die `view/Home.view.xml` in einem Texteditor und ersetze in Zeile 3 `controllerName="demoprojekt.controller.Home"` das `demoprojekt` durch deinen Projektnamen.
1. Zurück im `/webapps/cosmos-WebUI`-Ordner öffne die `index.jsp` mit einem Texteditor:
   1. In Zeile 261 (oder darunter/darüber) findest du einen Eintrag `sap.ui.localResources("cosmos");`.
   1. Dupliziere diese Zeile und ersetze in der neuen Zeile `cosmos` durch `demoprojekt`, sodass folgendes zu lesen ist: `sap.ui.localResources("demoprojekt");`.
1. Öffne nun die Datei `/webapps/cosmos-WebUI/WEB-INF/web.xml` mit einem Texteditor:
   1. In Zeile 86 (oder darunter/darüber) findest du den Eintrag `cosmos=ROLE_WebUI`.
   1. Dupliziere die Zeile und ersetze erneut `cosmos` durch `demoprojekt`, sodass folgendes zu lesen ist: `demoprojekt=ROLE_WebUI`.
   1. Sofern du eigene Rollen für den Zugriff im COSMOS definiert hast, musst du diese statt `ROLE_WebUI` angeben.
   1. In Zeile 97 (oder darunter/darüber) findest du den Eintrag `cosmos=30`.
   1. Dupliziere die Zeile und ersetze erneut `cosmos` durch `demoprojekt`, sodass folgendes zu lesen ist: `demoprojekt=30`.
   1. Die 30 gibt die dauer von Login-Sessions in Minuten an. Du kannst diese Zahl auch vergrößern verkleinern.
1. Änderungen an der `web.xml` erfordern einen Neustart des COSMOS-Servers. Starte den Dienst/die Konsole neu.

### Konfiguration im COSMOS
1. Im COSMOS-Client lade die Expertenkonfiguration (Ctrl+6).
1. In Baum `Konfiguration/WebUI` sollte ein Ordner `cosmos` existieren.
1. Kopiere den Ordner `Konfiguration/WebUI/cosmos` und benenne ihn wie dein Projekt, also hier im Beispiel `demoprojekt`.
1. Ändere den Wert von `Konfiguration/WebUI/demoprojekt/Items/Item:1/view` von `cosmos.view.Home` in `demoprojekt.view.Home`.

### Konfiguration testen
1. In einem Browser lade die Url `https://localhost:8443/cosmos-WebUI/?nls=EN&application=demoprojekt` bzw. entsprechend andere Hostname/Port je nach Konfiguration. Der Browser sollte dir nun die demoprojekt-Startseite zeigen.
1. Du bist Fertig mit dem Aufsetzen eines Grundgerüsts. Jetzt kommt die eigentliche Arbeit...

![Preview image](/screenshot.png?raw=true)
