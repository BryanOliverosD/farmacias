# farmacias

El código consta de un archivo principal el cual levanta la app y así mismo disponibiliza el servicio
de turnos de las farmacias, accediento a través de la ruta http://host/turnos. En esta ruta se obtienen todas las farmacias de la región metropolitana, esto con ayuda de las apis del minsal, utilizadas por el archivo apis.js.
El archivo shift es quien tiene la lógica, ya sea, obtener la comuna y local enviado, normalizar estas cadenas ya que el usuario lo puede enviar con tildes o mayúsculas, etc. Además se filtran los datos por lo requerido por el usuario, y finalmente se hace una limpieza con la data importante para mostrar. Esto con ayuda de funciones generales y que pueden ser reutilizadas, todo esto escrito en el archivo util.js.
