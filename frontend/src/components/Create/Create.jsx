import { Api } from "../../api/api";
import "./Create.css"

function Create(){
    async function handleSubmit(event){
        event.preventDefault();
        // console.log(event.target);
        const nome = event.target.nome.value;
        const imagemUrl = event.target.url.value;

        const payload = {
            nome,
            imagemUrl
        };

        const createUrl = Api.itens.create();
        const response = await Api.buildApiPostRequest(createUrl, payload);
        //const body = await response;

        console.log(response);
    }

    return( 
    <div className="Create">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome"/>
            </div>
            <div>
                <label htmlFor="url">URL da Imagem</label>
                <input type="text" id="url"/>
            </div>
            <div>
                <input type="submit" value="Adicionar" />
            </div>
        </form>
    </div>
    )
}

export default Create;