import Image from 'next/image'
import styles from '../page.module.css'

const Desktop = () =>{
    return (
        <main className={styles.main}>
        <div className={styles.description}>
          <p>
            [Aplicaciones de Escritorio]&nbsp;
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
                    src="/image/desktop1.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Desarrollo Software con Windows Forms y CSharp</h4>
            </div>
          </div>

          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/desktop2.png"
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
                    src="/image/desktop3.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Filtros, grillas y mantención de datos</h4>
            </div>
          </div>

          <div className={styles.card_Center}>
            <div className={styles.custom_X}>
                <img
                    className="max-w-full h-auto"
                    src="/image/desktop4.png"
                    alt="Number one"
                    width={700}
                    height={500}
                    priority
                    />
                <h4 className='Custom_center'>Dashboard e Indicadores de Gestión</h4>
            </div>
          </div>
          
        </div>

      </main>
  
   )
}

export default Desktop