import moment from "moment";


const Header = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold  py-3">The Dragon News</h1>
            <p className="text-2xl font-bold">Its a highly authentic news portal</p>
            <p className="mt-2">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

            
               
            
        </div>
    );
};

export default Header;