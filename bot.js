document.addEventListener("DOMContentLoaded", function () {
    const pertanyaan = document.getElementById("pertanyaan");
    const jawabanInput = document.getElementById("jawaban");
    const tombol = document.getElementById("submit");

    // Daftar keyword & responnya
    const responKeyword = {
        "nama": "Namaku Bot Syauqi, bot paling ramah di dunia maya 😎",
        "kabar": "Aku baik, terima kasih! Kamu gimana?",
        "hobi": "Hobiku ngobrol dan belajar hal baru. Kamu?",
        "pacar": "Aku belum punya pacar, masih fokus belajar 🧠",
        "makan": "Aku sih suka makan data dan kode 🤖",
        "sekolah": "Sekolah itu penting, jangan bolos ya!",
        "halo": "Halo juga! 👋",
        "hai": "Hai hai! Senang ketemu kamu!",
        "mantan": "Aduh... jangan bicarakan mantan, nanti baper 😢",
        "terima kasih": "Sama-sama ya! 😊",
        "bye": "Dadah~ sampai jumpa lagi 👋",
        "kata kata": "Aku gak lagi nunggu kamu balik… cuma belum nemu alasan buat berhenti mikirin kamu.",
        "kata kata bijak": "Roda selalu berputar",
        "faray": "Aku gak kenal orang jelek",
        "marcell": "ohhh, Marcell yang kayak kumis lele itu",
        "ayam": "ayam ayam ayam",
        "irpan": "Ohh,Irpan yang kusam itu yak",
    };

    function getBotReply(input) {
        const msg = input.toLowerCase();
        let balasan =`
  <img src="image/moona-hoshinova.gif" alt="moona hoshinova"
       style="max-width: 150px; display: block; margin: 0 auto 10px;">
  <p>Hmm, aku belum ngerti maksudmu... bisa diketik dengan cara lain? 🤔</p>
`;

        for (const keyword in responKeyword) {
            if (msg.includes(keyword)) {
                balasan = responKeyword[keyword];
                break;
            }
        }

        return balasan;
    }

    function botstart() {
        const input = jawabanInput.value.trim();

        if (input === "") {
            pertanyaan.innerHTML = "Tulis dulu dong 😅";
            return;
        }

        const reply = getBotReply(input);
        pertanyaan.innerHTML = reply;
        jawabanInput.value = "";
    }

    // Event handler
    tombol.addEventListener("click", botstart);
    jawabanInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            botstart();
        }
    });

    // Pertanyaan awal
    pertanyaan.innerHTML = `
  <img src="image/grant-yapping.gif" alt="Grant Yapping"
       style="max-width: 150px; display: block; margin: 0 auto 10px;">
  <p>Hai! Silakan tanya apa saja 😉</p>
`;
});
