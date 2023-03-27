export default function BestillingsKort({ post }) {
    //"post" referer til oplysningerne i Firebase JSON
    //fx. post.pris = pris element i JSON
        return(
            <div className="kort">
                <div className="tekst">
                    <h3>{post.produkt}</h3>
                    <p>{post.dato}</p>
                    <p>{post.tid}</p>
                    <p>{post.hundenavn}</p>
                    <p>{post.hunderace}</p>
                    <p>{post.navn}</p>
                    <p>{post.mobil}</p>
                    <p>{post.adresse}</p>
                    <p>{post.postnr}</p>
                    <p>{post.bynavn}</p>
                    <p>{post.email}</p>
                </div>
            </div>
        )
    }