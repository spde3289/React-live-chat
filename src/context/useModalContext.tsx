import {
  createContext,
  useContext,
  useState,
  useMemo,
  useRef,
  MutableRefObject,
  ReactNode,
} from "react";

type ModalHandleType = {
  close: () => void;
  open: (article: any) => void;
};

type ModalContextType = [
  any | null,
  ModalHandleType,
  MutableRefObject<HTMLDivElement | null>
];

const ModalContext = createContext<ModalContextType | null>(null);

type ModalContextProviderType = {
  children: ReactNode;
};

const ModalContextProvider = ({ children }: ModalContextProviderType) => {
  const [content, setContent] = useState<any | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const handle = useMemo<ModalHandleType>(
    () => ({
      close: () => setContent(null),
      open: (article: any) => setContent(article),
    }),
    []
  );

  return (
    <ModalContext.Provider
      children={children}
      value={[content, handle, ref]}
    />
  );
};

export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider"
    );
  }
  return context;
}

export default ModalContextProvider;
