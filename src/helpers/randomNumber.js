export function getRandomNumber() {
  return (
    Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1)) +
    Math.ceil(0)
  ); //Максимум не включается, минимум включается
}
