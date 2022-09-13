function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora>= 0 && hora < 12){
//Bomdia
img.src = 'fotomanha.jpg'

} else if (hora >=12 && hora <18){
    //boa tarde
    img.src = 'fototarde.jpg'
} else {
    //Boa noite
    img.src = 'fotonoite.png.jpg'

}
}