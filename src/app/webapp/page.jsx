import Image from 'next/image'
import styles from '../page.module.css'

const WebApp = () =>{
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            [Aplicaciones de WEB]&nbsp;
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
                    src="/image/web.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Diseño, ideas, componentes</h4>
            </div>
          </div>

          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/web2.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Estadística y Gráficos</h4>
                </div>
            </div>
  
          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/web3.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Formulario, mapas, Imagenes</h4>
            </div>
          </div>

          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/web4.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Diseños Customizados</h4>
            </div>
          </div>

          
        </div>

      </main>
  
   )
}

export default WebApp