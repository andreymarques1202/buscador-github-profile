// eslint-disable-next-line no-unused-vars
const Profile = (profile) => {

    return(
        <div className="container-profile">
            <div className="img-container">
                <img src={profile.data.avatar_url} alt="Foto de perfil" />
            </div>
            <div className="text-container">
                <h1>{profile.data.name}</h1>
                <p>{profile.data.bio}</p>
            </div>
        </div>
    );
}

export default Profile;