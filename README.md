# TickeTon
Ligoninėse, bankuose, pašte, pasų išdavimo skyriuose ir pan. galima matyti ekranus su skaičiukais.
Ateini, gauni lapuką pas pasirinktą specialistą/darbuotoją/langelį ir lauki savo eilės.

Minimalus užduoties įgyvendinimas ( `Level 1` )
===============================

**Turi būti 3 puslapiai (HTML failai):**
- [ ] Administravimo puslapis, skirtas įvesti naują klientą į eilę
- [ ] Švieslentės puslapis, skirtas rodyti greitai sulauksiančius klientus (aukščiausiai pas specialistą – reiškia klientui eiti)
- [ ] Specialisto puslapis, kur jis gali pažymėti, kad aptarnavo klientą

**Techniniai kriterijai:**

- [ ] Yra `JSON` failas su pavyzdiniu klientu sąrašu
- [ ] Yra mygtukas išsaugoti pavyzdinius duomenis į `localStorage` (ar `IndexDB`) (_administravimo puslapis_)
- [ ] Pavyzdiniai duomenys įkraunami dinamiškai neperkraunant naršyklės (`AJAX` užklausa)
- [ ] Duomenys atvaizduojami surikiuoti pagal specialistą ir tada pagal kliento numerį (_švieslentės puslapis_)
- [ ] Yra funkcija įrašymui į `localStorage` (_administravimo puslapis_)
- [ ] Yra funkcija kliento ištrynimui iš objekto (mygtukas `Aptarnauta`) (_specialisto puslapis_)
- [ ] Duomenų filtravimas: pasirinkimas, kokio specialisto klientus aptarnauti (_specialisto puslapis_)
- [ ] Gražesnis dizainas panaudojant `CSS` (_švieslentės puslapis_)

