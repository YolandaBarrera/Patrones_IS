// Clase DBConfig para simular la configuración de una base de datos
class DBConfig {
    // El constructor recibe los parámetros de configuración:
    constructor(host, port, user, password) {
      // Verificamos si ya existe una instancia del Singleton
      if (DBConfig.instance) {
        // Si ya existe, simplemente devolvemos esa instancia
        return DBConfig.instance;
      }
  
      // Si no existe, asignamos las propiedades con los valores recibidos
      this.host = host;
      this.port = port;
      this.user = user;
      this.password = password;
  
      // Guardamos la instancia en una propiedad estática para asegurar Singleton
      DBConfig.instance = this;
    }
  
    // Método para obtener la configuración actual como string HTML
    getConfig() {
      return `
        Host: ${this.host}<br>
        Puerto: ${this.port}<br>
        Usuario: ${this.user}<br>
        Contraseña: ${this.password}
      `;
    }
  }
  
  // Creamos la primera instancia de configuración de ejemplo
  const db_config1 = new DBConfig("192.168.1.100", 5432, "admin", "admin123");  //objeto configuración inicial
  
  // Creamos la segunda instancia de configuración de ejemplo
  const db_config2 = new DBConfig("127.0.0.1", 3306, "guest", "123");
  
  // Cuando se cargue el contenido de la página, mostramos ambas configuraciones
  window.onload = function () {
    // Mostramos la configuración del primer objeto (es la que se conserva)
    document.getElementById("config1").innerHTML = db_config1.getConfig();
  
    // Mostramos la configuración del segundo objeto (es la misma por el Singleton)
    document.getElementById("config2").innerHTML = db_config2.getConfig();
  };
  