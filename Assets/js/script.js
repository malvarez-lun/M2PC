
let resumen = "¡Hola! bienvenido a mi portafolio donde podrás encontrar información de mis trabajos, clientes y habilidades. Si tienes algún comentario o quieres contactarte conmigo, sólo deja tus datos en el formulario.";
let hab_tec = [
    "HTML",
    "CSS",
    "Javascript",
    "Vue"
];
let hab_soft = [
    "Trabajo en Equipo",
    "Liderazgo",
    "Capacidad de Análisis",
    "Proactividad"
];
let intro_clientes = "Algunos clientes para los que he trabajado";
let intro_formulario = "Completa el formulario para ponerte en contacto conmigo"
let footer_text = "Created by Mauricio Alvarez - 2024";

// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    const boton = document.getElementById("form");
    // Añadir un event listener para el evento 'submit'
    boton.addEventListener("submit", function(event) {
      // Prevenir el envío del formulario
      event.preventDefault();
  
    // Obtener los valores de los campos de texto 
    const campo1 = document.getElementById("mail").value; 
    const campo2 = document.getElementById("text_area").value;
    // Verificar si los campos están vacíos 
    if (campo1 === "" || campo2 === "") { 
        const mensaje = "Ambos campos deben ser llenados.";
        alert(mensaje);
    } else { 
        boton.addEventListener('click', function() {
            // Acción que se realiza cuando se hace clic en el botón
            const mensaje = 'Formulario enviado, ¡Muchas gracias por ponerte en contacto conmigo!';
            alert(mensaje);
        });
    }
    });

  });



//Carga de Strings:
let insert_resumen = document.getElementById("id_resumen");
insert_resumen.textContent = resumen;

let insert_footer = document.getElementById("id_footer");
insert_footer.textContent = footer_text;
listarHabilidades();
listarCard();

function listarHabilidades(){
    let nuevoElemento;
    let miLista = document.getElementById("list_hab");
    let miLista2 = document.getElementById("list_hab_soft");
    for(let i=0;i<hab_tec.length;i++){
        // Crear un nuevo elemento li 
        nuevoElemento = document.createElement("li"); 
        // Asignar el texto del array al li 
        nuevoElemento.textContent = hab_tec[i]; 
        // Insertar el li en la lista ul 
        miLista.appendChild(nuevoElemento);
    }
    for(let i=0;i<hab_tec.length;i++){
        // Crear un nuevo elemento li 
        nuevoElemento = document.createElement("li"); 
        // Asignar el texto del array al li 
        nuevoElemento.textContent = hab_soft[i]; 
        // Insertar el li en la lista ul 
        miLista2.appendChild(nuevoElemento);
    }
    return;
}

function listarCard(){

    const cardClientes = [
        {
            image: "Assets/img/copec.png",
            cliente: "Copec"
        },
        {
            image: "Assets/img/entel.png",
            cliente: "Entel"
        },
        {
            image: "Assets/img/itau.png",
            cliente: "Itau"
        },
        {
            image: "Assets/img/LATAM.png",
            cliente: "LATAM"
        },
        {
            image: "Assets/img/santander.png",
            cliente: "Copec"
        }
    ];

    // Obtener el contenedor de tarjetas 
    const cardContainer = document.getElementById("cards"); 
    // Crear tarjetas 
    cardClientes.forEach(card => { 
        // Crear el elemento de la tarjeta 
        const cardElement = document.createElement("div"); 
        cardElement.style = "width: 8rem; padding: 5px;"; 
        cardElement.innerHTML = ` 
                                        <img src="${card.image}" class="card-img-top" alt="${card.title}"> 
                                <div class="card-body"> 
                                
                                </div> 
                                 `; 
        // Añadir la tarjeta al contenedor 
        cardContainer.appendChild(cardElement);
    });

}


    
        
  