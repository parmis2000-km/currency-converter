export default function toRial(dollarRate, requestedDollar) {
  const result = {
    rial: (dollarRate * requestedDollar),
    toman: ((dollarRate * requestedDollar) / 10),
  };
  return result;
}
