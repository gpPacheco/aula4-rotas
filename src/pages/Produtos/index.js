import { useParams } from "react-router-dom";

function Produtos() {

    const { id } = useParams(); 

 if(id === 'playstation'){
    return (
        <div>
            <h1>Console Playstation 5</h1><br />
            <h2>R$4.445,00</h2><br />
            <h3>À vista no Pix e boleto (1% off)</h3><br />
        </div>
      )
 }


    if (id === 'xbox'){
        return(
            <div>
                <h1>Console Xbox Series X</h1><br />
                <h2>R$4.499,00</h2><br />
                <h3>À vista no Pix e boleto (1% off)</h3><br />
            </div>
        )
 }
}

export default Produtos;