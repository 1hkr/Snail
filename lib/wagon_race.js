document.addEventListener("keyup", (event) => {
  if (event.keyCode === 80) {
    // moving
    document.querySelector("#player1_race td.active + td").classList.add("active");
    document.querySelector("#player1_race td.active").classList.remove("active");
    // end of the race
    if (document.querySelector("#player1_race td:last-child").className === "active") {
      window.alert("Player 1 won");
      document.querySelector("#player1_race td.active").classList.remove("active");
      document.querySelector("#player2_race td.active").classList.remove("active");
      document.querySelector("#player1_race td:first-child").classList.add("active");
      document.querySelector("#player2_race td:first-child").classList.add("active");
    }
  }
  if (event.keyCode === 65) {
    // moving
    document.querySelector("#player2_race td.active + td").classList.add('active');
    document.querySelector("#player2_race td.active").classList.remove("active");
    // end of the race
    if (document.querySelector("#player2_race td:last-child").className === "active") {
      window.alert("Player 2 won");
      document.querySelector("#player1_race td.active").classList.remove("active");
      document.querySelector("#player2_race td.active").classList.remove("active");
      document.querySelector("#player1_race td:first-child").classList.add("active");
      document.querySelector("#player2_race td:first-child").classList.add("active");
    }
  }
});
