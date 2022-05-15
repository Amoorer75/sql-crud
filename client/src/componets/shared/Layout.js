import Nav from "./Nav"
import Footer from "./Footer"


export default function Layout(props){

    return(
        <div >
            <h1>Gamer Info On Games</h1>
            <Nav />

            {props.children}

            <Footer  />
        </div>
    )
}