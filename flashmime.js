var o = createElement(OBJECT);
o.setAttribute("type", FLASH_MIME_TYPE);
alert( doc.getElementsByTagName("body")[0].appendChild(o).GetVariable("$version") )
doc.getElementsByTagName("body")[0].removeChild(o);
