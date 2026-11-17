/* =====================================================================
   CATEO · ÚNICO ARCHIVO QUE TIENES QUE EDITAR
   Edítalo directo en GitHub (lápiz ✏️ → "Commit changes").
   Vercel vuelve a publicar la web solo, en 1 minuto.

   Regla de oro: deja las comillas "" y las comas tal como están.
   Si un campo queda vacío "", la web sigue funcionando sin esa parte.
   ===================================================================== */
window.CATEO_CONFIG = {

  /* Correo de contacto que aparece en la web y recibe los pedidos */
  contactEmail: "manyosa@limly.io",

  /* WhatsApp con código de país, solo números. Ej.: "51987654321". Vacío = no se muestra */
  whatsapp: "",

  /* Correos del equipo: al entrar con uno de estos ven el panel de Operaciones */
  teamEmails: ["manyosa@limly.io"],

  /* ---------- PAGOS (Polar) ----------
     Pega aquí cada Checkout Link cuando lo crees en Polar.
     Mientras estén vacíos, el botón dice "Hacer el pedido y coordinar el pago":
     el pedido se registra y te llega un correo para cobrarlo a mano.
     En Polar, como "Success URL" usa:  https://TU-DOMINIO/app/#pagado            */
  polar: {
    informe:    "",   // Informe Cateo · US$ 149
    vitrina:    "",   // Informe + Vitrina · US$ 249
    portafolio: "",   // Portafolio 5 concesiones · US$ 590
    screening:  ""    // Screening para inversionistas · US$ 290
  },

  /* ---------- CUENTAS Y BASE DE DATOS (Firebase, plan gratis) ----------
     Pega aquí el bloque "firebaseConfig" que te da Firebase
     (Configuración del proyecto → Tus apps → Web).
     Mientras esté vacío, las cuentas se guardan en el dispositivo de cada persona. */
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  /* Enlace de Cal.com u otro para agendar reuniones (opcional) */
  calUrl: "",

  /* Redes sociales (opcional): pega la URL completa de cada perfil */
  social: { linkedin: "", instagram: "", tiktok: "", x: "" },

  /* Fin del precio fundador (opcional). Ej.: "2026-12-15T04:59:59Z".
     Vacío = no se muestra la cuenta regresiva */
  founderEnds: "",

  /* Estado de EE. UU. donde está registrada Limly LLC (opcional) */
  llcState: ""
};
