const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];
const cities = [
  "Zagreb",
  "Rijeka",
  "Split",
  "Osijek",
  "Zadar",
  "Sesvete",
  "Velika Gorica",
  "Pula",
  "Slavonski Brod",
  "Karlovac",
  "Šibenik",
  "Kaštel Stari",
  "Dubrovnik",
  "Bjelovar",
  "Varaždin",
  "Sisak",
  "Vinkovci",
  "Koprivnica",
  "Čakovec",
  "Ðakovo",
  "Zaprešić",
  "Vukovar",
  "Sinj",
  "Petrinja",
  "Solin",
  "Kutina",
  "Požega",
  "Virovitica",
  "Dugo Selo",
  "Sveti Ivan Zelina",
  "Jastrebarsko",
  "Metković",
  "Samobor",
  "Omiš",
  "Vrbovec",
  "Ivanić-Grad",
  "Viškovo",
  "Rovinj",
  "Makarska",
  "Ivanec",
  "Trogir",
  "Novi Marof",
  "Umag",
  "Krapina",
  "Županja",
  "Nedelišće",
  "Popovača",
  "Nova Gradiška",
  "Opatija",
  "Labin",
  "Valpovo",
  "Matulji",
  "Križevci",
  "Crikvenica",
  "Knin",
  "Duga Resa",
  "Kastav",
  "Garešnica",
  "Slatina",
  "Beli Manastir",
  "Daruvar",
  "Čepin",
  "Trilj",
  "Zabok",
  "Pazin",
  "Ludbreg",
  "Lepoglava",
  "Ðurđevac",
  "Mali Lošinj",
  "Čazma",
  "Bedekovčina",
  "Rab",
  "Našice",
  "Poreč",
  "Drniš",
  "Križ",
  "Erdut",
  "Čavle",
  "Dugi Rat",
  "Novska",
  "Prelog",
  "Trnovec Bartolovečki",
  "Brckovljani",
  "Pregrada",
  "Vrgorac",
  "Ploče",
  "Belišće",
  "Medulin",
  "Maruševec",
  "Mursko Središće",
  "Krk",
  "Donji Miholjac",
  "Ivankovo",
  "Lipik",
  "Ozalj",
  "Buzet",
  "Vodice",
  "Kloštar Ivanić",
  "Gospić",
  "Donja Stubica",
  "Cestica",
  "Korčula",
  "Biograd na Moru",
  "Mala Subotica",
  "Jelenje",
  "Darda",
  "Buje",
  "Ilok",
  "Borovo",
  "Veliko Trgovišće",
  "Gornji Kneginec",
  "Sračinec",
  "Rovišće",
  "Petrijanec",
  "Imotski",
  "Donji Kraljevec",
  "Kraljevica",
  "Delnice",
  "Stari Jankovci",
  "Sukošan",
  "Vela Luka",
  "Hvar",
  "Kostrena",
  "Orebić",
  "Lovran",
  "Bednja",
  "Bibinje",
  "Ližnjan",
  "Orahovica",
  "Jakovlje",
  "Marčana",
  "Bošnjaci",
  "Podturen",
  "Martijanec",
  "Skradin",
  "Preko",
  "Sveti Ðurđ",
  "Josipdol",
  "Gunja",
  "Novalja",
  "Nuštar",
  "Jalžabet",
  "Babina Greda",
  "Vodnjan",
  "Martinska Ves",
  "Dugopolje",
  "Lipovljani",
  "Nova Rača",
  "Oroslavje",
  "Gradac",
  "Opuzen",
  "Kotoriba",
  "Supetar",
  "Pag",
  "Tisno",
  "Davor",
  "Primošten",
  "Omišalj",
  "Privlaka",
  "Kršan",
  "Ražanac",
  "Ivanska",
  "Šenkovec",
  "Netretić",
  "Goričan",
  "Stubičke Toplice",
  "Starigrad",
  "Baška Voda",
  "Tovarnik",
  "Gradište",
  "Hrvatska Kostajnica",
  "Nin",
  "Veliko Trojstvo",
  "Ravna Gora",
  "Barban",
  "Dežanovac",
  "Suhopolje",
  "Orehovica",
  "Strahoninec",
  "Krašić",
  "Zlatar Bistrica",
  "Klanjec",
  "Strizivojna",
  "Budinšćina",
  "Donji Andrijevci",
  "Jarmina",
  "Rešetari",
  "Kutjevo",
  "Sibinj",
  "Runović",
  "Stari Mikanovci",
  "Koprivnički Ivanec",
  "Končanica",
  "Rogoznica",
  "Sveta Marija",
  "Petrijevci",
  "Višnjan",
  "Domašinec",
  "Legrad",
  "Mali Bukovec",
  "Cavtat",
  "Vrbanja",
  "Svetvinčenat",
  "Breznica",
  "Beretinec",
  "Slavonski Šamac",
  "Štitar",
  "Velika",
  "Tuhelj",
  "Marija Gorica",
  "Dobrinj",
  "Cerna",
  "Andrijaševci",
  "Bizovac",
  "Gundinci",
  "Gornji Stupnik",
  "Kravarsko",
  "Vratišinec",
  "Bukovlje",
  "Punat",
  "Vođinci",
  "Bogdanovci",
  "Drenovci",
  "Farkaševac",
  "Vis",
  "Tučepi",
  "Pirovac",
  "Gornja Vrba",
  "Jakšić",
  "Drnje",
  "Selca",
  "Sikirevci",
  "Brela",
  "Varaždinske Toplice",
  "Velika Kopanica",
  "Vrpolje",
  "Tinjan",
  "Preseka",
  "Bol",
  "Brtonigla",
  "Feričanci",
  "Cernik",
  "Brodski Stupnik",
  "Breznički Hum",
  "Staro Petrovo Selo",
  "Bakar",
  "Postire",
  "Kanfanar",
  "Tribunj",
  "Mošćenička Draga",
  "Ðelekovec",
  "Komiža",
  "Lopar",
  "Visoko",
  "Negoslavci",
  "Veliki Bukovec",
  "Karojba",
  "Bedenica",
  "Donji Vidovec",
  "Luka",
  "Gračišće",
  "Donja Motičina",
  "Vižinada",
  "Viškovci",
  "Vladislavci",
  "Sveti Petar u Šumi",
  "Lokve",
  "Ernestinovo",
  "Smokvica",
  "Markušica",
  "Zagorska Sela",
  "Motovun",
  "Malinska",
  "Lopatinec",
  "Garčin",
  "Zrinski Topolovac",
  "Tar",
  "Trpanj",
  "Lovas",
  "Mikleuš",
  "Funtana",
  "Donja Pušća",
  "Dekanovec",
  "Povljana",
  "Tordinci",
  "Kukljica",
  "Gornji Bogičevci",
  "Punitovci",
  "Nedeščina",
  "Drenje",
  "Dragalić",
  "Vlaka",
  "Kaštelir",
  "Sveti Martin na Muri",
  "Klakar",
  "Podstrana",
  "Kaštel Sućurac",
  "Sveta Nedjelja",
  "Okrug Gornji",
  "Privlaka",
  "Donji Seget",
  "Petrovsko",
  "Sveti Ilija",
  "Pribislavec",
  "Srebreno",
  "Vir",
  "Hum na Sutli",
  "Vidovec",
  "Sveti Križ Začretje",
  "Galovac",
  "Poljanica Bistranska",
  "Ðurmanec",
  "Vrsar",
  "Selnica",
  "Kali",
  "Špišić-Bukovica",
  "Bilice",
  "Zmijavci",
  "Krapinske Toplice",
  "Lumbarda",
  "Sveti Filip i Jakov",
  "Gornja Stubica",
  "Radoboj",
  "Belica",
  "Podbablje",
  "Vinica",
  "Kraljevec na Sutli",
  "Donja Dubrava",
  "Dubravica",
  "Rugvica",
  "Mače",
  "Koprivnički Bregi",
  "Škabrnje",
  "Konjšćina",
  "Murter",
  "Vrsi",
  "Novi Golubovec",
  "Lobor",
  "Zlatar",
  "Pakoštane",
  "Klinča Sela",
  "Cernik",
  "Brodski Stupnik",
  "Breznički Hum",
  "Staro Petrovo Selo",
  "Bakar",
  "Postire",
  "Kanfanar",
  "Tribunj",
  "Mošćenička Draga",
  "Ðelekovec",
  "Komiža",
  "Lopar",
  "Visoko",
  "Negoslavci",
  "Veliki Bukovec",
  "Karojba",
  "Bedenica",
  "Donji Vidovec",
  "Luka",
  "Gračišće",
  "Donja Motičina",
  "Vižinada",
  "Viškovci",
  "Vladislavci",
  "Sveti Petar u Šumi",
  "Lokve",
  "Ernestinovo",
  "Smokvica",
  "Markušica",
  "Zagorska Sela",
  "Motovun",
  "Malinska",
  "Lopatinec",
  "Garčin",
  "Zrinski Topolovac",
  "Tar",
  "Trpanj",
  "Lovas",
  "Mikleuš",
  "Funtana",
  "Donja Pušća",
  "Dekanovec",
  "Povljana",
  "Tordinci",
  "Kukljica",
  "Gornji Bogičevci",
  "Punitovci",
  "Nedeščina",
  "Drenje",
  "Dragalić",
  "Vlaka",
  "Kaštelir",
  "Sveti Martin na Muri",
  "Klakar",
  "Podstrana",
  "Kaštel Sućurac",
  "Sveta Nedjelja",
  "Okrug Gornji",
  "Privlaka",
  "Donji Seget",
  "Petrovsko",
  "Sveti Ilija",
  "Pribislavec",
  "Srebreno",
  "Vir",
  "Hum na Sutli",
  "Vidovec",
  "Sveti Križ Začretje",
  "Galovac",
  "Poljanica Bistranska",
  "Ðurmanec",
  "Vrsar",
  "Selnica",
  "Kali",
  "Špišić-Bukovica",
  "Bilice",
  "Zmijavci",
  "Krapinske Toplice",
  "Lumbarda",
  "Sveti Filip i Jakov",
  "Gornja Stubica",
  "Radoboj",
  "Belica",
  "Podbablje",
  "Vinica",
  "Kraljevec na Sutli",
  "Donja Dubrava",
  "Dubravica",
  "Rugvica",
  "Mače",
  "Koprivnički Bregi",
  "Škabrnje",
  "Konjšćina",
  "Murter",
  "Vrsi",
  "Novi Golubovec",
  "Lobor",
  "Zlatar",
  "Pakoštane",
  "Klinča Sela",
  "Klenovnik",
  "Donja Voća",
  "Antunovac",
  "Pitomača",
  "Desinić",
  "Gornje Jesenje",
  "Kloštar Podravski",
  "Podravske Sesvete",
  "Posedarje",
  "Polača",
  "Otok",
  "Ðurđenovac",
  "Virje",
  "Poličnik",
  "Mihovljan",
  "Peteranec",
  "Ljubešćica",
  "Donji Proložac",
  "Orle",
  "Žminj",
  "Hrašćina",
  "Vuka",
  "Novigrad",
  "Sveti Ivan Žabno",
  "Sveti Petar Orehovec",
  "Gornja Rijeka",
  "Kamanje",
  "Dubrava",
  "Molve",
  "Kalnik",
  "Raša",
  "Pašman",
  "Kalinovac",
  "Sutivan",
  "Zadvarje",
  "Zemunik Donji",
  "Novo Virje",
  "Hercegovac",
  "Gradec",
  "Kraj",
  "Draganići",
  "Lukač",
  "Otok",
  "Hlebine",
  "Blato",
  "Kaptol",
  "Klis",
  "Lećevica",
  "Novigrad Podravski",
  "Marina",
  "Rakovec",
  "Ferdinandovac",
  "Gola",
  "Pićan",
  "Popovac",
  "Grohote",
  "Stankovci",
  "Severin",
  "Gorjani",
  "Nova Kapela",
  "Gradina",
  "Milna",
  "Štefanje",
  "Žakanje",
  "Rasinja",
  "Kolan",
  "Lekenik",
  "Podgora",
  "Pisarovina",
  "Velika Ludina",
  "Kapela",
  "Bribir",
  "Kula Norinska",
  "Pakrac",
  "Primorski Dolac",
  "Lokvičič",
  "Generalski Stol",
  "Šandrovac",
  "Sokolovac",
  "Klenovnik",
  "Donja Voća",
  "Antunovac",
  "Pitomača",
  "Desinić",
  "Gornje Jesenje",
  "Kloštar Podravski",
  "Podravske Sesvete",
  "Posedarje",
  "Polača",
  "Otok",
  "Ðurđenovac",
  "Virje",
  "Poličnik",
  "Mihovljan",
  "Peteranec",
  "Ljubešćica",
  "Donji Proložac",
  "Orle",
  "Žminj",
  "Hrašćina",
  "Vuka",
  "Novigrad",
  "Sveti Ivan Žabno",
  "Sveti Petar Orehovec",
  "Gornja Rijeka",
  "Kamanje",
  "Dubrava",
  "Molve",
  "Kalnik",
  "Raša",
  "Pašman",
  "Kalinovac",
  "Sutivan",
  "Zadvarje",
  "Zemunik Donji",
  "Novo Virje",
  "Hercegovac",
  "Gradec",
  "Kraj",
  "Draganići",
  "Lukač",
  "Otok",
  "Hlebine",
  "Blato",
  "Kaptol",
  "Klis",
  "Lećevica",
  "Novigrad Podravski",
  "Marina",
  "Rakovec",
  "Ferdinandovac",
  "Gola",
  "Pićan",
  "Popovac",
  "Grohote",
  "Stankovci",
  "Severin",
  "Gorjani",
  "Nova Kapela",
  "Gradina",
  "Milna",
  "Štefanje",
  "Žakanje",
  "Rasinja",
  "Kolan",
  "Lekenik",
  "Podgora",
  "Pisarovina",
  "Velika Ludina",
  "Kapela",
  "Bribir",
  "Kula Norinska",
  "Pakrac",
  "Primorski Dolac",
  "Lokvičič",
  "Generalski Stol",
  "Šandrovac",
  "Sokolovac",
];
export {countries, cities}