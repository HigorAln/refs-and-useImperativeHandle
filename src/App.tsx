import { FormEvent, useCallback, useRef } from "react";
import Input from "./components/Inputs";
import Modal, { ModalHandles } from "./components/Modal";

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleOpenMOdal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Nome Completo" ref={nameInputRef} />
        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <button type="submit">Realizar Foco</button>
      </form>

      <button onClick={handleOpenMOdal}>Abrir Modal</button>

      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
