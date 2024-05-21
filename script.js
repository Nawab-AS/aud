function len(name) {
  if (name.startsWith("pt")) { return 2 }
  if (name.startsWith("md")) { return 2 }
}

var orderNumber = 0
orderRaw = new URL(location.href).searchParams.get("order").split("-");
order = [];

for (i = 0; i < orderRaw.length; i++) {
  for (j = 0; j < Number(orderRaw[i].slice(len(orderRaw[i]))); j++) {
    order.push(orderRaw[i].slice(0, len(orderRaw[i])));
  }
}

function play() {
  if (orderNumber >= 1) {
    let prevAud = document.getElementById(
      order[(orderNumber + order.length - 1) % order.length]);
    prevAud.onpause = null
  }

  let aud = document.getElementById(order[orderNumber % order.length]).play();
  aud.onpause = () => { orderNumber++; play(orderNumber + 1) };
}
