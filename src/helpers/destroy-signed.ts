export const destroySigned = () => {
  const signed = JSON.parse(localStorage.getItem("signed") || "false")

  if (signed === true) {
    localStorage.removeItem("signed")
  }
}
