async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      document.getElementById('advice').innerText = data.slip.advice;
    } catch (error) {
      console.error("Error al obtener el consejo:", error);
      document.getElementById('advice').innerText = "No se pudo obtener el consejo. Inténtalo de nuevo.";
    }
  }