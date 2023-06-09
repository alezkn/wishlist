import { Add } from "@mui/icons-material";
import { Button, IconButton, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { createProduct } from "~/services/apiServices";

interface CreateItemModalProps {
  fetchData: () => void;
}

const CreateItem: React.FC<CreateItemModalProps> = ({ fetchData }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePost = async () => {
    if (!name || !description || !link) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createProduct(name, description, link);
      fetchData();
      handleClose();
    } catch (error) {
      console.error(error);
      setError(
        "Erro ao adicionar o produto. Por favor, tente novamente mais tarde."
      );
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <IconButton
        className="shadow-md"
        onClick={handleOpen}
        disabled={isSubmitting}
      >
        <Add />
      </IconButton>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-blur">
          <div className="modal bg-white p-6 rounded shadow flex flex-col items-center overflow-auto w-96">
            <div className="w-full text-start">
              <h2 className="text-xl font-bold mb-4">Cadastro de produto</h2>
            </div>
            <form onSubmit={handlePost}>
              <TextField
                fullWidth
                label="Nome do produto"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-4"
              />
              <TextField
                fullWidth
                label="Descrição"
                variant="outlined"
                size="small"
                className="mt-4 mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                inputProps={{ maxLength: 100 }}
              />
              <TextField
                fullWidth
                label="Link"
                variant="outlined"
                size="small"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <div className="w-full text-end">
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <button
                  type="button"
                  className="text-gray-500 py-2 px-4 mt-6 mr-2"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Voltar
                </button>
                <button
                  type="button"
                  className="text-white py-2 px-4 mt-6 bg-green-400 rounded hover:bg-green-500"
                  disabled={isSubmitting}
                  onClick={handlePost}
                >
                  {isSubmitting ? "Adicionando..." : "Adicionar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateItem;
