const ShowCard = ({ name, image, id, summary }) => {
    const summaryStripped = summary
        ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
        : 'No Description available';

    return (
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>

            <p>{summaryStripped}</p>
            <div>
                <a href={`/shows/${id}`} target="_blank" rel="noreferrer">
                    Read more
                </a>
                <button type="button">Star me</button>
            </div>
        </div>
    );
};

export default ShowCard;
