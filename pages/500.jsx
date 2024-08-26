import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Sunucu Hatası var gibi görünüyor. Lütfen daha sonra tekrar deneyin!"} />
}

export default UnkownPage;
