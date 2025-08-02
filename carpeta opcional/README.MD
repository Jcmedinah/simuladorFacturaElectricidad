Desarrollar un algoritmo que permita calcular el salario de un empleado teniendo en cuenta que:
1 -  Se debe calcular la cantidad de horas extras (si aplica)
2 - Se debe calcular el valor de horas extras
3 - Aplicar y Mostrar deducciones (salud y pensión)
4 - Aplicar y mostrar auxilio de transporte
5 - Mostrar el salario total antes de deducciones y bonificaciones
6 - Mostrar el salario total a pagar

Validaciones: 
- El salario es dinámico y varía por hora y valor hora
- Validar que el salario si sea un número
- Validar si el salario es un número positivo




repositorios 

Repositorio local
Repositorio Nube (proyecto en github, gitlab o bitbucket( azure, aws, google cloud))

Pasos para crear un repo
1 bloque (limpeza de credenciales: se hace solo cuando se trabaja en un equipo equipo o PC de uso publico)
1.1 abrir la terminal de gitbash
1.2 git config --global credential.helper ""

2 bloque (configurar las credenciales)
2.1 git config --global user.name Jcmedinah
2.2 git config --global user.email jean.medina0399@gmail.com
(opcional) git config --list

3 bloque (configurar el repo local)
3.1 git init 
3.2 git add .
3.3 git commit -m "Mensaje descriptivo"

4 bloque (configurar repo remoto o en la nube)
4.1 Crear el repo e github
4.2 git remote add origin url
4.3 git push -u origin master/main