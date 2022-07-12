const bill = 430;
let tip = ((50 <= bill && bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100);
const totalBill = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}.`
);
