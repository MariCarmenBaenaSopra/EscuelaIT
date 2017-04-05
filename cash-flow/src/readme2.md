Se crea el modulo y dentro de este los componentes:


# Árbol de Carpetas
  app 
    movimientos 
      nuevo-componentes
      lista
      fila
    clientes


# Árbol de Módulos (esto es una aplicacion) [Componentes declarados]
  ## {imports: [array de modulos], declares: [array de component], exports:[]}
  app [app-root]
    movimientos [+movimientos, -nuevo, -lista]   (modulo[componentes])                      
    clientes    [+clientes]
         

# Árbol de Componentes (la aplicacion tmb son)
  root  
    movimientos (modulo)
      nuevo-componentes {Componente}
      lista             {Componente}
      fila              {Componente}
    clientes


### En otros tutoriales, "app"=modulo, se saca al mismo nivel que "src"

-: privado
+: publico