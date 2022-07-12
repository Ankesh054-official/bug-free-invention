const minimumScoreToWin = 100;

const scoresDolphins = "97, 112, 101";
const scoreKoalas = "109, 95, 106";

const avarageScoreDolphins =
  scoresDolphins.split(",").reduce((a, b) => {
    return Number(a) + Number(b);
  }) / 2;

const avarageScoreKoalas =
  scoreKoalas.split(",").reduce((a, b) => {
    return Number(a) + Number(b);
  }) / 2;

if (
  avarageScoreDolphins > avarageScoreKoalas &&
  avarageScoreDolphins >= minimumScoreToWin
) {
  console.log(
    "Dolphins win with " + (avarageScoreDolphins - avarageScoreKoalas) + " Score."
  );
} else if (
  avarageScoreDolphins < avarageScoreKoalas &&
  avarageScoreKoalas >= minimumScoreToWin
) {
  console.log(
    "Koalas win with " + (avarageScoreKoalas - avarageScoreDolphins) + " Score."
  );
} else if (
  avarageScoreDolphins === avarageScoreKoalas &&
  avarageScoreDolphins < minimumScoreToWin &&
  avarageScoreKoalas < minimumScoreToWin
) {
  console.log(
    "Non of them wins, It's a draw as both competetors didn't score more then minimum score to win, So nobody goty the trophy."
  );
} else if (
  avarageScoreDolphins === avarageScoreKoalas &&
  avarageScoreDolphins >= minimumScoreToWin &&
  avarageScoreKoalas >= minimumScoreToWin
) {
  console.log("It's a perfect draw.");
}
