import { useState, useEffect } from 'react'

const url = "https://sensor-pied.vercel.app/api/csv_api";

export async function getServerSideProps() {
    const dados_fetch = await fetch(url);
    const dados_json= await dados_fetch.json();
    const dado = dados_json.ultimo_lido;

    return { props: { dados: dado } }
}

function Home({ dados }) {
    //const [loading, setLoading] = useState(false);

    return (
            <>
            <h1>testee { dados } </h1>
            </>
    )
}


export default Home