"use client";

import { useEffect, useRef } from "react";

const PHONE_LABEL = "085 810 7866";
const PHONE_HREF = "tel:+353858107866";
const EMAIL = "info@mediterranean-mezze.com";

// A modal with the phone number and inbox, opened from any "Contact us" button.
export default function ContactDialog({ triggerClassName = "pill pill-solid", triggerLabel = "Contact us" }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const onCancel = (event) => {
      // Let Escape close it without the browser's default flash/validation handling.
      event.preventDefault();
      dialog.close();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className={triggerClassName} onClick={open}>
        {triggerLabel}
      </button>
      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <button type="button" className="dialog-close" onClick={close} aria-label="Close">
          ×
        </button>
        <h3 id="contact-dialog-title" className="display">
          Get in touch
        </h3>
        <p>
          Need a hand, or want to talk about stocking a bottle? Reach us
          either way.
        </p>
        <hr />
        <a className="dialog-row" href={PHONE_HREF}>
          <span className="dialog-icon" aria-hidden="true">
            ⦿
          </span>
          {PHONE_LABEL}
        </a>
        <a className="dialog-row" href={`mailto:${EMAIL}`}>
          <span className="dialog-icon" aria-hidden="true">
            ⦿
          </span>
          {EMAIL}
        </a>
      </dialog>
    </>
  );
}
