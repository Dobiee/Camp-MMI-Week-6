const MyButton = ({
    buttonName,
    props
}) => {
    return (
        <button class="btn btn-dark" onClick={props}>{buttonName}</button>
    )
} 

export default MyButton