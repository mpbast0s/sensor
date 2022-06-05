const url= "https://sensor-pied.vercel.app/api/csv_api";
async function dados(){
    const dados_fetch = await fetch('./api/csv_api');
    const dados_json= await dados_fetch.json();
    const dado = dados_json.ultimo_lido;
    console.log(dado);
    
    return dado;
}

const dado = dados();
console.log('-----');

function Home() {
    //const dado = dados();
    return (
        <div> <h1> teste 5 {dado}</h1></div>
    )}

export default Home