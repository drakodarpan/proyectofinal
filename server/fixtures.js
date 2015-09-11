if( Menu.find().count() === 0 ){
    Menu.insert({
        titulo: "INDICADORES DE DESEMPEÑO",
        url: "indicadores",
        clase_boton: "fondo-indicadores",
        img_mostrar: "desempeno.jpg",
        alt_mostrar: "Indicadores de Desempeño"
    });

    Menu.insert({
        titulo: "COMPARACIÓN DE INDICADORES",
        url: "comparacion",
        clase_boton: "fondo-comparaciones",
        img_mostrar: "indicadores.jpg",
        alt_mostrar: "Comparación de Indicadores"
    });
}
