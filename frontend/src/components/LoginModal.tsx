"use client";
import { Modal } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

const LoginModal: React.FC = () => {
  const { data: session, status } = useSession();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="bg-yellow-400 text-white py-2 px-4 rounded"
        onClick={() => {
          if (session) {
            window.location.href = "/wishlist";
          } else {
            handleOpen();
          }
        }}
      >
        Acesse sua lista de desejos
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-blur ">
          <div className="modal bg-white p-6 rounded shadow flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Bem vindo!</h2>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => signIn(undefined, { callbackUrl: "/wishlist" })}
            >
              Continuar com Google
            </button>
            <div className="w-full text-end">
              <button
                className="text-gray-500 py-2 px-4 rounded mt-6"
                onClick={() => handleClose()}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
