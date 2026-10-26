console.log("Hello, World!");

let retturNafn = "Fiskur";
let retturVerd = 1500;

console.log(`Réttur dagsins er ${retturNafn} og kostar ${retturVerd} krónur.`);
//${} til að nota breytur í strengjum
console.log(
  "Réttur dagsins er " + retturNafn + " og kostar " + retturVerd + " krónur.",
);

//nota object
const rettur = {
  nafn: "Fiskur",
  verd: 1500,
  flokkur: "Aðalréttur",
  vegan: false,
};
console.log(typeof rettur); //niðurstaðan úr þessu er object

const rettur2 = {
  nafn: "Fiskur",
  verd: 1500,
  flokkur: "Aðalréttur",
  vegan: false,
};
console.log(rettur2); //niðurstaðan úr þessu er object það sem er innan {}

const rettur3 = {
  nafn: "Fiskur",
  verd: 1500,
  flokkur: "Aðalréttur",
  vegan: false,
};
console.log(rettur3["nafn"]); //koma sér inn í objectið - inn í {} - og sækja t.d. nafn réttarsins

let lykill = "nafn";

const rettur4 = {
  nafn: "Nautasteik",
  verd: 5500,
  flokkur: "Aðalréttur",
  vegan: false,
  ofnaemi: ["glúten", "mjólk"],
  naeringagildi: { kcal: 520, protein: 32 },
};
console.log(rettur4.ofnaemi[0]);
console.log(rettur4.naeringagildi.fita); //

console.log(Object.keys(rettur4)); //þetta skilar öllum keys í objectinu
console.log(Object.values(rettur4)); //þetta skilar öllum values í objectinu
console.log(Object.entries(rettur4)); //þetta skilar öllum keys og values í objectinu
console.log(Object.keys(rettur4.naeringagildi)); //þetta skilar öllum keys í objectinu naeringagildi

for ([lykill, gildi] of Object.entries(rettur4)) {
  console.log(`${lykill}, ${gildi}`);
}

const matsedill = [
  {
    nafn: "Fiskur",
    verd: 1500,
    flokkur: "Aðalréttur",
    vegan: false,
  },
  {
    nafn: "Nautasteik",
    verd: 5500,
    flokkur: "Aðalréttur",
    vegan: false,
    ofnaemi: ["glúten", "mjólk"],
    naeringagildi: { kcal: 520, protein: 32 },
  },
];
