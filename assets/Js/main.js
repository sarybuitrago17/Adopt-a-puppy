
const Registros = []


  console.log(Registros)
  document.getElementById("start-button").addEventListener("click", function() {
    // Obtener el valor del input de nombre
    const name = document.getElementById("nameInput").value;
    const namen = document.getElementById("namen")
    namen.textContent = name
    // Validar el nombre
    if (name.length <= 3 || /\d/.test(name)) {
        alert("Error 404: Ingresa un nombre válido (mínimo 3 letras y sin números).");
    } else {
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }
});
  function Registro() {
    const carta1 = {
      WhatsApp: "",
        img: "",
         Nombre: "",
         Edad: "",
          Raza: "",
          Sexo: "",
          Esterilizacion: "",
         Descripcion: "",
         Vacunas: {
           Nombre: "",
           Para: ""
         }
       }
       const No = document.getElementById("No").value
       carta1.WhatsApp = No
    const image = document.getElementById("img").value
    carta1.img = image
    const name = document.getElementById("name").value
    carta1.Nombre = name
    const edad = document.getElementById("edad").value
    carta1.Edad = edad
    const raza = document.getElementById("Raza").value
    carta1.Raza = raza
    const sexo = document.getElementById("Sexo").value
    carta1.Sexo = sexo
    const Esterilizacion = document.getElementById("Esterilizacion").value
    carta1.Esterilizacion = Esterilizacion
    const des = document.getElementById("des").value
    carta1.Descripcion = des
    const vacuna = document.getElementById("nombreVacuna").value
    carta1.Vacunas.Nombre = vacuna
    const para = document.getElementById("para").value
    carta1.Vacunas.Para = para


    if (Object.values(carta1).some(value => value !== "")) {
        Registros.push(carta1);
      }
      const op = document.getElementById("Select_Razas");
    op.innerHTML = ""; 
      const RazasUnicas = new Set(Registros.map((R) => R.Raza));

    RazasUnicas.forEach((raza) => {
        const option = document.createElement("option");
        option.value = raza;
        option.text = raza;
        op.add(option);
    });

    console.log(RazasUnicas);

    document.getElementById("Select_Razas").addEventListener("change", function () {
        const selectedRaza = this.value;
        const filteredRegistros = Registros.filter((registro) => registro.Raza === selectedRaza);
    
        const NameDog = document.getElementById("Dog");
        NameDog.innerHTML = "";
    
        filteredRegistros.forEach((perro) => {
            const est = `
            <div class="con container  mt-4">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="display-4 title">¡Hola, soy ${perro.Nombre}!</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <h1>Edad: <span>${perro.Edad}</span></h1>
                        </div>
                        <div class="col-md-6">
                            <h1>Raza: <span>${perro.Raza}</span></h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h1>Sexo: <span>${perro.Sexo}</span></h1>
                        </div>
                        <div class="col-md-6">
                            <h1>Esterilizada: <span>${perro.Esterilizacion}</span></h1>
                        </div>
                    </div>
                    <p class="mt-3">${perro.Descripcion}</p>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="${perro.img}" alt="">
                </div>
            </div>
        </div>
            `;
    
            NameDog.innerHTML += est;
        });
    });
  const NameDog = document.getElementById("Dog")
  NameDog.innerHTML = "";

  Registros.forEach(perro => {
    const est = `
    <div class="con container  mt-4">
    <div class="row">
        <div class="col-md-6">
            <h2 class="display-4">¡Hola, soy ${perro.Nombre}!</h2>
            <div class="row">
                <div class="col-md-6">
                    <h1>Edad: <span>${perro.Edad}</span></h1>
                </div>
                <div class="col-md-6">
                    <h1>Raza: <span>${perro.Raza}</span></h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h1>Sexo: <span>${perro.Sexo}</span></h1>
                </div>
                <div class="col-md-6">
                    <h1>Esterilizada: <span>${perro.Esterilizacion}</span></h1>
                </div>
            </div>
            <p class="mt-3">${perro.Descripcion}</p>
        </div>
        <div class="col-md-6">
            <img class="img-fluid" src="${perro.img}" alt="">
        </div>
    </div>
</div>

    `;

     NameDog.innerHTML  += est

   

  })
  }

  document.getElementById("open").addEventListener("click", function() {
    document.querySelector(".form").style.display = 'grid';
    console.log("object")
  })

  document.getElementById("CloseForm").addEventListener("click", function() {
    document.querySelector(".form").style.display = 'none';
  })
  document.getElementById("MostrarTodos").addEventListener("click", function () {
    const NameDog = document.getElementById("Dog");
    NameDog.innerHTML = "";

    Registros.forEach((perro) => {
        const est = `
        <div class="con container  mt-4">
        <div class="row">
            <div class="col-md-6">
                <h2 class="display-4">¡Hola, soy ${perro.Nombre}!</h2>
                <div class="row">
                    <div class="col-md-6">
                        <h1>Edad: <span>${perro.Edad}</span></h1>
                    </div>
                    <div class="col-md-6">
                        <h1>Raza: <span>${perro.Raza}</span></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h1>Sexo: <span>${perro.Sexo}</span></h1>
                    </div>
                    <div class="col-md-6">
                        <h1>Esterilizada: <span>${perro.Esterilizacion}</span></h1>
                    </div>
                </div>
                <p class="mt-3">${perro.Descripcion}</p>
            </div>
            <div class="col-md-6">
                <img class="img-fluid" src="${perro.img}" alt="">
            </div>
        </div>
    </div>
  
        `;

        NameDog.innerHTML += est;
    });
});


function transitionNavbar() {
    const navbar = document.querySelector(".navba");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 250) {
            navbar.classList.add("navbar__active");
        } else {
            navbar.classList.remove("navbar__active");
        }
    });
}

function handleTheme() {
    const iconTheme = document.querySelector(".gran");

    iconTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
}
function handleThem() {
    const iconTheme = document.querySelector(".gra");

    iconTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
}

transitionNavbar();
handleTheme();
handleThem()
