// Wika Dictionary - offline word-by-word translator + optional MyMemory online.
// Runs within the existing bundled WebView; no original dictionary files change.
// Both maps are exact snapshots of user-supplied UTF-8 JSON (see README/checksums).
(function () {
  'use strict';
  if (document.getElementById('wika-online-translator')) return;

  const enToFi = {
  "a": [
    "eräs",
    "yksi"
  ],
  "abdomen": [
    "vatsa"
  ],
  "ability": [
    "kyky"
  ],
  "about": [
    "aiheesta",
    "noin"
  ],
  "above": [
    "yläpuolella"
  ],
  "accelerator": [
    "kaasupoljin"
  ],
  "accent": [
    "aksentti",
    "painotus"
  ],
  "accept": [
    "hyväksyä"
  ],
  "access": [
    "käyttöoikeus",
    "pääsy"
  ],
  "accessibility": [
    "saavutettavuus"
  ],
  "accommodation": [
    "majoitus"
  ],
  "according to": [
    "mukaan"
  ],
  "account": [
    "käyttäjätili",
    "tili"
  ],
  "accountant": [
    "kirjanpitäjä"
  ],
  "accurate": [
    "tarkka"
  ],
  "achieve": [
    "saavuttaa"
  ],
  "across": [
    "poikki",
    "yli"
  ],
  "actor": [
    "näyttelijä"
  ],
  "actress": [
    "näyttelijä"
  ],
  "adapt": [
    "sopeuttaa",
    "sopeutua"
  ],
  "adapter": [
    "sovitin"
  ],
  "add": [
    "lisätä"
  ],
  "address": [
    "osoite"
  ],
  "administration": [
    "hallinto"
  ],
  "admire": [
    "ihailla"
  ],
  "adult": [
    "aikuinen"
  ],
  "advanced": [
    "edistynyt"
  ],
  "advertisement": [
    "mainos"
  ],
  "advertising": [
    "mainonta"
  ],
  "advice": [
    "neuvo"
  ],
  "affordable": [
    "kohtuuhintainen"
  ],
  "after": [
    "jälkeen"
  ],
  "afternoon": [
    "iltapäivä"
  ],
  "again": [
    "taas",
    "uudelleen"
  ],
  "against": [
    "vastaan"
  ],
  "agenda": [
    "esityslista"
  ],
  "agree": [
    "olla samaa mieltä",
    "suostua"
  ],
  "agreement": [
    "sopimus"
  ],
  "air": [
    "ilma"
  ],
  "air conditioner": [
    "ilmastointilaite"
  ],
  "air force": [
    "ilmavoimat"
  ],
  "airplane": [
    "lentokone"
  ],
  "airport": [
    "lentoasema",
    "lentokenttä"
  ],
  "alarm clock": [
    "herätyskello"
  ],
  "alcohol": [
    "alkoholi"
  ],
  "alder": [
    "leppä"
  ],
  "alert": [
    "hälytys",
    "ilmoitus"
  ],
  "algorithm": [
    "algoritmi"
  ],
  "alive": [
    "elossa"
  ],
  "all": [
    "kaikki"
  ],
  "all right": [
    "hyvä on",
    "selvä"
  ],
  "allergen": [
    "allergeeni"
  ],
  "allergy": [
    "allergia"
  ],
  "alligator": [
    "alligaattori"
  ],
  "allow": [
    "sallia"
  ],
  "almond": [
    "manteli"
  ],
  "almost": [
    "melkein"
  ],
  "alone": [
    "yksin"
  ],
  "along": [
    "pitkin"
  ],
  "alphabet": [
    "aakkoset"
  ],
  "already": [
    "jo"
  ],
  "also": [
    "myös"
  ],
  "although": [
    "vaikka"
  ],
  "aluminum": [
    "alumiini"
  ],
  "always": [
    "aina"
  ],
  "ambulance": [
    "ambulanssi"
  ],
  "among": [
    "joukossa"
  ],
  "amount": [
    "määrä"
  ],
  "amphibian": [
    "sammakkoeläin"
  ],
  "an": [
    "eräs",
    "yksi"
  ],
  "analysis": [
    "analyysi"
  ],
  "analyst": [
    "analyytikko"
  ],
  "analyze": [
    "analysoida"
  ],
  "ancient": [
    "muinainen"
  ],
  "and": [
    "ja"
  ],
  "anger": [
    "suuttumus",
    "viha"
  ],
  "angry": [
    "vihainen"
  ],
  "animal": [
    "eläin"
  ],
  "ankle": [
    "nilkka"
  ],
  "anniversary": [
    "vuosipäivä"
  ],
  "announce": [
    "ilmoittaa",
    "julkistaa"
  ],
  "another": [
    "toinen"
  ],
  "answer": [
    "vastata",
    "vastaus"
  ],
  "ant": [
    "muurahainen"
  ],
  "anxiety": [
    "ahdistus"
  ],
  "anxious": [
    "ahdistunut",
    "huolestunut"
  ],
  "any": [
    "mikä tahansa"
  ],
  "anybody": [
    "kuka tahansa"
  ],
  "anyone": [
    "kuka tahansa"
  ],
  "anything": [
    "mitä tahansa"
  ],
  "anywhere": [
    "missä tahansa"
  ],
  "apart": [
    "erillään"
  ],
  "apartment": [
    "asunto",
    "huoneisto"
  ],
  "ape": [
    "ihmisapina"
  ],
  "apologize": [
    "pyytää anteeksi"
  ],
  "app": [
    "sovellus"
  ],
  "apparently": [
    "ilmeisesti"
  ],
  "appetizer": [
    "alkupala"
  ],
  "apple": [
    "omena"
  ],
  "apple juice": [
    "omenamehu"
  ],
  "application": [
    "hakemus",
    "sovellus"
  ],
  "apply": [
    "hakea",
    "soveltaa"
  ],
  "appointment": [
    "ajanvaraus",
    "tapaaminen"
  ],
  "appreciate": [
    "arvostaa"
  ],
  "approach": [
    "lähestymistapa",
    "lähestyä"
  ],
  "approval": [
    "hyväksyntä"
  ],
  "approve": [
    "hyväksyä"
  ],
  "approximate": [
    "likimääräinen"
  ],
  "approximately": [
    "likimäärin",
    "noin",
    "suunnilleen"
  ],
  "apricot": [
    "aprikoosi"
  ],
  "april": [
    "huhtikuu"
  ],
  "apron": [
    "esiliina"
  ],
  "aquarium": [
    "akvaario"
  ],
  "architect": [
    "arkkitehti"
  ],
  "architecture": [
    "arkkitehtuuri"
  ],
  "archive": [
    "arkisto"
  ],
  "area": [
    "alue",
    "pinta-ala"
  ],
  "arena": [
    "areena"
  ],
  "Argentina": [
    "Argentiina"
  ],
  "argentina": [
    "Argentiina"
  ],
  "argue": [
    "kiistellä",
    "väitellä"
  ],
  "argument": [
    "argumentti",
    "peruste"
  ],
  "arm": [
    "käsivarsi"
  ],
  "armchair": [
    "nojatuoli"
  ],
  "army": [
    "armeija"
  ],
  "army base": [
    "sotilastukikohta"
  ],
  "around": [
    "noin",
    "ympärillä"
  ],
  "arrange": [
    "järjestää"
  ],
  "array": [
    "taulukko"
  ],
  "arrest": [
    "pidätys"
  ],
  "arrival": [
    "saapuminen"
  ],
  "arrive": [
    "saapua"
  ],
  "art": [
    "taide"
  ],
  "art gallery": [
    "taidegalleria"
  ],
  "artery": [
    "valtimo"
  ],
  "article": [
    "artikkeli"
  ],
  "artist": [
    "taiteilija"
  ],
  "as": [
    "kun",
    "kuten"
  ],
  "as well as": [
    "samoin kuin",
    "sekä"
  ],
  "ash": [
    "tuhka"
  ],
  "ashamed": [
    "häpeissään"
  ],
  "ask": [
    "kysyä",
    "pyytää"
  ],
  "asleep": [
    "nukkumassa",
    "unessa"
  ],
  "asparagus": [
    "parsa"
  ],
  "aspen": [
    "haapa"
  ],
  "assemble": [
    "koota"
  ],
  "assignment": [
    "tehtävä"
  ],
  "assist": [
    "avustaa"
  ],
  "assistant": [
    "assistentti",
    "avustaja"
  ],
  "association": [
    "yhdistys"
  ],
  "assume": [
    "olettaa"
  ],
  "asterisk": [
    "tähti"
  ],
  "asteroid": [
    "asteroidi"
  ],
  "at": [
    "luona",
    "ssa"
  ],
  "at least": [
    "ainakin"
  ],
  "at most": [
    "enintään"
  ],
  "athlete": [
    "urheilija"
  ],
  "atlas": [
    "kartasto"
  ],
  "ATM": [
    "pankkiautomaatti"
  ],
  "atm": [
    "pankkiautomaatti"
  ],
  "attach": [
    "kiinnittää"
  ],
  "attachment": [
    "liite"
  ],
  "attack": [
    "hyökätä"
  ],
  "attempt": [
    "yrittää"
  ],
  "attend": [
    "käydä",
    "osallistua"
  ],
  "attic": [
    "ullakko"
  ],
  "attribute": [
    "attribuutti",
    "ominaisuus"
  ],
  "august": [
    "elokuu"
  ],
  "aunt": [
    "setä- tai enon vaimo",
    "täti"
  ],
  "aurora": [
    "revontulet"
  ],
  "Australia": [
    "Australia"
  ],
  "australia": [
    "Australia"
  ],
  "Austria": [
    "Itävalta"
  ],
  "austria": [
    "Itävalta"
  ],
  "authentication": [
    "todennus"
  ],
  "author": [
    "kirjailija",
    "tekijä"
  ],
  "authority": [
    "valta",
    "valtuus",
    "viranomainen"
  ],
  "authorization": [
    "valtuutus"
  ],
  "autumn": [
    "syksy"
  ],
  "availability": [
    "saatavuus"
  ],
  "available": [
    "saatavilla",
    "vapaa"
  ],
  "avenue": [
    "puistokatu"
  ],
  "average": [
    "keskiarvo"
  ],
  "avocado": [
    "avokado"
  ],
  "avoid": [
    "välttää"
  ],
  "awake": [
    "hereillä"
  ],
  "awful": [
    "hirveä"
  ],
  "baby": [
    "vauva"
  ],
  "back": [
    "selkä"
  ],
  "backpack": [
    "reppu"
  ],
  "backslash": [
    "kenoviiva"
  ],
  "backup": [
    "varmuuskopio"
  ],
  "backward": [
    "taaksepäin"
  ],
  "bacon": [
    "pekoni"
  ],
  "bacteria": [
    "bakteeri"
  ],
  "bad": [
    "huono",
    "paha"
  ],
  "badger": [
    "mäyrä"
  ],
  "bag": [
    "laukku",
    "pussi"
  ],
  "baggage": [
    "matkatavarat"
  ],
  "bake": [
    "leipoa",
    "paistaa"
  ],
  "baker": [
    "leipuri"
  ],
  "bakery": [
    "leipomo"
  ],
  "baking": [
    "leivonta"
  ],
  "balcony": [
    "parveke"
  ],
  "balloon": [
    "ilmapallo"
  ],
  "ballot": [
    "äänestyslippu"
  ],
  "bamboo": [
    "bambu"
  ],
  "banana": [
    "banaani"
  ],
  "bandage": [
    "side"
  ],
  "bandage roll": [
    "sideharso"
  ],
  "bandwidth": [
    "kaistanleveys"
  ],
  "bank": [
    "joenranta",
    "pankki"
  ],
  "banker": [
    "pankkiiri"
  ],
  "banknote": [
    "seteli"
  ],
  "bark": [
    "kaarna",
    "kuori"
  ],
  "barley": [
    "ohra"
  ],
  "barrier": [
    "este"
  ],
  "basement": [
    "kellari"
  ],
  "basic": [
    "perus-",
    "perustava"
  ],
  "basil": [
    "basilika"
  ],
  "bat": [
    "lepakko"
  ],
  "bath towel": [
    "kylpypyyhe"
  ],
  "bathroom": [
    "kylpyhuone"
  ],
  "bathtub": [
    "kylpyamme"
  ],
  "battery": [
    "akku",
    "paristo"
  ],
  "battle": [
    "taistelu"
  ],
  "bay": [
    "lahti"
  ],
  "be": [
    "olla"
  ],
  "be able to": [
    "pystyä",
    "voida"
  ],
  "beach": [
    "ranta",
    "uimaranta"
  ],
  "beach resort": [
    "rantalomakohde"
  ],
  "bean": [
    "papu"
  ],
  "beanie": [
    "pipo"
  ],
  "bear": [
    "karhu"
  ],
  "beard": [
    "parta"
  ],
  "beat": [
    "isku",
    "tahti"
  ],
  "beautiful": [
    "kaunis"
  ],
  "beaver": [
    "majava"
  ],
  "because": [
    "koska"
  ],
  "because of": [
    "takia",
    "vuoksi"
  ],
  "become": [
    "muuttua",
    "tulla"
  ],
  "bed": [
    "sänky"
  ],
  "bedroom": [
    "makuuhuone"
  ],
  "bedsheet": [
    "lakana"
  ],
  "bee": [
    "mehiläinen"
  ],
  "beef": [
    "naudanliha"
  ],
  "beer": [
    "olut"
  ],
  "beetle": [
    "kovakuoriainen"
  ],
  "beetroot": [
    "punajuuri"
  ],
  "before": [
    "ennen"
  ],
  "begin": [
    "alkaa",
    "aloittaa"
  ],
  "behavior": [
    "käyttäytyminen"
  ],
  "behind": [
    "takana"
  ],
  "beige": [
    "beige"
  ],
  "Belgium": [
    "Belgia"
  ],
  "belgium": [
    "Belgia"
  ],
  "belief": [
    "usko",
    "uskomus"
  ],
  "believe": [
    "uskoa"
  ],
  "bell pepper": [
    "paprika"
  ],
  "belly": [
    "vatsa"
  ],
  "below": [
    "alapuolella"
  ],
  "belt": [
    "vyö"
  ],
  "bench": [
    "penkki"
  ],
  "bend": [
    "taipua",
    "taivuttaa"
  ],
  "berry": [
    "marja"
  ],
  "beside": [
    "vieressä"
  ],
  "best": [
    "paras"
  ],
  "better": [
    "parempi"
  ],
  "between": [
    "välissä"
  ],
  "beyond": [
    "tuolla puolen"
  ],
  "bicycle": [
    "polkupyörä"
  ],
  "big": [
    "iso",
    "suuri"
  ],
  "bike": [
    "polkupyörä",
    "pyörä"
  ],
  "bilberry": [
    "mustikka"
  ],
  "bill": [
    "lasku"
  ],
  "billion": [
    "miljardi"
  ],
  "bin": [
    "roskakori"
  ],
  "biology": [
    "biologia"
  ],
  "birch": [
    "koivu"
  ],
  "bird": [
    "lintu"
  ],
  "birth": [
    "synnytys",
    "syntymä"
  ],
  "birthday": [
    "syntymäpäivä"
  ],
  "bit": [
    "bitti"
  ],
  "bitter": [
    "karvas",
    "katkera"
  ],
  "black": [
    "musta"
  ],
  "black pepper": [
    "mustapippuri"
  ],
  "blackberry": [
    "karhunvatukka"
  ],
  "blackcurrant": [
    "mustaherukka"
  ],
  "bladder": [
    "virtsarakko"
  ],
  "blanket": [
    "peitto"
  ],
  "bleach": [
    "valkaisuaine"
  ],
  "blend": [
    "sekoittaa"
  ],
  "blender": [
    "tehosekoitin"
  ],
  "blinds": [
    "sälekaihtimet"
  ],
  "blink": [
    "räpäyttää silmiä"
  ],
  "blizzard": [
    "lumimyrsky"
  ],
  "blog": [
    "blogi"
  ],
  "blood": [
    "veri"
  ],
  "blossom": [
    "kukinta",
    "kukka"
  ],
  "blouse": [
    "pusero"
  ],
  "blue": [
    "sininen"
  ],
  "blueberry": [
    "mustikka"
  ],
  "Bluetooth": [
    "Bluetooth"
  ],
  "bluetooth": [
    "Bluetooth"
  ],
  "blunt": [
    "tylppä"
  ],
  "boar": [
    "villisika"
  ],
  "boarding pass": [
    "tarkastuskortti"
  ],
  "boat": [
    "vene"
  ],
  "body": [
    "keho",
    "vartalo"
  ],
  "bog": [
    "suo"
  ],
  "boil": [
    "keittää",
    "kiehua"
  ],
  "boiling": [
    "keittäminen"
  ],
  "bolt": [
    "pultti"
  ],
  "bone": [
    "luu"
  ],
  "book": [
    "kirja",
    "varata"
  ],
  "bookshelf": [
    "kirjahylly"
  ],
  "bookshop": [
    "kirjakauppa"
  ],
  "bookstore": [
    "kirjakauppa"
  ],
  "boot": [
    "saapas"
  ],
  "border": [
    "raja"
  ],
  "bored": [
    "tylsistynyt"
  ],
  "boring": [
    "tylsä"
  ],
  "borrow": [
    "lainata"
  ],
  "boss": [
    "pomo"
  ],
  "botanical garden": [
    "kasvitieteellinen puutarha"
  ],
  "both": [
    "molemmat"
  ],
  "bottle": [
    "pullo"
  ],
  "boulevard": [
    "bulevardi"
  ],
  "bow tie": [
    "rusetti"
  ],
  "bowl": [
    "kulho"
  ],
  "box": [
    "laatikko"
  ],
  "boy": [
    "poika"
  ],
  "boyfriend": [
    "poikaystävä"
  ],
  "bra": [
    "rintaliivit"
  ],
  "bracelet": [
    "rannekoru"
  ],
  "bracket": [
    "hakasulje"
  ],
  "brain": [
    "aivot"
  ],
  "brake": [
    "jarru"
  ],
  "branch": [
    "oksa"
  ],
  "brand": [
    "tuotemerkki"
  ],
  "brass": [
    "messinki"
  ],
  "brave": [
    "rohkea"
  ],
  "Brazil": [
    "Brasilia"
  ],
  "brazil": [
    "Brasilia"
  ],
  "bread": [
    "leipä"
  ],
  "break": [
    "hajota",
    "rikkoa"
  ],
  "breakfast": [
    "aamiainen"
  ],
  "breast": [
    "rinta"
  ],
  "breath": [
    "hengitys"
  ],
  "breathe": [
    "hengittää"
  ],
  "breeze": [
    "tuulenvire"
  ],
  "bridge": [
    "silta"
  ],
  "briefs": [
    "alushousut"
  ],
  "bright": [
    "kirkas",
    "valoisa"
  ],
  "bring": [
    "tuoda"
  ],
  "broccoli": [
    "parsakaali"
  ],
  "bronze": [
    "pronssi"
  ],
  "brooch": [
    "rintakoru"
  ],
  "broom": [
    "luuta"
  ],
  "brother": [
    "veli"
  ],
  "brown": [
    "ruskea"
  ],
  "browse": [
    "selata"
  ],
  "browser": [
    "selain"
  ],
  "browser tab": [
    "selainvälilehti"
  ],
  "bruise": [
    "mustelma"
  ],
  "brush": [
    "harja"
  ],
  "budget": [
    "budjetti",
    "talousarvio"
  ],
  "buffer": [
    "puskuri"
  ],
  "bug": [
    "virhe",
    "ötökkä"
  ],
  "bug fix": [
    "virheenkorjaus"
  ],
  "bug report": [
    "virheraportti"
  ],
  "build": [
    "rakentaa"
  ],
  "builder": [
    "rakentaja"
  ],
  "building": [
    "rakennus"
  ],
  "bull": [
    "sonni"
  ],
  "bun": [
    "pulla",
    "sämpylä"
  ],
  "burn": [
    "palaa",
    "palovamma",
    "polttaa"
  ],
  "bus": [
    "bussi",
    "linja-auto"
  ],
  "bus stop": [
    "bussipysäkki"
  ],
  "bush": [
    "pensas"
  ],
  "business": [
    "liiketoiminta",
    "yritys"
  ],
  "busy": [
    "kiireinen",
    "varattu"
  ],
  "but": [
    "mutta"
  ],
  "butcher": [
    "lihakauppias"
  ],
  "butcher shop": [
    "lihakauppa"
  ],
  "butter": [
    "voi"
  ],
  "butterfly": [
    "perhonen"
  ],
  "buttock": [
    "pakara"
  ],
  "button": [
    "nappi",
    "painike"
  ],
  "buy": [
    "ostaa"
  ],
  "by": [
    "mennessä",
    "vieressä"
  ],
  "by the way": [
    "muuten"
  ],
  "bye": [
    "hei hei",
    "moi moi"
  ],
  "byte": [
    "tavu"
  ],
  "cab": [
    "taksi"
  ],
  "cabbage": [
    "kaali"
  ],
  "cabin": [
    "mökki"
  ],
  "cabinet": [
    "hallitus",
    "kaappi"
  ],
  "cable": [
    "kaapeli"
  ],
  "cache": [
    "välimuisti"
  ],
  "cactus": [
    "kaktus"
  ],
  "cafe": [
    "kahvila"
  ],
  "cafeteria": [
    "kahvila",
    "ruokala"
  ],
  "calculate": [
    "laskea"
  ],
  "calendar": [
    "kalenteri"
  ],
  "calf": [
    "vasikka"
  ],
  "call": [
    "kutsua",
    "soittaa"
  ],
  "calm": [
    "rauhallinen"
  ],
  "camera": [
    "kamera"
  ],
  "campground": [
    "leirintäalue"
  ],
  "campsite": [
    "telttapaikka"
  ],
  "campus": [
    "kampus"
  ],
  "can": [
    "osata",
    "pystyä",
    "tölkki",
    "voida"
  ],
  "can not": [
    "ei voi"
  ],
  "can't": [
    "ei voi"
  ],
  "Canada": [
    "Kanada"
  ],
  "canada": [
    "Kanada"
  ],
  "cancel": [
    "peruuttaa"
  ],
  "cancellation": [
    "peruutus"
  ],
  "candidate": [
    "ehdokas"
  ],
  "candle": [
    "kynttilä"
  ],
  "candlestick": [
    "kynttilänjalka"
  ],
  "candy": [
    "karkki",
    "makeinen"
  ],
  "cannot": [
    "ei voi"
  ],
  "canoe": [
    "kanootti"
  ],
  "cap": [
    "lakki",
    "lippalakki"
  ],
  "capacity": [
    "kapasiteetti"
  ],
  "cape": [
    "niemi"
  ],
  "capital": [
    "pääkaupunki",
    "pääoma"
  ],
  "capital city": [
    "pääkaupunki"
  ],
  "car": [
    "auto"
  ],
  "carbon": [
    "hiili"
  ],
  "carbon dioxide": [
    "hiilidioksidi"
  ],
  "card": [
    "kortti"
  ],
  "cardamom": [
    "kardemumma"
  ],
  "cardboard": [
    "pahvi"
  ],
  "care": [
    "hoitaa",
    "välittää"
  ],
  "career": [
    "ura"
  ],
  "carefully": [
    "huolellisesti"
  ],
  "carpenter": [
    "puuseppä"
  ],
  "carpet": [
    "matto"
  ],
  "carrot": [
    "porkkana"
  ],
  "carry": [
    "kantaa"
  ],
  "carry-on luggage": [
    "käsimatkatavarat"
  ],
  "cash": [
    "käteinen"
  ],
  "cash machine": [
    "pankkiautomaatti"
  ],
  "cashew": [
    "cashewpähkinä"
  ],
  "cashier": [
    "kassanhoitaja"
  ],
  "castle": [
    "linna"
  ],
  "cat": [
    "kissa"
  ],
  "catch": [
    "ottaa kiinni"
  ],
  "category": [
    "kategoria",
    "luokka"
  ],
  "cathedral": [
    "katedraali"
  ],
  "cauliflower": [
    "kukkakaali"
  ],
  "cause": [
    "aiheuttaja",
    "syy"
  ],
  "cave": [
    "luola"
  ],
  "caviar": [
    "kaviaari"
  ],
  "ceiling": [
    "katto",
    "sisäkatto"
  ],
  "celery": [
    "selleri"
  ],
  "cell": [
    "solu"
  ],
  "cellar": [
    "kellari"
  ],
  "cello": [
    "sello"
  ],
  "cemetery": [
    "hautausmaa"
  ],
  "centimeter": [
    "senttimetri"
  ],
  "central": [
    "keskeinen"
  ],
  "century": [
    "vuosisata"
  ],
  "ceramic": [
    "keramiikka"
  ],
  "cereal": [
    "murot",
    "vilja"
  ],
  "certainly": [
    "varmasti"
  ],
  "certificate": [
    "todistus"
  ],
  "certification": [
    "sertifiointi"
  ],
  "chair": [
    "tuoli"
  ],
  "challenge": [
    "haaste"
  ],
  "chance": [
    "mahdollisuus",
    "sattuma"
  ],
  "chandelier": [
    "kattokruunu"
  ],
  "change": [
    "muuttaa",
    "muuttua"
  ],
  "channel": [
    "kanava"
  ],
  "chapel": [
    "kappeli"
  ],
  "chapter": [
    "luku"
  ],
  "character": [
    "hahmo",
    "luonne",
    "merkki"
  ],
  "charge": [
    "ladata",
    "veloittaa"
  ],
  "charger": [
    "laturi"
  ],
  "charging station": [
    "latausasema"
  ],
  "chart": [
    "kaavio"
  ],
  "chase": [
    "jahdata"
  ],
  "cheap": [
    "halpa"
  ],
  "cheat": [
    "huijata"
  ],
  "check": [
    "lasku",
    "tarkistaa",
    "tarkistus"
  ],
  "check-in": [
    "sisäänkirjautuminen"
  ],
  "check-out": [
    "uloskirjautuminen"
  ],
  "cheek": [
    "poski"
  ],
  "cheers": [
    "kippis"
  ],
  "cheese": [
    "juusto"
  ],
  "cheetah": [
    "gepardi"
  ],
  "chef": [
    "kokki"
  ],
  "chemistry": [
    "kemia"
  ],
  "cherry": [
    "kirsikka"
  ],
  "chest": [
    "rinta"
  ],
  "chest of drawers": [
    "lipasto"
  ],
  "chick": [
    "tipu"
  ],
  "chicken": [
    "kana",
    "kananliha"
  ],
  "chicken egg": [
    "kananmuna"
  ],
  "chickpea": [
    "kikherne"
  ],
  "child": [
    "lapsi"
  ],
  "children": [
    "lapset"
  ],
  "Chile": [
    "Chile"
  ],
  "chile": [
    "Chile"
  ],
  "chili": [
    "chili"
  ],
  "chimney": [
    "savupiippu"
  ],
  "chimpanzee": [
    "simpanssi"
  ],
  "chin": [
    "leuka"
  ],
  "China": [
    "Kiina"
  ],
  "china": [
    "Kiina"
  ],
  "Chinese": [
    "kiina",
    "kiinalainen"
  ],
  "chinese": [
    "kiina",
    "kiinalainen"
  ],
  "chip": [
    "lastu",
    "siru"
  ],
  "chocolate": [
    "suklaa"
  ],
  "choice": [
    "valinta"
  ],
  "choose": [
    "valita"
  ],
  "chop": [
    "pilkkoa"
  ],
  "chopsticks": [
    "syömäpuikot"
  ],
  "Christmas": [
    "joulu"
  ],
  "christmas": [
    "joulu"
  ],
  "church": [
    "kirkko"
  ],
  "cider": [
    "siideri"
  ],
  "cinema": [
    "elokuvateatteri"
  ],
  "cinnamon": [
    "kaneli"
  ],
  "circle": [
    "ympyrä"
  ],
  "citizen": [
    "kansalainen"
  ],
  "citizenship": [
    "kansalaisuus"
  ],
  "city": [
    "kaupunki"
  ],
  "city council": [
    "kaupunginvaltuusto"
  ],
  "city hall": [
    "kaupungintalo"
  ],
  "class": [
    "luokan määritelmä",
    "luokka",
    "oppitunti"
  ],
  "classify": [
    "luokitella"
  ],
  "classroom": [
    "luokkahuone"
  ],
  "clay": [
    "savi"
  ],
  "clean": [
    "puhdas",
    "puhdistaa",
    "siivota"
  ],
  "cleaning agent": [
    "puhdistusaine"
  ],
  "clear": [
    "kirkas",
    "selkeä"
  ],
  "clear sky": [
    "selkeä taivas"
  ],
  "clearly": [
    "selvästi"
  ],
  "clerk": [
    "virkailija"
  ],
  "clever": [
    "nokkela",
    "älykäs"
  ],
  "click": [
    "napsauttaa"
  ],
  "client": [
    "asiakas",
    "asiakasohjelma"
  ],
  "cliff": [
    "jyrkänne"
  ],
  "climate": [
    "ilmasto"
  ],
  "climb": [
    "kiivetä"
  ],
  "clinic": [
    "klinikka"
  ],
  "clock": [
    "kello"
  ],
  "close": [
    "olla lähellä",
    "sulkea"
  ],
  "close door": [
    "sulkea ovi"
  ],
  "closed": [
    "kiinni",
    "suljettu"
  ],
  "closet": [
    "kaappi"
  ],
  "clothes": [
    "vaatteet"
  ],
  "clothing": [
    "vaatetus"
  ],
  "cloud": [
    "pilvi"
  ],
  "cloudberry": [
    "hilla",
    "lakka"
  ],
  "cloudy": [
    "pilvinen"
  ],
  "clover": [
    "apila"
  ],
  "coach": [
    "valmentaja"
  ],
  "coast": [
    "rannikko"
  ],
  "coat": [
    "päällystakki",
    "takki"
  ],
  "cocoa": [
    "kaakao"
  ],
  "coconut": [
    "kookospähkinä"
  ],
  "cod": [
    "turska"
  ],
  "code": [
    "koodi"
  ],
  "coffee": [
    "kahvi"
  ],
  "coffee machine": [
    "kahvikone"
  ],
  "coffee maker": [
    "kahvinkeitin"
  ],
  "coffee table": [
    "sohvapöytä"
  ],
  "coin": [
    "kolikko"
  ],
  "cold": [
    "kylmä",
    "nuha",
    "vilustuminen"
  ],
  "coldness": [
    "kylmyys"
  ],
  "collaborate": [
    "tehdä yhteistyötä"
  ],
  "collar": [
    "kaulus"
  ],
  "colleague": [
    "kollega",
    "työtoveri"
  ],
  "collect": [
    "kerätä"
  ],
  "college": [
    "korkeakoulu",
    "opisto"
  ],
  "colon": [
    "kaksoispiste"
  ],
  "color": [
    "väri"
  ],
  "colour": [
    "väri"
  ],
  "column": [
    "sarake"
  ],
  "comb": [
    "kampa"
  ],
  "combine": [
    "yhdistää"
  ],
  "come": [
    "tulla"
  ],
  "comet": [
    "komeetta"
  ],
  "comic": [
    "sarjakuva"
  ],
  "comic book": [
    "sarjakuvalehti"
  ],
  "comma": [
    "pilkku"
  ],
  "comment": [
    "kommentti"
  ],
  "common": [
    "tavallinen",
    "yleinen"
  ],
  "communicate": [
    "viestiä"
  ],
  "community": [
    "yhteisö"
  ],
  "company": [
    "yritys"
  ],
  "compare": [
    "verrata"
  ],
  "compass": [
    "kompassi"
  ],
  "compatibility": [
    "yhteensopivuus"
  ],
  "compete": [
    "kilpailla"
  ],
  "complain": [
    "valittaa"
  ],
  "complete": [
    "suorittaa loppuun",
    "valmistua"
  ],
  "completely": [
    "täysin"
  ],
  "complex": [
    "monimutkainen"
  ],
  "complicated": [
    "monimutkainen"
  ],
  "component": [
    "komponentti"
  ],
  "computer": [
    "tietokone"
  ],
  "concept": [
    "käsite"
  ],
  "concert": [
    "konsertti"
  ],
  "concert hall": [
    "konserttisali"
  ],
  "conclusion": [
    "johtopäätös"
  ],
  "condition": [
    "ehto",
    "tila"
  ],
  "conditioner": [
    "hoitoaine"
  ],
  "conference": [
    "konferenssi",
    "neuvottelu"
  ],
  "confidence": [
    "itseluottamus",
    "varmuus"
  ],
  "configuration": [
    "konfiguraatio",
    "määritys"
  ],
  "confirm": [
    "vahvistaa"
  ],
  "conflict": [
    "konflikti",
    "ristiriita"
  ],
  "congratulations": [
    "onnittelut"
  ],
  "connect": [
    "yhdistää"
  ],
  "connection": [
    "vaihtoyhteys",
    "yhteys"
  ],
  "connectivity": [
    "yhteydet"
  ],
  "conscience": [
    "omatunto"
  ],
  "consider": [
    "harkita",
    "pitää jonakin"
  ],
  "consonant": [
    "konsonantti"
  ],
  "constant": [
    "vakio"
  ],
  "constitution": [
    "perustuslaki"
  ],
  "construct": [
    "rakentaa"
  ],
  "construction": [
    "rakennusala",
    "rakentaminen"
  ],
  "construction site": [
    "rakennustyömaa"
  ],
  "consulate": [
    "konsulaatti"
  ],
  "contact": [
    "ottaa yhteyttä"
  ],
  "contact lens": [
    "piilolinssi"
  ],
  "continent": [
    "maanosa"
  ],
  "continue": [
    "jatkaa"
  ],
  "contract": [
    "sopimus"
  ],
  "control": [
    "hallita",
    "ohjata"
  ],
  "conversation": [
    "keskustelu"
  ],
  "cook": [
    "kokata",
    "kokki",
    "valmistaa ruokaa"
  ],
  "cooked": [
    "kypsennetty"
  ],
  "cool": [
    "jäähdyttää",
    "viileä"
  ],
  "cooperate": [
    "tehdä yhteistyötä"
  ],
  "copper": [
    "kupari"
  ],
  "copy": [
    "kopioida"
  ],
  "copyright": [
    "tekijänoikeus"
  ],
  "corn": [
    "maissi"
  ],
  "corner": [
    "kulma",
    "nurkka"
  ],
  "corporation": [
    "yhtiö"
  ],
  "correct": [
    "oikea"
  ],
  "correctly": [
    "oikein"
  ],
  "corridor": [
    "käytävä"
  ],
  "cosmetics": [
    "kosmetiikka"
  ],
  "cost": [
    "kustannus",
    "maksaa"
  ],
  "cottage": [
    "mökki"
  ],
  "cottage cheese": [
    "raejuusto"
  ],
  "cotton": [
    "puuvilla"
  ],
  "couch": [
    "sohva"
  ],
  "cough": [
    "yskiä",
    "yskä"
  ],
  "could": [
    "pystyisi",
    "voisi"
  ],
  "count": [
    "laskea",
    "laskea lukumäärä"
  ],
  "country": [
    "maa"
  ],
  "county": [
    "kreivikunta",
    "piirikunta"
  ],
  "courage": [
    "rohkeus"
  ],
  "courier": [
    "lähetti"
  ],
  "course": [
    "kurssi"
  ],
  "court": [
    "kenttä",
    "tuomioistuin"
  ],
  "courthouse": [
    "oikeustalo"
  ],
  "cousin": [
    "serkku"
  ],
  "cover letter": [
    "saatekirje"
  ],
  "cow": [
    "lehmä"
  ],
  "cowardly": [
    "pelkurimainen"
  ],
  "coworker": [
    "työtoveri"
  ],
  "CPU": [
    "suoritin"
  ],
  "cpu": [
    "suoritin"
  ],
  "crab": [
    "rapu"
  ],
  "crack": [
    "haljeta",
    "halkaista"
  ],
  "cranberry": [
    "karpalo"
  ],
  "crawl": [
    "ryömiä"
  ],
  "crayfish": [
    "rapu"
  ],
  "cream": [
    "kerma"
  ],
  "create": [
    "luoda"
  ],
  "credit": [
    "luotto"
  ],
  "credit card": [
    "luottokortti"
  ],
  "crime": [
    "rikos"
  ],
  "criminal": [
    "rikollinen"
  ],
  "criticize": [
    "arvostella"
  ],
  "crocodile": [
    "krokotiili"
  ],
  "cross": [
    "ylittää"
  ],
  "crossroads": [
    "tienristeys"
  ],
  "crosswalk": [
    "suojatie"
  ],
  "crow": [
    "varis"
  ],
  "cruise": [
    "risteily"
  ],
  "cry": [
    "itkeä"
  ],
  "cube": [
    "kuutio"
  ],
  "cucumber": [
    "kurkku"
  ],
  "cuff": [
    "kalvosin"
  ],
  "culture": [
    "kulttuuri"
  ],
  "cumin": [
    "juustokumina",
    "kumina"
  ],
  "cup": [
    "kuppi"
  ],
  "cupboard": [
    "kaappi"
  ],
  "curious": [
    "utelias"
  ],
  "currency": [
    "valuutta"
  ],
  "currently": [
    "tällä hetkellä"
  ],
  "cursor": [
    "kohdistin",
    "osoitin"
  ],
  "curtain": [
    "verho"
  ],
  "custom": [
    "perinne",
    "tapa"
  ],
  "customer": [
    "asiakas"
  ],
  "customs": [
    "tulli"
  ],
  "cut": [
    "leikata"
  ],
  "cute": [
    "söpö"
  ],
  "cutting board": [
    "leikkuulauta"
  ],
  "CV": [
    "ansioluettelo"
  ],
  "cv": [
    "ansioluettelo"
  ],
  "cycle": [
    "pyöräillä"
  ],
  "dad": [
    "isä"
  ],
  "daisy": [
    "päivänkakkara"
  ],
  "dancer": [
    "tanssija"
  ],
  "dandelion": [
    "voikukka"
  ],
  "danger": [
    "vaara"
  ],
  "dangerous": [
    "vaarallinen"
  ],
  "Danish": [
    "tanska",
    "tanskalainen"
  ],
  "danish": [
    "tanska",
    "tanskalainen"
  ],
  "dark": [
    "pimeä",
    "tumma"
  ],
  "dash": [
    "ajatusviiva",
    "viiva"
  ],
  "dashboard": [
    "koontinäyttö"
  ],
  "data": [
    "data",
    "tiedot"
  ],
  "database": [
    "tietokanta"
  ],
  "dataset": [
    "aineisto",
    "datajoukko"
  ],
  "date": [
    "päivämäärä",
    "taateli",
    "treffit"
  ],
  "daughter": [
    "tytär"
  ],
  "dawn": [
    "aamunkoitto"
  ],
  "day": [
    "päivä"
  ],
  "daycare": [
    "päivähoito",
    "päiväkoti"
  ],
  "dead": [
    "kuollut"
  ],
  "deadline": [
    "määräaika"
  ],
  "deal": [
    "kauppa",
    "sopimus"
  ],
  "death": [
    "kuolema"
  ],
  "debate": [
    "väitellä"
  ],
  "debit card": [
    "pankkikortti"
  ],
  "debt": [
    "velka"
  ],
  "decade": [
    "vuosikymmen"
  ],
  "december": [
    "joulukuu"
  ],
  "decide": [
    "päättää"
  ],
  "decimal": [
    "desimaali"
  ],
  "decrease": [
    "vähentyä",
    "vähentää"
  ],
  "deer": [
    "kauris",
    "peura"
  ],
  "defend": [
    "puolustaa"
  ],
  "define": [
    "määritellä"
  ],
  "definition": [
    "määritelmä"
  ],
  "degree": [
    "aste"
  ],
  "degree Celsius": [
    "celsiusaste"
  ],
  "degree celsius": [
    "celsiusaste"
  ],
  "delay": [
    "viivästys"
  ],
  "delicious": [
    "herkullinen"
  ],
  "deliver": [
    "toimittaa"
  ],
  "delivery": [
    "toimitus"
  ],
  "demand": [
    "kysyntä"
  ],
  "democracy": [
    "demokratia"
  ],
  "demolish": [
    "purkaa"
  ],
  "Denmark": [
    "Tanska"
  ],
  "denmark": [
    "Tanska"
  ],
  "dentist": [
    "hammaslääkäri"
  ],
  "deodorant": [
    "deodorantti"
  ],
  "department": [
    "osasto"
  ],
  "department store": [
    "tavaratalo"
  ],
  "departure": [
    "lähtö"
  ],
  "describe": [
    "kuvailla",
    "kuvata"
  ],
  "designer": [
    "muotoilija",
    "suunnittelija"
  ],
  "desk": [
    "kirjoituspöytä"
  ],
  "desktop computer": [
    "pöytätietokone"
  ],
  "despite": [
    "huolimatta"
  ],
  "dessert": [
    "jälkiruoka"
  ],
  "destination": [
    "määränpää"
  ],
  "destroy": [
    "tuhota"
  ],
  "detergent": [
    "pesuaine"
  ],
  "develop": [
    "kehittyä",
    "kehittää"
  ],
  "developer": [
    "kehittäjä"
  ],
  "dew": [
    "kaste"
  ],
  "diagnosis": [
    "diagnoosi"
  ],
  "dialogue": [
    "vuoropuhelu"
  ],
  "dictatorship": [
    "diktatuuri"
  ],
  "dictionary": [
    "sanakirja"
  ],
  "die": [
    "kuolla"
  ],
  "diesel": [
    "diesel",
    "dieselöljy"
  ],
  "difficult": [
    "vaikea"
  ],
  "digit": [
    "lukumerkki",
    "numero"
  ],
  "dill": [
    "tilli"
  ],
  "dining table": [
    "ruokapöytä"
  ],
  "dinner": [
    "illallinen",
    "päivällinen"
  ],
  "direct": [
    "suora"
  ],
  "direction": [
    "ohje",
    "suunta"
  ],
  "directory": [
    "hakemisto"
  ],
  "dirty": [
    "likainen"
  ],
  "disagree": [
    "olla eri mieltä"
  ],
  "discount": [
    "alennus"
  ],
  "discover": [
    "löytää"
  ],
  "discussion": [
    "keskustelu"
  ],
  "disease": [
    "sairaus",
    "tauti"
  ],
  "disgusting": [
    "ällöttävä"
  ],
  "dish": [
    "astia",
    "ruokalaji"
  ],
  "dish rack": [
    "astiankuivausteline"
  ],
  "dishonest": [
    "epärehellinen"
  ],
  "dishwasher": [
    "astianpesukone"
  ],
  "dislike": [
    "inhota",
    "olla pitämättä"
  ],
  "distance": [
    "etäisyys",
    "matka"
  ],
  "distribute": [
    "jakaa"
  ],
  "district": [
    "alue",
    "kaupunginosa"
  ],
  "dive": [
    "sukeltaa"
  ],
  "divide": [
    "jakaa"
  ],
  "divorce": [
    "avioero"
  ],
  "divorced": [
    "eronnut"
  ],
  "do": [
    "tehdä"
  ],
  "doctor": [
    "lääkäri"
  ],
  "document": [
    "asiakirja",
    "dokumentti"
  ],
  "documentary": [
    "dokumentti"
  ],
  "dog": [
    "koira"
  ],
  "dolphin": [
    "delfiini"
  ],
  "donkey": [
    "aasi"
  ],
  "door": [
    "ovi"
  ],
  "doorbell": [
    "ovikello"
  ],
  "doorway": [
    "oviaukko"
  ],
  "doubt": [
    "epäillä"
  ],
  "dove": [
    "kyyhkynen"
  ],
  "down": [
    "alas"
  ],
  "download": [
    "ladata",
    "lataus"
  ],
  "dozen": [
    "tusina"
  ],
  "drag": [
    "raahata"
  ],
  "drain": [
    "viemäri"
  ],
  "draw": [
    "piirtää"
  ],
  "drawer": [
    "laatikko"
  ],
  "dream": [
    "uneksia",
    "unelmoida"
  ],
  "dress": [
    "mekko",
    "pukeutuminen"
  ],
  "dressing": [
    "salaatinkastike"
  ],
  "drill": [
    "pora",
    "porakone"
  ],
  "drive": [
    "ajaa"
  ],
  "driver": [
    "kuljettaja"
  ],
  "drop": [
    "pisara",
    "pudottaa",
    "pudotus"
  ],
  "drought": [
    "kuivuus"
  ],
  "drum": [
    "rumpu"
  ],
  "dry": [
    "kuiva"
  ],
  "dryer": [
    "kuivausrumpu"
  ],
  "duck": [
    "ankka",
    "sorsa"
  ],
  "due to": [
    "vuoksi"
  ],
  "dusk": [
    "iltahämärä"
  ],
  "dust": [
    "pöly"
  ],
  "dustpan": [
    "rikkalapio"
  ],
  "Dutch": [
    "hollanti",
    "hollantilainen"
  ],
  "dutch": [
    "hollanti",
    "hollantilainen"
  ],
  "duty": [
    "velvollisuus"
  ],
  "duvet": [
    "peitto"
  ],
  "each": [
    "jokainen"
  ],
  "each other": [
    "toisensa"
  ],
  "eagle": [
    "kotka"
  ],
  "ear": [
    "korva"
  ],
  "early": [
    "aikaisin",
    "varhain"
  ],
  "earphones": [
    "nappikuulokkeet"
  ],
  "earring": [
    "korvakoru"
  ],
  "earth": [
    "maa",
    "maapallo"
  ],
  "earthquake": [
    "maanjäristys"
  ],
  "easily": [
    "helposti"
  ],
  "east": [
    "itä"
  ],
  "Easter": [
    "pääsiäinen"
  ],
  "easter": [
    "pääsiäinen"
  ],
  "easy": [
    "helppo"
  ],
  "economics": [
    "taloustiede"
  ],
  "ecosystem": [
    "ekosysteemi"
  ],
  "edge": [
    "reuna"
  ],
  "edit": [
    "muokata"
  ],
  "educate": [
    "kouluttaa"
  ],
  "education": [
    "koulutus"
  ],
  "effect": [
    "vaikutus"
  ],
  "efficiency": [
    "tehokkuus"
  ],
  "eggplant": [
    "munakoiso"
  ],
  "Egypt": [
    "Egypti"
  ],
  "egypt": [
    "Egypti"
  ],
  "eight": [
    "kahdeksan"
  ],
  "eighteen": [
    "kahdeksantoista"
  ],
  "eighty": [
    "kahdeksankymmentä"
  ],
  "either": [
    "kumpi tahansa"
  ],
  "elbow": [
    "kyynärpää"
  ],
  "elderly": [
    "ikääntynyt"
  ],
  "elect": [
    "valita vaaleilla"
  ],
  "election": [
    "vaalit"
  ],
  "electric scooter": [
    "sähköpotkulauta"
  ],
  "electricity": [
    "sähkö"
  ],
  "elephant": [
    "norsu"
  ],
  "elevator": [
    "hissi"
  ],
  "eleven": [
    "yksitoista"
  ],
  "elk": [
    "hirvi"
  ],
  "else": [
    "muu",
    "muuten"
  ],
  "elsewhere": [
    "muualla"
  ],
  "email": [
    "lähettää sähköpostia",
    "sähköposti"
  ],
  "email address": [
    "sähköpostiosoite"
  ],
  "embassy": [
    "suurlähetystö"
  ],
  "emergency": [
    "hätätilanne",
    "päivystys"
  ],
  "emergency exit": [
    "hätäuloskäynti"
  ],
  "emotion": [
    "tunne"
  ],
  "employ": [
    "palkata",
    "työllistää"
  ],
  "employee": [
    "työntekijä"
  ],
  "employer": [
    "työnantaja"
  ],
  "employment": [
    "työllisyys",
    "työsuhde"
  ],
  "empty": [
    "tyhjä"
  ],
  "end": [
    "lopettaa",
    "päättyä"
  ],
  "ending": [
    "loppu"
  ],
  "energy": [
    "energia"
  ],
  "engine": [
    "moottori"
  ],
  "engineer": [
    "insinööri"
  ],
  "engineering": [
    "insinööritiede"
  ],
  "England": [
    "Englanti"
  ],
  "england": [
    "Englanti"
  ],
  "English": [
    "englanti",
    "englantilainen"
  ],
  "english": [
    "englanti",
    "englantilainen"
  ],
  "enjoy": [
    "nauttia"
  ],
  "enough": [
    "riittävästi",
    "tarpeeksi"
  ],
  "enter": [
    "mennä sisään",
    "syöttää"
  ],
  "enterprise": [
    "yritys"
  ],
  "entirely": [
    "kokonaan"
  ],
  "entrance": [
    "sisäänkäynti"
  ],
  "environment": [
    "ympäristö"
  ],
  "episode": [
    "jakso"
  ],
  "equal": [
    "tasavertainen",
    "yhtä suuri"
  ],
  "equality": [
    "tasa-arvo"
  ],
  "equity": [
    "oikeudenmukaisuus"
  ],
  "error": [
    "virhe"
  ],
  "error message": [
    "virheilmoitus"
  ],
  "escalator": [
    "liukuportaat"
  ],
  "escape": [
    "paeta"
  ],
  "especially": [
    "erityisesti"
  ],
  "Estonia": [
    "Viro"
  ],
  "estonia": [
    "Viro"
  ],
  "Estonian": [
    "viro",
    "virolainen"
  ],
  "estonian": [
    "viro",
    "virolainen"
  ],
  "ethics": [
    "etiikka"
  ],
  "even": [
    "edes",
    "jopa"
  ],
  "evening": [
    "ilta"
  ],
  "eventually": [
    "lopulta"
  ],
  "everybody": [
    "kaikki"
  ],
  "everyone": [
    "jokainen",
    "kaikki"
  ],
  "everything": [
    "kaikki"
  ],
  "everywhere": [
    "kaikkialla"
  ],
  "evidence": [
    "näyttö",
    "todiste"
  ],
  "exact": [
    "täsmällinen"
  ],
  "exactly": [
    "täsmälleen"
  ],
  "example": [
    "esimerkki"
  ],
  "excellent": [
    "erinomainen"
  ],
  "except": [
    "paitsi"
  ],
  "except for": [
    "lukuun ottamatta"
  ],
  "exception": [
    "poikkeus"
  ],
  "exchange rate": [
    "vaihtokurssi"
  ],
  "excited": [
    "innostunut"
  ],
  "exclamation mark": [
    "huutomerkki"
  ],
  "excuse me": [
    "anteeksi"
  ],
  "exercise": [
    "harjoitus",
    "liikunta"
  ],
  "exist": [
    "olla olemassa"
  ],
  "exit": [
    "poistua",
    "uloskäynti"
  ],
  "expand": [
    "laajentaa",
    "laajentua"
  ],
  "expense": [
    "kulu"
  ],
  "expensive": [
    "kallis"
  ],
  "experience": [
    "kokemus"
  ],
  "experiment": [
    "koe"
  ],
  "expertise": [
    "asiantuntemus"
  ],
  "explain": [
    "selittää"
  ],
  "explore": [
    "seikkailla",
    "tutkia"
  ],
  "export": [
    "viedä",
    "vienti",
    "vientiin"
  ],
  "express": [
    "pika-",
    "pikajuna"
  ],
  "extension cord": [
    "jatkojohto"
  ],
  "extinguish": [
    "sammuttaa"
  ],
  "eye": [
    "silmä"
  ],
  "eyebrow": [
    "kulmakarva"
  ],
  "eyelash": [
    "silmäripsi"
  ],
  "fabric": [
    "kangas"
  ],
  "face": [
    "kasvot"
  ],
  "fact": [
    "tosiasia"
  ],
  "factory": [
    "tehdas"
  ],
  "fail": [
    "epäonnistua"
  ],
  "failure": [
    "epäonnistuminen"
  ],
  "fair": [
    "oikeudenmukainen",
    "reilu"
  ],
  "fake": [
    "epäaito",
    "väärennös"
  ],
  "falcon": [
    "haukka"
  ],
  "fall": [
    "kaatua",
    "pudota",
    "putoaminen",
    "syksy"
  ],
  "false": [
    "epätosi",
    "väärä"
  ],
  "falsehood": [
    "valhe"
  ],
  "familiar": [
    "tuttu"
  ],
  "family": [
    "perhe"
  ],
  "famous": [
    "kuuluisa"
  ],
  "fan": [
    "tuuletin"
  ],
  "far": [
    "kaukana"
  ],
  "fare": [
    "matkalipun hinta"
  ],
  "farm": [
    "maatila"
  ],
  "farmer": [
    "maanviljelijä"
  ],
  "farmhouse": [
    "maalaistalo"
  ],
  "fast": [
    "nopea"
  ],
  "father": [
    "isä"
  ],
  "faucet": [
    "hana"
  ],
  "fault": [
    "vika",
    "virhe"
  ],
  "fear": [
    "pelko",
    "pelätä"
  ],
  "feature": [
    "ominaisuus"
  ],
  "february": [
    "helmikuu"
  ],
  "feedback": [
    "palaute"
  ],
  "feel": [
    "tuntea",
    "tuntua"
  ],
  "feeling": [
    "tunne"
  ],
  "feet": [
    "jalat"
  ],
  "fence": [
    "aita"
  ],
  "fern": [
    "saniainen"
  ],
  "ferry": [
    "laiva",
    "lautta"
  ],
  "ferry terminal": [
    "lauttaterminaali"
  ],
  "festival": [
    "festivaali"
  ],
  "fetch": [
    "hakea"
  ],
  "fever": [
    "kuume"
  ],
  "few": [
    "harva",
    "muutama"
  ],
  "fiancé": [
    "sulhanen"
  ],
  "fiancée": [
    "morsian"
  ],
  "field": [
    "kenttä",
    "pelto"
  ],
  "fifteen": [
    "viisitoista"
  ],
  "fifty": [
    "viisikymmentä"
  ],
  "fig": [
    "viikuna"
  ],
  "fight": [
    "taistella",
    "tapella"
  ],
  "figure": [
    "kuvio",
    "numero"
  ],
  "file": [
    "asiakirjavihko",
    "tiedosto"
  ],
  "fillet": [
    "filee"
  ],
  "film": [
    "elokuva",
    "filmi"
  ],
  "filter": [
    "suodatin"
  ],
  "filthy": [
    "likainen",
    "saastainen"
  ],
  "final": [
    "lopullinen"
  ],
  "finally": [
    "lopulta",
    "vihdoin"
  ],
  "finance": [
    "rahoitus",
    "talous"
  ],
  "find": [
    "löytää"
  ],
  "fine": [
    "sakko"
  ],
  "finger": [
    "sormi"
  ],
  "fingernail": [
    "kynsi"
  ],
  "finish": [
    "lopettaa",
    "valmistua"
  ],
  "Finland": [
    "Suomi"
  ],
  "finland": [
    "Suomi"
  ],
  "Finnish": [
    "suomalainen",
    "suomi"
  ],
  "finnish": [
    "suomalainen",
    "suomi"
  ],
  "fire": [
    "erottaa",
    "irtisanoa"
  ],
  "fire extinguisher": [
    "sammutin"
  ],
  "fire station": [
    "paloasema"
  ],
  "firefighter": [
    "palomies",
    "pelastaja"
  ],
  "fireplace": [
    "takka"
  ],
  "firm": [
    "yritys"
  ],
  "first": [
    "ensimmäinen",
    "ensin"
  ],
  "first aid": [
    "ensiapu"
  ],
  "first-class": [
    "ensiluokkainen"
  ],
  "fish": [
    "kala"
  ],
  "fish fillet": [
    "kalafilee"
  ],
  "fisherman": [
    "kalastaja"
  ],
  "five": [
    "viisi"
  ],
  "fix": [
    "korjata"
  ],
  "flash drive": [
    "muistitikku"
  ],
  "flat": [
    "asunto",
    "tasainen"
  ],
  "flee": [
    "paeta"
  ],
  "flight": [
    "lento"
  ],
  "flip-flop": [
    "varvassandaali"
  ],
  "flood": [
    "tulva"
  ],
  "floor": [
    "kerros",
    "lattia"
  ],
  "florist": [
    "kukkakauppa"
  ],
  "floss": [
    "hammaslanka"
  ],
  "flour": [
    "jauho"
  ],
  "flower": [
    "kukka"
  ],
  "flowerpot": [
    "kukkaruukku"
  ],
  "flu": [
    "influenssa"
  ],
  "flute": [
    "huilu"
  ],
  "fly": [
    "kärpänen",
    "lentää"
  ],
  "fog": [
    "sumu"
  ],
  "foggy": [
    "sumuinen"
  ],
  "fold": [
    "taittaa",
    "viikata"
  ],
  "folder": [
    "kansio"
  ],
  "follow": [
    "seurata"
  ],
  "follow account": [
    "seurata käyttäjätiliä"
  ],
  "food": [
    "ruoka"
  ],
  "food allergy": [
    "ruoka-allergia"
  ],
  "food processor": [
    "monitoimikone"
  ],
  "foot": [
    "jalka",
    "jalkaterä"
  ],
  "for": [
    "puolesta",
    "varten"
  ],
  "for example": [
    "esimerkiksi"
  ],
  "for instance": [
    "esimerkiksi"
  ],
  "forbid": [
    "kieltää"
  ],
  "forehead": [
    "otsa"
  ],
  "foreign": [
    "ulkomainen"
  ],
  "forest": [
    "metsä"
  ],
  "forget": [
    "unohtaa"
  ],
  "forgive": [
    "antaa anteeksi"
  ],
  "fork": [
    "haarukka"
  ],
  "form": [
    "lomake",
    "muoto"
  ],
  "format": [
    "formaatti",
    "muoto"
  ],
  "fortunately": [
    "onneksi"
  ],
  "forty": [
    "neljäkymmentä"
  ],
  "forward": [
    "eteenpäin"
  ],
  "foundation": [
    "säätiö"
  ],
  "fountain": [
    "suihkulähde"
  ],
  "four": [
    "neljä"
  ],
  "fourteen": [
    "neljätoista"
  ],
  "fox": [
    "kettu"
  ],
  "fraction": [
    "murtoluku",
    "osa"
  ],
  "fracture": [
    "murtuma"
  ],
  "fragile": [
    "hauras"
  ],
  "frame": [
    "kehys"
  ],
  "framework": [
    "sovelluskehys"
  ],
  "France": [
    "Ranska"
  ],
  "france": [
    "Ranska"
  ],
  "free": [
    "ilmainen",
    "vapaa"
  ],
  "free software": [
    "vapaa ohjelmisto"
  ],
  "freedom": [
    "vapaus"
  ],
  "freeze": [
    "jäädyttää",
    "jäätyä"
  ],
  "freezer": [
    "pakastin"
  ],
  "freezing": [
    "jäätävä"
  ],
  "French": [
    "ranska",
    "ranskalainen"
  ],
  "french": [
    "ranska",
    "ranskalainen"
  ],
  "frequency": [
    "taajuus"
  ],
  "fresh": [
    "tuore"
  ],
  "friday": [
    "perjantai"
  ],
  "fridge": [
    "jääkaappi"
  ],
  "friend": [
    "ystävä"
  ],
  "friendly": [
    "ystävällinen"
  ],
  "friendship": [
    "ystävyys"
  ],
  "frog": [
    "sammakko"
  ],
  "from": [
    "jostakin",
    "lähtien"
  ],
  "front desk": [
    "vastaanotto"
  ],
  "frost": [
    "kuura",
    "pakkanen"
  ],
  "fruit": [
    "hedelmä"
  ],
  "fruit salad": [
    "hedelmäsalaatti"
  ],
  "fry": [
    "paistaa"
  ],
  "frying": [
    "paistaminen"
  ],
  "frying pan": [
    "paistinpannu"
  ],
  "fuel": [
    "polttoaine"
  ],
  "full": [
    "täysi"
  ],
  "full stop": [
    "piste"
  ],
  "fully": [
    "täysin"
  ],
  "function": [
    "funktio",
    "toiminto"
  ],
  "function parameter": [
    "funktion parametri"
  ],
  "functionality": [
    "toiminnallisuus"
  ],
  "fungus": [
    "sieni"
  ],
  "funny": [
    "hauska"
  ],
  "furious": [
    "raivoissaan"
  ],
  "furniture": [
    "huonekalut"
  ],
  "galaxy": [
    "galaksi"
  ],
  "gale": [
    "myrskytuuli"
  ],
  "gallery": [
    "galleria"
  ],
  "garage": [
    "autotalli"
  ],
  "garbage": [
    "jäte",
    "roskat"
  ],
  "garden": [
    "puutarha"
  ],
  "garlic": [
    "valkosipuli"
  ],
  "gas station": [
    "huoltoasema"
  ],
  "gasoline": [
    "bensiini"
  ],
  "gate": [
    "portti"
  ],
  "geography": [
    "maantiede"
  ],
  "German": [
    "saksa",
    "saksalainen"
  ],
  "german": [
    "saksa",
    "saksalainen"
  ],
  "Germany": [
    "Saksa"
  ],
  "germany": [
    "Saksa"
  ],
  "get": [
    "hankkia",
    "saada"
  ],
  "get dressed": [
    "pukeutua"
  ],
  "giant": [
    "jättiläinen",
    "valtava"
  ],
  "gigabyte": [
    "gigatavu"
  ],
  "ginger": [
    "inkivääri"
  ],
  "giraffe": [
    "kirahvi"
  ],
  "girl": [
    "tyttö"
  ],
  "girlfriend": [
    "tyttöystävä"
  ],
  "give": [
    "antaa"
  ],
  "glass": [
    "lasi"
  ],
  "glasses": [
    "lasit",
    "silmälasit"
  ],
  "glider": [
    "purjelentokone"
  ],
  "global": [
    "maailmanlaajuinen"
  ],
  "glove": [
    "käsine"
  ],
  "gluten": [
    "gluteeni"
  ],
  "go": [
    "mennä"
  ],
  "goal": [
    "tavoite"
  ],
  "goat": [
    "vuohi"
  ],
  "gold": [
    "kulta",
    "kultainen"
  ],
  "good": [
    "hyvä"
  ],
  "good afternoon": [
    "hyvää iltapäivää"
  ],
  "good evening": [
    "hyvää iltaa"
  ],
  "good morning": [
    "hyvää huomenta"
  ],
  "good night": [
    "hyvää yötä"
  ],
  "goodbye": [
    "hyvästi",
    "näkemiin"
  ],
  "goods": [
    "hyödykkeet",
    "tavarat"
  ],
  "goose": [
    "hanhi"
  ],
  "gooseberry": [
    "karviainen"
  ],
  "gorilla": [
    "gorilla"
  ],
  "govern": [
    "hallita"
  ],
  "government": [
    "hallitus"
  ],
  "governor": [
    "kuvernööri"
  ],
  "GPU": [
    "grafiikkasuoritin"
  ],
  "gpu": [
    "grafiikkasuoritin"
  ],
  "gram": [
    "gramma"
  ],
  "grammar": [
    "kielioppi"
  ],
  "grandchild": [
    "lapsenlapsi"
  ],
  "granddaughter": [
    "pojantytär",
    "tyttärentytär"
  ],
  "grandfather": [
    "isoisä",
    "vaari"
  ],
  "grandmother": [
    "isoäiti",
    "mummo"
  ],
  "grandparent": [
    "isovanhempi"
  ],
  "grandson": [
    "pojanpoika",
    "tyttärenpoika"
  ],
  "grape": [
    "viinirypäle"
  ],
  "grapefruit": [
    "greippi"
  ],
  "grass": [
    "ruoho"
  ],
  "grate": [
    "raastaa"
  ],
  "gravel": [
    "sora"
  ],
  "gravy": [
    "paistinkastike"
  ],
  "gray": [
    "harmaa"
  ],
  "Greece": [
    "Kreikka"
  ],
  "greece": [
    "Kreikka"
  ],
  "Greek": [
    "kreikka",
    "kreikkalainen"
  ],
  "greek": [
    "kreikka",
    "kreikkalainen"
  ],
  "green": [
    "vihreä"
  ],
  "greet": [
    "tervehtiä"
  ],
  "grey": [
    "harmaa"
  ],
  "grilling": [
    "grillaaminen"
  ],
  "grocery store": [
    "ruokakauppa"
  ],
  "ground beef": [
    "naudan jauheliha"
  ],
  "group": [
    "ryhmä"
  ],
  "grow": [
    "kasvaa",
    "kasvattaa"
  ],
  "guarantee": [
    "lupaus",
    "takuu"
  ],
  "guest": [
    "vieras"
  ],
  "guilt": [
    "syyllisyys"
  ],
  "guitar": [
    "kitara"
  ],
  "gulf": [
    "lahti"
  ],
  "gum": [
    "ien"
  ],
  "gym": [
    "kuntosali",
    "liikuntasali"
  ],
  "gym shoe": [
    "urheilukenkä"
  ],
  "habit": [
    "käytäntö",
    "tapa"
  ],
  "habitat": [
    "elinympäristö"
  ],
  "hail": [
    "rae",
    "raekuuro"
  ],
  "hair": [
    "hiukset",
    "karva"
  ],
  "hairbrush": [
    "hiusharja"
  ],
  "haircut": [
    "hiustenleikkaus"
  ],
  "hairdryer": [
    "hiustenkuivaaja"
  ],
  "half": [
    "puoli"
  ],
  "hall": [
    "eteinen",
    "sali"
  ],
  "hallway": [
    "eteinen",
    "käytävä"
  ],
  "ham": [
    "kinkku"
  ],
  "hammer": [
    "vasara"
  ],
  "hamster": [
    "hamsteri"
  ],
  "hand": [
    "käsi"
  ],
  "handbag": [
    "käsilaukku"
  ],
  "handbook": [
    "käsikirja"
  ],
  "handle": [
    "kahva"
  ],
  "handsome": [
    "komea"
  ],
  "happiness": [
    "onnellisuus"
  ],
  "happy": [
    "iloinen",
    "onnellinen"
  ],
  "harbor": [
    "satama"
  ],
  "harbour": [
    "satama"
  ],
  "hard": [
    "kova",
    "vaikea"
  ],
  "hard drive": [
    "kiintolevy"
  ],
  "hardly": [
    "tuskin"
  ],
  "hardware": [
    "laitteisto"
  ],
  "hardware store": [
    "rautakauppa"
  ],
  "hare": [
    "jänis"
  ],
  "harm": [
    "vahingoittaa"
  ],
  "hat": [
    "hattu"
  ],
  "hate": [
    "viha",
    "vihata"
  ],
  "have": [
    "olla",
    "omistaa"
  ],
  "have to": [
    "pitää",
    "täytyä"
  ],
  "hawk": [
    "haukka"
  ],
  "hazard": [
    "vaara"
  ],
  "hazelnut": [
    "hasselpähkinä"
  ],
  "he": [
    "hän"
  ],
  "head": [
    "pää"
  ],
  "headache": [
    "päänsärky"
  ],
  "headlight": [
    "ajovalo"
  ],
  "headphones": [
    "kuulokkeet"
  ],
  "health": [
    "terveys"
  ],
  "healthy": [
    "terve"
  ],
  "hear": [
    "kuulla"
  ],
  "heart": [
    "sydän"
  ],
  "heat": [
    "kuumuus",
    "lämmittää",
    "lämpö"
  ],
  "heater": [
    "lämmitin"
  ],
  "heavy": [
    "raskas"
  ],
  "hedgehog": [
    "siili"
  ],
  "heel": [
    "kantapää",
    "korko"
  ],
  "height": [
    "korkeus"
  ],
  "helicopter": [
    "helikopteri"
  ],
  "hello": [
    "hei",
    "terve"
  ],
  "help": [
    "auttaa"
  ],
  "hen": [
    "kana"
  ],
  "her": [
    "hänen"
  ],
  "herb": [
    "yrtti"
  ],
  "here": [
    "tässä",
    "täällä"
  ],
  "herring": [
    "silakka",
    "silli"
  ],
  "hers": [
    "hänen"
  ],
  "hi": [
    "hei",
    "moi"
  ],
  "hide": [
    "piilottaa",
    "piiloutua"
  ],
  "high": [
    "korkea"
  ],
  "highway": [
    "moottoritie",
    "valtatie"
  ],
  "hill": [
    "kukkula"
  ],
  "hip": [
    "lonkka"
  ],
  "hippopotamus": [
    "virtahepo"
  ],
  "hire": [
    "palkata",
    "vuokrata"
  ],
  "his": [
    "hänen"
  ],
  "history": [
    "historia"
  ],
  "hit": [
    "lyödä",
    "osua"
  ],
  "hob": [
    "keittolevy"
  ],
  "hold": [
    "pidellä",
    "pitää kiinni"
  ],
  "holiday": [
    "juhlapäivä",
    "loma"
  ],
  "home": [
    "koti"
  ],
  "homework": [
    "kotitehtävä"
  ],
  "honest": [
    "rehellinen"
  ],
  "honey": [
    "hunaja"
  ],
  "hoodie": [
    "huppari"
  ],
  "hop": [
    "hypellä",
    "loikata"
  ],
  "hope": [
    "toivo",
    "toivoa"
  ],
  "horizon": [
    "horisontti"
  ],
  "horse": [
    "hevonen"
  ],
  "hospital": [
    "sairaala"
  ],
  "host": [
    "emäntä",
    "isäntä"
  ],
  "hostel": [
    "hostelli"
  ],
  "hot": [
    "kuuma"
  ],
  "hot air balloon": [
    "kuumailmapallo"
  ],
  "hot chocolate": [
    "kaakao"
  ],
  "hotel": [
    "hotelli"
  ],
  "hour": [
    "tunti"
  ],
  "house": [
    "talo"
  ],
  "how": [
    "kuinka",
    "miten"
  ],
  "how are you": [
    "mitä kuuluu"
  ],
  "how far": [
    "kuinka kaukana"
  ],
  "how long": [
    "kuinka kauan"
  ],
  "how many": [
    "kuinka monta"
  ],
  "how much": [
    "kuinka paljon"
  ],
  "how old": [
    "kuinka vanha"
  ],
  "however": [
    "kuitenkin"
  ],
  "huge": [
    "valtava"
  ],
  "human": [
    "ihminen"
  ],
  "humidity": [
    "kosteus"
  ],
  "hundred": [
    "sata"
  ],
  "hungry": [
    "nälkäinen"
  ],
  "hurricane": [
    "hurrikaani"
  ],
  "hurt": [
    "satuttaa",
    "vahingoittaa"
  ],
  "husband": [
    "aviomies"
  ],
  "hydrogen": [
    "vety"
  ],
  "hyperlink": [
    "hyperlinkki"
  ],
  "hyphen": [
    "yhdysmerkki"
  ],
  "hypothesis": [
    "hypoteesi"
  ],
  "I": [
    "minä"
  ],
  "i": [
    "minä"
  ],
  "I am fine": [
    "minulle kuuluu hyvää"
  ],
  "i am fine": [
    "minulle kuuluu hyvää"
  ],
  "I don't know": [
    "en tiedä"
  ],
  "i don't know": [
    "en tiedä"
  ],
  "I love you": [
    "rakastan sinua"
  ],
  "i love you": [
    "rakastan sinua"
  ],
  "I understand": [
    "ymmärrän"
  ],
  "i understand": [
    "ymmärrän"
  ],
  "ice": [
    "jää"
  ],
  "ice cream": [
    "jäätelö"
  ],
  "ice rink": [
    "jäähalli",
    "luistinrata"
  ],
  "Iceland": [
    "Islanti"
  ],
  "iceland": [
    "Islanti"
  ],
  "Icelandic": [
    "islanti",
    "islantilainen"
  ],
  "icelandic": [
    "islanti",
    "islantilainen"
  ],
  "icon": [
    "kuvake"
  ],
  "idea": [
    "ajatus",
    "idea"
  ],
  "identifier": [
    "tunniste"
  ],
  "identify": [
    "tunnistaa"
  ],
  "identity": [
    "identiteetti"
  ],
  "if": [
    "jos"
  ],
  "ignite": [
    "sytyttää"
  ],
  "ill": [
    "sairas"
  ],
  "illness": [
    "sairaus"
  ],
  "image": [
    "kuva"
  ],
  "imagination": [
    "mielikuvitus"
  ],
  "imagine": [
    "kuvitella"
  ],
  "immediately": [
    "heti"
  ],
  "immigrant": [
    "maahanmuuttaja"
  ],
  "impact": [
    "vaikutus"
  ],
  "import": [
    "tuoda",
    "tuonti"
  ],
  "importance": [
    "tärkeys"
  ],
  "important": [
    "tärkeä"
  ],
  "impossible": [
    "mahdoton"
  ],
  "improve": [
    "parantaa",
    "parantua"
  ],
  "in": [
    "sisällä",
    "ssa"
  ],
  "in addition": [
    "lisäksi"
  ],
  "in fact": [
    "itse asiassa"
  ],
  "in front of": [
    "edessä"
  ],
  "in general": [
    "yleensä"
  ],
  "in particular": [
    "erityisesti"
  ],
  "in spite of": [
    "huolimatta"
  ],
  "inbox": [
    "saapuneet"
  ],
  "inch": [
    "tuuma"
  ],
  "income": [
    "tulot"
  ],
  "incorrect": [
    "väärä"
  ],
  "incorrectly": [
    "väärin"
  ],
  "increase": [
    "lisätä",
    "lisääntyä"
  ],
  "index": [
    "hakemisto",
    "indeksi"
  ],
  "India": [
    "Intia"
  ],
  "india": [
    "Intia"
  ],
  "Indonesia": [
    "Indonesia"
  ],
  "indonesia": [
    "Indonesia"
  ],
  "industry": [
    "teollisuus",
    "toimiala"
  ],
  "infection": [
    "infektio",
    "tulehdus"
  ],
  "inform": [
    "tiedottaa"
  ],
  "information": [
    "informaatio",
    "tieto"
  ],
  "ingredient": [
    "ainesosa",
    "raaka-aine"
  ],
  "initialization": [
    "alustus"
  ],
  "injection": [
    "pistos"
  ],
  "injured": [
    "loukkaantunut"
  ],
  "injury": [
    "vamma"
  ],
  "innovate": [
    "uudistaa"
  ],
  "insect": [
    "hyönteinen"
  ],
  "inside": [
    "sisällä",
    "sisäpuolella"
  ],
  "install": [
    "asentaa"
  ],
  "installation": [
    "asennus"
  ],
  "instantly": [
    "välittömästi"
  ],
  "instead": [
    "sen sijaan"
  ],
  "instead of": [
    "sijasta"
  ],
  "institution": [
    "instituutio",
    "laitos"
  ],
  "instruction": [
    "ohje"
  ],
  "instrument": [
    "soitin",
    "väline"
  ],
  "insurance": [
    "vakuutus"
  ],
  "integer": [
    "kokonaisluku"
  ],
  "integration": [
    "integraatio"
  ],
  "intelligence": [
    "älykkyys"
  ],
  "intelligent": [
    "älykäs"
  ],
  "interest": [
    "kiinnostus",
    "korko"
  ],
  "interest rate": [
    "korko"
  ],
  "interested": [
    "kiinnostunut"
  ],
  "interesting": [
    "mielenkiintoinen"
  ],
  "interface": [
    "käyttöliittymä",
    "rajapinta"
  ],
  "international": [
    "kansainvälinen"
  ],
  "internet": [
    "internet",
    "verkko"
  ],
  "interpret": [
    "tulkita"
  ],
  "intersection": [
    "risteys"
  ],
  "interview": [
    "haastattelu"
  ],
  "intestine": [
    "suoli"
  ],
  "into": [
    "sisään"
  ],
  "introduce": [
    "esitellä"
  ],
  "invent": [
    "keksiä"
  ],
  "inventory": [
    "inventaario",
    "varasto"
  ],
  "invest": [
    "sijoittaa"
  ],
  "investigate": [
    "tutkia"
  ],
  "investigation": [
    "tutkinta"
  ],
  "invite": [
    "kutsua"
  ],
  "invoice": [
    "lasku"
  ],
  "Ireland": [
    "Irlanti"
  ],
  "ireland": [
    "Irlanti"
  ],
  "iron": [
    "rauta",
    "silittää",
    "silitysrauta"
  ],
  "ironing board": [
    "silityslauta"
  ],
  "island": [
    "saari"
  ],
  "Israel": [
    "Israel"
  ],
  "israel": [
    "Israel"
  ],
  "issue": [
    "asia",
    "ongelma"
  ],
  "it": [
    "se"
  ],
  "it does not matter": [
    "ei sillä ole väliä"
  ],
  "Italian": [
    "italia",
    "italialainen"
  ],
  "italian": [
    "italia",
    "italialainen"
  ],
  "Italy": [
    "Italia"
  ],
  "italy": [
    "Italia"
  ],
  "its": [
    "sen"
  ],
  "jacket": [
    "takki"
  ],
  "jam": [
    "hillo"
  ],
  "january": [
    "tammikuu"
  ],
  "Japan": [
    "Japani"
  ],
  "japan": [
    "Japani"
  ],
  "Japanese": [
    "japani",
    "japanilainen"
  ],
  "japanese": [
    "japani",
    "japanilainen"
  ],
  "jar": [
    "purkki"
  ],
  "jaw": [
    "leuka"
  ],
  "jeans": [
    "farkut"
  ],
  "jellyfish": [
    "meduusa"
  ],
  "jewelry": [
    "korut"
  ],
  "job": [
    "työ",
    "työpaikka"
  ],
  "job application": [
    "työhakemus"
  ],
  "join": [
    "liittyä",
    "osallistua"
  ],
  "joint": [
    "nivel"
  ],
  "journal": [
    "aikakauslehti",
    "päiväkirja"
  ],
  "journalist": [
    "toimittaja"
  ],
  "journey": [
    "matka"
  ],
  "joy": [
    "ilo"
  ],
  "judge": [
    "tuomari"
  ],
  "juice": [
    "mehu"
  ],
  "july": [
    "heinäkuu"
  ],
  "jump": [
    "hypätä"
  ],
  "jumper": [
    "villapaita"
  ],
  "june": [
    "kesäkuu"
  ],
  "jungle": [
    "viidakko"
  ],
  "juniper": [
    "kataja"
  ],
  "just": [
    "juuri",
    "vain"
  ],
  "justice": [
    "oikeudenmukaisuus",
    "oikeus"
  ],
  "kale": [
    "lehtikaali"
  ],
  "kangaroo": [
    "kenguru"
  ],
  "kayak": [
    "kajakki"
  ],
  "keep": [
    "pitää",
    "säilyttää"
  ],
  "Kenya": [
    "Kenia"
  ],
  "kenya": [
    "Kenia"
  ],
  "ketchup": [
    "ketsuppi"
  ],
  "kettle": [
    "vedenkeitin"
  ],
  "key": [
    "avain"
  ],
  "keyboard": [
    "näppäimistö"
  ],
  "keycard": [
    "avainkortti"
  ],
  "kick": [
    "potkaista"
  ],
  "kidney": [
    "munuainen"
  ],
  "kill": [
    "tappaa"
  ],
  "kilobyte": [
    "kilotavu"
  ],
  "kilogram": [
    "kilogramma"
  ],
  "kilometer": [
    "kilometri"
  ],
  "kind": [
    "kiltti",
    "laji",
    "tyyppi",
    "ystävällinen"
  ],
  "kindergarten": [
    "lastentarha",
    "päiväkoti"
  ],
  "king": [
    "kuningas"
  ],
  "kitchen": [
    "keittiö"
  ],
  "kitchen towel": [
    "keittiöpyyhe"
  ],
  "kitten": [
    "kissanpentu"
  ],
  "kiwi": [
    "kiivi"
  ],
  "knee": [
    "polvi"
  ],
  "kneel": [
    "polvistua"
  ],
  "knife": [
    "veitsi"
  ],
  "knit": [
    "neuloa"
  ],
  "know": [
    "tietää",
    "tuntea"
  ],
  "knowledge": [
    "osaaminen",
    "tieto"
  ],
  "koala": [
    "koala"
  ],
  "lab": [
    "laboratorio"
  ],
  "laboratory": [
    "laboratorio"
  ],
  "lactose": [
    "laktoosi"
  ],
  "ladder": [
    "tikkaat"
  ],
  "ladybug": [
    "leppäkerttu"
  ],
  "lake": [
    "järvi"
  ],
  "lamb": [
    "karitsa",
    "lammas",
    "lampaanliha"
  ],
  "lamp": [
    "lamppu"
  ],
  "landlord": [
    "vuokranantaja"
  ],
  "landslide": [
    "maanvyöry"
  ],
  "language": [
    "kieli"
  ],
  "laptop": [
    "kannettava tietokone"
  ],
  "large": [
    "suuri"
  ],
  "last": [
    "viimeinen",
    "viimeksi"
  ],
  "last night": [
    "viime yönä"
  ],
  "last week": [
    "viime viikolla"
  ],
  "last year": [
    "viime vuonna"
  ],
  "late": [
    "myöhässä",
    "myöhään"
  ],
  "latency": [
    "viive"
  ],
  "later": [
    "myöhemmin"
  ],
  "laugh": [
    "nauraa"
  ],
  "laundry": [
    "pyykki"
  ],
  "lava": [
    "laava"
  ],
  "lavatory": [
    "vessa",
    "WC"
  ],
  "law": [
    "laki",
    "oikeustiede"
  ],
  "lawn": [
    "nurmikko"
  ],
  "lawyer": [
    "asianajaja",
    "juristi"
  ],
  "lead": [
    "johtaa"
  ],
  "leader": [
    "johtaja"
  ],
  "leaf": [
    "lehti"
  ],
  "learn": [
    "oppia"
  ],
  "least": [
    "vähiten"
  ],
  "leather": [
    "nahka"
  ],
  "leave": [
    "jättää",
    "lähteä"
  ],
  "leaves": [
    "lehdet"
  ],
  "lecture": [
    "luento"
  ],
  "lecture hall": [
    "luentosali"
  ],
  "leek": [
    "purjo"
  ],
  "left": [
    "vasen"
  ],
  "leg": [
    "jalka"
  ],
  "leggings": [
    "leggingsit"
  ],
  "lemon": [
    "sitruuna"
  ],
  "lemonade": [
    "limonadi"
  ],
  "lend": [
    "lainata"
  ],
  "length": [
    "pituus"
  ],
  "lentil": [
    "linssi"
  ],
  "leopard": [
    "leopardi"
  ],
  "less": [
    "vähemmän"
  ],
  "less than": [
    "vähemmän kuin"
  ],
  "lesson": [
    "oppitunti"
  ],
  "let": [
    "antaa",
    "sallia"
  ],
  "letter": [
    "kirjain",
    "kirje"
  ],
  "lettuce": [
    "salaatti"
  ],
  "liberty": [
    "vapaus"
  ],
  "library": [
    "kirjasto"
  ],
  "library software": [
    "ohjelmakirjasto"
  ],
  "licence": [
    "lisenssi",
    "lupa"
  ],
  "license": [
    "lisenssi",
    "lupa"
  ],
  "lichen": [
    "jäkälä"
  ],
  "lie": [
    "maata",
    "valehdella"
  ],
  "lie down": [
    "maata"
  ],
  "life": [
    "elämä"
  ],
  "lift": [
    "hissi",
    "nostaa"
  ],
  "light": [
    "kevyt",
    "sytyttää",
    "vaalea",
    "valaista",
    "valo"
  ],
  "light bulb": [
    "hehkulamppu",
    "lamppu"
  ],
  "lighting": [
    "valaistus"
  ],
  "lightning": [
    "salama"
  ],
  "lightweight": [
    "kevyt"
  ],
  "like": [
    "pitää",
    "tykätä"
  ],
  "lily": [
    "lilja"
  ],
  "lime": [
    "limetti"
  ],
  "lime fruit": [
    "limetti"
  ],
  "limitation": [
    "rajoitus"
  ],
  "linden": [
    "lehmus"
  ],
  "linen": [
    "pellava"
  ],
  "lingonberry": [
    "puolukka"
  ],
  "linguistics": [
    "kielitiede"
  ],
  "link": [
    "linkki",
    "yhteys"
  ],
  "lion": [
    "leijona"
  ],
  "lip": [
    "huuli"
  ],
  "lipstick": [
    "huulipuna"
  ],
  "list": [
    "lista",
    "luettelo"
  ],
  "listen": [
    "kuunnella"
  ],
  "liter": [
    "litra"
  ],
  "literature": [
    "kirjallisuus"
  ],
  "litre": [
    "litra"
  ],
  "live": [
    "asua",
    "elää"
  ],
  "liver": [
    "maksa"
  ],
  "living room": [
    "olohuone"
  ],
  "lizard": [
    "lisko"
  ],
  "loaf": [
    "leipä"
  ],
  "loan": [
    "laina"
  ],
  "lobby": [
    "aula"
  ],
  "lobster": [
    "hummeri"
  ],
  "local": [
    "paikallinen"
  ],
  "lock": [
    "lukita",
    "lukko"
  ],
  "log in": [
    "kirjautua sisään"
  ],
  "log out": [
    "kirjautua ulos"
  ],
  "logic": [
    "logiikka"
  ],
  "lonely": [
    "yksinäinen"
  ],
  "long": [
    "pitkä"
  ],
  "look": [
    "katsoa",
    "näyttää"
  ],
  "lorry": [
    "kuorma-auto"
  ],
  "lose": [
    "hävitä",
    "kadottaa"
  ],
  "lose game": [
    "hävitä"
  ],
  "loss": [
    "häviö",
    "tappio"
  ],
  "lotion": [
    "voide"
  ],
  "loud": [
    "äänekäs"
  ],
  "love": [
    "rakastaa",
    "rakkaus"
  ],
  "low": [
    "matala"
  ],
  "lower": [
    "laskea"
  ],
  "loyal": [
    "uskollinen"
  ],
  "luggage": [
    "matkatavarat"
  ],
  "lunch": [
    "lounas"
  ],
  "lung": [
    "keuhko"
  ],
  "lynx": [
    "ilves"
  ],
  "magazine": [
    "aikakauslehti"
  ],
  "magpie": [
    "harakka"
  ],
  "mail": [
    "posti",
    "sähköposti"
  ],
  "main": [
    "pääasiallinen"
  ],
  "main course": [
    "pääruoka"
  ],
  "mainly": [
    "pääasiassa"
  ],
  "maintenance": [
    "ylläpito"
  ],
  "major": [
    "merkittävä",
    "suuri"
  ],
  "make": [
    "tehdä",
    "valmistaa"
  ],
  "makeup": [
    "meikki"
  ],
  "mammal": [
    "nisäkäs"
  ],
  "man": [
    "mies"
  ],
  "manage": [
    "hallita",
    "johtaa"
  ],
  "management": [
    "hallinta",
    "johto"
  ],
  "manager": [
    "johtaja",
    "päällikkö"
  ],
  "mandarin": [
    "mandariini"
  ],
  "mango": [
    "mango"
  ],
  "mansion": [
    "kartano"
  ],
  "manual": [
    "käsikirja",
    "opas"
  ],
  "manufacture": [
    "valmistaa"
  ],
  "many": [
    "moni",
    "monta"
  ],
  "map": [
    "kartta"
  ],
  "maple": [
    "vaahtera"
  ],
  "march": [
    "maaliskuu"
  ],
  "margarine": [
    "margariini"
  ],
  "market": [
    "markkinat",
    "tori"
  ],
  "marketing": [
    "markkinointi"
  ],
  "marketplace": [
    "markkinapaikka"
  ],
  "marmalade": [
    "marmeladi"
  ],
  "marriage": [
    "avioliitto"
  ],
  "married": [
    "naimisissa"
  ],
  "marsh": [
    "suo"
  ],
  "marten": [
    "näätä"
  ],
  "mascara": [
    "ripsiväri"
  ],
  "mass": [
    "massa"
  ],
  "math": [
    "matematiikka"
  ],
  "mathematics": [
    "matematiikka"
  ],
  "mattress": [
    "patja"
  ],
  "may": [
    "saattaa",
    "toukokuu",
    "voida"
  ],
  "maybe": [
    "ehkä"
  ],
  "mayonnaise": [
    "majoneesi"
  ],
  "mayor": [
    "pormestari"
  ],
  "me": [
    "minua",
    "minut"
  ],
  "meadow": [
    "niitty"
  ],
  "meal": [
    "ateria"
  ],
  "meaning": [
    "merkitys"
  ],
  "measure": [
    "mitata"
  ],
  "meat": [
    "liha"
  ],
  "mechanic": [
    "mekaanikko"
  ],
  "median": [
    "mediaani"
  ],
  "medication": [
    "lääke",
    "lääkitys"
  ],
  "medicine": [
    "lääke",
    "lääketiede"
  ],
  "meet": [
    "tavata"
  ],
  "meeting": [
    "kokous",
    "tapaaminen"
  ],
  "megabyte": [
    "megatavu"
  ],
  "melody": [
    "melodia"
  ],
  "melon": [
    "meloni"
  ],
  "melt": [
    "sulaa",
    "sulattaa"
  ],
  "memo": [
    "muistio"
  ],
  "memory": [
    "muisti",
    "muisto"
  ],
  "memory card": [
    "muistikortti"
  ],
  "mention": [
    "mainita"
  ],
  "menu": [
    "ruokalista",
    "valikko"
  ],
  "message": [
    "viesti"
  ],
  "message thread": [
    "viestiketju"
  ],
  "metadata": [
    "metatiedot"
  ],
  "metal": [
    "metalli"
  ],
  "meteor": [
    "meteori"
  ],
  "meteorite": [
    "meteoriitti"
  ],
  "meter": [
    "metri"
  ],
  "method": [
    "menetelmä",
    "metodi"
  ],
  "metro": [
    "metro"
  ],
  "Mexico": [
    "Meksiko"
  ],
  "mexico": [
    "Meksiko"
  ],
  "microchip": [
    "mikrosiru"
  ],
  "microphone": [
    "mikrofoni"
  ],
  "microwave": [
    "mikroaaltouuni"
  ],
  "midnight": [
    "keskiyö"
  ],
  "might": [
    "saattaa",
    "voisi"
  ],
  "migration": [
    "muuttoliike",
    "siirto"
  ],
  "mile": [
    "maili"
  ],
  "milestone": [
    "välitavoite"
  ],
  "military": [
    "armeija",
    "sotilas-"
  ],
  "military base": [
    "sotilastukikohta"
  ],
  "milk": [
    "maito"
  ],
  "milliliter": [
    "millilitra"
  ],
  "millilitre": [
    "millilitra"
  ],
  "millimeter": [
    "millimetri"
  ],
  "million": [
    "miljoona"
  ],
  "minced meat": [
    "jauheliha"
  ],
  "mine": [
    "minun"
  ],
  "mineral water": [
    "kivennäisvesi"
  ],
  "minibus": [
    "pikkubussi"
  ],
  "minister": [
    "ministeri"
  ],
  "ministry": [
    "ministeriö"
  ],
  "minor": [
    "alaikäinen",
    "vähäinen"
  ],
  "mint": [
    "minttu"
  ],
  "minus": [
    "miinus"
  ],
  "minute": [
    "minuutti"
  ],
  "minutes": [
    "pöytäkirja"
  ],
  "mirror": [
    "peili"
  ],
  "miss": [
    "kaivata",
    "missata"
  ],
  "mist": [
    "usva"
  ],
  "mistake": [
    "virhe"
  ],
  "mitten": [
    "lapanen"
  ],
  "mix": [
    "sekoittaa"
  ],
  "mixer": [
    "sekoitin"
  ],
  "mobile phone": [
    "matkapuhelin"
  ],
  "model": [
    "malli"
  ],
  "modem": [
    "modeemi"
  ],
  "modern": [
    "moderni",
    "nykyaikainen"
  ],
  "module": [
    "moduuli"
  ],
  "moist": [
    "kostea"
  ],
  "mole": [
    "kontiainen",
    "myyrä"
  ],
  "mom": [
    "äiti"
  ],
  "moment": [
    "hetki"
  ],
  "monarchy": [
    "monarkia"
  ],
  "Monday": [
    "maanantai"
  ],
  "monday": [
    "maanantai"
  ],
  "money": [
    "raha"
  ],
  "monitor": [
    "näyttö"
  ],
  "monitoring": [
    "seuranta",
    "valvonta"
  ],
  "monkey": [
    "apina"
  ],
  "month": [
    "kuukausi"
  ],
  "monument": [
    "muistomerkki"
  ],
  "mood": [
    "mieliala"
  ],
  "moon": [
    "kuu"
  ],
  "moonlight": [
    "kuunvalo"
  ],
  "moose": [
    "hirvi"
  ],
  "mop": [
    "mopata",
    "moppi"
  ],
  "moped": [
    "mopo"
  ],
  "moral": [
    "moraali"
  ],
  "more": [
    "enemmän",
    "lisää"
  ],
  "more than": [
    "enemmän kuin"
  ],
  "morning": [
    "aamu"
  ],
  "mortgage": [
    "asuntolaina",
    "kiinnitys"
  ],
  "mosque": [
    "moskeija"
  ],
  "mosquito": [
    "hyttynen"
  ],
  "moss": [
    "sammal"
  ],
  "most": [
    "eniten",
    "useimmat"
  ],
  "mostly": [
    "enimmäkseen"
  ],
  "motel": [
    "motelli"
  ],
  "moth": [
    "koi",
    "perhonen"
  ],
  "mother": [
    "äiti"
  ],
  "motor": [
    "moottori"
  ],
  "motorcycle": [
    "moottoripyörä"
  ],
  "motorway": [
    "moottoritie"
  ],
  "mountain": [
    "vuori"
  ],
  "mouse": [
    "hiiri"
  ],
  "moustache": [
    "viikset"
  ],
  "mouth": [
    "suu"
  ],
  "move": [
    "liikkua",
    "muuttaa"
  ],
  "movie": [
    "elokuva"
  ],
  "movie theater": [
    "elokuvateatteri"
  ],
  "much": [
    "paljon"
  ],
  "mud": [
    "muta"
  ],
  "muesli": [
    "mysli"
  ],
  "mug": [
    "muki"
  ],
  "multiple": [
    "moninkertainen",
    "useita"
  ],
  "multiply": [
    "kertoa"
  ],
  "mum": [
    "äiti"
  ],
  "municipality": [
    "kunta"
  ],
  "muscle": [
    "lihas"
  ],
  "museum": [
    "museo"
  ],
  "mushroom": [
    "sieni"
  ],
  "music": [
    "musiikki"
  ],
  "musician": [
    "muusikko"
  ],
  "must": [
    "pitää",
    "täytyä"
  ],
  "must not": [
    "ei saa"
  ],
  "mustache": [
    "viikset"
  ],
  "mustard": [
    "sinappi"
  ],
  "my": [
    "minun"
  ],
  "myself": [
    "itse",
    "minä itse"
  ],
  "nail": [
    "kynsi",
    "naula"
  ],
  "nail polish": [
    "kynsilakka"
  ],
  "name": [
    "nimi"
  ],
  "napkin": [
    "lautasliina"
  ],
  "narrow": [
    "kapea"
  ],
  "nation": [
    "kansakunta"
  ],
  "national": [
    "kansallinen"
  ],
  "national park": [
    "kansallispuisto"
  ],
  "nationality": [
    "kansallisuus"
  ],
  "native": [
    "kotoperäinen",
    "syntyperäinen"
  ],
  "nature": [
    "luonto"
  ],
  "nature reserve": [
    "luonnonsuojelualue"
  ],
  "navy": [
    "laivasto"
  ],
  "near": [
    "lähellä"
  ],
  "necessary": [
    "tarpeellinen",
    "välttämätön"
  ],
  "necessity": [
    "välttämättömyys"
  ],
  "neck": [
    "kaula"
  ],
  "necklace": [
    "kaulakoru"
  ],
  "nectarine": [
    "nektariini"
  ],
  "need": [
    "tarvita"
  ],
  "need to": [
    "pitää",
    "täytyä"
  ],
  "needle": [
    "neula"
  ],
  "negotiation": [
    "neuvottelu"
  ],
  "neighbor": [
    "naapuri"
  ],
  "neighborhood": [
    "kaupunginosa",
    "naapurusto"
  ],
  "neither": [
    "ei kumpikaan"
  ],
  "nephew": [
    "sisarenpoika",
    "veljenpoika"
  ],
  "nerve": [
    "hermo"
  ],
  "nervous": [
    "hermostunut"
  ],
  "Netherlands": [
    "Alankomaat"
  ],
  "netherlands": [
    "Alankomaat"
  ],
  "network": [
    "verkko"
  ],
  "never": [
    "ei koskaan"
  ],
  "new": [
    "uusi"
  ],
  "New Year": [
    "uusivuosi"
  ],
  "new year": [
    "uusivuosi"
  ],
  "New Zealand": [
    "Uusi-Seelanti"
  ],
  "new zealand": [
    "Uusi-Seelanti"
  ],
  "newline": [
    "rivinvaihto"
  ],
  "newspaper": [
    "sanomalehti"
  ],
  "next": [
    "seuraava"
  ],
  "next week": [
    "ensi viikolla"
  ],
  "next year": [
    "ensi vuonna"
  ],
  "nice": [
    "mukava"
  ],
  "niece": [
    "sisarentytär",
    "veljentytär"
  ],
  "Nigeria": [
    "Nigeria"
  ],
  "nigeria": [
    "Nigeria"
  ],
  "night": [
    "yö"
  ],
  "nightgown": [
    "yöpaita"
  ],
  "nine": [
    "yhdeksän"
  ],
  "nineteen": [
    "yhdeksäntoista"
  ],
  "ninety": [
    "yhdeksänkymmentä"
  ],
  "nitrogen": [
    "typpi"
  ],
  "no": [
    "ei"
  ],
  "no longer": [
    "ei enää"
  ],
  "no matter": [
    "ei väliä"
  ],
  "no one": [
    "ei kukaan"
  ],
  "no problem": [
    "ei ongelmaa"
  ],
  "nobody": [
    "ei kukaan"
  ],
  "nod": [
    "nyökätä"
  ],
  "noise": [
    "melu"
  ],
  "noisy": [
    "meluisa"
  ],
  "none": [
    "ei yhtään"
  ],
  "noodle": [
    "nuudeli"
  ],
  "noodles": [
    "nuudelit"
  ],
  "noon": [
    "keskipäivä"
  ],
  "normal": [
    "normaali"
  ],
  "north": [
    "pohjoinen"
  ],
  "northeast": [
    "koillinen"
  ],
  "northwest": [
    "luode"
  ],
  "Norway": [
    "Norja"
  ],
  "norway": [
    "Norja"
  ],
  "Norwegian": [
    "norja",
    "norjalainen"
  ],
  "norwegian": [
    "norja",
    "norjalainen"
  ],
  "nose": [
    "nenä"
  ],
  "not": [
    "ei"
  ],
  "not anymore": [
    "ei enää"
  ],
  "not yet": [
    "ei vielä"
  ],
  "note": [
    "huomautus",
    "muistiinpano"
  ],
  "notebook": [
    "kannettava tietokone",
    "muistikirja"
  ],
  "nothing": [
    "ei mitään"
  ],
  "notice": [
    "huomata",
    "ilmoitus"
  ],
  "notification": [
    "ilmoitus"
  ],
  "novel": [
    "romaani"
  ],
  "november": [
    "marraskuu"
  ],
  "now": [
    "nyt"
  ],
  "nowadays": [
    "nykyään"
  ],
  "nowhere": [
    "ei missään"
  ],
  "number": [
    "luku",
    "numero"
  ],
  "nurse": [
    "sairaanhoitaja"
  ],
  "nut": [
    "mutteri",
    "pähkinä"
  ],
  "nylon": [
    "nailon"
  ],
  "oak": [
    "tammi"
  ],
  "oats": [
    "kaura"
  ],
  "obey": [
    "totella"
  ],
  "object": [
    "esine",
    "olio"
  ],
  "objective": [
    "tavoite"
  ],
  "obligation": [
    "velvoite"
  ],
  "observation": [
    "havainto"
  ],
  "observe": [
    "havainnoida",
    "tarkkailla"
  ],
  "obstacle": [
    "este"
  ],
  "occupation": [
    "ammatti"
  ],
  "ocean": [
    "valtameri"
  ],
  "october": [
    "lokakuu"
  ],
  "octopus": [
    "mustekala"
  ],
  "of course": [
    "tietenkin"
  ],
  "offer": [
    "tarjous"
  ],
  "office": [
    "toimisto"
  ],
  "often": [
    "usein"
  ],
  "oil": [
    "öljy"
  ],
  "okay": [
    "okei",
    "selvä"
  ],
  "old": [
    "vanha"
  ],
  "olive": [
    "oliivi"
  ],
  "olive oil": [
    "oliiviöljy"
  ],
  "on": [
    "lla",
    "päällä"
  ],
  "on behalf of": [
    "puolesta"
  ],
  "one": [
    "yksi"
  ],
  "one another": [
    "toinen toisensa"
  ],
  "one-way ticket": [
    "menolippu"
  ],
  "oneself": [
    "itse"
  ],
  "onion": [
    "sipuli"
  ],
  "only": [
    "vain"
  ],
  "onto": [
    "päälle"
  ],
  "opaque": [
    "läpinäkymätön"
  ],
  "open": [
    "auki",
    "avoin"
  ],
  "open door": [
    "avata ovi"
  ],
  "open file": [
    "avata tiedosto"
  ],
  "open source": [
    "avoin lähdekoodi"
  ],
  "operating system": [
    "käyttöjärjestelmä"
  ],
  "opinion": [
    "mielipide"
  ],
  "opportunity": [
    "mahdollisuus",
    "tilaisuus"
  ],
  "option": [
    "vaihtoehto"
  ],
  "or": [
    "tai"
  ],
  "orange": [
    "appelsiini",
    "oranssi"
  ],
  "orange juice": [
    "appelsiinimehu"
  ],
  "orchid": [
    "orkidea"
  ],
  "order": [
    "järjestys",
    "määrätä",
    "tilata",
    "tilaus"
  ],
  "ordinary": [
    "tavallinen"
  ],
  "oregano": [
    "oregano"
  ],
  "organ": [
    "elin"
  ],
  "organisation": [
    "järjestö",
    "organisaatio"
  ],
  "organization": [
    "organisaatio"
  ],
  "organize": [
    "järjestää"
  ],
  "original": [
    "alkuperäinen"
  ],
  "ostrich": [
    "strutsi"
  ],
  "other": [
    "muu",
    "toinen"
  ],
  "other than": [
    "paitsi"
  ],
  "otter": [
    "saukko"
  ],
  "ought": [
    "pitäisi"
  ],
  "ought to": [
    "pitäisi"
  ],
  "ounce": [
    "unssi"
  ],
  "our": [
    "meidän"
  ],
  "ours": [
    "meidän"
  ],
  "out": [
    "ulos"
  ],
  "outbox": [
    "lähtevät"
  ],
  "outcome": [
    "lopputulos"
  ],
  "outfit": [
    "asu"
  ],
  "outside": [
    "ulkona",
    "ulkopuolella"
  ],
  "oval": [
    "soikio"
  ],
  "oven": [
    "uuni"
  ],
  "oven mitt": [
    "uunikinnas"
  ],
  "over": [
    "yli",
    "yläpuolella"
  ],
  "owe": [
    "olla velkaa"
  ],
  "owl": [
    "pöllö"
  ],
  "oxygen": [
    "happi"
  ],
  "pack": [
    "pakata"
  ],
  "package": [
    "pakkaus"
  ],
  "package delivery": [
    "pakettitoimitus"
  ],
  "package manager": [
    "paketinhallinta"
  ],
  "packet": [
    "paketti"
  ],
  "pain": [
    "kipu",
    "tuska"
  ],
  "painkiller": [
    "kipulääke"
  ],
  "paint": [
    "maalata"
  ],
  "painter": [
    "maalari",
    "taidemaalari"
  ],
  "painting": [
    "maalaus"
  ],
  "pair": [
    "pari"
  ],
  "pajamas": [
    "pyjama"
  ],
  "palace": [
    "palatsi"
  ],
  "pale": [
    "kalpea",
    "vaalea"
  ],
  "palm": [
    "palmu"
  ],
  "pan": [
    "pannu"
  ],
  "panda": [
    "panda"
  ],
  "panel": [
    "paneeli"
  ],
  "panther": [
    "pantteri"
  ],
  "pants": [
    "housut"
  ],
  "pantyhose": [
    "sukkahousut"
  ],
  "papaya": [
    "papaija"
  ],
  "paper": [
    "paperi"
  ],
  "paperwork": [
    "paperityö"
  ],
  "paprika": [
    "paprika"
  ],
  "paragraph": [
    "kappale"
  ],
  "parameter": [
    "parametri"
  ],
  "parcel": [
    "paketti"
  ],
  "parent": [
    "vanhempi"
  ],
  "parenthesis": [
    "sulje"
  ],
  "park": [
    "puisto"
  ],
  "parking": [
    "pysäköinti"
  ],
  "parking garage": [
    "parkkihalli"
  ],
  "parking lot": [
    "pysäköintialue"
  ],
  "parliament": [
    "eduskunta",
    "parlamentti"
  ],
  "parrot": [
    "papukaija"
  ],
  "parsley": [
    "persilja"
  ],
  "partially": [
    "osittain"
  ],
  "participate": [
    "osallistua"
  ],
  "particularly": [
    "erityisesti"
  ],
  "partly": [
    "osittain"
  ],
  "partner": [
    "kumppani"
  ],
  "party": [
    "juhla",
    "puolue"
  ],
  "pass": [
    "kulkulupa",
    "läpäistä",
    "matkakortti",
    "ohittaa"
  ],
  "passenger": [
    "matkustaja"
  ],
  "passport": [
    "passi"
  ],
  "password": [
    "salasana"
  ],
  "pasta": [
    "pasta"
  ],
  "paste": [
    "liittää"
  ],
  "pastor": [
    "pastori"
  ],
  "pasture": [
    "laidun"
  ],
  "patch": [
    "korjaustiedosto"
  ],
  "path": [
    "polku"
  ],
  "patience": [
    "kärsivällisyys"
  ],
  "patient": [
    "potilas"
  ],
  "patio": [
    "piha",
    "terassi"
  ],
  "pattern": [
    "kaava",
    "kuvio"
  ],
  "pause": [
    "keskeyttää",
    "pitää tauko"
  ],
  "pavement": [
    "jalkakäytävä",
    "päällyste"
  ],
  "pay": [
    "maksaa"
  ],
  "payment": [
    "maksu"
  ],
  "pea": [
    "herne"
  ],
  "peace": [
    "rauha"
  ],
  "peach": [
    "persikka"
  ],
  "peanut": [
    "maapähkinä"
  ],
  "pear": [
    "päärynä"
  ],
  "pebble": [
    "pikkukivi"
  ],
  "pedal": [
    "poljin"
  ],
  "pedestrian crossing": [
    "suojatie"
  ],
  "peel": [
    "kuoria"
  ],
  "penguin": [
    "pingviini"
  ],
  "peninsula": [
    "niemimaa"
  ],
  "pension": [
    "eläke"
  ],
  "people": [
    "ihmiset",
    "kansa"
  ],
  "pepper": [
    "pippuri"
  ],
  "percent": [
    "prosentti"
  ],
  "percentage": [
    "prosenttiosuus"
  ],
  "perch": [
    "ahven"
  ],
  "perfect": [
    "täydellinen"
  ],
  "performance": [
    "esitys",
    "suoritus",
    "suorituskyky"
  ],
  "perfume": [
    "hajuvesi"
  ],
  "perhaps": [
    "ehkä"
  ],
  "period": [
    "piste"
  ],
  "permission": [
    "lupa",
    "oikeus"
  ],
  "permit": [
    "lupa",
    "sallia"
  ],
  "person": [
    "henkilö",
    "ihminen"
  ],
  "personal": [
    "henkilökohtainen"
  ],
  "personality": [
    "persoonallisuus"
  ],
  "personnel": [
    "henkilöstö"
  ],
  "Peru": [
    "Peru"
  ],
  "peru": [
    "Peru"
  ],
  "pet": [
    "lemmikki"
  ],
  "petal": [
    "terälehti"
  ],
  "petrol": [
    "bensiini"
  ],
  "petrol station": [
    "huoltoasema"
  ],
  "pharmacist": [
    "apteekkari",
    "farmaseutti"
  ],
  "pharmacy": [
    "apteekki"
  ],
  "philosophy": [
    "filosofia"
  ],
  "phone": [
    "puhelin",
    "soittaa"
  ],
  "photo": [
    "valokuva"
  ],
  "photograph": [
    "valokuva"
  ],
  "photographer": [
    "valokuvaaja"
  ],
  "phrase": [
    "fraasi",
    "ilmaus"
  ],
  "physics": [
    "fysiikka"
  ],
  "piano": [
    "piano"
  ],
  "pick": [
    "poimia",
    "valita"
  ],
  "pick up": [
    "noutaa",
    "poimia"
  ],
  "pickle": [
    "suolakurkku",
    "suolakurkkuviipale"
  ],
  "picture": [
    "kuva"
  ],
  "pier": [
    "laituri"
  ],
  "pig": [
    "sika"
  ],
  "pigeon": [
    "kyyhkynen"
  ],
  "piglet": [
    "porsas"
  ],
  "pike": [
    "hauki"
  ],
  "pikeperch": [
    "kuha"
  ],
  "pill": [
    "pilleri",
    "tabletti"
  ],
  "pillow": [
    "tyyny"
  ],
  "pilot": [
    "lentäjä"
  ],
  "pine": [
    "mänty"
  ],
  "pineapple": [
    "ananas"
  ],
  "pink": [
    "vaaleanpunainen"
  ],
  "pipe": [
    "putki"
  ],
  "pistachio": [
    "pistaasi"
  ],
  "pizza": [
    "pizza"
  ],
  "plan": [
    "suunnitella",
    "suunnitelma"
  ],
  "plane": [
    "lentokone",
    "taso"
  ],
  "planet": [
    "planeetta"
  ],
  "plant": [
    "kasvi",
    "tehdas"
  ],
  "plastic": [
    "muovi"
  ],
  "plate": [
    "lautanen"
  ],
  "platform": [
    "alusta",
    "laituri"
  ],
  "play": [
    "leikkiä",
    "pelata",
    "soittaa"
  ],
  "playground": [
    "leikkikenttä"
  ],
  "plaza": [
    "aukio"
  ],
  "pleasant": [
    "miellyttävä"
  ],
  "please": [
    "ole hyvä"
  ],
  "please help": [
    "auta, ole hyvä"
  ],
  "pleasure": [
    "mielihyvä"
  ],
  "pliers": [
    "pihdit"
  ],
  "plot": [
    "juoni"
  ],
  "plug": [
    "pistoke"
  ],
  "plum": [
    "luumu"
  ],
  "plumber": [
    "putkimies"
  ],
  "plus": [
    "plus"
  ],
  "pocket": [
    "tasku"
  ],
  "poem": [
    "runo"
  ],
  "poetry": [
    "runous"
  ],
  "point": [
    "osoittaa"
  ],
  "pointer": [
    "osoitin"
  ],
  "Poland": [
    "Puola"
  ],
  "poland": [
    "Puola"
  ],
  "polar bear": [
    "jääkarhu"
  ],
  "police": [
    "poliisi"
  ],
  "police officer": [
    "poliisi"
  ],
  "police station": [
    "poliisiasema"
  ],
  "policy": [
    "käytäntö",
    "politiikka"
  ],
  "Polish": [
    "puola",
    "puolalainen"
  ],
  "polish": [
    "kiillottaa"
  ],
  "polite": [
    "kohtelias"
  ],
  "political party": [
    "puolue"
  ],
  "politician": [
    "poliitikko"
  ],
  "politics": [
    "politiikka"
  ],
  "polyester": [
    "polyesteri"
  ],
  "pomegranate": [
    "granaattiomena"
  ],
  "pond": [
    "lampi"
  ],
  "pony": [
    "poni"
  ],
  "poor": [
    "huono",
    "köyhä"
  ],
  "popular": [
    "suosittu"
  ],
  "population": [
    "väestö"
  ],
  "porcelain": [
    "posliini"
  ],
  "porch": [
    "kuisti"
  ],
  "porch light": [
    "kuistin valo"
  ],
  "pork": [
    "sianliha"
  ],
  "porridge": [
    "puuro"
  ],
  "port": [
    "satama"
  ],
  "Portugal": [
    "Portugali"
  ],
  "portugal": [
    "Portugali"
  ],
  "Portuguese": [
    "portugali",
    "portugalilainen"
  ],
  "portuguese": [
    "portugali",
    "portugalilainen"
  ],
  "possibility": [
    "mahdollisuus"
  ],
  "possible": [
    "mahdollinen"
  ],
  "post": [
    "julkaisu",
    "posti"
  ],
  "post office": [
    "posti"
  ],
  "postal code": [
    "postinumero"
  ],
  "pot": [
    "kattila",
    "ruukku"
  ],
  "potato": [
    "peruna"
  ],
  "poultry": [
    "siipikarja"
  ],
  "pound": [
    "pauna"
  ],
  "pour": [
    "kaataa"
  ],
  "power": [
    "teho",
    "valta",
    "voima"
  ],
  "power outlet": [
    "pistorasia"
  ],
  "powerful": [
    "voimakas"
  ],
  "practice": [
    "harjoitella"
  ],
  "praise": [
    "kehua"
  ],
  "prefer": [
    "pitää parempana"
  ],
  "preferences": [
    "asetukset",
    "mieltymykset"
  ],
  "pregnancy": [
    "raskaus"
  ],
  "pregnant": [
    "raskaana"
  ],
  "prepare": [
    "valmistaa",
    "valmistautua"
  ],
  "prepared": [
    "valmistautunut"
  ],
  "prescription": [
    "resepti"
  ],
  "presentation": [
    "esitys"
  ],
  "president": [
    "presidentti"
  ],
  "press": [
    "painaa"
  ],
  "pressure": [
    "paine"
  ],
  "pretty": [
    "melko",
    "nätti"
  ],
  "prevent": [
    "estää"
  ],
  "previous": [
    "edellinen"
  ],
  "previously": [
    "aiemmin"
  ],
  "price": [
    "hinta"
  ],
  "pride": [
    "ylpeys"
  ],
  "priest": [
    "pappi"
  ],
  "prime minister": [
    "pääministeri"
  ],
  "prince": [
    "prinssi"
  ],
  "princess": [
    "prinsessa"
  ],
  "principle": [
    "periaate"
  ],
  "print": [
    "painaa",
    "tulostaa"
  ],
  "printer": [
    "tulostin"
  ],
  "priority": [
    "etusija",
    "prioriteetti"
  ],
  "prison": [
    "vankila"
  ],
  "privacy": [
    "yksityisyys"
  ],
  "private": [
    "yksityinen"
  ],
  "probability": [
    "todennäköisyys"
  ],
  "probably": [
    "luultavasti",
    "todennäköisesti"
  ],
  "problem": [
    "ongelma"
  ],
  "procedure": [
    "menettely",
    "tapa"
  ],
  "proceed": [
    "edetä",
    "jatkaa"
  ],
  "process": [
    "prosessi"
  ],
  "processor": [
    "suoritin"
  ],
  "produce": [
    "tuottaa",
    "valmistaa"
  ],
  "product": [
    "tuote"
  ],
  "profession": [
    "ammatti"
  ],
  "professor": [
    "professori"
  ],
  "profile": [
    "profiili"
  ],
  "profit": [
    "voitto"
  ],
  "program": [
    "ohjelma"
  ],
  "programmer": [
    "ohjelmoija"
  ],
  "programming": [
    "ohjelmointi"
  ],
  "progress": [
    "edistyminen"
  ],
  "project": [
    "hanke",
    "projekti"
  ],
  "promise": [
    "luvata"
  ],
  "promotion": [
    "kampanja",
    "ylennys"
  ],
  "pronunciation": [
    "ääntäminen"
  ],
  "proof": [
    "todiste",
    "todistus"
  ],
  "proofread": [
    "oikolukea"
  ],
  "property": [
    "ominaisuus"
  ],
  "proportion": [
    "osuus",
    "suhde"
  ],
  "protect": [
    "suojella"
  ],
  "protection": [
    "suojaus"
  ],
  "proud": [
    "ylpeä"
  ],
  "province": [
    "maakunta"
  ],
  "psychologist": [
    "psykologi"
  ],
  "psychology": [
    "psykologia"
  ],
  "public": [
    "julkinen"
  ],
  "publish": [
    "julkaista"
  ],
  "pull": [
    "vetää"
  ],
  "pumpkin": [
    "kurpitsa"
  ],
  "pumpkin seed": [
    "kurpitsansiemen"
  ],
  "punch": [
    "lyödä nyrkillä"
  ],
  "punctuation": [
    "välimerkitys"
  ],
  "punish": [
    "rangaista"
  ],
  "punishment": [
    "rangaistus"
  ],
  "pupil": [
    "oppilas"
  ],
  "puppy": [
    "koiranpentu"
  ],
  "purchase": [
    "ostaa",
    "osto"
  ],
  "purple": [
    "purppura",
    "violetti"
  ],
  "purpose": [
    "tarkoitus"
  ],
  "purse": [
    "kukkaro",
    "käsilaukku"
  ],
  "push": [
    "työntää"
  ],
  "put": [
    "laittaa",
    "panna"
  ],
  "put on": [
    "pukea päälle"
  ],
  "qualification": [
    "pätevyys"
  ],
  "quality": [
    "laatu"
  ],
  "quantity": [
    "määrä"
  ],
  "quark": [
    "rahka"
  ],
  "quarter": [
    "neljännes"
  ],
  "queen": [
    "kuningatar"
  ],
  "query": [
    "kysely"
  ],
  "question": [
    "kysymys"
  ],
  "question mark": [
    "kysymysmerkki"
  ],
  "quick": [
    "nopea"
  ],
  "quickly": [
    "nopeasti"
  ],
  "quiet": [
    "hiljainen"
  ],
  "quilt": [
    "peitto",
    "täkki"
  ],
  "quite": [
    "melko"
  ],
  "quotation mark": [
    "lainausmerkki"
  ],
  "rabbit": [
    "kani"
  ],
  "race": [
    "kilpailla"
  ],
  "radiator": [
    "lämpöpatteri"
  ],
  "radio": [
    "radio"
  ],
  "radish": [
    "retiisi"
  ],
  "railway station": [
    "rautatieasema"
  ],
  "rain": [
    "sade"
  ],
  "rainbow": [
    "sateenkaari"
  ],
  "raincoat": [
    "sadetakki"
  ],
  "rainfall": [
    "sademäärä"
  ],
  "rainforest": [
    "sademetsä"
  ],
  "rainy": [
    "sateinen"
  ],
  "raise": [
    "kasvattaa",
    "nostaa"
  ],
  "raisin": [
    "rusina"
  ],
  "RAM": [
    "keskusmuisti"
  ],
  "ram": [
    "pässi"
  ],
  "ranking": [
    "järjestys",
    "sijoitus"
  ],
  "rapid": [
    "nopea",
    "ripeä"
  ],
  "rare": [
    "harvinainen"
  ],
  "rarely": [
    "harvoin"
  ],
  "raspberry": [
    "vadelma"
  ],
  "rat": [
    "rotta"
  ],
  "rather": [
    "melko",
    "pikemminkin"
  ],
  "ratio": [
    "suhde"
  ],
  "raven": [
    "korppi"
  ],
  "raw": [
    "raaka"
  ],
  "razor": [
    "partakone",
    "partaterä"
  ],
  "reach": [
    "saavuttaa",
    "ylettyä"
  ],
  "read": [
    "lukea"
  ],
  "ready": [
    "valmis"
  ],
  "real": [
    "todellinen"
  ],
  "realize": [
    "tajuta",
    "ymmärtää"
  ],
  "really": [
    "todella"
  ],
  "rearview mirror": [
    "taustapeili"
  ],
  "reason": [
    "järki",
    "syy"
  ],
  "receipt": [
    "kuitti"
  ],
  "receive": [
    "saada",
    "vastaanottaa"
  ],
  "receive message": [
    "vastaanottaa viesti"
  ],
  "recently": [
    "hiljattain",
    "äskettäin"
  ],
  "reception": [
    "vastaanotto"
  ],
  "receptionist": [
    "vastaanottovirkailija"
  ],
  "recipe": [
    "resepti"
  ],
  "recognize": [
    "tunnistaa"
  ],
  "recommendation": [
    "suositus"
  ],
  "record": [
    "merkintä",
    "tallenne",
    "tietue"
  ],
  "recording": [
    "tallenne"
  ],
  "recovery": [
    "palautus",
    "toipuminen"
  ],
  "rectangle": [
    "suorakulmio"
  ],
  "recycle bin": [
    "kierrätysastia"
  ],
  "recycling": [
    "kierrätys"
  ],
  "red": [
    "punainen"
  ],
  "red cabbage": [
    "punakaali"
  ],
  "red deer": [
    "saksanhirvi"
  ],
  "red wine": [
    "punaviini"
  ],
  "redcurrant": [
    "punaherukka"
  ],
  "reduce": [
    "vähentää"
  ],
  "referee": [
    "erotuomari"
  ],
  "refrigerator": [
    "jääkaappi"
  ],
  "refugee": [
    "pakolainen"
  ],
  "refund": [
    "hyvitys",
    "rahanpalautus"
  ],
  "refuse": [
    "kieltäytyä"
  ],
  "region": [
    "alue",
    "seutu"
  ],
  "register": [
    "rekisteröityä"
  ],
  "regulation": [
    "määräys",
    "säädös"
  ],
  "reindeer": [
    "poro"
  ],
  "reject": [
    "hylätä"
  ],
  "rejection": [
    "hylkäys"
  ],
  "relationship": [
    "suhde"
  ],
  "relative": [
    "sukulainen"
  ],
  "relax": [
    "rentoutua"
  ],
  "relaxed": [
    "rento"
  ],
  "release": [
    "julkaisu"
  ],
  "reliability": [
    "luotettavuus"
  ],
  "religion": [
    "uskonto"
  ],
  "remain": [
    "jäädä"
  ],
  "remember": [
    "muistaa"
  ],
  "remote control": [
    "kaukosäädin"
  ],
  "remove": [
    "irrottaa",
    "poistaa"
  ],
  "rent": [
    "vuokra",
    "vuokrata"
  ],
  "rent payment": [
    "vuokranmaksu"
  ],
  "repair": [
    "korjata"
  ],
  "repeat": [
    "toistaa"
  ],
  "replace": [
    "korvata"
  ],
  "reply": [
    "vastata"
  ],
  "report": [
    "ilmoittaa",
    "raportoida",
    "raportti"
  ],
  "reporter": [
    "reportteri"
  ],
  "repository": [
    "koodivarasto",
    "tietovarasto"
  ],
  "reptile": [
    "matelija"
  ],
  "republic": [
    "tasavalta"
  ],
  "require": [
    "edellyttää",
    "vaatia"
  ],
  "requirement": [
    "vaatimus"
  ],
  "rescue": [
    "pelastaa"
  ],
  "research": [
    "tutkia",
    "tutkimus"
  ],
  "researcher": [
    "tutkija"
  ],
  "reservation": [
    "varaus"
  ],
  "reserve": [
    "varata"
  ],
  "resident": [
    "asukas"
  ],
  "respect": [
    "kunnioittaa",
    "kunnioitus"
  ],
  "respond": [
    "vastata"
  ],
  "responsibility": [
    "vastuu"
  ],
  "rest": [
    "levätä"
  ],
  "restaurant": [
    "ravintola"
  ],
  "restore": [
    "palauttaa"
  ],
  "restriction": [
    "rajoitus"
  ],
  "result": [
    "tulos"
  ],
  "resume": [
    "ansioluettelo"
  ],
  "retreat": [
    "vetäytyä"
  ],
  "return": [
    "palata",
    "palauttaa"
  ],
  "return policy": [
    "palautuskäytäntö"
  ],
  "return ticket": [
    "meno-paluulippu"
  ],
  "return value": [
    "paluuarvo"
  ],
  "revenue": [
    "liikevaihto",
    "tulot"
  ],
  "reverse": [
    "kääntää päinvastaiseksi"
  ],
  "review": [
    "arvio",
    "arvioida",
    "arvostelu",
    "tarkistaa"
  ],
  "rhinoceros": [
    "sarvikuono"
  ],
  "rhythm": [
    "rytmi"
  ],
  "rice": [
    "riisi"
  ],
  "rich": [
    "rikas"
  ],
  "ride": [
    "ajaa",
    "ratsastaa"
  ],
  "right": [
    "oikea",
    "oikeus"
  ],
  "rights": [
    "oikeudet"
  ],
  "ring": [
    "rengas",
    "sormus"
  ],
  "rinse": [
    "huuhdella"
  ],
  "ripe": [
    "kypsä"
  ],
  "rise": [
    "nousta"
  ],
  "risk": [
    "riski"
  ],
  "risky": [
    "riskialtis"
  ],
  "river": [
    "joki"
  ],
  "road": [
    "tie"
  ],
  "road sign": [
    "liikennemerkki"
  ],
  "roast": [
    "paahtaa"
  ],
  "roasting": [
    "paahtaminen"
  ],
  "rob": [
    "ryöstää"
  ],
  "robe": [
    "kylpytakki"
  ],
  "rock": [
    "kallio",
    "kivi"
  ],
  "rocket": [
    "raketti"
  ],
  "roe": [
    "mäti"
  ],
  "roe deer": [
    "metsäkauris"
  ],
  "role": [
    "rooli"
  ],
  "roll": [
    "rulla",
    "sämpylä"
  ],
  "roof": [
    "katto"
  ],
  "room": [
    "huone"
  ],
  "room service": [
    "huonepalvelu"
  ],
  "rooster": [
    "kukko"
  ],
  "root": [
    "juuri"
  ],
  "rope": [
    "köysi"
  ],
  "rose": [
    "ruusu"
  ],
  "rosemary": [
    "rosmariini"
  ],
  "rotate": [
    "kiertää",
    "pyöriä"
  ],
  "rough": [
    "epätasainen",
    "karkea"
  ],
  "roughly": [
    "karkeasti",
    "suunnilleen"
  ],
  "round trip": [
    "edestakainen matka"
  ],
  "roundabout": [
    "liikenneympyrä"
  ],
  "route": [
    "reitti"
  ],
  "router": [
    "reititin"
  ],
  "row": [
    "rivi"
  ],
  "rowan": [
    "pihlaja"
  ],
  "rubber": [
    "kumi"
  ],
  "rubbish": [
    "roskat"
  ],
  "rude": [
    "epäkohtelias"
  ],
  "rug": [
    "matto"
  ],
  "rule": [
    "hallita",
    "sääntö"
  ],
  "run": [
    "juosta"
  ],
  "runway": [
    "kiitotie"
  ],
  "Russia": [
    "Venäjä"
  ],
  "russia": [
    "Venäjä"
  ],
  "Russian": [
    "venäjä",
    "venäläinen"
  ],
  "russian": [
    "venäjä",
    "venäläinen"
  ],
  "rye": [
    "ruis"
  ],
  "sad": [
    "surullinen"
  ],
  "sadness": [
    "suru"
  ],
  "safe": [
    "turvallinen"
  ],
  "safety": [
    "turvallisuus"
  ],
  "sail": [
    "purjehtia"
  ],
  "sailboat": [
    "purjevene"
  ],
  "salad": [
    "salaatti"
  ],
  "salary": [
    "palkka"
  ],
  "sale": [
    "ale",
    "myynti"
  ],
  "salesperson": [
    "myyjä"
  ],
  "saliva": [
    "sylki"
  ],
  "salmon": [
    "lohi"
  ],
  "salt": [
    "suola"
  ],
  "salty": [
    "suolainen"
  ],
  "same": [
    "sama"
  ],
  "sample": [
    "näyte",
    "otos"
  ],
  "sand": [
    "hiekka"
  ],
  "sandal": [
    "sandaali"
  ],
  "sandwich": [
    "voileipä"
  ],
  "satellite": [
    "satelliitti"
  ],
  "saturday": [
    "lauantai"
  ],
  "sauce": [
    "kastike"
  ],
  "saucepan": [
    "kasari",
    "kattila"
  ],
  "Saudi Arabia": [
    "Saudi-Arabia"
  ],
  "saudi arabia": [
    "Saudi-Arabia"
  ],
  "sauna": [
    "sauna"
  ],
  "sausage": [
    "makkara"
  ],
  "save": [
    "pelastaa",
    "säästää",
    "tallentaa"
  ],
  "save file": [
    "tallentaa tiedosto"
  ],
  "saw": [
    "saha"
  ],
  "say": [
    "sanoa"
  ],
  "scalability": [
    "skaalautuvuus"
  ],
  "scalp": [
    "päänahka"
  ],
  "scanner": [
    "skanneri"
  ],
  "scarf": [
    "huivi"
  ],
  "scene": [
    "kohtaus",
    "maisema"
  ],
  "schedule": [
    "aikataulu"
  ],
  "school": [
    "koulu"
  ],
  "science": [
    "tiede"
  ],
  "scientist": [
    "tieteilijä",
    "tutkija"
  ],
  "scissors": [
    "sakset"
  ],
  "scooter": [
    "skootteri"
  ],
  "scooter board": [
    "potkulauta"
  ],
  "score": [
    "pistemäärä",
    "tehdä piste"
  ],
  "Scotland": [
    "Skotlanti"
  ],
  "scotland": [
    "Skotlanti"
  ],
  "scream": [
    "huutaa",
    "kiljua"
  ],
  "screen": [
    "näyttö"
  ],
  "screw": [
    "ruuvi"
  ],
  "screwdriver": [
    "ruuvimeisseli"
  ],
  "scroll": [
    "vierittää"
  ],
  "scrollbar": [
    "vierityspalkki"
  ],
  "scrub": [
    "hangata"
  ],
  "sea": [
    "meri"
  ],
  "seafood": [
    "merenelävät"
  ],
  "seal": [
    "hylje"
  ],
  "search": [
    "etsiä",
    "hakea"
  ],
  "search engine": [
    "hakukone"
  ],
  "search online": [
    "etsiä verkosta"
  ],
  "search result": [
    "hakutulos"
  ],
  "season": [
    "kausi",
    "vuodenaika"
  ],
  "seat": [
    "istuin"
  ],
  "seatbelt": [
    "turvavyö"
  ],
  "second": [
    "sekunti"
  ],
  "secretary": [
    "sihteeri"
  ],
  "security": [
    "tietoturva",
    "turvallisuus"
  ],
  "security camera": [
    "valvontakamera"
  ],
  "see": [
    "nähdä"
  ],
  "see you": [
    "nähdään"
  ],
  "see you later": [
    "nähdään myöhemmin"
  ],
  "seed": [
    "siemen"
  ],
  "seed oil": [
    "siemenöljy"
  ],
  "seek": [
    "etsiä"
  ],
  "select": [
    "valita"
  ],
  "self": [
    "itse",
    "minä"
  ],
  "sell": [
    "myydä"
  ],
  "semicolon": [
    "puolipiste"
  ],
  "send": [
    "lähettää"
  ],
  "send message": [
    "lähettää viesti"
  ],
  "sentence": [
    "lause",
    "tuomio"
  ],
  "separate": [
    "erota",
    "erottaa"
  ],
  "september": [
    "syyskuu"
  ],
  "series": [
    "sarja"
  ],
  "serious": [
    "vakava"
  ],
  "server": [
    "palvelin"
  ],
  "service": [
    "palvelu"
  ],
  "sesame": [
    "seesami"
  ],
  "set": [
    "asettaa",
    "määrätä"
  ],
  "settings": [
    "asetukset"
  ],
  "seven": [
    "seitsemän"
  ],
  "seventeen": [
    "seitsemäntoista"
  ],
  "seventy": [
    "seitsemänkymmentä"
  ],
  "several": [
    "useita"
  ],
  "sew": [
    "ommella"
  ],
  "sewer": [
    "viemäri"
  ],
  "sewing machine": [
    "ompelukone"
  ],
  "shake": [
    "ravistaa",
    "täristä"
  ],
  "shall": [
    "aikoa"
  ],
  "shame": [
    "häpeä"
  ],
  "shampoo": [
    "shampoo"
  ],
  "shape": [
    "muoto"
  ],
  "share": [
    "jakaa"
  ],
  "share link": [
    "jakaa linkki"
  ],
  "shark": [
    "hai"
  ],
  "sharp": [
    "terävä"
  ],
  "shaving cream": [
    "partavaahto"
  ],
  "shawl": [
    "hartiahuivi"
  ],
  "she": [
    "hän"
  ],
  "shed": [
    "vaja"
  ],
  "sheep": [
    "lammas"
  ],
  "sheet": [
    "arkki",
    "lakana"
  ],
  "shelf": [
    "hylly"
  ],
  "shell": [
    "kuori"
  ],
  "ship": [
    "laiva",
    "laivata",
    "lähettää"
  ],
  "shipping": [
    "kuljetus",
    "toimitus"
  ],
  "shirt": [
    "paita"
  ],
  "shoe": [
    "kenkä"
  ],
  "shoelace": [
    "kengännauha"
  ],
  "shoes": [
    "kengät"
  ],
  "shop": [
    "kauppa",
    "myymälä"
  ],
  "shopkeeper": [
    "kauppias"
  ],
  "shopping mall": [
    "kauppakeskus"
  ],
  "shore": [
    "ranta"
  ],
  "short": [
    "lyhyt",
    "lyhytkasvuinen"
  ],
  "shortage": [
    "pula"
  ],
  "shorts": [
    "shortsit"
  ],
  "should": [
    "pitäisi"
  ],
  "should not": [
    "ei pitäisi"
  ],
  "shoulder": [
    "olkapää"
  ],
  "shout": [
    "huutaa"
  ],
  "show": [
    "esitys",
    "näyttää",
    "näytös"
  ],
  "shower": [
    "suihku"
  ],
  "shrimp": [
    "katkarapu"
  ],
  "shrink": [
    "kutistaa",
    "kutistua"
  ],
  "shrub": [
    "pensas"
  ],
  "shutter": [
    "luukku",
    "säleikkö"
  ],
  "sibling": [
    "sisarus"
  ],
  "sick": [
    "sairas"
  ],
  "side": [
    "puoli",
    "sivu"
  ],
  "sidebar": [
    "sivupalkki"
  ],
  "sidewalk": [
    "jalkakäytävä"
  ],
  "sigh": [
    "huokaista"
  ],
  "sign": [
    "kyltti",
    "merkki"
  ],
  "sign in": [
    "kirjautua sisään"
  ],
  "sign out": [
    "kirjautua ulos"
  ],
  "signal": [
    "merkki",
    "signaali"
  ],
  "signature": [
    "allekirjoitus"
  ],
  "silent": [
    "hiljainen"
  ],
  "silk": [
    "silkki"
  ],
  "silly": [
    "hassu",
    "hölmö"
  ],
  "silver": [
    "hopea",
    "hopeanvärinen"
  ],
  "simple": [
    "yksinkertainen"
  ],
  "since": [
    "koska",
    "siitä lähtien"
  ],
  "sing": [
    "laulaa"
  ],
  "singer": [
    "laulaja"
  ],
  "single": [
    "naimaton",
    "yksittäinen"
  ],
  "sink": [
    "lavuaari",
    "pesuallas"
  ],
  "sister": [
    "sisar",
    "sisko"
  ],
  "sit": [
    "istua"
  ],
  "six": [
    "kuusi"
  ],
  "sixteen": [
    "kuusitoista"
  ],
  "sixty": [
    "kuusikymmentä"
  ],
  "size": [
    "koko"
  ],
  "skateboard": [
    "rullalauta"
  ],
  "skeleton": [
    "luuranko"
  ],
  "sketch": [
    "luonnostella"
  ],
  "ski resort": [
    "hiihtokeskus"
  ],
  "ski slope": [
    "laskettelurinne"
  ],
  "skill": [
    "taito"
  ],
  "skin": [
    "iho"
  ],
  "skip": [
    "hypellä",
    "ohittaa"
  ],
  "skirt": [
    "hame"
  ],
  "sky": [
    "taivas"
  ],
  "skyscraper": [
    "pilvenpiirtäjä"
  ],
  "slash": [
    "vinoviiva"
  ],
  "sleep": [
    "nukkua"
  ],
  "sleepy": [
    "uninen"
  ],
  "sleeve": [
    "hiha"
  ],
  "slice": [
    "viipaloida"
  ],
  "slipper": [
    "tohveli"
  ],
  "slow": [
    "hidas"
  ],
  "slowly": [
    "hitaasti"
  ],
  "slug": [
    "etana"
  ],
  "small": [
    "pieni"
  ],
  "smart": [
    "fiksu",
    "älykäs"
  ],
  "smartphone": [
    "älypuhelin"
  ],
  "smell": [
    "haistaa",
    "tuoksua"
  ],
  "smile": [
    "hymyillä"
  ],
  "smoke": [
    "savu"
  ],
  "smoke detector": [
    "palovaroitin"
  ],
  "smooth": [
    "sileä",
    "tasainen"
  ],
  "smoothie": [
    "smoothie"
  ],
  "snack": [
    "välipala"
  ],
  "snail": [
    "etana"
  ],
  "snake": [
    "käärme"
  ],
  "sneaker": [
    "lenkkari"
  ],
  "sneeze": [
    "aivastaa"
  ],
  "snore": [
    "kuorsata"
  ],
  "snow": [
    "lumi"
  ],
  "snowflake": [
    "lumihiutale"
  ],
  "snowy": [
    "luminen"
  ],
  "so": [
    "joten",
    "niin"
  ],
  "soap": [
    "saippua"
  ],
  "society": [
    "yhteiskunta"
  ],
  "sociology": [
    "sosiologia"
  ],
  "sock": [
    "sukka"
  ],
  "socket": [
    "pistorasia"
  ],
  "soda": [
    "virvoitusjuoma"
  ],
  "sofa": [
    "sohva"
  ],
  "soft": [
    "pehmeä"
  ],
  "soft drink": [
    "virvoitusjuoma"
  ],
  "software": [
    "ohjelmisto"
  ],
  "soil": [
    "maaperä",
    "multa"
  ],
  "soldier": [
    "sotilas"
  ],
  "solid state drive": [
    "SSD-asema"
  ],
  "solution": [
    "ratkaisu"
  ],
  "solve": [
    "ratkaista"
  ],
  "some": [
    "jonkin verran",
    "jotkut"
  ],
  "someone": [
    "joku"
  ],
  "something": [
    "jotakin",
    "mainittu asia"
  ],
  "sometimes": [
    "joskus"
  ],
  "son": [
    "poika"
  ],
  "song": [
    "laulu"
  ],
  "soon": [
    "pian"
  ],
  "sorry": [
    "anteeksi",
    "pahoillaan"
  ],
  "sort": [
    "lajitella"
  ],
  "sound": [
    "ääni"
  ],
  "soup": [
    "keitto"
  ],
  "sour": [
    "hapan"
  ],
  "sour cream": [
    "hapankerma",
    "smetana"
  ],
  "source code": [
    "lähdekoodi"
  ],
  "south": [
    "etelä"
  ],
  "South Africa": [
    "Etelä-Afrikka"
  ],
  "south africa": [
    "Etelä-Afrikka"
  ],
  "South Korea": [
    "Etelä-Korea"
  ],
  "south korea": [
    "Etelä-Korea"
  ],
  "southeast": [
    "kaakko"
  ],
  "southwest": [
    "lounas"
  ],
  "soybean": [
    "soijapapu"
  ],
  "space": [
    "avaruus",
    "tila"
  ],
  "space character": [
    "välilyönti"
  ],
  "spaceship": [
    "avaruusalus"
  ],
  "spaghetti": [
    "spagetti"
  ],
  "Spain": [
    "Espanja"
  ],
  "spain": [
    "Espanja"
  ],
  "spam": [
    "roskaposti"
  ],
  "Spanish": [
    "espanja",
    "espanjalainen"
  ],
  "spanish": [
    "espanja",
    "espanjalainen"
  ],
  "spanner": [
    "jakoavain",
    "kiintoavain"
  ],
  "sparkling water": [
    "hiilihapotettu vesi"
  ],
  "sparrow": [
    "varpunen"
  ],
  "speak": [
    "puhua"
  ],
  "speaker": [
    "kaiutin",
    "puhuja"
  ],
  "special": [
    "erityinen"
  ],
  "species": [
    "laji"
  ],
  "speech": [
    "puhe"
  ],
  "speed": [
    "nopeus"
  ],
  "speed limit": [
    "nopeusrajoitus"
  ],
  "spelling": [
    "oikeinkirjoitus"
  ],
  "spend": [
    "kuluttaa",
    "käyttää"
  ],
  "sphere": [
    "pallo"
  ],
  "spicy": [
    "mausteinen",
    "tulinen"
  ],
  "spider": [
    "hämähäkki"
  ],
  "spill": [
    "kaatua",
    "läikyttää"
  ],
  "spin": [
    "pyörittää",
    "pyöriä"
  ],
  "spinach": [
    "pinaatti"
  ],
  "spirits": [
    "väkevät alkoholijuomat"
  ],
  "split": [
    "halkaista",
    "jakaa"
  ],
  "sponge": [
    "sieni"
  ],
  "spoon": [
    "lusikka"
  ],
  "sports field": [
    "urheilukenttä"
  ],
  "spouse": [
    "puoliso"
  ],
  "spread": [
    "levittää",
    "levitä"
  ],
  "spring": [
    "kevät",
    "lähde"
  ],
  "spruce": [
    "kuusi"
  ],
  "square": [
    "aukio",
    "neliö",
    "tori"
  ],
  "squash": [
    "kurpitsa"
  ],
  "squirrel": [
    "orava"
  ],
  "SSD": [
    "SSD-asema"
  ],
  "ssd": [
    "SSD-asema"
  ],
  "stadium": [
    "stadion"
  ],
  "staff": [
    "henkilöstö"
  ],
  "stage": [
    "lava",
    "vaihe"
  ],
  "staircase": [
    "portaikko"
  ],
  "stairs": [
    "portaat"
  ],
  "stale": [
    "kuiva",
    "vanhentunut"
  ],
  "stand": [
    "seisoa"
  ],
  "standard": [
    "standardi"
  ],
  "star": [
    "tähti"
  ],
  "start": [
    "aloittaa"
  ],
  "starter": [
    "alkupala"
  ],
  "startup": [
    "kasvuyritys"
  ],
  "state": [
    "osavaltio",
    "valtio"
  ],
  "station": [
    "asema"
  ],
  "statistics": [
    "tilastot",
    "tilastotiede"
  ],
  "statue": [
    "patsas"
  ],
  "stay": [
    "jäädä",
    "oleskella"
  ],
  "steak": [
    "pihvi"
  ],
  "steal": [
    "varastaa"
  ],
  "steam": [
    "höyry",
    "höyryttää"
  ],
  "steam room": [
    "höyrysauna"
  ],
  "steaming": [
    "höyryttäminen"
  ],
  "steel": [
    "teräs"
  ],
  "steering wheel": [
    "ohjauspyörä"
  ],
  "stem": [
    "varsi"
  ],
  "step": [
    "askel",
    "porras"
  ],
  "stew": [
    "hauduke",
    "pata"
  ],
  "still": [
    "vielä",
    "yhä"
  ],
  "stir": [
    "sekoittaa"
  ],
  "stock": [
    "osake",
    "varasto"
  ],
  "stocking": [
    "sukka"
  ],
  "stomach": [
    "mahalaukku",
    "vatsa"
  ],
  "stomachache": [
    "vatsakipu"
  ],
  "stone": [
    "kivi"
  ],
  "stoneware": [
    "kivitavara"
  ],
  "stool": [
    "jakkara"
  ],
  "stop": [
    "lopettaa",
    "pysäyttää"
  ],
  "storage": [
    "tallennustila",
    "varasto"
  ],
  "store": [
    "kauppa",
    "myymälä",
    "säilyttää",
    "varastoida"
  ],
  "storm": [
    "myrsky"
  ],
  "stormy": [
    "myrskyinen"
  ],
  "story": [
    "tarina"
  ],
  "stove": [
    "liesi"
  ],
  "strait": [
    "salmi"
  ],
  "strange": [
    "outo"
  ],
  "stranger": [
    "tuntematon",
    "vieras"
  ],
  "strategy": [
    "strategia"
  ],
  "strawberry": [
    "mansikka"
  ],
  "stream": [
    "puro",
    "virta"
  ],
  "street": [
    "katu"
  ],
  "stress": [
    "stressi"
  ],
  "stretch": [
    "venytellä",
    "venyttää"
  ],
  "string": [
    "merkkijono",
    "naru"
  ],
  "strong": [
    "vahva"
  ],
  "structure": [
    "rakenne"
  ],
  "student": [
    "opiskelija",
    "oppilas"
  ],
  "study": [
    "opiskella",
    "tutkimus"
  ],
  "stupid": [
    "tyhmä"
  ],
  "subject": [
    "aihe",
    "oppiaine"
  ],
  "submarine": [
    "sukellusvene"
  ],
  "submit": [
    "jättää",
    "lähettää"
  ],
  "subscribe": [
    "tilata"
  ],
  "subscription": [
    "tilaus"
  ],
  "subtract": [
    "vähentää"
  ],
  "suburb": [
    "esikaupunki"
  ],
  "subway": [
    "maanalainen",
    "metro"
  ],
  "succeed": [
    "onnistua"
  ],
  "success": [
    "menestys",
    "onnistuminen"
  ],
  "such as": [
    "kuten"
  ],
  "suede": [
    "mokka"
  ],
  "sugar": [
    "sokeri"
  ],
  "suggestion": [
    "ehdotus"
  ],
  "suit": [
    "puku"
  ],
  "suitcase": [
    "matkalaukku"
  ],
  "summary": [
    "yhteenveto"
  ],
  "summer": [
    "kesä"
  ],
  "sun": [
    "aurinko"
  ],
  "Sunday": [
    "sunnuntai"
  ],
  "sunday": [
    "sunnuntai"
  ],
  "sunflower": [
    "auringonkukka"
  ],
  "sunflower seed": [
    "auringonkukansiemen"
  ],
  "sunglasses": [
    "aurinkolasit"
  ],
  "sunlight": [
    "auringonvalo"
  ],
  "sunny": [
    "aurinkoinen"
  ],
  "sunscreen": [
    "aurinkovoide"
  ],
  "supermarket": [
    "ruokakauppa",
    "supermarket"
  ],
  "supper": [
    "illallinen",
    "iltapala"
  ],
  "supply": [
    "tarjonta",
    "toimitus"
  ],
  "support": [
    "tukea",
    "tuki"
  ],
  "suppose": [
    "olettaa"
  ],
  "surface": [
    "pinta"
  ],
  "surgeon": [
    "kirurgi"
  ],
  "surgery": [
    "kirurgia",
    "leikkaus"
  ],
  "surplus": [
    "ylijäämä"
  ],
  "surprise": [
    "yllätys"
  ],
  "survive": [
    "selviytyä"
  ],
  "suspect": [
    "epäillä"
  ],
  "swamp": [
    "suo"
  ],
  "swan": [
    "joutsen"
  ],
  "sweat": [
    "hiki"
  ],
  "sweater": [
    "neule",
    "villapaita"
  ],
  "Sweden": [
    "Ruotsi"
  ],
  "sweden": [
    "Ruotsi"
  ],
  "Swedish": [
    "ruotsalainen",
    "ruotsi"
  ],
  "swedish": [
    "ruotsalainen",
    "ruotsi"
  ],
  "sweep": [
    "lakaista"
  ],
  "sweet": [
    "makea",
    "makeinen"
  ],
  "sweet potato": [
    "bataatti"
  ],
  "swim": [
    "uida"
  ],
  "swimming pool": [
    "uima-allas"
  ],
  "swipe": [
    "pyyhkäistä"
  ],
  "switch": [
    "kytkin"
  ],
  "Switzerland": [
    "Sveitsi"
  ],
  "switzerland": [
    "Sveitsi"
  ],
  "syllable": [
    "tavu"
  ],
  "symbol": [
    "merkki",
    "symboli"
  ],
  "symptom": [
    "oire"
  ],
  "synagogue": [
    "synagoga"
  ],
  "synchronization": [
    "synkronointi"
  ],
  "syrup": [
    "siirappi"
  ],
  "system": [
    "järjestelmä"
  ],
  "T-shirt": [
    "t-paita"
  ],
  "t-shirt": [
    "t-paita"
  ],
  "table": [
    "pöytä",
    "taulukko"
  ],
  "tablecloth": [
    "pöytäliina"
  ],
  "tablet": [
    "tabletti"
  ],
  "tablet computer": [
    "tabletti"
  ],
  "tactic": [
    "taktiikka"
  ],
  "take": [
    "ottaa"
  ],
  "talk": [
    "puhua"
  ],
  "tall": [
    "pitkä"
  ],
  "tap": [
    "hana"
  ],
  "task": [
    "tehtävä"
  ],
  "taste": [
    "maistaa",
    "maistua"
  ],
  "tasty": [
    "maukas"
  ],
  "tax": [
    "vero"
  ],
  "taxation": [
    "verotus"
  ],
  "taxi": [
    "taksi"
  ],
  "tea": [
    "tee"
  ],
  "teach": [
    "opettaa"
  ],
  "teacher": [
    "opettaja"
  ],
  "team": [
    "joukkue",
    "tiimi"
  ],
  "teapot": [
    "teekannu"
  ],
  "tear": [
    "kyynel",
    "repiä"
  ],
  "technique": [
    "tekniikka"
  ],
  "teenager": [
    "teini-ikäinen"
  ],
  "teeth": [
    "hampaat"
  ],
  "television": [
    "televisio"
  ],
  "tell": [
    "kertoa"
  ],
  "temperature": [
    "lämpötila"
  ],
  "template": [
    "mallipohja"
  ],
  "temple": [
    "temppeli"
  ],
  "ten": [
    "kymmenen"
  ],
  "tenant": [
    "vuokralainen"
  ],
  "terabyte": [
    "teratavu"
  ],
  "terminal": [
    "terminaali"
  ],
  "terrace": [
    "terassi"
  ],
  "terrible": [
    "kauhea"
  ],
  "test": [
    "testata"
  ],
  "text": [
    "lähettää tekstiviesti",
    "teksti"
  ],
  "text string": [
    "merkkijono"
  ],
  "textbook": [
    "oppikirja"
  ],
  "Thailand": [
    "Thaimaa"
  ],
  "thailand": [
    "Thaimaa"
  ],
  "than": [
    "kuin"
  ],
  "thank you": [
    "kiitos"
  ],
  "thank you very much": [
    "kiitos paljon"
  ],
  "thanks": [
    "kiitos"
  ],
  "that": [
    "se",
    "tuo"
  ],
  "the day after tomorrow": [
    "ylihuomenna"
  ],
  "the day before yesterday": [
    "toissapäivänä"
  ],
  "theater": [
    "teatteri"
  ],
  "theatre": [
    "teatteri"
  ],
  "their": [
    "heidän",
    "niiden"
  ],
  "theirs": [
    "heidän"
  ],
  "then": [
    "sitten"
  ],
  "theory": [
    "teoria"
  ],
  "therapist": [
    "terapeutti"
  ],
  "therapy": [
    "terapia"
  ],
  "there": [
    "siellä",
    "tuolla"
  ],
  "therefore": [
    "sen vuoksi",
    "siksi"
  ],
  "thermostat": [
    "termostaatti"
  ],
  "these": [
    "nämä"
  ],
  "they": [
    "he",
    "ne"
  ],
  "thick": [
    "paksu"
  ],
  "thigh": [
    "reisi"
  ],
  "thin": [
    "laiha",
    "ohut"
  ],
  "think": [
    "ajatella"
  ],
  "thirsty": [
    "janoinen"
  ],
  "thirteen": [
    "kolmetoista"
  ],
  "thirty": [
    "kolmekymmentä"
  ],
  "this": [
    "tämä"
  ],
  "this evening": [
    "tänä iltana"
  ],
  "this morning": [
    "tänä aamuna"
  ],
  "those": [
    "ne",
    "nuo"
  ],
  "though": [
    "vaikka"
  ],
  "thought": [
    "ajatus"
  ],
  "thousand": [
    "tuhat"
  ],
  "thread": [
    "lanka"
  ],
  "threat": [
    "uhka"
  ],
  "three": [
    "kolme"
  ],
  "throat": [
    "kurkku"
  ],
  "through": [
    "läpi"
  ],
  "throughput": [
    "läpäisykyky"
  ],
  "throw": [
    "heittää"
  ],
  "thumb": [
    "peukalo"
  ],
  "thunder": [
    "ukkonen",
    "ukkosenjyrinä"
  ],
  "thursday": [
    "torstai"
  ],
  "thyme": [
    "timjami"
  ],
  "ticket": [
    "lippu"
  ],
  "tie": [
    "solmio"
  ],
  "tiger": [
    "tiikeri"
  ],
  "time": [
    "aika"
  ],
  "timetable": [
    "aikataulu"
  ],
  "tiny": [
    "pikkuruinen"
  ],
  "tip": [
    "juomaraha",
    "kärki"
  ],
  "tire": [
    "rengas"
  ],
  "tired": [
    "väsynyt"
  ],
  "title": [
    "nimike",
    "otsikko"
  ],
  "to": [
    "johonkin",
    "kohti"
  ],
  "toad": [
    "rupikonna"
  ],
  "toast": [
    "paahtaminen",
    "paahtoleipä"
  ],
  "toaster": [
    "leivänpaahdin"
  ],
  "today": [
    "tänään"
  ],
  "toe": [
    "varvas"
  ],
  "together": [
    "yhdessä"
  ],
  "toilet": [
    "vessa",
    "WC"
  ],
  "toilet paper": [
    "vessapaperi"
  ],
  "token": [
    "token",
    "tunniste"
  ],
  "tomato": [
    "tomaatti"
  ],
  "tomorrow": [
    "huomenna"
  ],
  "tongue": [
    "kieli"
  ],
  "tonight": [
    "ensi yönä",
    "tänä iltana"
  ],
  "tooth": [
    "hammas"
  ],
  "toothbrush": [
    "hammasharja"
  ],
  "toothpaste": [
    "hammastahna"
  ],
  "tornado": [
    "pyörremyrsky",
    "tornado"
  ],
  "touch": [
    "koskea"
  ],
  "touchpad": [
    "kosketuslevy"
  ],
  "touchscreen": [
    "kosketusnäyttö"
  ],
  "tourist": [
    "turisti"
  ],
  "towel": [
    "pyyhe"
  ],
  "town": [
    "kaupunki",
    "taajama"
  ],
  "trade": [
    "käydä kauppaa"
  ],
  "tradition": [
    "perinne"
  ],
  "traffic": [
    "liikenne"
  ],
  "traffic jam": [
    "liikenneruuhka"
  ],
  "traffic light": [
    "liikennevalo"
  ],
  "trail": [
    "polku",
    "reitti"
  ],
  "train": [
    "harjoitella",
    "juna",
    "kouluttaa"
  ],
  "train station": [
    "rautatieasema"
  ],
  "training": [
    "harjoittelu",
    "koulutus"
  ],
  "tram": [
    "raitiovaunu"
  ],
  "transaction": [
    "liiketoimi",
    "tapahtuma"
  ],
  "transfer": [
    "siirto",
    "vaihto"
  ],
  "transform": [
    "muuntua",
    "muuttaa"
  ],
  "translate": [
    "kääntää"
  ],
  "translation": [
    "käännös"
  ],
  "translator": [
    "kääntäjä"
  ],
  "transparent": [
    "läpinäkyvä"
  ],
  "transport": [
    "kuljettaa"
  ],
  "trash": [
    "roskat"
  ],
  "trash can": [
    "roskakori"
  ],
  "travel": [
    "matkailu",
    "matkustaa",
    "matkustaminen"
  ],
  "travel insurance": [
    "matkavakuutus"
  ],
  "tray": [
    "tarjotin"
  ],
  "treatment": [
    "hoito"
  ],
  "tree": [
    "puu"
  ],
  "trial": [
    "koe",
    "oikeudenkäynti"
  ],
  "triangle": [
    "kolmio"
  ],
  "trip": [
    "matka",
    "retki"
  ],
  "trousers": [
    "housut"
  ],
  "trout": [
    "taimen"
  ],
  "truck": [
    "kuorma-auto"
  ],
  "true": [
    "tosi",
    "totta"
  ],
  "trumpet": [
    "trumpetti"
  ],
  "trunk": [
    "runko"
  ],
  "trust": [
    "luottaa",
    "luottamus"
  ],
  "truth": [
    "totuus"
  ],
  "try": [
    "kokeilla",
    "yrittää"
  ],
  "tuesday": [
    "tiistai"
  ],
  "tulip": [
    "tulppaani"
  ],
  "tuna": [
    "tonnikala"
  ],
  "tunnel": [
    "tunneli"
  ],
  "Turkey": [
    "Turkki"
  ],
  "turkey": [
    "kalkkuna"
  ],
  "Turkish": [
    "turkki",
    "turkkilainen"
  ],
  "turkish": [
    "turkki",
    "turkkilainen"
  ],
  "turn": [
    "kääntyä",
    "kääntää"
  ],
  "turnip": [
    "nauris"
  ],
  "turtle": [
    "kilpikonna"
  ],
  "TV": [
    "televisio"
  ],
  "tv": [
    "televisio"
  ],
  "twelve": [
    "kaksitoista"
  ],
  "twenty": [
    "kaksikymmentä"
  ],
  "two": [
    "kaksi"
  ],
  "type": [
    "laji",
    "tyyppi"
  ],
  "tyre": [
    "rengas"
  ],
  "ugly": [
    "ruma"
  ],
  "Ukraine": [
    "Ukraina"
  ],
  "ukraine": [
    "Ukraina"
  ],
  "Ukrainian": [
    "ukraina",
    "ukrainalainen"
  ],
  "ukrainian": [
    "ukraina",
    "ukrainalainen"
  ],
  "umbrella": [
    "sateenvarjo"
  ],
  "unavailable": [
    "ei saatavilla"
  ],
  "uncle": [
    "eno",
    "setä"
  ],
  "under": [
    "alla"
  ],
  "underground": [
    "maan alla",
    "metro"
  ],
  "underpants": [
    "alushousut"
  ],
  "underscore": [
    "alaviiva"
  ],
  "understand": [
    "ymmärtää"
  ],
  "underwear": [
    "alusvaatteet"
  ],
  "undress": [
    "riisua",
    "riisuutua"
  ],
  "unemployment": [
    "työttömyys"
  ],
  "unfair": [
    "epäreilu"
  ],
  "unfold": [
    "avata",
    "levittää"
  ],
  "unfortunately": [
    "valitettavasti"
  ],
  "uniform": [
    "työpuku",
    "univormu"
  ],
  "unite": [
    "yhdistää"
  ],
  "United Kingdom": [
    "Yhdistynyt kuningaskunta"
  ],
  "united kingdom": [
    "Yhdistynyt kuningaskunta"
  ],
  "United States": [
    "Yhdysvallat"
  ],
  "united states": [
    "Yhdysvallat"
  ],
  "universe": [
    "maailmankaikkeus"
  ],
  "university": [
    "yliopisto"
  ],
  "unknown": [
    "tuntematon"
  ],
  "unless": [
    "ellei"
  ],
  "unlock": [
    "avata lukko"
  ],
  "unlock phone": [
    "avata puhelimen lukitus"
  ],
  "unnecessary": [
    "tarpeeton"
  ],
  "unpack": [
    "purkaa pakkauksesta"
  ],
  "unpleasant": [
    "epämiellyttävä"
  ],
  "unpopular": [
    "epäsuosittu"
  ],
  "unsubscribe": [
    "peruuttaa tilaus"
  ],
  "until": [
    "kunnes"
  ],
  "unwrap": [
    "avata kääreestä"
  ],
  "up": [
    "ylös"
  ],
  "update": [
    "päivitys"
  ],
  "upgrade": [
    "päivittää",
    "päivitys"
  ],
  "upload": [
    "ladata palvelimelle",
    "palvelimelle lataus"
  ],
  "urgency": [
    "kiireellisyys"
  ],
  "URL": [
    "verkko-osoite"
  ],
  "url": [
    "verkko-osoite"
  ],
  "us": [
    "meidät",
    "meitä"
  ],
  "usability": [
    "käytettävyys"
  ],
  "USB drive": [
    "USB-muisti"
  ],
  "usb drive": [
    "USB-muisti"
  ],
  "used to": [
    "oli tapana"
  ],
  "useful": [
    "hyödyllinen"
  ],
  "useless": [
    "hyödytön"
  ],
  "user experience": [
    "käyttäjäkokemus"
  ],
  "user interface": [
    "käyttöliittymä"
  ],
  "username": [
    "käyttäjätunnus"
  ],
  "usually": [
    "yleensä"
  ],
  "vacation": [
    "loma"
  ],
  "vaccination": [
    "rokotus"
  ],
  "vaccine": [
    "rokote"
  ],
  "vacuum": [
    "imuroida"
  ],
  "vacuum cleaner": [
    "pölynimuri"
  ],
  "validate": [
    "tarkistaa",
    "vahvistaa"
  ],
  "valley": [
    "laakso"
  ],
  "valuable": [
    "arvokas"
  ],
  "value": [
    "arvo"
  ],
  "van": [
    "pakettiauto"
  ],
  "vanilla": [
    "vanilja"
  ],
  "variable": [
    "muuttuja"
  ],
  "vase": [
    "maljakko"
  ],
  "VAT": [
    "arvonlisävero"
  ],
  "vat": [
    "arvonlisävero"
  ],
  "veal": [
    "vasikanliha"
  ],
  "vegan": [
    "vegaani"
  ],
  "vegetable": [
    "kasvis",
    "vihannes"
  ],
  "vegetarian": [
    "kasvis-",
    "kasvissyöjä"
  ],
  "vehicle": [
    "ajoneuvo"
  ],
  "vein": [
    "laskimo"
  ],
  "ventilation": [
    "ilmanvaihto"
  ],
  "verify": [
    "todentaa",
    "varmistaa"
  ],
  "version": [
    "versio"
  ],
  "very": [
    "erittäin",
    "todella"
  ],
  "vest": [
    "liivi"
  ],
  "victim": [
    "uhri"
  ],
  "video": [
    "video"
  ],
  "Vietnam": [
    "Vietnam"
  ],
  "vietnam": [
    "Vietnam"
  ],
  "villa": [
    "huvila"
  ],
  "village": [
    "kylä"
  ],
  "vinegar": [
    "etikka"
  ],
  "violate": [
    "rikkoa"
  ],
  "violet": [
    "orvokki",
    "violetti"
  ],
  "violin": [
    "viulu"
  ],
  "virus": [
    "virus"
  ],
  "visa": [
    "viisumi"
  ],
  "visit": [
    "käydä",
    "vierailla"
  ],
  "visitor": [
    "vierailija"
  ],
  "vocab": [
    "sanasto"
  ],
  "vocabulary": [
    "sanasto"
  ],
  "voice": [
    "ääni"
  ],
  "volcano": [
    "tulivuori"
  ],
  "volume": [
    "tilavuus",
    "äänenvoimakkuus"
  ],
  "volunteer": [
    "vapaaehtoinen"
  ],
  "volunteer work": [
    "vapaaehtoistyö"
  ],
  "volunteering": [
    "vapaaehtoistyö"
  ],
  "vote": [
    "äänestys",
    "äänestää",
    "ääni"
  ],
  "vowel": [
    "vokaali"
  ],
  "voyage": [
    "merimatka"
  ],
  "wage": [
    "palkka"
  ],
  "waist": [
    "vyötärö"
  ],
  "waistcoat": [
    "liivi"
  ],
  "wait": [
    "odottaa"
  ],
  "waiter": [
    "tarjoilija"
  ],
  "waitress": [
    "tarjoilija"
  ],
  "wake": [
    "herättää",
    "herätä"
  ],
  "Wales": [
    "Wales"
  ],
  "wales": [
    "Wales"
  ],
  "walk": [
    "kävellä"
  ],
  "wall": [
    "muuri",
    "seinä"
  ],
  "wallet": [
    "lompakko"
  ],
  "walnut": [
    "saksanpähkinä"
  ],
  "want": [
    "haluta"
  ],
  "war": [
    "sota"
  ],
  "wardrobe": [
    "vaatekaappi"
  ],
  "warehouse": [
    "varasto"
  ],
  "warm": [
    "lämmin"
  ],
  "warning": [
    "varoitus"
  ],
  "warranty": [
    "takuu"
  ],
  "wash": [
    "pestä"
  ],
  "washing machine": [
    "pesukone"
  ],
  "washing powder": [
    "pesujauhe"
  ],
  "wasp": [
    "ampiainen"
  ],
  "watch": [
    "katsoa",
    "rannekello",
    "seurata"
  ],
  "watchband": [
    "kellonranneke"
  ],
  "water": [
    "vesi"
  ],
  "water bottle": [
    "vesipullo"
  ],
  "waterfall": [
    "vesiputous"
  ],
  "watermelon": [
    "vesimeloni"
  ],
  "wave": [
    "heiluttaa",
    "vilkuttaa"
  ],
  "we": [
    "me"
  ],
  "weak": [
    "heikko"
  ],
  "weapon": [
    "ase"
  ],
  "wear": [
    "pitää päällä"
  ],
  "weasel": [
    "näätä"
  ],
  "weather": [
    "sää"
  ],
  "weave": [
    "kutoa"
  ],
  "web": [
    "verkko"
  ],
  "web page": [
    "verkkosivu"
  ],
  "webcam": [
    "verkkokamera"
  ],
  "webpage": [
    "verkkosivu"
  ],
  "website": [
    "verkkosivusto"
  ],
  "wedding": [
    "häät"
  ],
  "wednesday": [
    "keskiviikko"
  ],
  "weed": [
    "rikkaruoho"
  ],
  "week": [
    "viikko"
  ],
  "weekday": [
    "arkipäivä"
  ],
  "weekend": [
    "viikonloppu"
  ],
  "weigh": [
    "punnita"
  ],
  "weight": [
    "paino"
  ],
  "weird": [
    "omituinen",
    "outo"
  ],
  "welcome": [
    "tervetuloa",
    "toivottaa tervetulleeksi"
  ],
  "west": [
    "länsi"
  ],
  "wet": [
    "märkä"
  ],
  "wetland": [
    "kosteikko"
  ],
  "whale": [
    "valas"
  ],
  "what": [
    "mikä",
    "mitä"
  ],
  "what for": [
    "mitä varten"
  ],
  "what kind": [
    "millainen"
  ],
  "what time": [
    "mihin aikaan"
  ],
  "wheat": [
    "vehnä"
  ],
  "wheel": [
    "pyörä"
  ],
  "wheelchair": [
    "pyörätuoli"
  ],
  "when": [
    "milloin"
  ],
  "where": [
    "missä"
  ],
  "where from": [
    "mistä"
  ],
  "where to": [
    "minne"
  ],
  "which": [
    "kumpi",
    "mikä"
  ],
  "while": [
    "kun",
    "samalla kun"
  ],
  "whisper": [
    "kuiskata"
  ],
  "white": [
    "valkoinen"
  ],
  "white wine": [
    "valkoviini"
  ],
  "who": [
    "kuka"
  ],
  "whom": [
    "kenet",
    "ketä"
  ],
  "whose": [
    "kenen"
  ],
  "why": [
    "miksi"
  ],
  "Wi-Fi": [
    "langaton verkko"
  ],
  "wi-fi": [
    "langaton verkko"
  ],
  "wide": [
    "leveä"
  ],
  "widget": [
    "pienoisohjelma"
  ],
  "width": [
    "leveys"
  ],
  "wife": [
    "vaimo"
  ],
  "wildfire": [
    "maastopalo"
  ],
  "wildlife": [
    "villieläimet"
  ],
  "will": [
    "aikoa",
    "tehdä tulevaisuudessa"
  ],
  "willow": [
    "paju"
  ],
  "win": [
    "voittaa"
  ],
  "wind": [
    "tuuli"
  ],
  "window": [
    "ikkuna"
  ],
  "windowsill": [
    "ikkunalauta"
  ],
  "windscreen": [
    "tuulilasi"
  ],
  "windshield": [
    "tuulilasi"
  ],
  "windy": [
    "tuulinen"
  ],
  "wine": [
    "viini"
  ],
  "wink": [
    "iskeä silmää"
  ],
  "winter": [
    "talvi"
  ],
  "winter coat": [
    "talvitakki"
  ],
  "wipe": [
    "pyyhkiä"
  ],
  "wire": [
    "johto",
    "lanka"
  ],
  "wireless": [
    "langaton"
  ],
  "wisdom": [
    "viisaus"
  ],
  "wise": [
    "viisas"
  ],
  "wish": [
    "toivoa"
  ],
  "with": [
    "kanssa"
  ],
  "within": [
    "sisällä"
  ],
  "without": [
    "ilman"
  ],
  "witness": [
    "todistaja"
  ],
  "wolf": [
    "susi"
  ],
  "wolverine": [
    "ahma"
  ],
  "woman": [
    "nainen"
  ],
  "wonder": [
    "ihmetellä",
    "pohtia"
  ],
  "wood": [
    "puu",
    "puutavara"
  ],
  "wooden": [
    "puinen"
  ],
  "wool": [
    "villa"
  ],
  "word": [
    "sana"
  ],
  "work": [
    "toimia",
    "työ",
    "työskennellä"
  ],
  "worker": [
    "työntekijä"
  ],
  "workforce": [
    "työvoima"
  ],
  "workplace": [
    "työpaikka"
  ],
  "workshop": [
    "työpaja"
  ],
  "world": [
    "maailma"
  ],
  "worm": [
    "mato"
  ],
  "worried": [
    "huolestunut"
  ],
  "worry": [
    "huolehtia"
  ],
  "worse": [
    "huonompi"
  ],
  "worst": [
    "huonoin"
  ],
  "worth": [
    "arvo"
  ],
  "worthless": [
    "arvoton"
  ],
  "would": [
    "olisi",
    "tekisi"
  ],
  "wound": [
    "haava"
  ],
  "wrap": [
    "kääriä"
  ],
  "wrench": [
    "jakoavain",
    "kiintoavain"
  ],
  "wrist": [
    "ranne"
  ],
  "write": [
    "kirjoittaa"
  ],
  "writer": [
    "kirjailija",
    "kirjoittaja"
  ],
  "wrong": [
    "väärä"
  ],
  "yacht": [
    "jahti"
  ],
  "yard": [
    "jaardi",
    "piha"
  ],
  "yawn": [
    "haukotella"
  ],
  "year": [
    "vuosi"
  ],
  "yell": [
    "huutaa"
  ],
  "yellow": [
    "keltainen"
  ],
  "yes": [
    "kyllä"
  ],
  "yesterday": [
    "eilen"
  ],
  "yet": [
    "jo",
    "silti",
    "vielä"
  ],
  "yogurt": [
    "jogurtti"
  ],
  "you": [
    "sinä",
    "te"
  ],
  "you are welcome": [
    "ole hyvä"
  ],
  "young": [
    "nuori"
  ],
  "your": [
    "sinun",
    "teidän"
  ],
  "yours": [
    "sinun",
    "teidän"
  ],
  "yourself": [
    "itse",
    "sinä itse"
  ],
  "zebra": [
    "seepra"
  ],
  "zero": [
    "nolla"
  ],
  "zip code": [
    "postinumero"
  ],
  "zipper": [
    "vetoketju"
  ],
  "zoo": [
    "eläintarha"
  ],
  "zoom": [
    "lähentää",
    "zoomata"
  ],
  "zucchini": [
    "kesäkurpitsa"
  ]
};
  const fiToEn = {
  "aakkoset": [
    "alphabet"
  ],
  "aamiainen": [
    "breakfast"
  ],
  "aamu": [
    "morning"
  ],
  "aamunkoitto": [
    "dawn"
  ],
  "aasi": [
    "donkey"
  ],
  "ahdistunut": [
    "anxious"
  ],
  "ahdistus": [
    "anxiety"
  ],
  "ahma": [
    "wolverine"
  ],
  "ahven": [
    "perch"
  ],
  "aiemmin": [
    "previously"
  ],
  "aihe": [
    "subject"
  ],
  "aiheesta": [
    "about"
  ],
  "aiheuttaja": [
    "cause"
  ],
  "aika": [
    "time"
  ],
  "aikaisin": [
    "early"
  ],
  "aikakauslehti": [
    "journal",
    "magazine"
  ],
  "aikataulu": [
    "schedule",
    "timetable"
  ],
  "aikoa": [
    "shall",
    "will"
  ],
  "aikuinen": [
    "adult"
  ],
  "aina": [
    "always"
  ],
  "ainakin": [
    "at least"
  ],
  "aineisto": [
    "dataset"
  ],
  "ainesosa": [
    "ingredient"
  ],
  "aita": [
    "fence"
  ],
  "aivastaa": [
    "sneeze"
  ],
  "aivot": [
    "brain"
  ],
  "ajaa": [
    "drive",
    "ride"
  ],
  "ajanvaraus": [
    "appointment"
  ],
  "ajatella": [
    "think"
  ],
  "ajatus": [
    "idea",
    "thought"
  ],
  "ajatusviiva": [
    "dash"
  ],
  "ajoneuvo": [
    "vehicle"
  ],
  "ajovalo": [
    "headlight"
  ],
  "akku": [
    "battery"
  ],
  "aksentti": [
    "accent"
  ],
  "akvaario": [
    "aquarium"
  ],
  "alaikäinen": [
    "minor"
  ],
  "Alankomaat": [
    "netherlands",
    "Netherlands"
  ],
  "alapuolella": [
    "below"
  ],
  "alas": [
    "down"
  ],
  "alaviiva": [
    "underscore"
  ],
  "ale": [
    "sale"
  ],
  "alennus": [
    "discount"
  ],
  "algoritmi": [
    "algorithm"
  ],
  "alkaa": [
    "begin"
  ],
  "alkoholi": [
    "alcohol"
  ],
  "alkupala": [
    "appetizer",
    "starter"
  ],
  "alkuperäinen": [
    "original"
  ],
  "alla": [
    "under"
  ],
  "allekirjoitus": [
    "signature"
  ],
  "allergeeni": [
    "allergen"
  ],
  "allergia": [
    "allergy"
  ],
  "alligaattori": [
    "alligator"
  ],
  "aloittaa": [
    "begin",
    "start"
  ],
  "alue": [
    "area",
    "district",
    "region"
  ],
  "alumiini": [
    "aluminum"
  ],
  "alushousut": [
    "briefs",
    "underpants"
  ],
  "alusta": [
    "platform"
  ],
  "alustus": [
    "initialization"
  ],
  "alusvaatteet": [
    "underwear"
  ],
  "ambulanssi": [
    "ambulance"
  ],
  "ammatti": [
    "occupation",
    "profession"
  ],
  "ampiainen": [
    "wasp"
  ],
  "analysoida": [
    "analyze"
  ],
  "analyysi": [
    "analysis"
  ],
  "analyytikko": [
    "analyst"
  ],
  "ananas": [
    "pineapple"
  ],
  "ankka": [
    "duck"
  ],
  "ansioluettelo": [
    "cv",
    "CV",
    "resume"
  ],
  "antaa": [
    "give",
    "let"
  ],
  "antaa anteeksi": [
    "forgive"
  ],
  "anteeksi": [
    "excuse me",
    "sorry"
  ],
  "apila": [
    "clover"
  ],
  "apina": [
    "monkey"
  ],
  "appelsiini": [
    "orange"
  ],
  "appelsiinimehu": [
    "orange juice"
  ],
  "aprikoosi": [
    "apricot"
  ],
  "apteekkari": [
    "pharmacist"
  ],
  "apteekki": [
    "pharmacy"
  ],
  "areena": [
    "arena"
  ],
  "Argentiina": [
    "argentina",
    "Argentina"
  ],
  "argumentti": [
    "argument"
  ],
  "arkipäivä": [
    "weekday"
  ],
  "arkisto": [
    "archive"
  ],
  "arkki": [
    "sheet"
  ],
  "arkkitehti": [
    "architect"
  ],
  "arkkitehtuuri": [
    "architecture"
  ],
  "armeija": [
    "army",
    "military"
  ],
  "artikkeli": [
    "article"
  ],
  "arvio": [
    "review"
  ],
  "arvioida": [
    "review"
  ],
  "arvo": [
    "value",
    "worth"
  ],
  "arvokas": [
    "valuable"
  ],
  "arvonlisävero": [
    "vat",
    "VAT"
  ],
  "arvostaa": [
    "appreciate"
  ],
  "arvostella": [
    "criticize"
  ],
  "arvostelu": [
    "review"
  ],
  "arvoton": [
    "worthless"
  ],
  "ase": [
    "weapon"
  ],
  "asema": [
    "station"
  ],
  "asennus": [
    "installation"
  ],
  "asentaa": [
    "install"
  ],
  "asettaa": [
    "set"
  ],
  "asetukset": [
    "preferences",
    "settings"
  ],
  "asia": [
    "issue"
  ],
  "asiakas": [
    "client",
    "customer"
  ],
  "asiakasohjelma": [
    "client"
  ],
  "asiakirja": [
    "document"
  ],
  "asiakirjavihko": [
    "file"
  ],
  "asianajaja": [
    "lawyer"
  ],
  "asiantuntemus": [
    "expertise"
  ],
  "askel": [
    "step"
  ],
  "assistentti": [
    "assistant"
  ],
  "aste": [
    "degree"
  ],
  "asteroidi": [
    "asteroid"
  ],
  "astia": [
    "dish"
  ],
  "astiankuivausteline": [
    "dish rack"
  ],
  "astianpesukone": [
    "dishwasher"
  ],
  "asu": [
    "outfit"
  ],
  "asua": [
    "live"
  ],
  "asukas": [
    "resident"
  ],
  "asunto": [
    "apartment",
    "flat"
  ],
  "asuntolaina": [
    "mortgage"
  ],
  "ateria": [
    "meal"
  ],
  "attribuutti": [
    "attribute"
  ],
  "auki": [
    "open"
  ],
  "aukio": [
    "plaza",
    "square"
  ],
  "aula": [
    "lobby"
  ],
  "auringonkukansiemen": [
    "sunflower seed"
  ],
  "auringonkukka": [
    "sunflower"
  ],
  "auringonvalo": [
    "sunlight"
  ],
  "aurinko": [
    "sun"
  ],
  "aurinkoinen": [
    "sunny"
  ],
  "aurinkolasit": [
    "sunglasses"
  ],
  "aurinkovoide": [
    "sunscreen"
  ],
  "Australia": [
    "Australia",
    "australia"
  ],
  "auta, ole hyvä": [
    "please help"
  ],
  "auto": [
    "car"
  ],
  "autotalli": [
    "garage"
  ],
  "auttaa": [
    "help"
  ],
  "avain": [
    "key"
  ],
  "avainkortti": [
    "keycard"
  ],
  "avaruus": [
    "space"
  ],
  "avaruusalus": [
    "spaceship"
  ],
  "avata": [
    "unfold"
  ],
  "avata kääreestä": [
    "unwrap"
  ],
  "avata lukko": [
    "unlock"
  ],
  "avata ovi": [
    "open door"
  ],
  "avata puhelimen lukitus": [
    "unlock phone"
  ],
  "avata tiedosto": [
    "open file"
  ],
  "avioero": [
    "divorce"
  ],
  "avioliitto": [
    "marriage"
  ],
  "aviomies": [
    "husband"
  ],
  "avoin": [
    "open"
  ],
  "avoin lähdekoodi": [
    "open source"
  ],
  "avokado": [
    "avocado"
  ],
  "avustaa": [
    "assist"
  ],
  "avustaja": [
    "assistant"
  ],
  "bakteeri": [
    "bacteria"
  ],
  "bambu": [
    "bamboo"
  ],
  "banaani": [
    "banana"
  ],
  "basilika": [
    "basil"
  ],
  "bataatti": [
    "sweet potato"
  ],
  "beige": [
    "beige"
  ],
  "Belgia": [
    "Belgium",
    "belgium"
  ],
  "bensiini": [
    "gasoline",
    "petrol"
  ],
  "biologia": [
    "biology"
  ],
  "bitti": [
    "bit"
  ],
  "blogi": [
    "blog"
  ],
  "Bluetooth": [
    "bluetooth",
    "Bluetooth"
  ],
  "Brasilia": [
    "Brazil",
    "brazil"
  ],
  "budjetti": [
    "budget"
  ],
  "bulevardi": [
    "boulevard"
  ],
  "bussi": [
    "bus"
  ],
  "bussipysäkki": [
    "bus stop"
  ],
  "cashewpähkinä": [
    "cashew"
  ],
  "celsiusaste": [
    "degree Celsius",
    "degree celsius"
  ],
  "Chile": [
    "Chile",
    "chile"
  ],
  "chili": [
    "chili"
  ],
  "data": [
    "data"
  ],
  "datajoukko": [
    "dataset"
  ],
  "delfiini": [
    "dolphin"
  ],
  "demokratia": [
    "democracy"
  ],
  "deodorantti": [
    "deodorant"
  ],
  "desimaali": [
    "decimal"
  ],
  "diagnoosi": [
    "diagnosis"
  ],
  "diesel": [
    "diesel"
  ],
  "dieselöljy": [
    "diesel"
  ],
  "diktatuuri": [
    "dictatorship"
  ],
  "dokumentti": [
    "document",
    "documentary"
  ],
  "edellinen": [
    "previous"
  ],
  "edellyttää": [
    "require"
  ],
  "edes": [
    "even"
  ],
  "edessä": [
    "in front of"
  ],
  "edestakainen matka": [
    "round trip"
  ],
  "edetä": [
    "proceed"
  ],
  "edistyminen": [
    "progress"
  ],
  "edistynyt": [
    "advanced"
  ],
  "eduskunta": [
    "parliament"
  ],
  "Egypti": [
    "Egypt",
    "egypt"
  ],
  "ehdokas": [
    "candidate"
  ],
  "ehdotus": [
    "suggestion"
  ],
  "ehkä": [
    "maybe",
    "perhaps"
  ],
  "ehto": [
    "condition"
  ],
  "ei": [
    "no",
    "not"
  ],
  "ei enää": [
    "no longer",
    "not anymore"
  ],
  "ei koskaan": [
    "never"
  ],
  "ei kukaan": [
    "no one",
    "nobody"
  ],
  "ei kumpikaan": [
    "neither"
  ],
  "ei missään": [
    "nowhere"
  ],
  "ei mitään": [
    "nothing"
  ],
  "ei ongelmaa": [
    "no problem"
  ],
  "ei pitäisi": [
    "should not"
  ],
  "ei saa": [
    "must not"
  ],
  "ei saatavilla": [
    "unavailable"
  ],
  "ei sillä ole väliä": [
    "it does not matter"
  ],
  "ei vielä": [
    "not yet"
  ],
  "ei voi": [
    "can not",
    "can't",
    "cannot"
  ],
  "ei väliä": [
    "no matter"
  ],
  "ei yhtään": [
    "none"
  ],
  "eilen": [
    "yesterday"
  ],
  "ekosysteemi": [
    "ecosystem"
  ],
  "elin": [
    "organ"
  ],
  "elinympäristö": [
    "habitat"
  ],
  "ellei": [
    "unless"
  ],
  "elokuu": [
    "august"
  ],
  "elokuva": [
    "film",
    "movie"
  ],
  "elokuvateatteri": [
    "cinema",
    "movie theater"
  ],
  "elossa": [
    "alive"
  ],
  "eläin": [
    "animal"
  ],
  "eläintarha": [
    "zoo"
  ],
  "eläke": [
    "pension"
  ],
  "elämä": [
    "life"
  ],
  "elää": [
    "live"
  ],
  "emäntä": [
    "host"
  ],
  "en tiedä": [
    "I don't know",
    "i don't know"
  ],
  "enemmän": [
    "more"
  ],
  "enemmän kuin": [
    "more than"
  ],
  "energia": [
    "energy"
  ],
  "Englanti": [
    "England",
    "england"
  ],
  "englanti": [
    "English",
    "english"
  ],
  "englantilainen": [
    "English",
    "english"
  ],
  "enimmäkseen": [
    "mostly"
  ],
  "enintään": [
    "at most"
  ],
  "eniten": [
    "most"
  ],
  "ennen": [
    "before"
  ],
  "eno": [
    "uncle"
  ],
  "ensi viikolla": [
    "next week"
  ],
  "ensi vuonna": [
    "next year"
  ],
  "ensi yönä": [
    "tonight"
  ],
  "ensiapu": [
    "first aid"
  ],
  "ensiluokkainen": [
    "first-class"
  ],
  "ensimmäinen": [
    "first"
  ],
  "ensin": [
    "first"
  ],
  "epäaito": [
    "fake"
  ],
  "epäillä": [
    "doubt",
    "suspect"
  ],
  "epäkohtelias": [
    "rude"
  ],
  "epämiellyttävä": [
    "unpleasant"
  ],
  "epäonnistua": [
    "fail"
  ],
  "epäonnistuminen": [
    "failure"
  ],
  "epärehellinen": [
    "dishonest"
  ],
  "epäreilu": [
    "unfair"
  ],
  "epäsuosittu": [
    "unpopular"
  ],
  "epätasainen": [
    "rough"
  ],
  "epätosi": [
    "false"
  ],
  "erillään": [
    "apart"
  ],
  "erinomainen": [
    "excellent"
  ],
  "erittäin": [
    "very"
  ],
  "erityinen": [
    "special"
  ],
  "erityisesti": [
    "especially",
    "in particular",
    "particularly"
  ],
  "eronnut": [
    "divorced"
  ],
  "erota": [
    "separate"
  ],
  "erottaa": [
    "fire",
    "separate"
  ],
  "erotuomari": [
    "referee"
  ],
  "eräs": [
    "a",
    "an"
  ],
  "esikaupunki": [
    "suburb"
  ],
  "esiliina": [
    "apron"
  ],
  "esimerkiksi": [
    "for example",
    "for instance"
  ],
  "esimerkki": [
    "example"
  ],
  "esine": [
    "object"
  ],
  "esitellä": [
    "introduce"
  ],
  "esitys": [
    "performance",
    "presentation",
    "show"
  ],
  "esityslista": [
    "agenda"
  ],
  "Espanja": [
    "Spain",
    "spain"
  ],
  "espanja": [
    "Spanish",
    "spanish"
  ],
  "espanjalainen": [
    "Spanish",
    "spanish"
  ],
  "este": [
    "barrier",
    "obstacle"
  ],
  "estää": [
    "prevent"
  ],
  "etana": [
    "slug",
    "snail"
  ],
  "eteenpäin": [
    "forward"
  ],
  "eteinen": [
    "hall",
    "hallway"
  ],
  "etelä": [
    "south"
  ],
  "Etelä-Afrikka": [
    "south africa",
    "South Africa"
  ],
  "Etelä-Korea": [
    "South Korea",
    "south korea"
  ],
  "etiikka": [
    "ethics"
  ],
  "etikka": [
    "vinegar"
  ],
  "etsiä": [
    "search",
    "seek"
  ],
  "etsiä verkosta": [
    "search online"
  ],
  "etusija": [
    "priority"
  ],
  "etäisyys": [
    "distance"
  ],
  "farkut": [
    "jeans"
  ],
  "farmaseutti": [
    "pharmacist"
  ],
  "festivaali": [
    "festival"
  ],
  "fiksu": [
    "smart"
  ],
  "filee": [
    "fillet"
  ],
  "filmi": [
    "film"
  ],
  "filosofia": [
    "philosophy"
  ],
  "formaatti": [
    "format"
  ],
  "fraasi": [
    "phrase"
  ],
  "funktio": [
    "function"
  ],
  "funktion parametri": [
    "function parameter"
  ],
  "fysiikka": [
    "physics"
  ],
  "galaksi": [
    "galaxy"
  ],
  "galleria": [
    "gallery"
  ],
  "gepardi": [
    "cheetah"
  ],
  "gigatavu": [
    "gigabyte"
  ],
  "gluteeni": [
    "gluten"
  ],
  "gorilla": [
    "gorilla"
  ],
  "grafiikkasuoritin": [
    "GPU",
    "gpu"
  ],
  "gramma": [
    "gram"
  ],
  "granaattiomena": [
    "pomegranate"
  ],
  "greippi": [
    "grapefruit"
  ],
  "grillaaminen": [
    "grilling"
  ],
  "haapa": [
    "aspen"
  ],
  "haarukka": [
    "fork"
  ],
  "haastattelu": [
    "interview"
  ],
  "haaste": [
    "challenge"
  ],
  "haava": [
    "wound"
  ],
  "hahmo": [
    "character"
  ],
  "hai": [
    "shark"
  ],
  "haistaa": [
    "smell"
  ],
  "hajota": [
    "break"
  ],
  "hajuvesi": [
    "perfume"
  ],
  "hakasulje": [
    "bracket"
  ],
  "hakea": [
    "apply",
    "fetch",
    "search"
  ],
  "hakemisto": [
    "directory",
    "index"
  ],
  "hakemus": [
    "application"
  ],
  "hakukone": [
    "search engine"
  ],
  "hakutulos": [
    "search result"
  ],
  "haljeta": [
    "crack"
  ],
  "halkaista": [
    "crack",
    "split"
  ],
  "hallinta": [
    "management"
  ],
  "hallinto": [
    "administration"
  ],
  "hallita": [
    "control",
    "govern",
    "manage",
    "rule"
  ],
  "hallitus": [
    "cabinet",
    "government"
  ],
  "halpa": [
    "cheap"
  ],
  "haluta": [
    "want"
  ],
  "hame": [
    "skirt"
  ],
  "hammas": [
    "tooth"
  ],
  "hammasharja": [
    "toothbrush"
  ],
  "hammaslanka": [
    "floss"
  ],
  "hammaslääkäri": [
    "dentist"
  ],
  "hammastahna": [
    "toothpaste"
  ],
  "hampaat": [
    "teeth"
  ],
  "hamsteri": [
    "hamster"
  ],
  "hana": [
    "faucet",
    "tap"
  ],
  "hangata": [
    "scrub"
  ],
  "hanhi": [
    "goose"
  ],
  "hanke": [
    "project"
  ],
  "hankkia": [
    "get"
  ],
  "hapan": [
    "sour"
  ],
  "hapankerma": [
    "sour cream"
  ],
  "happi": [
    "oxygen"
  ],
  "harakka": [
    "magpie"
  ],
  "harja": [
    "brush"
  ],
  "harjoitella": [
    "practice",
    "train"
  ],
  "harjoittelu": [
    "training"
  ],
  "harjoitus": [
    "exercise"
  ],
  "harkita": [
    "consider"
  ],
  "harmaa": [
    "gray",
    "grey"
  ],
  "hartiahuivi": [
    "shawl"
  ],
  "harva": [
    "few"
  ],
  "harvinainen": [
    "rare"
  ],
  "harvoin": [
    "rarely"
  ],
  "hasselpähkinä": [
    "hazelnut"
  ],
  "hassu": [
    "silly"
  ],
  "hattu": [
    "hat"
  ],
  "hauduke": [
    "stew"
  ],
  "hauki": [
    "pike"
  ],
  "haukka": [
    "falcon",
    "hawk"
  ],
  "haukotella": [
    "yawn"
  ],
  "hauras": [
    "fragile"
  ],
  "hauska": [
    "funny"
  ],
  "hautausmaa": [
    "cemetery"
  ],
  "havainnoida": [
    "observe"
  ],
  "havainto": [
    "observation"
  ],
  "he": [
    "they"
  ],
  "hedelmä": [
    "fruit"
  ],
  "hedelmäsalaatti": [
    "fruit salad"
  ],
  "hehkulamppu": [
    "light bulb"
  ],
  "hei": [
    "hello",
    "hi"
  ],
  "hei hei": [
    "bye"
  ],
  "heidän": [
    "their",
    "theirs"
  ],
  "heikko": [
    "weak"
  ],
  "heiluttaa": [
    "wave"
  ],
  "heinäkuu": [
    "july"
  ],
  "heittää": [
    "throw"
  ],
  "helikopteri": [
    "helicopter"
  ],
  "helmikuu": [
    "february"
  ],
  "helposti": [
    "easily"
  ],
  "helppo": [
    "easy"
  ],
  "hengittää": [
    "breathe"
  ],
  "hengitys": [
    "breath"
  ],
  "henkilö": [
    "person"
  ],
  "henkilökohtainen": [
    "personal"
  ],
  "henkilöstö": [
    "personnel",
    "staff"
  ],
  "hereillä": [
    "awake"
  ],
  "herkullinen": [
    "delicious"
  ],
  "hermo": [
    "nerve"
  ],
  "hermostunut": [
    "nervous"
  ],
  "herne": [
    "pea"
  ],
  "herättää": [
    "wake"
  ],
  "herätyskello": [
    "alarm clock"
  ],
  "herätä": [
    "wake"
  ],
  "heti": [
    "immediately"
  ],
  "hetki": [
    "moment"
  ],
  "hevonen": [
    "horse"
  ],
  "hidas": [
    "slow"
  ],
  "hiekka": [
    "sand"
  ],
  "hiha": [
    "sleeve"
  ],
  "hiihtokeskus": [
    "ski resort"
  ],
  "hiili": [
    "carbon"
  ],
  "hiilidioksidi": [
    "carbon dioxide"
  ],
  "hiilihapotettu vesi": [
    "sparkling water"
  ],
  "hiiri": [
    "mouse"
  ],
  "hiki": [
    "sweat"
  ],
  "hiljainen": [
    "quiet",
    "silent"
  ],
  "hiljattain": [
    "recently"
  ],
  "hilla": [
    "cloudberry"
  ],
  "hillo": [
    "jam"
  ],
  "hinta": [
    "price"
  ],
  "hirveä": [
    "awful"
  ],
  "hirvi": [
    "elk",
    "moose"
  ],
  "hissi": [
    "elevator",
    "lift"
  ],
  "historia": [
    "history"
  ],
  "hitaasti": [
    "slowly"
  ],
  "hiukset": [
    "hair"
  ],
  "hiusharja": [
    "hairbrush"
  ],
  "hiustenkuivaaja": [
    "hairdryer"
  ],
  "hiustenleikkaus": [
    "haircut"
  ],
  "hoitaa": [
    "care"
  ],
  "hoito": [
    "treatment"
  ],
  "hoitoaine": [
    "conditioner"
  ],
  "hollanti": [
    "dutch",
    "Dutch"
  ],
  "hollantilainen": [
    "dutch",
    "Dutch"
  ],
  "hopea": [
    "silver"
  ],
  "hopeanvärinen": [
    "silver"
  ],
  "horisontti": [
    "horizon"
  ],
  "hostelli": [
    "hostel"
  ],
  "hotelli": [
    "hotel"
  ],
  "housut": [
    "pants",
    "trousers"
  ],
  "huhtikuu": [
    "april"
  ],
  "huijata": [
    "cheat"
  ],
  "huilu": [
    "flute"
  ],
  "huivi": [
    "scarf"
  ],
  "hummeri": [
    "lobster"
  ],
  "hunaja": [
    "honey"
  ],
  "huokaista": [
    "sigh"
  ],
  "huolehtia": [
    "worry"
  ],
  "huolellisesti": [
    "carefully"
  ],
  "huolestunut": [
    "anxious",
    "worried"
  ],
  "huolimatta": [
    "despite",
    "in spite of"
  ],
  "huoltoasema": [
    "gas station",
    "petrol station"
  ],
  "huomata": [
    "notice"
  ],
  "huomautus": [
    "note"
  ],
  "huomenna": [
    "tomorrow"
  ],
  "huone": [
    "room"
  ],
  "huoneisto": [
    "apartment"
  ],
  "huonekalut": [
    "furniture"
  ],
  "huonepalvelu": [
    "room service"
  ],
  "huono": [
    "bad",
    "poor"
  ],
  "huonoin": [
    "worst"
  ],
  "huonompi": [
    "worse"
  ],
  "huppari": [
    "hoodie"
  ],
  "hurrikaani": [
    "hurricane"
  ],
  "huuhdella": [
    "rinse"
  ],
  "huuli": [
    "lip"
  ],
  "huulipuna": [
    "lipstick"
  ],
  "huutaa": [
    "scream",
    "shout",
    "yell"
  ],
  "huutomerkki": [
    "exclamation mark"
  ],
  "huvila": [
    "villa"
  ],
  "hylje": [
    "seal"
  ],
  "hylkäys": [
    "rejection"
  ],
  "hylly": [
    "shelf"
  ],
  "hylätä": [
    "reject"
  ],
  "hymyillä": [
    "smile"
  ],
  "hypellä": [
    "hop",
    "skip"
  ],
  "hyperlinkki": [
    "hyperlink"
  ],
  "hypoteesi": [
    "hypothesis"
  ],
  "hypätä": [
    "jump"
  ],
  "hyttynen": [
    "mosquito"
  ],
  "hyvitys": [
    "refund"
  ],
  "hyvä": [
    "good"
  ],
  "hyvä on": [
    "all right"
  ],
  "hyväksyntä": [
    "approval"
  ],
  "hyväksyä": [
    "accept",
    "approve"
  ],
  "hyvästi": [
    "goodbye"
  ],
  "hyvää huomenta": [
    "good morning"
  ],
  "hyvää iltaa": [
    "good evening"
  ],
  "hyvää iltapäivää": [
    "good afternoon"
  ],
  "hyvää yötä": [
    "good night"
  ],
  "hyödykkeet": [
    "goods"
  ],
  "hyödyllinen": [
    "useful"
  ],
  "hyödytön": [
    "useless"
  ],
  "hyökätä": [
    "attack"
  ],
  "hyönteinen": [
    "insect"
  ],
  "hälytys": [
    "alert"
  ],
  "hämähäkki": [
    "spider"
  ],
  "hän": [
    "he",
    "she"
  ],
  "hänen": [
    "her",
    "hers",
    "his"
  ],
  "häpeissään": [
    "ashamed"
  ],
  "häpeä": [
    "shame"
  ],
  "hätätilanne": [
    "emergency"
  ],
  "hätäuloskäynti": [
    "emergency exit"
  ],
  "hävitä": [
    "lose",
    "lose game"
  ],
  "häviö": [
    "loss"
  ],
  "häät": [
    "wedding"
  ],
  "hölmö": [
    "silly"
  ],
  "höyry": [
    "steam"
  ],
  "höyrysauna": [
    "steam room"
  ],
  "höyryttäminen": [
    "steaming"
  ],
  "höyryttää": [
    "steam"
  ],
  "idea": [
    "idea"
  ],
  "identiteetti": [
    "identity"
  ],
  "ien": [
    "gum"
  ],
  "ihailla": [
    "admire"
  ],
  "ihmetellä": [
    "wonder"
  ],
  "ihminen": [
    "human",
    "person"
  ],
  "ihmisapina": [
    "ape"
  ],
  "ihmiset": [
    "people"
  ],
  "iho": [
    "skin"
  ],
  "ikkuna": [
    "window"
  ],
  "ikkunalauta": [
    "windowsill"
  ],
  "ikääntynyt": [
    "elderly"
  ],
  "illallinen": [
    "dinner",
    "supper"
  ],
  "ilma": [
    "air"
  ],
  "ilmainen": [
    "free"
  ],
  "ilman": [
    "without"
  ],
  "ilmanvaihto": [
    "ventilation"
  ],
  "ilmapallo": [
    "balloon"
  ],
  "ilmasto": [
    "climate"
  ],
  "ilmastointilaite": [
    "air conditioner"
  ],
  "ilmaus": [
    "phrase"
  ],
  "ilmavoimat": [
    "air force"
  ],
  "ilmeisesti": [
    "apparently"
  ],
  "ilmoittaa": [
    "announce",
    "report"
  ],
  "ilmoitus": [
    "alert",
    "notice",
    "notification"
  ],
  "ilo": [
    "joy"
  ],
  "iloinen": [
    "happy"
  ],
  "ilta": [
    "evening"
  ],
  "iltahämärä": [
    "dusk"
  ],
  "iltapala": [
    "supper"
  ],
  "iltapäivä": [
    "afternoon"
  ],
  "ilves": [
    "lynx"
  ],
  "imuroida": [
    "vacuum"
  ],
  "indeksi": [
    "index"
  ],
  "Indonesia": [
    "indonesia",
    "Indonesia"
  ],
  "infektio": [
    "infection"
  ],
  "influenssa": [
    "flu"
  ],
  "informaatio": [
    "information"
  ],
  "inhota": [
    "dislike"
  ],
  "inkivääri": [
    "ginger"
  ],
  "innostunut": [
    "excited"
  ],
  "insinööri": [
    "engineer"
  ],
  "insinööritiede": [
    "engineering"
  ],
  "instituutio": [
    "institution"
  ],
  "integraatio": [
    "integration"
  ],
  "internet": [
    "internet"
  ],
  "Intia": [
    "india",
    "India"
  ],
  "inventaario": [
    "inventory"
  ],
  "Irlanti": [
    "Ireland",
    "ireland"
  ],
  "irrottaa": [
    "remove"
  ],
  "irtisanoa": [
    "fire"
  ],
  "iskeä silmää": [
    "wink"
  ],
  "isku": [
    "beat"
  ],
  "Islanti": [
    "Iceland",
    "iceland"
  ],
  "islanti": [
    "icelandic",
    "Icelandic"
  ],
  "islantilainen": [
    "icelandic",
    "Icelandic"
  ],
  "iso": [
    "big"
  ],
  "isoisä": [
    "grandfather"
  ],
  "isovanhempi": [
    "grandparent"
  ],
  "isoäiti": [
    "grandmother"
  ],
  "Israel": [
    "israel",
    "Israel"
  ],
  "istua": [
    "sit"
  ],
  "istuin": [
    "seat"
  ],
  "isä": [
    "dad",
    "father"
  ],
  "isäntä": [
    "host"
  ],
  "italia": [
    "italian",
    "Italian"
  ],
  "Italia": [
    "Italy",
    "italy"
  ],
  "italialainen": [
    "italian",
    "Italian"
  ],
  "itkeä": [
    "cry"
  ],
  "itse": [
    "myself",
    "oneself",
    "self",
    "yourself"
  ],
  "itse asiassa": [
    "in fact"
  ],
  "itseluottamus": [
    "confidence"
  ],
  "itä": [
    "east"
  ],
  "Itävalta": [
    "Austria",
    "austria"
  ],
  "ja": [
    "and"
  ],
  "jaardi": [
    "yard"
  ],
  "jahdata": [
    "chase"
  ],
  "jahti": [
    "yacht"
  ],
  "jakaa": [
    "distribute",
    "divide",
    "share",
    "split"
  ],
  "jakaa linkki": [
    "share link"
  ],
  "jakkara": [
    "stool"
  ],
  "jakoavain": [
    "spanner",
    "wrench"
  ],
  "jakso": [
    "episode"
  ],
  "jalat": [
    "feet"
  ],
  "jalka": [
    "foot",
    "leg"
  ],
  "jalkakäytävä": [
    "pavement",
    "sidewalk"
  ],
  "jalkaterä": [
    "foot"
  ],
  "janoinen": [
    "thirsty"
  ],
  "Japani": [
    "Japan",
    "japan"
  ],
  "japani": [
    "Japanese",
    "japanese"
  ],
  "japanilainen": [
    "Japanese",
    "japanese"
  ],
  "jarru": [
    "brake"
  ],
  "jatkaa": [
    "continue",
    "proceed"
  ],
  "jatkojohto": [
    "extension cord"
  ],
  "jauheliha": [
    "minced meat"
  ],
  "jauho": [
    "flour"
  ],
  "jo": [
    "already",
    "yet"
  ],
  "joenranta": [
    "bank"
  ],
  "jogurtti": [
    "yogurt"
  ],
  "johonkin": [
    "to"
  ],
  "johtaa": [
    "lead",
    "manage"
  ],
  "johtaja": [
    "leader",
    "manager"
  ],
  "johto": [
    "management",
    "wire"
  ],
  "johtopäätös": [
    "conclusion"
  ],
  "jokainen": [
    "each",
    "everyone"
  ],
  "joki": [
    "river"
  ],
  "joku": [
    "someone"
  ],
  "jonkin verran": [
    "some"
  ],
  "jopa": [
    "even"
  ],
  "jos": [
    "if"
  ],
  "joskus": [
    "sometimes"
  ],
  "jostakin": [
    "from"
  ],
  "jotakin": [
    "something"
  ],
  "joten": [
    "so"
  ],
  "jotkut": [
    "some"
  ],
  "joukkue": [
    "team"
  ],
  "joukossa": [
    "among"
  ],
  "joulu": [
    "christmas",
    "Christmas"
  ],
  "joulukuu": [
    "december"
  ],
  "joutsen": [
    "swan"
  ],
  "juhla": [
    "party"
  ],
  "juhlapäivä": [
    "holiday"
  ],
  "julkaista": [
    "publish"
  ],
  "julkaisu": [
    "post",
    "release"
  ],
  "julkinen": [
    "public"
  ],
  "julkistaa": [
    "announce"
  ],
  "juna": [
    "train"
  ],
  "juomaraha": [
    "tip"
  ],
  "juoni": [
    "plot"
  ],
  "juosta": [
    "run"
  ],
  "juristi": [
    "lawyer"
  ],
  "juuri": [
    "just",
    "root"
  ],
  "juusto": [
    "cheese"
  ],
  "juustokumina": [
    "cumin"
  ],
  "jyrkänne": [
    "cliff"
  ],
  "jäkälä": [
    "lichen"
  ],
  "jälkeen": [
    "after"
  ],
  "jälkiruoka": [
    "dessert"
  ],
  "jänis": [
    "hare"
  ],
  "järjestelmä": [
    "system"
  ],
  "järjestys": [
    "order",
    "ranking"
  ],
  "järjestää": [
    "arrange",
    "organize"
  ],
  "järjestö": [
    "organisation"
  ],
  "järki": [
    "reason"
  ],
  "järvi": [
    "lake"
  ],
  "jäte": [
    "garbage"
  ],
  "jättiläinen": [
    "giant"
  ],
  "jättää": [
    "leave",
    "submit"
  ],
  "jää": [
    "ice"
  ],
  "jäädyttää": [
    "freeze"
  ],
  "jäädä": [
    "remain",
    "stay"
  ],
  "jäähalli": [
    "ice rink"
  ],
  "jäähdyttää": [
    "cool"
  ],
  "jääkaappi": [
    "fridge",
    "refrigerator"
  ],
  "jääkarhu": [
    "polar bear"
  ],
  "jäätelö": [
    "ice cream"
  ],
  "jäätyä": [
    "freeze"
  ],
  "jäätävä": [
    "freezing"
  ],
  "kaakao": [
    "cocoa",
    "hot chocolate"
  ],
  "kaakko": [
    "southeast"
  ],
  "kaali": [
    "cabbage"
  ],
  "kaapeli": [
    "cable"
  ],
  "kaappi": [
    "cabinet",
    "closet",
    "cupboard"
  ],
  "kaarna": [
    "bark"
  ],
  "kaasupoljin": [
    "accelerator"
  ],
  "kaataa": [
    "pour"
  ],
  "kaatua": [
    "fall",
    "spill"
  ],
  "kaava": [
    "pattern"
  ],
  "kaavio": [
    "chart"
  ],
  "kadottaa": [
    "lose"
  ],
  "kahdeksan": [
    "eight"
  ],
  "kahdeksankymmentä": [
    "eighty"
  ],
  "kahdeksantoista": [
    "eighteen"
  ],
  "kahva": [
    "handle"
  ],
  "kahvi": [
    "coffee"
  ],
  "kahvikone": [
    "coffee machine"
  ],
  "kahvila": [
    "cafe",
    "cafeteria"
  ],
  "kahvinkeitin": [
    "coffee maker"
  ],
  "kaikki": [
    "all",
    "everybody",
    "everyone",
    "everything"
  ],
  "kaikkialla": [
    "everywhere"
  ],
  "kaistanleveys": [
    "bandwidth"
  ],
  "kaiutin": [
    "speaker"
  ],
  "kaivata": [
    "miss"
  ],
  "kajakki": [
    "kayak"
  ],
  "kaksi": [
    "two"
  ],
  "kaksikymmentä": [
    "twenty"
  ],
  "kaksitoista": [
    "twelve"
  ],
  "kaksoispiste": [
    "colon"
  ],
  "kaktus": [
    "cactus"
  ],
  "kala": [
    "fish"
  ],
  "kalafilee": [
    "fish fillet"
  ],
  "kalastaja": [
    "fisherman"
  ],
  "kalenteri": [
    "calendar"
  ],
  "kalkkuna": [
    "turkey"
  ],
  "kallio": [
    "rock"
  ],
  "kallis": [
    "expensive"
  ],
  "kalpea": [
    "pale"
  ],
  "kalvosin": [
    "cuff"
  ],
  "kamera": [
    "camera"
  ],
  "kampa": [
    "comb"
  ],
  "kampanja": [
    "promotion"
  ],
  "kampus": [
    "campus"
  ],
  "kana": [
    "chicken",
    "hen"
  ],
  "Kanada": [
    "Canada",
    "canada"
  ],
  "kananliha": [
    "chicken"
  ],
  "kananmuna": [
    "chicken egg"
  ],
  "kanava": [
    "channel"
  ],
  "kaneli": [
    "cinnamon"
  ],
  "kangas": [
    "fabric"
  ],
  "kani": [
    "rabbit"
  ],
  "kannettava tietokone": [
    "laptop",
    "notebook"
  ],
  "kanootti": [
    "canoe"
  ],
  "kansa": [
    "people"
  ],
  "kansainvälinen": [
    "international"
  ],
  "kansakunta": [
    "nation"
  ],
  "kansalainen": [
    "citizen"
  ],
  "kansalaisuus": [
    "citizenship"
  ],
  "kansallinen": [
    "national"
  ],
  "kansallispuisto": [
    "national park"
  ],
  "kansallisuus": [
    "nationality"
  ],
  "kansio": [
    "folder"
  ],
  "kanssa": [
    "with"
  ],
  "kantaa": [
    "carry"
  ],
  "kantapää": [
    "heel"
  ],
  "kapasiteetti": [
    "capacity"
  ],
  "kapea": [
    "narrow"
  ],
  "kappale": [
    "paragraph"
  ],
  "kappeli": [
    "chapel"
  ],
  "kardemumma": [
    "cardamom"
  ],
  "karhu": [
    "bear"
  ],
  "karhunvatukka": [
    "blackberry"
  ],
  "karitsa": [
    "lamb"
  ],
  "karkea": [
    "rough"
  ],
  "karkeasti": [
    "roughly"
  ],
  "karkki": [
    "candy"
  ],
  "karpalo": [
    "cranberry"
  ],
  "kartano": [
    "mansion"
  ],
  "kartasto": [
    "atlas"
  ],
  "kartta": [
    "map"
  ],
  "karva": [
    "hair"
  ],
  "karvas": [
    "bitter"
  ],
  "karviainen": [
    "gooseberry"
  ],
  "kasari": [
    "saucepan"
  ],
  "kassanhoitaja": [
    "cashier"
  ],
  "kaste": [
    "dew"
  ],
  "kastike": [
    "sauce"
  ],
  "kasvaa": [
    "grow"
  ],
  "kasvattaa": [
    "grow",
    "raise"
  ],
  "kasvi": [
    "plant"
  ],
  "kasvis": [
    "vegetable"
  ],
  "kasvis-": [
    "vegetarian"
  ],
  "kasvissyöjä": [
    "vegetarian"
  ],
  "kasvitieteellinen puutarha": [
    "botanical garden"
  ],
  "kasvot": [
    "face"
  ],
  "kasvuyritys": [
    "startup"
  ],
  "kataja": [
    "juniper"
  ],
  "katedraali": [
    "cathedral"
  ],
  "kategoria": [
    "category"
  ],
  "katkarapu": [
    "shrimp"
  ],
  "katkera": [
    "bitter"
  ],
  "katsoa": [
    "look",
    "watch"
  ],
  "kattila": [
    "pot",
    "saucepan"
  ],
  "katto": [
    "ceiling",
    "roof"
  ],
  "kattokruunu": [
    "chandelier"
  ],
  "katu": [
    "street"
  ],
  "kauhea": [
    "terrible"
  ],
  "kaukana": [
    "far"
  ],
  "kaukosäädin": [
    "remote control"
  ],
  "kaula": [
    "neck"
  ],
  "kaulakoru": [
    "necklace"
  ],
  "kaulus": [
    "collar"
  ],
  "kaunis": [
    "beautiful"
  ],
  "kauppa": [
    "deal",
    "shop",
    "store"
  ],
  "kauppakeskus": [
    "shopping mall"
  ],
  "kauppias": [
    "shopkeeper"
  ],
  "kaupunginosa": [
    "district",
    "neighborhood"
  ],
  "kaupungintalo": [
    "city hall"
  ],
  "kaupunginvaltuusto": [
    "city council"
  ],
  "kaupunki": [
    "city",
    "town"
  ],
  "kaura": [
    "oats"
  ],
  "kauris": [
    "deer"
  ],
  "kausi": [
    "season"
  ],
  "kaviaari": [
    "caviar"
  ],
  "kehittyä": [
    "develop"
  ],
  "kehittäjä": [
    "developer"
  ],
  "kehittää": [
    "develop"
  ],
  "keho": [
    "body"
  ],
  "kehua": [
    "praise"
  ],
  "kehys": [
    "frame"
  ],
  "keittiö": [
    "kitchen"
  ],
  "keittiöpyyhe": [
    "kitchen towel"
  ],
  "keitto": [
    "soup"
  ],
  "keittolevy": [
    "hob"
  ],
  "keittäminen": [
    "boiling"
  ],
  "keittää": [
    "boil"
  ],
  "keksiä": [
    "invent"
  ],
  "kellari": [
    "basement",
    "cellar"
  ],
  "kello": [
    "clock"
  ],
  "kellonranneke": [
    "watchband"
  ],
  "keltainen": [
    "yellow"
  ],
  "kemia": [
    "chemistry"
  ],
  "kenen": [
    "whose"
  ],
  "kenet": [
    "whom"
  ],
  "kenguru": [
    "kangaroo"
  ],
  "kengännauha": [
    "shoelace"
  ],
  "kengät": [
    "shoes"
  ],
  "Kenia": [
    "kenya",
    "Kenya"
  ],
  "kenkä": [
    "shoe"
  ],
  "kenoviiva": [
    "backslash"
  ],
  "kenttä": [
    "court",
    "field"
  ],
  "keramiikka": [
    "ceramic"
  ],
  "kerma": [
    "cream"
  ],
  "kerros": [
    "floor"
  ],
  "kertoa": [
    "multiply",
    "tell"
  ],
  "kerätä": [
    "collect"
  ],
  "keskeinen": [
    "central"
  ],
  "keskeyttää": [
    "pause"
  ],
  "keskiarvo": [
    "average"
  ],
  "keskipäivä": [
    "noon"
  ],
  "keskiviikko": [
    "wednesday"
  ],
  "keskiyö": [
    "midnight"
  ],
  "keskusmuisti": [
    "RAM"
  ],
  "keskustelu": [
    "conversation",
    "discussion"
  ],
  "kesä": [
    "summer"
  ],
  "kesäkurpitsa": [
    "zucchini"
  ],
  "kesäkuu": [
    "june"
  ],
  "ketsuppi": [
    "ketchup"
  ],
  "kettu": [
    "fox"
  ],
  "ketä": [
    "whom"
  ],
  "keuhko": [
    "lung"
  ],
  "kevyt": [
    "light",
    "lightweight"
  ],
  "kevät": [
    "spring"
  ],
  "kiehua": [
    "boil"
  ],
  "kieli": [
    "language",
    "tongue"
  ],
  "kielioppi": [
    "grammar"
  ],
  "kielitiede": [
    "linguistics"
  ],
  "kieltäytyä": [
    "refuse"
  ],
  "kieltää": [
    "forbid"
  ],
  "kierrätys": [
    "recycling"
  ],
  "kierrätysastia": [
    "recycle bin"
  ],
  "kiertää": [
    "rotate"
  ],
  "kiillottaa": [
    "polish"
  ],
  "Kiina": [
    "china",
    "China"
  ],
  "kiina": [
    "Chinese",
    "chinese"
  ],
  "kiinalainen": [
    "Chinese",
    "chinese"
  ],
  "kiinni": [
    "closed"
  ],
  "kiinnittää": [
    "attach"
  ],
  "kiinnitys": [
    "mortgage"
  ],
  "kiinnostunut": [
    "interested"
  ],
  "kiinnostus": [
    "interest"
  ],
  "kiintoavain": [
    "spanner",
    "wrench"
  ],
  "kiintolevy": [
    "hard drive"
  ],
  "kiireellisyys": [
    "urgency"
  ],
  "kiireinen": [
    "busy"
  ],
  "kiistellä": [
    "argue"
  ],
  "kiitos": [
    "thank you",
    "thanks"
  ],
  "kiitos paljon": [
    "thank you very much"
  ],
  "kiitotie": [
    "runway"
  ],
  "kiivetä": [
    "climb"
  ],
  "kiivi": [
    "kiwi"
  ],
  "kikherne": [
    "chickpea"
  ],
  "kiljua": [
    "scream"
  ],
  "kilogramma": [
    "kilogram"
  ],
  "kilometri": [
    "kilometer"
  ],
  "kilotavu": [
    "kilobyte"
  ],
  "kilpailla": [
    "compete",
    "race"
  ],
  "kilpikonna": [
    "turtle"
  ],
  "kiltti": [
    "kind"
  ],
  "kinkku": [
    "ham"
  ],
  "kippis": [
    "cheers"
  ],
  "kipu": [
    "pain"
  ],
  "kipulääke": [
    "painkiller"
  ],
  "kirahvi": [
    "giraffe"
  ],
  "kirja": [
    "book"
  ],
  "kirjahylly": [
    "bookshelf"
  ],
  "kirjailija": [
    "author",
    "writer"
  ],
  "kirjain": [
    "letter"
  ],
  "kirjakauppa": [
    "bookshop",
    "bookstore"
  ],
  "kirjallisuus": [
    "literature"
  ],
  "kirjanpitäjä": [
    "accountant"
  ],
  "kirjasto": [
    "library"
  ],
  "kirjautua sisään": [
    "log in",
    "sign in"
  ],
  "kirjautua ulos": [
    "log out",
    "sign out"
  ],
  "kirje": [
    "letter"
  ],
  "kirjoittaa": [
    "write"
  ],
  "kirjoittaja": [
    "writer"
  ],
  "kirjoituspöytä": [
    "desk"
  ],
  "kirkas": [
    "bright",
    "clear"
  ],
  "kirkko": [
    "church"
  ],
  "kirsikka": [
    "cherry"
  ],
  "kirurgi": [
    "surgeon"
  ],
  "kirurgia": [
    "surgery"
  ],
  "kissa": [
    "cat"
  ],
  "kissanpentu": [
    "kitten"
  ],
  "kitara": [
    "guitar"
  ],
  "kivennäisvesi": [
    "mineral water"
  ],
  "kivi": [
    "rock",
    "stone"
  ],
  "kivitavara": [
    "stoneware"
  ],
  "klinikka": [
    "clinic"
  ],
  "koala": [
    "koala"
  ],
  "koe": [
    "experiment",
    "trial"
  ],
  "kohdistin": [
    "cursor"
  ],
  "kohtaus": [
    "scene"
  ],
  "kohtelias": [
    "polite"
  ],
  "kohti": [
    "to"
  ],
  "kohtuuhintainen": [
    "affordable"
  ],
  "koi": [
    "moth"
  ],
  "koillinen": [
    "northeast"
  ],
  "koira": [
    "dog"
  ],
  "koiranpentu": [
    "puppy"
  ],
  "koivu": [
    "birch"
  ],
  "kokata": [
    "cook"
  ],
  "kokeilla": [
    "try"
  ],
  "kokemus": [
    "experience"
  ],
  "kokki": [
    "chef",
    "cook"
  ],
  "koko": [
    "size"
  ],
  "kokonaan": [
    "entirely"
  ],
  "kokonaisluku": [
    "integer"
  ],
  "kokous": [
    "meeting"
  ],
  "kolikko": [
    "coin"
  ],
  "kollega": [
    "colleague"
  ],
  "kolme": [
    "three"
  ],
  "kolmekymmentä": [
    "thirty"
  ],
  "kolmetoista": [
    "thirteen"
  ],
  "kolmio": [
    "triangle"
  ],
  "komea": [
    "handsome"
  ],
  "komeetta": [
    "comet"
  ],
  "kommentti": [
    "comment"
  ],
  "kompassi": [
    "compass"
  ],
  "komponentti": [
    "component"
  ],
  "konferenssi": [
    "conference"
  ],
  "konfiguraatio": [
    "configuration"
  ],
  "konflikti": [
    "conflict"
  ],
  "konsertti": [
    "concert"
  ],
  "konserttisali": [
    "concert hall"
  ],
  "konsonantti": [
    "consonant"
  ],
  "konsulaatti": [
    "consulate"
  ],
  "kontiainen": [
    "mole"
  ],
  "koodi": [
    "code"
  ],
  "koodivarasto": [
    "repository"
  ],
  "kookospähkinä": [
    "coconut"
  ],
  "koontinäyttö": [
    "dashboard"
  ],
  "koota": [
    "assemble"
  ],
  "kopioida": [
    "copy"
  ],
  "korjata": [
    "fix",
    "repair"
  ],
  "korjaustiedosto": [
    "patch"
  ],
  "korkea": [
    "high"
  ],
  "korkeakoulu": [
    "college"
  ],
  "korkeus": [
    "height"
  ],
  "korko": [
    "heel",
    "interest",
    "interest rate"
  ],
  "korppi": [
    "raven"
  ],
  "kortti": [
    "card"
  ],
  "korut": [
    "jewelry"
  ],
  "korva": [
    "ear"
  ],
  "korvakoru": [
    "earring"
  ],
  "korvata": [
    "replace"
  ],
  "koska": [
    "because",
    "since"
  ],
  "koskea": [
    "touch"
  ],
  "kosketuslevy": [
    "touchpad"
  ],
  "kosketusnäyttö": [
    "touchscreen"
  ],
  "kosmetiikka": [
    "cosmetics"
  ],
  "kostea": [
    "moist"
  ],
  "kosteikko": [
    "wetland"
  ],
  "kosteus": [
    "humidity"
  ],
  "koti": [
    "home"
  ],
  "kotitehtävä": [
    "homework"
  ],
  "kotka": [
    "eagle"
  ],
  "kotoperäinen": [
    "native"
  ],
  "koulu": [
    "school"
  ],
  "kouluttaa": [
    "educate",
    "train"
  ],
  "koulutus": [
    "education",
    "training"
  ],
  "kova": [
    "hard"
  ],
  "kovakuoriainen": [
    "beetle"
  ],
  "Kreikka": [
    "Greece",
    "greece"
  ],
  "kreikka": [
    "greek",
    "Greek"
  ],
  "kreikkalainen": [
    "greek",
    "Greek"
  ],
  "kreivikunta": [
    "county"
  ],
  "krokotiili": [
    "crocodile"
  ],
  "kuha": [
    "pikeperch"
  ],
  "kuin": [
    "than"
  ],
  "kuinka": [
    "how"
  ],
  "kuinka kauan": [
    "how long"
  ],
  "kuinka kaukana": [
    "how far"
  ],
  "kuinka monta": [
    "how many"
  ],
  "kuinka paljon": [
    "how much"
  ],
  "kuinka vanha": [
    "how old"
  ],
  "kuiskata": [
    "whisper"
  ],
  "kuisti": [
    "porch"
  ],
  "kuistin valo": [
    "porch light"
  ],
  "kuitenkin": [
    "however"
  ],
  "kuitti": [
    "receipt"
  ],
  "kuiva": [
    "dry",
    "stale"
  ],
  "kuivausrumpu": [
    "dryer"
  ],
  "kuivuus": [
    "drought"
  ],
  "kuka": [
    "who"
  ],
  "kuka tahansa": [
    "anybody",
    "anyone"
  ],
  "kukinta": [
    "blossom"
  ],
  "kukka": [
    "blossom",
    "flower"
  ],
  "kukkakaali": [
    "cauliflower"
  ],
  "kukkakauppa": [
    "florist"
  ],
  "kukkaro": [
    "purse"
  ],
  "kukkaruukku": [
    "flowerpot"
  ],
  "kukko": [
    "rooster"
  ],
  "kukkula": [
    "hill"
  ],
  "kulho": [
    "bowl"
  ],
  "kuljettaa": [
    "transport"
  ],
  "kuljettaja": [
    "driver"
  ],
  "kuljetus": [
    "shipping"
  ],
  "kulkulupa": [
    "pass"
  ],
  "kulma": [
    "corner"
  ],
  "kulmakarva": [
    "eyebrow"
  ],
  "kulta": [
    "gold"
  ],
  "kultainen": [
    "gold"
  ],
  "kulttuuri": [
    "culture"
  ],
  "kulu": [
    "expense"
  ],
  "kuluttaa": [
    "spend"
  ],
  "kumi": [
    "rubber"
  ],
  "kumina": [
    "cumin"
  ],
  "kumpi": [
    "which"
  ],
  "kumpi tahansa": [
    "either"
  ],
  "kumppani": [
    "partner"
  ],
  "kun": [
    "as",
    "while"
  ],
  "kuningas": [
    "king"
  ],
  "kuningatar": [
    "queen"
  ],
  "kunnes": [
    "until"
  ],
  "kunnioittaa": [
    "respect"
  ],
  "kunnioitus": [
    "respect"
  ],
  "kunta": [
    "municipality"
  ],
  "kuntosali": [
    "gym"
  ],
  "kuolema": [
    "death"
  ],
  "kuolla": [
    "die"
  ],
  "kuollut": [
    "dead"
  ],
  "kuori": [
    "bark",
    "shell"
  ],
  "kuoria": [
    "peel"
  ],
  "kuorma-auto": [
    "lorry",
    "truck"
  ],
  "kuorsata": [
    "snore"
  ],
  "kupari": [
    "copper"
  ],
  "kuppi": [
    "cup"
  ],
  "kurkku": [
    "cucumber",
    "throat"
  ],
  "kurpitsa": [
    "pumpkin",
    "squash"
  ],
  "kurpitsansiemen": [
    "pumpkin seed"
  ],
  "kurssi": [
    "course"
  ],
  "kustannus": [
    "cost"
  ],
  "kuten": [
    "as",
    "such as"
  ],
  "kutistaa": [
    "shrink"
  ],
  "kutistua": [
    "shrink"
  ],
  "kutoa": [
    "weave"
  ],
  "kutsua": [
    "call",
    "invite"
  ],
  "kuu": [
    "moon"
  ],
  "kuukausi": [
    "month"
  ],
  "kuulla": [
    "hear"
  ],
  "kuulokkeet": [
    "headphones"
  ],
  "kuuluisa": [
    "famous"
  ],
  "kuuma": [
    "hot"
  ],
  "kuumailmapallo": [
    "hot air balloon"
  ],
  "kuume": [
    "fever"
  ],
  "kuumuus": [
    "heat"
  ],
  "kuunnella": [
    "listen"
  ],
  "kuunvalo": [
    "moonlight"
  ],
  "kuura": [
    "frost"
  ],
  "kuusi": [
    "six",
    "spruce"
  ],
  "kuusikymmentä": [
    "sixty"
  ],
  "kuusitoista": [
    "sixteen"
  ],
  "kuutio": [
    "cube"
  ],
  "kuva": [
    "image",
    "picture"
  ],
  "kuvailla": [
    "describe"
  ],
  "kuvake": [
    "icon"
  ],
  "kuvata": [
    "describe"
  ],
  "kuvernööri": [
    "governor"
  ],
  "kuvio": [
    "figure",
    "pattern"
  ],
  "kuvitella": [
    "imagine"
  ],
  "kyky": [
    "ability"
  ],
  "kyllä": [
    "yes"
  ],
  "kylmyys": [
    "coldness"
  ],
  "kylmä": [
    "cold"
  ],
  "kylpyamme": [
    "bathtub"
  ],
  "kylpyhuone": [
    "bathroom"
  ],
  "kylpypyyhe": [
    "bath towel"
  ],
  "kylpytakki": [
    "robe"
  ],
  "kyltti": [
    "sign"
  ],
  "kylä": [
    "village"
  ],
  "kymmenen": [
    "ten"
  ],
  "kynsi": [
    "fingernail",
    "nail"
  ],
  "kynsilakka": [
    "nail polish"
  ],
  "kynttilä": [
    "candle"
  ],
  "kynttilänjalka": [
    "candlestick"
  ],
  "kypsennetty": [
    "cooked"
  ],
  "kypsä": [
    "ripe"
  ],
  "kysely": [
    "query"
  ],
  "kysymys": [
    "question"
  ],
  "kysymysmerkki": [
    "question mark"
  ],
  "kysyntä": [
    "demand"
  ],
  "kysyä": [
    "ask"
  ],
  "kytkin": [
    "switch"
  ],
  "kyyhkynen": [
    "dove",
    "pigeon"
  ],
  "kyynel": [
    "tear"
  ],
  "kyynärpää": [
    "elbow"
  ],
  "kärki": [
    "tip"
  ],
  "kärpänen": [
    "fly"
  ],
  "kärsivällisyys": [
    "patience"
  ],
  "käsi": [
    "hand"
  ],
  "käsikirja": [
    "handbook",
    "manual"
  ],
  "käsilaukku": [
    "handbag",
    "purse"
  ],
  "käsimatkatavarat": [
    "carry-on luggage"
  ],
  "käsine": [
    "glove"
  ],
  "käsite": [
    "concept"
  ],
  "käsivarsi": [
    "arm"
  ],
  "käteinen": [
    "cash"
  ],
  "kävellä": [
    "walk"
  ],
  "käydä": [
    "attend",
    "visit"
  ],
  "käydä kauppaa": [
    "trade"
  ],
  "käytettävyys": [
    "usability"
  ],
  "käyttäjäkokemus": [
    "user experience"
  ],
  "käyttäjätili": [
    "account"
  ],
  "käyttäjätunnus": [
    "username"
  ],
  "käyttäytyminen": [
    "behavior"
  ],
  "käyttää": [
    "spend"
  ],
  "käyttöjärjestelmä": [
    "operating system"
  ],
  "käyttöliittymä": [
    "interface",
    "user interface"
  ],
  "käyttöoikeus": [
    "access"
  ],
  "käytäntö": [
    "habit",
    "policy"
  ],
  "käytävä": [
    "corridor",
    "hallway"
  ],
  "käännös": [
    "translation"
  ],
  "kääntyä": [
    "turn"
  ],
  "kääntäjä": [
    "translator"
  ],
  "kääntää": [
    "translate",
    "turn"
  ],
  "kääntää päinvastaiseksi": [
    "reverse"
  ],
  "kääriä": [
    "wrap"
  ],
  "käärme": [
    "snake"
  ],
  "köyhä": [
    "poor"
  ],
  "köysi": [
    "rope"
  ],
  "laajentaa": [
    "expand"
  ],
  "laajentua": [
    "expand"
  ],
  "laakso": [
    "valley"
  ],
  "laatikko": [
    "box",
    "drawer"
  ],
  "laatu": [
    "quality"
  ],
  "laava": [
    "lava"
  ],
  "laboratorio": [
    "lab",
    "laboratory"
  ],
  "ladata": [
    "charge",
    "download"
  ],
  "ladata palvelimelle": [
    "upload"
  ],
  "lahti": [
    "bay",
    "gulf"
  ],
  "laidun": [
    "pasture"
  ],
  "laiha": [
    "thin"
  ],
  "laina": [
    "loan"
  ],
  "lainata": [
    "borrow",
    "lend"
  ],
  "lainausmerkki": [
    "quotation mark"
  ],
  "laitos": [
    "institution"
  ],
  "laittaa": [
    "put"
  ],
  "laitteisto": [
    "hardware"
  ],
  "laituri": [
    "pier",
    "platform"
  ],
  "laiva": [
    "ferry",
    "ship"
  ],
  "laivasto": [
    "navy"
  ],
  "laivata": [
    "ship"
  ],
  "laji": [
    "kind",
    "species",
    "type"
  ],
  "lajitella": [
    "sort"
  ],
  "lakaista": [
    "sweep"
  ],
  "lakana": [
    "bedsheet",
    "sheet"
  ],
  "laki": [
    "law"
  ],
  "lakka": [
    "cloudberry"
  ],
  "lakki": [
    "cap"
  ],
  "laktoosi": [
    "lactose"
  ],
  "lammas": [
    "lamb",
    "sheep"
  ],
  "lampaanliha": [
    "lamb"
  ],
  "lampi": [
    "pond"
  ],
  "lamppu": [
    "lamp",
    "light bulb"
  ],
  "langaton": [
    "wireless"
  ],
  "langaton verkko": [
    "wi-fi",
    "Wi-Fi"
  ],
  "lanka": [
    "thread",
    "wire"
  ],
  "lapanen": [
    "mitten"
  ],
  "lapsenlapsi": [
    "grandchild"
  ],
  "lapset": [
    "children"
  ],
  "lapsi": [
    "child"
  ],
  "lasi": [
    "glass"
  ],
  "lasit": [
    "glasses"
  ],
  "laskea": [
    "calculate",
    "count",
    "lower"
  ],
  "laskea lukumäärä": [
    "count"
  ],
  "laskettelurinne": [
    "ski slope"
  ],
  "laskimo": [
    "vein"
  ],
  "lasku": [
    "bill",
    "check",
    "invoice"
  ],
  "lastentarha": [
    "kindergarten"
  ],
  "lastu": [
    "chip"
  ],
  "lataus": [
    "download"
  ],
  "latausasema": [
    "charging station"
  ],
  "lattia": [
    "floor"
  ],
  "laturi": [
    "charger"
  ],
  "lauantai": [
    "saturday"
  ],
  "laukku": [
    "bag"
  ],
  "laulaa": [
    "sing"
  ],
  "laulaja": [
    "singer"
  ],
  "laulu": [
    "song"
  ],
  "lause": [
    "sentence"
  ],
  "lautanen": [
    "plate"
  ],
  "lautasliina": [
    "napkin"
  ],
  "lautta": [
    "ferry"
  ],
  "lauttaterminaali": [
    "ferry terminal"
  ],
  "lava": [
    "stage"
  ],
  "lavuaari": [
    "sink"
  ],
  "leggingsit": [
    "leggings"
  ],
  "lehdet": [
    "leaves"
  ],
  "lehmus": [
    "linden"
  ],
  "lehmä": [
    "cow"
  ],
  "lehti": [
    "leaf"
  ],
  "lehtikaali": [
    "kale"
  ],
  "leijona": [
    "lion"
  ],
  "leikata": [
    "cut"
  ],
  "leikkaus": [
    "surgery"
  ],
  "leikkikenttä": [
    "playground"
  ],
  "leikkiä": [
    "play"
  ],
  "leikkuulauta": [
    "cutting board"
  ],
  "leipoa": [
    "bake"
  ],
  "leipomo": [
    "bakery"
  ],
  "leipuri": [
    "baker"
  ],
  "leipä": [
    "bread",
    "loaf"
  ],
  "leirintäalue": [
    "campground"
  ],
  "leivonta": [
    "baking"
  ],
  "leivänpaahdin": [
    "toaster"
  ],
  "lemmikki": [
    "pet"
  ],
  "lenkkari": [
    "sneaker"
  ],
  "lento": [
    "flight"
  ],
  "lentoasema": [
    "airport"
  ],
  "lentokenttä": [
    "airport"
  ],
  "lentokone": [
    "airplane",
    "plane"
  ],
  "lentäjä": [
    "pilot"
  ],
  "lentää": [
    "fly"
  ],
  "leopardi": [
    "leopard"
  ],
  "lepakko": [
    "bat"
  ],
  "leppä": [
    "alder"
  ],
  "leppäkerttu": [
    "ladybug"
  ],
  "leuka": [
    "chin",
    "jaw"
  ],
  "leveys": [
    "width"
  ],
  "leveä": [
    "wide"
  ],
  "levittää": [
    "spread",
    "unfold"
  ],
  "levitä": [
    "spread"
  ],
  "levätä": [
    "rest"
  ],
  "liesi": [
    "stove"
  ],
  "liha": [
    "meat"
  ],
  "lihakauppa": [
    "butcher shop"
  ],
  "lihakauppias": [
    "butcher"
  ],
  "lihas": [
    "muscle"
  ],
  "liikenne": [
    "traffic"
  ],
  "liikennemerkki": [
    "road sign"
  ],
  "liikenneruuhka": [
    "traffic jam"
  ],
  "liikennevalo": [
    "traffic light"
  ],
  "liikenneympyrä": [
    "roundabout"
  ],
  "liiketoimi": [
    "transaction"
  ],
  "liiketoiminta": [
    "business"
  ],
  "liikevaihto": [
    "revenue"
  ],
  "liikkua": [
    "move"
  ],
  "liikunta": [
    "exercise"
  ],
  "liikuntasali": [
    "gym"
  ],
  "liite": [
    "attachment"
  ],
  "liittyä": [
    "join"
  ],
  "liittää": [
    "paste"
  ],
  "liivi": [
    "vest",
    "waistcoat"
  ],
  "likainen": [
    "dirty",
    "filthy"
  ],
  "likimäärin": [
    "approximately"
  ],
  "likimääräinen": [
    "approximate"
  ],
  "lilja": [
    "lily"
  ],
  "limetti": [
    "lime",
    "lime fruit"
  ],
  "limonadi": [
    "lemonade"
  ],
  "linja-auto": [
    "bus"
  ],
  "linkki": [
    "link"
  ],
  "linna": [
    "castle"
  ],
  "linssi": [
    "lentil"
  ],
  "lintu": [
    "bird"
  ],
  "lipasto": [
    "chest of drawers"
  ],
  "lippalakki": [
    "cap"
  ],
  "lippu": [
    "ticket"
  ],
  "lisenssi": [
    "licence",
    "license"
  ],
  "lisko": [
    "lizard"
  ],
  "lista": [
    "list"
  ],
  "lisäksi": [
    "in addition"
  ],
  "lisätä": [
    "add",
    "increase"
  ],
  "lisää": [
    "more"
  ],
  "lisääntyä": [
    "increase"
  ],
  "litra": [
    "liter",
    "litre"
  ],
  "liukuportaat": [
    "escalator"
  ],
  "lla": [
    "on"
  ],
  "logiikka": [
    "logic"
  ],
  "lohi": [
    "salmon"
  ],
  "loikata": [
    "hop"
  ],
  "lokakuu": [
    "october"
  ],
  "loma": [
    "holiday",
    "vacation"
  ],
  "lomake": [
    "form"
  ],
  "lompakko": [
    "wallet"
  ],
  "lonkka": [
    "hip"
  ],
  "lopettaa": [
    "end",
    "finish",
    "stop"
  ],
  "loppu": [
    "ending"
  ],
  "lopputulos": [
    "outcome"
  ],
  "lopullinen": [
    "final"
  ],
  "lopulta": [
    "eventually",
    "finally"
  ],
  "loukkaantunut": [
    "injured"
  ],
  "lounas": [
    "lunch",
    "southwest"
  ],
  "luento": [
    "lecture"
  ],
  "luentosali": [
    "lecture hall"
  ],
  "luettelo": [
    "list"
  ],
  "luistinrata": [
    "ice rink"
  ],
  "lukea": [
    "read"
  ],
  "lukita": [
    "lock"
  ],
  "lukko": [
    "lock"
  ],
  "luku": [
    "chapter",
    "number"
  ],
  "lukumerkki": [
    "digit"
  ],
  "lukuun ottamatta": [
    "except for"
  ],
  "lumi": [
    "snow"
  ],
  "lumihiutale": [
    "snowflake"
  ],
  "lumimyrsky": [
    "blizzard"
  ],
  "luminen": [
    "snowy"
  ],
  "luoda": [
    "create"
  ],
  "luode": [
    "northwest"
  ],
  "luokan määritelmä": [
    "class"
  ],
  "luokitella": [
    "classify"
  ],
  "luokka": [
    "category",
    "class"
  ],
  "luokkahuone": [
    "classroom"
  ],
  "luola": [
    "cave"
  ],
  "luona": [
    "at"
  ],
  "luonne": [
    "character"
  ],
  "luonnonsuojelualue": [
    "nature reserve"
  ],
  "luonnostella": [
    "sketch"
  ],
  "luonto": [
    "nature"
  ],
  "luotettavuus": [
    "reliability"
  ],
  "luottaa": [
    "trust"
  ],
  "luottamus": [
    "trust"
  ],
  "luotto": [
    "credit"
  ],
  "luottokortti": [
    "credit card"
  ],
  "lupa": [
    "licence",
    "license",
    "permission",
    "permit"
  ],
  "lupaus": [
    "guarantee"
  ],
  "lusikka": [
    "spoon"
  ],
  "luu": [
    "bone"
  ],
  "luukku": [
    "shutter"
  ],
  "luultavasti": [
    "probably"
  ],
  "luumu": [
    "plum"
  ],
  "luuranko": [
    "skeleton"
  ],
  "luuta": [
    "broom"
  ],
  "luvata": [
    "promise"
  ],
  "lyhyt": [
    "short"
  ],
  "lyhytkasvuinen": [
    "short"
  ],
  "lyödä": [
    "hit"
  ],
  "lyödä nyrkillä": [
    "punch"
  ],
  "lähde": [
    "spring"
  ],
  "lähdekoodi": [
    "source code"
  ],
  "lähellä": [
    "near"
  ],
  "lähentää": [
    "zoom"
  ],
  "lähestymistapa": [
    "approach"
  ],
  "lähestyä": [
    "approach"
  ],
  "lähetti": [
    "courier"
  ],
  "lähettää": [
    "send",
    "ship",
    "submit"
  ],
  "lähettää sähköpostia": [
    "email"
  ],
  "lähettää tekstiviesti": [
    "text"
  ],
  "lähettää viesti": [
    "send message"
  ],
  "lähtevät": [
    "outbox"
  ],
  "lähteä": [
    "leave"
  ],
  "lähtien": [
    "from"
  ],
  "lähtö": [
    "departure"
  ],
  "läikyttää": [
    "spill"
  ],
  "lämmin": [
    "warm"
  ],
  "lämmitin": [
    "heater"
  ],
  "lämmittää": [
    "heat"
  ],
  "lämpö": [
    "heat"
  ],
  "lämpöpatteri": [
    "radiator"
  ],
  "lämpötila": [
    "temperature"
  ],
  "länsi": [
    "west"
  ],
  "läpi": [
    "through"
  ],
  "läpinäkymätön": [
    "opaque"
  ],
  "läpinäkyvä": [
    "transparent"
  ],
  "läpäistä": [
    "pass"
  ],
  "läpäisykyky": [
    "throughput"
  ],
  "lääke": [
    "medication",
    "medicine"
  ],
  "lääketiede": [
    "medicine"
  ],
  "lääkitys": [
    "medication"
  ],
  "lääkäri": [
    "doctor"
  ],
  "löytää": [
    "discover",
    "find"
  ],
  "maa": [
    "country",
    "earth"
  ],
  "maahanmuuttaja": [
    "immigrant"
  ],
  "maailma": [
    "world"
  ],
  "maailmankaikkeus": [
    "universe"
  ],
  "maailmanlaajuinen": [
    "global"
  ],
  "maakunta": [
    "province"
  ],
  "maalaistalo": [
    "farmhouse"
  ],
  "maalari": [
    "painter"
  ],
  "maalata": [
    "paint"
  ],
  "maalaus": [
    "painting"
  ],
  "maaliskuu": [
    "march"
  ],
  "maan alla": [
    "underground"
  ],
  "maanalainen": [
    "subway"
  ],
  "maanantai": [
    "Monday",
    "monday"
  ],
  "maanjäristys": [
    "earthquake"
  ],
  "maanosa": [
    "continent"
  ],
  "maantiede": [
    "geography"
  ],
  "maanviljelijä": [
    "farmer"
  ],
  "maanvyöry": [
    "landslide"
  ],
  "maapallo": [
    "earth"
  ],
  "maaperä": [
    "soil"
  ],
  "maapähkinä": [
    "peanut"
  ],
  "maastopalo": [
    "wildfire"
  ],
  "maata": [
    "lie",
    "lie down"
  ],
  "maatila": [
    "farm"
  ],
  "mahalaukku": [
    "stomach"
  ],
  "mahdollinen": [
    "possible"
  ],
  "mahdollisuus": [
    "chance",
    "opportunity",
    "possibility"
  ],
  "mahdoton": [
    "impossible"
  ],
  "maili": [
    "mile"
  ],
  "mainita": [
    "mention"
  ],
  "mainittu asia": [
    "something"
  ],
  "mainonta": [
    "advertising"
  ],
  "mainos": [
    "advertisement"
  ],
  "maisema": [
    "scene"
  ],
  "maissi": [
    "corn"
  ],
  "maistaa": [
    "taste"
  ],
  "maistua": [
    "taste"
  ],
  "maito": [
    "milk"
  ],
  "majava": [
    "beaver"
  ],
  "majoitus": [
    "accommodation"
  ],
  "majoneesi": [
    "mayonnaise"
  ],
  "makea": [
    "sweet"
  ],
  "makeinen": [
    "candy",
    "sweet"
  ],
  "makkara": [
    "sausage"
  ],
  "maksa": [
    "liver"
  ],
  "maksaa": [
    "cost",
    "pay"
  ],
  "maksu": [
    "payment"
  ],
  "makuuhuone": [
    "bedroom"
  ],
  "maljakko": [
    "vase"
  ],
  "malli": [
    "model"
  ],
  "mallipohja": [
    "template"
  ],
  "mandariini": [
    "mandarin"
  ],
  "mango": [
    "mango"
  ],
  "mansikka": [
    "strawberry"
  ],
  "manteli": [
    "almond"
  ],
  "margariini": [
    "margarine"
  ],
  "marja": [
    "berry"
  ],
  "markkinapaikka": [
    "marketplace"
  ],
  "markkinat": [
    "market"
  ],
  "markkinointi": [
    "marketing"
  ],
  "marmeladi": [
    "marmalade"
  ],
  "marraskuu": [
    "november"
  ],
  "massa": [
    "mass"
  ],
  "matala": [
    "low"
  ],
  "matelija": [
    "reptile"
  ],
  "matematiikka": [
    "math",
    "mathematics"
  ],
  "matka": [
    "distance",
    "journey",
    "trip"
  ],
  "matkailu": [
    "travel"
  ],
  "matkakortti": [
    "pass"
  ],
  "matkalaukku": [
    "suitcase"
  ],
  "matkalipun hinta": [
    "fare"
  ],
  "matkapuhelin": [
    "mobile phone"
  ],
  "matkatavarat": [
    "baggage",
    "luggage"
  ],
  "matkavakuutus": [
    "travel insurance"
  ],
  "matkustaa": [
    "travel"
  ],
  "matkustaja": [
    "passenger"
  ],
  "matkustaminen": [
    "travel"
  ],
  "mato": [
    "worm"
  ],
  "matto": [
    "carpet",
    "rug"
  ],
  "maukas": [
    "tasty"
  ],
  "mausteinen": [
    "spicy"
  ],
  "me": [
    "we"
  ],
  "mediaani": [
    "median"
  ],
  "meduusa": [
    "jellyfish"
  ],
  "megatavu": [
    "megabyte"
  ],
  "mehiläinen": [
    "bee"
  ],
  "mehu": [
    "juice"
  ],
  "meidän": [
    "our",
    "ours"
  ],
  "meidät": [
    "us"
  ],
  "meikki": [
    "makeup"
  ],
  "meitä": [
    "us"
  ],
  "mekaanikko": [
    "mechanic"
  ],
  "mekko": [
    "dress"
  ],
  "Meksiko": [
    "mexico",
    "Mexico"
  ],
  "melkein": [
    "almost"
  ],
  "melko": [
    "pretty",
    "quite",
    "rather"
  ],
  "melodia": [
    "melody"
  ],
  "meloni": [
    "melon"
  ],
  "melu": [
    "noise"
  ],
  "meluisa": [
    "noisy"
  ],
  "menestys": [
    "success"
  ],
  "menetelmä": [
    "method"
  ],
  "menettely": [
    "procedure"
  ],
  "mennessä": [
    "by"
  ],
  "mennä": [
    "go"
  ],
  "mennä sisään": [
    "enter"
  ],
  "meno-paluulippu": [
    "return ticket"
  ],
  "menolippu": [
    "one-way ticket"
  ],
  "merenelävät": [
    "seafood"
  ],
  "meri": [
    "sea"
  ],
  "merimatka": [
    "voyage"
  ],
  "merkintä": [
    "record"
  ],
  "merkittävä": [
    "major"
  ],
  "merkitys": [
    "meaning"
  ],
  "merkki": [
    "character",
    "sign",
    "signal",
    "symbol"
  ],
  "merkkijono": [
    "string",
    "text string"
  ],
  "messinki": [
    "brass"
  ],
  "metalli": [
    "metal"
  ],
  "metatiedot": [
    "metadata"
  ],
  "meteori": [
    "meteor"
  ],
  "meteoriitti": [
    "meteorite"
  ],
  "metodi": [
    "method"
  ],
  "metri": [
    "meter"
  ],
  "metro": [
    "metro",
    "subway",
    "underground"
  ],
  "metsä": [
    "forest"
  ],
  "metsäkauris": [
    "roe deer"
  ],
  "mielenkiintoinen": [
    "interesting"
  ],
  "mieliala": [
    "mood"
  ],
  "mielihyvä": [
    "pleasure"
  ],
  "mielikuvitus": [
    "imagination"
  ],
  "mielipide": [
    "opinion"
  ],
  "miellyttävä": [
    "pleasant"
  ],
  "mieltymykset": [
    "preferences"
  ],
  "mies": [
    "man"
  ],
  "mihin aikaan": [
    "what time"
  ],
  "miinus": [
    "minus"
  ],
  "mikroaaltouuni": [
    "microwave"
  ],
  "mikrofoni": [
    "microphone"
  ],
  "mikrosiru": [
    "microchip"
  ],
  "miksi": [
    "why"
  ],
  "mikä": [
    "what",
    "which"
  ],
  "mikä tahansa": [
    "any"
  ],
  "miljardi": [
    "billion"
  ],
  "miljoona": [
    "million"
  ],
  "millainen": [
    "what kind"
  ],
  "millilitra": [
    "milliliter",
    "millilitre"
  ],
  "millimetri": [
    "millimeter"
  ],
  "milloin": [
    "when"
  ],
  "ministeri": [
    "minister"
  ],
  "ministeriö": [
    "ministry"
  ],
  "minne": [
    "where to"
  ],
  "minttu": [
    "mint"
  ],
  "minua": [
    "me"
  ],
  "minulle kuuluu hyvää": [
    "I am fine",
    "i am fine"
  ],
  "minun": [
    "mine",
    "my"
  ],
  "minut": [
    "me"
  ],
  "minuutti": [
    "minute"
  ],
  "minä": [
    "i",
    "I",
    "self"
  ],
  "minä itse": [
    "myself"
  ],
  "missata": [
    "miss"
  ],
  "missä": [
    "where"
  ],
  "missä tahansa": [
    "anywhere"
  ],
  "mistä": [
    "where from"
  ],
  "mitata": [
    "measure"
  ],
  "miten": [
    "how"
  ],
  "mitä": [
    "what"
  ],
  "mitä kuuluu": [
    "how are you"
  ],
  "mitä tahansa": [
    "anything"
  ],
  "mitä varten": [
    "what for"
  ],
  "modeemi": [
    "modem"
  ],
  "moderni": [
    "modern"
  ],
  "moduuli": [
    "module"
  ],
  "moi": [
    "hi"
  ],
  "moi moi": [
    "bye"
  ],
  "mokka": [
    "suede"
  ],
  "molemmat": [
    "both"
  ],
  "monarkia": [
    "monarchy"
  ],
  "moni": [
    "many"
  ],
  "monimutkainen": [
    "complex",
    "complicated"
  ],
  "moninkertainen": [
    "multiple"
  ],
  "monitoimikone": [
    "food processor"
  ],
  "monta": [
    "many"
  ],
  "moottori": [
    "engine",
    "motor"
  ],
  "moottoripyörä": [
    "motorcycle"
  ],
  "moottoritie": [
    "highway",
    "motorway"
  ],
  "mopata": [
    "mop"
  ],
  "mopo": [
    "moped"
  ],
  "moppi": [
    "mop"
  ],
  "moraali": [
    "moral"
  ],
  "morsian": [
    "fiancée"
  ],
  "moskeija": [
    "mosque"
  ],
  "motelli": [
    "motel"
  ],
  "muinainen": [
    "ancient"
  ],
  "muistaa": [
    "remember"
  ],
  "muisti": [
    "memory"
  ],
  "muistiinpano": [
    "note"
  ],
  "muistikirja": [
    "notebook"
  ],
  "muistikortti": [
    "memory card"
  ],
  "muistio": [
    "memo"
  ],
  "muistitikku": [
    "flash drive"
  ],
  "muisto": [
    "memory"
  ],
  "muistomerkki": [
    "monument"
  ],
  "mukaan": [
    "according to"
  ],
  "mukava": [
    "nice"
  ],
  "muki": [
    "mug"
  ],
  "multa": [
    "soil"
  ],
  "mummo": [
    "grandmother"
  ],
  "munakoiso": [
    "eggplant"
  ],
  "munuainen": [
    "kidney"
  ],
  "muokata": [
    "edit"
  ],
  "muoto": [
    "form",
    "format",
    "shape"
  ],
  "muotoilija": [
    "designer"
  ],
  "muovi": [
    "plastic"
  ],
  "murot": [
    "cereal"
  ],
  "murtoluku": [
    "fraction"
  ],
  "murtuma": [
    "fracture"
  ],
  "museo": [
    "museum"
  ],
  "musiikki": [
    "music"
  ],
  "musta": [
    "black"
  ],
  "mustaherukka": [
    "blackcurrant"
  ],
  "mustapippuri": [
    "black pepper"
  ],
  "mustekala": [
    "octopus"
  ],
  "mustelma": [
    "bruise"
  ],
  "mustikka": [
    "bilberry",
    "blueberry"
  ],
  "muta": [
    "mud"
  ],
  "mutta": [
    "but"
  ],
  "mutteri": [
    "nut"
  ],
  "muu": [
    "else",
    "other"
  ],
  "muualla": [
    "elsewhere"
  ],
  "muuntua": [
    "transform"
  ],
  "muurahainen": [
    "ant"
  ],
  "muuri": [
    "wall"
  ],
  "muusikko": [
    "musician"
  ],
  "muutama": [
    "few"
  ],
  "muuten": [
    "by the way",
    "else"
  ],
  "muuttaa": [
    "change",
    "move",
    "transform"
  ],
  "muuttoliike": [
    "migration"
  ],
  "muuttua": [
    "become",
    "change"
  ],
  "muuttuja": [
    "variable"
  ],
  "myrsky": [
    "storm"
  ],
  "myrskyinen": [
    "stormy"
  ],
  "myrskytuuli": [
    "gale"
  ],
  "mysli": [
    "muesli"
  ],
  "myydä": [
    "sell"
  ],
  "myyjä": [
    "salesperson"
  ],
  "myymälä": [
    "shop",
    "store"
  ],
  "myynti": [
    "sale"
  ],
  "myyrä": [
    "mole"
  ],
  "myöhemmin": [
    "later"
  ],
  "myöhässä": [
    "late"
  ],
  "myöhään": [
    "late"
  ],
  "myös": [
    "also"
  ],
  "mänty": [
    "pine"
  ],
  "märkä": [
    "wet"
  ],
  "mäti": [
    "roe"
  ],
  "mäyrä": [
    "badger"
  ],
  "määritellä": [
    "define"
  ],
  "määritelmä": [
    "definition"
  ],
  "määritys": [
    "configuration"
  ],
  "määrä": [
    "amount",
    "quantity"
  ],
  "määräaika": [
    "deadline"
  ],
  "määränpää": [
    "destination"
  ],
  "määrätä": [
    "order",
    "set"
  ],
  "määräys": [
    "regulation"
  ],
  "mökki": [
    "cabin",
    "cottage"
  ],
  "naapuri": [
    "neighbor"
  ],
  "naapurusto": [
    "neighborhood"
  ],
  "nahka": [
    "leather"
  ],
  "nailon": [
    "nylon"
  ],
  "naimaton": [
    "single"
  ],
  "naimisissa": [
    "married"
  ],
  "nainen": [
    "woman"
  ],
  "nappi": [
    "button"
  ],
  "nappikuulokkeet": [
    "earphones"
  ],
  "napsauttaa": [
    "click"
  ],
  "naru": [
    "string"
  ],
  "naudan jauheliha": [
    "ground beef"
  ],
  "naudanliha": [
    "beef"
  ],
  "naula": [
    "nail"
  ],
  "nauraa": [
    "laugh"
  ],
  "nauris": [
    "turnip"
  ],
  "nauttia": [
    "enjoy"
  ],
  "ne": [
    "they",
    "those"
  ],
  "nektariini": [
    "nectarine"
  ],
  "neliö": [
    "square"
  ],
  "neljä": [
    "four"
  ],
  "neljäkymmentä": [
    "forty"
  ],
  "neljännes": [
    "quarter"
  ],
  "neljätoista": [
    "fourteen"
  ],
  "nenä": [
    "nose"
  ],
  "neula": [
    "needle"
  ],
  "neule": [
    "sweater"
  ],
  "neuloa": [
    "knit"
  ],
  "neuvo": [
    "advice"
  ],
  "neuvottelu": [
    "conference",
    "negotiation"
  ],
  "niemi": [
    "cape"
  ],
  "niemimaa": [
    "peninsula"
  ],
  "Nigeria": [
    "Nigeria",
    "nigeria"
  ],
  "niiden": [
    "their"
  ],
  "niin": [
    "so"
  ],
  "niitty": [
    "meadow"
  ],
  "nilkka": [
    "ankle"
  ],
  "nimi": [
    "name"
  ],
  "nimike": [
    "title"
  ],
  "nisäkäs": [
    "mammal"
  ],
  "nivel": [
    "joint"
  ],
  "noin": [
    "about",
    "approximately",
    "around"
  ],
  "nojatuoli": [
    "armchair"
  ],
  "nokkela": [
    "clever"
  ],
  "nolla": [
    "zero"
  ],
  "nopea": [
    "fast",
    "quick",
    "rapid"
  ],
  "nopeasti": [
    "quickly"
  ],
  "nopeus": [
    "speed"
  ],
  "nopeusrajoitus": [
    "speed limit"
  ],
  "Norja": [
    "Norway",
    "norway"
  ],
  "norja": [
    "Norwegian",
    "norwegian"
  ],
  "norjalainen": [
    "Norwegian",
    "norwegian"
  ],
  "normaali": [
    "normal"
  ],
  "norsu": [
    "elephant"
  ],
  "nostaa": [
    "lift",
    "raise"
  ],
  "nousta": [
    "rise"
  ],
  "noutaa": [
    "pick up"
  ],
  "nuha": [
    "cold"
  ],
  "nukkua": [
    "sleep"
  ],
  "nukkumassa": [
    "asleep"
  ],
  "numero": [
    "digit",
    "figure",
    "number"
  ],
  "nuo": [
    "those"
  ],
  "nuori": [
    "young"
  ],
  "nurkka": [
    "corner"
  ],
  "nurmikko": [
    "lawn"
  ],
  "nuudeli": [
    "noodle"
  ],
  "nuudelit": [
    "noodles"
  ],
  "nykyaikainen": [
    "modern"
  ],
  "nykyään": [
    "nowadays"
  ],
  "nyt": [
    "now"
  ],
  "nyökätä": [
    "nod"
  ],
  "nähdä": [
    "see"
  ],
  "nähdään": [
    "see you"
  ],
  "nähdään myöhemmin": [
    "see you later"
  ],
  "näkemiin": [
    "goodbye"
  ],
  "nälkäinen": [
    "hungry"
  ],
  "nämä": [
    "these"
  ],
  "näppäimistö": [
    "keyboard"
  ],
  "nätti": [
    "pretty"
  ],
  "näyte": [
    "sample"
  ],
  "näyttelijä": [
    "actor",
    "actress"
  ],
  "näyttää": [
    "look",
    "show"
  ],
  "näyttö": [
    "evidence",
    "monitor",
    "screen"
  ],
  "näytös": [
    "show"
  ],
  "näätä": [
    "marten",
    "weasel"
  ],
  "odottaa": [
    "wait"
  ],
  "ohittaa": [
    "pass",
    "skip"
  ],
  "ohjata": [
    "control"
  ],
  "ohjauspyörä": [
    "steering wheel"
  ],
  "ohje": [
    "direction",
    "instruction"
  ],
  "ohjelma": [
    "program"
  ],
  "ohjelmakirjasto": [
    "library software"
  ],
  "ohjelmisto": [
    "software"
  ],
  "ohjelmoija": [
    "programmer"
  ],
  "ohjelmointi": [
    "programming"
  ],
  "ohra": [
    "barley"
  ],
  "ohut": [
    "thin"
  ],
  "oikea": [
    "correct",
    "right"
  ],
  "oikein": [
    "correctly"
  ],
  "oikeinkirjoitus": [
    "spelling"
  ],
  "oikeudenkäynti": [
    "trial"
  ],
  "oikeudenmukainen": [
    "fair"
  ],
  "oikeudenmukaisuus": [
    "equity",
    "justice"
  ],
  "oikeudet": [
    "rights"
  ],
  "oikeus": [
    "justice",
    "permission",
    "right"
  ],
  "oikeustalo": [
    "courthouse"
  ],
  "oikeustiede": [
    "law"
  ],
  "oikolukea": [
    "proofread"
  ],
  "oire": [
    "symptom"
  ],
  "okei": [
    "okay"
  ],
  "oksa": [
    "branch"
  ],
  "ole hyvä": [
    "please",
    "you are welcome"
  ],
  "oleskella": [
    "stay"
  ],
  "olettaa": [
    "assume",
    "suppose"
  ],
  "oli tapana": [
    "used to"
  ],
  "oliivi": [
    "olive"
  ],
  "oliiviöljy": [
    "olive oil"
  ],
  "olio": [
    "object"
  ],
  "olisi": [
    "would"
  ],
  "olkapää": [
    "shoulder"
  ],
  "olla": [
    "be",
    "have"
  ],
  "olla eri mieltä": [
    "disagree"
  ],
  "olla lähellä": [
    "close"
  ],
  "olla olemassa": [
    "exist"
  ],
  "olla pitämättä": [
    "dislike"
  ],
  "olla samaa mieltä": [
    "agree"
  ],
  "olla velkaa": [
    "owe"
  ],
  "olohuone": [
    "living room"
  ],
  "olut": [
    "beer"
  ],
  "omatunto": [
    "conscience"
  ],
  "omena": [
    "apple"
  ],
  "omenamehu": [
    "apple juice"
  ],
  "ominaisuus": [
    "attribute",
    "feature",
    "property"
  ],
  "omistaa": [
    "have"
  ],
  "omituinen": [
    "weird"
  ],
  "ommella": [
    "sew"
  ],
  "ompelukone": [
    "sewing machine"
  ],
  "ongelma": [
    "issue",
    "problem"
  ],
  "onneksi": [
    "fortunately"
  ],
  "onnellinen": [
    "happy"
  ],
  "onnellisuus": [
    "happiness"
  ],
  "onnistua": [
    "succeed"
  ],
  "onnistuminen": [
    "success"
  ],
  "onnittelut": [
    "congratulations"
  ],
  "opas": [
    "manual"
  ],
  "opettaa": [
    "teach"
  ],
  "opettaja": [
    "teacher"
  ],
  "opiskelija": [
    "student"
  ],
  "opiskella": [
    "study"
  ],
  "opisto": [
    "college"
  ],
  "oppia": [
    "learn"
  ],
  "oppiaine": [
    "subject"
  ],
  "oppikirja": [
    "textbook"
  ],
  "oppilas": [
    "pupil",
    "student"
  ],
  "oppitunti": [
    "class",
    "lesson"
  ],
  "oranssi": [
    "orange"
  ],
  "orava": [
    "squirrel"
  ],
  "oregano": [
    "oregano"
  ],
  "organisaatio": [
    "organisation",
    "organization"
  ],
  "orkidea": [
    "orchid"
  ],
  "orvokki": [
    "violet"
  ],
  "osa": [
    "fraction"
  ],
  "osaaminen": [
    "knowledge"
  ],
  "osake": [
    "stock"
  ],
  "osallistua": [
    "attend",
    "join",
    "participate"
  ],
  "osasto": [
    "department"
  ],
  "osata": [
    "can"
  ],
  "osavaltio": [
    "state"
  ],
  "osittain": [
    "partially",
    "partly"
  ],
  "osoite": [
    "address"
  ],
  "osoitin": [
    "cursor",
    "pointer"
  ],
  "osoittaa": [
    "point"
  ],
  "ostaa": [
    "buy",
    "purchase"
  ],
  "osto": [
    "purchase"
  ],
  "osua": [
    "hit"
  ],
  "osuus": [
    "proportion"
  ],
  "otos": [
    "sample"
  ],
  "otsa": [
    "forehead"
  ],
  "otsikko": [
    "title"
  ],
  "ottaa": [
    "take"
  ],
  "ottaa kiinni": [
    "catch"
  ],
  "ottaa yhteyttä": [
    "contact"
  ],
  "outo": [
    "strange",
    "weird"
  ],
  "ovi": [
    "door"
  ],
  "oviaukko": [
    "doorway"
  ],
  "ovikello": [
    "doorbell"
  ],
  "paahtaa": [
    "roast"
  ],
  "paahtaminen": [
    "roasting",
    "toast"
  ],
  "paahtoleipä": [
    "toast"
  ],
  "paeta": [
    "escape",
    "flee"
  ],
  "paha": [
    "bad"
  ],
  "pahoillaan": [
    "sorry"
  ],
  "pahvi": [
    "cardboard"
  ],
  "paikallinen": [
    "local"
  ],
  "painaa": [
    "press",
    "print"
  ],
  "paine": [
    "pressure"
  ],
  "painike": [
    "button"
  ],
  "paino": [
    "weight"
  ],
  "painotus": [
    "accent"
  ],
  "paistaa": [
    "bake",
    "fry"
  ],
  "paistaminen": [
    "frying"
  ],
  "paistinkastike": [
    "gravy"
  ],
  "paistinpannu": [
    "frying pan"
  ],
  "paita": [
    "shirt"
  ],
  "paitsi": [
    "except",
    "other than"
  ],
  "paju": [
    "willow"
  ],
  "pakara": [
    "buttock"
  ],
  "pakastin": [
    "freezer"
  ],
  "pakata": [
    "pack"
  ],
  "paketinhallinta": [
    "package manager"
  ],
  "paketti": [
    "packet",
    "parcel"
  ],
  "pakettiauto": [
    "van"
  ],
  "pakettitoimitus": [
    "package delivery"
  ],
  "pakkanen": [
    "frost"
  ],
  "pakkaus": [
    "package"
  ],
  "pakolainen": [
    "refugee"
  ],
  "paksu": [
    "thick"
  ],
  "palaa": [
    "burn"
  ],
  "palata": [
    "return"
  ],
  "palatsi": [
    "palace"
  ],
  "palaute": [
    "feedback"
  ],
  "palauttaa": [
    "restore",
    "return"
  ],
  "palautus": [
    "recovery"
  ],
  "palautuskäytäntö": [
    "return policy"
  ],
  "paljon": [
    "much"
  ],
  "palkata": [
    "employ",
    "hire"
  ],
  "palkka": [
    "salary",
    "wage"
  ],
  "pallo": [
    "sphere"
  ],
  "palmu": [
    "palm"
  ],
  "paloasema": [
    "fire station"
  ],
  "palomies": [
    "firefighter"
  ],
  "palovamma": [
    "burn"
  ],
  "palovaroitin": [
    "smoke detector"
  ],
  "paluuarvo": [
    "return value"
  ],
  "palvelimelle lataus": [
    "upload"
  ],
  "palvelin": [
    "server"
  ],
  "palvelu": [
    "service"
  ],
  "panda": [
    "panda"
  ],
  "paneeli": [
    "panel"
  ],
  "pankki": [
    "bank"
  ],
  "pankkiautomaatti": [
    "ATM",
    "atm",
    "cash machine"
  ],
  "pankkiiri": [
    "banker"
  ],
  "pankkikortti": [
    "debit card"
  ],
  "panna": [
    "put"
  ],
  "pannu": [
    "pan"
  ],
  "pantteri": [
    "panther"
  ],
  "papaija": [
    "papaya"
  ],
  "paperi": [
    "paper"
  ],
  "paperityö": [
    "paperwork"
  ],
  "pappi": [
    "priest"
  ],
  "paprika": [
    "bell pepper",
    "paprika"
  ],
  "papu": [
    "bean"
  ],
  "papukaija": [
    "parrot"
  ],
  "parametri": [
    "parameter"
  ],
  "parantaa": [
    "improve"
  ],
  "parantua": [
    "improve"
  ],
  "paras": [
    "best"
  ],
  "parempi": [
    "better"
  ],
  "pari": [
    "pair"
  ],
  "paristo": [
    "battery"
  ],
  "parkkihalli": [
    "parking garage"
  ],
  "parlamentti": [
    "parliament"
  ],
  "parsa": [
    "asparagus"
  ],
  "parsakaali": [
    "broccoli"
  ],
  "parta": [
    "beard"
  ],
  "partakone": [
    "razor"
  ],
  "partaterä": [
    "razor"
  ],
  "partavaahto": [
    "shaving cream"
  ],
  "parveke": [
    "balcony"
  ],
  "passi": [
    "passport"
  ],
  "pasta": [
    "pasta"
  ],
  "pastori": [
    "pastor"
  ],
  "pata": [
    "stew"
  ],
  "patja": [
    "mattress"
  ],
  "patsas": [
    "statue"
  ],
  "pauna": [
    "pound"
  ],
  "pehmeä": [
    "soft"
  ],
  "peili": [
    "mirror"
  ],
  "peitto": [
    "blanket",
    "duvet",
    "quilt"
  ],
  "pekoni": [
    "bacon"
  ],
  "pelastaa": [
    "rescue",
    "save"
  ],
  "pelastaja": [
    "firefighter"
  ],
  "pelata": [
    "play"
  ],
  "pelko": [
    "fear"
  ],
  "pelkurimainen": [
    "cowardly"
  ],
  "pellava": [
    "linen"
  ],
  "pelto": [
    "field"
  ],
  "pelätä": [
    "fear"
  ],
  "penkki": [
    "bench"
  ],
  "pensas": [
    "bush",
    "shrub"
  ],
  "perhe": [
    "family"
  ],
  "perhonen": [
    "butterfly",
    "moth"
  ],
  "periaate": [
    "principle"
  ],
  "perinne": [
    "custom",
    "tradition"
  ],
  "perjantai": [
    "friday"
  ],
  "persikka": [
    "peach"
  ],
  "persilja": [
    "parsley"
  ],
  "persoonallisuus": [
    "personality"
  ],
  "Peru": [
    "Peru",
    "peru"
  ],
  "peruna": [
    "potato"
  ],
  "perus-": [
    "basic"
  ],
  "perustava": [
    "basic"
  ],
  "peruste": [
    "argument"
  ],
  "perustuslaki": [
    "constitution"
  ],
  "peruuttaa": [
    "cancel"
  ],
  "peruuttaa tilaus": [
    "unsubscribe"
  ],
  "peruutus": [
    "cancellation"
  ],
  "pestä": [
    "wash"
  ],
  "pesuaine": [
    "detergent"
  ],
  "pesuallas": [
    "sink"
  ],
  "pesujauhe": [
    "washing powder"
  ],
  "pesukone": [
    "washing machine"
  ],
  "peukalo": [
    "thumb"
  ],
  "peura": [
    "deer"
  ],
  "pian": [
    "soon"
  ],
  "piano": [
    "piano"
  ],
  "pidellä": [
    "hold"
  ],
  "pidätys": [
    "arrest"
  ],
  "pieni": [
    "small"
  ],
  "pienoisohjelma": [
    "widget"
  ],
  "piha": [
    "patio",
    "yard"
  ],
  "pihdit": [
    "pliers"
  ],
  "pihlaja": [
    "rowan"
  ],
  "pihvi": [
    "steak"
  ],
  "piilolinssi": [
    "contact lens"
  ],
  "piilottaa": [
    "hide"
  ],
  "piiloutua": [
    "hide"
  ],
  "piirikunta": [
    "county"
  ],
  "piirtää": [
    "draw"
  ],
  "pika-": [
    "express"
  ],
  "pikajuna": [
    "express"
  ],
  "pikemminkin": [
    "rather"
  ],
  "pikkubussi": [
    "minibus"
  ],
  "pikkukivi": [
    "pebble"
  ],
  "pikkuruinen": [
    "tiny"
  ],
  "pilkkoa": [
    "chop"
  ],
  "pilkku": [
    "comma"
  ],
  "pilleri": [
    "pill"
  ],
  "pilvenpiirtäjä": [
    "skyscraper"
  ],
  "pilvi": [
    "cloud"
  ],
  "pilvinen": [
    "cloudy"
  ],
  "pimeä": [
    "dark"
  ],
  "pinaatti": [
    "spinach"
  ],
  "pingviini": [
    "penguin"
  ],
  "pinta": [
    "surface"
  ],
  "pinta-ala": [
    "area"
  ],
  "pipo": [
    "beanie"
  ],
  "pippuri": [
    "pepper"
  ],
  "pisara": [
    "drop"
  ],
  "pistaasi": [
    "pistachio"
  ],
  "piste": [
    "full stop",
    "period"
  ],
  "pistemäärä": [
    "score"
  ],
  "pistoke": [
    "plug"
  ],
  "pistorasia": [
    "power outlet",
    "socket"
  ],
  "pistos": [
    "injection"
  ],
  "pitkin": [
    "along"
  ],
  "pitkä": [
    "long",
    "tall"
  ],
  "pituus": [
    "length"
  ],
  "pitäisi": [
    "ought",
    "ought to",
    "should"
  ],
  "pitää": [
    "have to",
    "keep",
    "like",
    "must",
    "need to"
  ],
  "pitää jonakin": [
    "consider"
  ],
  "pitää kiinni": [
    "hold"
  ],
  "pitää parempana": [
    "prefer"
  ],
  "pitää päällä": [
    "wear"
  ],
  "pitää tauko": [
    "pause"
  ],
  "pizza": [
    "pizza"
  ],
  "planeetta": [
    "planet"
  ],
  "plus": [
    "plus"
  ],
  "pohjoinen": [
    "north"
  ],
  "pohtia": [
    "wonder"
  ],
  "poika": [
    "boy",
    "son"
  ],
  "poikaystävä": [
    "boyfriend"
  ],
  "poikkeus": [
    "exception"
  ],
  "poikki": [
    "across"
  ],
  "poimia": [
    "pick",
    "pick up"
  ],
  "poistaa": [
    "remove"
  ],
  "poistua": [
    "exit"
  ],
  "pojanpoika": [
    "grandson"
  ],
  "pojantytär": [
    "granddaughter"
  ],
  "poliisi": [
    "police",
    "police officer"
  ],
  "poliisiasema": [
    "police station"
  ],
  "poliitikko": [
    "politician"
  ],
  "politiikka": [
    "policy",
    "politics"
  ],
  "poljin": [
    "pedal"
  ],
  "polku": [
    "path",
    "trail"
  ],
  "polkupyörä": [
    "bicycle",
    "bike"
  ],
  "polttaa": [
    "burn"
  ],
  "polttoaine": [
    "fuel"
  ],
  "polvi": [
    "knee"
  ],
  "polvistua": [
    "kneel"
  ],
  "polyesteri": [
    "polyester"
  ],
  "pomo": [
    "boss"
  ],
  "poni": [
    "pony"
  ],
  "pora": [
    "drill"
  ],
  "porakone": [
    "drill"
  ],
  "porkkana": [
    "carrot"
  ],
  "pormestari": [
    "mayor"
  ],
  "poro": [
    "reindeer"
  ],
  "porras": [
    "step"
  ],
  "porsas": [
    "piglet"
  ],
  "portaat": [
    "stairs"
  ],
  "portaikko": [
    "staircase"
  ],
  "portti": [
    "gate"
  ],
  "Portugali": [
    "portugal",
    "Portugal"
  ],
  "portugali": [
    "portuguese",
    "Portuguese"
  ],
  "portugalilainen": [
    "portuguese",
    "Portuguese"
  ],
  "poski": [
    "cheek"
  ],
  "posliini": [
    "porcelain"
  ],
  "posti": [
    "mail",
    "post",
    "post office"
  ],
  "postinumero": [
    "postal code",
    "zip code"
  ],
  "potilas": [
    "patient"
  ],
  "potkaista": [
    "kick"
  ],
  "potkulauta": [
    "scooter board"
  ],
  "presidentti": [
    "president"
  ],
  "prinsessa": [
    "princess"
  ],
  "prinssi": [
    "prince"
  ],
  "prioriteetti": [
    "priority"
  ],
  "professori": [
    "professor"
  ],
  "profiili": [
    "profile"
  ],
  "projekti": [
    "project"
  ],
  "pronssi": [
    "bronze"
  ],
  "prosentti": [
    "percent"
  ],
  "prosenttiosuus": [
    "percentage"
  ],
  "prosessi": [
    "process"
  ],
  "psykologi": [
    "psychologist"
  ],
  "psykologia": [
    "psychology"
  ],
  "pudota": [
    "fall"
  ],
  "pudottaa": [
    "drop"
  ],
  "pudotus": [
    "drop"
  ],
  "puhdas": [
    "clean"
  ],
  "puhdistaa": [
    "clean"
  ],
  "puhdistusaine": [
    "cleaning agent"
  ],
  "puhe": [
    "speech"
  ],
  "puhelin": [
    "phone"
  ],
  "puhua": [
    "speak",
    "talk"
  ],
  "puhuja": [
    "speaker"
  ],
  "puinen": [
    "wooden"
  ],
  "puisto": [
    "park"
  ],
  "puistokatu": [
    "avenue"
  ],
  "pukea päälle": [
    "put on"
  ],
  "pukeutua": [
    "get dressed"
  ],
  "pukeutuminen": [
    "dress"
  ],
  "puku": [
    "suit"
  ],
  "pula": [
    "shortage"
  ],
  "pulla": [
    "bun"
  ],
  "pullo": [
    "bottle"
  ],
  "pultti": [
    "bolt"
  ],
  "punaherukka": [
    "redcurrant"
  ],
  "punainen": [
    "red"
  ],
  "punajuuri": [
    "beetroot"
  ],
  "punakaali": [
    "red cabbage"
  ],
  "punaviini": [
    "red wine"
  ],
  "punnita": [
    "weigh"
  ],
  "Puola": [
    "poland",
    "Poland"
  ],
  "puola": [
    "Polish"
  ],
  "puolalainen": [
    "Polish"
  ],
  "puolesta": [
    "for",
    "on behalf of"
  ],
  "puoli": [
    "half",
    "side"
  ],
  "puolipiste": [
    "semicolon"
  ],
  "puoliso": [
    "spouse"
  ],
  "puolue": [
    "party",
    "political party"
  ],
  "puolukka": [
    "lingonberry"
  ],
  "puolustaa": [
    "defend"
  ],
  "purjehtia": [
    "sail"
  ],
  "purjelentokone": [
    "glider"
  ],
  "purjevene": [
    "sailboat"
  ],
  "purjo": [
    "leek"
  ],
  "purkaa": [
    "demolish"
  ],
  "purkaa pakkauksesta": [
    "unpack"
  ],
  "purkki": [
    "jar"
  ],
  "puro": [
    "stream"
  ],
  "purppura": [
    "purple"
  ],
  "pusero": [
    "blouse"
  ],
  "puskuri": [
    "buffer"
  ],
  "pussi": [
    "bag"
  ],
  "putki": [
    "pipe"
  ],
  "putkimies": [
    "plumber"
  ],
  "putoaminen": [
    "fall"
  ],
  "puu": [
    "tree",
    "wood"
  ],
  "puuro": [
    "porridge"
  ],
  "puuseppä": [
    "carpenter"
  ],
  "puutarha": [
    "garden"
  ],
  "puutavara": [
    "wood"
  ],
  "puuvilla": [
    "cotton"
  ],
  "pyjama": [
    "pajamas"
  ],
  "pystyisi": [
    "could"
  ],
  "pystyä": [
    "be able to",
    "can"
  ],
  "pysäköinti": [
    "parking"
  ],
  "pysäköintialue": [
    "parking lot"
  ],
  "pysäyttää": [
    "stop"
  ],
  "pyyhe": [
    "towel"
  ],
  "pyyhkiä": [
    "wipe"
  ],
  "pyyhkäistä": [
    "swipe"
  ],
  "pyykki": [
    "laundry"
  ],
  "pyytää": [
    "ask"
  ],
  "pyytää anteeksi": [
    "apologize"
  ],
  "pyörittää": [
    "spin"
  ],
  "pyöriä": [
    "rotate",
    "spin"
  ],
  "pyörremyrsky": [
    "tornado"
  ],
  "pyörä": [
    "bike",
    "wheel"
  ],
  "pyöräillä": [
    "cycle"
  ],
  "pyörätuoli": [
    "wheelchair"
  ],
  "pähkinä": [
    "nut"
  ],
  "päivittää": [
    "upgrade"
  ],
  "päivitys": [
    "update",
    "upgrade"
  ],
  "päivystys": [
    "emergency"
  ],
  "päivä": [
    "day"
  ],
  "päivähoito": [
    "daycare"
  ],
  "päiväkirja": [
    "journal"
  ],
  "päiväkoti": [
    "daycare",
    "kindergarten"
  ],
  "päivällinen": [
    "dinner"
  ],
  "päivämäärä": [
    "date"
  ],
  "päivänkakkara": [
    "daisy"
  ],
  "pässi": [
    "ram"
  ],
  "pätevyys": [
    "qualification"
  ],
  "pää": [
    "head"
  ],
  "pääasiallinen": [
    "main"
  ],
  "pääasiassa": [
    "mainly"
  ],
  "pääkaupunki": [
    "capital",
    "capital city"
  ],
  "päälle": [
    "onto"
  ],
  "päällikkö": [
    "manager"
  ],
  "päällystakki": [
    "coat"
  ],
  "päällyste": [
    "pavement"
  ],
  "päällä": [
    "on"
  ],
  "pääministeri": [
    "prime minister"
  ],
  "päänahka": [
    "scalp"
  ],
  "päänsärky": [
    "headache"
  ],
  "pääoma": [
    "capital"
  ],
  "pääruoka": [
    "main course"
  ],
  "päärynä": [
    "pear"
  ],
  "pääsiäinen": [
    "Easter",
    "easter"
  ],
  "pääsy": [
    "access"
  ],
  "päättyä": [
    "end"
  ],
  "päättää": [
    "decide"
  ],
  "pöllö": [
    "owl"
  ],
  "pöly": [
    "dust"
  ],
  "pölynimuri": [
    "vacuum cleaner"
  ],
  "pöytä": [
    "table"
  ],
  "pöytäkirja": [
    "minutes"
  ],
  "pöytäliina": [
    "tablecloth"
  ],
  "pöytätietokone": [
    "desktop computer"
  ],
  "raahata": [
    "drag"
  ],
  "raaka": [
    "raw"
  ],
  "raaka-aine": [
    "ingredient"
  ],
  "raastaa": [
    "grate"
  ],
  "radio": [
    "radio"
  ],
  "rae": [
    "hail"
  ],
  "raejuusto": [
    "cottage cheese"
  ],
  "raekuuro": [
    "hail"
  ],
  "raha": [
    "money"
  ],
  "rahanpalautus": [
    "refund"
  ],
  "rahka": [
    "quark"
  ],
  "rahoitus": [
    "finance"
  ],
  "raitiovaunu": [
    "tram"
  ],
  "raivoissaan": [
    "furious"
  ],
  "raja": [
    "border"
  ],
  "rajapinta": [
    "interface"
  ],
  "rajoitus": [
    "limitation",
    "restriction"
  ],
  "rakastaa": [
    "love"
  ],
  "rakastan sinua": [
    "I love you",
    "i love you"
  ],
  "rakenne": [
    "structure"
  ],
  "rakennus": [
    "building"
  ],
  "rakennusala": [
    "construction"
  ],
  "rakennustyömaa": [
    "construction site"
  ],
  "rakentaa": [
    "build",
    "construct"
  ],
  "rakentaja": [
    "builder"
  ],
  "rakentaminen": [
    "construction"
  ],
  "raketti": [
    "rocket"
  ],
  "rakkaus": [
    "love"
  ],
  "rangaista": [
    "punish"
  ],
  "rangaistus": [
    "punishment"
  ],
  "ranne": [
    "wrist"
  ],
  "rannekello": [
    "watch"
  ],
  "rannekoru": [
    "bracelet"
  ],
  "rannikko": [
    "coast"
  ],
  "Ranska": [
    "france",
    "France"
  ],
  "ranska": [
    "french",
    "French"
  ],
  "ranskalainen": [
    "french",
    "French"
  ],
  "ranta": [
    "beach",
    "shore"
  ],
  "rantalomakohde": [
    "beach resort"
  ],
  "raportoida": [
    "report"
  ],
  "raportti": [
    "report"
  ],
  "rapu": [
    "crab",
    "crayfish"
  ],
  "raskaana": [
    "pregnant"
  ],
  "raskas": [
    "heavy"
  ],
  "raskaus": [
    "pregnancy"
  ],
  "ratkaista": [
    "solve"
  ],
  "ratkaisu": [
    "solution"
  ],
  "ratsastaa": [
    "ride"
  ],
  "rauha": [
    "peace"
  ],
  "rauhallinen": [
    "calm"
  ],
  "rauta": [
    "iron"
  ],
  "rautakauppa": [
    "hardware store"
  ],
  "rautatieasema": [
    "railway station",
    "train station"
  ],
  "ravintola": [
    "restaurant"
  ],
  "ravistaa": [
    "shake"
  ],
  "rehellinen": [
    "honest"
  ],
  "reilu": [
    "fair"
  ],
  "reisi": [
    "thigh"
  ],
  "reititin": [
    "router"
  ],
  "reitti": [
    "route",
    "trail"
  ],
  "rekisteröityä": [
    "register"
  ],
  "rengas": [
    "ring",
    "tire",
    "tyre"
  ],
  "rento": [
    "relaxed"
  ],
  "rentoutua": [
    "relax"
  ],
  "repiä": [
    "tear"
  ],
  "reportteri": [
    "reporter"
  ],
  "reppu": [
    "backpack"
  ],
  "resepti": [
    "prescription",
    "recipe"
  ],
  "retiisi": [
    "radish"
  ],
  "retki": [
    "trip"
  ],
  "reuna": [
    "edge"
  ],
  "revontulet": [
    "aurora"
  ],
  "riisi": [
    "rice"
  ],
  "riisua": [
    "undress"
  ],
  "riisuutua": [
    "undress"
  ],
  "riittävästi": [
    "enough"
  ],
  "rikas": [
    "rich"
  ],
  "rikkalapio": [
    "dustpan"
  ],
  "rikkaruoho": [
    "weed"
  ],
  "rikkoa": [
    "break",
    "violate"
  ],
  "rikollinen": [
    "criminal"
  ],
  "rikos": [
    "crime"
  ],
  "rinta": [
    "breast",
    "chest"
  ],
  "rintakoru": [
    "brooch"
  ],
  "rintaliivit": [
    "bra"
  ],
  "ripeä": [
    "rapid"
  ],
  "ripsiväri": [
    "mascara"
  ],
  "riski": [
    "risk"
  ],
  "riskialtis": [
    "risky"
  ],
  "risteily": [
    "cruise"
  ],
  "risteys": [
    "intersection"
  ],
  "ristiriita": [
    "conflict"
  ],
  "rivi": [
    "row"
  ],
  "rivinvaihto": [
    "newline"
  ],
  "rohkea": [
    "brave"
  ],
  "rohkeus": [
    "courage"
  ],
  "rokote": [
    "vaccine"
  ],
  "rokotus": [
    "vaccination"
  ],
  "romaani": [
    "novel"
  ],
  "rooli": [
    "role"
  ],
  "roskakori": [
    "bin",
    "trash can"
  ],
  "roskaposti": [
    "spam"
  ],
  "roskat": [
    "garbage",
    "rubbish",
    "trash"
  ],
  "rosmariini": [
    "rosemary"
  ],
  "rotta": [
    "rat"
  ],
  "ruis": [
    "rye"
  ],
  "rulla": [
    "roll"
  ],
  "rullalauta": [
    "skateboard"
  ],
  "ruma": [
    "ugly"
  ],
  "rumpu": [
    "drum"
  ],
  "runko": [
    "trunk"
  ],
  "runo": [
    "poem"
  ],
  "runous": [
    "poetry"
  ],
  "ruoho": [
    "grass"
  ],
  "ruoka": [
    "food"
  ],
  "ruoka-allergia": [
    "food allergy"
  ],
  "ruokakauppa": [
    "grocery store",
    "supermarket"
  ],
  "ruokala": [
    "cafeteria"
  ],
  "ruokalaji": [
    "dish"
  ],
  "ruokalista": [
    "menu"
  ],
  "ruokapöytä": [
    "dining table"
  ],
  "ruotsalainen": [
    "swedish",
    "Swedish"
  ],
  "Ruotsi": [
    "Sweden",
    "sweden"
  ],
  "ruotsi": [
    "swedish",
    "Swedish"
  ],
  "rupikonna": [
    "toad"
  ],
  "rusetti": [
    "bow tie"
  ],
  "rusina": [
    "raisin"
  ],
  "ruskea": [
    "brown"
  ],
  "ruukku": [
    "pot"
  ],
  "ruusu": [
    "rose"
  ],
  "ruuvi": [
    "screw"
  ],
  "ruuvimeisseli": [
    "screwdriver"
  ],
  "ryhmä": [
    "group"
  ],
  "rytmi": [
    "rhythm"
  ],
  "ryömiä": [
    "crawl"
  ],
  "ryöstää": [
    "rob"
  ],
  "räpäyttää silmiä": [
    "blink"
  ],
  "saada": [
    "get",
    "receive"
  ],
  "saapas": [
    "boot"
  ],
  "saapua": [
    "arrive"
  ],
  "saapuminen": [
    "arrival"
  ],
  "saapuneet": [
    "inbox"
  ],
  "saari": [
    "island"
  ],
  "saastainen": [
    "filthy"
  ],
  "saatavilla": [
    "available"
  ],
  "saatavuus": [
    "availability"
  ],
  "saatekirje": [
    "cover letter"
  ],
  "saattaa": [
    "may",
    "might"
  ],
  "saavutettavuus": [
    "accessibility"
  ],
  "saavuttaa": [
    "achieve",
    "reach"
  ],
  "sade": [
    "rain"
  ],
  "sademetsä": [
    "rainforest"
  ],
  "sademäärä": [
    "rainfall"
  ],
  "sadetakki": [
    "raincoat"
  ],
  "saha": [
    "saw"
  ],
  "saippua": [
    "soap"
  ],
  "sairaala": [
    "hospital"
  ],
  "sairaanhoitaja": [
    "nurse"
  ],
  "sairas": [
    "ill",
    "sick"
  ],
  "sairaus": [
    "disease",
    "illness"
  ],
  "sakko": [
    "fine"
  ],
  "saksa": [
    "german",
    "German"
  ],
  "Saksa": [
    "Germany",
    "germany"
  ],
  "saksalainen": [
    "german",
    "German"
  ],
  "saksanhirvi": [
    "red deer"
  ],
  "saksanpähkinä": [
    "walnut"
  ],
  "sakset": [
    "scissors"
  ],
  "salaatinkastike": [
    "dressing"
  ],
  "salaatti": [
    "lettuce",
    "salad"
  ],
  "salama": [
    "lightning"
  ],
  "salasana": [
    "password"
  ],
  "sali": [
    "hall"
  ],
  "sallia": [
    "allow",
    "let",
    "permit"
  ],
  "salmi": [
    "strait"
  ],
  "sama": [
    "same"
  ],
  "samalla kun": [
    "while"
  ],
  "sammakko": [
    "frog"
  ],
  "sammakkoeläin": [
    "amphibian"
  ],
  "sammal": [
    "moss"
  ],
  "sammutin": [
    "fire extinguisher"
  ],
  "sammuttaa": [
    "extinguish"
  ],
  "samoin kuin": [
    "as well as"
  ],
  "sana": [
    "word"
  ],
  "sanakirja": [
    "dictionary"
  ],
  "sanasto": [
    "vocab",
    "vocabulary"
  ],
  "sandaali": [
    "sandal"
  ],
  "saniainen": [
    "fern"
  ],
  "sanoa": [
    "say"
  ],
  "sanomalehti": [
    "newspaper"
  ],
  "sarake": [
    "column"
  ],
  "sarja": [
    "series"
  ],
  "sarjakuva": [
    "comic"
  ],
  "sarjakuvalehti": [
    "comic book"
  ],
  "sarvikuono": [
    "rhinoceros"
  ],
  "sata": [
    "hundred"
  ],
  "satama": [
    "harbor",
    "harbour",
    "port"
  ],
  "sateenkaari": [
    "rainbow"
  ],
  "sateenvarjo": [
    "umbrella"
  ],
  "sateinen": [
    "rainy"
  ],
  "satelliitti": [
    "satellite"
  ],
  "sattuma": [
    "chance"
  ],
  "satuttaa": [
    "hurt"
  ],
  "Saudi-Arabia": [
    "saudi arabia",
    "Saudi Arabia"
  ],
  "saukko": [
    "otter"
  ],
  "sauna": [
    "sauna"
  ],
  "savi": [
    "clay"
  ],
  "savu": [
    "smoke"
  ],
  "savupiippu": [
    "chimney"
  ],
  "se": [
    "it",
    "that"
  ],
  "seepra": [
    "zebra"
  ],
  "seesami": [
    "sesame"
  ],
  "seikkailla": [
    "explore"
  ],
  "seinä": [
    "wall"
  ],
  "seisoa": [
    "stand"
  ],
  "seitsemän": [
    "seven"
  ],
  "seitsemänkymmentä": [
    "seventy"
  ],
  "seitsemäntoista": [
    "seventeen"
  ],
  "sekoitin": [
    "mixer"
  ],
  "sekoittaa": [
    "blend",
    "mix",
    "stir"
  ],
  "sekunti": [
    "second"
  ],
  "sekä": [
    "as well as"
  ],
  "selain": [
    "browser"
  ],
  "selainvälilehti": [
    "browser tab"
  ],
  "selata": [
    "browse"
  ],
  "selittää": [
    "explain"
  ],
  "selkeä": [
    "clear"
  ],
  "selkeä taivas": [
    "clear sky"
  ],
  "selkä": [
    "back"
  ],
  "selleri": [
    "celery"
  ],
  "sello": [
    "cello"
  ],
  "selviytyä": [
    "survive"
  ],
  "selvä": [
    "all right",
    "okay"
  ],
  "selvästi": [
    "clearly"
  ],
  "sen": [
    "its"
  ],
  "sen sijaan": [
    "instead"
  ],
  "sen vuoksi": [
    "therefore"
  ],
  "senttimetri": [
    "centimeter"
  ],
  "serkku": [
    "cousin"
  ],
  "sertifiointi": [
    "certification"
  ],
  "seteli": [
    "banknote"
  ],
  "setä": [
    "uncle"
  ],
  "setä- tai enon vaimo": [
    "aunt"
  ],
  "seuraava": [
    "next"
  ],
  "seuranta": [
    "monitoring"
  ],
  "seurata": [
    "follow",
    "watch"
  ],
  "seurata käyttäjätiliä": [
    "follow account"
  ],
  "seutu": [
    "region"
  ],
  "shampoo": [
    "shampoo"
  ],
  "shortsit": [
    "shorts"
  ],
  "sianliha": [
    "pork"
  ],
  "side": [
    "bandage"
  ],
  "sideharso": [
    "bandage roll"
  ],
  "siellä": [
    "there"
  ],
  "siemen": [
    "seed"
  ],
  "siemenöljy": [
    "seed oil"
  ],
  "sieni": [
    "fungus",
    "mushroom",
    "sponge"
  ],
  "signaali": [
    "signal"
  ],
  "sihteeri": [
    "secretary"
  ],
  "siideri": [
    "cider"
  ],
  "siili": [
    "hedgehog"
  ],
  "siipikarja": [
    "poultry"
  ],
  "siirappi": [
    "syrup"
  ],
  "siirto": [
    "migration",
    "transfer"
  ],
  "siitä lähtien": [
    "since"
  ],
  "siivota": [
    "clean"
  ],
  "sijasta": [
    "instead of"
  ],
  "sijoittaa": [
    "invest"
  ],
  "sijoitus": [
    "ranking"
  ],
  "sika": [
    "pig"
  ],
  "siksi": [
    "therefore"
  ],
  "silakka": [
    "herring"
  ],
  "sileä": [
    "smooth"
  ],
  "silittää": [
    "iron"
  ],
  "silityslauta": [
    "ironing board"
  ],
  "silitysrauta": [
    "iron"
  ],
  "silkki": [
    "silk"
  ],
  "silli": [
    "herring"
  ],
  "silmä": [
    "eye"
  ],
  "silmälasit": [
    "glasses"
  ],
  "silmäripsi": [
    "eyelash"
  ],
  "silta": [
    "bridge"
  ],
  "silti": [
    "yet"
  ],
  "simpanssi": [
    "chimpanzee"
  ],
  "sinappi": [
    "mustard"
  ],
  "sininen": [
    "blue"
  ],
  "sinun": [
    "your",
    "yours"
  ],
  "sinä": [
    "you"
  ],
  "sinä itse": [
    "yourself"
  ],
  "sipuli": [
    "onion"
  ],
  "siru": [
    "chip"
  ],
  "sisar": [
    "sister"
  ],
  "sisarenpoika": [
    "nephew"
  ],
  "sisarentytär": [
    "niece"
  ],
  "sisarus": [
    "sibling"
  ],
  "sisko": [
    "sister"
  ],
  "sisäkatto": [
    "ceiling"
  ],
  "sisällä": [
    "in",
    "inside",
    "within"
  ],
  "sisäpuolella": [
    "inside"
  ],
  "sisään": [
    "into"
  ],
  "sisäänkirjautuminen": [
    "check-in"
  ],
  "sisäänkäynti": [
    "entrance"
  ],
  "sitruuna": [
    "lemon"
  ],
  "sitten": [
    "then"
  ],
  "sivu": [
    "side"
  ],
  "sivupalkki": [
    "sidebar"
  ],
  "skaalautuvuus": [
    "scalability"
  ],
  "skanneri": [
    "scanner"
  ],
  "skootteri": [
    "scooter"
  ],
  "Skotlanti": [
    "Scotland",
    "scotland"
  ],
  "smetana": [
    "sour cream"
  ],
  "smoothie": [
    "smoothie"
  ],
  "sohva": [
    "couch",
    "sofa"
  ],
  "sohvapöytä": [
    "coffee table"
  ],
  "soijapapu": [
    "soybean"
  ],
  "soikio": [
    "oval"
  ],
  "soitin": [
    "instrument"
  ],
  "soittaa": [
    "call",
    "phone",
    "play"
  ],
  "sokeri": [
    "sugar"
  ],
  "solmio": [
    "tie"
  ],
  "solu": [
    "cell"
  ],
  "sonni": [
    "bull"
  ],
  "sopeuttaa": [
    "adapt"
  ],
  "sopeutua": [
    "adapt"
  ],
  "sopimus": [
    "agreement",
    "contract",
    "deal"
  ],
  "sora": [
    "gravel"
  ],
  "sormi": [
    "finger"
  ],
  "sormus": [
    "ring"
  ],
  "sorsa": [
    "duck"
  ],
  "sosiologia": [
    "sociology"
  ],
  "sota": [
    "war"
  ],
  "sotilas": [
    "soldier"
  ],
  "sotilas-": [
    "military"
  ],
  "sotilastukikohta": [
    "army base",
    "military base"
  ],
  "sovellus": [
    "app",
    "application"
  ],
  "sovelluskehys": [
    "framework"
  ],
  "soveltaa": [
    "apply"
  ],
  "sovitin": [
    "adapter"
  ],
  "spagetti": [
    "spaghetti"
  ],
  "ssa": [
    "at",
    "in"
  ],
  "SSD-asema": [
    "solid state drive",
    "ssd",
    "SSD"
  ],
  "stadion": [
    "stadium"
  ],
  "standardi": [
    "standard"
  ],
  "strategia": [
    "strategy"
  ],
  "stressi": [
    "stress"
  ],
  "strutsi": [
    "ostrich"
  ],
  "suhde": [
    "proportion",
    "ratio",
    "relationship"
  ],
  "suihku": [
    "shower"
  ],
  "suihkulähde": [
    "fountain"
  ],
  "sukellusvene": [
    "submarine"
  ],
  "sukeltaa": [
    "dive"
  ],
  "sukka": [
    "sock",
    "stocking"
  ],
  "sukkahousut": [
    "pantyhose"
  ],
  "suklaa": [
    "chocolate"
  ],
  "sukulainen": [
    "relative"
  ],
  "sulaa": [
    "melt"
  ],
  "sulattaa": [
    "melt"
  ],
  "sulhanen": [
    "fiancé"
  ],
  "sulje": [
    "parenthesis"
  ],
  "suljettu": [
    "closed"
  ],
  "sulkea": [
    "close"
  ],
  "sulkea ovi": [
    "close door"
  ],
  "sumu": [
    "fog"
  ],
  "sumuinen": [
    "foggy"
  ],
  "sunnuntai": [
    "sunday",
    "Sunday"
  ],
  "suo": [
    "bog",
    "marsh",
    "swamp"
  ],
  "suodatin": [
    "filter"
  ],
  "suojatie": [
    "crosswalk",
    "pedestrian crossing"
  ],
  "suojaus": [
    "protection"
  ],
  "suojella": [
    "protect"
  ],
  "suola": [
    "salt"
  ],
  "suolainen": [
    "salty"
  ],
  "suolakurkku": [
    "pickle"
  ],
  "suolakurkkuviipale": [
    "pickle"
  ],
  "suoli": [
    "intestine"
  ],
  "suomalainen": [
    "finnish",
    "Finnish"
  ],
  "Suomi": [
    "finland",
    "Finland"
  ],
  "suomi": [
    "finnish",
    "Finnish"
  ],
  "suora": [
    "direct"
  ],
  "suorakulmio": [
    "rectangle"
  ],
  "suoritin": [
    "CPU",
    "cpu",
    "processor"
  ],
  "suorittaa loppuun": [
    "complete"
  ],
  "suoritus": [
    "performance"
  ],
  "suorituskyky": [
    "performance"
  ],
  "suosittu": [
    "popular"
  ],
  "suositus": [
    "recommendation"
  ],
  "suostua": [
    "agree"
  ],
  "supermarket": [
    "supermarket"
  ],
  "suru": [
    "sadness"
  ],
  "surullinen": [
    "sad"
  ],
  "susi": [
    "wolf"
  ],
  "suu": [
    "mouth"
  ],
  "suunnilleen": [
    "approximately",
    "roughly"
  ],
  "suunnitella": [
    "plan"
  ],
  "suunnitelma": [
    "plan"
  ],
  "suunnittelija": [
    "designer"
  ],
  "suunta": [
    "direction"
  ],
  "suuri": [
    "big",
    "large",
    "major"
  ],
  "suurlähetystö": [
    "embassy"
  ],
  "suuttumus": [
    "anger"
  ],
  "Sveitsi": [
    "switzerland",
    "Switzerland"
  ],
  "sydän": [
    "heart"
  ],
  "syksy": [
    "autumn",
    "fall"
  ],
  "sylki": [
    "saliva"
  ],
  "symboli": [
    "symbol"
  ],
  "synagoga": [
    "synagogue"
  ],
  "synkronointi": [
    "synchronization"
  ],
  "synnytys": [
    "birth"
  ],
  "syntymä": [
    "birth"
  ],
  "syntymäpäivä": [
    "birthday"
  ],
  "syntyperäinen": [
    "native"
  ],
  "sytyttää": [
    "ignite",
    "light"
  ],
  "syy": [
    "cause",
    "reason"
  ],
  "syyllisyys": [
    "guilt"
  ],
  "syyskuu": [
    "september"
  ],
  "syömäpuikot": [
    "chopsticks"
  ],
  "syöttää": [
    "enter"
  ],
  "sähkö": [
    "electricity"
  ],
  "sähköposti": [
    "email",
    "mail"
  ],
  "sähköpostiosoite": [
    "email address"
  ],
  "sähköpotkulauta": [
    "electric scooter"
  ],
  "säilyttää": [
    "keep",
    "store"
  ],
  "säleikkö": [
    "shutter"
  ],
  "sälekaihtimet": [
    "blinds"
  ],
  "sämpylä": [
    "bun",
    "roll"
  ],
  "sänky": [
    "bed"
  ],
  "sää": [
    "weather"
  ],
  "säädös": [
    "regulation"
  ],
  "sääntö": [
    "rule"
  ],
  "säästää": [
    "save"
  ],
  "säätiö": [
    "foundation"
  ],
  "söpö": [
    "cute"
  ],
  "t-paita": [
    "T-shirt",
    "t-shirt"
  ],
  "taajama": [
    "town"
  ],
  "taajuus": [
    "frequency"
  ],
  "taaksepäin": [
    "backward"
  ],
  "taas": [
    "again"
  ],
  "taateli": [
    "date"
  ],
  "tabletti": [
    "pill",
    "tablet",
    "tablet computer"
  ],
  "tahti": [
    "beat"
  ],
  "tai": [
    "or"
  ],
  "taide": [
    "art"
  ],
  "taidegalleria": [
    "art gallery"
  ],
  "taidemaalari": [
    "painter"
  ],
  "taimen": [
    "trout"
  ],
  "taipua": [
    "bend"
  ],
  "taistella": [
    "fight"
  ],
  "taistelu": [
    "battle"
  ],
  "taiteilija": [
    "artist"
  ],
  "taito": [
    "skill"
  ],
  "taittaa": [
    "fold"
  ],
  "taivas": [
    "sky"
  ],
  "taivuttaa": [
    "bend"
  ],
  "tajuta": [
    "realize"
  ],
  "takana": [
    "behind"
  ],
  "takia": [
    "because of"
  ],
  "takka": [
    "fireplace"
  ],
  "takki": [
    "coat",
    "jacket"
  ],
  "taksi": [
    "cab",
    "taxi"
  ],
  "taktiikka": [
    "tactic"
  ],
  "takuu": [
    "guarantee",
    "warranty"
  ],
  "tallenne": [
    "record",
    "recording"
  ],
  "tallennustila": [
    "storage"
  ],
  "tallentaa": [
    "save"
  ],
  "tallentaa tiedosto": [
    "save file"
  ],
  "talo": [
    "house"
  ],
  "talous": [
    "finance"
  ],
  "talousarvio": [
    "budget"
  ],
  "taloustiede": [
    "economics"
  ],
  "talvi": [
    "winter"
  ],
  "talvitakki": [
    "winter coat"
  ],
  "tammi": [
    "oak"
  ],
  "tammikuu": [
    "january"
  ],
  "tanska": [
    "Danish",
    "danish"
  ],
  "Tanska": [
    "denmark",
    "Denmark"
  ],
  "tanskalainen": [
    "Danish",
    "danish"
  ],
  "tanssija": [
    "dancer"
  ],
  "tapa": [
    "custom",
    "habit",
    "procedure"
  ],
  "tapaaminen": [
    "appointment",
    "meeting"
  ],
  "tapahtuma": [
    "transaction"
  ],
  "tapella": [
    "fight"
  ],
  "tappaa": [
    "kill"
  ],
  "tappio": [
    "loss"
  ],
  "tarina": [
    "story"
  ],
  "tarjoilija": [
    "waiter",
    "waitress"
  ],
  "tarjonta": [
    "supply"
  ],
  "tarjotin": [
    "tray"
  ],
  "tarjous": [
    "offer"
  ],
  "tarkastuskortti": [
    "boarding pass"
  ],
  "tarkistaa": [
    "check",
    "review",
    "validate"
  ],
  "tarkistus": [
    "check"
  ],
  "tarkka": [
    "accurate"
  ],
  "tarkkailla": [
    "observe"
  ],
  "tarkoitus": [
    "purpose"
  ],
  "tarpeeksi": [
    "enough"
  ],
  "tarpeellinen": [
    "necessary"
  ],
  "tarpeeton": [
    "unnecessary"
  ],
  "tarvita": [
    "need"
  ],
  "tasa-arvo": [
    "equality"
  ],
  "tasainen": [
    "flat",
    "smooth"
  ],
  "tasavalta": [
    "republic"
  ],
  "tasavertainen": [
    "equal"
  ],
  "tasku": [
    "pocket"
  ],
  "taso": [
    "plane"
  ],
  "taulukko": [
    "array",
    "table"
  ],
  "taustapeili": [
    "rearview mirror"
  ],
  "tauti": [
    "disease"
  ],
  "tavallinen": [
    "common",
    "ordinary"
  ],
  "tavarat": [
    "goods"
  ],
  "tavaratalo": [
    "department store"
  ],
  "tavata": [
    "meet"
  ],
  "tavoite": [
    "goal",
    "objective"
  ],
  "tavu": [
    "byte",
    "syllable"
  ],
  "te": [
    "you"
  ],
  "teatteri": [
    "theater",
    "theatre"
  ],
  "tee": [
    "tea"
  ],
  "teekannu": [
    "teapot"
  ],
  "tehdas": [
    "factory",
    "plant"
  ],
  "tehdä": [
    "do",
    "make"
  ],
  "tehdä piste": [
    "score"
  ],
  "tehdä tulevaisuudessa": [
    "will"
  ],
  "tehdä yhteistyötä": [
    "collaborate",
    "cooperate"
  ],
  "teho": [
    "power"
  ],
  "tehokkuus": [
    "efficiency"
  ],
  "tehosekoitin": [
    "blender"
  ],
  "tehtävä": [
    "assignment",
    "task"
  ],
  "teidän": [
    "your",
    "yours"
  ],
  "teini-ikäinen": [
    "teenager"
  ],
  "tekijä": [
    "author"
  ],
  "tekijänoikeus": [
    "copyright"
  ],
  "tekisi": [
    "would"
  ],
  "tekniikka": [
    "technique"
  ],
  "teksti": [
    "text"
  ],
  "televisio": [
    "television",
    "TV",
    "tv"
  ],
  "telttapaikka": [
    "campsite"
  ],
  "temppeli": [
    "temple"
  ],
  "teollisuus": [
    "industry"
  ],
  "teoria": [
    "theory"
  ],
  "terapeutti": [
    "therapist"
  ],
  "terapia": [
    "therapy"
  ],
  "terassi": [
    "patio",
    "terrace"
  ],
  "teratavu": [
    "terabyte"
  ],
  "terminaali": [
    "terminal"
  ],
  "termostaatti": [
    "thermostat"
  ],
  "terve": [
    "healthy",
    "hello"
  ],
  "tervehtiä": [
    "greet"
  ],
  "tervetuloa": [
    "welcome"
  ],
  "terveys": [
    "health"
  ],
  "terälehti": [
    "petal"
  ],
  "teräs": [
    "steel"
  ],
  "terävä": [
    "sharp"
  ],
  "testata": [
    "test"
  ],
  "Thaimaa": [
    "thailand",
    "Thailand"
  ],
  "tie": [
    "road"
  ],
  "tiede": [
    "science"
  ],
  "tiedosto": [
    "file"
  ],
  "tiedot": [
    "data"
  ],
  "tiedottaa": [
    "inform"
  ],
  "tienristeys": [
    "crossroads"
  ],
  "tieteilijä": [
    "scientist"
  ],
  "tietenkin": [
    "of course"
  ],
  "tieto": [
    "information",
    "knowledge"
  ],
  "tietokanta": [
    "database"
  ],
  "tietokone": [
    "computer"
  ],
  "tietoturva": [
    "security"
  ],
  "tietovarasto": [
    "repository"
  ],
  "tietue": [
    "record"
  ],
  "tietää": [
    "know"
  ],
  "tiikeri": [
    "tiger"
  ],
  "tiimi": [
    "team"
  ],
  "tiistai": [
    "tuesday"
  ],
  "tikkaat": [
    "ladder"
  ],
  "tila": [
    "condition",
    "space"
  ],
  "tilaisuus": [
    "opportunity"
  ],
  "tilastot": [
    "statistics"
  ],
  "tilastotiede": [
    "statistics"
  ],
  "tilata": [
    "order",
    "subscribe"
  ],
  "tilaus": [
    "order",
    "subscription"
  ],
  "tilavuus": [
    "volume"
  ],
  "tili": [
    "account"
  ],
  "tilli": [
    "dill"
  ],
  "timjami": [
    "thyme"
  ],
  "tipu": [
    "chick"
  ],
  "todella": [
    "really",
    "very"
  ],
  "todellinen": [
    "real"
  ],
  "todennus": [
    "authentication"
  ],
  "todennäköisesti": [
    "probably"
  ],
  "todennäköisyys": [
    "probability"
  ],
  "todentaa": [
    "verify"
  ],
  "todistaja": [
    "witness"
  ],
  "todiste": [
    "evidence",
    "proof"
  ],
  "todistus": [
    "certificate",
    "proof"
  ],
  "tohveli": [
    "slipper"
  ],
  "toimia": [
    "work"
  ],
  "toimiala": [
    "industry"
  ],
  "toiminnallisuus": [
    "functionality"
  ],
  "toiminto": [
    "function"
  ],
  "toimisto": [
    "office"
  ],
  "toimittaa": [
    "deliver"
  ],
  "toimittaja": [
    "journalist"
  ],
  "toimitus": [
    "delivery",
    "shipping",
    "supply"
  ],
  "toinen": [
    "another",
    "other"
  ],
  "toinen toisensa": [
    "one another"
  ],
  "toipuminen": [
    "recovery"
  ],
  "toisensa": [
    "each other"
  ],
  "toissapäivänä": [
    "the day before yesterday"
  ],
  "toistaa": [
    "repeat"
  ],
  "toivo": [
    "hope"
  ],
  "toivoa": [
    "hope",
    "wish"
  ],
  "toivottaa tervetulleeksi": [
    "welcome"
  ],
  "token": [
    "token"
  ],
  "tomaatti": [
    "tomato"
  ],
  "tonnikala": [
    "tuna"
  ],
  "tori": [
    "market",
    "square"
  ],
  "tornado": [
    "tornado"
  ],
  "torstai": [
    "thursday"
  ],
  "tosi": [
    "true"
  ],
  "tosiasia": [
    "fact"
  ],
  "totella": [
    "obey"
  ],
  "totta": [
    "true"
  ],
  "totuus": [
    "truth"
  ],
  "toukokuu": [
    "may"
  ],
  "treffit": [
    "date"
  ],
  "trumpetti": [
    "trumpet"
  ],
  "tuhat": [
    "thousand"
  ],
  "tuhka": [
    "ash"
  ],
  "tuhota": [
    "destroy"
  ],
  "tukea": [
    "support"
  ],
  "tuki": [
    "support"
  ],
  "tulehdus": [
    "infection"
  ],
  "tulinen": [
    "spicy"
  ],
  "tulivuori": [
    "volcano"
  ],
  "tulkita": [
    "interpret"
  ],
  "tulla": [
    "become",
    "come"
  ],
  "tulli": [
    "customs"
  ],
  "tulos": [
    "result"
  ],
  "tulostaa": [
    "print"
  ],
  "tulostin": [
    "printer"
  ],
  "tulot": [
    "income",
    "revenue"
  ],
  "tulppaani": [
    "tulip"
  ],
  "tulva": [
    "flood"
  ],
  "tumma": [
    "dark"
  ],
  "tunne": [
    "emotion",
    "feeling"
  ],
  "tunneli": [
    "tunnel"
  ],
  "tunnistaa": [
    "identify",
    "recognize"
  ],
  "tunniste": [
    "identifier",
    "token"
  ],
  "tuntea": [
    "feel",
    "know"
  ],
  "tuntematon": [
    "stranger",
    "unknown"
  ],
  "tunti": [
    "hour"
  ],
  "tuntua": [
    "feel"
  ],
  "tuo": [
    "that"
  ],
  "tuoda": [
    "bring",
    "import"
  ],
  "tuoksua": [
    "smell"
  ],
  "tuoli": [
    "chair"
  ],
  "tuolla": [
    "there"
  ],
  "tuolla puolen": [
    "beyond"
  ],
  "tuomari": [
    "judge"
  ],
  "tuomio": [
    "sentence"
  ],
  "tuomioistuin": [
    "court"
  ],
  "tuonti": [
    "import"
  ],
  "tuore": [
    "fresh"
  ],
  "tuote": [
    "product"
  ],
  "tuotemerkki": [
    "brand"
  ],
  "tuottaa": [
    "produce"
  ],
  "turisti": [
    "tourist"
  ],
  "Turkki": [
    "Turkey"
  ],
  "turkki": [
    "Turkish",
    "turkish"
  ],
  "turkkilainen": [
    "Turkish",
    "turkish"
  ],
  "turska": [
    "cod"
  ],
  "turvallinen": [
    "safe"
  ],
  "turvallisuus": [
    "safety",
    "security"
  ],
  "turvavyö": [
    "seatbelt"
  ],
  "tusina": [
    "dozen"
  ],
  "tuska": [
    "pain"
  ],
  "tuskin": [
    "hardly"
  ],
  "tutkia": [
    "explore",
    "investigate",
    "research"
  ],
  "tutkija": [
    "researcher",
    "scientist"
  ],
  "tutkimus": [
    "research",
    "study"
  ],
  "tutkinta": [
    "investigation"
  ],
  "tuttu": [
    "familiar"
  ],
  "tuulenvire": [
    "breeze"
  ],
  "tuuletin": [
    "fan"
  ],
  "tuuli": [
    "wind"
  ],
  "tuulilasi": [
    "windscreen",
    "windshield"
  ],
  "tuulinen": [
    "windy"
  ],
  "tuuma": [
    "inch"
  ],
  "tyhjä": [
    "empty"
  ],
  "tyhmä": [
    "stupid"
  ],
  "tykätä": [
    "like"
  ],
  "tylppä": [
    "blunt"
  ],
  "tylsistynyt": [
    "bored"
  ],
  "tylsä": [
    "boring"
  ],
  "typpi": [
    "nitrogen"
  ],
  "tyttärenpoika": [
    "grandson"
  ],
  "tyttärentytär": [
    "granddaughter"
  ],
  "tyttö": [
    "girl"
  ],
  "tyttöystävä": [
    "girlfriend"
  ],
  "tytär": [
    "daughter"
  ],
  "tyyny": [
    "pillow"
  ],
  "tyyppi": [
    "kind",
    "type"
  ],
  "työ": [
    "job",
    "work"
  ],
  "työhakemus": [
    "job application"
  ],
  "työllistää": [
    "employ"
  ],
  "työllisyys": [
    "employment"
  ],
  "työnantaja": [
    "employer"
  ],
  "työntekijä": [
    "employee",
    "worker"
  ],
  "työntää": [
    "push"
  ],
  "työpaikka": [
    "job",
    "workplace"
  ],
  "työpaja": [
    "workshop"
  ],
  "työpuku": [
    "uniform"
  ],
  "työskennellä": [
    "work"
  ],
  "työsuhde": [
    "employment"
  ],
  "työtoveri": [
    "colleague",
    "coworker"
  ],
  "työttömyys": [
    "unemployment"
  ],
  "työvoima": [
    "workforce"
  ],
  "tähti": [
    "asterisk",
    "star"
  ],
  "täkki": [
    "quilt"
  ],
  "tällä hetkellä": [
    "currently"
  ],
  "tämä": [
    "this"
  ],
  "tänä aamuna": [
    "this morning"
  ],
  "tänä iltana": [
    "this evening",
    "tonight"
  ],
  "tänään": [
    "today"
  ],
  "täristä": [
    "shake"
  ],
  "tärkeys": [
    "importance"
  ],
  "tärkeä": [
    "important"
  ],
  "täsmälleen": [
    "exactly"
  ],
  "täsmällinen": [
    "exact"
  ],
  "tässä": [
    "here"
  ],
  "täti": [
    "aunt"
  ],
  "täydellinen": [
    "perfect"
  ],
  "täysi": [
    "full"
  ],
  "täysin": [
    "completely",
    "fully"
  ],
  "täytyä": [
    "have to",
    "must",
    "need to"
  ],
  "täällä": [
    "here"
  ],
  "tölkki": [
    "can"
  ],
  "uhka": [
    "threat"
  ],
  "uhri": [
    "victim"
  ],
  "uida": [
    "swim"
  ],
  "uima-allas": [
    "swimming pool"
  ],
  "uimaranta": [
    "beach"
  ],
  "ukkonen": [
    "thunder"
  ],
  "ukkosenjyrinä": [
    "thunder"
  ],
  "Ukraina": [
    "ukraine",
    "Ukraine"
  ],
  "ukraina": [
    "ukrainian",
    "Ukrainian"
  ],
  "ukrainalainen": [
    "ukrainian",
    "Ukrainian"
  ],
  "ulkomainen": [
    "foreign"
  ],
  "ulkona": [
    "outside"
  ],
  "ulkopuolella": [
    "outside"
  ],
  "ullakko": [
    "attic"
  ],
  "ulos": [
    "out"
  ],
  "uloskirjautuminen": [
    "check-out"
  ],
  "uloskäynti": [
    "exit"
  ],
  "uneksia": [
    "dream"
  ],
  "unelmoida": [
    "dream"
  ],
  "unessa": [
    "asleep"
  ],
  "uninen": [
    "sleepy"
  ],
  "univormu": [
    "uniform"
  ],
  "unohtaa": [
    "forget"
  ],
  "unssi": [
    "ounce"
  ],
  "ura": [
    "career"
  ],
  "urheilija": [
    "athlete"
  ],
  "urheilukenkä": [
    "gym shoe"
  ],
  "urheilukenttä": [
    "sports field"
  ],
  "USB-muisti": [
    "USB drive",
    "usb drive"
  ],
  "useimmat": [
    "most"
  ],
  "usein": [
    "often"
  ],
  "useita": [
    "multiple",
    "several"
  ],
  "usko": [
    "belief"
  ],
  "uskoa": [
    "believe"
  ],
  "uskollinen": [
    "loyal"
  ],
  "uskomus": [
    "belief"
  ],
  "uskonto": [
    "religion"
  ],
  "usva": [
    "mist"
  ],
  "utelias": [
    "curious"
  ],
  "uudelleen": [
    "again"
  ],
  "uudistaa": [
    "innovate"
  ],
  "uuni": [
    "oven"
  ],
  "uunikinnas": [
    "oven mitt"
  ],
  "uusi": [
    "new"
  ],
  "Uusi-Seelanti": [
    "New Zealand",
    "new zealand"
  ],
  "uusivuosi": [
    "new year",
    "New Year"
  ],
  "vaahtera": [
    "maple"
  ],
  "vaalea": [
    "light",
    "pale"
  ],
  "vaaleanpunainen": [
    "pink"
  ],
  "vaalit": [
    "election"
  ],
  "vaara": [
    "danger",
    "hazard"
  ],
  "vaarallinen": [
    "dangerous"
  ],
  "vaari": [
    "grandfather"
  ],
  "vaatekaappi": [
    "wardrobe"
  ],
  "vaatetus": [
    "clothing"
  ],
  "vaatia": [
    "require"
  ],
  "vaatimus": [
    "requirement"
  ],
  "vaatteet": [
    "clothes"
  ],
  "vadelma": [
    "raspberry"
  ],
  "vahingoittaa": [
    "harm",
    "hurt"
  ],
  "vahva": [
    "strong"
  ],
  "vahvistaa": [
    "confirm",
    "validate"
  ],
  "vaihe": [
    "stage"
  ],
  "vaihto": [
    "transfer"
  ],
  "vaihtoehto": [
    "option"
  ],
  "vaihtokurssi": [
    "exchange rate"
  ],
  "vaihtoyhteys": [
    "connection"
  ],
  "vaikea": [
    "difficult",
    "hard"
  ],
  "vaikka": [
    "although",
    "though"
  ],
  "vaikutus": [
    "effect",
    "impact"
  ],
  "vaimo": [
    "wife"
  ],
  "vain": [
    "just",
    "only"
  ],
  "vaja": [
    "shed"
  ],
  "vakava": [
    "serious"
  ],
  "vakio": [
    "constant"
  ],
  "vakuutus": [
    "insurance"
  ],
  "valaista": [
    "light"
  ],
  "valaistus": [
    "lighting"
  ],
  "valas": [
    "whale"
  ],
  "valehdella": [
    "lie"
  ],
  "valhe": [
    "falsehood"
  ],
  "valikko": [
    "menu"
  ],
  "valinta": [
    "choice"
  ],
  "valita": [
    "choose",
    "pick",
    "select"
  ],
  "valita vaaleilla": [
    "elect"
  ],
  "valitettavasti": [
    "unfortunately"
  ],
  "valittaa": [
    "complain"
  ],
  "valkaisuaine": [
    "bleach"
  ],
  "valkoinen": [
    "white"
  ],
  "valkosipuli": [
    "garlic"
  ],
  "valkoviini": [
    "white wine"
  ],
  "valmentaja": [
    "coach"
  ],
  "valmis": [
    "ready"
  ],
  "valmistaa": [
    "make",
    "manufacture",
    "prepare",
    "produce"
  ],
  "valmistaa ruokaa": [
    "cook"
  ],
  "valmistautua": [
    "prepare"
  ],
  "valmistautunut": [
    "prepared"
  ],
  "valmistua": [
    "complete",
    "finish"
  ],
  "valo": [
    "light"
  ],
  "valoisa": [
    "bright"
  ],
  "valokuva": [
    "photo",
    "photograph"
  ],
  "valokuvaaja": [
    "photographer"
  ],
  "valta": [
    "authority",
    "power"
  ],
  "valtameri": [
    "ocean"
  ],
  "valtatie": [
    "highway"
  ],
  "valtava": [
    "giant",
    "huge"
  ],
  "valtimo": [
    "artery"
  ],
  "valtio": [
    "state"
  ],
  "valtuus": [
    "authority"
  ],
  "valtuutus": [
    "authorization"
  ],
  "valuutta": [
    "currency"
  ],
  "valvonta": [
    "monitoring"
  ],
  "valvontakamera": [
    "security camera"
  ],
  "vamma": [
    "injury"
  ],
  "vanha": [
    "old"
  ],
  "vanhempi": [
    "parent"
  ],
  "vanhentunut": [
    "stale"
  ],
  "vanilja": [
    "vanilla"
  ],
  "vankila": [
    "prison"
  ],
  "vapaa": [
    "available",
    "free"
  ],
  "vapaa ohjelmisto": [
    "free software"
  ],
  "vapaaehtoinen": [
    "volunteer"
  ],
  "vapaaehtoistyö": [
    "volunteer work",
    "volunteering"
  ],
  "vapaus": [
    "freedom",
    "liberty"
  ],
  "varastaa": [
    "steal"
  ],
  "varasto": [
    "inventory",
    "stock",
    "storage",
    "warehouse"
  ],
  "varastoida": [
    "store"
  ],
  "varata": [
    "book",
    "reserve"
  ],
  "varattu": [
    "busy"
  ],
  "varaus": [
    "reservation"
  ],
  "varhain": [
    "early"
  ],
  "varis": [
    "crow"
  ],
  "varmasti": [
    "certainly"
  ],
  "varmistaa": [
    "verify"
  ],
  "varmuus": [
    "confidence"
  ],
  "varmuuskopio": [
    "backup"
  ],
  "varoitus": [
    "warning"
  ],
  "varpunen": [
    "sparrow"
  ],
  "varsi": [
    "stem"
  ],
  "vartalo": [
    "body"
  ],
  "varten": [
    "for"
  ],
  "varvas": [
    "toe"
  ],
  "varvassandaali": [
    "flip-flop"
  ],
  "vasara": [
    "hammer"
  ],
  "vasen": [
    "left"
  ],
  "vasikanliha": [
    "veal"
  ],
  "vasikka": [
    "calf"
  ],
  "vastaan": [
    "against"
  ],
  "vastaanottaa": [
    "receive"
  ],
  "vastaanottaa viesti": [
    "receive message"
  ],
  "vastaanotto": [
    "front desk",
    "reception"
  ],
  "vastaanottovirkailija": [
    "receptionist"
  ],
  "vastata": [
    "answer",
    "reply",
    "respond"
  ],
  "vastaus": [
    "answer"
  ],
  "vastuu": [
    "responsibility"
  ],
  "vatsa": [
    "abdomen",
    "belly",
    "stomach"
  ],
  "vatsakipu": [
    "stomachache"
  ],
  "vauva": [
    "baby"
  ],
  "vedenkeitin": [
    "kettle"
  ],
  "vegaani": [
    "vegan"
  ],
  "vehnä": [
    "wheat"
  ],
  "veitsi": [
    "knife"
  ],
  "veli": [
    "brother"
  ],
  "veljenpoika": [
    "nephew"
  ],
  "veljentytär": [
    "niece"
  ],
  "velka": [
    "debt"
  ],
  "veloittaa": [
    "charge"
  ],
  "velvoite": [
    "obligation"
  ],
  "velvollisuus": [
    "duty"
  ],
  "vene": [
    "boat"
  ],
  "venytellä": [
    "stretch"
  ],
  "venyttää": [
    "stretch"
  ],
  "Venäjä": [
    "russia",
    "Russia"
  ],
  "venäjä": [
    "russian",
    "Russian"
  ],
  "venäläinen": [
    "russian",
    "Russian"
  ],
  "verho": [
    "curtain"
  ],
  "veri": [
    "blood"
  ],
  "verkko": [
    "internet",
    "network",
    "web"
  ],
  "verkko-osoite": [
    "URL",
    "url"
  ],
  "verkkokamera": [
    "webcam"
  ],
  "verkkosivu": [
    "web page",
    "webpage"
  ],
  "verkkosivusto": [
    "website"
  ],
  "vero": [
    "tax"
  ],
  "verotus": [
    "taxation"
  ],
  "verrata": [
    "compare"
  ],
  "versio": [
    "version"
  ],
  "vesi": [
    "water"
  ],
  "vesimeloni": [
    "watermelon"
  ],
  "vesipullo": [
    "water bottle"
  ],
  "vesiputous": [
    "waterfall"
  ],
  "vessa": [
    "lavatory",
    "toilet"
  ],
  "vessapaperi": [
    "toilet paper"
  ],
  "vetoketju": [
    "zipper"
  ],
  "vety": [
    "hydrogen"
  ],
  "vetäytyä": [
    "retreat"
  ],
  "vetää": [
    "pull"
  ],
  "video": [
    "video"
  ],
  "viedä": [
    "export"
  ],
  "vielä": [
    "still",
    "yet"
  ],
  "viemäri": [
    "drain",
    "sewer"
  ],
  "vienti": [
    "export"
  ],
  "vientiin": [
    "export"
  ],
  "vierailija": [
    "visitor"
  ],
  "vierailla": [
    "visit"
  ],
  "vieras": [
    "guest",
    "stranger"
  ],
  "vieressä": [
    "beside",
    "by"
  ],
  "vierittää": [
    "scroll"
  ],
  "vierityspalkki": [
    "scrollbar"
  ],
  "viesti": [
    "message"
  ],
  "viestiketju": [
    "message thread"
  ],
  "viestiä": [
    "communicate"
  ],
  "Vietnam": [
    "vietnam",
    "Vietnam"
  ],
  "viha": [
    "anger",
    "hate"
  ],
  "vihainen": [
    "angry"
  ],
  "vihannes": [
    "vegetable"
  ],
  "vihata": [
    "hate"
  ],
  "vihdoin": [
    "finally"
  ],
  "vihreä": [
    "green"
  ],
  "viidakko": [
    "jungle"
  ],
  "viikata": [
    "fold"
  ],
  "viikko": [
    "week"
  ],
  "viikonloppu": [
    "weekend"
  ],
  "viikset": [
    "moustache",
    "mustache"
  ],
  "viikuna": [
    "fig"
  ],
  "viileä": [
    "cool"
  ],
  "viime viikolla": [
    "last week"
  ],
  "viime vuonna": [
    "last year"
  ],
  "viime yönä": [
    "last night"
  ],
  "viimeinen": [
    "last"
  ],
  "viimeksi": [
    "last"
  ],
  "viini": [
    "wine"
  ],
  "viinirypäle": [
    "grape"
  ],
  "viipaloida": [
    "slice"
  ],
  "viisas": [
    "wise"
  ],
  "viisaus": [
    "wisdom"
  ],
  "viisi": [
    "five"
  ],
  "viisikymmentä": [
    "fifty"
  ],
  "viisitoista": [
    "fifteen"
  ],
  "viisumi": [
    "visa"
  ],
  "viiva": [
    "dash"
  ],
  "viive": [
    "latency"
  ],
  "viivästys": [
    "delay"
  ],
  "vika": [
    "fault"
  ],
  "vilja": [
    "cereal"
  ],
  "vilkuttaa": [
    "wave"
  ],
  "villa": [
    "wool"
  ],
  "villapaita": [
    "jumper",
    "sweater"
  ],
  "villieläimet": [
    "wildlife"
  ],
  "villisika": [
    "boar"
  ],
  "vilustuminen": [
    "cold"
  ],
  "vinoviiva": [
    "slash"
  ],
  "violetti": [
    "purple",
    "violet"
  ],
  "viranomainen": [
    "authority"
  ],
  "virhe": [
    "bug",
    "error",
    "fault",
    "mistake"
  ],
  "virheenkorjaus": [
    "bug fix"
  ],
  "virheilmoitus": [
    "error message"
  ],
  "virheraportti": [
    "bug report"
  ],
  "virkailija": [
    "clerk"
  ],
  "Viro": [
    "estonia",
    "Estonia"
  ],
  "viro": [
    "Estonian",
    "estonian"
  ],
  "virolainen": [
    "Estonian",
    "estonian"
  ],
  "virta": [
    "stream"
  ],
  "virtahepo": [
    "hippopotamus"
  ],
  "virtsarakko": [
    "bladder"
  ],
  "virus": [
    "virus"
  ],
  "virvoitusjuoma": [
    "soda",
    "soft drink"
  ],
  "viulu": [
    "violin"
  ],
  "voi": [
    "butter"
  ],
  "voida": [
    "be able to",
    "can",
    "may"
  ],
  "voide": [
    "lotion"
  ],
  "voikukka": [
    "dandelion"
  ],
  "voileipä": [
    "sandwich"
  ],
  "voima": [
    "power"
  ],
  "voimakas": [
    "powerful"
  ],
  "voisi": [
    "could",
    "might"
  ],
  "voittaa": [
    "win"
  ],
  "voitto": [
    "profit"
  ],
  "vokaali": [
    "vowel"
  ],
  "vuodenaika": [
    "season"
  ],
  "vuohi": [
    "goat"
  ],
  "vuokra": [
    "rent"
  ],
  "vuokralainen": [
    "tenant"
  ],
  "vuokranantaja": [
    "landlord"
  ],
  "vuokranmaksu": [
    "rent payment"
  ],
  "vuokrata": [
    "hire",
    "rent"
  ],
  "vuoksi": [
    "because of",
    "due to"
  ],
  "vuori": [
    "mountain"
  ],
  "vuoropuhelu": [
    "dialogue"
  ],
  "vuosi": [
    "year"
  ],
  "vuosikymmen": [
    "decade"
  ],
  "vuosipäivä": [
    "anniversary"
  ],
  "vuosisata": [
    "century"
  ],
  "vyö": [
    "belt"
  ],
  "vyötärö": [
    "waist"
  ],
  "väestö": [
    "population"
  ],
  "vähemmän": [
    "less"
  ],
  "vähemmän kuin": [
    "less than"
  ],
  "vähentyä": [
    "decrease"
  ],
  "vähentää": [
    "decrease",
    "reduce",
    "subtract"
  ],
  "vähiten": [
    "least"
  ],
  "vähäinen": [
    "minor"
  ],
  "väitellä": [
    "argue",
    "debate"
  ],
  "väkevät alkoholijuomat": [
    "spirits"
  ],
  "välilyönti": [
    "space character"
  ],
  "välimerkitys": [
    "punctuation"
  ],
  "välimuisti": [
    "cache"
  ],
  "väline": [
    "instrument"
  ],
  "välipala": [
    "snack"
  ],
  "välissä": [
    "between"
  ],
  "välitavoite": [
    "milestone"
  ],
  "välittää": [
    "care"
  ],
  "välittömästi": [
    "instantly"
  ],
  "välttämättömyys": [
    "necessity"
  ],
  "välttämätön": [
    "necessary"
  ],
  "välttää": [
    "avoid"
  ],
  "väri": [
    "color",
    "colour"
  ],
  "väsynyt": [
    "tired"
  ],
  "väärennös": [
    "fake"
  ],
  "väärin": [
    "incorrectly"
  ],
  "väärä": [
    "false",
    "incorrect",
    "wrong"
  ],
  "Wales": [
    "Wales",
    "wales"
  ],
  "WC": [
    "lavatory",
    "toilet"
  ],
  "yhdeksän": [
    "nine"
  ],
  "yhdeksänkymmentä": [
    "ninety"
  ],
  "yhdeksäntoista": [
    "nineteen"
  ],
  "yhdessä": [
    "together"
  ],
  "Yhdistynyt kuningaskunta": [
    "United Kingdom",
    "united kingdom"
  ],
  "yhdistys": [
    "association"
  ],
  "yhdistää": [
    "combine",
    "connect",
    "unite"
  ],
  "yhdysmerkki": [
    "hyphen"
  ],
  "Yhdysvallat": [
    "united states",
    "United States"
  ],
  "yhteensopivuus": [
    "compatibility"
  ],
  "yhteenveto": [
    "summary"
  ],
  "yhteiskunta": [
    "society"
  ],
  "yhteisö": [
    "community"
  ],
  "yhteydet": [
    "connectivity"
  ],
  "yhteys": [
    "connection",
    "link"
  ],
  "yhtiö": [
    "corporation"
  ],
  "yhtä suuri": [
    "equal"
  ],
  "yhä": [
    "still"
  ],
  "yksi": [
    "a",
    "an",
    "one"
  ],
  "yksin": [
    "alone"
  ],
  "yksinkertainen": [
    "simple"
  ],
  "yksinäinen": [
    "lonely"
  ],
  "yksitoista": [
    "eleven"
  ],
  "yksittäinen": [
    "single"
  ],
  "yksityinen": [
    "private"
  ],
  "yksityisyys": [
    "privacy"
  ],
  "yleensä": [
    "in general",
    "usually"
  ],
  "yleinen": [
    "common"
  ],
  "ylennys": [
    "promotion"
  ],
  "ylettyä": [
    "reach"
  ],
  "yli": [
    "across",
    "over"
  ],
  "ylihuomenna": [
    "the day after tomorrow"
  ],
  "ylijäämä": [
    "surplus"
  ],
  "yliopisto": [
    "university"
  ],
  "ylittää": [
    "cross"
  ],
  "ylläpito": [
    "maintenance"
  ],
  "yllätys": [
    "surprise"
  ],
  "ylpeys": [
    "pride"
  ],
  "ylpeä": [
    "proud"
  ],
  "yläpuolella": [
    "above",
    "over"
  ],
  "ylös": [
    "up"
  ],
  "ymmärrän": [
    "I understand",
    "i understand"
  ],
  "ymmärtää": [
    "realize",
    "understand"
  ],
  "ympyrä": [
    "circle"
  ],
  "ympärillä": [
    "around"
  ],
  "ympäristö": [
    "environment"
  ],
  "yrittää": [
    "attempt",
    "try"
  ],
  "yritys": [
    "business",
    "company",
    "enterprise",
    "firm"
  ],
  "yrtti": [
    "herb"
  ],
  "yskiä": [
    "cough"
  ],
  "yskä": [
    "cough"
  ],
  "ystävyys": [
    "friendship"
  ],
  "ystävä": [
    "friend"
  ],
  "ystävällinen": [
    "friendly",
    "kind"
  ],
  "yö": [
    "night"
  ],
  "yöpaita": [
    "nightgown"
  ],
  "zoomata": [
    "zoom"
  ],
  "äiti": [
    "mom",
    "mother",
    "mum"
  ],
  "ällöttävä": [
    "disgusting"
  ],
  "älykkyys": [
    "intelligence"
  ],
  "älykäs": [
    "clever",
    "intelligent",
    "smart"
  ],
  "älypuhelin": [
    "smartphone"
  ],
  "äskettäin": [
    "recently"
  ],
  "äänekäs": [
    "loud"
  ],
  "äänenvoimakkuus": [
    "volume"
  ],
  "äänestys": [
    "vote"
  ],
  "äänestyslippu": [
    "ballot"
  ],
  "äänestää": [
    "vote"
  ],
  "ääni": [
    "sound",
    "voice",
    "vote"
  ],
  "ääntäminen": [
    "pronunciation"
  ],
  "öljy": [
    "oil"
  ],
  "ötökkä": [
    "bug"
  ]
};

  // Preserve source spellings and translations. Case-folding is ONLY for lookup.
  function buildCaseIndex(map) {
    const result = new Map();
    for (const key of Object.keys(map)) {
      const folded = key.normalize('NFC').toLocaleLowerCase();
      if (!result.has(folded)) result.set(folded, key);
    }
    return result;
  }
  const indexes = {
    'en-fi': buildCaseIndex(enToFi),
    'fi-en': buildCaseIndex(fiToEn)
  };

  function lookup(input, direction) {
    const vocab = direction === 'fi-en' ? fiToEn : enToFi;
    const term = input.trim().normalize('NFC');
    const folded = term.toLocaleLowerCase();
    const key = Object.prototype.hasOwnProperty.call(vocab, term)
      ? term : indexes[direction].get(folded);
    if (key === undefined) return null;
    // Do not rank, remove, or correct the manually supplied alternatives.
    return vocab[key];
  }

  // Removes outer punctuation for lookup, but never changes the original source data.
  // If an exact multiword phrase exists, it is looked up before splitting words.
  function offlineWordByWord(text, direction) {
    const exact = lookup(text, direction);
    if (exact) return {lines: [text.trim() + ' → ' + exact.join(' / ')], missing: 0, matchedPhrase: true};
    const tokens = text.trim().split(/\s+/u).filter(Boolean);
    if (tokens.length > 50) return {error: 'Enter no more than 50 words at once.'};
    const lines = [];
    let missing = 0;
    for (const token of tokens) {
      // Unicode-aware: Finnish letters, accents, and original tokens are preserved.
      const bare = token.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
      const translations = bare ? lookup(bare, direction) : null;
      if (translations) {
        lines.push(token + ' → ' + translations.join(' / '));
      } else {
        lines.push(token + ' → Not found in offline word list');
        missing += 1;
      }
    }
    return {lines, missing, matchedPhrase: false};
  }

  const styles = document.createElement('style');
  styles.textContent = `
    #wika-online-translator {box-sizing:border-box;width:100%;max-width:560px;
      margin:26px auto 35px;padding:18px 16px;background:#fff;
      border:1px solid #dadfe4;border-radius:14px;text-align:left;
      box-shadow:0 3px 12px rgba(0,0,0,.04);font-family:Arial,sans-serif;}
    #wika-online-translator * {box-sizing:border-box;}
    #wika-online-translator h2 {margin:0 0 8px;font-size:20px;color:#172b38;}
    #wika-online-translator .wt-caption {font-size:12px;line-height:1.5;color:#65747e;
      margin:0 0 13px;}
    #wika-online-translator label {display:block;font-size:13px;color:#34434e;
      font-weight:bold;margin:0 0 6px;}
    #wika-online-translator select, #wika-online-translator textarea {
      display:block;width:100%;border:1px solid #c6ced4;border-radius:8px;
      padding:10px;font:16px Arial,sans-serif;color:#18252e;background:#fff;}
    #wika-online-translator textarea {resize:vertical;min-height:94px;line-height:1.5;}
    #wika-online-translator select {margin-bottom:12px;}
    #wika-online-translator .wt-action {width:auto;height:auto;min-height:42px;
      border:0;border-radius:9px;padding:9px 17px;margin:12px 0 10px;
      background:#24b36b;color:#fff;font-size:15px;font-weight:bold;}
    #wika-online-translator .wt-action:disabled {opacity:.65;cursor:default;}
    #wika-online-translator .wt-result {white-space:pre-wrap;overflow-wrap:anywhere;
      min-height:56px;padding:12px;background:#f4f7f9;border:1px solid #e0e6ea;
      border-radius:9px;color:#192b38;font-size:15px;line-height:1.6;}
    #wika-online-translator .wt-result.wt-error {color:#a33333;}
    #wika-online-translator .wt-subnote {font-size:11px;color:#64717b;
      line-height:1.45;margin:10px 0 0;}
  `;
  document.head.appendChild(styles);

  const section = document.createElement('section');
  section.id = 'wika-online-translator';
  section.setAttribute('aria-label', 'English Finnish offline and online translator');
  section.innerHTML = `
    <h2>English ↔ Finnish Translator</h2>
    <p class="wt-caption">Offline word lookup is available anytime. Use MyMemory for online sentence translation.</p>
    <label for="wt-mode">Translation mode</label>
    <select id="wt-mode">
      <option value="offline">Offline words (no internet)</option>
      <option value="online">MyMemory online (sentences)</option>
    </select>
    <label for="wt-direction">Translation direction</label>
    <select id="wt-direction">
      <option value="en-fi">English → Finnish</option>
      <option value="fi-en">Finnish → English</option>
    </select>
    <label for="wt-text">Word or text</label>
    <textarea id="wt-text" rows="3" placeholder="Type a word to look up..."></textarea>
    <button type="button" class="wt-action" id="wt-send">Look up offline</button>
    <label for="wt-output">Translation result</label>
    <div id="wt-output" class="wt-result" role="status" aria-live="polite">Offline translation ready.</div>
    <p class="wt-subnote" id="wt-note">Offline: exact saved phrases first, otherwise individual words only. Alternatives are shown as listed in your JSON. This is not grammatical sentence translation. No data leaves your phone.</p>
  `;
  const footer = document.getElementById('siteFooter');
  if (footer) footer.insertAdjacentElement('afterend', section);
  else document.body.appendChild(section);

  const field = document.getElementById('wt-text');
  const output = document.getElementById('wt-output');
  const button = document.getElementById('wt-send');
  const direction = document.getElementById('wt-direction');
  const mode = document.getElementById('wt-mode');
  const note = document.getElementById('wt-note');

  function show(message, error) {
    output.textContent = message; // Never render lookup or API responses as HTML.
    output.classList.toggle('wt-error', !!error);
  }
  function updateMode() {
    const offline = mode.value === 'offline';
    button.textContent = offline ? 'Look up offline' : 'Translate with MyMemory';
    field.placeholder = offline ? 'Type a word, or several separate words...' : 'Type a sentence or short text...';
    note.textContent = offline
      ? 'Offline: word per word translator only. No sentence translation. Works offline. Translations may be incorrect.'
      : 'Online: Translator via MyMemory. Sentence translation. Requires internet connection. Translations may be incorrect. Limit 500 characters per request.';
    show(offline ? 'Offline translation ready.' : 'MyMemory online translator ready.', false);
  }
  mode.addEventListener('change', updateMode);
  button.addEventListener('click', async function () {
    const value = field.value.trim();
    if (!value) { show('Please enter a word or some text.', true); return; }
    if (mode.value === 'offline') {
      if (value.length > 500) { show('Please enter at most 500 characters.', true); return; }
      const result = offlineWordByWord(value, direction.value);
      if (result.error) { show(result.error, true); return; }
      const ending = result.matchedPhrase ? '' : '\n\nWord-by-word lookup only; word order and grammar are not translated.';
      show(result.lines.join('\n') + ending, result.missing > 0 && result.missing === result.lines.length);
      return;
    }

    const bytes = new TextEncoder().encode(value).length;
    if (bytes > 500) {
      show('This text is too long. MyMemory accepts up to 500 UTF-8 bytes at a time.', true);
      return;
    }
    button.disabled = true;
    button.textContent = 'Translating...';
    show('Contacting MyMemory...', false);
    try {
      // In a PWA there is no local Dart proxy. Use the public MyMemory GET API.
      // The request only runs when the user explicitly selects online mode.
      const pair = direction.value === 'fi-en' ? 'fi|en' : 'en|fi';
      const query = new URLSearchParams({q: value, langpair: pair});
      const response = await fetch('https://api.mymemory.translated.net/get?' + query.toString(), {cache: 'no-store'});
      const json = await response.json();
      if (!response.ok || Number(json.responseStatus) !== 200) {
        throw new Error(json.responseDetails || 'MyMemory translation unavailable.');
      }
      const translated = json.responseData && json.responseData.translatedText;
      if (typeof translated !== 'string' || !translated.trim()) {
        throw new Error('MyMemory returned no translation.');
      }
      if (translated.startsWith('MYMEMORY WARNING:')) {
        throw new Error('MyMemory free usage allowance was reached.');
      }
      show(translated, false);
    } catch (error) {
      show(error.message || 'Cannot translate right now. Check your internet connection.', true);
    } finally {
      button.disabled = false;
      button.textContent = 'Translate with MyMemory';
    }
  });

  // This switch is used ONLY by the add-on's automated check, not by the app.
  // No mutations or network access occur in these pure offline lookups.
  if (typeof globalThis !== 'undefined' && globalThis.__WIKA_OFFLINE_TEST__) {
    globalThis.__WIKA_OFFLINE_LOOKUP_TEST__ = {lookup, offlineWordByWord, enToFi, fiToEn};
  }
})();
