
import { Json } from "../Json/Json";



export const Users = ( {buttonClick}) => {
  return (
    <>
     {buttonClick ?(<Json/>) :(<Json/>)}
    </>
  );
};