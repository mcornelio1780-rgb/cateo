# Cateo · web + plataforma (lista para GitHub y Vercel)

Sitio estático: no hay que instalar nada ni compilar. Funciona desde el primer minuto **sin pagos y sin Firebase**, en 4 idiomas (ES · EN · PT · FR).

```
index.html        Landing (cateo.app/)
app/index.html    Plataforma (cateo.app/app/)
config.js         ← EL ÚNICO ARCHIVO QUE EDITAS (correo, WhatsApp, links de Polar, Firebase)
firestore.rules   Reglas de seguridad para pegar en Firebase
vercel.json       Ajustes de Vercel (no tocar)
assets/           Logo, favicon, imagen para compartir en redes
404.html, robots.txt, favicon.ico
```

## Orden recomendado (círculo virtuoso)

1. **Subes la web** (pasos 1 y 2) → ya tienes dominio.
2. Con ese dominio **creas los Checkout Links en Polar** (paso 3) y los pegas en `config.js`.
3. Cuando quieras cuentas reales en la nube, **activas Firebase** (paso 4) y pegas su configuración en `config.js`.

Cada vez que editas `config.js` en GitHub, Vercel publica solo en ~1 minuto. No hace falta otro zip.

---

## 1. Subir a GitHub (sin comandos)

1. github.com → **New repository** → nombre `cateo-web` → Public o Private → **Create repository**.
2. En la página vacía, clic en **uploading an existing file**.
3. Descomprime el zip y arrastra **el contenido** de la carpeta `cateo-web` (los archivos y las carpetas `app` y `assets`), no la carpeta en sí.
4. **Commit changes**.

## 2. Publicar en Vercel

1. vercel.com → **Add New… → Project** → **Import** el repo `cateo-web`.
2. Framework Preset: **Other**. No pongas Build Command ni Output Directory.
3. **Deploy**. Te da una dirección tipo `https://cateo-web.vercel.app`.
4. (Opcional) Settings → Domains → agrega tu dominio propio.

## 3. Pagos con Polar (cuando quieras)

1. En Polar, abre cada producto → **Checkout Links → Create**.
2. **Success URL**: `https://TU-DOMINIO/app/#pagado` (ej. `https://cateo-web.vercel.app/app/#pagado`).
3. Copia cada link y pégalo en `config.js`, dentro de `polar:` (informe, vitrina, portafolio, screening).
4. En GitHub: abre `config.js` → lápiz ✏️ → pega → **Commit changes**.

Mientras un link esté vacío, el botón dice **“Hacer el pedido y coordinar el pago”**: el pedido queda registrado, el cliente ve “Pago por coordinar” y a ti te llega un correo con los datos para cobrarle a mano. No aparece ningún aviso de “modo prueba”.

Con link: el cliente paga en Polar, vuelve a `/app/#pagado` y su pedido queda como “Pago en verificación”. Tú lo confirmas desde **Operaciones → Marcar pago confirmado**.

## 4. Firebase (plan gratis Spark): cuentas y base de datos en la nube

Sin Firebase, cada cuenta se guarda en el dispositivo de la persona y los pedidos te llegan por correo. Con Firebase, las cuentas sirven desde cualquier dispositivo y tú ves todos los pedidos en **Operaciones**.

1. console.firebase.google.com → **Crear proyecto** (puedes desactivar Analytics).
2. Ícono **</>** (agregar app web) → nombre `cateo-web` → **Registrar**. Copia los valores de `firebaseConfig` (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) y pégalos en `config.js → firebase`.
3. **Authentication → Comenzar → Método de acceso**:
   - Activa **Correo electrónico/contraseña** (solo el primer interruptor; el de “vínculo por correo” déjalo apagado: en el plan gratis solo permite 5 correos al día).
   - Activa **Google** y elige tu correo de asistencia.
4. **Authentication → Configuración → Dominios autorizados → Agregar dominio**: `cateo-web.vercel.app` (y tu dominio propio si lo tienes).
5. **Firestore Database → Crear base de datos** → modo **producción** → ubicación (ej. `southamerica-east1`).
6. **El paso de seguridad (el “3.4”)**: Firestore Database → pestaña **Reglas** → borra todo lo que hay → pega el contenido completo de `firestore.rules` → **Publicar**.
7. Guarda `config.js` en GitHub. En 1 minuto la web ya usa cuentas reales.

**Tu acceso de equipo:** crea tu cuenta en `/app/` con `manyosa@limly.io`. Si entras con Google queda verificada al instante; si usas contraseña, abre el correo de verificación que te llega. Desde ahí ves **Operaciones** (pedidos, pagos, etapas, intereses y fichas por aprobar). Para sumar a alguien al equipo, agrégalo en `config.js → teamEmails` **y** en la lista de `firestore.rules`.

## 5. Actualizar con un zip nuevo

Si te envío una versión nueva: GitHub → **Add file → Upload files** → arrastra los archivos (los mismos nombres se reemplazan) → Commit. **No subas el `config.js` del zip nuevo** si ya pusiste tus datos en el tuyo.

## Qué funciona hoy, sin pagos ni Firebase

Landing completa en 4 idiomas, modo claro/oscuro, vista previa por código, calculadora, páginas legales con manyosa@limly.io, formulario de contacto (abre correo o WhatsApp), creación de cuenta, registro de concesiones con mapa y vista previa, elección de plan, pedido con pago coordinado, seguimiento del pedido, directorio para inversionistas con fichas de ejemplo marcadas como “Ejemplo”, intereses, screening, panel de aliado y ajustes.

## Para tener en cuenta

- **Vercel Hobby (gratis) es solo para uso no comercial.** Si Cateo empieza a vender, la opción gratis equivalente es **Cloudflare Pages** (acepta uso comercial): Workers & Pages → Create → Pages → conecta el mismo repo de GitHub, sin build. El zip funciona igual.
- **Polar** está pensado para vender software. Los informes llevan trabajo humano; revisa sus términos antes de cobrar volumen. Alternativas: Stripe Payment Links o PayPal (sus links se pegan en el mismo lugar de `config.js`).
