import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScriptBootstrap from "@/components/ScriptBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.modules.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        <section id="about-page">
          <ScriptBootstrap />
          <h1 className="display-4 mb-3">Sobre mim</h1>
          <div className="row">
            <div className="col-md-8">
              <p className="lead">Aqui um breve histórico sobre mim.</p>
            </div>
            <div className="col-md-11">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent varius lorem lectus. Donec eget odio quis nulla rhoncus
                fermentum. Nam vel massa volutpat, rhoncus nibh non, malesuada
                eros. Sed quis finibus mi. Fusce dignissim enim in accumsan
                pretium. Quisque tincidunt consectetur scelerisque. Nullam
                feugiat, massa sed pretium gravida, tellus elit condimentum
                nulla, ac commodo nulla arcu nec mi. Nulla ex tellus, laoreet
                non tellus sed, accumsan interdum sapien. Mauris iaculis enim eu
                fringilla mattis. Curabitur ut sodales justo, eget volutpat
                erat. Duis orci urna, dignissim at libero a, auctor efficitur
                massa. Aenean odio dolor, efficitur sit amet tempor ac,
                condimentum id lorem. Fusce pulvinar, magna vel blandit aliquam,
                odio nulla fringilla nunc, a commodo purus nulla vel mi.
                Maecenas sed condimentum libero. Cras quis metus id turpis
                venenatis fermentum.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Histórico acadêmico</h2>
          <p>Conquistas acadêmicas e timeline</p>
          <p>
            Ut vestibulum tincidunt velit at imperdiet. Duis quam sem, finibus
            id rutrum tempor, eleifend a massa. Quisque elit ipsum, efficitur et
            ligula suscipit, aliquet mollis velit. Nullam bibendum gravida
            magna, in aliquet ex aliquet vitae. Quisque cursus felis id odio
            molestie, non molestie elit ornare. Aliquam faucibus enim sed mollis
            malesuada. Praesent pharetra accumsan interdum. Sed eu purus diam.
            Donec rhoncus maximus tortor, vitae efficitur leo consequat vel.
          </p>
        </section>
        <section>
          <h2>Experiência profissional</h2>
          <p>Visão geral da minha carreira profissional</p>
          <p>
            In porttitor, felis at lobortis luctus, risus mi dictum quam, et
            tempus odio nibh ac risus. Nam pharetra nisl ac dui rutrum, at
            semper mi porta. Phasellus mauris dui, pharetra in convallis et,
            eleifend vitae ex. Nulla luctus dui at dolor lacinia, id tincidunt
            leo mollis. Quisque bibendum velit nec vehicula pellentesque.
            Praesent lacinia vulputate congue. Ut malesuada a lectus at
            volutpat.
          </p>
        </section>
        <section>
          <h2>Principais tecnologias</h2>
          <p>Ferramentas e tecnologias que domino e tenho conhecimento.</p>
          <p>
            Etiam quis augue tincidunt, hendrerit nunc id, faucibus felis.
            Vivamus enim urna, ornare eu felis at, consectetur maximus metus.
            Sed at nisl fermentum, aliquet lorem a, feugiat erat. Integer
            fermentum eros sed neque viverra vulputate. Pellentesque egestas
            accumsan risus, ac auctor lectus hendrerit sed. Phasellus mauris
            turpis, sodales id eros quis, semper hendrerit orci. Phasellus
            pulvinar ornare porttitor. Ut fermentum ante eu erat vehicula
            tempus. Sed mattis, magna eu tincidunt facilisis, diam arcu posuere
            dui, consectetur lacinia justo leo sit amet metus. Nam facilisis
            ipsum ac est fermentum feugiat. Curabitur vel eros nisi.
          </p>
        </section>
        <section>
          <h2>Interesses pessoais e Profissionais</h2>
          <p>Hobbies e interesses pessoais e profissionais.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius lorem lectus. Donec eget odio quis nulla rhoncus fermentum.
            Nam vel massa volutpat, rhoncus nibh non, malesuada eros. Sed quis
            finibus mi. Fusce dignissim enim in accumsan pretium. Quisque
            tincidunt consectetur scelerisque. Nullam feugiat, massa sed pretium
            gravida, tellus elit condimentum nulla, ac commodo nulla arcu nec
            mi. Nulla ex tellus, laoreet non tellus sed, accumsan interdum
            sapien. Mauris iaculis enim eu fringilla mattis. Curabitur ut
            sodales justo, eget volutpat erat. Duis orci urna, dignissim at
            libero a, auctor efficitur massa. Aenean odio dolor, efficitur sit
            amet tempor ac, condimentum id lorem. Fusce pulvinar, magna vel
            blandit aliquam, odio nulla fringilla nunc, a commodo purus nulla
            vel mi. Maecenas sed condimentum libero. Cras quis metus id turpis
            venenatis fermentum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius lorem lectus. Donec eget odio quis nulla rhoncus fermentum.
            Nam vel massa volutpat, rhoncus nibh non, malesuada eros. Sed quis
            finibus mi. Fusce dignissim enim in accumsan pretium. Quisque
            tincidunt consectetur scelerisque. Nullam feugiat, massa sed pretium
            gravida, tellus elit condimentum nulla, ac commodo nulla arcu nec
            mi. Nulla ex tellus, laoreet non tellus sed, accumsan interdum
            sapien. Mauris iaculis enim eu fringilla mattis. Curabitur ut
            sodales justo, eget volutpat erat. Duis orci urna, dignissim at
            libero a, auctor efficitur massa. Aenean odio dolor, efficitur sit
            amet tempor ac, condimentum id lorem. Fusce pulvinar, magna vel
            blandit aliquam, odio nulla fringilla nunc, a commodo purus nulla
            vel mi. Maecenas sed condimentum libero. Cras quis metus id turpis
            venenatis fermentum.
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}
