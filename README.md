###Opis
Gra to prosta aplikacja typu "łapanie spadających przedmiotów". Gracz kontroluje postać, która porusza się u dołu ekranu, a z góry spadają różne przedmioty, które gracz musi łapać, aby zdobyć punkty. Przedmioty, które przelecą niezłapane, odbierają graczowi punkt życia. Gra kończy się, gdy gracz traci 10 punktów życia.

###Materiały
Grafiki postaci pobrane zostały z https://lionheart963.itch.io/4-directional-character, a grafiki jedzenia z https://henrysoftware.itch.io/pixel-food.

###Technologie
Do obsługi zależności wykorzystana jest wersja npm 8.11.0, która zostanie zainstalowana wraz z node 16.16.0 LTS. Gra została napisana w języku TypeScript, a do silnika graficznego wykorzystano pixiJS. Aplikacja uruchamia sie na porcie 1234

###Rozgruywka
Postac się porusza w prawo i lewo na podstawie wciskanych strzałek na kalwiaturze. Gra kończy się jesli życie gracza apadnie do 0.


###Dystrybucja
Gra może być uruchomiona po wpisaniu komendy npm install && npm start w terminalu w wersji npm wskazanej w sekcji Technologie.

###Inne
Do nauki obsługi silnika graficznego pixiJS polecamy tutorial dostępny pod adresem https://github.com/kittykatattack/learningPixi. 
Dokumentację języka TypeScript można znaleźć pod adresem http://www.typescriptlang.org/docs/home.html.