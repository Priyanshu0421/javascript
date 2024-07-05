(function chai(){
    //  named iife
    console.log(`DB connected`);
})();

( () => {
    console.log(`DB connected Two`);
} )();


((name) => {
    console.log(`DB Connected Three ${name}`);
})('hitesh');