import Image from 'next/image'
import styles from '../page.module.css'

const Datos = () =>{
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            [Servicios Base de Datos]&nbsp;
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
                    src="/image/sql.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Transac SQL / SQL Server</h4>
            </div>
          </div>

          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/sql2.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Modelamiento de Datos</h4>
                </div>
            </div>
  
          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/sql3.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Base Datos no relacionadas CLOUD</h4>
            </div>
          </div>

        </div>

      </main>
  
   )
}

export default Datos