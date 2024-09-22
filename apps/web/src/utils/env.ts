export function getEnv(key: keyof LocalProcessEnv) {
  // eslint-disable-next-line node/prefer-global/process
  return process.env[key]
}
