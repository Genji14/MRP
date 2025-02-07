export const convertAvatarAlt = (avtFb: string) => {
  const [first, ...rest] = avtFb.split(' ')
  const last = rest.pop()
  return first.charAt(0) + (last?.charAt(0) ?? '')
}
