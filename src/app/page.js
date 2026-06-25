import Header from "@/components/Header";
import ContactCtaSection from "@/components/ContactCtaSection";

const services = [
  {
    id: "audit",
    title: "MŰSZAKI FELÜLVIZSGÁLAT",
    description:
      "Ellenőrizzük a tervet, és amennyiben szükséges, javaslatot teszünk a jobb gyárthatóság és a költséghatékonyság érdekében.",
    icon: "audit",
  },
  {
    id: "design",
    title: "MŰSZAKI MODELLEZÉS",
    description:
      "Gyártásra kész, azt elősegítő részletrajzok és 3D modellek a pontos kivitelezéshez.",
    icon: "design",
  },
  {
    id: "cnc",
    title: "CNC MEGMUNKÁLÁS",
    description:
      "Nagy pontosságú megmunkálás különféle anyagokból, kreatív megoldásokhoz.",
    icon: "cnc",
  },
  {
    id: "prototype",
    title: "PROTOTÍPUS GYÁRTÁS",
    description:
      "Gyors és pontos mintadarabok és prototípusok a tervezés validálásához, teszteléshez és prezentációhoz.",
    icon: "prototype",
  },
  {
    id: "series",
    title: "KIS- ÉS KÖZEPES SZÉRIÁK",
    description:
      "Rugalmas gyártás kis és közepes szériáknál, állandó minőséggel és rövid határidővel.",
    icon: "series",
  },
  {
    id: "joints",
    title: "EGYEDI MEGOLDÁSOK",
    description:
      "Komplex formák és szerkezeti kapcsolatok megoldása egyedi műszaki és design elképzelésekhez.",
    icon: "joints",
  },
];

function renderServiceIcon(type) {
  switch (type) {
    case "audit":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle
            cx="27"
            cy="27"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          />
          <path
            d="M36 36l10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M20 27l5 5 10-11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49 19l-2.2 1.2-2.2-1.2-2.2 1.2V23l2.2 1.2L46.8 23v-2.8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "design":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M15 47V17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M15 47h34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M23 47V27"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M31 47V21"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M39 47V31"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M47 47V24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M19 21h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M35 25h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
        </svg>
      );

    case "cnc":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M20 18 32 12 44 18 32 24 20 18Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M20 18v12l12 6 12-6V18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M12 34 24 28 36 34 24 40 12 34Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M12 34v12l12 6 12-6V34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M40 34 52 28 52 40 40 46 40 34Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M32 24v10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
        </svg>
      );

    case "prototype":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M18 46V18h18l10 10v18H18Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M36 18v10h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M24 38h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M24 32h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
        </svg>
      );

    case "joints":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M24 14h16v12H50v12H40v12H24V38H14V26h10V14Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M24 26l16 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M40 26 24 38"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
        </svg>
      );

    case "series":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M18 20h8v8h-8zM28 20h8v8h-8zM38 20h8v8h-8zM13 30h8v8h-8zM23 30h8v8h-8zM33 30h8v8h-8zM43 30h8v8h-8zM18 40h8v8h-8zM28 40h8v8h-8zM38 40h8v8h-8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="site">
      <Header />

      <section className="hero" id="fooldal">
        <div className="heroVisual" aria-hidden="true">
          <div className="heroImageLayer"></div>
          <div className="heroImageOverlay"></div>
        </div>

        <div className="heroContent">
          <h1>
            CNC
            <br />
            MEGMUNKÁLÁS
            <br />
            <span>
              PARTNER
              <br />A KIVITELEZÉSBEN
            </span>
          </h1>

          <div className="heroTitleLine"></div>

          <p className="lead">
            Nagy pontosságú CNC technológiával és mérnöki szemlélettel alakítjuk
            a koncepciót gyártható, prémium minőségű termékké.
          </p>

          <div className="heroActions">
            <a href="#ajanlatkeres" className="button primary">
              Ajánlatkérés
            </a>

            <a href="#kapcsolat" className="button secondary">
              Kapcsolat
            </a>
          </div>
        </div>

        <div className="heroTechBox" aria-hidden="true">
          <p className="heroTechTitle">CNC TECHNOLÓGIA</p>

          <div className="heroTechDivider"></div>

          <ul className="heroTechList">
            <li>3-4 tengelyes megmunkálás</li>
            <li>Nagy formátum: 3100 x 2200 x 1000 mm</li>
            <li>Különféle anyagok precízen</li>
          </ul>
        </div>
      </section>

      <section className="whyMarlenSection" id="szolgaltatasok">
        <div className="whyMarlenInner">
          <div className="whyMarlenHeading">
            <p>SZOLGÁLTATÁSOK</p>
            <span />
          </div>

          <div className="whyMarlenGrid">
            {services.map((service) => (
              <article className="whyMarlenItem" key={service.id}>
                <div className="whyMarlenIcon">
                  {renderServiceIcon(service.icon)}
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="designersSection" id="tervezoknek">
        <div className="designersBackground" aria-hidden="true"></div>

        <div className="designersOverlay" aria-hidden="true"></div>

        <div className="designersContent">
          <div className="designersEyebrow">
            <span>Tervezőknek</span>
            <i></i>
          </div>

          <h2>
            A nehéz ötletekből
            <br />
            <strong>gyártható valóságot teremtünk</strong>
          </h2>

          <p className="designersLead">
            Segítünk a belsőépítészeknek és tervezőknek, hogy a
            legambiciózusabb koncepciók is megvalósíthatóak legyenek —
            műszakilag, esztétikailag és költséghatékonyan.
          </p>

          <div className="designersFeatureGrid">
            <article className="designersFeature">
              <div className="designersFeatureIcon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12.5 4.5 8.5M12 12.5l7.5-4M12 12.5V20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.2 6.1 16 10.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                </svg>
              </div>

              <p>Műszaki segítség a tervezés korai fázisától</p>
            </article>

            <article className="designersFeature">
              <div className="designersFeatureIcon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 20V8l6-4 6 4v12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 20v-5h6v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 10h2M13.5 10h2M8.5 13h2M13.5 13h2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>Egyedi megoldások és partneri háttér</p>
            </article>

            <article className="designersFeature">
              <div className="designersFeatureIcon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12 4.5 8M12 12l7.5-4M12 12v8.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 15.8 16 8.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>Széleskörű CAD kompatibilitás</p>
            </article>

            <article className="designersFeature">
              <div className="designersFeatureIcon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="1.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 8h8M8 12h5M8 16h8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.2 11.8 18 13.6l-4.2 4.2H12v-1.8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p>Megbízható partner a megvalósításig</p>
            </article>
          </div>

          <a href="#kapcsolat" className="designersButton">
            Tudjon meg többet
            <span>→</span>
          </a>
        </div>
      </section>

      <section className="aboutSection" id="rolunk">
        <div className="aboutTop">
          <div className="aboutText">
            <p className="aboutEyebrow">Rólunk</p>

            <h2>
              Az apró részletekben
              <br />
              rejlik a különbség.
            </h2>

            <p className="aboutLead">
              A MARLEN Atelier olyan projektekben érzi magát igazán otthon,
              ahol az ötlet erős, az elvárás magas, a megvalósítás pedig nem
              sablonos megoldásokat kíván. Faipari, műanyagipari és CNC
              gyártási háttérrel dolgozunk azon, hogy a tervezői elképzelések
              ne csak látványként működjenek, hanem pontosan, gyárthatóan és
              esztétikailag is helyükre kerüljenek.
            </p>

            <p>
              Számunkra a jó végeredmény nem csak a kész tárgyat jelenti, hanem
              az oda vezető folyamat minőségét is. Fontosnak tartjuk a részletek
              kidolgozását, az anyaghasználat következetességét, a csomópontok
              működését és azt, hogy a terv ne veszítsen az erejéből a
              kivitelezés során. Olyan megoldásokban gondolkodunk, ahol a
              műszaki racionalitás és a vizuális igényesség nem egymás ellen
              dolgozik, hanem erősíti egymást.
            </p>

            <p>
              Több éves CAD és megmunkálási tapasztalatunk révén a koncepciótól
              a prototípuson át a kész gyártásig tudunk értéket adni. Akkor
              vagyunk a leghasznosabbak, amikor egy elképzelés már túlmutat a
              szokásos megoldásokon, és szükség van valakire, aki érti a design
              szándékát, de közben a gyártási realitást is magabiztosan kezeli.
            </p>
          </div>

          <div className="aboutGallery" aria-hidden="true">
            <figure className="aboutImage aboutImage01">
              <img src="/about/about-01.png" alt="" />
            </figure>

            <figure className="aboutImage aboutImage02">
              <img src="/about/about-02.png" alt="" />
            </figure>

            <figure className="aboutImage aboutImage03">
              <img src="/about/about-03.png" alt="" />
            </figure>

            <figure className="aboutImage aboutImage04">
              <img src="/about/about-04.png" alt="" />
            </figure>
          </div>
        </div>

        <div className="aboutFeatures">
          <article className="aboutFeature">
            <div className="aboutFeatureIcon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 18V8l8-4 8 4v10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 18v-4h8v4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 10h2M13.5 10h2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <h3>Tervezői együttműködés</h3>
              <p>
                A belsőépítészekkel, tervezőkkel és kivitelezőkkel mindig öröm
                a munka: segítünk a koncepcióból megvalósítható részletet
                formálni.
              </p>
            </div>
          </article>

          <article className="aboutFeature">
            <div className="aboutFeatureIcon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12.5 4.5 8.5M12 12.5l7.5-4M12 12.5V20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>

            <div>
              <h3>CNC és prototípus</h3>
              <p>
                A részletek ellenőrzését és a gyártási döntéseket nem
                elméletben, hanem valós megmunkálási és anyagismereti
                tapasztalatra építjük.
              </p>
            </div>
          </article>

          <article className="aboutFeature">
            <div className="aboutFeatureIcon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h3>Megbízható partner</h3>
              <p>
                Nem csak legyártunk valamit, hanem végigkísérjük a folyamatot,
                hogy a végeredmény minőségben és megjelenésben is vállalható
                legyen.
              </p>
            </div>
          </article>
        </div>
      </section>

      <ContactCtaSection />

      <footer className="footer">
        <div className="footerBrandText">
    <strong>MARLEN</strong>
    <span>ATELIER</span>
  </div>

        <div className="footerLinksWrap">
          <div className="footerCol">
            <h4>Menü</h4>
            <ul>
              <li>
                <a href="#szolgaltatasok">Szolgáltatások</a>
              </li>
              <li>
                <a href="#tervezoknek">Tervezőknek</a>
              </li>
              <li>
                <a href="#rolunk">Rólunk</a>
              </li>
              <li>
                <a href="#kapcsolat">Kapcsolat</a>
              </li>
            </ul>
          </div>

          <div className="footerCol footerContactCol" id="kapcsolat-footer">
            <h4>Kapcsolat</h4>

            <div className="footerContactGrid">
              <ul className="footerContactList footerContactAddresses">
                <li>
                  <span className="footerContactIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  </span>

                  <span>
                    1223 Budapest, Nagytétényi út 180-196
                    <br />
                    Magyarország
                  </span>
                </li>

                <li>
                  <span className="footerContactIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M4 20V8l5-3 5 3v12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 10h6v10h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 20v-4h4v4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10h1.5M10.5 10H12M16 13h1.5M16 16h1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <span>
                    2049 Diósd, Vadrózsa köz 4.
                    <br />
                    Magyarország
                  </span>
                </li>
              </ul>

              <ul className="footerContactList footerContactInfo">
                <li>
                  <span className="footerContactIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M6.8 4.8h3.3l1.1 4-2 1.8a16.7 16.7 0 0 0 4.2 4.2l1.8-2 4 1.1v3.3a1.7 1.7 0 0 1-1.7 1.7A14.7 14.7 0 0 1 5.1 6.5 1.7 1.7 0 0 1 6.8 4.8Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>+36 70 948 6865</span>
                </li>

                <li>
                  <span className="footerContactIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x="4"
                        y="6"
                        width="16"
                        height="12"
                        rx="1.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="m5.5 7.5 6.5 5 6.5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>sales.marlen.at@gmail.com</span>
                </li>

                <li>
                  <span className="footerContactIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  </span>

                  <span>www.marlenatelier.hu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBrandLogo">
          <img src="/logo.png" alt="MARLEN Atelier logó" />
       <details className="impressumFloating">
  <summary
    type="button"
    className="impressumTrigger"
    aria-label="Impresszum adatok"
  >
    ⓘ
  </summary>

  <div className="impressumPopup">
    <h3>Impresszum</h3>

    <dl>
      <div>
        <dt>Cégnév</dt>
        <dd>MARLEN Atelier Kft.</dd>
      </div>

      <div>
        <dt>Székhely</dt>
        <dd>1223 Budapest, Nagytétényi út 180-196.</dd>
      </div>

      <div>
        <dt>Cégjegyzékszám</dt>
        <dd>01-09-383313</dd>
      </div>

      <div>
        <dt>Adószám</dt>
        <dd>14580361-2-43</dd>
      </div>

      <div>
        <dt>Nyilvántartó cégbíróság</dt>
        <dd>Fővárosi Törvényszék Cégbírósága</dd>
      </div>

      <div>
        <dt>Képviselő / ügyvezető</dt>
        <dd>Martonosi Csaba</dd>
      </div>

      <div>
        <dt>Email</dt>
        <dd>
          <a href="mailto:sales.marlen.at@gmail.com">
            sales.marlen.at@gmail.com
          </a>
        </dd>
      </div>

      <div>
        <dt>Telefon</dt>
        <dd>
          <a href="tel:+36709486865">+36 70 948 6865</a>
        </dd>
      </div>

      <div>
        <dt>Weboldal</dt>
        <dd>
          <a href="https://www.marlenatelier.hu">
            www.marlenatelier.hu
          </a>
        </dd>
      </div>

      <div>
        <dt>Tárhelyszolgáltató</dt>
        <dd>GitHub, Inc. / GitHub Pages</dd>
      </div>
    </dl>
  </div>
</details> 
<details className="privacyFloating">
  <summary
    type="button"
    className="privacyTrigger"
    aria-label="Adatkezelési tájékoztató"
  >
    AD
  </summary>

  <div className="privacyPopup">
    <h3>Adatkezelési tájékoztató</h3>

    <p>
      A MARLEN Atelier Kft. a weboldalon megadott elérhetőségeken keresztül
      érkező megkeresések során kezeli az érdeklődők által önkéntesen megadott
      személyes adatokat.
    </p>

    <dl>
      <div>
        <dt>Adatkezelő</dt>
        <dd>
          MARLEN Atelier Kft.
          <br />
          1223 Budapest, Nagytétényi út 180-196.
          <br />
          sales.marlen.at@gmail.com
          <br />
          +36 70 948 6865
        </dd>
      </div>

      <div>
        <dt>Kezelt adatok</dt>
        <dd>
          Az emailben vagy telefonon megadott név, email cím, telefonszám,
          cégnév, projektleírás, valamint az önkéntesen megküldött egyéb adatok.
        </dd>
      </div>

      <div>
        <dt>Adatkezelés célja</dt>
        <dd>
          Kapcsolatfelvétel, ajánlatkérés megválaszolása, projekt egyeztetése és
          üzleti együttműködés előkészítése.
        </dd>
      </div>

      <div>
        <dt>Jogalap</dt>
        <dd>
          Az érintett önkéntes megkeresése alapján történő kapcsolatfelvétel,
          ajánlatkérés megválaszolása, illetve az ehhez kapcsolódó jogos üzleti
          érdek.
        </dd>
      </div>

      <div>
        <dt>Megőrzési idő</dt>
        <dd>
          Az adatokat a megkeresés lezárásáig, illetve legfeljebb az utolsó
          kapcsolatfelvételtől számított 12 hónapig kezeljük, kivéve, ha
          jogszabály hosszabb megőrzési időt ír elő, vagy szerződéses kapcsolat
          jön létre.
        </dd>
      </div>

      <div>
        <dt>Adattovábbítás</dt>
        <dd>
          A MARLEN Atelier Kft. a személyes adatokat harmadik fél részére nem
          értékesíti. Az adatokhoz kizárólag a megkeresés kezelésében érintett
          személyek férhetnek hozzá.
        </dd>
      </div>

      <div>
        <dt>Érintetti jogok</dt>
        <dd>
          Az érintett kérheti személyes adatainak tájékoztatását, helyesbítését,
          törlését, kezelésének korlátozását, valamint tiltakozhat az adatkezelés
          ellen.
        </dd>
      </div>

      <div>
        <dt>Jogorvoslat</dt>
        <dd>
          Panasz esetén az érintett a Nemzeti Adatvédelmi és Információszabadság
          Hatósághoz fordulhat.
          <br />
          Weboldal:{" "}
          <a href="https://www.naih.hu" target="_blank" rel="noreferrer">
            www.naih.hu
          </a>
        </dd>
      </div>
    </dl>
  </div>
</details>
       </div>
      </footer>
    </main>
  );
}