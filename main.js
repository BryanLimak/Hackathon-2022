var formats = ['png','jpeg','pdf','jpg']


var file
var nameFile
var cuantidadArchivos = 0
function dropHandler(ev) {
  
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();
    
    if (ev.dataTransfer.items) {
      // Use a interface DataTransferItemList para acessar o (s) arquivo (s)

      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        cuantidadArchivos ++
        if (cuantidadArchivos > 5){
            alert('Limite de archivos superado ! (5 archivos)')
        }
        // Se os itens soltos não forem arquivos, rejeite-os
        if (ev.dataTransfer.items[i].kind === 'file') {
            file = ev.dataTransfer.items[i].getAsFile();
            nameFile = file.name;

            $('#icono-upload').hide()
            $('#icono-upload-box').fadeIn()
            $('#info-arrastrar').html('Listado de archivos')
            $('.container-archivo').append('<div class="archivo grid content-center col-span-asdasdasdasd mx-5"><i id="icono-upload-box" class="text-[#56489c] fa-solid fa-file text-5xl mb-4 "></i><p id="statusArchivo" class="text-white text-xl">'+nameFile+'</p></div>')

        }
      }
    } else {
      // Use a interface DataTransfer para acessar o (s) arquivo (s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  }

  function enviarArchivos(){
    let format = nameFile.split('.');
    var formatAccepted = 0

    formats.forEach(element => {
        if (element == format[format.length - 1]) {
            formatAccepted++
        }
    });
    
    console.log(cuantidadArchivos);
    console.log(formatAccepted);
    if (cuantidadArchivos == formatAccepted) {
        $('#icono-upload').hide()
        $('.container-archivo').html('')
        $('#icono-upload-ok').fadeIn()
        $('#info-arrastrar').html('Tu archivo <b>'+name+'</b> se ha subido correctamente')
        
        formatAccepted = false;
    } else {
        console.log("ERROR");
        $('#info-arrastrar').html('ERROR')
    }

  }


  function dragOverHandler(ev) {
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();
  }