import NavBar from "./NavBar";

const Layout = ({ children }) => (
    <>
        <NavBar />
        <main className="container py-4">
            { children }
        </main>
        <footer className="bg-dark text-light text-center">
            <div className="container p-4">
                <h1>&copy; Maquino Hernandez Portfolio</h1>
                <p>2000 - { new Date().getFullYear() }</p>
                <p>All right Reserved</p>
            </div>
        </footer>
    </>
)

export default Layout;