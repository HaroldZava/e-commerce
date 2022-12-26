import "./Button.css";

export default function Button(props) {
    console.log(props);

    return (
        <button style={ {backgroundColor: props.color} } className="btn">
            {props.text}
        </button>
    );
}

export function ButtonChild(props){
    console.log(props);

    return (
        <button style={ {backgroundColor: props.color} } className="btn">
            {props.children}
        </button>
    );
}