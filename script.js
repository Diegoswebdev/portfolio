function toggleMode() {

    // adicionar e remover a classe light
    const html = document.documentElement;
    html.classList.toggle('light');

    //substituir a imagem
    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {

        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png");
    } else {

        // se tiver sem light mode. manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png");
    }
}