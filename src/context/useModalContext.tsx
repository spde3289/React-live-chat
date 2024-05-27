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
  open: (link: string, selectMenu: string) => void;
};

type ModalContextType = [
  contentType | null,
  ModalHandleType,
  MutableRefObject<HTMLDivElement | null>
];

const ModalContext = createContext<ModalContextType | null>(null);

type ModalContextProviderType = {
  children: ReactNode;
};

type contentType = { link: string; selectMenu: string };

const ModalContextProvider = ({ children }: ModalContextProviderType) => {
  const [content, setContent] = useState<contentType | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const handle = useMemo<ModalHandleType>(
    () => ({
      close: () => setContent(null),
      open: (link: string, selectMenu: string) =>
        setContent({ link: link, selectMenu: selectMenu }),
    }),
    [content]
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
