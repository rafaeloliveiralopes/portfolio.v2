import styles from "./Mosaic.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Mosaico() {
  return (
    <section className="my-5">
      <div className="container">
        <div className={styles.grid}>
          {/* FLORIANOPOLIS */}
          <Image
            src="/florianopolis.jpeg"
            className={`${styles.gridItem} ${styles.gridLarge}`}
            alt="Letreiro de Floripa"
          />
          {/* MONTREAL */}
          <Image
            src="/montreal-quebec-canada.jpeg"
            className={`${styles.gridItem} ${styles.gridTall}`}
            alt="Montreal, Quebec no Canadá"
          />
          {/* CURITIBA */}
          <Image
            src="/curitiba-jardim-botanico.jpeg"
            className={`${styles.gridItem} ${styles.gridTall}`}
            alt="Jardim Botânico de Curitiba"
          />
          {/* PHI PHI ILANDS */}
          <Image
            src="/ilhas-phi-phi-tailandia.jpeg"
            className={`${styles.gridItem} ${styles.gridLarge}`}
            alt="Ilhas Phi Phi, Tailândia"
          />
          {/* TOQUIO */}
          <Image
            src="/monte-fuji-toquio-japao.jpeg"
            className={`${styles.gridItem} ${styles.gridMedium}`}
            alt="Toquio, Japão"
          />
          {/* FOZ DO IGUAÇU */}
          <Image
            src="/foz-do-iguacu.jpeg"
            className={`${styles.gridItem} ${styles.gridMedium}`}
            alt="Foz do Iguaçu, Brasil"
          />
          {/* JERUSALÉM */}
          <Image
            src="/jerusalem-israel.jpeg"
            className={`${styles.gridItem} ${styles.gridMedium}`}
            alt="Jerusalém, Israel"
          />
        </div>
      </div>
    </section>
  );
}
