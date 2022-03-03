export default function Edit(props) {
function test() {
    console.log(props.info)
}
    return(
        <div>
            <button onClick={test}>Edit</button>
        </div>
    )
}
