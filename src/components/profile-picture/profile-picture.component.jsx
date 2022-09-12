import './profile-picture.styles.scss'
import picture from '../../assets/img/profile-picture.jpg';

const ProfilePicture = () => {
  return (
    <div className='profile-picture-container'>    
       <img className="profile-picture" src={picture} alt="profile picture" />
    </div>
  )
}

export default ProfilePicture
