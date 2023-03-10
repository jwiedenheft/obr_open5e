import OBR from "@owlbear-rodeo/sdk"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    let text = `count is ${counter}`
    element.innerHTML = text
    OBR.notification.show(text)
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
