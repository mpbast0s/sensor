var file = 'C:\\Users\\Usuario\\Desktop\\1° período - ufrp\\formula\\sensores_do_chicote\\acelerometro\\teste_bd.csv';
var file_2 = "https://docs.google.com/spreadsheets/d/1zvEt9-82MyFcREDqUVxHxOMyxREG_91ev2k0OzjfE00/export?format=csv"
import * as fs from 'fs'
import * as path from 'path'
import axios from 'axios'

var arquivo_csv =  fs.readFileSync(file, 'utf-8');
//const teste = await axios.get(file_2);
console.log(teste);

function Csvtojson(request, response){
    //console.log(arquivo_csv);

    response.json({
        data: teste
    })
}

export default Csvtojson;