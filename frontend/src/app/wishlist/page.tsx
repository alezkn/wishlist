"use client";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { Logout, Delete, Edit, Search } from "@mui/icons-material";
import { TextField, IconButton, Select, MenuItem } from "@mui/material";

import { deleteProduct, getProducts } from "~/services/apiServices";

import CreateItemModal from "~/components/CreateItemModal";
import PrivateRoute from "~/components/PrivateRoute";

type FilterOption = "old" | "new";

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  link: string;
  userId: string;
  dateAdded: string;
}

export default function WishList() {
  const { data: session } = useSession();
  const [filterBy, setFilterBy] = useState<FilterOption>("new");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const handleFilterChange = (value: FilterOption) => {
    setFilterBy(value as FilterOption);
  };

  const fetchData = async () => {
    const wishlistAux = await getProducts(search, filterBy);
    setWishlist(wishlistAux);
  };

  useEffect(() => {
    fetchData();
  }, [filterBy, search]);

  function handleDelete(id: number): void {
    deleteProduct(id).then(() => fetchData());
  }

  return (
    <PrivateRoute>
      <main>
        <header className="flex flex-row justify-between p-4 border-b border-gray-400">
          <h1 className="font-bold">WishList</h1>
          <div className="flex items-center">
            <span className="mr-2">Bem vindo, {session?.user?.name}!</span>
            <Logout
              className="cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div>
        </header>
        <div className="fixed left-0 w-screen h-screen bg-gray-50">
          <div className="flex justify-between shadow mt-4 max-w-2xl mx-auto p-4 rounded-lg bg-white">
            <div>
              <TextField
                label="Pesquisar"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <Search />
                    </IconButton>
                  ),
                }}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <Select
                className="ml-4"
                variant="outlined"
                size="small"
                value={filterBy}
                onChange={(event) =>
                  handleFilterChange(event.target.value as FilterOption)
                }
              >
                <MenuItem value="old">Antigos</MenuItem>
                <MenuItem value="new">Recentes</MenuItem>
              </Select>
            </div>
            <CreateItemModal fetchData={fetchData} />
          </div>
          <div
            id="wish-list"
            className="max-h-[calc(100vh-188px)] overflow-y-auto custom-scrollbar"
          >
            {wishlist.length > 0 ? (
              wishlist.map((item) => {
                return (
                  <div
                    key={`wish-item-${item.id}`}
                    id={`wish-item-${item.id}`}
                    className="flex justify-between shadow mt-4 max-w-2xl mx-auto p-4 rounded-lg bg-white items-center"
                  >
                    <div className="flex">
                      <div>
                        <p id={`item-name-${item.id}`} className="font-bold">
                          {item.name}
                        </p>
                        <p
                          id={`item-description-${item.id}`}
                          className="w-80 overflow-hidden text-ellipsis line-clamp-2 text-sm text-gray-600"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        className="text-white py-2 px-4 bg-green-400 rounded hover:bg-green-500 mr-4"
                        onClick={() => {
                          window.open(item.link, "_blank");
                        }}
                      >
                        Ver Produto
                      </button>
                      <Delete
                        className="cursor-pointer"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center mt-8 text-gray-500">
                Você não tem nenhum desejo cadastrado, clique no botão de
                adicionar para adicionar :)
              </p>
            )}
          </div>
        </div>
      </main>
    </PrivateRoute>
  );
}
