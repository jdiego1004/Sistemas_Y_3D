function cambiarNoticia() {
    imagen1 = localStorage.getItem("imagen1");
    document.getElementById('imagen1').src = imagen1;
}