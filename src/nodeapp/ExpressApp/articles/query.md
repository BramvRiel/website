# Informatiebehoefte vanuit kantoorautomatisering specificeren
## Query *[kwih-rie]*
Wat is een query? Een formeel opgesteld verzoek om informatie. Het is een vraag dusdanig geformuleerd dat duidelijk is;
- wat de **informatiebehoefte** is
- wat de **context** is waarin de vraag gesteld wordt,
- aan welke **criteria** moet worden voldaan

Kantoormedewerkers hebben informatiebehoeften, en vaak wordt er dan beroep gedaan op *Microsoft Excel*. De context wordt gerepresenteerd door het werkblad. Middels een fiter op de gegevens kan per kolom worden aangegeven aan welke criteria moet worden voldoen. De informatiebehoefte wordt gepresenteerd via kolommen die toegevoegd of weggelaten kunnen worden.  

*Gegeven de informatiebehoefte; de voornaam van alle medewerkers met de achternaam 'Janssen'*

Een kantoormedewerker een filter toevoegen op 'Achternaam' met *Janssen*, en zo de naam **Charlie** vinden:
|Voornaam|Achternaam|
|-|-|
|Abel|Smit|
|Bart|Christiaanse|
|**Charlie**  | *Janssen*|
|Dick|Klaassen|

Een ontwikkelaar zou een query schrijven:
```sql
SELECT Voornaam  -- informatiebehoefte
FROM Medewerkers -- context
WHERE Achternaam = 'Janssen'; -- criteria
```
Wanneer we in de IT branche praten over een query, wordt er vaak uitgegaan van een *database* -query, opgesteld in de taal *SQL*.
## Complexiteit
*Gegeven de informatiebehoefte; het e-mailadres van alle medewerkers met de achternaam 'Janssen', met als subdomein 'bedrijf.nl'*  

Stel een medewerker heeft meerdere e-mailadressen, we zouden de kolom e-mailadres toe kunnen voegen en deze  filteren op '@bedrijf.nl', en tevens achternaam kunnen filteren op 'Janssen'.
|Voornaam|Achternaam|E-mailadres|
|-|-|-|
|Abel|Smit|a.smit@bedrijf.nl|
|Bart|Christiaanse|b.christiaanse@bedrijf.nl|
|Charlie | *Janssen*| **c.janssen@bedrijf.nl**, c.janssen@hotmail.com
|Dick|Klaassen|d.klaassen@bedrijf.nl|
```sql
SELECT [E-mailadres] -- informatiebehoefte
FROM Medewerkers -- context
WHERE Achternaam = 'Janssen' -- criteria a
AND [E-mailadres] like '%bedrijf.nl'; -- criteria b
```
Een alternatief is om criteria met de context samen te voegen een zodoende en nieuwe context te creëren.
|Achternaam|E-mailadres|
|-|-|
|Smit|a.smit@bedrijf.nl|
|Christiaanse|b.christiaanse@bedrijf.nl|
|Janssen|**c.janssen@bedrijf.nl**
|Klaassen|d.klaassen@bedrijf.nl|
```sql
SELECT [E-mailadres] -- informatiebehoefte
FROM (
    SELECT Achternaam, [E-mailadres] 
    FROM Medewerkers 
    WHERE [E-mailadres] like '%bedrijf.nl') as Context -- context
WHERE Achternaam = 'Janssen'; -- criteria
```
De nieuwe context is minimaal, toegespitst op de informatiebehoefte, maar de complexiteit van de context is hoger. Een complexe context is moeilijker te onderhouden, maar maakt het specificeren van de informatiebehoefte eenvoudiger.

## Specificatie

De specificatie bestaat dus uit deze drie componenten: informatiebehoefte, context, en criteria.  
*Gegeven de informatiebehoefte; de voornaam van alle medewerkers met de achternaam 'Janssen'*  
![Voorbeeld van informatiebehoefte specificering](https://cadott.app/images/article_query_informatiebehoefte.png)
**Informatiebehoefte**
|Voornaam|Achternaam|
|-|-|
||n.v.t.|
**Context**
|Voornaam|Achternaam|
|-|-|
**Criteria**
|Voornaam|Achternaam|
|-|-|
|n.v.t.|'Janssen'|

*Gegeven de informatiebehoefte; het e-mailadres van alle medewerkers met de achternaam 'Janssen', met als subdomein 'bedrijf.nl'*
![Voorbeeld van informatiebehoefte specificering](https://cadott.app/images/article_query_criteria.png)
**Informatiebehoefte**
|Voornaam|Achternaam|E-mailadres|
|-|-|-|
|n.v.t.|n.v.t.||
**Context**
|Voornaam|Achternaam|E-mailadres|
|-|-|-
**Criteria**
|Voornaam|Achternaam|E-mailadres|
|-|-|-|
|n.v.t.|moet overeenkomen met 'Janssen'|subdomein moet zijn: 'bedrijf.nl'|
Of

**Informatiebehoefte**
|Achternaam|E-mailadres|
|-|-|
|n.v.t.||
**Context**
|Achternaam|E-mailadres|
|-|-|
||subdomein moet zijn: 'bedrijf.nl'|
**Criteria**
|Achternaam|E-mailadres|
|-|-|
|moet overeen komen met 'Janssen'|n.v.t.|

## Versiebeheer
Het is praktisch om de informatiebehoeften te verzamelen onder een map of folder genoemd naar de betreffende context, en versies te benoemen in de naam van de folder of het bestand. Excel voldoet prima, voor zowel de informatiebehoefte, de context, en de criteria kan een werkblad worden toegevoegd.
```
+-- medewerkers_v1
|   +-- voornaam-achternaam-janssen_v1.xlsx
+-- medewerkers_v2
|   +-- voornaam-achternaam-janssen_v2.xlsx
|   +-- email-achternaam-janssen_v1.xlsx
+-- medewerkers-subdomein-bedrijf_v1
    +-- email-achternaam-janssen_v1.xlsx
```