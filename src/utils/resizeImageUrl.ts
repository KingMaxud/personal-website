export function resizeImageUrl(link: string, number: number): string {
   const identifier = link.split('/').pop()
   return `https://media.graphassets.com/resize=width:${number}/${identifier}`
}
