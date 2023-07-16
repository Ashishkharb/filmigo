const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <h1>
                {name} {Boolean(gender) && `(${gender})`}
            </h1>
            <p>{country ? `Country: ${country}` : 'Country: Unknown'}</p>

            {!!birthday && <p>Born on: {birthday}</p>}
            <p>{deathday ? `Died on: ${deathday}` : 'Alive'}</p>
        </div>
    );
};

export default ActorsCard;
