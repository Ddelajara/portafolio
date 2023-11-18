import Image from 'next/image'
import styles from '../page.module.css'

const MiApi = () =>{
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            [Integraciones API]&nbsp;
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
  

        <div className={styles.gridOne}>
          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/express.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Construcción de EndPoint</h4>
            </div>
          </div>

          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/express2.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Herramientas de Testeo</h4>
                </div>
            </div>
  
          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/express3.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Controller, Middleware</h4>
            </div>
          </div>

        </div>

      </main>
  
   )
}

export default MiApi