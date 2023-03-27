import { useNavigate } from "react-router-dom";

export default function ProduktAdminkort ({post}){
    const navigate = useNavigate();
//Når brugeren klikker på produktkortet dirigeres brugeren til formularside
//post.id (index) er kortets unikke placering i produktlisten
    function opdaterKlik() {
        navigate(`posts/${post.id}`);

    }

    return(
        <div className="kort adminkort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr/>
                <p>Varighed: {post.varighed} min.</p>
                <p>Pris kr. {post.pris}</p>

            </div>

        </div>
    );
}