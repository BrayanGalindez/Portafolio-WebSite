import PropTypes from "prop-types";
import { useEffect } from "react";
function FloatingModal({ isFormSubmitted, isFormError, closeModal }) {
  useEffect(() => {
    if (isFormSubmitted || isFormError) {
      const timeout = setTimeout(() => {
        closeModal();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isFormSubmitted, isFormError, closeModal]);
  
  FloatingModal.propTypes = {
    isFormSubmitted: PropTypes.object,
    isFormError: PropTypes.object,
    closeModal: PropTypes.object
  };
 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      {isFormSubmitted ? (
        <div className="bg-green-500 text-white px-6 py-4 rounded">
          <h3>Formulario enviado correctamente</h3>
          <p>¡Gracias por tu mensaje!</p>
        </div>
      ) : isFormError ? (
        <div className="bg-red-500 text-white px-6 py-4 rounded">
          <h3>Error al enviar el formulario</h3>
          <p>Por favor, inténtalo de nuevo más tarde.</p>
        </div>
      ) : null}
    </div>
  );
}

export default FloatingModal;