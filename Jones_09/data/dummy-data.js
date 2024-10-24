
// Imports the classes for the data to be created 
import Country from "../models/country";
import Vacation from "../models/vacation";


//This is the information about the countries 
export const COUNTRY = [
  new Country("s1", "India", "#FF671F"), // Red
  new Country("s2", "France", "#002654"), // Blue
  new Country("s3", "Hong Kong", "#DE2910"), // Green
  new Country("s4", "Laos", "#002868"), // Orange
  new Country("s5", "Vietnam", "#FFCD00"), // Purple
  new Country("s6", "Singapore", "#EE2536"), // Yellow
  new Country("s7", "Phillippines", "#0032A0"), // Light Blue
  new Country("s8", " Taiwan", "#FE0000"), // Light Green
  new Country("s9", "Netherlands", "#C8102E"), // Deep Orange
  new Country("s10", "Thiland", "#00247D"), // Deep Purple
];


//This is the vacation spots that is linked to the countries through the id
export const VACATION = [
  new Vacation(
    "c1",
    "s1",
    "Taj Mahal ",
    14,
    1632,
    5.0,
    "Iconic wonder of the world, this is made of ivory-white marble on the banks of the Yamuna river",
    "https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg "
  ),
  new Vacation(
    "c2",
    "s2",
    "Eiffel Tower",
    "$38.31 Adult ",
    "January 26, 1887",
    4.5,
    "A wrought-iron lattive tower created by a French engineer.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqWGMcklTjwDIR6tKZjJHE-9IQ30HuQ2ZKA&s"
  ),
  new Vacation(
    "c3",
    "s3",
    "Lain Tan Buddha",
    "Free admission",
    "December 29, 1993 ",
    4.5,
    "34-foot tall bronze statue of the Buddha on the Lantau Island",
    "https://media.istockphoto.com/id/1297895011/photo/tian-tan-buddha-also-known-as-the-big-buddha-hong-kong-china.jpg?s=612x612&w=0&k=20&c=EYvLqibbU2qFJ6WmiOqRgsiqRpejM_gfIlqQqkFJ830="
  ),
  new Vacation(
    "c4",
    "s4",
    "Pha That Luang Vientiane",
    "Free to entry",
    1566,
    4.5,
    "This Buddhist temple is one of Laos's most impressive religous structers.",
    "https://images.locationscout.net/2017/10/sik-sik-yuen-wong-tai-sin-temple-hong-kong-hong-kong-2ms2.jpg?h=500&q=60"
  ),
  new Vacation(
    "c5",
    "s5",
    "Hoan Kiem Lake ",
    "No entreance Fee",
    "18th Centuray",
    5.0,
    "Beautiful fresh water lake that is in the heart of Hanoi",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLRAdRQhzDRt7ID9jZ0ps8EWjX32Z2I8eDA&s"
  ),
  new Vacation(
    "c6",
    "s6",
    "Gardens by the Bay",
    15.13,
    "June 29 2012",
    4.7,
    "Botaical Garden in Singapore home to a collection of over 1.5 billion plants ",
    "https://imgcdn.flamingotravels.co.in/Images/PlacesOfInterest/Gardens-By-The-Bay-3.jpg"
 ),
  new Vacation(
    "c7",
    "s7",
    "Fort Santiago",
    "F1.29",
    1571,
    4.6,
    "Now labled as a historical landmark. Presntaly a national shrine. ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKzjBjIRFyq1x8UmRKwWOa6j0ape16nYa1g&s"
  ),
  new Vacation(
    "c8",
    "s8",
    "Hiang Kai-shek Memorial Hall ",
    "Free to entry",
    "April 4, 1980 ",
    4.5,
    "A memorial hall that is built in the memory of the Chiang Kai-shek teh 1st preseident of the Republic of China.",
    "https://museums.moc.gov.tw/EN/Upload/FrontPhoto/059bfea8-12df-49f0-8158-0b53e3b59434.jpg"
  ),
  new Vacation(
    "c9",
    "s9",
    "Van Gogh Museum ",
    23.70,
    "June 2, 1973",
    4.6,
    "An art museum with the paintings from the famed Van Gogh",
    "https://media.architecturaldigest.com/photos/55f9e2604254f7de34560325/master/pass/dam-images-daily-2015-09-van-gogh-museum-van-gogh-museum-entrance-01.jpg"
  ),
  new Vacation(
    "c10",
    "s10",
    "The Grand Palace",
    14.82,
   "May 6, 1782",
    4.5,
    "Complex buildings in the heart of Bangkok where ritaul ceremonies and welcoming foreign dignitaries happen.",
    "https://www.travelonline.com/thailand/attractions/grand-palace/thailand-generic-grand-palace-hd-56219-banner.jpg"
  ),
  new Vacation(
    "c11",
    "s1",
    "Gateway Of India Mumbai",
    "Free Admission",
    "March 31, 1911",
    4.6,
    "Historical Landmark that is an arch-monument on the waterfront of mumbia",
    "https://lh3.googleusercontent.com/p/AF1QipPaKHoIPvRZtgQFXX-v0JS3elhZOQAEcR4EtB3L=s1360-w1360-h1020"
  ),
  new Vacation(
    "c12",
    "s2",
    " Louvre ",
    18.30,
    "August 10, 1793",
    4.0,
    "National Art musueum that hold some of the most recongizable paintings.",
    "https://lp-cms-production.imgix.net/2021-04/shutterstockRF_1035503722.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75"
  ),
  new Vacation(
    "c13",
    "s3",
    "Sik Sik Yuen Wong Tai Sin Temple",
    "Free Admission",
    1921,
    4.0,
    "A famous shrine and temple for the Great Immortal Wong.",
    "https://images.locationscout.net/2017/10/sik-sik-yuen-wong-tai-sin-temple-hong-kong-hong-kong-2ms2.jpg?h=500&q=60"
  ),
  new Vacation(
    "c14",
    "s4",
    "Patuxay - Victory Monument ",
    "Free admission",
    1968,
    4.0,
    "A war monument in downtown Vientiane",
    "https://www.renown-travel.com/images/patuxai-vientiane-at-dusk-l.jpg"
  ),
  new Vacation(
    "c15",
    "s5",
    "Hoi An Night Market",
    "No Cost for Admission",
    2012,
    4.5,
    "Local market for venders to sell their products",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrduWKzqmiActpMHBq5ZEIdNzvMuaNDcXpg&s"
  ),
  new Vacation(
    "c16",
    "s6",
    "National Gallery Singapore",
    " Cost: $20 for standard",
   " November 24, 2015",
    4.5,
    "World’s largest public display of modern Southeast Asian art ",
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020"
  ),
  new Vacation(
    "c17",
    "s7",
    "Batad Rice Terraces",
    "Free Admission",
    "1st Centeruy ",
    4.7,
    "This is a memorial of over Thousand generations of terrice farming",
    "https://i.pinimg.com/736x/a9/69/fd/a969fdaecede3da906bedeb0e7d5981b.jpg"
  ),
  new Vacation(
    "c18",
    "s8",
    "Longshan Temple",
    "Free Admission",
    1738,
    4.5,
    "Famous temple in Teipei where worshiping Guanshivin Buddha and other spirits.",
    "https://media.istockphoto.com/id/606191742/photo/night-scene-of-longshan-temple.jpg?s=612x612&w=0&k=20&c=O3dUiTSSe1FZGlcg4ysmi4W_gS6_Xme_297jKZUAxaM="
  ),
  new Vacation(
    "c19",
    "s9",
    "Keukenhof ",
    24.78,
    1641,
    4.7,
    "Beautiful botanical gardens with windmills",
    "https://media.istockphoto.com/id/937057490/photo/traditional-dutch-windmills-and-houses-near-the-canal-in-zaanstad-village-zaanse-schans.jpg?s=612x612&w=0&k=20&c=KCX_ueIYeZlqPwJB8gHke2Mvd81eEcuSN_w9KjpG2EI="
  ),
  new Vacation(
    "c20",
    "s10",
    "Wat Arun  Ratchawararam Ratchawaramahawihan",
    2.86,
    "Early nineteenth century",
    4.6,
    "Temple of the Dawn Buddha personified as radiation of the rising sun. ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmHLnxy0mwq0m4mI7VdlWI0qjSwj9Lxhg1A&s"
  ),
];
