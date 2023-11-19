let getTombol = document.getElementById("tombol");//inisiasi variabel pengambilan id tombol

window.addEventListener("scroll", function() {//tombol akan muncul jika discroll sejauh 20
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        getTombol.style.display = "block";
    } else {
        getTombol.style.display = "none";
    }
});

getTombol.addEventListener("click", function() {//tombol akan membuat layar kembali keatas jika di klik
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
