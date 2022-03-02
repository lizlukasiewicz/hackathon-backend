export default function Delete(props) {
   const testDelete = () => {
        console.log(props.info)
    }
    return(
        <div>
            <button onClick={testDelete}>🗑</button>
        </div>
    )
}