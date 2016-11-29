# Info

Questo repo è d'aiuto se dovete smanettare con node sass, live reload.

### Installation

Assicurati di avere node installato.
Avviare il progetto:
```sh
$ cd exp
$ npm start
```

il Comando precedente viene eseguito nella sezione script "start" di package.json. Il comando registrato è:
```sh
$ gulp
```
### gulpfile.js
Inizialmente vengono inizializzate 3 variabili:
> - gulp: dpendenza gulp
> - browserSync: dipendenza per il live reload
> - sass: dipendenza per compilazione scss


------------------------------------------------------------------
Di defautl viene avviato il task 'server'. QUesto task avvia browser-sync (e quindi apre il browser di default) sulla porta 3000 e imposta la cartella app (contenente index.html).

Viene impostato un watch che esegue il task 'sass' per i file che vengono modificati di 'src.scss e src.html.

Il task sass oltre che comunicare le modifiche a console imposta origine del scss e destinazione del css compilato abilitando il reload. Il browser effetua un refresh in autonomia
