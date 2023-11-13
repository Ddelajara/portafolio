import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
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

      <div className={styles.authorContainer}>
        <div className={`${styles.centerx} ${styles.circleContainer}`}>
          <Image
            className={styles.logo}
            src="/image/autor.jpg"
            alt="Next.js Logo"
            width={240}
            height={220}
            priority
          />
        </div>
        <div className={styles.authorText}>
          <h1>Profesional TI @ Full Stack</h1>
          <h3>
          Consultoria Servicios TI / Infraestructura / Desarrollo Web FullStack / Database
          </h3>
          <br></br>
          <p>
          Ejecutivo gerencial del área TI, cuento con amplia experiencia en administración de infraestructura, soporte y desarrollo de aplicaciones.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/daniel-de-la-jara-5b66a5155/"
          className={`${styles.card} ${styles.cardBG1}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linked In
          </h2>
          <p>habilidades, experiencia y competencias laborales</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
           className={`${styles.card} ${styles.cardBG2}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Trayectoria
          </h2>
          <p>Conoce mi historia: Desarrollo, Consultoría, Liderazgo, Innovación.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={`${styles.card} ${styles.cardBG3}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Proyectos
          </h2>
          <p> Desarrollos Web, Transformación, Innovación.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={`${styles.card} ${styles.cardBG4}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Técnologia <span>-&gt;</span>
          </h2>
          <p>
            Herramientas, framework, Base de Datos.
          </p>
        </a>
      </div>
    </main>
  )
}
