

export const Button = (props) => {
  return (
    <button
        type={props.type}
        onClick={props.onClick}
        className={props.className}
    >
        {props.text}
    </button>
  )
}
