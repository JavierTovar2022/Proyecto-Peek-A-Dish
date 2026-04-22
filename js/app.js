// ===== PLATOS DEL MENÚ =====
// Datos copiados directamente para no depender de servidor
const PLATOS = [
  { id: 1,  nombre: 'Bistec a la parrilla', descripcion: 'Corte de res jugoso asado a fuego directo, con sal y pimienta.', precio: 20000, imagen: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80', categoria: 'carne' },
  { id: 2,  nombre: 'Pasta Primavera',      descripcion: 'Pasta fresca con vegetales de temporada y queso parmesano.',    precio: 15000, imagen: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80', categoria: 'pasta' },
  { id: 3,  nombre: 'Caesar Salad',         descripcion: 'Lechuga romana con pollo grillado y aderezo clásico.',          precio: 12000, imagen: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80', categoria: 'ensalada' },
  { id: 4,  nombre: 'Cheeseburger',         descripcion: 'Hamburguesa con cheddar, lechuga y tomate.',                   precio: 10000, imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', categoria: 'rapida' },
  { id: 5,  nombre: 'Pizza Margarita',      descripcion: 'Pizza clásica con tomate, mozzarella y albahaca.',             precio: 18000, imagen: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', categoria: 'pizza' },
  { id: 6,  nombre: 'Tacos Mexicanos',      descripcion: 'Tacos de carne con guacamole y salsa.',                        precio: 14000, imagen: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80', categoria: 'rapida' },
  { id: 7,  nombre: 'Sushi Roll',           descripcion: 'Rollos de sushi con salmón y aguacate.',                       precio: 22000, imagen: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80', categoria: 'asiatica' },
  { id: 8,  nombre: 'Pollo Asado',          descripcion: 'Pollo jugoso al horno con especias.',                          precio: 16000, imagen: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80', categoria: 'carne' },
  { id: 9,  nombre: 'Hot Dog',              descripcion: 'Perro caliente con salsas y papas.',                           precio:  8000, imagen: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80', categoria: 'rapida' },
  { id: 10, nombre: 'Lasagna',              descripcion: 'Lasaña de carne con queso gratinado.',                         precio: 17000, imagen: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80', categoria: 'pasta' },
  { id: 11, nombre: 'Ensalada Griega',      descripcion: 'Tomate, pepino, aceitunas y queso feta.',                      precio: 13000, imagen: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=400&q=80', categoria: 'ensalada' },
  { id: 12, nombre: 'Arroz con Pollo',      descripcion: 'Arroz tradicional con pollo y verduras.',                      precio: 14000, imagen: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', categoria: 'tradicional' },
  { id: 13, nombre: 'Costillas BBQ',        descripcion: 'Costillas de cerdo con salsa BBQ.',                            precio: 21000, imagen: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80', categoria: 'carne' },
  { id: 14, nombre: 'Arepa con Queso',      descripcion: 'Arepa caliente rellena de queso.',                             precio:  7000, imagen: 'https://images.unsplash.com/photo-1748955309169-920300e22eee?w=400&q=80', categoria: 'tradicional' },
  { id: 15, nombre: 'Empanadas',            descripcion: 'Empanadas fritas rellenas de carne.',                          precio:  6000, imagen: 'https://images.unsplash.com/photo-1624128082323-beb6b8b508db?w=400&q=80', categoria: 'rapida' },
  { id: 16, nombre: 'Ceviche',              descripcion: 'Pescado marinado en limón con cebolla.',                       precio: 19000, imagen: 'https://images.unsplash.com/photo-1533658266890-8bd362930725?w=400&q=80', categoria: 'mar' },
  { id: 17, nombre: 'Pancakes',             descripcion: 'Pancakes con miel y frutas.',                                  precio: 11000, imagen: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&q=80', categoria: 'desayuno' },
  { id: 18, nombre: 'Waffles',              descripcion: 'Waffles crujientes con chocolate.',                            precio: 12000, imagen: 'https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?w=400&q=80', categoria: 'desayuno' },
  { id: 19, nombre: 'Helado Artesanal',     descripcion: 'Helado de vainilla y chocolate.',                              precio:  9000, imagen: 'https://images.unsplash.com/photo-1447195047884-0f014b0d9288?w=400&q=80', categoria: 'postre' },
  { id: 20, nombre: 'Brownie',              descripcion: 'Brownie de chocolate con nueces.',                             precio:  8000, imagen: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80', categoria: 'postre' }
];

// Favoritos guardados en localStorage
function getFavs() {
  return JSON.parse(localStorage.getItem('pad_favs') || '[]');
}
function toggleFav(id, btn) {
  let favs = getFavs();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    btn.textContent = '🤍';
    btn.classList.remove('active');
  } else {
    favs.push(id);
    btn.textContent = '❤️';
    btn.classList.add('active');
  }
  localStorage.setItem('pad_favs', JSON.stringify(favs));
}

// Renderizar tarjetas de platos
function renderPlatos(lista) {
  const contenedor = document.getElementById('dish-list');
  if (!contenedor) return;
  const favs = getFavs();
  contenedor.innerHTML = '';
  lista.forEach(plato => {
    const esFav = favs.includes(plato.id);
    contenedor.innerHTML += `
      <div class="dish-card">
        <img src="${plato.imagen}" alt="${plato.nombre}" />
        <div class="dish-card-body">
          <h3>${plato.nombre}</h3>
          <p>${plato.descripcion}</p>
          <div class="dish-footer">
            <span class="dish-price">$${plato.precio.toLocaleString('es-CO')}</span>
            <button class="btn-fav ${esFav ? 'active' : ''}" data-id="${plato.id}">${esFav ? '❤️' : '🤍'}</button>
          </div>
        </div>
      </div>
    `;
  });

  // Asignar eventos a los botones de favorito
  contenedor.querySelectorAll('.btn-fav').forEach(btn => {
    btn.addEventListener('click', () => toggleFav(btn.dataset.id, btn));
  });
}

// Filtros por categoría (solo en menu.html)
function initFiltros() {
  const botones = document.querySelectorAll('.filter-btn');
  if (!botones.length) return;
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      botones.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      const filtrados = cat === 'all' ? PLATOS : PLATOS.filter(p => p.categoria === cat);
      renderPlatos(filtrados);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlatos(PLATOS);
  initFiltros();
});
