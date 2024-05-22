import { useEffect } from "react";
import { useModalContext } from "@/context/useModalContext";

const PasswordModal = () => {
  const [isModalOpen, { close }, ref] = useModalContext();

  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      close();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });

  return (
    <>
      {isModalOpen && (
        <div className="w-full h-full bg-slate-600 flex items-center justify-center absolute left-0 top-0 z-50">
          <div ref={ref} className="bg-white">
            <div>모달 제목</div>
            <span className="modal-close" onClick={() => close()}>
              X
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordModal;
