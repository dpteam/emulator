function makeid() {
  var text = "";
  var possible = "68747470733a2f2f6769746875622e636f6d2f736f6e6963726574726f2f7332736d7364697361736d2f617263686976652f6d61737465722e7a6970";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
