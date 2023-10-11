
const User = ({user}) => {
    return (
        <div>
          <h2>
          name : {user.name}
          </h2>
          <p>
          Username : {user.username} </p> 
          <p>
          Email : {user.email}
          </p>
        </div>
    );
};

export default User;