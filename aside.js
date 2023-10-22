let listado = document.getElementById("coffeInfo");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h2>${item.nombre}</h2>
        <h3>Origen: ${item.origen}</h3>
        <h4>Variedad: ${item.variedad}</h4>
        <p>${item.descripcion}</p>
        <hr>
      `;

      listado.append(li);
    });
  });