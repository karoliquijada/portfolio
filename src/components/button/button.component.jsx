import './button.styles.scss'


const BUTTON_TYPE_CLASSES = {
    active: 'active',
    inactive: 'inactive',
}

const Button = ({ children='hello', buttonType='google', ...otheProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otheProps}>
            {children}
        </button>
    )
}

export default Button;