// ===== CUPONES DE DESCUENTO =====

// Códigos válidos: código → porcentaje de descuento
const CUPONES = {
  'PEEKA10':    10,
  'BIENVENIDO': 15,
  'VERANO20':   20
};

// Platos del menú — copiados directamente para no depender de servidor
const PLATOS = [
  { nombre: 'Bistec a la parrilla',  precio: 20000 },
  { nombre: 'Pasta Primavera',       precio: 15000 },
  { nombre: 'Caesar Salad',          precio: 12000 },
  { nombre: 'Cheeseburger',          precio: 10000 },
  { nombre: 'Pizza Margarita',       precio: 18000 },
  { nombre: 'Tacos Mexicanos',       precio: 14000 },
  { nombre: 'Sushi Roll',            precio: 22000 },
  { nombre: 'Pollo Asado',           precio: 16000 },
  { nombre: 'Hot Dog',               precio:  8000 },
  { nombre: 'Lasagna',               precio: 17000 },
  { nombre: 'Ensalada Griega',       precio: 13000 },
  { nombre: 'Arroz con Pollo',       precio: 14000 },
  { nombre: 'Costillas BBQ',         precio: 21000 },
  { nombre: 'Arepa con Queso',       precio:  7000 },
  { nombre: 'Empanadas',             precio:  6000 },
  { nombre: 'Ceviche',               precio: 19000 },
  { nombre: 'Pancakes',              precio: 11000 },
  { nombre: 'Waffles',               precio: 12000 },
  { nombre: 'Helado Artesanal',      precio:  9000 },
  { nombre: 'Brownie',               precio:  8000 }
];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cupon-activo').style.display = 'block';
});

function aplicarCupon() {
  const codigo    = document.getElementById('cupon-input').value.trim().toUpperCase();
  const resultado = document.getElementById('cupon-resultado');

  if (!codigo) {
    mostrarMensaje('Por favor ingresa un código.', 'error');
    return;
  }

  if (!CUPONES[codigo]) {
    mostrarMensaje('Código inválido. Prueba con: PEEKA10, BIENVENIDO o VERANO20.', 'error');
    resultado.style.display = 'none';
    return;
  }

  const pct = CUPONES[codigo];
  document.getElementById('cupon-pct').textContent = pct;
  mostrarMensaje('', '');

  const lista = document.getElementById('cupon-platos-lista');
  lista.innerHTML = '';
  PLATOS.forEach(p => {
    const original = p.precio;
    const final    = Math.round(original * (1 - pct / 100));
    lista.innerHTML += `
      <div class="cupon-plato-row">
        <span class="cupon-plato-nombre">${p.nombre}</span>
        <span class="cupon-plato-precios">
          <span class="precio-original">$${original.toLocaleString('es-CO')}</span>
          <span class="precio-final">$${final.toLocaleString('es-CO')}</span>
        </span>
      </div>
    `;
  });
  resultado.style.display = 'block';
}

function quitarCupon() {
  document.getElementById('cupon-resultado').style.display = 'none';
  document.getElementById('cupon-input').value = '';
  document.getElementById('cupon-mensaje').textContent = '';
}

function mostrarMensaje(texto, tipo) {
  const el = document.getElementById('cupon-mensaje');
  el.textContent = texto;
  el.className = 'cupon-mensaje ' + (tipo || '');
}
