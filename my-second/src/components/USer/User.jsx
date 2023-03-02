
import UsetItem from "./UserItem"


const User = ({ userName}) => 
{
    return (
        <div>
            {[1,2,3,4].map((el) => (
                <UsetItem key = {`user-item-${el}`}
                userName={userName}/>
            ))}
        </div>

    )
 }

 export default User