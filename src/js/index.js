// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');
const mainElement = document.getElementById('main');

const profile = async () => {
  const respuesta = await fetch('../data/data.json');
  const datos = await respuesta.json();
  console.log(datos[0]);
};
profile();
const paintedProfile = () => {};
