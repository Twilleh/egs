let names  = ["Hermoso Cariño", "Mariachi Loco", "Caminos de Michoacan", "Cuatro Milpas", "Tres Regalos", "Sabor a Mi", "Son de la Negra",
              "Caminos de Guanajuato", "La Madrugada", "Linda Esposa", "Mariquita", "Alta y Delgadita", "Bésame Mucho", "Amor Eterno", "Solamente Una Ves",
              "Si No Dejan", "No Llega el Olvido", "Que Chulos Ojos", "Camino Real de Colima", "Serenata Huasteca", "El Muchacho Alegre", "Sonora y Sus Ojos Negros", "Motivos", "El Árbol", 
              "No me se Rajar", "Adios Amor", "Cuando Sale la Luna", "El Rey", "La Bikina", "Cruz de Olvido", "Mujeres Divinas", "Novia Mia", "Como han pasado los años",
              "La Marcha de Zacatecas", 
              ];

let sortedNames = names.sort();



        let list = document.getElementById("songList");
        for (i = 0; i < sortedNames.length; ++i) {
            let li = document.createElement('li');
            li.innerText = sortedNames[i];
            list.appendChild(li);
        }