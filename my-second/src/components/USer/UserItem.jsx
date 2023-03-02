import { useContext } from "react";
import ArsenContext from "../helpers/context";




const UsetItem = ({
    userName
}) => {
    const userAge = useContext(ArsenContext)
    return <div>
        UserItem:{userName} ({userAge})
    </div>
}


export default UsetItem