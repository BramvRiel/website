# Query *[kwih-rie]*
Wat is een query? Een formeel opgesteld verzoek om informatie. Het is een vraag, dusdanig geformuleerd dat duidelijk is;
- wat de **informatiebehoefte** is,
- wat de **context** is waarin de vraag gesteld wordt, 
- de **criteria** waaraan de informatie moet voldoen.

Kantoormedewerkers hebben informtiebehoeften, er wordt dan vaak een beroep gedaan op *Microsoft Excel*. De context wordt gerepresenteerd door het werkblad. Middels een fiter op de gegevens kan per kolom worden aangegeven aan welke criteria moet worden voldoen. De informatiebehoefte wordt gepresenteerd via kolommen, door deze te verbergen kan informatie worden weggelaten.

Wanneer we in de IT branche praten over een query, wordt er vaak uitgegaan van een *database* -query, opgesteld in de taal *SQL*.
```sql
SELECT Voornaam FROM Medewerkers WHERE Achternaam = 'Janssen';
```
> SELECT Voornaam => **informatiebehoefte** => de voornaam
> FROM Medewerkers => **context** => van alle medewerkers
> WHERE Achternaam = 'Janssen' => **criteria** => met de achternaam 'Janssen'

## Communicatie 
In de wereld van kantoorautomatisering wordt van software verwacht dat het informatiebehoefte kan levereren, echter blijft het specificeren hiervan moeizaam. De korste weg is door middel van Excel of .csv bestanden, waarbij zowel ontwikkelaar als kantoormedewerker kunnen praten of een tabel met rijen en kolommen. Indien het echter complex
