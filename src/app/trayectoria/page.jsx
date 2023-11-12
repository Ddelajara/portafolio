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
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
            href="https://www.linkedin.com/in/daniel-de-la-jara-5b66a5155/"
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
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card_Center}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <Image
                src="/image/numero-5.png"
                alt="Number one"
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



        </div>

      </main>
  
    )
        
    
}

export default Trayectoria