const url = "https://sensor-pied.vercel.app/api/csv_api"; 
export async function getServerSideProps() {
    const dados_fetch = await fetch(url);
    const dados_json= await dados_fetch.json();
    const dado = dados_json.ultimo_lido;

    return { props: { dados: dado } }
}

function Home({ dados }) {
    //const dado = fetch('./api/csv_api');
    //const dado_j = dado.json();

    return (
        <div> <h1> teste { dados }</h1></div>
    )}

export default Home