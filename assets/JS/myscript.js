
/*  Consegna:
    -   Attraverso le timing functions, fai partire un countdown, cioè un conto alla rovescia fino alle 9:30 di domani mattina
*/

function updateCountdown() {
    let now = new Date();
    let targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 1);
    targetDate.setHours(9, 30, 0, 0);
    let timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      document.getElementById("countdown").textContent = "Countdown terminato!";

    } else {
      let ore = Math.floor(timeRemaining / (1000 * 60 * 60));
      let minuti = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let secondi = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      let countdownText = `${ore}:${minuti}:${secondi}`;
      document.getElementById("countdown").textContent = countdownText;

      setTimeout(updateCountdown, 1000);
    }
  }

  // Il countdown si avvia quando la pagina è pronta
  document.addEventListener("DOMContentLoaded", updateCountdown);

  