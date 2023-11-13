import Image from 'next/image'
import styles from '../page.module.css'

const Trayectoria = () => {
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Daniel Rodrigo De la Jara Jimenez&nbsp;
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
                src="/image/numero-1.png"
                alt="Number one"
                width={60}
                height={60}
                priority
                />
            </div>
            <h2>
              Bco Edwards <span>-&gt;</span>
            </h2>
            <p><strong>1995 - 2000</strong></p>
            <p>Analista de Desarrollo Software Core Bancario Comex</p>
          </a>
  
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/numero-2.png"
                alt="Number one"
                width={60}
                height={60}
                priority
                />
            </div>
            <h2>
              Publiguías <span>-&gt;</span>
            </h2>
            <p> <strong>2000 - 2009</strong></p>
            <p>Consultor de Desarrollo Oracle</p>
          </a>
  
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/numero-3.png"
                alt="Number one"
                width={60}
                height={60}
                priority
                />
            </div>

            <h2>Entel <span>-&gt;</span></h2>
            <p> <strong>2009 - 2012</strong></p>
            <p>Lider Area de Base de datos</p>
          </a>
  
          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/numero-4.png"
                alt="Number one"
                width={60}
                height={60}
                priority
                />
            </div>
            <h2>
              Entel <span>-&gt;</span>
            </h2>
            <p> <strong>2012 - 2017</strong></p>
            <p>Sub Gerente de Adm y Soporte</p>
          </a>

          <a
            href="#"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/numero-5.png"
                alt="Number five"
                width={60}
                height={60}
                priority
                />
            </div>
            <h2>
              Proredes <span>-&gt;</span>
            </h2>
            <p> <strong>2018 - 2023</strong></p>
            <p>Gerente de Operaciones y Servicios</p>
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

export default Trayectoria