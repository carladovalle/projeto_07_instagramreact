import Stories from "./Stories";
import Posts from "./Posts";


export default function Content () {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
        </div>
    )

}