import { useState, useEffect } from 'react'

const url = "https://sensor-pied.vercel.app/api/csv_api";
const file_2 = "https://docs.google.com/spreadsheets/d/1zvEt9-82MyFcREDqUVxHxOMyxREG_91ev2k0OzjfE00/export?format=csv"


/*
export async function getServerSideProps() {
    const dados_fetch = await fetch(url);
    const dados_json = await dados_fetch.json();
    const dado = dados_json.ultimo_lido;

    return { props: { dados: dado } }
}*/

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    var data_d = "o";

    const fetch_data = async () => {
        try {
            setLoading(true)
            const csv_fetch = await fetch(file_2);
            const csv_texto = await csv_fetch.text();
            const valores = csv_texto.split('\r\n');
            const indice = valores.length - 1;
            data_d = valores[indice];
            setData(data_d)
            console.log(valores[indice])


        } catch (error){
            console.log(error)
        } finally { 
            setLoading(false)
        }
       // console.log('1')
    }
    
    useEffect(() => {
       fetch_data()
    }, []) 
    setInterval(fetch_data, 10000);

    return (
        <>
            <h1> poxa {loading}</h1>
            <div>
                {loading && 
            <p> Carregando ...</p>
            } 
            <p> oi {data} </p>
             </div>
        </>
    )
}
