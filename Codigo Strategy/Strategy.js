// Estrategia: Celsius
// Devuelve la temperatura en grados Celsius con un decimal.
class CelsiusStrategy {
  getWeather(tempCelsius) {
    return `🌡️ Temperatura: ${tempCelsius.toFixed(1)} °C`;
  }
}

// Estrategia: Fahrenheit
// Convierte la temperatura de Celsius a Fahrenheit 
class FahrenheitStrategy {
  getWeather(tempCelsius) {
    const fahrenheit = (tempCelsius * 9/5) + 32;
    return `🌡️ Temperatura: ${fahrenheit.toFixed(1)} °F`; // Redondear a 1 decimal
  }
}

// Estrategia: Descripción del clima
// Devuelve una descripción textual del clima según el valor en Celsius.
class DescriptionStrategy {
  getWeather(tempCelsius) {
    if (tempCelsius >= 30) return "☀️ Hace calor";
    if (tempCelsius >= 20) return "🌤️ Clima templado";
    if (tempCelsius >= 10) return "🌥️ Un poco fresco";
    return "❄️ Hace frío";
  }
}

// Contexto del patrón Strategy
// Se le puede asignar cualquier estrategia que implemente getWeather()
class WeatherContext {
  constructor(strategy) {
    this.strategy = strategy; // Estrategia actual
  }

  // Permite cambiar la estrategia
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  // Llama al método getWeather() de la estrategia actual
  getWeather(tempCelsius) {
    return this.strategy.getWeather(tempCelsius);
  }
}

// Crea una instancia global del contexto con estrategia inicial en Celsius
const clima = new WeatherContext(new CelsiusStrategy());

// Función que se llama al hacer clic en un botón o cambiar selección
function mostrarClima() {
  // Leer el valor ingresado por el usuario
  const tempBase = parseFloat(document.getElementById("tempBase").value);

  // Obtener la opción seleccionada del usuario (celsius, fahrenheit o descripción)
  const tipo = document.getElementById("tipoClima").value;

  // Cambiar la estrategia según la selección del usuario
  switch (tipo) {
    case "celsius":
      clima.setStrategy(new CelsiusStrategy());
      break;
    case "fahrenheit":
      clima.setStrategy(new FahrenheitStrategy());
      break;
    case "descripcion":
      clima.setStrategy(new DescriptionStrategy());
      break;
  }

  // Obtiene el resultado usando la estrategia actual
  const resultado = clima.getWeather(tempBase);

  // Muestra el resultado en la interfaz 
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
