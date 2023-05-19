# module5
- HTTP: protocolo
- Es parte de software que se usa para la comunicación client-server.
- Está en el navegador(cliente) y en el server como parte del sistema en uso.

- IP
- Define como se direccionan y llegan, uno a otro los elementos de la red.
- Cada elemento de la red tiene una dirección de acceso.
- ip v4: 4 números de 8 bites (0 - 255). Una parte representa a la red y otra parte al dispositiva dentro de esa red.
  192.168.20.29
- La máscara subred 24 (255.255.255.0), indica que 3 partes de la ip ( 8(255) x 3 = 24 ) pertencen a la red y el resto al dispositivo.
- Pueden haber 254 dispositivos conectado a la red local. El 0 está reservado.
- Si se necesitan más dispositivos, las ip se configuran diferente. Combinación de redes (?)

- ROUTER
- Tiene dos ramas: 
    .Interior: Que apunta al domicilio.
    .Exterior: Que apunta la red externa.
- Hacia el interior, cada dispositivo tiene una dirección.
- Hacia el exterior, el router tiene su dirección. Esta dirección asunme como suyas las reqs de cualquier ip interior.
- ping <ip> mide tiempo de respuesta.
- 127.0.0.1 es la dirección local del equipo. La tarjeta de red del equipo tiene dos ramas, igual que el router. 
  - Interior: Hacia el sistema operativo
  - Exterior: Hacia la red local.
- Para el desarrollo local de sistemas que usan ip, la dirección es 127...
- 192.168.1.1 suele ser el router de domicilio.
  
- MENSAJES HTTP: req, res.
  - Cabeceras: Metadatos. Se pueden definir cabecears propias. Ej, Content-Type
  - Contenido: 

- REDIS: Software para manejo de caché.
- Las aplicaciones que están corriendo sobre el mismo equipo ( o sea en la misma ip), se ubican mediante el puerto.
- Ejemplo de puertos comunes:
  :443 https
  :80 HTTP
  :22 SSH
  :21 FTP
  :27017 MONGO
  :SQL 3306

- lsof -i comando para mostrar los puertos en uso.
- Se usa arquitectura de réplicas para tener dos o más servidores con la misma configuración. Si falla uno, responde otro.
  Se conectan con un balanceador que reparte el tráfico entre las réplicas disponibles.
- Escalado verticar es crecer una máquina. Escalado horizontal es conectar varias máquinas para sumar capacidad.
- Máquinas dedicadas: Servidor que ejecuta uno o pocos programas específicos. Se podrían hacer réplicas de estos servers dedicados.
- Para poder trabajar con réplicas se debe tener la opción de trabajo en cluster que conecta las instancias de software de cada réplica.
- El almacenamiento de archivos se recomienda en maquina única dedicada.
- Se recomienda usar X as a service a menos que sea obligatorio no hacerlo.
  
