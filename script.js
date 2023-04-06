const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
        encriptarTexto(textArea);
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado; 
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
                if(stringEncriptada.includes(matrizCodigo[i][0])) {
                        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
                }
        }
        return stringEncriptada;
}

function btnDesencriptar() {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado; 
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++) {
                if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                         stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                }
        }
        return stringDesencriptada;
}

const copiarBtn = document.querySelector('.copiar');
copiarBtn.addEventListener('click', copyToClipboard);

function copyToClipboard() {
        const textarea = document.querySelector('.mensaje');
        textarea.select();
        navigator.clipboard.writeText(textarea.value)
          .then(() => {
            console.log('Text copied to clipboard');
          })
          .catch(err => {
            console.error('Error copying text to clipboard:', err);
          });
      }

      
function encriptarTexto() {
        const textarea = document.querySelector('.text-area');
        const texto = textarea.value.trim();
      
        if (!texto) {
          alert('Por favor ingresa un mensaje para encriptar.');
          return;
        }
      
        if (!validarTexto(texto)) {
          alert('Por favor ingresa solo letras del alfabeto latino sin acentos ni caracteres especiales.');
          return;
        }
       }      

function validarTexto(texto) {
        return texto.match(/^[a-zA-Z ]+$/);
      }

      
