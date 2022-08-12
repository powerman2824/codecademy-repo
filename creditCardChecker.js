// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5
];
// Add your functions below:
const swallowCopy = (num) => {
  const copyMe = num.map((x) => x);
  return copyMe;
};

const deepCopy = (num) => {
  const copyMe = JSON.parse(JSON.stringify(num));
  return copyMe;
};

const validateCred = (num) => {
  let sum = [];
  let i = 0;
  let openObj1 = JSON.parse(JSON.stringify(num));
  let openObj2 = [];
  for (i; i < openObj1.length; i++) {
    let j = 0;
    let v = openObj1[i].length - 2;
    do {
      openObj1[i][v] = openObj1[i][v] * 2;
      if (openObj1[i][v] > 9) {
        openObj1[i][v] = openObj1[i][v] - 9;
      }
      v--;
      v--;
      j++;
    } while (j < openObj1[i].length - 1);
    openObj2.push(openObj1[i].reduce((pre, curr) => pre + curr, 0));
  }
  for (let z = 0; z < openObj2.length; z++) {
    sum.push(openObj2[z] % 10);
  }
  let cardData = JSON.parse(JSON.stringify(num));
  let vaildCards = [];
  let invaildCards = [];
  let vaildNum = 0;
  let invaildNum = 0;
  for (let q = 0; q < cardData.length; q++) {
    if (sum[q] === 0) {
      vaildNum = vaildNum + 1;
      if (cardData[q][0] === 3) {
        vaildCards.push({ company: "Amex", card: cardData[q] });
      } else if (cardData[q][0] === 4) {
        vaildCards.push({ company: "Visa", card: cardData[q] });
      } else if (cardData[q][0] === 5) {
        vaildCards.push({ company: "Mastercard", card: cardData[q] });
      } else if (cardData[q][0] === 6) {
        vaildCards.push({ company: "Discover", card: cardData[q] });
      } else {
        invaildCards.push({ company: "unknown", card: cardData[q] });
      }
    } else {
      invaildNum = invaildNum + 1;
      if (cardData[q][0] === 3) {
        invaildCards.push({ company: "Amex", card: cardData[q] });
      } else if (cardData[q][0] === 4) {
        invaildCards.push({ company: "Visa", card: cardData[q] });
      } else if (cardData[q][0] === 5) {
        invaildCards.push({ company: "Mastercard", card: cardData[q] });
      } else if (cardData[q][0] === 6) {
        invaildCards.push({ company: "Discover", card: cardData[q] });
      } else {
        invaildCards.push({ company: "unknown", card: cardData[q] });
      }
    }
  }
  const result = JSON.parse(
    JSON.stringify({ vaild: vaildCards, invaild: invaildCards })
  );
  return result;
};

// console.log(validateCred(batch));
// console.log(batch);
const allCards = validateCred(batch);
console.log(allCards.vaild.length + allCards.invaild.length);
