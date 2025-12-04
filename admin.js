function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "osmakandaA48" && p === "osmakandasemakinmaju") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Username atau password salah!");
  }
}

function addScore() {
  const team = document.getElementById("team").value;
  const score = document.getElementById("score").value;

  if (!team || !score) {
    alert("Isi dulu nama tim dan score!");
    return;
  }

  const table = document.getElementById("scoreboard");
  const row = document.createElement("tr");

  row.innerHTML = `<td>${team}</td><td>${score}</td>`;
  table.appendChild(row);

  document.getElementById("msg").innerText = "Score berhasil ditambahkan (note: tidak tersimpan permanen).";
}
