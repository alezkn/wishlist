import Image from "next/image";
import Illustration from "~/assets/illustration.jpg";
import LoginModal from "~/components/LoginModal";

export default function Home() {
  return (
    <main className="sm:flex sm:justify-center">
      <div className="md:flex h-screen items-center justify-center">
        <div className="md:w-96 text-center">
          <h1 className="text-4xl font-black">
            Transforme seus desejos em realidade!
          </h1>
          <p className="text-gray-500 mt-2 mb-2">
            Crie sua lista de desejos, acompanhe seus itens favoritos e
            conquiste o que você mais deseja.
          </p>
          <LoginModal />
        </div>
        <div>
          <Image
            className="w-full sm:mt-"
            src={Illustration}
            alt={"Tela de PC mostrando o site de lista de desejos"}
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </main>
  );
}
