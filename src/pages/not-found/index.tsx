import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <>
            <h1>404 - Não encontrado</h1>
            <Link to="/">Voltar para home</Link>
        </>
    )
}