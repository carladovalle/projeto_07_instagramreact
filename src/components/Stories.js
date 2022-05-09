function Story (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image}/>
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>

    )
}

export default function Stories () {

    const items = [
        {
            image: "/img/9gag.svg",
            name: "9gang",
        },
        {
            image: "/img/meowed.svg",
            name: "meowed",
        },
        {
            image: "/img/barked.svg",
            name: "barked",
        },
        {
            image: "/img/nathanwpylestrangeplanet.svg",
            name: "nathanwp...",
        },
        {
            image: "/img/wawawicomics.svg",
            name: "wawawic...",
        },
        {
            image: "/img/respondeai.svg",
            name: "respondeai",
        },
        {
            image: "/img/filomoderna.svg",
            name: "filomoderna",
        },
        {
            image: "/img/memeriagourmet.svg",
            name: "memeriag...",
        },
    ]

    return (
        <div>
            <div class="stories">
                {items.map(item => <Story image={item.image} name={item.name} />)}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>

    )
}