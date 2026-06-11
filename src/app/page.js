const benefits = [
  ["Gyárthatósági felülvizsgálat", "A terveket már korai fázisban átnézzük, hogy megvalósíthatók legyenek."],
  ["Műszaki tervezés", "Részlettervek, dokumentációk és 3D modellek a pontos kivitelezéshez."],
  ["CNC optimalizálás", "A lehető leghatékonyabb megmunkálási módot keressük meg."],
  ["Prototípus készítés", "Mintadarab, tesztelés és finomhangolás gyártás előtt."],
  ["Egyedi csomópontok", "Kihívást jelentő részletekre is működő megoldást találunk."],
  ["Kis- és közepes szériák", "Rugalmas gyártás prototípustól kisebb szériákig."],
];

const steps = [
  "Koncepció",
  "Műszaki felülvizsgálat",
  "Gyárthatósági optimalizálás",
  "Prototípus",
  "CNC megmunkálás",
  "Kivitelezés",
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="brand">
          <div className="mark">M</div>
          <div>
            <strong>MARLEN</strong>
            <span>ATELIER KFT.</span>
          </div>
        </div>
        <div className="navlinks">
          <a>Főoldal</a>
          <a>Tervezőknek</a>
          <a>CNC megmunkálás</a>
          <a>Referenciák</a>
          <a>Kapcsolat</a>
        </div>
        <a className="navbutton" href="#kapcsolat">Projekt egyeztetés</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">A jó ötlet és a megvalósítható termék közötti hiányzó láncszem.</p>
          <h1>Ötletből gyártható valóság.</h1>
          <p className="lead">
            A MARLEN Atelier tervezők, belsőépítészek és kivitelezők gyártástechnológiai partnere.
            Komplex geometriai formák, egyedi alkatrészek, CNC megmunkálás és műszaki optimalizálás.
          </p>
          <div className="buttons">
            <a className="primary" href="#tervezoknek">Tervezőknek</a>
            <a className="secondary" href="#kapcsolat">Projekt egyeztetés</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="visualCard large placeholder heroPlaceholder">
            <div>
              <span>CAD</span>
              <strong>→ CNC →</strong>
              <span>Kész termék</span>
            </div>
          </div>
          <div className="processStrip">
            <span>01 Koncepció</span>
            <span>02 Tervezés</span>
            <span>03 CNC</span>
            <span>04 Kész termék</span>
          </div>
        </div>
      </section>

      <section className="intro" id="tervezoknek">
        <div>
          <p className="eyebrow">Tervező vagy belsőépítész?</p>
          <h2>Mi a megvalósításban segítünk.</h2>
        </div>
        <p>
          Nem kell műhelyt fenntartanod ahhoz, hogy egyedi, látványos és technikailag összetett
          megoldásokat tervezz. Segítünk áthidalni a látványterv és a gyártás közötti szakadékot.
        </p>
      </section>

      <section className="benefits">
        {benefits.map(([title, text]) => (
          <article key={title}>
            <div className="icon">✦</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="split">
        <div className="splitText">
          <p className="eyebrow">Van egy ötleted, amit mindenki túl bonyolultnak tart?</p>
          <h2>Mi megoldjuk.</h2>
          <p>
            Ha a terveződ vagy kiviteleződ nem talált rá megoldást, keress meg minket.
            Segítünk a koncepció műszaki kidolgozásában és a gyártásban.
          </p>
          <a className="secondary" href="#kapcsolat">Beszéljünk róla</a>
        </div>
        <div className="splitImage placeholder wavePlaceholder">
          <span>komplex forma</span>
        </div>
      </section>

      <section className="workflow">
        <p className="eyebrow">Hogyan dolgozunk együtt?</p>
        <h2>Az ötlettől a megvalósulásig</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="references">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Referenciák</p>
            <h2>Kiemelt irányok</h2>
          </div>
          <a className="secondary">Összes referencia</a>
        </div>

        <div className="referenceGrid">
          <article>
            <div className="referenceVisual placeholder panelPlaceholder"></div>
            <div>
              <h3>Parametrikus falburkolatok</h3>
              <p>CNC mart, egyedi mintázatú belsőépítészeti elemek.</p>
            </div>
          </article>
          <article>
            <div className="referenceVisual placeholder furniturePlaceholder"></div>
            <div>
              <h3>Egyedi bútorok</h3>
              <p>Konyhák, recepciók, beépített bútorok és különleges tárgyak.</p>
            </div>
          </article>
          <article>
            <div className="referenceVisual placeholder prototypePlaceholder"></div>
            <div>
              <h3>Prototípusok</h3>
              <p>Ötletek kipróbálása, tesztelése és gyártásra előkészítése.</p>
            </div>
          </article>
        </div>
      </section>

      <footer id="kapcsolat">
        <div>
          <p className="eyebrow">Kapcsolat</p>
          <h2>Dolgozzunk együtt a következő projekten.</h2>
        </div>
        <div className="footerData">
          <p>MARLEN Atelier Kft.</p>
          <p>1223 Budapest, Nagytétényi út 180-196.</p>
          <p>info@majdkitalalom.hu</p>
          <p>+36 70 948 6865</p>
        </div>
      </footer>
    </main>
  );
}