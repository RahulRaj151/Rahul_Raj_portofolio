export default function XPWindow({ title, onClose, children, width = 520 }) {
  return (
    <div className="xp-window-overlay" role="dialog" aria-modal="true">
      <div className="xp-window" style={{ width }}>
        <div className="xp-titlebar">
          <span>{title}</span>
          <button type="button" className="xp-close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="xp-content">{children}</div>
      </div>
    </div>
  );
}
