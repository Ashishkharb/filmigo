const Seasons = ({ seasons }) => {
    return (
        <div>
            <p>Number of Seasons: {seasons.length}</p>
            <p>
                Number of episodes:{' '}
                {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
            </p>
            <div>
                {seasons.map(season => {
                    return <div key={season.id}>
                        <p>Season: {season.number}</p>
                        <p>Episodes: {season.episodeOrder}</p>
                        <div>
                            Aired: {season.premiereDate} - {season.endDate}
                        </div>
                    </div>;
                })}
            </div>
        </div>
    );
};

export default Seasons;
