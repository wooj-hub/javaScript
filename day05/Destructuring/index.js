//destructuring: 분해함
//배열 구조분해
const week = ["월", "화", "수", "목", "금"];
// const [monday, ...reset] = week; //월, 나머지
// const [monday, tuesday, ...rest] = week; //월,화, 나머지
// const [monday, rest] = week; //월,화

// 객체(object) 구조분해
const kimbab = {
  name: "참치김밥",
  ingredients: ["참치", "김", "밥", "계란"],
  price: 4000,
  sidedish: {
    main: "김치",
    soup: "된장국",
  },
};

// const { name } = kimbab;
// const { price } = kimbab;
// console.log(name); //참치김밥
// console.log(price); //4000

// //구조분해 후 리네임
// const { name: kimbabName } = kimbab;
// console.log(kimbabName); //참치김밥

// const { name: kimbabName, price, ingredients, sidedish } = kimbab; //kimbab의 여러개 속성

// const [tuna, ...rest] = kimbab.ingredients; //재료 중 참치와 나머지

// const { soup: koreaSoup, ...rest } = kimbab.sidedish; //sidedish에서 soupt를 koreasoup로 바꾸고, 나머지

// const{sidedish:{main,soup}} = kimbab;
// console.log(main); //김치

const data = [
  {
    id: 1,
    fullName: "Friedrick Winyard",
    avatar: "https://robohash.org/cumqueassumendasint.png?size=50x50&set=set1",
    university: "Osaka University of Foreign Studies",
    department: "Legal",
  },
  {
    id: 2,
    fullName: "Adara Hunnicutt",
    avatar:
      "https://robohash.org/consequunturinaccusamus.png?size=50x50&set=set1",
    university: "Universidade Paulista",
    department: "Marketing",
  },
  {
    id: 3,
    fullName: "Eda Vlasov",
    avatar: "https://robohash.org/quianimitenetur.png?size=50x50&set=set1",
    university: "Technical University of Kielce",
    department: "Support",
  },
  {
    id: 4,
    fullName: "Gratiana Claydon",
    avatar: "https://robohash.org/magnameumipsa.png?size=50x50&set=set1",
    university: "Universidad Cuauhtémoc",
    department: "Product Management",
  },
  {
    id: 5,
    fullName: "Daisey Vickars",
    avatar: "https://robohash.org/teneturquamet.png?size=50x50&set=set1",
    university: "Adiban Higher Education Institue",
    department: "Services",
  },
  {
    id: 6,
    fullName: "Trey Hulkes",
    avatar:
      "https://robohash.org/nostrumdolorescommodi.png?size=50x50&set=set1",
    university: "Mid-America Nazarene University",
    department: "Sales",
  },
  {
    id: 7,
    fullName: "Carine Nuzzetti",
    avatar: "https://robohash.org/itaqueametqui.png?size=50x50&set=set1",
    university: "St. Petersburg State University of Economics and Finance",
    department: "Marketing",
  },
  {
    id: 8,
    fullName: "Noreen Surcomb",
    avatar: "https://robohash.org/omnissimiliquefuga.png?size=50x50&set=set1",
    university: "St. Petersburg State Cinema and TV University",
    department: "Legal",
  },
  {
    id: 9,
    fullName: "Malanie Dickerline",
    avatar: "https://robohash.org/quisametlibero.png?size=50x50&set=set1",
    university: "Centro Universitário Adventista de São Paulo",
    department: "Training",
  },
  {
    id: 10,
    fullName: "Elset Bartolomeoni",
    avatar:
      "https://robohash.org/consequunturculpaomnis.png?size=50x50&set=set1",
    university: "PTPL College",
    department: "Engineering",
  },
  {
    id: 11,
    fullName: "Newton Pankettman",
    avatar: "https://robohash.org/porroculpalaborum.png?size=50x50&set=set1",
    university: "Yildiz Technical University",
    department: "Research and Development",
  },
  {
    id: 12,
    fullName: "Kellen Doore",
    avatar: "https://robohash.org/etsimiliqueest.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Bucaramanga",
    department: "Marketing",
  },
  {
    id: 13,
    fullName: "Talyah Tadgell",
    avatar:
      "https://robohash.org/autemmolestiaevoluptatem.png?size=50x50&set=set1",
    university: "Open University of Sudan (OUS)",
    department: "Training",
  },
  {
    id: 14,
    fullName: "Cull Carlisle",
    avatar:
      "https://robohash.org/omnisreiciendiscupiditate.png?size=50x50&set=set1",
    university: "Ama International University",
    department: "Research and Development",
  },
  {
    id: 15,
    fullName: "Allan Braim",
    avatar:
      "https://robohash.org/accusamuseaconsequatur.png?size=50x50&set=set1",
    university: "Ho Chi Minh City University of Architecture",
    department: "Research and Development",
  },
  {
    id: 16,
    fullName: "Bengt Shanklin",
    avatar: "https://robohash.org/sequidistinctiorerum.png?size=50x50&set=set1",
    university: "Koforidua Polytechnic ",
    department: "Marketing",
  },
  {
    id: 17,
    fullName: "Theadora Bernaciak",
    avatar:
      "https://robohash.org/doloremdoloremconsequatur.png?size=50x50&set=set1",
    university: "Hazara University",
    department: "Sales",
  },
  {
    id: 18,
    fullName: "Sheila-kathryn Hardaker",
    avatar: "https://robohash.org/nonquiaalias.png?size=50x50&set=set1",
    university: "Izhevsk State Technical University",
    department: "Research and Development",
  },
  {
    id: 19,
    fullName: "Banky Grishinov",
    avatar:
      "https://robohash.org/perferendisvitaeoccaecati.png?size=50x50&set=set1",
    university: "New Era College of Arts, Science & Technology",
    department: "Research and Development",
  },
  {
    id: 20,
    fullName: "Cornie Doget",
    avatar: "https://robohash.org/quietdelectus.png?size=50x50&set=set1",
    university: "University of Burdwan",
    department: "Engineering",
  },
  {
    id: 21,
    fullName: "Clea Willcox",
    avatar: "https://robohash.org/oditestveniam.png?size=50x50&set=set1",
    university: "University of Twente",
    department: "Product Management",
  },
  {
    id: 22,
    fullName: "Timothee Vaan",
    avatar: "https://robohash.org/quibusdamdebitiset.png?size=50x50&set=set1",
    university: "Duale Hochschule Baden-Württemberg",
    department: "Product Management",
  },
  {
    id: 23,
    fullName: "Ronni Questier",
    avatar: "https://robohash.org/automnismodi.png?size=50x50&set=set1",
    university: "Université François Rabelais de Tours",
    department: "Training",
  },
  {
    id: 24,
    fullName: "Marylin Freeborn",
    avatar:
      "https://robohash.org/autemexcepturinumquam.png?size=50x50&set=set1",
    university: "Fachhochschule Bonn-Rhein-Sieg",
    department: "Product Management",
  },
  {
    id: 25,
    fullName: "Whit Walcot",
    avatar: "https://robohash.org/nihilquodpossimus.png?size=50x50&set=set1",
    university: "Hyogo University",
    department: "Business Development",
  },
  {
    id: 26,
    fullName: "Sharyl Axton",
    avatar: "https://robohash.org/voluptassaepeest.png?size=50x50&set=set1",
    university: "Taipei Medical College",
    department: "Support",
  },
  {
    id: 27,
    fullName: "Rosmunda Doull",
    avatar: "https://robohash.org/autemnihileum.png?size=50x50&set=set1",
    university: "Fachhochschule für Technik und Wirtschaft Berlin",
    department: "Engineering",
  },
  {
    id: 28,
    fullName: "Burnaby Tyer",
    avatar: "https://robohash.org/utoditnobis.png?size=50x50&set=set1",
    university: "University of New Caledonia",
    department: "Sales",
  },
  {
    id: 29,
    fullName: "Annmaria Heeley",
    avatar:
      "https://robohash.org/consequaturdebitissed.png?size=50x50&set=set1",
    university: "Oduduwa University",
    department: "Services",
  },
  {
    id: 30,
    fullName: "Carri McNay",
    avatar: "https://robohash.org/porroaliassuscipit.png?size=50x50&set=set1",
    university: "University of Kota",
    department: "Training",
  },
  {
    id: 31,
    fullName: "Adriane Shovelton",
    avatar: "https://robohash.org/sequiminimaquia.png?size=50x50&set=set1",
    university: "University of Wollongong - Dubai Campus",
    department: "Business Development",
  },
  {
    id: 32,
    fullName: "Trixy Cockayne",
    avatar: "https://robohash.org/nihildoloribusenim.png?size=50x50&set=set1",
    university: "Pfeiffer University",
    department: "Legal",
  },
  {
    id: 33,
    fullName: "Pavlov Reeson",
    avatar: "https://robohash.org/suntveroquidem.png?size=50x50&set=set1",
    university: "International Theravada Buddhist Missionary University",
    department: "Human Resources",
  },
  {
    id: 34,
    fullName: "Lexis Savins",
    avatar: "https://robohash.org/oditeosillo.png?size=50x50&set=set1",
    university: "University of the Cordilleras",
    department: "Accounting",
  },
  {
    id: 35,
    fullName: "Malvina Daybell",
    avatar: "https://robohash.org/nihilestasperiores.png?size=50x50&set=set1",
    university: "Seneca College",
    department: "Sales",
  },
  {
    id: 36,
    fullName: "Nickolas Liddle",
    avatar: "https://robohash.org/repellatsitquam.png?size=50x50&set=set1",
    university: "University of the Sunshine Coast",
    department: "Engineering",
  },
  {
    id: 37,
    fullName: "Gabey Tulk",
    avatar:
      "https://robohash.org/cupiditatepariaturvel.png?size=50x50&set=set1",
    university: "Russian State Geological Prospecting University ",
    department: "Marketing",
  },
  {
    id: 38,
    fullName: "Kania Sporle",
    avatar:
      "https://robohash.org/asperioresautdeleniti.png?size=50x50&set=set1",
    university: "Universidade de Marília",
    department: "Product Management",
  },
  {
    id: 39,
    fullName: "Mariya Turrill",
    avatar: "https://robohash.org/aperiamomnisiste.png?size=50x50&set=set1",
    university: "Fachhochschule Düsseldorf",
    department: "Research and Development",
  },
  {
    id: 40,
    fullName: "Zorine Kloska",
    avatar: "https://robohash.org/etcumquevoluptatum.png?size=50x50&set=set1",
    university: "United States Merchant Marine Academy",
    department: "Research and Development",
  },
  {
    id: 41,
    fullName: "Lisa Elintune",
    avatar:
      "https://robohash.org/minusquisquamlaboriosam.png?size=50x50&set=set1",
    university: "Union College Kentucky",
    department: "Business Development",
  },
  {
    id: 42,
    fullName: "Gerri Peirazzi",
    avatar: "https://robohash.org/etaliquamest.png?size=50x50&set=set1",
    university: "Dammam Community College",
    department: "Sales",
  },
  {
    id: 43,
    fullName: "Jeannine Akitt",
    avatar: "https://robohash.org/explicaboinet.png?size=50x50&set=set1",
    university: "Nazarene Bible College",
    department: "Sales",
  },
  {
    id: 44,
    fullName: "Fidelia Drillingcourt",
    avatar:
      "https://robohash.org/voluptasteneturcommodi.png?size=50x50&set=set1",
    university: "Khulna University of Engineering And Technology",
    department: "Marketing",
  },
  {
    id: 45,
    fullName: "Ruperta Keningley",
    avatar: "https://robohash.org/dolorfugitrerum.png?size=50x50&set=set1",
    university: "Fachhochschule Neu-Ulm",
    department: "Marketing",
  },
  {
    id: 46,
    fullName: "Danika Kaes",
    avatar: "https://robohash.org/dolorcorporisquos.png?size=50x50&set=set1",
    university: "Gakushuin University",
    department: "Training",
  },
  {
    id: 47,
    fullName: "Laughton Lemoir",
    avatar:
      "https://robohash.org/voluptateminventoreoccaecati.png?size=50x50&set=set1",
    university:
      "Norwegian Teacher Academy for Studies in Religion and Education",
    department: "Marketing",
  },
  {
    id: 48,
    fullName: "Viola Ferrea",
    avatar: "https://robohash.org/voluptatemeaqueomnis.png?size=50x50&set=set1",
    university: "Fachhochschule St. Gallen",
    department: "Engineering",
  },
  {
    id: 49,
    fullName: "Obed Ellaway",
    avatar: "https://robohash.org/sedquaeratnulla.png?size=50x50&set=set1",
    university: "American University College of Technology",
    department: "Training",
  },
  {
    id: 50,
    fullName: "Chickie Budding",
    avatar: "https://robohash.org/sequieaet.png?size=50x50&set=set1",
    university: "University of Indianapolis in Athens",
    department: "Legal",
  },
  {
    id: 51,
    fullName: "Tracey Coysh",
    avatar:
      "https://robohash.org/providentnostrumaccusantium.png?size=50x50&set=set1",
    university:
      "Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg",
    department: "Business Development",
  },
  {
    id: 52,
    fullName: "Luis Nellen",
    avatar: "https://robohash.org/illumiustodeserunt.png?size=50x50&set=set1",
    university: "Duke University",
    department: "Sales",
  },
  {
    id: 53,
    fullName: "Lucila Rysom",
    avatar: "https://robohash.org/eumsapienteaperiam.png?size=50x50&set=set1",
    university: "University of South Australia",
    department: "Engineering",
  },
  {
    id: 54,
    fullName: "Lauren Flint",
    avatar:
      "https://robohash.org/accusamusvoluptatumvelit.png?size=50x50&set=set1",
    university: "University of Liberal Arts",
    department: "Support",
  },
  {
    id: 55,
    fullName: "Wiley Gogerty",
    avatar:
      "https://robohash.org/magniquisquamdelectus.png?size=50x50&set=set1",
    university: "King Mongkut's University of Technology North Bangkok",
    department: "Support",
  },
  {
    id: 56,
    fullName: "Tiff Nunes Nabarro",
    avatar: "https://robohash.org/istenonvelit.png?size=50x50&set=set1",
    university: "Hartford College for Women",
    department: "Business Development",
  },
  {
    id: 57,
    fullName: "Christa Boar",
    avatar: "https://robohash.org/utexaspernatur.png?size=50x50&set=set1",
    university: "University of Southampton",
    department: "Services",
  },
  {
    id: 58,
    fullName: "Vinita Wimlett",
    avatar: "https://robohash.org/autmollitiaaut.png?size=50x50&set=set1",
    university: "Hochschule Bremerhaven",
    department: "Business Development",
  },
  {
    id: 59,
    fullName: "Alexandro Ebrall",
    avatar:
      "https://robohash.org/consequaturnihillaboriosam.png?size=50x50&set=set1",
    university: "Universidade Federal de Pelotas",
    department: "Research and Development",
  },
  {
    id: 60,
    fullName: "Sherlocke Sell",
    avatar: "https://robohash.org/omnisestcommodi.png?size=50x50&set=set1",
    university: "Universitas Dian Nuswantoro",
    department: "Business Development",
  },
  {
    id: 61,
    fullName: "Adelle Van der Merwe",
    avatar: "https://robohash.org/hicautemmaxime.png?size=50x50&set=set1",
    university: "Nipissing University",
    department: "Sales",
  },
  {
    id: 62,
    fullName: "Leonanie Pask",
    avatar:
      "https://robohash.org/rationeassumendaoptio.png?size=50x50&set=set1",
    university: "London Institute of Management and Technology",
    department: "Business Development",
  },
  {
    id: 63,
    fullName: "Annaliese Laker",
    avatar: "https://robohash.org/dictaofficiaat.png?size=50x50&set=set1",
    university: "Medical Academy Karol Marcinkowski in Poznan",
    department: "Product Management",
  },
  {
    id: 64,
    fullName: "Kerri Marval",
    avatar: "https://robohash.org/omnismodinisi.png?size=50x50&set=set1",
    university: "Technical University of Varna",
    department: "Support",
  },
  {
    id: 65,
    fullName: "Jephthah Bullus",
    avatar:
      "https://robohash.org/voluptatibusinfacilis.png?size=50x50&set=set1",
    university: "Hakuoh University",
    department: "Product Management",
  },
  {
    id: 66,
    fullName: "Jasmine Pendrick",
    avatar:
      "https://robohash.org/mollitiateneturcupiditate.png?size=50x50&set=set1",
    university: "Phranakhon Si Ayutthaya Rajabhat University",
    department: "Support",
  },
  {
    id: 67,
    fullName: "Thelma Ahrens",
    avatar: "https://robohash.org/sittemporeoptio.png?size=50x50&set=set1",
    university: "University of Veterinary and Pharmaceutical Science",
    department: "Support",
  },
  {
    id: 68,
    fullName: "Friedrick Meekings",
    avatar: "https://robohash.org/molestiaeilloaperiam.png?size=50x50&set=set1",
    university: "Universitas Islam Riau",
    department: "Research and Development",
  },
  {
    id: 69,
    fullName: "Noel Champion",
    avatar: "https://robohash.org/estmodiut.png?size=50x50&set=set1",
    university:
      "Shanghai University of Traditional Chinese Medicine and Pharmacology",
    department: "Marketing",
  },
  {
    id: 70,
    fullName: "Gaspard Civitillo",
    avatar: "https://robohash.org/aperiamlaboriosamaut.png?size=50x50&set=set1",
    university: "Keck Graduate Institute of Applied Life Sciences",
    department: "Legal",
  },
  {
    id: 71,
    fullName: "Melanie Elion",
    avatar: "https://robohash.org/liberoevenietitaque.png?size=50x50&set=set1",
    university: "Matn University",
    department: "Sales",
  },
  {
    id: 72,
    fullName: "Ara Orgill",
    avatar: "https://robohash.org/undetemporenemo.png?size=50x50&set=set1",
    university: "Amirkabir University of Technology",
    department: "Business Development",
  },
  {
    id: 73,
    fullName: "Caroljean Scotland",
    avatar: "https://robohash.org/quiaauteveniet.png?size=50x50&set=set1",
    university: "Reitaku University",
    department: "Research and Development",
  },
  {
    id: 74,
    fullName: "Dulcinea Pickover",
    avatar: "https://robohash.org/estautemnisi.png?size=50x50&set=set1",
    university: "Visva-Bharati University",
    department: "Business Development",
  },
  {
    id: 75,
    fullName: "Carny Zorzutti",
    avatar: "https://robohash.org/etenimvoluptas.png?size=50x50&set=set1",
    university: "University of Seychelles - American Institute of Medicine",
    department: "Services",
  },
  {
    id: 76,
    fullName: "Eunice Kippin",
    avatar:
      "https://robohash.org/doloremquenecessitatibusminima.png?size=50x50&set=set1",
    university: "Universidad Agroforestal Fernando A.Meriño",
    department: "Product Management",
  },
  {
    id: 77,
    fullName: "Berkie Lethbury",
    avatar:
      "https://robohash.org/expeditasolutaarchitecto.png?size=50x50&set=set1",
    university: "State University of West Georgia",
    department: "Research and Development",
  },
  {
    id: 78,
    fullName: "Morton Cull",
    avatar: "https://robohash.org/voluptatesedadipisci.png?size=50x50&set=set1",
    university: "Universidad de Iberoamérica",
    department: "Sales",
  },
  {
    id: 79,
    fullName: "Salvidor Dyte",
    avatar: "https://robohash.org/cupiditateutquasi.png?size=50x50&set=set1",
    university: "Kingston College",
    department: "Research and Development",
  },
  {
    id: 80,
    fullName: "Huberto Irons",
    avatar: "https://robohash.org/architectoadsint.png?size=50x50&set=set1",
    university: "Boise Bible College",
    department: "Sales",
  },
  {
    id: 81,
    fullName: "Bethany Schubuser",
    avatar: "https://robohash.org/deseruntabquasi.png?size=50x50&set=set1",
    university: "University of Primorska",
    department: "Accounting",
  },
  {
    id: 82,
    fullName: "Tod Rablan",
    avatar: "https://robohash.org/fugitetqui.png?size=50x50&set=set1",
    university: "Khulna University",
    department: "Human Resources",
  },
  {
    id: 83,
    fullName: "Con Balthasar",
    avatar:
      "https://robohash.org/harumtemporalaudantium.png?size=50x50&set=set1",
    university: "Brandenburgische Technische Universität Cottbus",
    department: "Product Management",
  },
  {
    id: 84,
    fullName: "Kerwinn Bruun",
    avatar:
      "https://robohash.org/exercitationemsuntpraesentium.png?size=50x50&set=set1",
    university: "Vyatka State Pedagogical University",
    department: "Accounting",
  },
  {
    id: 85,
    fullName: "Bronnie Pendry",
    avatar: "https://robohash.org/doloresullamiusto.png?size=50x50&set=set1",
    university: "Clark Atlanta University",
    department: "Product Management",
  },
  {
    id: 86,
    fullName: "Micah Scrange",
    avatar:
      "https://robohash.org/consequatureligendiab.png?size=50x50&set=set1",
    university: "Universidad de Viña del Mar",
    department: "Legal",
  },
  {
    id: 87,
    fullName: "Evy Radnedge",
    avatar:
      "https://robohash.org/doloresperspiciatisnon.png?size=50x50&set=set1",
    university: "Mohan Lal Sukhadia University",
    department: "Services",
  },
  {
    id: 88,
    fullName: "Ailina Astupenas",
    avatar: "https://robohash.org/totamillumsimilique.png?size=50x50&set=set1",
    university: "Northwest University",
    department: "Support",
  },
  {
    id: 89,
    fullName: "Anny Heiton",
    avatar: "https://robohash.org/quieumconsequatur.png?size=50x50&set=set1",
    university: "Technological University of Podillya",
    department: "Marketing",
  },
  {
    id: 90,
    fullName: "Lu Fortoun",
    avatar: "https://robohash.org/suntquidemadipisci.png?size=50x50&set=set1",
    university: "Institute of Commerce and Business",
    department: "Sales",
  },
  {
    id: 91,
    fullName: "Lexy De Brett",
    avatar: "https://robohash.org/quiperferendisquidem.png?size=50x50&set=set1",
    university: "Himeji Institute of Technology",
    department: "Human Resources",
  },
  {
    id: 92,
    fullName: "Silvio McOnie",
    avatar: "https://robohash.org/facilisvoluptatemea.png?size=50x50&set=set1",
    university: "University of Ibadan",
    department: "Engineering",
  },
  {
    id: 93,
    fullName: "Roxanne Hagan",
    avatar:
      "https://robohash.org/necessitatibusvoluptatumconsequatur.png?size=50x50&set=set1",
    university: "Kazan State University",
    department: "Training",
  },
  {
    id: 94,
    fullName: "Gustie Skentelbury",
    avatar: "https://robohash.org/eiusconsequatursit.png?size=50x50&set=set1",
    university: "Université de Bourgogne",
    department: "Engineering",
  },
  {
    id: 95,
    fullName: "Reynolds Matanin",
    avatar:
      "https://robohash.org/velperferendisfacilis.png?size=50x50&set=set1",
    university: "NABA - Nuova Accademia di Belle Arti, Milan",
    department: "Product Management",
  },
  {
    id: 96,
    fullName: "Waverly Lante",
    avatar: "https://robohash.org/illoeaqueaut.png?size=50x50&set=set1",
    university: "Kwararafa University",
    department: "Sales",
  },
  {
    id: 97,
    fullName: "Dorothee Juris",
    avatar: "https://robohash.org/maximeautut.png?size=50x50&set=set1",
    university: "Umea University",
    department: "Legal",
  },
  {
    id: 98,
    fullName: "Bail Form",
    avatar:
      "https://robohash.org/dolorrepellatasperiores.png?size=50x50&set=set1",
    university: "Agricultural University of Lublin",
    department: "Engineering",
  },
  {
    id: 99,
    fullName: "Alidia Luchelli",
    avatar: "https://robohash.org/utnisiet.png?size=50x50&set=set1",
    university: "British Institute in Paris, University of London",
    department: "Engineering",
  },
  {
    id: 100,
    fullName: "Fredericka Stovell",
    avatar: "https://robohash.org/sitconsequatursed.png?size=50x50&set=set1",
    university: "College of Management",
    department: "Human Resources",
  },
  {
    id: 101,
    fullName: "Lacee Ronchetti",
    avatar: "https://robohash.org/remomnisdistinctio.png?size=50x50&set=set1",
    university: "Schiller International University, Madrid",
    department: "Accounting",
  },
  {
    id: 102,
    fullName: "Shani Tellenbach",
    avatar: "https://robohash.org/suntminimavoluptatem.png?size=50x50&set=set1",
    university: "Himeji Institute of Technology",
    department: "Business Development",
  },
  {
    id: 103,
    fullName: "Marisa O'Hallagan",
    avatar: "https://robohash.org/quiasintdolores.png?size=50x50&set=set1",
    university: "The Union Institute",
    department: "Legal",
  },
  {
    id: 104,
    fullName: "Rhianna Jeffes",
    avatar: "https://robohash.org/velitvelbeatae.png?size=50x50&set=set1",
    university: "Universidade Ibirapuera",
    department: "Support",
  },
  {
    id: 105,
    fullName: "Hinda McGiffin",
    avatar: "https://robohash.org/istequiaipsa.png?size=50x50&set=set1",
    university: "University of California, Riverside",
    department: "Engineering",
  },
  {
    id: 106,
    fullName: "Elyse Barthod",
    avatar: "https://robohash.org/eteosquis.png?size=50x50&set=set1",
    university: "Universidade de Uberaba",
    department: "Training",
  },
  {
    id: 107,
    fullName: "Emelia McMeyler",
    avatar:
      "https://robohash.org/quodexplicabopraesentium.png?size=50x50&set=set1",
    university: 'Universidad Nacional Experimental "Simón Rodriguez"',
    department: "Legal",
  },
  {
    id: 108,
    fullName: "Howey Crippes",
    avatar: "https://robohash.org/exmaximenostrum.png?size=50x50&set=set1",
    university: "St. George's University",
    department: "Research and Development",
  },
  {
    id: 109,
    fullName: "Reeba Stanton",
    avatar:
      "https://robohash.org/quamaccusantiumcorrupti.png?size=50x50&set=set1",
    university: "Tunghai University",
    department: "Accounting",
  },
  {
    id: 110,
    fullName: "Sterne Maffini",
    avatar: "https://robohash.org/verovoluptatemeum.png?size=50x50&set=set1",
    university: "Universidade Metodista de Piracicaba",
    department: "Product Management",
  },
  {
    id: 111,
    fullName: "Anderea Engelbrecht",
    avatar: "https://robohash.org/vitaesintnisi.png?size=50x50&set=set1",
    university: "Osaka Dental University",
    department: "Business Development",
  },
  {
    id: 112,
    fullName: "Sly Crowhurst",
    avatar: "https://robohash.org/solutanoninventore.png?size=50x50&set=set1",
    university: "International University of Kagoshima",
    department: "Support",
  },
  {
    id: 113,
    fullName: "Mariel Leisk",
    avatar:
      "https://robohash.org/adipiscimolestiaesint.png?size=50x50&set=set1",
    university: "California State University, Hayward",
    department: "Services",
  },
  {
    id: 114,
    fullName: "Aurie Aslett",
    avatar:
      "https://robohash.org/voluptatibusvoluptatesmollitia.png?size=50x50&set=set1",
    university: "Kochi Women's University",
    department: "Accounting",
  },
  {
    id: 115,
    fullName: "Worthington MacInherney",
    avatar:
      "https://robohash.org/assumendaquianesciunt.png?size=50x50&set=set1",
    university: "University of Presov",
    department: "Product Management",
  },
  {
    id: 116,
    fullName: "Mano Courtin",
    avatar: "https://robohash.org/dolorumquonulla.png?size=50x50&set=set1",
    university: "University of Illinois at Urbana-Champaign",
    department: "Human Resources",
  },
  {
    id: 117,
    fullName: "Selestina Seeviour",
    avatar: "https://robohash.org/officiistotamfacilis.png?size=50x50&set=set1",
    university: "International Budo University",
    department: "Research and Development",
  },
  {
    id: 118,
    fullName: "Ellen Purse",
    avatar: "https://robohash.org/numquamquiseum.png?size=50x50&set=set1",
    university: "Kaduna State University",
    department: "Services",
  },
  {
    id: 119,
    fullName: "Christan Poleye",
    avatar: "https://robohash.org/quisdolorex.png?size=50x50&set=set1",
    university: "Rand Graduate School of Policy Studies",
    department: "Training",
  },
  {
    id: 120,
    fullName: "Sherilyn Pinniger",
    avatar: "https://robohash.org/isteerroraliquam.png?size=50x50&set=set1",
    university: "Spertus Institute of Jewish Studies",
    department: "Training",
  },
  {
    id: 121,
    fullName: "Ana Syrad",
    avatar:
      "https://robohash.org/facilistemporarepellat.png?size=50x50&set=set1",
    university: "Centre d'Etudes Supérieures des Techniques Industrielles",
    department: "Human Resources",
  },
  {
    id: 122,
    fullName: "Mehetabel Adamo",
    avatar: "https://robohash.org/occaecatiquiea.png?size=50x50&set=set1",
    university:
      "Ecole Nationale Supérieure d'Electronique, d'Electrotechnique, d'Informatique et d'Hydraulique de Toulouse",
    department: "Services",
  },
  {
    id: 123,
    fullName: "Michail Keogh",
    avatar:
      "https://robohash.org/voluptatemmolestiaevoluptates.png?size=50x50&set=set1",
    university: "Technological University (Kyaukse)",
    department: "Human Resources",
  },
  {
    id: 124,
    fullName: "Joycelin Baudinelli",
    avatar: "https://robohash.org/quiidquis.png?size=50x50&set=set1",
    university: "Philadelphia University",
    department: "Legal",
  },
  {
    id: 125,
    fullName: "Evania Kidde",
    avatar:
      "https://robohash.org/architectolaboresimilique.png?size=50x50&set=set1",
    university: "Ecole Nationale d'Ingénieurs de Saint-Etienne",
    department: "Marketing",
  },
  {
    id: 126,
    fullName: "Florinda Baynom",
    avatar:
      "https://robohash.org/nullarecusandaepariatur.png?size=50x50&set=set1",
    university: "Seinan Gakuin University",
    department: "Sales",
  },
  {
    id: 127,
    fullName: "Bessy Moscon",
    avatar:
      "https://robohash.org/voluptatemveniamfugiat.png?size=50x50&set=set1",
    university: "Ecole Nationale Supérieure d'Agronomie de Rennes",
    department: "Sales",
  },
  {
    id: 128,
    fullName: "Bronnie Haglinton",
    avatar:
      "https://robohash.org/enimcupiditatedoloremque.png?size=50x50&set=set1",
    university: "Komazawa University",
    department: "Accounting",
  },
  {
    id: 129,
    fullName: "Linoel Girardin",
    avatar: "https://robohash.org/etinventoreitaque.png?size=50x50&set=set1",
    university: "Mansfield University of Pennsylvania",
    department: "Support",
  },
  {
    id: 130,
    fullName: "Zachariah Sheara",
    avatar: "https://robohash.org/dolorautemofficia.png?size=50x50&set=set1",
    university: "Islamic University Kushtia",
    department: "Marketing",
  },
  {
    id: 131,
    fullName: "Jamill Halversen",
    avatar: "https://robohash.org/impeditcumdolores.png?size=50x50&set=set1",
    university: "University of North Texas Health Science Center at Fort Worth",
    department: "Services",
  },
  {
    id: 132,
    fullName: "Lyndsie Dozdill",
    avatar: "https://robohash.org/asperioresetanimi.png?size=50x50&set=set1",
    university: "Southern University Bangladesh",
    department: "Accounting",
  },
  {
    id: 133,
    fullName: "Barbara McLennan",
    avatar: "https://robohash.org/doloremquepossimusut.png?size=50x50&set=set1",
    university: "Feati University",
    department: "Services",
  },
  {
    id: 134,
    fullName: "Ellen Mosdell",
    avatar: "https://robohash.org/eligendiadimpedit.png?size=50x50&set=set1",
    university: "Manhattan Christian College",
    department: "Support",
  },
  {
    id: 135,
    fullName: "Vito Sherwen",
    avatar: "https://robohash.org/quieasimilique.png?size=50x50&set=set1",
    university: "Handelshochschule Leipzig",
    department: "Training",
  },
  {
    id: 136,
    fullName: "Roslyn Garter",
    avatar: "https://robohash.org/accusamusnostrumillo.png?size=50x50&set=set1",
    university: "University of Silesia",
    department: "Marketing",
  },
  {
    id: 137,
    fullName: "Jeanine Feare",
    avatar: "https://robohash.org/laboresuntvoluptatem.png?size=50x50&set=set1",
    university: "Isfahan University",
    department: "Accounting",
  },
  {
    id: 138,
    fullName: "Bail Purdy",
    avatar: "https://robohash.org/dolorperferendissit.png?size=50x50&set=set1",
    university: "Université Dakar Bourguiba",
    department: "Legal",
  },
  {
    id: 139,
    fullName: "Delphine Issacoff",
    avatar:
      "https://robohash.org/illoprovidentarchitecto.png?size=50x50&set=set1",
    university: "Instituto Superior de Ciências Empresariais e de Turismo",
    department: "Services",
  },
  {
    id: 140,
    fullName: "Gerard Geary",
    avatar:
      "https://robohash.org/erroraliquamperspiciatis.png?size=50x50&set=set1",
    university: "Université Amar Telidji",
    department: "Support",
  },
  {
    id: 141,
    fullName: "Carry Elvey",
    avatar: "https://robohash.org/etnemonobis.png?size=50x50&set=set1",
    university: "University of South Australia",
    department: "Marketing",
  },
  {
    id: 142,
    fullName: "Aurie MacConnulty",
    avatar: "https://robohash.org/nemodolorumet.png?size=50x50&set=set1",
    university: "Instituto Tecnológico y de Estudios Superiores de Occidente",
    department: "Sales",
  },
  {
    id: 143,
    fullName: "Fern Mandrake",
    avatar:
      "https://robohash.org/corruptiasperiorescupiditate.png?size=50x50&set=set1",
    university: "University of Newcastle",
    department: "Engineering",
  },
  {
    id: 144,
    fullName: "Dolph Windrus",
    avatar:
      "https://robohash.org/consequunturreiciendisaccusantium.png?size=50x50&set=set1",
    university: "Université François Rabelais de Tours",
    department: "Research and Development",
  },
  {
    id: 145,
    fullName: "Patten Paxton",
    avatar:
      "https://robohash.org/distinctiotenetureaque.png?size=50x50&set=set1",
    university: "University of Szczecin",
    department: "Training",
  },
  {
    id: 146,
    fullName: "Eamon Dallon",
    avatar: "https://robohash.org/undemagnamet.png?size=50x50&set=set1",
    university: "Chandra Shekhar Azad University of Agriculture and Technology",
    department: "Engineering",
  },
  {
    id: 147,
    fullName: "Rurik Samwell",
    avatar: "https://robohash.org/doloremametaut.png?size=50x50&set=set1",
    university: "Worcester State College",
    department: "Product Management",
  },
  {
    id: 148,
    fullName: "Liza Boutton",
    avatar: "https://robohash.org/eligendiisteaut.png?size=50x50&set=set1",
    university: "Islamic Azad University, Bostanabad",
    department: "Sales",
  },
  {
    id: 149,
    fullName: "Vivianna Yeoland",
    avatar:
      "https://robohash.org/voluptatemofficiavelit.png?size=50x50&set=set1",
    university: "Karachi School of Art",
    department: "Sales",
  },
  {
    id: 150,
    fullName: "Ilka Joy",
    avatar:
      "https://robohash.org/necessitatibusquasvitae.png?size=50x50&set=set1",
    university: "College of St. Catherine",
    department: "Legal",
  },
  {
    id: 151,
    fullName: "Zachary Byrom",
    avatar:
      "https://robohash.org/doloressapientetenetur.png?size=50x50&set=set1",
    university: "Washington and Lee University",
    department: "Research and Development",
  },
  {
    id: 152,
    fullName: "Obie Sudell",
    avatar: "https://robohash.org/optiosapientequos.png?size=50x50&set=set1",
    university: "University of Alaska - Fairbanks",
    department: "Human Resources",
  },
  {
    id: 153,
    fullName: "Isahella Strangward",
    avatar: "https://robohash.org/sitoditmagni.png?size=50x50&set=set1",
    university: "Villa Julie College",
    department: "Human Resources",
  },
  {
    id: 154,
    fullName: "Haley Trenfield",
    avatar: "https://robohash.org/quaesintsint.png?size=50x50&set=set1",
    university: "Universidad Lasallista Benavente",
    department: "Services",
  },
  {
    id: 155,
    fullName: "Curtice Proudman",
    avatar: "https://robohash.org/quiutea.png?size=50x50&set=set1",
    university: "Tay Nguyen University",
    department: "Research and Development",
  },
  {
    id: 156,
    fullName: "Saba Hawkswood",
    avatar: "https://robohash.org/delectusautlaborum.png?size=50x50&set=set1",
    university: "Liaoning Normal University",
    department: "Accounting",
  },
  {
    id: 157,
    fullName: "Phyllis Duer",
    avatar: "https://robohash.org/easitsequi.png?size=50x50&set=set1",
    university: "Southeastern Bible College",
    department: "Sales",
  },
  {
    id: 158,
    fullName: "Grange Confait",
    avatar: "https://robohash.org/omnisquisvoluptatem.png?size=50x50&set=set1",
    university: "University of Georgia",
    department: "Training",
  },
  {
    id: 159,
    fullName: "Korrie Crannach",
    avatar: "https://robohash.org/etsitin.png?size=50x50&set=set1",
    university: "Sabzevar School of Medical Sciences",
    department: "Human Resources",
  },
  {
    id: 160,
    fullName: "Anthiathia Maryin",
    avatar: "https://robohash.org/temporeidpariatur.png?size=50x50&set=set1",
    university: "Christ University",
    department: "Services",
  },
  {
    id: 161,
    fullName: "Karylin Metcalfe",
    avatar: "https://robohash.org/quisquamomnisnon.png?size=50x50&set=set1",
    university: "Shaikh Zayed University",
    department: "Research and Development",
  },
  {
    id: 162,
    fullName: "Alard Brocket",
    avatar: "https://robohash.org/oditmodisuscipit.png?size=50x50&set=set1",
    university: "Arab Academy for Banking and Financial Sciences",
    department: "Marketing",
  },
  {
    id: 163,
    fullName: "Rolf Cowap",
    avatar:
      "https://robohash.org/estrerumreprehenderit.png?size=50x50&set=set1",
    university: "Sultan Qaboos University",
    department: "Research and Development",
  },
  {
    id: 164,
    fullName: "Nerta Danhel",
    avatar: "https://robohash.org/pariaturvoluptatemut.png?size=50x50&set=set1",
    university: "Universidad Dr. Jose Matias Delgado",
    department: "Support",
  },
  {
    id: 165,
    fullName: "Alden Barbary",
    avatar: "https://robohash.org/quaeratestharum.png?size=50x50&set=set1",
    university: "Anna Maria College",
    department: "Product Management",
  },
  {
    id: 166,
    fullName: "Maribelle Mort",
    avatar: "https://robohash.org/eosprovidentquos.png?size=50x50&set=set1",
    university: "Institute of Business Management ",
    department: "Business Development",
  },
  {
    id: 167,
    fullName: "Veronike Mallen",
    avatar: "https://robohash.org/quidemanimieius.png?size=50x50&set=set1",
    university: "Universidade Paulista",
    department: "Legal",
  },
  {
    id: 168,
    fullName: "Gwendolyn Ziebart",
    avatar:
      "https://robohash.org/cupiditatevoluptatequi.png?size=50x50&set=set1",
    university: "Aarhus Technical College",
    department: "Training",
  },
  {
    id: 169,
    fullName: "Gerry Crampsy",
    avatar:
      "https://robohash.org/iurepraesentiumarchitecto.png?size=50x50&set=set1",
    university: "Providence University",
    department: "Product Management",
  },
  {
    id: 170,
    fullName: "Dall Emett",
    avatar: "https://robohash.org/quidemetdeleniti.png?size=50x50&set=set1",
    university: "University of Wisconsin - Platteville",
    department: "Marketing",
  },
  {
    id: 171,
    fullName: "Morganne Kopec",
    avatar: "https://robohash.org/inexpeditaquam.png?size=50x50&set=set1",
    university: "Turin Polytechnic University In Tashkent",
    department: "Research and Development",
  },
  {
    id: 172,
    fullName: "Garwin Suarez",
    avatar:
      "https://robohash.org/consecteturoditcupiditate.png?size=50x50&set=set1",
    university: "Pabna University of Science and Technology",
    department: "Sales",
  },
  {
    id: 173,
    fullName: "Anett Greatex",
    avatar: "https://robohash.org/veritatisinsimilique.png?size=50x50&set=set1",
    university: "Damietta University",
    department: "Engineering",
  },
  {
    id: 174,
    fullName: "Corina Underwood",
    avatar: "https://robohash.org/optiodoloresex.png?size=50x50&set=set1",
    university: "Al Ahlia University",
    department: "Engineering",
  },
  {
    id: 175,
    fullName: "Elizabeth Jorck",
    avatar:
      "https://robohash.org/rerumdoloribusmolestias.png?size=50x50&set=set1",
    university: "Deaconess College of Nursing",
    department: "Product Management",
  },
  {
    id: 176,
    fullName: "Dorry Wrenn",
    avatar:
      "https://robohash.org/repellendusrepellatquis.png?size=50x50&set=set1",
    university: "Panjab University",
    department: "Business Development",
  },
  {
    id: 177,
    fullName: "Pamella Kesteven",
    avatar: "https://robohash.org/autemsintipsa.png?size=50x50&set=set1",
    university: "Gediz University",
    department: "Training",
  },
  {
    id: 178,
    fullName: "Vitoria Rivitt",
    avatar:
      "https://robohash.org/consequunturducimusearum.png?size=50x50&set=set1",
    university: "Universität Kaiserslautern",
    department: "Marketing",
  },
  {
    id: 179,
    fullName: "Yolane Yakunkin",
    avatar: "https://robohash.org/eumrerumsunt.png?size=50x50&set=set1",
    university: "Universiti Teknologi Mara",
    department: "Services",
  },
  {
    id: 180,
    fullName: "Ewen Andreaccio",
    avatar: "https://robohash.org/ametundevoluptatem.png?size=50x50&set=set1",
    university: "Centre d'Etudes Supérieures des Techniques Industrielles",
    department: "Marketing",
  },
  {
    id: 181,
    fullName: "Noe Oneile",
    avatar: "https://robohash.org/autestquia.png?size=50x50&set=set1",
    university: "Moscow External University of the Humanities",
    department: "Engineering",
  },
  {
    id: 182,
    fullName: "Pepi Nani",
    avatar: "https://robohash.org/sintmagniatque.png?size=50x50&set=set1",
    university: "Universidad Nacional Autonoma de Nicaragua",
    department: "Accounting",
  },
  {
    id: 183,
    fullName: "Daniela Scurr",
    avatar: "https://robohash.org/facereearumet.png?size=50x50&set=set1",
    university: "University of Banja Luka",
    department: "Business Development",
  },
  {
    id: 184,
    fullName: "Marietta Leehane",
    avatar:
      "https://robohash.org/magnamconsequaturpossimus.png?size=50x50&set=set1",
    university: "Agnes Scott College",
    department: "Legal",
  },
  {
    id: 185,
    fullName: "Culver Drewett",
    avatar: "https://robohash.org/iustosedrem.png?size=50x50&set=set1",
    university: "Koshien University",
    department: "Accounting",
  },
  {
    id: 186,
    fullName: "Pavel Torricella",
    avatar:
      "https://robohash.org/rerumdistinctiooccaecati.png?size=50x50&set=set1",
    university: "Universidad Autónoma del Estado de Morelos",
    department: "Training",
  },
  {
    id: 187,
    fullName: "Gayle Duffin",
    avatar: "https://robohash.org/maximebeataeesse.png?size=50x50&set=set1",
    university: "Minhaj University Lahore",
    department: "Marketing",
  },
  {
    id: 188,
    fullName: "Chandal Steer",
    avatar: "https://robohash.org/beataeutmolestiae.png?size=50x50&set=set1",
    university: "Mohammad Ali Jinnah University, Karachi",
    department: "Accounting",
  },
  {
    id: 189,
    fullName: "Christopher Desaur",
    avatar: "https://robohash.org/dignissimosliberoet.png?size=50x50&set=set1",
    university: "Hiroshima Shudo University",
    department: "Research and Development",
  },
  {
    id: 190,
    fullName: "Stanislaus Work",
    avatar:
      "https://robohash.org/asperioresquiavoluptatibus.png?size=50x50&set=set1",
    university: "Qom University of Medical Sciences",
    department: "Accounting",
  },
  {
    id: 191,
    fullName: "Yovonnda Mauchlen",
    avatar: "https://robohash.org/omnisaliquidnihil.png?size=50x50&set=set1",
    university: "University of Chester",
    department: "Research and Development",
  },
  {
    id: 192,
    fullName: "Silvain Jimpson",
    avatar: "https://robohash.org/eaquecommodieos.png?size=50x50&set=set1",
    university: "State University of New York College at Purchase",
    department: "Accounting",
  },
  {
    id: 193,
    fullName: "Justin Whitehorn",
    avatar: "https://robohash.org/iuresolutaexpedita.png?size=50x50&set=set1",
    university: "University of St. Michael's College",
    department: "Engineering",
  },
  {
    id: 194,
    fullName: "Rochella Labusquiere",
    avatar: "https://robohash.org/impeditsuntex.png?size=50x50&set=set1",
    university: "Daemen College",
    department: "Product Management",
  },
  {
    id: 195,
    fullName: "Courtnay Voce",
    avatar: "https://robohash.org/doloribusplaceatquis.png?size=50x50&set=set1",
    university: "Notre Dame Women's College",
    department: "Product Management",
  },
  {
    id: 196,
    fullName: "Cristian Coleson",
    avatar: "https://robohash.org/asperioresipsamipsa.png?size=50x50&set=set1",
    university: "Universidade Federal do Piauí",
    department: "Services",
  },
  {
    id: 197,
    fullName: "Randee Labrom",
    avatar: "https://robohash.org/suntabnam.png?size=50x50&set=set1",
    university: "Universidad del Centro Educativo Latinoamericano Rosario",
    department: "Research and Development",
  },
  {
    id: 198,
    fullName: "Amalita Dangl",
    avatar: "https://robohash.org/etconsequaturut.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Asunción",
    department: "Engineering",
  },
  {
    id: 199,
    fullName: "Ahmad Massimi",
    avatar: "https://robohash.org/eumestducimus.png?size=50x50&set=set1",
    university: "Ecole Supérieure de Commerce de Clermont-Ferrand",
    department: "Marketing",
  },
  {
    id: 200,
    fullName: "Carolina Huton",
    avatar: "https://robohash.org/omnisfugaquo.png?size=50x50&set=set1",
    university: "Université de Perpignan",
    department: "Training",
  },
];
// v(객체)에서 구조 분해
// data.forEach(({ avartar, department, fullName, university }) => {
//   const cardList = document.querySelector(".cardList");
//   cardList.insertAdjacentHTML(
//     "beforeend",
//     `
//   <div class = "card">
//     <div class = "left">
//       <div class = "imageBox">
//       <img src = "${v.avatar}" alt ="">
//       </div>
//       <div class ="right">
//         <div class="name">${v.fullName}</div>
//         <div class="department">${v.department}</div>
//       </div>
//     </div>
//   </div>
//   `
//   );
// });

//quiz
// 1.v(객체)를 쓰지 않고, forEach 이름과 나이 콘솔로 나타내기
const user = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

user.forEach(({ name, age }) => {
  console.log(`${name} and ${age}`);
});

//name의 변수명을 englishname으로 변경

user.forEach(({ name: englishname, age }) => {
  console.log(`${englishname} and ${age}`);
});

//2.[{name:Alice, age:25},{name:Bob, age:30},{name:Charlie, age:35}] 배열로 만들기
// const a = user.map(({ name, age }) => {
//   return { name: name, age: age };
// });

//축약버전
const a = user.map(({ name, age }) => ({ name: name, age: age }));
console.log(a);

//더 축약 버전. 변수들이 같아야 함
const b = user.map(({ name, age }) => ({ name, age }));
console.log(b);

//3. key: name->english, age-> old
const c = user.map(({ name, age }) => ({ english: name, old: age }));
console.log(c);

//축약버전
const d = user.map(({ name: english, age: old }) => ({ english, old }));

//nation이 리스트에 없으면 korean  있으면 그 값을 채워짐
const e = user.map(({ name, age, nation = "Korean" }) => ({
  name,
  age,
  nation,
}));
