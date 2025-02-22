document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let surveyData = {
        techFrequency: getAnswer("techFrequency", "techFrequencyOther"),
        techInterest: getAnswer("techInterest", "techInterestOther"),
        futureTechImpact: getAnswer("futureTechImpact", "futureTechImpactOther"),
        jobReplacement: getAnswer("jobReplacement", "jobReplacementOther"),
        techHope: document.getElementById("techHope").value.trim()
    };

    localStorage.setItem("user_survey", JSON.stringify(surveyData));
    alert("Terima kasih! Anda akan diarahkan ke halaman utama.");
    
    window.location.href = "halaman_utama.html"; // Ganti dengan halaman tujuan utama
});

// Fungsi untuk mendapatkan jawaban dengan opsi "Lainnya"
function getAnswer(selectId, otherInputId) {
    let selectValue = document.getElementById(selectId).value;
    let otherValue = document.getElementById(otherInputId).value.trim();

    return selectValue === "lainnya" ? otherValue : selectValue;
}

document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-survey");

    if (surveyForm && submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            let surveyData = {};

            // Loop melalui semua pertanyaan survei
            document.querySelectorAll(".survey-question").forEach((question, index) => {
                const options = document.getElementsByName(`question-${index + 1}`);
                let selectedValue = "";

                options.forEach(option => {
                    if (option.checked) {
                        selectedValue = option.value;
                    }
                });

                // Cek jika ada input tambahan untuk "Lainnya"
                const otherInput = document.getElementById(`other-${index + 1}`);
                if (otherInput && otherInput.value.trim() !== "") {
                    selectedValue = otherInput.value.trim();
                }

                surveyData[`question-${index + 1}`] = selectedValue;
            });

            console.log("Jawaban Survei:", surveyData);

            // Simpan survei ke Local Storage
            localStorage.setItem("surveyResults", JSON.stringify(surveyData));

            // Arahkan ke halaman utama setelah survei selesai
            window.location.href = "index.html";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const otherInputs = document.querySelectorAll(".other-input");
    const selects = document.querySelectorAll("select");

    selects.forEach(select => {
        select.addEventListener("change", function () {
            const otherInput = this.parentElement.querySelector(".other-input");
            if (this.value === "Lainnya") {
                otherInput.style.display = "block";
            } else {
                otherInput.style.display = "none";
                otherInput.value = "";
            }
        });
    });
});
