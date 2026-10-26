export default function toDollar(dollarRate, requestedRial) {
  const result = (requestedRial / dollarRate);
  return result;
}
