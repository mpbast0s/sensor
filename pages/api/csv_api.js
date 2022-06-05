const file_2 = "https://docs.google.com/spreadsheets/d/1zvEt9-82MyFcREDqUVxHxOMyxREG_91ev2k0OzjfE00/export?format=csv"

async function csv(request, response){
    const csv_fetch = await fetch(file_2);
    const csv_texto = await csv_fetch.text();
    const valores = csv_texto.split('\r\n');
    const indice = valores.length - 1;

    response.setHeader('Cache-Control', 's-maxage=1, stale-while-reavalidate');

    response.json({
        ultimo_lido: valores[indice]
    })
  }
  
  export default csv;