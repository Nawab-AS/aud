function len(name) {
  if (name.startsWith("ctp")) { return 3 }
  if (name.startsWith("md")) { return 2 }
  if (name.startsWith("om")) { return 2 }
  if (name.startsWith("pt")) { return 2 }
  if (name.startsWith("tid")) { return 3 }

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
  console.log(order[(orderNumber + order.length - 1) % order.length]);
  document.getElementById(order[(orderNumber + order.length - 1) % order.length]).onpause = null;

  let aud = document.getElementById(order[orderNumber % order.length]);
  console.log(aud);
  aud.play();
  aud.onpause = () => { orderNumber++; play() };
}

function changeVolume() {
  volume = Number(prompt("Volume 0-100")) / 100;
  auds = document.getElementsByTagName("audio");
  for (i = 0; i < auds.length; i++) {
    auds[i].volume = volume;
  }
}