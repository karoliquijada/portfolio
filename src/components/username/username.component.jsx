import './username.styles.scss'

const Username = ({name='name', username="@username"}) => {
    return (
        <div className='username-container'>
            <span className='name'>{name}</span>
            <span className='username'>{username}</span>
        </div>
       
    )
}

export default Username;