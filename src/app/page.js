const services = [
  {
    title: "Gyárthatósági felülvizsgálat",
    text: "Már a tervezés korai fázisában vizsgáljuk a megvalósíthatóságot, így időt és költséget spórolunk.",
  },
  {
    title: "Műszaki dokumentáció",
    text: "Részlettervek, gyártási rajzok és dokumentáció a pontos kivitelezéshez.",
  },
  {
    title: "CNC optimalizálás",
    text: "Geometriai és gyártástechnológiai optimalizálás a hatékony és pontos gyártás érdekében.",
  },
  {
    title: "Egyedi csomópontok",
    text: "Komplex formák és szerkezeti kapcsolatok megoldása különleges design elképzelésekhez.",
  },
  {
    title: "Prototípus készítés",
    text: "Gyors mintadarabok és prototípusok a tervek validálásához és prezentációhoz.",
  },
  {
    title: "Gyártás előkészítés",
    text: "A kreatív koncepciótól a gyártható műszaki megoldásig vezetjük a folyamatot.",
  },
];

const materials = ["fa", "fém", "kompozit", "rétegelt lemez", "ásványi anyag", "réz"];

const processSteps = [
  {
    number: "01",
    title: "Koncepció értelmezése",
    text: "Megértjük a tervezői szándékot, az anyaghasználatot, a formai elképzelést és a kívánt vizuális hatást.",
  },
  {
    number: "02",
    title: "Gyárthatósági vizsgálat",
    text: "Megnézzük, milyen technológiával, milyen szerkezettel és milyen anyagból lehet biztonságosan megvalósítani.",
  },
  {
    number: "03",
    title: "Műszaki kidolgozás",
    text: "Részleteket, csomópontokat, gyártási logikát és szükség esetén 3D/CAD dokumentációt készítünk.",
  },
  {
    number: "04",
    title: "Prototípus vagy gyártás",
    text: "A tervből mintadarab, prototípus vagy kis szériás gyártásra előkészített megoldás készül.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="header">
        <a className="brand" href="#">
          <img src="/logo.png" alt="MARLEN Atelier logó" />
          <div>
            <span>MARLEN</span>
            <small>ATELIER</small>
          </div>
        </a>

        <nav className="nav">
          <a href="#">Főoldal</a>
          <a href="#tervezoknek">Tervezőknek</a>
          <a href="#referenciak">Referenciák</a>
          <a href="#anyagok">Anyagok</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Design engineering / CNC / prototípus</p>

          <h1>
            Ötletből
            <br />
            gyártható
            <br />
            <span>valóság.</span>
          </h1>

          <p className="lead">
            Tervezőknek, belsőépítészeknek és design stúdióknak segítünk a
            kreatív ötletek műszaki megvalósításában.
          </p>

          <div className="heroActions">
            <a href="#tervezoknek" className="button primary">
              Tervezőknek
            </a>
            <a href="#kapcsolat" className="button secondary">
              Kapcsolat
            </a>
          </div>
        </div>

       <div className="heroVisual" aria-hidden="true">
  <div className="heroImageOverlay"></div>
</div>
      </section>

      <section className="section why">
        <div className="sectionTitle">
          <p>Miért a MARLEN?</p>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <div className="serviceIcon">{String(index + 1).padStart(2, "0")}</div>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection" id="tervezoknek">
        <div className="splitText">
          <p className="eyebrow">Tervezőknek</p>
          <h2>A kreatív ötlet és a gyártható termék között gyakran hiányzik egy lépés.</h2>
          <p>
            Mi ebben segítünk. Nem csak kivitelezünk, hanem már a koncepció
            korai szakaszában műszaki szemmel vizsgáljuk, hogyan lehet az
            elképzelést valóban legyárthatóvá tenni.
          </p>
          <a href="#kapcsolat" className="textLink">
            Tudjon meg többet
          </a>
        </div>

        <div className="splitVisual">
          <div className="detailObject"></div>
        </div>
      </section>

      <section className="processSection">
        <div className="processIntro">
          <p className="eyebrow">Folyamat</p>
          <h2>Nem csak kivitelezünk. A gyártható megoldást építjük fel.</h2>
          <p>
            A MARLEN azoknál a projekteknél tud igazán hasznos lenni, ahol a
            design elképzelés erős, de a megvalósítás módja még nem egyértelmű.
          </p>
        </div>

        <div className="processGrid">
          {processSteps.map((step) => (
            <article className="processCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="doubleSection">
        <article className="referenceBlock" id="referenciak">
          <p className="eyebrow">Referenciák</p>
          <h2>Különleges belsőépítészeti és tárgytervezési megoldások.</h2>
          <p>
            A referencia galéria később kerül feltöltésre. A blokk már készen
            áll a projektek bemutatására.
          </p>
          <span>Hamarosan</span>
        </article>

        <article className="materialsBlock" id="anyagok">
          <p className="eyebrow">Anyagok & megoldások</p>
          <h2>Anyagok, technológiák és formák összehangolása.</h2>

          <div className="materialTags">
            {materials.map((material) => (
              <span key={material}>{material}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="contactSection" id="kapcsolat">
        <div>
          <p className="eyebrow">Kapcsolat</p>
          <h2>Van egy terve?</h2>
          <p>
            Írja le röviden az elképzelést, mi pedig segítünk műszakilag
            megvalósítható formába hozni.
          </p>
        </div>

        <form className="contactForm">
          <input type="text" placeholder="Név" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Üzenet"></textarea>
          <button type="button">Küldés</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <img src="/logo.png" alt="MARLEN Atelier logó" />
          <div>
            <strong>MARLEN</strong>
            <span>ATELIER</span>
          </div>
        </div>

        <p>Budapest XXII. kerület</p>
        <p>info@marlenatelier.hu</p>
        <p>+36 20 123 4567</p>
      </footer>
    </main>
  );
}