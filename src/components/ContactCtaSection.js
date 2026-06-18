"use client";

import { useEffect, useState } from "react";

function BriefIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 4h8l4 4v12H7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 4v4h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10 12h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 16h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 17V7h10l6 6v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 7v6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 21v-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.5 16.5 12 14l2.5 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactCtaSection() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);

    if (window.location.hash === "#ajanlatkeres") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#ajanlatkeres") {
        setIsOpen(true);
      }
    };

    openFromHash();

    window.addEventListener("hashchange", openFromHash);

    return () => {
      window.removeEventListener("hashchange", openFromHash);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section className="contactCtaSection" id="kapcsolat">
        <div className="contactCtaInner">
          <div className="contactCtaLead">
            <h2>Kezdjük el közösen a következő projektet!</h2>
          </div>

          <div className="contactCtaCard">
            <div className="contactCtaIcon">
              <BriefIcon />
            </div>
            <p>Írja le röviden az elképzelést</p>
          </div>

          <div className="contactCtaCard">
            <div className="contactCtaIcon">
              <UploadIcon />
            </div>
            <p>Csatolja a terveket vagy referenciákat</p>
          </div>

          <div className="contactCtaActions">
            <button
              type="button"
              className="contactCtaButton"
              onClick={() => setIsOpen(true)}
            >
              Ajánlatkérés
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="requestModalOverlay" onClick={closeModal}>
          <div
            className="requestModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="requestModalClose"
              onClick={closeModal}
              aria-label="Bezárás"
            >
              ×
            </button>

            <div className="requestModalHeader">
              <p className="requestModalEyebrow">Ajánlatkérés</p>
              <h3 id="request-modal-title">
                Írja le röviden a projektet, és felvesszük Önnel a kapcsolatot.
              </h3>
            </div>

            <form className="requestModalForm">
              <div className="formRow">
                <label>
                  <span>Név</span>
                  <input type="text" placeholder="Az Ön neve" />
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" placeholder="email@pelda.hu" />
                </label>
              </div>

              <label>
                <span>Telefonszám</span>
                <input type="text" placeholder="+36 ..." />
              </label>

              <label>
                <span>Projekt típusa</span>
                <input
                  type="text"
                  placeholder="pl. belsőépítészeti elem, prototípus, egyedi alkatrész"
                />
              </label>

              <label>
                <span>Üzenet</span>
                <textarea placeholder="Röviden írja le, milyen elképzelésen vagy problémán dolgozik."></textarea>
              </label>

              <label>
                <span>Tervek / referenciák csatolása</span>
                <input type="file" multiple />
              </label>

              <button type="button" className="requestModalSubmit">
                Küldés
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
