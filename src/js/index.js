// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');
const mainElement = document.getElementById('main');
const cardElement = document.getElementById('cards');
let realDates;
const profile = async () => {
  const respuesta = await fetch('../data/data.json');
  const datos = await respuesta.json();
  for (let i = 0; i <= 6; i++) {
    console.log(datos[i].timeframes.daily);
  }
};
profile();
const paintedProfileDaily = () => {
  console.log();
};
paintedProfileDaily();
