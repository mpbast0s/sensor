import { useState, useEffect } from 'react'

const url = "https://docs.google.com/spreadsheets/d/1zvEt9-82MyFcREDqUVxHxOMyxREG_91ev2k0OzjfE00/export?format=csv"


export default function Home() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    var data_d = "o";

    const fetch_data = async () => {
        try {
            setLoading(true)
            const csv_fetch = await fetch(url);
            const csv_texto = await csv_fetch.text();
            const valores = csv_texto.split('\r\n');
            const indice = valores.length - 1;
            data_d = valores[indice];
            setData(data_d)
            
        } catch (error){
            console.log(error)
        } finally { 
            setLoading(false)
        }
    }
    
    useEffect(() => {
       fetch_data()
    }, []) 

    setInterval(fetch_data, 1000);

    return (
        <>
            <h1> Valor sendo alterado:  </h1>
            <div>
            <p> {data} </p>
             </div>
        </>
    )
}

//se precisar do carregando: {loading && <p> Carregando ...</p>}
