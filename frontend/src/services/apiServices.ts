import axios from "axios";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";

async function getUserSession() {
  const session = await getSession();
  return session?.user?.email ?? "";
}

export async function createProduct(
  name: string,
  description: string,
  link: string
) {
  try {
    const userId = await getUserSession();
    const dateAdded = new Date().toISOString();

    const body = {
      name,
      description,
      link,
      userId,
      dateAdded,
    };

    const response = await axios.post(`http://localhost:5000/product`, body);
    toast.success("Produto adicionado com sucesso!");
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error(
      "Ocorreu um erro ao adicionar o produto, tente novamente mais tarde"
    );
  }
}

export async function deleteProduct(productId: number) {
  try {
    const response = await axios.delete(
      `http://localhost:5000/product/${productId}`
    );
    toast.success("Produto excluído com sucesso!");
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error(
      "Ocorreu um erro ao excluir o produto, tente novamente mais tarde"
    );
  }
}

export async function getProducts(search: string, filterBy: string) {
  const userId = await getUserSession();
  try {
    const response = await axios.get("http://localhost:8000/api/products", {
      params: {
        search: search ?? null,
        filterBy,
        userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error(
      "Ocorreu um erro ao buscar produtos, tente novamente mais tarde"
    );
  }
}
