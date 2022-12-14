import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from "nprogress";
import NavBar from "./NavBar";

const Layout = ({ children, title,  footer = true, dark }) => {
    const router = useRouter();

    useEffect(() => {
        // funcion que maneja los cambios en la ruta de la app
        const handleRouteChange = url => {
            console.log(url);
            NProgress.start();
        }
        // encendemos el evento del router y asignamos la funcion handler
        router.events.on('routeChangeStart', handleRouteChange);

        router.events.on('routeChangeComplete', () => NProgress.done());

        // Apagamos el evento del route al igual que la funcion
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, []);

    return (
        <div className={ dark ? 'bg-dark' : ''}>
            <NavBar />
            <main className="container py-4">
                {
                    title && (
                        <h1 className={'text-center ' + ( dark ? 'text-light' : 'text-dark')}>{ title }</h1>
                    )
                }
                { children }
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Maquino Hernandez Portfolio</h1>
                            <p>2000 - { new Date().getFullYear() }</p>
                            <p>All right Reserved</p>
                        </div>
                    </footer>
                )
            }
        </div>
    )
}

export default Layout;