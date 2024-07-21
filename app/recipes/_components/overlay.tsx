const Overlay = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="fixed inset-0 bg-black opacity-50 z-40">
    {" "}
  </div>
);

export default Overlay;
