import Header from "../components/Header";
import CardCalendar from "../components/CardCalendar";
import moment from 'moment';
moment.locale('fr');


export default function Calendar () {
    
    return (
        <>
            <Header />
            <CardCalendar />
            <p>DATE DU JOUR : {moment().format('Do MMMM')}</p>
        </>
    )
}