import NavBar from "./newbar";

export default function Layout({children}){

    return (
    <div>
        <NavBar />
            <div>{children}</div>
    </div>

    );
}