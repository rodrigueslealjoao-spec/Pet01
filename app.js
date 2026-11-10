
async function imagemApi() {

    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
    let dadosApi = await respostaApi.json();
    document.querySelector('.img-dog').src = dadosApi.message;
    console.log(dadosApi);

}
imagemApi()


function whatZap() {
    const texto = "Olá! Vim pelo site da NomeAPP e gostaria de agendar um horário para o meu pet";
    const textoFormatado = encodeURIComponent(texto);
    const url = "https://wa.me/5544988670677?text=" + textoFormatado;
    open(url, '_blank');
    console.log(url);
}
