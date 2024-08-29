function ejecutar(cb) {
    console.log('inicio');
    cb()
    console.log('fin');

}

ejecutar(function() {
    console.log('proceso');
});