
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const NewsDetails = () => {
    const {id} = useParams();
 



  console.log(id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1>News Details: {id}</h1>

        </div>
    );
};

export default NewsDetails;