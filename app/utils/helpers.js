
export function formatDate (timestamp) {
  return new Date(timestamp * 1000)
    .toLocaleDateString("ru-RU", {
      hour: 'numeric' ,
      minute: 'numeric'
    })
}