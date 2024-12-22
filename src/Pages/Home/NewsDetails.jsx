
const NewsDetails = ({news}) => {
    const {title}=news;
    return (
        <div>
            <h1>News Details :{title}</h1>
        </div>
    );
};

export default NewsDetails;