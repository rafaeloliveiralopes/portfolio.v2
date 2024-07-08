import styles from "./Mosaic.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mosaico() {
  return (
    <section className="my-5">
      <div className="container">
        <div className={styles.grid}>
          {/* FLORIANOPOLIS */}
          <img
            src="/florianopolis.jpeg"
            className={`${styles.gridItem} ${styles.gridLarge}`}
            alt="Letreiro de Floripa"
          />
          {/* MONTREAL */}
          <img
            src="/montreal-quebec-canada.jpeg"
            className={`${styles.gridItem} ${styles.gridTall}`}
            alt="Montreal, Quebec no Canadá"
          />
          {/* CURITIBA */}
          <img
            src="/curitiba-jardim-botanico.jpeg"
            className={`${styles.gridItem} ${styles.gridTall}`}
            alt="Jardim Botânico de Curitiba"
          />
          {/* PHI PHI ILANDS */}
          <img
            src="/ilhas-phi-phi-tailandia.jpeg"
            className={`${styles.gridItem} ${styles.gridLarge}`}
            alt="Ilhas Phi Phi, Tailândia"
          />
          {/* TOQUIO */}
          <img
            src="/monte-fuji-toquio-japao.jpeg"
            className={`${styles.gridItem} ${styles.gridMedium}`}
            alt="Toquio, Japão"
          />
          {/* FOZ DO IGUAÇU */}
          <img
            src="/foz-do-iguacu.jpeg"
            className={`${styles.gridItem} ${styles.gridMedium}`}
            alt="Foz do Iguaçu, Brasil"
          />
          {/* JERUSALÉM */}
          <img
            src="/jerusalem-israel.jpeg"
            className={`${styles.gridItem} ${styles.gridMedium}`}
            alt="Jerusalém, Israel"
          />
        </div>
      </div>
    </section>
  );
}
