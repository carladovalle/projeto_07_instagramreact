function Sug (props) {
    return (
        <div class="sugestoes">
                <div class="sugestao">
                    <div class="usuario">
                        <img src={props.image1} />
                        <div class="texto">
                            <div class="nome">
                                {props.name1}
                            </div>
                            <div class="razao">
                                {props.razao}
                            </div>
                        </div>
                    </div>
                    <div class="seguir">
                        Seguir
                    </div>
                </div>
        </div>

    )
}

export default function Sugestoes () {
    return (
        <div class="sidebar">
            <Sug image1="/img/bad.vibes.memes.svg" name1="bad.vibes.memes" razao="Segue você"/>
            <Sug image1="/img/chibirdart.svg" name1="chibirdart" razao="Segue você"/>
            <Sug image1="/img/razoesparaacreditar.svg" name1="razoesparaacreditar" razao="Novo no Instagram"/>
            <Sug image1="/img/adorable_animals.svg" name1="adorable_animals" razao="Segue você"/>
            <Sug image1="/img/smallcutecats.svg" name1="smallcutecats" razao="Segue você"/>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • 
                Termos • Localizações • Contas mais relevantes • Hashtags 
                • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK      
            </div>
        </div>
    )
}