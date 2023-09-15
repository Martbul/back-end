const listeners = {
   
}


const publish = (eventName, ...eventArds) => {
   if (!listeners[eventName]) {
      return
   }

   listeners[eventName].forEach((listener) => listener(...eventArds))
}

const subscribe = (eventName,eventListener) => {
   if (!listeners[eventName]) {
      listeners[eventName] = [];
   }

   listeners[eventName].push(eventListener)

   return () => {
      console.log(`you have been unsubscribed from ${eventName}`);
      listeners[eventName] = listeners[eventName].filter(
         (listeners) => listeners !== eventListener)
   }
}

const eventBus = {
   publish,
   subscribe
}

module.exports = eventBus