import Image from 'next/image'; 
import styles from './HomeSection.module.css';

export default function HomeSection() {
  return (
    <section className={styles.homeWrapper}>
      <div className={styles.visualSection}>

        {/* Marco amarillo con padding */}
        <div className={styles.imageFrame}>
          <div className={styles.imageInner}>
            <Image
              src="/images/homekg.jpg" 
              alt="Home"
              width={1200}
              height={800}
              className={styles.homeImage}
              priority
            />
          </div>
        </div>

        {/* Panel amarillo solapado */}
        <div className={styles.yellowPanel} />

        {/* Panel blanco */}
        <div className={styles.whitePanel} />

        {/* Sección de info: título y descripción */}
        <div className={styles.infoSection}>
          <div className={styles.horizontalName}>
            KAMILA GOVORČIN
          </div>
          <p className={styles.description}>
            DJ and music producer with over 13 years of experience.  
            Kamila has established herself as a leading figure in Chile's  
            growing electronic scene, actively representing the  
            underground as well as performing at major international  
            parties and festivals such as Fauna Primavera, Boiler Room,  
            DGTL, Timewarp, GopTun, and Mamba Negra, among others.  
            Her energetic and eclectic DJ sets have led her to share stages  
            with artists like Harry Styles (in front of 20.000 people), Romy,  
            Disclosure, Ellen Allien, Ben Klock, Richie Hawtin, Mark Broom,  
            Theo Parrish, and Atom TM, to name a few. Timeless and  
            hypnotic sets that blend the best of house, techno, acid, and  
            breaks, from the '90s to the present.
          </p>
        </div>

      </div>
    </section>
  );
}
