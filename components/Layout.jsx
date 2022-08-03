import NavBar from "./NavBar";

const Layout = ({ children }) => (
    <>
        <NavBar />
        <main className="container py-4">
            { children }
        </main>
    </>
)

export default Layout;