const materias = [
  {
    codigo: "118024",
    nombre: "Morfología I",
    prerequisitos: []
  },
  {
    codigo: "118028",
    nombre: "Morfología II",
    prerequisitos: ["118024"]
  },
  {
    codigo: "118025",
    nombre: "Biología Celular y Molecular I",
    prerequisitos: []
  },
  {
    codigo: "118029",
    nombre: "Biología Celular y Molecular II",
    prerequisitos: ["118025"]
  },
  {
    codigo: "150136",
    nombre: "Fisiología",
    prerequisitos: ["118028", "118029"]
  }
  // Agrega más materias aquí...
];

const contenedor = document.getElementById("contenedor-malla");

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerHTML = `
    <strong>${m.nombre}</strong>
    <div class="codigo">(${m.codigo})</div>
    <div class="prerequisitos">
      Prerrequisitos: ${m.prerequisitos.length > 0 ? m.prerequisitos.join(", ") : "Ninguno"}
    </div>
  `;
  contenedor.appendChild(div);
});
