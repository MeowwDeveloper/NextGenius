function saveUsername() {
    let username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Nama tidak boleh kosong!");
        return;
    }

    if (localStorage.getItem("usernames")) {
        let existingNames = JSON.parse(localStorage.getItem("usernames"));

        if (existingNames.includes(username)) {
            alert("Nama ini sudah digunakan, pilih yang lain!");
            return;
        } else {
            existingNames.push(username);
            localStorage.setItem("usernames", JSON.stringify(existingNames));
        }
    } else {
        localStorage.setItem("usernames", JSON.stringify([username]));
    }

    localStorage.setItem("username", username);
    alert("Nama berhasil disimpan: " + username);
    window.location.href = "/Survey/survey.html"; // Arahkan ke halaman survei
}

