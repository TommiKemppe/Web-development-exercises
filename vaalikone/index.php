<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vaalikone</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <script>
        var valinnat = [0, 0, 0, 0, 0, 0, 0, 0];
        function napinPainallus(index, valinta)
        {
            document.getElementById("demo").innerHTML = "Valitun vastauksen arvo : " + valinta + " kysymykseen jonka index on : " + index;
            valinnat[index] = valinta;
        }
        function showArray()
        {
            document.getElementById("arrayParagraph").innerHTML = valinnat;
        }
    </script>
</head>
<body class ="bg-light">
    <div class ="container">
        <div class ="py-5 text-center">
            <h1>Vaalikone</h1>
        </div>
        <div class="col-md-8 order-md-1">
            <p id="demo"></p>

            <h3>Talous</h3>
            <h5> Tarvittaessa valtion velkaa on vähennettävä ennemmin julkisia menoja leikkaamalla kuin veroja nostamalla </h5>
            <p>
            <form action="/example" method="POST">
            <input type="radio" name ="kysymys1" onchange="napinPainallus(0, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys1" onchange="napinPainallus(0, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys1" onchange="napinPainallus(0, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys1" onchange="napinPainallus(0, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys1" onchange="napinPainallus(0, 1)" value =1> Täysin eri mieltä<br>
            <button type="submit">send to backend</button>
            </form>
            </p>
            <h5> Valtion ei tule ottaa lisää velkaa </h5>
            <p>
            <input type="radio" name ="kysymys2" onchange="napinPainallus(1, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys2" onchange="napinPainallus(1, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys2" onchange="napinPainallus(1, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys2" onchange="napinPainallus(1, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys2" onchange="napinPainallus(1, 1)" value =1> Täysin eri mieltä<br>
            </p>

            <h3>Ympäristö</h3>
            <h5> Jos ympäristöasiat ovat ristiriidassa taloudellisten tavoitteiden kanssa, niin ympäristöasiat on asetettava etusijalle </h5>
            <p>
            <input type="radio" name ="kysymys3" onchange="napinPainallus(2, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys3" onchange="napinPainallus(2, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys3" onchange="napinPainallus(2, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys3" onchange="napinPainallus(2, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys3" onchange="napinPainallus(2, 1)" value =1> Täysin eri mieltä<br>
            </p>
            <h5> Päästöjen vähentäminen on tärkeää </h5>
            <p>
            <input type="radio" name ="kysymys4" onchange="napinPainallus(3, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys4" onchange="napinPainallus(3, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys4" onchange="napinPainallus(3, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys4" onchange="napinPainallus(3, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys4" onchange="napinPainallus(3, 1)" value =1> Täysin eri mieltä<br>
            </p>

            <h3>Terveys</h3>
            <h5> Terveydenhuolto on ensisijaisesti tuotteva julkisina palveluina </h5>
            <p>
            <input type="radio" name ="kysymys5" onchange="napinPainallus(4, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys5" onchange="napinPainallus(4, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys5" onchange="napinPainallus(4, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys5" onchange="napinPainallus(4, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys5" onchange="napinPainallus(4, 1)" value =1> Täysin eri mieltä<br>
            </p>
            <h5> Terveydenhuollon tulee olla aina täysin maksutonta kaikille </h5>
            <p>
            <input type="radio" name ="kysymys6" onchange="napinPainallus(5, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys6" onchange="napinPainallus(5, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys6" onchange="napinPainallus(5, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys6" onchange="napinPainallus(5, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys6" onchange="napinPainallus(5, 1)" value =1> Täysin eri mieltä<br>
            </p>

            <h3>Arvot</h3>
            <h5> Perinteiset arvot, kuten koti, uskonto ja isänmaa, kuvastavat arvomaailmaani </h5>
            <p>
            <input type="radio" name ="kysymys7" onchange="napinPainallus(6, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys7" onchange="napinPainallus(6, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys7" onchange="napinPainallus(6, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys7" onchange="napinPainallus(6, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys7" onchange="napinPainallus(6, 1)" value =1> Täysin eri mieltä<br>
            </p>
            <h5> Maahanmuuttajien määrän lisääntymisellä on negatiivinen vaikutus turvallisuuteen </h5>
            <p>
            <input type="radio" name ="kysymys8" onchange="napinPainallus(7, 5)" value =5> Täysin samaa mieltä<br>
            <input type="radio" name ="kysymys8" onchange="napinPainallus(7, 4)" value =4> Hieman samaa mieltä<br>
            <input type="radio" name ="kysymys8" onchange="napinPainallus(7, 3)" value =3> En osaa sanoa<br>
            <input type="radio" name ="kysymys8" onchange="napinPainallus(7, 2)" value =2> Hieman eri mieltä<br>
            <input type="radio" name ="kysymys8" onchange="napinPainallus(7, 1)" value =1> Täysin eri mieltä<br>
            </p>

            <p id="arrayParagraph"> </p>
            <p id="testFunctionParagraph"></p>
            <button type="button" onclick="showArray()">Näytä valinnat</button>
            <p><br></p>

        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>