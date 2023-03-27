import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Footer(){
    return(

<footer className="footer">



<div className="footer_kontakt" >
    <PhoneIcon />
        <h5>Kontakt</h5>
        
        <p>Adresse: Hvalpevej 88, Hundsted 2233
        <br/>
        Tel: +45 22 33 44 55
        <br/>
        E-mail: Fidoogfidoline@gmail.com
        </p>
</div>


    <div >
        <div className="footer_aabningstider">
        <AccessTimeIcon />
        <h5>Åbningstider</h5>
        </div>
    <table>
        <tbody>
            <tr>
                <td>Mandag - Fredag</td>
                <td>09:00 - 17:00</td>
            </tr>
            <tr>
                <td>Lørdag - Søndag</td>
                <td>Lukket</td>
            </tr>
        </tbody>
    </table>
       
    </div>

    <div className="footer_some" >
        <h5>Sociale Medier</h5>
        <p>
        Pinterest
        <br/>
        Instagram
        <br/>
        Facebook
        </p>
    </div>
</footer>)
}