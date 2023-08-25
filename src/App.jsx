import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [wicon, setWicon] = useState("Assets/clear.png");
  const [temperatura, setTemperatura] = useState(0);
  const [cidade, setCidade] = useState("");
  const [humidade, setHumidade] = useState(0);
  const [vento, setVento] = useState(0);


  const search = async () => {
    const element = document.getElementById("searchbar");
    if (element.value === "") 
    { 
      return 0;
    }

    const apikey = "dd1a80b1b0f228507bd71a6dbcc92bd4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${apikey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setTemperatura(data.main.temp);
      setCidade(data.name);
      setHumidade(data.main.humidity);
      setVento(data.wind.speed);


    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon("./Assets/clear.png");
  } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon("./Assets/cloud.png"); // Adicione .png ao caminho da imagem
  } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon("./Assets/cloud.png"); // Defina um ícone diferente aqui
  } else if (data.weather[0].icon === "04d" || data.weather.icon === "04n") {
      setWicon("./Assets/cloud.png"); // Defina um ícone diferente aqui
  } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon("./Assets/rain.png"); // Adicione .png ao caminho da imagem
  } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon("./Assets/rain.png"); // Adicione .png ao caminho da imagem
  }
  else{
    setWicon("Assets/rain.png");
  }

  }
  return (
    <>
    <div className="container w-full mx-auto">
      <div className="bg-sky-600 rounded w-[580px] h-[750px] mx-auto">
        <div className="flex flex-row justify-center content-center gap-5 pt-16 pb-4">
          <input type="text" name="searchbar" id="searchbar" className='rounded-full bg-gray-300 px-10 py-5' placeholder='Insira sua cidade'/>
          <button className='rounded-full bg-white px-8 bg-[url("./Assets/search.png")] bg-no-repeat bg-center' onClick={()=> {search()}}></button>
        </div>
        <div className="flex justify-center content-center">
          <img src={wicon} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-8xl mb-8">{ Math.round(temperatura) + "°C"}</h1>
          <h1 className="text-5xl">{ cidade }</h1>
        </div>

      <div className="flex flex-row justify-around content-center gap-5 pt-16 pb-10">
        <div className="flex gap-x-5">
        <img src="Assets/humidity.png" alt="" />
        <div className="flex flex-col">
          <h3 className='text-4xl font-semibold'>{ Math.round(humidade) + "%"}</h3>
          <h4>Humidade</h4>
          </div>
        </div>
        <div className="flex gap-x-5">
        <img src="Assets/wind.png" alt="" />
        <div className="flex flex-col ">
          <h3 className='text-4xl font-semibold'>{Math.round(vento) + "km/h"}</h3>
          <h4>Velocidade do vento</h4>
          </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
