import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin evlat?',
        'Kahretsin! Bu çıkmaz yol.',
        'Olamaz dostum! Yanlış yerdesin.'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadı."} />
}

export default UnkownPage;

