## Búsqueda activa de empresa para la FE

### Tutoría de 2.º SMR · IES Jorge Juan · Curso 2026-27 · Tarea obligatoria

> [!abstract] Objetivo
> Conseguir **tú mismo** una empresa donde hacer la **FE** (**Formación en Empresa**: las prácticas del ciclo en una empresa de verdad).
>
> Para eso vas a:
> 1. Decidir **qué tipo de empresa** quieres.
> 2. Encontrar, **con ayuda de la IA**, las empresas de ese tipo que hay cerca de tu casa.
> 3. **Comprobar** que esas empresas existen y que sus datos son reales.
> 4. Guardarlas en una **base de datos**: un fichero con 20 empresas como mínimo.
> 5. **Llamar, escribir e ir en persona** a pedir las prácticas.
> 6. Programar una **web** que muestre tus empresas en un mapa.

> [!info] Por qué lo haces tú y no el tutor
> Porque una empresa acepta mucho antes a alguien que **se presenta por su cuenta**, que llama, que se ha informado de lo que hacen y que da la cara. Es lo mismo que harás cuando busques trabajo. Y porque eliges tú: una empresa que te interesa, a una distancia a la que puedes ir cada día.

---

## 1 · Fechas y entregas

| Entrega | Qué | Fecha límite |
| :-: | :--- | :--- |
| **1** | **Vídeo** de la pantalla mientras buscas empresas con la IA | **Miércoles 30/09/2026** |
| **2** | **Base de datos** `empresas.csv` con **20 empresas mínimo**, comprobadas | **Miércoles 30/09/2026** |
| **3** | **Web** que muestra tus empresas en un mapa | **Viernes 30/10/2026** |

> [!danger] Es obligatoria
> Sin empresas de contacto no hay prácticas. No es un trabajo para subir nota: **es tu plaza**.

> [!success] Dónde se trabaja
> **En clase y en casa.** Todo vive en tu repositorio de GitHub: lo que hagas en clase lo tienes en casa, y al revés. Solo tienes que acordarte de una regla: **`git pull` al sentarte y `git push` al levantarte.**

---

## 2 · Qué vas a gestionar

Esto no es solo buscar. Durante un mes vas a llevar **tu propio proceso de selección**:

| Qué gestionas | Dónde lo apuntas | Cuándo |
| :--- | :--- | :--- |
| Qué empresa quieres y por qué | `01_Sector.md` | Día 1 |
| Cómo has usado la IA y qué te ha inventado | `02_Proceso_IA.md` | Mientras buscas |
| Los datos de cada empresa | `datos/empresas.csv` | Cada vez que compruebas una |
| Cada llamada, correo o visita | `03_Seguimiento.md` | **El mismo día** |
| En qué punto está cada empresa | Columna `estado` del CSV | Cada vez que cambia algo |
| Cuándo volver a llamar | Columna `notas` del CSV | Tras cada contacto |

---

## 3 · Las reglas de la IA

> [!abstract] Qué es aquí "la IA"
> Un asistente de chat: **ChatGPT, Gemini, Copilot** o el que uses. Le escribes lo que quieres (eso se llama **prompt**) y te contesta.

> [!success] Cuándo SÍ usarla
> - Para **descubrir** qué tipos de empresa hay en tu sector.
> - Para **hacer una primera lista** de empresas cercanas.
> - Para **pasar a formato CSV** datos que ya has comprobado tú.
> - Para **preparar** lo que vas a decir al llamar o el correo que vas a mandar.
> - Para **programar la web**, paso a paso y entendiendo lo que te da.

> [!danger] Cuándo NO fiarte de ella
> - **Teléfonos, direcciones, correos y nombres de personas.** Los inventa con total seguridad. Una empresa puede no existir, haber cerrado o haberse mudado.
> - **Nunca** metas en el CSV un dato que te ha dado la IA sin comprobarlo en la web de la empresa, en Google Maps o por teléfono.

> [!warning] Lo que NUNCA le escribes a la IA
> **Tu dirección**, tu DNI, tu teléfono ni datos de tu familia. Para buscar cerca de casa basta con **un cruce de calles o una plaza** de tu barrio.

> [!tip] Cómo se le pregunta bien
> Un buen prompt tiene cuatro partes:
> 1. **Quién eres:** "Soy estudiante de 2.º de Sistemas Microinformáticos y Redes".
> 2. **Qué quieres:** "Busco empresas donde hacer prácticas".
> 3. **Condiciones:** sector, zona, distancia.
> 4. **Cómo quieres la respuesta:** "en una tabla con estas columnas", "indica de dónde sacas cada dato".
>
> Si la respuesta no te sirve, **no empieces de cero**: dile qué está mal ("la empresa 3 no existe, sustitúyela", "solo quiero empresas a menos de 5 km").

---

## 4 · El trabajo, paso a paso

> [!example] Paso 0 — Prepara tu ordenador de casa
> En los ordenadores de clase ya está todo instalado. **En casa**, con Windows, necesitas:
>
> | Programa | Para qué | Dónde se descarga |
> | :--- | :--- | :--- |
> | **Git** | Bajar y subir tu trabajo a GitHub | `https://git-scm.com/download/win` |
> | **Python** | Arrancar el servidor de la web (entrega 3) | `https://www.python.org/downloads/` |
> | **LibreOffice** | Editar el CSV | `https://es.libreoffice.org/descarga/` |
> | **OBS Studio** | Grabar la pantalla | `https://obsproject.com/` |
>
> > [!warning] Al instalar Python
> > En la **primera pantalla** del instalador marca la casilla **"Add python.exe to PATH"** antes de pulsar **Install Now**. Si no la marcas, Windows no encontrará `python` y el Paso 12 no funcionará.
>
> **Compruébalo.** Abre el menú Inicio, escribe `cmd` y pulsa Intro. En la ventana negra escribe:
> ```
> git --version
> python --version
> ```
> - **Bien:** cada uno responde con un número de versión (por ejemplo `git version 2.51.0`).
> - **Mal:** `"git" no se reconoce como un comando…` → no está instalado, o Python se instaló sin marcar la casilla. Reinstálalo.

> [!example] Paso 1 — Saca tu copia del repositorio
> 1. Entra en **`https://github.com/sor-iesjj/fe-busqueda-empresas`** con tu cuenta de GitHub.
> 2. Pulsa el botón verde **Use this template → Create a new repository**.
> 3. **Repository name:** `fe-busqueda-empresas`.
> 4. Marca **Private**. *(El porqué, justo debajo.)*
> 5. Pulsa **Create repository**.
> 6. En tu repositorio: **Settings → Collaborators → Add people** → escribe **`pedronavas`** (tu tutor) → **Add**.
>
> > [!warning] Por qué PRIVADO
> > Vas a guardar **nombres y teléfonos de personas reales** de las empresas. Son datos personales de otra gente y no pueden quedar publicados en internet. Así solo lo veis tú y tu tutor.
>
> > [!info] Por qué "Use this template" y no copiar el repositorio del profesor
> > Con **Use this template** GitHub te crea **un repositorio tuyo**, independiente, con las carpetas y ficheros ya colocados. Puedes escribir y subir cambios sin tocar el del profesor. Todos tenéis la misma estructura, y la web funcionará igual con los datos de cualquiera.

> [!example] Paso 2 — Bájalo a tu bóveda
> Hazlo **en clase y en casa** (una vez en cada ordenador).
> 1. Abre la carpeta **`01_Practicas`** de tu bóveda en el Explorador de archivos.
> 2. Pulsa en la **barra de direcciones** (donde pone la ruta), escribe `cmd` y pulsa **Intro**. Se abre una terminal **ya situada en esa carpeta**.
> 3. Escribe, cambiando `TU_USUARIO` por tu usuario de GitHub:
>
> ```
> git clone https://github.com/TU_USUARIO/fe-busqueda-empresas.git 99_FE
> ```
>
> 4. La primera vez se abre una ventana para **iniciar sesión en GitHub**. Inicia sesión y autoriza.
> 5. Comprueba que existe la carpeta `01_Practicas\99_FE` con `README.md`, `datos` y `web` dentro.
>
> > [!info] Por qué el `99_FE` del final
> > Es el nombre de la carpeta en tu ordenador. Sin él, Git la llamaría `fe-busqueda-empresas` y **la misma cosa tendría dos nombres**: uno en Teams (`99_FE`) y otro en tu bóveda.
>
> > [!danger] En el ordenador de clase
> > Es un ordenador compartido. **Al acabar la tarea** (en octubre), borra tu sesión: menú Inicio → **Administrador de credenciales** → **Credenciales de Windows** → la entrada `git:https://github.com` → **Quitar**. Si no, el siguiente que se siente puede subir cosas a tu repositorio.

> [!example] Paso 3 — La rutina de cada día
> Abre la terminal en `01_Practicas\99_FE` (como en el Paso 2) y:
>
> **Al sentarte:**
> ```
> git pull
> ```
> **Al levantarte:**
> ```
> git add .
> git commit -m "Qué he hecho, en pocas palabras"
> git push
> ```
>
> > [!tip] Commits pequeños y claros
> > `Sector elegido`, `Añadidas 5 empresas`, `Verificada la empresa 7`, `Llamada a la empresa 3`. El historial de GitHub enseña **cuándo** has trabajado: se ve si ha sido día a día o todo la última noche.
>
> > [!warning] Si `git push` da error
> > Casi siempre es que has trabajado en otro ordenador y no hiciste `git pull` antes. Haz `git pull`, luego `git push` otra vez. Si sale la palabra **CONFLICT**, **para y avisa al tutor**: no borres nada.

> [!example] Paso 4 — Decide tu sector (con IA)
> **1.** Si no sabes qué tipo de empresa buscar, pregúntale a la IA:
> ```
> Soy estudiante de 2.º de Sistemas Microinformáticos y Redes (SMR).
> ¿En qué tipos de empresa puedo hacer prácticas? Para cada tipo dime
> qué haría allí un alumno en prácticas y qué módulos del ciclo usaría.
> Dámelo en una tabla.
> ```
> **2.** Elige **uno** (puedes tener uno de reserva). Ejemplos: tienda y reparación de ordenadores, servicio técnico a empresas, instalación de redes y cámaras, departamento de informática de una empresa grande, empresa de desarrollo web, telecomunicaciones.
>
> **3.** Rellena **`01_Sector.md`**: qué sector, por qué, **hasta cuántos km** estás dispuesto a ir cada día y cómo irías.
>
> **4.** Commit: `Sector elegido`.

> [!example] Paso 5 — Fija tu punto de partida
> 1. Abre **Google Maps** y busca **un cruce de calles o una plaza cerca de tu casa**. No tu portal.
> 2. **Clic derecho** sobre ese punto. Arriba del menú salen dos números, por ejemplo `38.3452, -0.4810`. **Haz clic sobre ellos**: se copian.
> 3. Abre **`web/config.json`** con el Bloc de notas y rellénalo así:
>
> ```json
> {
>   "punto_partida": {
>     "descripcion": "Plaza de ejemplo, Alicante",
>     "lat": 38.3452,
>     "lon": -0.4810
>   },
>   "km_max": 7
> }
> ```
>
> - `lat` es el **primer** número y `lon` el **segundo**.
> - `km_max` es la distancia máxima que pusiste en `01_Sector.md`.
> - Los decimales van **con punto**, nunca con coma.
>
> 4. Commit: `Punto de partida`.
>
> > [!quote] Latitud y longitud
> > Los dos números que dicen dónde está un punto de la Tierra. La **latitud** mide cuánto al norte o al sur; la **longitud**, cuánto al este o al oeste. Con los de dos sitios se calcula la distancia entre ellos.

> [!example] Paso 6 — Empieza a grabar
> 1. Abre **OBS Studio**.
> 2. En **Fuentes**, pulsa **+** → **Captura de pantalla** → **Aceptar** → elige tu pantalla → **Aceptar**.
> 3. Pulsa **Iniciar grabación**.
> 4. **Graba todo el proceso de los Pasos 7 y 8**: lo que le preguntas a la IA, lo que te contesta y cómo lo compruebas.
> 5. Al terminar: **Detener grabación**. El vídeo se guarda en la carpeta **Vídeos** de Windows.
>
> > [!info] Qué tiene que verse en el vídeo
> > Que **tú** has buscado, que **no te has creído** a la IA y que has comprobado los datos. No hace falta cara ni voz. Puedes grabar en varias sesiones y entregar varios vídeos.
>
> > [!warning] El vídeo NO se sube a GitHub
> > Pesa demasiado. Súbelo a tu **OneDrive** de Conselleria, pulsa **Compartir → Copiar vínculo** y pega el enlace en `02_Proceso_IA.md`.

> [!example] Paso 7 — Busca empresas con la IA
> **1. Primera búsqueda, de 0 a 5 km:**
> ```
> Soy estudiante de 2.º de SMR y busco empresas de [TU SECTOR]
> donde hacer prácticas, a menos de 5 km de [TU CRUCE DE CALLES, CIUDAD].
> Dame una tabla con: nombre, dirección, código postal, localidad,
> teléfono, web, a qué se dedican y distancia aproximada.
> Indica de dónde sacas cada dato. Si no estás seguro de un dato,
> escribe "no verificado" en vez de inventarlo.
> ```
> **2. Si salen menos de 20, amplía** poco a poco, sin pasar de tu `km_max`:
> ```
> Amplía la búsqueda a 8 km. No repitas las empresas anteriores.
> ```
> **3. Si el sector se te queda corto, prueba sectores parecidos:**
> ```
> Dame también empresas de sectores parecidos donde un técnico de SMR
> pueda hacer prácticas: tiendas de electrónica, empresas con
> departamento informático, instaladoras de redes o de cámaras.
> ```
> **4. Pídele ayuda para buscar mejor por tu cuenta:**
> ```
> ¿Qué palabras debo buscar en Google Maps para encontrar más empresas
> de [TU SECTOR] cerca de mí?
> ```
> **5.** Copia cada prompt que uses en **`02_Proceso_IA.md`**, con lo que te contestó.
>
> > [!tip] Google Maps también busca
> > Busca en Maps las palabras que te dé la IA ("reparación de ordenadores", "servicio técnico informático", "instalación de redes") y **muévete por el mapa** alrededor de tu punto. Muchas empresas pequeñas que la IA no conoce aparecen ahí.

> [!example] Paso 8 — Comprueba CADA empresa
> Para **cada** empresa, antes de apuntarla:
>
> | Comprobación | Cómo | Si falla |
> | :--- | :--- | :--- |
> | ¿Existe? | Búscala en **Google Maps** | Descartada |
> | ¿Está abierta? | En Maps no pone "Cerrado permanentemente" y tiene reseñas recientes | Descartada |
> | ¿La dirección es esa? | Coincide la de Maps con la de su web | Apunta la de su **web** |
> | ¿El teléfono es ese? | Míralo en **su web oficial** | Apunta el de su **web** |
> | ¿Coordenadas? | Clic derecho sobre la empresa en Maps, como en el Paso 5 | — |
> | ¿Persona de contacto? | Web ("Quiénes somos", "Equipo"), LinkedIn o **preguntando al llamar** | Déjala vacía y consíguela en el Paso 11 |
>
> Anota en `02_Proceso_IA.md` **qué empresas te inventó la IA** o tenían datos mal. Eso también se evalúa: demuestra que has comprobado.
>
> > [!danger] La IA inventa
> > Te dará teléfonos que no son de nadie y "responsables de recursos humanos" que no existen. **Una empresa sin comprobar no cuenta para las 20.**

> [!example] Paso 9 — Rellena la base de datos
> **1.** Abre **LibreOffice Calc** → **Archivo → Abrir** → `01_Practicas\99_FE\datos\empresas.csv`.
>
> **2.** Sale una ventana de **Importar texto**. Marca **solo** **Separado por → Coma**, y en **Juego de caracteres** elige **Unicode (UTF-8)** → **Aceptar**.
>
> **3.** Verás la primera fila con las columnas. **No las cambies, no las borres y no cambies su orden.** Cada empresa, una fila:
>
> | Columna | Qué va | Ejemplo |
> | :--- | :--- | :--- |
> | `id` | Número, empezando en 1 | `1` |
> | `nombre` | Nombre de la empresa | `Informática Ejemplo S.L.` |
> | `sector` | Tu sector | `Reparación de ordenadores` |
> | `actividad` | Qué hacen, en pocas palabras | `Venta y reparación de portátiles` |
> | `direccion` | Calle y número | `Calle Mayor 10` |
> | `cp` | Código postal | `03001` |
> | `localidad` | Ciudad o pueblo | `Alicante` |
> | `lat` | Latitud, **con punto** | `38.3452` |
> | `lon` | Longitud, **con punto** | `-0.4810` |
> | `telefono` | Teléfono | `965000000` |
> | `email` | Correo de la empresa | `info@ejemplo.es` |
> | `web` | Web | `https://ejemplo.es` |
> | `contacto_nombre` | **Persona con quien hablar** | `Laura` |
> | `contacto_cargo` | Su puesto | `Responsable técnica` |
> | `fuente` | Dónde comprobaste los datos | `Web oficial + Google Maps` |
> | `verificado` | `si` o `no` | `si` |
> | `estado` | `pendiente` · `llamada` · `visita` · `cita` · `aceptada` · `rechazada` | `pendiente` |
> | `fecha_contacto` | Último contacto, `AAAA-MM-DD` | `2026-09-25` |
> | `notas` | Lo que necesites recordar | `Volver a llamar el lunes` |
>
> > [!warning] Antes de escribir coordenadas y códigos postales
> > Calc cambia `38.3452` por `383452` y `03001` por `3001`. Para evitarlo: **selecciona las columnas `cp`, `lat`, `lon` y `telefono`** → clic derecho → **Formato de celdas** → **Texto** → **Aceptar**. Hazlo **antes** de escribir.
>
> > [!tip] La IA te puede ahorrar teclear
> > Cuando tengas varias empresas **ya comprobadas**, pégale tus datos y pídele:
> > ```
> > Convierte estos datos en líneas CSV con estas 19 columnas, en este orden:
> > id, nombre, sector, actividad, direccion, cp, localidad, lat, lon,
> > telefono, email, web, contacto_nombre, contacto_cargo, fuente,
> > verificado, estado, fecha_contacto, notas
> > Sin espacios después de las comas en el resultado. Separador coma, decimales con punto, y entre comillas cualquier
> > texto que lleve una coma dentro. No inventes ningún dato: lo que
> > no te dé, déjalo vacío.
> > [PEGA AQUÍ TUS DATOS]
> > ```
> > **Revisa lo que te devuelve**, campo por campo, antes de pegarlo.
>
> **4. Guardar (aquí se equivoca todo el mundo):**
> 1. **Archivo → Guardar como**.
> 2. Tipo: **Texto CSV (.csv)**. Marca **Editar la configuración del filtro**. **Guardar**.
> 3. Si pregunta, **Usar el formato Texto CSV**.
> 4. **Juego de caracteres:** Unicode (UTF-8) · **Delimitador de campo:** `,` · **Delimitador de cadena:** `"` → **Aceptar**.
>
> **5. Compruébalo con el Bloc de notas.** Clic derecho sobre `empresas.csv` → **Abrir con → Bloc de notas**.
> - **Bien:** `id,nombre,sector,…` separado por **comas**, y coordenadas como `38.3452`.
> - **Mal:** `id;nombre;sector;…` con **punto y coma**, o `38,3452` con coma. Vuelve al punto 4: la web no leerá el fichero.
>
> **6.** Commit: `Añadidas N empresas`.

> [!example] Paso 10 — Primera entrega (miércoles 30/09/2026)
> Antes del final del día, comprueba esta lista:
> - ☐ `01_Sector.md` rellenado.
> - ☐ `web/config.json` con tu punto de partida y tu `km_max`.
> - ☐ `datos/empresas.csv` con **20 filas o más** con `verificado = si`, guardado con comas (comprobado con el Bloc de notas).
> - ☐ `02_Proceso_IA.md` con los prompts, las empresas inventadas y **el enlace al vídeo**.
> - ☐ El enlace del vídeo **se abre** desde otro navegador sin tu sesión, o está compartido con tu tutor.
> - ☐ Último `git push` hecho, y en la web de GitHub se ven tus cambios.
>
> **La entrega es tu repositorio tal como esté en GitHub ese día.** Lo que no esté subido no existe.

> [!example] Paso 11 — Contacta con las empresas
> Empieza **por las más cercanas y las que más te interesan**. Ve cambiando el `estado` en el CSV y apunta cada contacto en **`03_Seguimiento.md`** el mismo día.
>
> **1. Prepara la llamada con la IA:**
> ```
> Voy a llamar a [NOMBRE DE LA EMPRESA], que se dedica a [ACTIVIDAD],
> para pedir hacer las prácticas de FE de 2.º de SMR. Tengo [TU EDAD]
> años. Escríbeme un guion corto y natural para la llamada: cómo me
> presento, qué pregunto y qué digo si me dicen que no o que llame
> más tarde. Nada de lenguaje formal exagerado.
> ```
> Léelo, **cámbialo para que suene a ti** y ensáyalo en voz alta una vez.
>
> **2. Al llamar:**
> - Llama **en horario de trabajo** y **no a la hora de comer**.
> - Preséntate: nombre, que estudias 2.º de SMR en el **IES Jorge Juan** y que buscas empresa para la **Formación en Empresa**.
> - Pregunta **con quién tienes que hablar** para las prácticas. **Apunta su nombre**: es tu `contacto_nombre`.
> - Pide **una cita para pasarte y presentarte**, o un correo al que escribir.
> - Da las gracias aunque te digan que no.
>
> **3. Si te piden un correo, prepáralo con la IA:**
> ```
> Escribe un correo corto para [NOMBRE DEL CONTACTO] de [EMPRESA].
> Hablamos por teléfono hoy. Soy alumno de 2.º de SMR del IES Jorge
> Juan y quiero hacer allí la Formación en Empresa. Menciona que me
> interesa porque [TU MOTIVO REAL]. Tono educado y natural, máximo
> 8 líneas.
> ```
> Envíalo desde **tu correo de Conselleria**, no desde uno personal.
>
> **4. Si vas en persona:**
> - Ropa **limpia y normal**. No hace falta traje.
> - Ve **en la hora de la cita** y, si no tienes cita, en un momento tranquilo (no a primera hora ni a la de cierre).
> - Llévate apuntado **qué hace la empresa y por qué te interesa**. Se nota muchísimo quién se ha informado.
>
> **5. Después de cada contacto:**
> - Cambia el `estado` en el CSV y la `fecha_contacto`.
> - Apunta en `notas` **cuándo volver a llamar**. Si no te contestan, **vuelve a llamar a la semana**: insistir con educación no molesta.
> - Commit: `Llamada a la empresa N`.
>
> > [!danger] No firmes nada
> > Si una empresa te dice que sí: **dale las gracias, pídele el nombre y el correo de la persona responsable y avisa a tu tutor ese mismo día.** El acuerdo de prácticas lo gestiona el instituto con la empresa. Tú no firmas ningún papel ni te comprometes a fechas por tu cuenta.

> [!example] Paso 12 — Arranca el servidor web (entrega 3)
> La web lee tu CSV, y un navegador **no deja** a una página leer ficheros de tu disco si la abres con doble clic. Por eso hace falta un **servidor web**: un programa que entrega las páginas al navegador como si vinieran de internet.
>
> 1. Abre la terminal en **`01_Practicas\99_FE`** (la carpeta que contiene `datos` y `web`, **no** dentro de `web`).
> 2. Escribe:
>
> ```
> python -m http.server 8000
> ```
>
> 3. **Bien:** sale `Serving HTTP on :: port 8000`. **No cierres esa ventana**: si la cierras, se apaga el servidor.
> 4. Abre el navegador y ve a **`http://localhost:8000/web/`**.
> 5. Para apagarlo: en la terminal, **`Ctrl + C`**.
>
> > [!warning] Si Windows pregunta por el Firewall
> > Pulsa **Cancelar**. No hace falta dar permiso: tú solo entras desde tu propio ordenador (`localhost`).
>
> > [!quote] localhost
> > El nombre que tiene **tu propio ordenador** para sí mismo. `localhost:8000` significa "el servidor que está funcionando en este ordenador, en el puerto 8000".

> [!example] Paso 13 — Programa la web con la IA, pieza a pieza
> La carpeta `web/` ya trae `index.html` con las librerías enlazadas, `style.css` y `app.js` con la lista de tareas. **Todo tu código va en `app.js`.**
>
> **La regla:** una pieza cada vez. Pides → pegas → **pruebas en el navegador** → commit. **Nunca pidas la web entera de golpe**: te dará 200 líneas que no entiendes, no funcionará y no sabrás por qué.
>
> Empieza siempre cada conversación pegando esto:
> ```
> Estoy haciendo una web muy sencilla, sin frameworks, que se sirve con
> "python -m http.server" desde una carpeta con "datos/empresas.csv" y
> "web/" (index.html, app.js, style.css, config.json). index.html ya
> carga Leaflet 1.9.4 y PapaParse 5.4.1 y tiene estos elementos:
> div#mapa, section#controles, p#contador, ul#listado, section#ficha.
> Todo mi código va en app.js. Soy principiante: explícame cada parte.
> ```
>
> | Pieza | Qué pedirle a la IA | Cómo sabes que funciona |
> | :-: | :--- | :--- |
> | **1** | "Lee `config.json` con `fetch` y crea un mapa Leaflet con OpenStreetMap en `#mapa`, centrado en `punto_partida`, con un marcador" | Ves el mapa de tu barrio con un marcador en tu cruce |
> | **2** | "Lee `../datos/empresas.csv` con PapaParse (`download: true`, `header: true`) y muestra en la consola cuántas empresas hay" | Pulsa **F12 → Consola**: sale `20` (o tu número) |
> | **3** | "Pon un marcador por empresa, con un popup con su nombre" | Ves todas tus empresas en el mapa |
> | **4** | "Escribe una función `distanciaKm(lat1, lon1, lat2, lon2)` con la fórmula del semiverseno (haversine)" | Mide en Google Maps (clic derecho → **Medir distancia**) la de una empresa: la tuya debe dar casi lo mismo |
> | **5** | "Añade en `#controles` un deslizador de 1 km hasta `km_max` y dibuja un círculo de ese radio que cambie al moverlo" | Mueves el deslizador y el círculo crece y encoge |
> | **6** | "Muestra en `#listado` las empresas dentro del radio, ordenadas de más cerca a más lejos, con la distancia, y en `#contador` 'X de Y empresas dentro de Z km'" | Al mover el deslizador cambian la lista y el contador |
> | **7** | "Al pulsar una empresa del listado o su marcador, muestra en `#ficha` dirección, teléfono como enlace `tel:`, web, contacto y estado" | Pulsas una y sale su ficha |
>
> Commit **después de cada pieza que funcione**: `Web: pieza 3, marcadores`.
>
> > [!tip] Cuando algo no funciona
> > 1. **F12 → Consola**. Si hay texto en **rojo**, cópialo entero.
> > 2. Pásaselo a la IA **con el código de `app.js`**: "Me sale este error: [ERROR]. Este es mi app.js: [CÓDIGO]".
> > 3. Pregúntale también **por qué** pasaba. Si no lo entiendes, no has aprendido nada.
>
> > [!warning] Si el mapa sale en blanco pero la lista funciona
> > El mapa se descarga de internet (OpenStreetMap). Si la red de clase lo bloquea, sale en blanco. **Pruébalo en casa** y avisa al tutor.
>
> > [!success] Ampliación (sube nota)
> > - Filtros por `sector` y por `estado`.
> > - Marcadores de color según el estado: gris `pendiente`, amarillo `cita`, verde `aceptada`, rojo `rechazada`.
> > - Aviso visible en las empresas con `verificado = no`.
> > - Que se vea bien en el móvil.

> [!example] Paso 14 — Entrega final (viernes 30/10/2026)
> - ☐ La web arranca con `python -m http.server 8000` desde `99_FE` y se abre en `http://localhost:8000/web/`.
> - ☐ Las **siete piezas** del Paso 13 funcionan.
> - ☐ La consola (F12) **no muestra errores en rojo**.
> - ☐ `empresas.csv` actualizado con el **estado real** de cada empresa.
> - ☐ `03_Seguimiento.md` con **todos** tus contactos.
> - ☐ Último `git push` hecho.

---

## 5 · Errores típicos

| Error | Qué pasa | Cómo evitarlo |
| :--- | :--- | :--- |
| Creer a la IA sin comprobar | Llamas a un teléfono que no existe; la empresa no cuenta | Paso 8 con **cada** empresa |
| Poner tu dirección real | Tu casa queda guardada en internet | Un cruce de calles |
| Crear el repositorio **público** | Datos de personas reales a la vista de todos | **Private** en el Paso 1 |
| Guardar el CSV con `;` o coma decimal | La web no lee las empresas | Paso 9.4 y comprobar con el Bloc de notas |
| Olvidar `git push` en clase | En casa no tienes nada | `pull` al sentarte, `push` al levantarte |
| Subir el vídeo a GitHub | El `push` falla o tarda muchísimo | El vídeo va a OneDrive; en GitHub, solo el enlace |
| Abrir `index.html` con doble clic | La web no carga las empresas | Paso 12: servidor y `localhost` |
| Pedir la web entera a la IA | Código que no entiendes y que no funciona | Una pieza cada vez |
| Firmar o comprometerte con una empresa | Un acuerdo que el instituto no ha gestionado | Avisar al tutor el mismo día |
| Dejar la sesión de GitHub en el PC de clase | Otro puede tocar tu repositorio | Quitar la credencial al acabar |

---

## 6 · Diccionario

> [!quote] Conceptos clave
> - **FE (Formación en Empresa):** las prácticas del ciclo en una empresa real.
> - **IA / asistente de chat:** programa al que escribes en lenguaje normal y te contesta (ChatGPT, Gemini, Copilot…).
> - **Prompt:** lo que le escribes a la IA.
> - **Base de datos:** datos ordenados para poder buscarlos. Aquí, una tabla: una fila por empresa y una columna por dato.
> - **CSV (*Comma-Separated Values*, valores separados por comas):** fichero de texto donde cada línea es una fila y las columnas se separan con comas.
> - **Repositorio plantilla:** repositorio del que sacas tu propia copia con **Use this template**.
> - **Commit:** una foto guardada de tu trabajo, con un mensaje que dice qué cambió.
> - **Latitud / longitud:** los dos números que sitúan un punto en el mapa.
> - **Servidor web:** programa que entrega páginas al navegador. Aquí, `python -m http.server`.
> - **localhost:** tu propio ordenador.
> - **Leaflet:** librería de JavaScript para poner mapas en una web.
> - **OpenStreetMap:** mapa del mundo libre y gratuito que Leaflet usa para dibujar las calles.
> - **Consola (F12):** la parte del navegador donde salen los errores de tu web.
