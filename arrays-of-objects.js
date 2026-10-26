let matsedill = [
  { id: 1, nafn: "Fiskur", verd: 1500, flokkur: "Aðalréttur", vegan: false },
  {
    id: 2,
    nafn: "Nautasteik",
    verd: 5500,
    flokkur: "Aðalréttur",
    vegan: false,
    ofnaemi: ["glúten", "mjólk"],
    naeringagildi: { kcal: 520, protein: 32 },
  },
  { id: 3, nafn: "Salat", verd: 1200, flokkur: "Forréttur", vegan: true },
  {
    id: 4,
    nafn: "Kaka",
    verd: 2500,
    flokkur: "Eftirréttur",
    vegan: false,
  },
  {
    id: 5,
    nafn: "Sorbet",
    verd: 2000,
    flokkur: "Eftirréttur",
    vegan: true,
  },
];

console.log(matsedill.length); //sækja lengdina á arrayinu - í þessu tilfelli 5 réttir
console.log(matsedill[0].nafn); //sækja nafn fyrsta rétts - í þessu tilfelli "Fiskur"
console.log(matsedill[1].verd); //sækja verð á öðrum réttinum - í þessu tilfelli 5500

for (const rettur of matsedill) {
  console.log(`${rettur.nafn}- ${rettur.verd} kr.`); //sækja nafn allra réttanna í matsedlinum
}
console.table(matsedill); //sækja öll gögn úr matsedlinum og birta þau í töflu

const nofn = matsedill.map((rettur) => rettur.nafn); //sækja öll nöfn réttanna í matsedlinum
console.log(nofn);

const veganRettir = matsedill.filter((r) => r.vegan); //sækja alla rétti sem eru vegan
console.log(veganRettir);

const sum = matsedill
  .filter((r) => r.vegan)
  .reduce((sum, acc) => sum + acc.verd, 0); //sækja heildarverð allra vegan réttanna
console.log(sum);

const adalrettir = matsedill.filter((r) => r.flokkur === "Aðalréttur");
console.log(adalrettir); //sækja alla rétti sem eru aðalréttir

const salat = matsedill.find((r) => r.nafn === "Salat"); //sækja rétt sem heitir "Salat"
console.log(salat);

const pontun = [matsedill[0], matsedill[2], matsedill[4]]; //búa til nýtt array með réttum sem eru pantaðir
const samtals = pontun.reduce((sum, rettur) => sum + rettur.verd, 0); //sækja heildarverð allra réttanna sem eru pantaðir - acc er næsta tala
console.log(pontun);
console.log(samtals);

const eftirVerdi = matsedill.sort((a, b) => a.verd - b.verd); //raða réttunum í matsedlinum eftir verði frá lægsta til hæsta
console.log(eftirVerdi);

//er einhver réttur vegan?
const erVegan = matsedill.some((r) => r.vegan); //sækja hvort einhver réttur í matsedlinum sé vegan
console.log(erVegan);
const eruAllirVegan = matsedill.every((r) => r.vegan); //sækja hvort allir réttir í matsedlinum séu vegan
console.log(eruAllirVegan);
const erAlltOdyrt = matsedill.every((r) => r.verd < 10000); //sækja hvort allir réttir í matsedlinum séu ódýrir
console.log(erAlltOdyrt);

const veganNofn = matsedill
  .filter((r) => r.vegan)
  .sort((a, b) => a.verd - b.verd)
  .map((r) => r.nafn); //sækja nöfn allra vegan réttanna í matsedlinum og raða þeim eftir verði frá lægsta til hæsta
console.log(veganNofn);
