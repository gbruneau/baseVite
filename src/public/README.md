# `src/public/`

Contient des objets accรฉdรฉs dynamiquement.

Exemples:

- fichiers CSV / XML

## JavaScript
Rรฉfรฉrer au contenu de `public` depuis `/` et non pas `/public`. 

### Exemple
Dans la strcuture suivante
```
๐ฌ๐ซ๐/
 โฃโ ๐ข๐ฆ๐๐ ๐๐ฌ/
 โโ ๐ฉ๐ฎ๐๐ฅ๐ข๐/myData.csv
```

On accรจdera au fichier `myData.csv` comme suit:
```JavaScript
var myDataFile = "myData.csv";
```


