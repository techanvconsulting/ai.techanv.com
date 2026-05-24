import { useEffect, useRef } from "react";

// Accessible modal built on the native <dialog> element:
// native focus trap, ESC-to-close, scroll lock, and top-layer rendering.
const Modal = ({ open, onClose, title, eyebrow, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onCancel = (e) => {
      e.preventDefault();
      onClose();
    };
    const onClick = (e) => {
      // close when the backdrop (the dialog element itself) is clicked
      if (e.target === d) onClose();
    };
    d.addEventListener("cancel", onCancel);
    d.addEventListener("click", onClick);
    return () => {
      d.removeEventListener("cancel", onCancel);
      d.removeEventListener("click", onClick);
    };
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={title}
      className="w-[min(34rem,calc(100vw-2rem))] p-0 bg-transparent text-n-1 backdrop:bg-n-8/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-8 bg-n-7 border border-n-6 rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full border border-n-6 text-n-3 transition-colors hover:text-color-1 hover:border-color-1/40"
        >
          ✕
        </button>

        {eyebrow && (
          <p className="font-code text-xs uppercase tracking-wider text-color-1 mb-3">
            {eyebrow}
          </p>
        )}
        {title && <h4 className="h5 mb-4 pr-8">{title}</h4>}

        <div className="body-2 text-n-3">{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
