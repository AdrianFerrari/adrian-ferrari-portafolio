import style from "./loading.module.css"

export default function Loading() {
    return (
        <div className={style.loading_container}>
            <div class={style.lds_ring}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}