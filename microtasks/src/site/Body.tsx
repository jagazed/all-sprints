
type BodyType = {
    titleforBody: string
}
export const Body = (props: BodyType) => {
    return (
        <div>{props.titleforBody}</div>
    )
}