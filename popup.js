// Tüm kopyalanabilir kutuları seç
const copyBoxes = document.querySelectorAll(".copy-box");

// Kutulara tıklama olayını ekle
copyBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const textToCopy = box.innerText;

        // Metni panoya kopyala
        navigator.clipboard.writeText(textToCopy).catch(err => {
            console.error("Kopyalama başarısız:", err);
        });

        // Tıklanan kutuya "active" sınıfı ekle
        copyBoxes.forEach(item => item.classList.remove("active"));
        box.classList.add("active");

        // Aktif sınıfı bir süre sonra kaldır
        setTimeout(() => box.classList.remove("active"), 1000);
    });
});
