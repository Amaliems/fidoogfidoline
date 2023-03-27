import { Link } from "react-router-dom";

export default function Produktkort({ post }) {
//"post" referer til oplysningerne i Firebase JSON
//fx. post.pris = pris element i JSON
    return(
        <div className="kort">
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr/>
                <p>Varighed: {post.varighed} min.</p>
                <p>Pris kr. {post.pris}</p>
                <botton className="leasmereknap">Læs mere</botton>
                <Link to={`/bestil/${post.id}`}className="bestilknap" >Bestil</Link>
            </div>
        </div>
    )
}