const eventBus = require('./eventBus')

eventBus.subscribe("kitten-added", () => {
   console.log("Kitten has been added!!!");
})

const unsubscribe = eventBus.subscribe("kitten-added", (kittenName, age) => {
   console.log(`Kitten has been added!!! second time, its name is ${kittenName} and is ${age}`);
})

eventBus.subscribe("kitten-removed", () => {
   console.log("Kitten has been removed!!!");
})

eventBus.publish("kitten-added", 'puffy', 8)
eventBus.publish("kitten-removed")
unsubscribe()
console.log("-------------------------------------");
eventBus.publish("kitten-added", 'puffy', 8)
eventBus.publish("kitten-removed")