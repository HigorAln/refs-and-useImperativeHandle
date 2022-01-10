import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      modal Aberto
      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  );
};

export default forwardRef(Modal);
