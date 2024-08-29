let clubesCABA= ['Boca', 'RiBer', 'San Lorenzo'];

let clubesInterior = ['Racing', 'Lanús', 'Gimnasia'];
let todosLosClubes = [...clubesCABA, ...clubesInterior ];



let todos = [...clubesInterior, ...clubesCABA]


let todos2 = []

for (let i = 0; i < clubesInterior.length; i++) {
   todos2.push(clubesInterior[i])
    
}

for (let i = 0; i < clubesCABA.length; i++) {
    todos2.push(clubesCABA[i])
     
 }

console.log(todos2);

console.log(todos);




