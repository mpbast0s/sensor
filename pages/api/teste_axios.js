var file = 'C:\\Users\\Usuario\\Desktop\\1° período - ufrp\\formula\\sensores_do_chicote\\acelerometro\\teste_bd.csv';
var file_2 = "https://docs.google.com/spreadsheets/d/1zvEt9-82MyFcREDqUVxHxOMyxREG_91ev2k0OzjfE00/export?format=csv"

import axios from 'axios'
import fs from 'fs'

var arquivo_csv =  fs.readFileSync(file, 'utf-8');
/*
var teste = axios({
        method: 'get',
        url: file_2,
        responseType: 'stream'
    });
    */
const teste = await axios.get(`${file_2}`);

console.log(teste);

function teste_axios(request, response){

    response.json({
        data: teste,
        data_2: arquivo_csv
    })
}

export default teste_axios;