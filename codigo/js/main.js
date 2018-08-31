Vue.filter('mayusculas', (value) => value.toUpperCase());
new Vue({
    el: 'main',
    mounted() {
       axios
            .get('https://mindicador.cl/api')
            .then((respuesta) => {
               this.indicadores = respuesta.data;
            });
        
    },
    data: {
        indicadores: null,
        texto: 'Hola Mundo desde vue2',
        nombre: 'Jordan',
        apellido: 'Rodirguez',
        nota: 5,
        peliculas: ['Batman vs superman', 'AA', 'la verdad duele', 'los mercenarios', 'spiderman', 'Catastrofe in the hell'],
        frutas: [
            { nombre: 'manzana',temporada: 'Invierno',precio: 'bajo' },
            { nombre: 'naranja',temporada: 'otoño',precio: 'medio' },
            { nombre: 'cereza',temporada: 'Primavera',precio: 'Alto' },
            { nombre: 'Sandia',temporada: 'Verano',precio: 'Medio' }
        ],
        superfruta: { nombre: 'Sandia', temporada: 'Verano', precio: 'Medio' },
        peliculaNueva: null,
        busqueda: null,
        confirmado: null
    },
    methods: {
        crearPelicula(){
            this.peliculas.unshift(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(indice){
            this.peliculas.splice(indice, 1);
        },
        marcar(index){
            this.confirmado = index;
        }
    },
    computed: {
        nombreYapellidos(){
            let date = new Date();
            let year = date.getFullYear();
            return this.nombre+" "+this.apellido+" - Nota: "+this.nota+" "+year+"/"+date.getMonth()+"/"+date.getDay();
        },
        peliculasOrdenadas(){
            return this.peliculas.sort();
        },
        buscarFruta(){
            return this.frutas.filter( (fruta) => fruta.nombre.includes(this.busqueda) )
        }
    }
});
