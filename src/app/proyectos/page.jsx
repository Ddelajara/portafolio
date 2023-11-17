import Image from 'next/image'
import styles from '../page.module.css'

const Proyectos = () =>{
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            [Proyectos]&nbsp;
          </p>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/image/mern.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={170}
                height={70}
                priority
              />
            </a>
          </div>
        </div>
  
      <div className={styles.grid}>
        <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-400">
              <Image 
                  src="image/outline-icon.svg" // Ruta relativa al archivo en la carpeta public
                  alt="Icono de Base de Datos" // Texto alternativo para accesibilidad
                  width={24}  // Tamaño del ancho
                  height={24} // Tamaño del alto
                  className="h-6 w-6 text-white" // Clases para estilizar
                />
              </div>
              Aplicaciones de Escritorio
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">aplicaciones con interfaces de usuario intuitivas , eficientes y funcionalidad robusta
            </dd>
          </div>

          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-300">
              <Image 
                  src="image/web-page.svg" // Ruta relativa al archivo en la carpeta public
                  alt="Icono de Base de Datos" // Texto alternativo para accesibilidad
                  width={24}  // Tamaño del ancho
                  height={24} // Tamaño del alto
                  className="h-6 w-6 text-white" // Clases para estilizar
                />
               </div>
              Aplicaciones WEB
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">Tecnologías como HTML, CSS, JavaScript, y frameworks modernos como React, Next js </dd>
          </div>

          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-300">
                <Image 
                  src="image/database-line-icon.svg" // Ruta relativa al archivo en la carpeta public
                  alt="Icono de Base de Datos" // Texto alternativo para accesibilidad
                  width={24}  // Tamaño del ancho
                  height={24} // Tamaño del alto
                  className="h-6 w-6 text-white" // Clases para estilizar
                />
              </div>
              <div className="text-black dark:text-white">Base de Datos</div>
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              SQL Server, Oracle, Firebase, MongoDB. Querys DML, Procedimientos Almancenados, modelamiento.
            </dd>
          </div>

          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-300">
                <Image 
                  src="image/rest-api-icon.svg" // Ruta relativa al archivo en la carpeta public
                  alt="Icono API" // Texto alternativo para accesibilidad
                  width={24}  // Tamaño del ancho
                  height={24} // Tamaño del alto
                  className="h-6 w-6 text-white" // Clases para estilizar
                />
              </div>
              Integraciones API
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              API Rest en entornos Node js, Express y Javascript.
            </dd>
          </div>
      </div>  
     </main>
  
    )
}

export default Proyectos