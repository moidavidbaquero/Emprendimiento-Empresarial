# RAÍCES DIGITALES — PLATAFORMA INTERACTIVA DE GAMIFICACIÓN CULTURAL

### Presentado por: Sergio Andres Cristancho Moreno y  Moises David Baquero Daza

## 1. INTRODUCCIÓN Y PROPÓSITO DEL PROYECTO
Raíces Digitales es una solución tecnológica web interactiva de tipo Single Page Application (SPA) orientada a la pedagogía, gamificación y apropiación cultural de la identidad colombiana. Su propósito fundamental es centralizar, difundir y evaluar de forma dinámica los componentes históricos, geográficos, gastronómicos y artísticos de las seis regiones naturales de Colombia: Andina, Caribe, Pacífica, Orinoquía, Amazonía e Insular. 

A través de mecánicas de juego controladas como la selección probabilística por ruleta, bancos de preguntas estructurados y un podio de medallas automatizado, la plataforma transforma la consulta de datos monótona en un entorno interactivo ágil y atractivo tanto para entornos académicos como informativos.



## 2. ARQUITECTURA TÉCNICA Y COMPONENTES DEL FRONTEND
El proyecto está construido bajo un enfoque puro en el lado del cliente (Client-Side), omitiendo dependencias complejas de servidores o frameworks de terceros. Esto garantiza una velocidad de carga óptima y portabilidad total.

### Componentes Estructurales:
* index.html (Capa Semántica): Estructura todos los módulos de la aplicación en un único archivo. Organiza las vistas mediante contenedores independientes controlados por selectores lógicos que aparecen o se ocultan de acuerdo con la navegación del usuario.
* styles.css (Capa de Presentación y Diseño): Gestiona la maquetación adaptativa mediante grillas y cajas flexibles de última generación. Define la identidad cromática del sitio y la animación por transformación y fotogramas clave de los elementos gráficos como la ruleta de la fortuna.
* script.js (Capa Lógica y Persistencia Volátil): Implementa el motor de eventos del sistema, el almacenamiento estructurado de la base de datos enciclopédica, los algoritmos de mezcla aleatoria de contenidos y las rutinas de calificación de las trivias.
* tu-logo.jpeg (Recurso Gráfico): Elemento visual de marca ubicado en la cabecera principal del sitio para establecer la identidad visual corporativa.



## 3. ESPECIFICACIÓN DETALLADA DE MÓDULOS

### Módulo 1: Sistema de Navegación y Enrutamiento Interno
La aplicación opera bajo el concepto de Single Page Application. La transición entre la pantalla de inicio, el visualizador de regiones, los cuestionarios y el podio de medallas se realiza manipulando el Modelo de Objetos del Documento a través de una función centralizadora que remueve o asigna propiedades de visualización. Esto elimina los tiempos muertos de recarga y ofrece una experiencia fluida al usuario.

### Módulo 2: Visualizador Enciclopédica Cultural
Al interactuar con cualquiera de las regiones en la cuadrícula principal, la interfaz experimenta una metamorfosis estética, adoptando los colores representativos de la región seleccionada gracias a variables personalizadas. Cada región despliega cuatro categorías de datos:
* Manifestaciones y Hitos del Patrimonio: Espacio reservado para festivales, carnavales y declaratorias patrimoniales históricas de la región.
* Muestra Gastronómica: Listado de platos típicos tradicionales y preparaciones icónicas locales.
* Identidad Musical y Coreográfica: Resumen de los ritmos folclóricos nativos, instrumentos característicos y bailes tradicionales.
* División Político-Administrativa: Listado completo de los departamentos colombianos que conforman e integran dicha región geográfica.

### Módulo 3: Motor de Evaluación y Cuestionario (Quiz)
Cada una de las regiones posee un banco de preguntas técnicas de opción múltiple parametrizado directamente en los objetos lógicos. El motor de evaluación ejecuta los siguientes pasos:
* Mantenimiento de Estado: Monitorea el índice de la pregunta activa, el acumulador de aciertos y la lista de respuestas suministradas por el usuario.
* Validación Dinámica: Al presionar una opción, el sistema deshabilita las demás alternativas inmediatamente para evitar fraude. Adicionalmente, evalúa la validez de la respuesta en tiempo real, tiñendo el botón de verde si es correcta o de rojo si es errónea, informándole al usuario el resultado de su elección.
* Registro de Errores: Guarda de forma estructurada las preguntas contestadas de manera incorrecta para alimentar el módulo de retroalimentación en la pantalla final.

### Módulo 4: Mecánica de Gamificación (Ruleta de la Fortuna)
Accesible de forma global a través de la interfaz, este componente actúa como un conector lúdico aleatorio.
* Renderizado Geométrico: Dibuja un disco segmentado de manera proporcional en partes idénticas según las regiones disponibles.
* Simulación Física (Ease-Out): El algoritmo calcula una velocidad angular inicial aleatoria que va disminuyendo de forma exponencial simulando la fricción con el aire. Esto genera suspenso real en el usuario.
* Redirección Automatizada: Al detenerse el puntero en un sector angular específico, el script identifica la región ganadora, cierra la ventana emergente y transporta al usuario directamente al módulo informativo de dicha región.

### Módulo 5: Pantalla de Resultados, Historial y Podio
Al finalizar las preguntas de una región, la aplicación procesa el rendimiento numérico y genera una interfaz de premiación:
* Medalla de Oro: Desplegada cuando el usuario alcanza una nota perfecta o superior al 85% de las respuestas correctas.
* Medalla de Plata: Otorgada en rangos de desempeño aceptable o intermedio (entre el 60% y el 85% de aciertos).
* Medalla de Bronce: Asignada como insignia de consolación y motivación cuando el resultado es inferior al 60%.
* Tabla de Revisión Técnica: Genera una lista pormenorizada que contrasta la pregunta planteada, la respuesta que eligió el usuario y la respuesta correcta que debió seleccionar, permitiendo un ciclo completo de aprendizaje y corrección.



## 4. SISTEMA DE DISEÑO VISUAL E IDENTIDAD DE MARCA
El estilo visual ha sido cuidadosamente estructurado para evocar los ecosistemas naturales y la geografía de Colombia a través del color:
* Identidad Andina: Tonos verdes esmeralda y fondos claros que reflejan las cordilleras, los valles y los cafetales colombianos.
* Identidad Caribe: Colores azules marinos profundos inspirados en el mar Caribe, las costas y la frescura tropical.
* Identidad Pacífica: Gama de verdes boscosos densos que rinden homenaje a la biodiversidad, la lluvia y las selvas del litoral Pacífico.
* Identidad Orinoquía: Tonos naranjas encendidos y terracotas cálidos inspirados en los icónicos atardeceres de los llanos orientales.
* Identidad Amazonía: Tonos verdes follaje suaves que representan el gran pulmón verde del sur del país.
* Identidad Insular: Paleta de azules índigo y zafiro en alusión a las islas coloniales, cayos y arrecifes oceánicos.

La combinación tipográfica utiliza la fuente Playfair Display para encabezados estilizados e imponentes, complementada con la fuente DM Sans para asegurar una lectura fluida en bloques informativos.



## 5. REQUISITOS DEL ENTORNO E INSTALACIÓN
La naturaleza nativa del proyecto prescinde de configuraciones complejas en la máquina local:
* Sistema Operativo: Multiplataforma (Windows, macOS, Linux, Android, iOS).
* Navegador Web: Compatible con cualquier navegador moderno que soporte los estándares HTML5, CSS3 y JavaScript moderno (como Google Chrome, Mozilla Firefox, Microsoft Edge, Safari o Brave).
* Conectividad: Requiere acceso a internet de forma exclusiva para la importación remota de las tipografías desde la API de Google Fonts. El resto de las operaciones lógicas corren de forma local sin conexión a la red.


## 6. INSTRUCCIONES DE DESPLIEGUE LOCAL PASO A PASO
1. Descargue y extraiga el contenido del archivo comprimido del proyecto en cualquier directorio local de su ordenador.
2. Asegúrese de que los archivos index.html, styles.css, script.js y el recurso gráfico tu-logo.jpeg permanezcan juntos en el mismo nivel de la carpeta raíz, conservando intactas sus llamadas relativas.
3. Dé doble clic sobre el archivo index.html para abrir la aplicación de manera instantánea en su navegador de preferencia.
4. Para auditar el comportamiento de la ruleta, depurar el motor del quiz o verificar errores sintácticos, presione la tecla F12 de su teclado para desplegar las herramientas de desarrollo del navegador e ingresar a la pestaña Consola.
