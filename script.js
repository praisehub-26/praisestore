// =========================================================
// CONFIGURACIÓN DE COLOR PREMIUM (Manual / Auto cada Domingo)
// =========================================================
// 💡 MANUAL: Pon aquí un color de tu paleta si deseas fijarlo (Ej: '#FF5733'). Déjalo vacío '' para activar el cambio automático semanal.
const COLOR_MANUAL = '#40E0D0'; 

const paletaMirenn = [
  { color: '#00BCD4', name: 'Cian', circle: '🔵' },
  { color: '#40E0D0', name: 'Turquesa', circle: '🩵' },
  { color: '#87CEEB', name: 'Celeste', circle: '🔵' },
  { color: '#B0E0E6', name: 'Azul Pastel', circle: '🩵' },
  { color: '#FBC4AB', name: 'Salmón Pastel', circle: '🪸' },
  { color: '#F8C8DC', name: 'Rosa Algodón', circle: '💗' },
  { color: '#B7E4C7', name: 'Menta Pastel', circle: '🟢' },
  { color: '#A8DADC', name: 'Aqua Pastel', circle: '🩵' },
  { color: '#DCC6E0', name: 'Lavanda Suave', circle: '🪻' },
  { color: '#F3D1F4', name: 'Rosa Lila', circle: '🌷' },
	
  { color: '#808080', name: 'Gris', circle: '⚪' },
  { color: '#D3D3D3', name: 'Gris Claro', circle: '⚪' },

  { color: '#FF6666', name: 'Rojo Pastel', circle: '🔴' },
  { color: '#FFB3B3', name: 'Rosa Suave', circle: '🌸' },

  { color: '#FFA500', name: 'Naranja', circle: '🟠' },
  { color: '#FFD1A3', name: 'Durazno', circle: '🧡' },

  { color: '#D4A017', name: 'Dorado', circle: '🟡' },
  { color: '#00A86B', name: 'Verde Esmeralda', circle: '🟢' },

  { color: '#D8BFD8', name: 'Lavanda', circle: '🟣' },
  { color: '#FFD1DC', name: 'Rosa Pastel', circle: '🌸' },
  { color: '#FFB3FF', name: 'Lila Pastel', circle: '💜' },

  { color: '#D8C3A5', name: 'Café Latte', circle: '☕' },

]

// Fórmula matemática para rotar el índice exactamente cada Domingo a las 00:00 local
const fechaBase = new Date(2026, 0, 4); // Domingo base de referencia
const msPorSemana = 7 * 24 * 60 * 60 * 1000;
const semanasPasadas = Math.floor((new Date() - fechaBase) / msPorSemana);
const colorAutomatico = paletaMirenn[Math.max(0, semanasPasadas) % paletaMirenn.length];

// Aplicar el color de énfasis elegido a todo el sitio web
const colorFinal = COLOR_MANUAL !== '' ? COLOR_MANUAL : colorAutomatico;
document.documentElement.style.setProperty('--cyan-main', colorFinal);
document.documentElement.style.setProperty('--cyan-hover', colorFinal + 'CC'); // Efecto hover automático

// =========================================================
// 1. BASE DE DATOS DE PRODUCTOS
// =========================================================
const baseDeDatosMirenn = [
    // --- PRODUCTOS DE BODAS (Se verán en bodas.html) ---
    { id: "boda-01", titulo: "Copas de Matrimonio", precio: "55.00", imagen: "img/bodas/bodas-1.jpg", nota: "Grabado personalizado", categoria: "bodas" },
    { id: "boda-02", titulo: "Cuadro de Huellas", precio: "70.00", imagen: "img/bodas/bodas-2.jpg", nota: "Marco de madera premium", categoria: "bodas" },
    { id: "boda-03", titulo: "Partes de Invitación", precio: "4.50", imagen: "img/bodas/bodas-3.jpg", nota: "Corte plotter MC630T", categoria: "bodas" },
    { id: "boda-04", titulo: "Recuerdos de Boda", precio: "15.00", imagen: "img/bodas/bodas-4.jpg", nota: "Pack por docena", categoria: "bodas" },
    { id: "boda-05", titulo: "Recuerdos de Boda", precio: "15.00", imagen: "img/bodas/bodas-5.jpg", nota: "Pack por docena", categoria: "bodas" },
    { id: "boda-06", titulo: "Recuerdos de Boda", precio: "15.00", imagen: "img/bodas/bodas-6.jpg", nota: "Pack por docena", categoria: "bodas" },
    { id: "boda-07", titulo: "Recuerdos de Boda", precio: "15.00", imagen: "img/bodas/bodas-7.jpg", nota: "Pack por docena", categoria: "bodas" },
    
    // --- CAJAS DE REGALO (Se verán en cajas.html) ---
    { id: "caja-01", titulo: "Caja Sorpresa Básica", precio: "35.00", imagen: "img/cajas/cajas-1.jpg", nota: "Taza y dulces", categoria: "cajas" },
    { id: "caja-02", titulo: "Caja Premium", precio: "60.00", imagen: "img/cajas/cajas-2.jpg", nota: "Peluche, taza y chocolates", categoria: "cajas" },
    { id: "caja-03", titulo: "Caja Cumpleaños", precio: "45.00", imagen: "img/cajas/cajas-3.jpg", nota: "Bebida, snacks y fotos", categoria: "cajas" },
    { id: "caja-04", titulo: "Caja Cumpleaños", precio: "45.00", imagen: "img/cajas/cajas-4.jpg", nota: "Bebida, snacks y fotos", categoria: "cajas" },
    { id: "caja-05", titulo: "Caja Cumpleaños", precio: "45.00", imagen: "img/cajas/cajas-5.jpg", nota: "Bebida, snacks y fotos", categoria: "cajas" },
    { id: "caja-06", titulo: "Caja Cumpleaños", precio: "45.00", imagen: "img/cajas/cajas-6.jpg", nota: "Bebida, snacks y fotos", categoria: "cajas" },
    
    // --- TAZAS (Se verán en tazas.html) ---
    { id: "taza-01", titulo: "Taza Personalizada Blanca", precio: "25.00", imagen: "img/tazas/tazas-1.jpg", nota: "Diseño por ambas caras", categoria: "tazas" },
    { id: "taza-02", titulo: "Taza Mágica", precio: "35.00", imagen: "img/tazas/tazas-2.jpg", nota: "Aparece la foto con agua caliente", categoria: "tazas" },
    { id: "taza-03", titulo: "Taza con Cuchara", precio: "30.00", imagen: "img/tazas/tazas-3.jpg", nota: "Interior y cuchara de color", categoria: "tazas" },
    { id: "taza-04", titulo: "Taza con Cuchara", precio: "30.00", imagen: "img/tazas/tazas-4.jpg", nota: "Interior y cuchara de color", categoria: "tazas" },
    { id: "taza-05", titulo: "Taza con Cuchara", precio: "30.00", imagen: "img/tazas/tazas-5.jpg", nota: "Interior y cuchara de color", categoria: "tazas" },
    { id: "taza-06", titulo: "Taza con Cuchara", precio: "30.00", imagen: "img/tazas/tazas-6.jpg", nota: "Interior y cuchara de color", categoria: "tazas" },
    { id: "taza-07", titulo: "Taza con Cuchara", precio: "30.00", imagen: "img/tazas/tazas-7.jpg", nota: "Interior y cuchara de color", categoria: "tazas" },
    { id: "taza-08", titulo: "Taza con Cuchara", numeric: "30.00", precio: "30.00", imagen: "img/tazas/tazas-8.jpg", nota: "Interior y cuchara de color", categoria: "tazas" },
    
    // --- POLOS (Se verán en polos.html) ---
    { id: "polo-01", titulo: "Polo Personalizado Básico", precio: "35.00", imagen: "img/polos/polos-1.jpg", nota: "Algodón 100% pima", categoria: "polos" },
    { id: "polo-02", titulo: "Polo Estampado Premium", precio: "40.00", imagen: "img/polos/polos-2.jpg", nota: "Estampado de alta durabilidad", categoria: "polos" },
    { id: "polo-03", titulo: "Polo Urbano Custom", precio: "45.00", imagen: "img/polos/polos-3.jpg", nota: "Tallas completas S, M, L, XL", categoria: "polos" },
    { id: "polo-04", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-4.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-05", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-5.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-06", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-6.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-07", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-7.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-08", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-8.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-09", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-9.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-10", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-10.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-11", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-11.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    { id: "polo-12", titulo: "Polo Pareja Pack", precio: "75.00", imagen: "img/polos/polos-12.jpg", nota: "Incluye dos polos personalizados", categoria: "polos" },
    
    // --- AMOR (Se verán en amor.html) ---
    { id: "amor-01", titulo: "Pack Romántico", precio: "80.00", imagen: "img/amor/amor-1.jpg", nota: "Detalle especial para parejas", categoria: "amor" },
    { id: "amor-02", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-2.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-03", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-3.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-04", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-4.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-05", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-5.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-06", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-6.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-07", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-7.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-08", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-8.jpg", nota: "Corte plotter MC630T", categoria: "amor" },
    { id: "amor-09", titulo: "Stickers de Amor", precio: "15.00", imagen: "img/amor/amor-9.jpg", nota: "Corte plotter MC630T", categoria: "amor" },

    // --- ANIVERSARIOS ---
    { id: "aniv-01", titulo: "Caja de Aniversario", precio: "90.00", imagen: "img/aniversarios/aniversarios-1.jpg", nota: "Incluye brindis", categoria: "aniversarios" },
    { id: "aniv-02", titulo: "Cuadro Conmemorativo", precio: "55.00", imagen: "img/aniversarios/aniversarios-2.jpg", nota: "Diseño elegante", categoria: "aniversarios" },
    { id: "aniv-03", titulo: "Cuadro Conmemorativo", precio: "55.00", imagen: "img/aniversarios/aniversarios-3.jpg", nota: "Diseño elegante", categoria: "aniversarios" },
    { id: "aniv-04", titulo: "Cuadro Conmemorativo", precio: "55.00", imagen: "img/aniversarios/aniversarios-4.jpg", nota: "Diseño elegante", categoria: "aniversarios" },
    { id: "aniv-05", titulo: "Cuadro Conmemorativo", precio: "55.00", imagen: "img/aniversarios/aniversarios-5.jpg", nota: "Diseño elegante", categoria: "aniversarios" },
    { id: "aniv-06", titulo: "Cuadro Conmemorativo", precio: "55.00", imagen: "img/aniversarios/aniversarios-6.jpg", nota: "Diseño elegante", categoria: "aniversarios" },
    
    // --- BEBÉS ---
    { id: "bebe-01", titulo: "Body Personalizado", precio: "35.00", imagen: "img/bebes/bebes-1.jpg", nota: "Algodón antialérgico premium", categoria: "bebes" },
    { id: "bebe-02", titulo: "Manta Recibidora", precio: "45.00", imagen: "img/bebes/bebes-2.jpg", nota: "Nombre bordado a mano", categoria: "bebes" },
    { id: "bebe-03", titulo: "Manta Recibidora", precio: "45.00", imagen: "img/bebes/bebes-3.jpg", nota: "Nombre bordado a mano", categoria: "bebes" },
    { id: "bebe-04", titulo: "Manta Recibidora", precio: "45.00", imagen: "img/bebes/bebes-4.jpg", nota: "Nombre bordado a mano", categoria: "bebes" },
    { id: "bebe-05", titulo: "Manta Recibidora", precio: "45.00", imagen: "img/bebes/bebes-5.jpg", nota: "Nombre bordado a mano", categoria: "bebes" },

    // --- CUMPLEAÑOS ---
    { id: "cumple-01", titulo: "Pack Fiesta Cumpleaños", precio: "120.00", imagen: "img/cumpleanos/cumpleanos-1.jpg", nota: "Decoración y globos incluidos", categoria: "cumpleanos" },
    { id: "cumple-02", titulo: "Taza Cumpleañera", precio: "25.00", imagen: "img/cumpleanos/cumpleanos-2.jpg", nota: "Diseño festivo personalizado", categoria: "cumpleanos" },
    { id: "cumple-03", titulo: "Taza Cumpleañera", precio: "25.00", imagen: "img/cumpleanos/cumpleanos-3.jpg", nota: "Diseño festivo personalizado", categoria: "cumpleanos" },
    { id: "cumple-04", titulo: "Taza Cumpleañera", precio: "25.00", imagen: "img/cumpleanos/cumpleanos-4.jpg", nota: "Diseño festivo personalizado", categoria: "cumpleanos" },

    // --- PERSONALIZADOS ---
    { id: "pers-01", titulo: "Cuadro MDF Grabado", precio: "50.00", imagen: "img/personalizados/personalizados-1.jpg", nota: "Grabado láser de alta precisión", categoria: "personalizados" },
    { id: "pers-02", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-2.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-03", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-3.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-04", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-4.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-05", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-5.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-06", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-6.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-07", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-7.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-08", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-8.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-09", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-9.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-10", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-10.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-11", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-11.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },
    { id: "pers-12", titulo: "Llavero Acrílico Custom", precio: "12.00", imagen: "img/personalizados/personalizados-12.jpg", nota: "Corte preciso en plotter", categoria: "personalizados" },

    // --- ARREGLOS FLORALES ---
    { id: "flor-01", titulo: "Ramo de Rosas Premium", precio: "70.00", imagen: "img/florales/florales-1.jpg", nota: "Flores frescas del día", categoria: "florales" },
    { id: "flor-02", titulo: "Arreglo Floral en Caja", precio: "95.00", imagen: "img/florales/florales-2.jpg", nota: "Incluye tarjeta dedicatoria", categoria: "florales" },
    { id: "flor-03", titulo: "Arreglo Floral en Caja", precio: "95.00", imagen: "img/florales/florales-3.jpg", nota: "Incluye tarjeta dedicatoria", categoria: "florales" },
    { id: "flor-04", titulo: "Arreglo Floral en Caja", precio: "95.00", imagen: "img/florales/florales-4.jpg", nota: "Incluye tarjeta dedicatoria", categoria: "florales" },
    { id: "flor-05", titulo: "Arreglo Floral en Caja", precio: "95.00", imagen: "img/florales/florales-5.jpg", nota: "Incluye tarjeta dedicatoria", categoria: "florales" },
    { id: "flor-06", titulo: "Arreglo Floral en Caja", precio: "95.00", imagen: "img/florales/florales-6.jpg", nota: "Incluye tarjeta dedicatoria", categoria: "florales" },
    { id: "flor-07", titulo: "Arreglo Floral en Caja", precio: "95.00", imagen: "img/florales/florales-7.jpg", nota: "Incluye tarjeta dedicatoria", categoria: "florales" }
];

// =========================================================
// 2. LÓGICA AUTOMÁTICA DEL SITIO
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    const contenedorProductos = document.getElementById("contenedor-productos");
    
    if (contenedorProductos) {
        contenedorProductos.innerHTML = ""; 
        
        const parametros = new URLSearchParams(window.location.search);
        const categoriaFiltro = parametros.get("cat") || contenedorProductos.getAttribute("data-categoria");
        
        let productosMostrar = [];
        if (categoriaFiltro) {
            productosMostrar = baseDeDatosMirenn.filter(prod => prod.categoria === categoriaFiltro);
        } else {
            productosMostrar = [...baseDeDatosMirenn].sort(() => Math.random() - 0.5);
        }
        
        productosMostrar.forEach(producto => {
            const tarjetaHTML = `
                    <div class="product-card">
                        <a href="detalle.html?id=${producto.id}" style="display: block; overflow: hidden; border-radius: 4px;">
                            <img src="${producto.imagen}" alt="${producto.titulo}" onerror="if(!this.dataset.intentado){ this.dataset.intentado = true; this.src = this.src.includes('.jpg') ? this.src.replace('.jpg', '.png') : this.src.replace('.png', '.jpg'); }">
                        </a>
                        <div class="prod-details">
                            <h3 title="${producto.nota}">${producto.titulo}</h3>
                            <p style="font-size: 11px; color: var(--text-gray-light); margin-bottom: 8px;">${producto.nota}</p>
                            
                            <div class="price-row-vertical">
                                <span class="price">S/. ${producto.precio}</span>
                                <a href="detalle.html?id=${producto.id}" class="btn-detalles-iluminado">Ver Detalles</a>
                                <button class="btn-mini-carrito" onclick="agregarAlCarrito('${producto.id}', 1)">
                                    <i class="fa-solid fa-cart-plus"></i> Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            contenedorProductos.insertAdjacentHTML("beforeend", tarjetaHTML);
        });
    }

    // --- Lógica del Evento Automático ---
    const enlaceEvento = document.getElementById("evento-dinamico");
    if (enlaceEvento) {
        const hoy = new Date();
        const anio = hoy.getFullYear();
        
        const eventosPeru = [
            { nombre: "San Valentín", prefijo: "valentin", fecha: new Date(anio, 1, 14) },
            { nombre: "Día de la Mujer", prefijo: "mujer", fecha: new Date(anio, 2, 8) },
            { nombre: "Día de la Madre", prefijo: "madre", fecha: new Date(anio, 4, 10) },
            { nombre: "Día del Padre", prefijo: "padre", fecha: new Date(anio, 5, 21) },
            { nombre: "Fiestas Patrias", prefijo: "patrias", fecha: new Date(anio, 6, 28) },
            { nombre: "Día del Niño", prefijo: "nino", fecha: new Date(anio, 7, 16) },
            { nombre: "Halloween", prefijo: "halloween", fecha: new Date(anio, 9, 31) },
            { nombre: "Navidad", prefijo: "navidad", fecha: new Date(anio, 11, 25) }
        ];

        let eventoActual = "Regalos Especiales";
        let prefijoActual = "promo";

        for (let evento of eventosPeru) {
            evento.fecha.setHours(23, 59, 59, 999);
            if (hoy <= evento.fecha) {
                eventoActual = evento.nombre;
                prefijoActual = evento.prefijo;
                break;
            }
        }
        enlaceEvento.textContent = "✨ " + eventoActual;

        const tituloEvento = document.getElementById("titulo-evento");
        const gridEvento = document.getElementById("grid-evento");

        if (tituloEvento && gridEvento) {
            tituloEvento.textContent = eventoActual;
            gridEvento.innerHTML = "";
            
            for (let i = 1; i <= 3; i++) {
                const tarjetaHTML = `
                    <div class="category-card">
                        <div class="cat-info">
                            <h3>Especial ${eventoActual} ${i}</h3>
                            <p>Detalle único</p>
                            <a href="#catalogo" class="cat-link">Ver opciones</a>
                        </div>
                        <img src="img/eventos/${prefijoActual}-${i}.jpg" alt="${eventoActual} ${i}" onerror="if(!this.dataset.intentado){ this.dataset.intentado = true; this.src = this.src.includes('.jpg') ? this.src.replace('.jpg', '.png') : this.src.replace('.png', '.jpg'); }">
                    </div>
                `;
                gridEvento.insertAdjacentHTML("beforeend", tarjetaHTML);
            }
        }
    }

    // --- Lógica del Hero Aleatorio ---
    const sliderHero = document.getElementById("slider-hero");
    if (sliderHero) {
        const productosHero = [...baseDeDatosMirenn].sort(() => Math.random() - 0.5).slice(0, 3);
        const fondos = ["bg-cyan", "bg-rose", "bg-dark"];

        sliderHero.innerHTML = "";
        productosHero.forEach((producto, index) => {
            const tarjetaHero = `
                <div class="slide-smart">
                    <div class="slide-img">
                        <a href="detalle.html?id=${producto.id}">
                            <img src="${producto.imagen}" alt="${producto.titulo}" onerror="if(!this.dataset.intentado){ this.dataset.intentado = true; this.src = this.src.includes('.jpg') ? this.src.replace('.jpg', '.png') : this.src.replace('.png', '.jpg'); }">
                        </a>
                    </div>
                    <div class="slide-text ${fondos[index]}">
                        <h2>${producto.titulo}</h2>
                        <div class="decorator-line"></div>
                        <p>${producto.nota}. Personalizado a tu gusto con envío a todo el Perú.</p>
                        <a href="detalle.html?id=${producto.id}" class="btn-slider">Ver detalle</a>
                    </div>
                </div>
            `;
            sliderHero.insertAdjacentHTML("beforeend", tarjetaHero);
        });
    }
});
// =========================================================
// 3. LÓGICA DEL CARRITO DE COMPRAS
// =========================================================
let carritoMirenn = JSON.parse(localStorage.getItem("carritoMirenn")) || [];

function actualizarContador() {
    const contadores = document.querySelectorAll(".cart-count");
    const total = carritoMirenn.reduce((acc, el) => acc + el.cantidad, 0);
    contadores.forEach(c => c.textContent = total);
}

function agregarAlCarrito(id, cantidad) {
    const item = carritoMirenn.find(p => p.id === id);
    if (item) {
        item.cantidad += cantidad;
    } else {
        carritoMirenn.push({ id, cantidad });
    }
    localStorage.setItem("carritoMirenn", JSON.stringify(carritoMirenn));
    actualizarContador();
    alert("¡Producto agregado al carrito con éxito!");
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    
    // Hacer que el botón superior del carrito funcione en todas las páginas
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.style.cursor = "pointer";
        btn.onclick = () => window.location.href = "carrito.html";
    });
});
// =========================================================
// 4. LÓGICA DEL BUSCADOR GLOBAL
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    const barrasDeBusqueda = document.querySelectorAll('.search-box');
    
    barrasDeBusqueda.forEach(caja => {
        const input = caja.querySelector('input');
        const boton = caja.querySelector('button');

        const ejecutarBusqueda = () => {
            const termino = input.value.trim();
            if (termino !== "") {
                window.location.href = `buscar.html?q=${encodeURIComponent(termino)}`;
            }
        };

        boton.addEventListener('click', ejecutarBusqueda);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') ejecutarBusqueda();
        });
    });
});