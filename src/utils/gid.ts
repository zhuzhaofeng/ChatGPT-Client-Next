export function genNonDuplicateID(randomLength: number = 16) {
  return Number(
    Math.random().toString().substring(3, randomLength) + Date.now()
  ).toString(36)
}
