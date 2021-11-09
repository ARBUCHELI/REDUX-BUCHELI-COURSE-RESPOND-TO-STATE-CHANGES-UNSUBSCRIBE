// lightSwitchReducer(), toggle(), and store omitted...
 
const reactToChange = () => {
    console.log(`The light was switched ${store.getState()}!`);
  }
  const unsubscribe = store.subscribe(reactToChange);
   
  store.dispatch(toggle());
  // reactToChange() is called, printing:
  // 'The light was switched off!'
   
  store.dispatch(toggle());
  // reactToChange() is called, printing:
  // 'The light was switched on!'
   
  unsubscribe(); 
  // reactToChange() is now unsubscribed
   
  store.dispatch(toggle());
  // no print statement!
   
  console.log(store.getState()); // Prints 'off'