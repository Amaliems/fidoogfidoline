import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produktkort from "../../components/admin/ProduktAdminkort";


export default function AdminSide() {

//posts kommer til at indeholde alle produkter i en liste (Array)
 const [posts, setPosts] = useState([]);
//isPost kan være true eller false. hvis ingen produkter eksisterer, så er isPost false
 const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
 const navigate = useNavigate();
 
 //Function (hook) som hendter produkter fra Firebase database 
 useEffect(() => {
 async function getPosts() {
 const url ="https://fidoogfidoline-731a4-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
 const response = await fetch(url);

 //data inderholder alt indhold fra produkt database 
 const data = await response.json();

 // er der produkter? - det er det koden spørger om 
 if (data !== null) {
 const postsArray = Object.keys(data).map((key) => ({
 id: key,
 ...data[key],
 }));
 //vairable "posts" bliver lig med listen af produkter
 setPosts(postsArray);
 } else {
    //sætter variablen isPosts til false, for der er ingen produkter 
 setIsPosts(false);
 }
 }
 getPosts();
 }, []);

 //det er en eventhandler  for klik på opret knap 
 function opretklik() {
 navigate("/create");
 }

 return (
 <main>
 <h1>
 Administration af produkter
 <button type="button" onClick={opretklik}>+ Opret produkt</button>
 </h1>


 {isPosts ? (
    // Dette er en anden måde at skrive true or false - {isPost ?( er med
 <div className="kortraekke">
 {posts.map((post) => (
 <Produktkort key={post.id} post={post} />
 ))}
 </div>
 ) : (
 <p>Ingenting at vise</p>
 )}
 </main>
 );
}
