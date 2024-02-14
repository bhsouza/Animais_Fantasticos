import initAnimaNumeros from "./anima-numeros.js";

export default function iniFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = fetch(url);
      const animaisJSON = await (await animaisResponse).json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal);
      });

      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  fetchAnimais('./animaisapi.json');
}