// //On veut programmer une page qui réservera des dates de séjour
// //le but est de pouvoir commander et d'enlever les dates antérieurs

// //On déclare les éléments à récupérer et qui ne changeront pas
// // : début de séjour - fin de séjour - date du jour
// //.toIsoString() convertit la chaîne en format iso ( x-x-x )
const start = document.getElementById("start_date");
const end = document.getElementById("end_date");
const today = new Date().toISOString().split("T")[0];

// //Récupérer les valeurs de today et définir le minimum pour..
// //débuter le séjour, et c'est donc la date de ce jour
start.value = today;
start.min = today;

// //Déclaration de la date de demain avec un prgm:
// // ce jout (avec une variable) représente la date du jour : today
// //setDate() définit le jour du mois (relatif au début du mois courant).
// //Met à jour la date du jour
// //récup la date du jour/mois +1 jour 
// //définir ensuite qu'on peut réserver pour demain
const tomorrowDate = () => {
    let day = new Date(today);
    day.setDate(day.getDate() + 1);
    console.log(day)
    let tomorrow = day.toISOString().split('T')[0];
    end.value = tomorrow;
    end.min = tomorrow;
}
tomorrowDate();

// //créer une fonction qui attend un event: 
// //récup la date du jour
start.addEventListener('change',(e) => {
    let day = new Date(e.target.value);
    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split('T')[0]
    end.min = tomorrow;
    end.value = tomorrow;
})

// //créer une fonction qui additionne la date du jour booké
// //+ la date voulu de séjour, en calculant les nuits, envoyer le total
const bookingTotal = () => {
    let date1 = new Date(start.value);
    let date2 = new Date(end.date);
    let diffTimes = Math.abs(date2 = date1);

    let diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24))
    let nightPrice = document.getElementById('nightPrice').innerHTML;

    let total = diffTimes * nightPrice;
    document.getElementById("total").innerHTML = total;
}
start.addEventListener('change', () => bookingTotal()),
end.addEventListener('change', () => bookingTotal()),
bookingTotal();

// //renvoie => NaN :(

    // const start = document.getElementById("start_date").innerHTML;
    // const end = document.getElementById("end_date").innerHTML;
    // const today = new Date().toISOString().split("T")[0];
    // console.log(typeof start)
//     start.value = today;
//     start.min = today;
    
//     const tomorrowDate = () => {
//         let day = new Date(today);
//         day.setDate(day.getDate() + 1);
//         let tomorrow = day.toISOString().split("T")[0];
//         end.min = tomorrow;
//         end.value = tomorrow;
//     };
//     tomorrowDate();
    
//     start.addEventListener("change", (e) => {
//       let day = new Date(e.target.value);
//       day.setDate(day.getDate() + 1);
//       let tomorrow = day.toISOString().split("T")[0];
//       end.min = tomorrow;
//     });
    
//     end.addEventListener("change", (e) => {
//       let day = new Date(e.target.value);
//       day.setDate(day.getDate() - 1);
//       let yesterday = day.toISOString().split("T")[0];
//       start.max = yesterday;
//     });
    
//     const bookingTotal = () => {
//       let date1 = new Date(start.value);
//       let date2 = new Date(end.value);
//       let diffTime = Math.abs(date2 - date1);
    
//       let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       let nightPrice = document.getElementById("nightPrice").innerHTML;
    
//       let total = diffDays * nightPrice;
//       document.getElementById("total").innerHTML = total
//     };
//     start.addEventListener("change", () => bookingTotal());
//     end.addEventListener("change", () => bookingTotal());
//     bookingTotal();
// console.log(typeof bookingTotal)