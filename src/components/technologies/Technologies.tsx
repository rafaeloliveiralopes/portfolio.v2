import Image from "next/image";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <section className={`container my-5 ${styles.technologies}`}>
      <div className="row text-center">
        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-html5.svg"
            alt="HTML5"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>HTML5</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-css3.svg"
            alt="CSS3"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>CSS3</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-javascript.svg"
            alt="Javascript"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Javascript</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-texto-typescript.svg"
            alt="Typescript"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Typescript</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/react-logo-svgrepo-com.svg"
            alt="React"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>React</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-nextjs.svg"
            alt="Next"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Next</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/styled-components.png"
            alt="Styled Components"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Styled Components</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-sass.svg"
            alt="Sass"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/icons8-bootstrap.svg"
            alt="Bootstrap"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Bootstrap</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/nodejs-svgrepo-com.svg"
            alt="NodeJS"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/mysql-logo-svgrepo-com.svg"
            alt="MySQL"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/mongodb-logo-svgrepo-com.svg"
            alt="MongoDB"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>MongoDB</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/jest.svg"
            alt="Jest"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Jest</h3>
        </div>

        <div className="col-md-2 py-4 col-6">
          <Image
            src="/postman-svgrepo-com.svg"
            alt="Postman"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Postman</h3>
        </div>
        <div className="col-md-2 py-4 col-6">
          <Image
            src="/git-svgrepo-com.svg"
            alt="Git"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Git</h3>
        </div>

        <div className="col-md-1 py-4 col-6">
          <Image
            src="/figma.svg"
            alt="Figma"
            width={100}
            height={100}
            className={styles.icon}
          />
          <h3>Figma</h3>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
