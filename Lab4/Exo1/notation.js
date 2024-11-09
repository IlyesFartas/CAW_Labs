function mean(Scores) {
  const sum = Scores.reduce((accumulator, current) => accumulator + current, 0);
  return sum / Scores.length;
}
module.exports = mean;
