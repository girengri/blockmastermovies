import { NextPage } from "next";
import { MovieLayout } from "../components/layouts";

const Page404: NextPage = () => {
    return (
        <MovieLayout
            pageDescription="No hay nada que mostrar aqui"
            title="Pagina no encontrada"
        >
            <section>
                
            </section>
        </MovieLayout>
    );
};

export default Page404;
