"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "sales.marlen.at@gmail.com";
const CONTACT_PHONE_DISPLAY = "+36 70 948 6865";
const CONTACT_PHONE_LINK = "+36709486865";

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
  const [copied, setCopied] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setCopied("");

    if (window.location.hash === "#ajanlatkeres") {
      history.replaceState(null, "", window.location.pathname);
    }
  };

  const copyToClipboard = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);

      window.setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch {
      setCopied("");
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
            className="requestModal requestModalSmall"
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
                Kérjük, írjon emailt az alábbi e-mail címre.
              </h3>

              <p className="requestModalSubtext">
                Vagy keressen telefonon, és egyeztetjük a projekt részleteit.
              </p>
            </div>

            <div className="contactPopupList">
              <div className="contactPopupRow">
                <span className="contactPopupLabel">Email</span>

                <strong>{CONTACT_EMAIL}</strong>

                <div className="contactPopupActions">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(CONTACT_EMAIL, "email")}
                  >
                    {copied === "email" ? "Másolva" : "Másolás"}
                  </button>

                  <a href={`mailto:${CONTACT_EMAIL}`}>Email írása</a>
                </div>
              </div>

              <div className="contactPopupRow">
                <span className="contactPopupLabel">Telefon</span>

                <strong>{CONTACT_PHONE_DISPLAY}</strong>

                <div className="contactPopupActions">
                  <a href={`tel:${CONTACT_PHONE_LINK}`}>Hívás indítása</a>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(CONTACT_PHONE_DISPLAY, "phone")
                    }
                  >
                    {copied === "phone" ? "Másolva" : "Másolás"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}