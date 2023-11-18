import Image from 'next/image'
import styles from '../page.module.css'

const Tecno = () => {
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            [Certificaciones y Tecnologías]&nbsp;
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
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert.png"
                alt="Number one"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>Oracle Forms Developer Certified Professional</p>
          </a>
  
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert1.png"
                alt="Number one"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>Bootstrap Framework - CSS - CSS GRID - FLEXBOX - HTML5</p>
          </a>
  
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert2.png"
                alt="Number one"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>JavaScript - Persistencia de Datos - Procesos Crud - Objetos DOM - Responsive Web Designe</p>
          </a>
  
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert3.png"
                alt="Number one"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>API/ React js Dashboard - Procesos Asincronos - Modularizacion Javascript</p>
          </a>

          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert4.png"
                alt="Number five"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>Servicios Serverless - Hooks - React.js - Serverless Computing - Uso de Componentes Funcionales</p>
          </a>

          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert5.png"
                alt="Number five"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>Autenticación - Autorización - Base de Datos - Context API - MongoDB - Pasarelas de Pago - React.jsx - Ruteo</p>
          </a>

          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/cert6.png"
                alt="Number five"
                width={150}
                height={150}
                priority
                />
            </div>
            <p>Information Technology Infraestructure Library - ITIL Practice</p>
          </a>

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

export default Tecno