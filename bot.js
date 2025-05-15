document.addEventListener("DOMContentLoaded", function () {
    const pertanyaan = document.getElementById("pertanyaan");
    const jawabanInput = document.getElementById("jawaban");
    const tombol = document.getElementById("submit");

    // Daftar keyword & responnya
    const responKeyword = {
        "nama": `
  <img src="image/whhyyyy-vanish.gif" alt="whhyyyy vanish"
       style="max-width: 150px; display: block; margin: 0 auto 10px;">
  <p style="background-color: #FFF;">Nama ?🤔</pstyle=>
` ,
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
        "kata kata bijak": "roda selalu berputar",
        "faray": "aku gak kenal orang jelek",
        "ayam": "ayam ayam ayam",
    };

    function getBotReply(input) {
        const msg = input.toLowerCase();
        let balasan = "";

        for (const keyword in responKeyword) {
            if (msg.includes(keyword)) {
                balasan = responKeyword[keyword];
                break;
            }
        }
        if (!balasan) {
            balasan = `
  <img src="image/moona-hoshinova.gif" alt="moona hoshinova"
       style="max-width: 150px; display: block; margin: 0 auto 10px;">
  <p style="background-color: #FFF;">Hmm, aku belum ngerti maksudmu... bisa diketik dengan cara lain? 🤔</p>
`;
        }

        return balasan;
    }

    function botstart() {
        const input = jawabanInput.value.trim();

        if (input === "") {
            "Tulis dulu dong 😅";
            return;
        }

        // Tambah pesan user ke container chat
        const userDiv = document.createElement("div");
        userDiv.className = "chat-user";
        userDiv.textContent = input;
        pertanyaan.appendChild(userDiv);

        // Ambil balasan dari bot
        const reply = getBotReply(input);

        // Tambah balasan bot ke container chat (bisa ada HTML)
        const botDiv = document.createElement("div");
        botDiv.className = "chat-bot";
        botDiv.innerHTML = reply;
        pertanyaan.appendChild(botDiv);

        // Scroll otomatis ke bawah
        pertanyaan.scrollTop = pertanyaan.scrollHeight;

        // Kosongkan input
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
    pertanyaan.innerHTML = pertanyaan.innerHTML = `
    <img src="image/grant-yapping.gif" alt="Grant Yapping"
          style="max-width: 150px; display: block; margin: 0 auto 10px;">
    <p style="background-color: transparent;">Hai! Silakan tanya apa saja 😉</p>
  `;;

});
