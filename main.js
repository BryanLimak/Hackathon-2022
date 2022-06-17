var formats = ['png','jpeg','pdf','jpg']


var file
var nameFile
var cuantidadArchivos = 0
var formatAccepted = 0
var dropActive = false
var archivosEnviados = false
var block = false

    function dropHandler(ev) {
    ev.preventDefault();
    if (block){return}

    if (dropActive){
        reset()
    }

    dropActive = true

    if (ev.dataTransfer.items) {
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        cuantidadArchivos ++
        if (cuantidadArchivos > 3){
            cuantidadArchivos = 3
            alert('Limite de archivos superado ! (3 archivos)')
            return
        }
        // Se os itens soltos não forem arquivos, rejeite-os
        if (ev.dataTransfer.items[i].kind === 'file') {
            file = ev.dataTransfer.items[i].getAsFile();
            nameFile = file.name;
            $('#icono-upload').hide()
            $('#info-arrastrar').html('Listado de archivos')
            $('.container-archivo').append('<div class="archivo grid content-center col-span-asdasdasdasd mx-5"><i id="icono-upload-box" class="text-[#56489c] fa-solid fa-file text-5xl mb-4 "></i><p id="statusArchivo" class="text-white text-xl">'+nameFile+'</p></div>')
        }

        formats.forEach(element => {
            let format = nameFile.split('.');
            if (element == format[format.length - 1]) {
                formatAccepted++
            }
            
        });
        }
    } else {
      // Use a interface DataTransfer para acessar o (s) arquivo (s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }
  }

function enviarArchivos(){
if (cuantidadArchivos > 0 && archivosEnviados == false){
    if (cuantidadArchivos == formatAccepted) {
        $('#icono-upload').hide()
        $('.container-archivo').html('')
        $('#icono-upload-ok').fadeIn()
        $('#info-arrastrar').html('Tu archivo <b>'+name+'</b> se ha subido correctamente')
        archivosEnviados = true;
        formatAccepted = false;
        block = true
        setTimeout(() => {
            
            reset()
        }, "2000")
    } else {
        $('.alerta-error').fadeIn()
    }
}
}


function dragOverHandler(ev) {
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();
}

function cerrarError(){
    $('.alerta-error').fadeOut()
    setTimeout(() => {  
        reset()
    }, "500")
}


function reset() { 
    $('#icono-upload-ok').hide()
    $('#icono-upload').fadeIn()
    $('#info-arrastrar').html('Arrastra tus archivos aquí ')
    $('.container-archivo').html('')
    cuantidadArchivos = 0
    formatAccepted = 0
    dropActive = false
    file = ''
    nameFile = ''
    archivosEnviados = false
    block = false

}

