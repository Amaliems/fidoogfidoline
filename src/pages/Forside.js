import { useEffect, useState } from "react";
import Produktkort from "../components/Produktkort";
import hund from "../images/Hund.jpg";

export default function Forside(){
//Posts kommer til at indeholde lisen af pundeplejeprodukter
    const [posts, setPosts] = useState([]);
//isPost kan være enten true (hvis der er produkter) eller false hvis igen produkter der er.
    const [isPosts, setIsPosts] = useState(true);
//data hentes fra firebase og gemmes i postvariabel
    useEffect(() => {
    async function getPosts() {
    const url = "https://fidoogfidoline-731a4-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";

    //Vent indtil response modtager positivt svar fra firebase 
    const response = await fetch(url);
    //Læg JSON data (listen af produkter) over i variablen "data"
    const data = await response.json();
    //Tjek om der er faktsk er produkter på listen )(positiv hvis forskelligt fra null)
    if (data !== null) {
        const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
         }));
        setPosts(postsArray);
    } else {
        setIsPosts(false);
    }
    }
    getPosts();
    }, []);
    
    return(
        <main>
            <div className="forsidebillede" >
                <img src={hund} alt="billede af hund" className="herobillede"/>
            </div>
    
        {isPosts ? (
        <div className="kortraekke">
            {posts.map((post) => (
            <Produktkort key={post.id} post={post} />
            ))}
        </div>
        ) : (
            <p>Ingen produkter at vise</p>
        )}
        </main>
    )
}
//kommentar til linje 39-50
//Hvis der er produkter at vise (isPosts = true), så går programmet i loop
//(post.map) - hvor hvert element (post) på listen (posts), vis produktkort for pro produktet