export default function AppTitle(props) {
    const {
        title = 'Filmigo',
        subtitle = 'Are you looking for a movie or actor?',
    } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
