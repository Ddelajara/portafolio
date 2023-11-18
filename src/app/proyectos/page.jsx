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
              <a className="h-6 w-6 text-white" href="/desktop" target="_self" rel="noopener noreferrer">
              <Image 
                  src="image/outline-icon.svg"
                  alt="Icono de Base de Datos" 
                  width={24}
                  height={24}
                  className="h-6 w-6 text-white"
                />
                </a>
              </div>
              <div className="text-black dark:text-white">Aplicaciones de Escritorio</div>
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">aplicaciones con interfaces de usuario intuitivas , eficientes y funcionalidad robusta
            </dd>
          </div>

          <div class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-300">
              <a className="h-6 w-6 text-white" href="/webapp" target="_self" rel="noopener noreferrer">
              <Image 
                  src="image/web-page.svg"
                  alt="Icono de Base de Datos" 
                  width={24} 
                  height={24}
                  className="h-6 w-6 text-white"
                />
               </a>
               </div>
               <div className="text-black dark:text-white">Aplicaciones WEB</div>
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">Tecnologías como HTML, CSS, JavaScript, y frameworks modernos como React, Next js </dd>
          </div>

          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-300">
                <Image 
                  src="image/database-line-icon.svg"
                  alt="Icono de Base de Datos"
                  width={24}
                  height={24}
                  className="h-6 w-6 text-white"
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
                  src="image/rest-api-icon.svg" la carpeta public
                  alt="Icono API"
                  width={24}
                  height={24}
                  className="h-6 w-6 text-white"
                />
              </div>
              <div className="text-black dark:text-white">Integraciones API</div>
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              API Rest en entornos Node js, Express y Javascript.
            </dd>
          </div>

          <a
            href="/"
            className={styles.card_Center}
            target="_self"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/work-from-home.png"
                alt="Number five"
                width={60}
                height={60}
                priority
                />
            </div>
            <h2>
              Back to Home <span>-&gt;</span>
            </h2>
            <p> <strong>AHORA</strong></p>
            <p>Volver al Inicio</p>
          </a>

      </div>  

    </main>

    )
}

export default Proyectos