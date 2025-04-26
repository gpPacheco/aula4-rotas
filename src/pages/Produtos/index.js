import { useParams } from "react-router-dom";

function Produtos() {
    const { id } = useParams();

    const produtos = {
        playstation: {
            nome: "Console Playstation 5",
            preco: "R$4.445,00",
            descricao: "À vista no Pix e boleto (1% off)",
            imagem: "https://blog.br.playstation.com/tachyon/sites/4/2023/10/6fd08b309a6ed2a3b70baa64b088f5104c538e2e.png?resize=1088%2C612&crop_strategy=smart&zoom=0.99",
        },
        xbox: {
            nome: "Console Xbox Series X",
            preco: "R$4.499,00",
            descricao: "À vista no Pix e boleto (1% off)",
            imagem: "https://classic.exame.com/wp-content/uploads/2020/03/xbox-series-x-1.jpg?ims=750x/filters:quality(85):format(webp)",
        },
        atari: {
            nome: "Console Atari",
            preco: "R$1.999,00",
            descricao: "À vista no Pix e boleto (1% off)",
            imagem: "https://atari.com/cdn/shop/articles/atari-2600-plus-featured.webp?v=1700172805&width=1500",
        },
        nintendo: {
            nome: "Console Super Nintendo",
            preco: "R$7.699,00",
            descricao: "À vista no Pix e boleto (1% off)",
            imagem: "https://s2-techtudo.glbimg.com/yZGv3RUzU74XT7Al71OZSV0EvdY=/0x0:695x391/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/A/V/mmDQgKQiC7sdFK74pqjQ/supernintendo.jpg",
        },
    };

    const produto = produtos[id];

    if (!produto) {
        return <h1>Produto não encontrado!</h1>;
    }

    return (
        <div>
            <h1>{produto.nome}</h1><br />
            <h2>{produto.preco}</h2><br />
            <h3>{produto.descricao}</h3><br />
            <img src={produto.imagem} alt={produto.nome} />
        </div>
    );
}

export default Produtos;