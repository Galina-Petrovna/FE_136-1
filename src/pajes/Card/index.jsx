import { useContext, useState } from "react";
import { CardContext } from "../../App";
import style from "./Card.module.css";
import Cart from "../../components/Cart";
// import AddButtons from "../../components/AddButtons";


const Card = ({setRemove}) => { 

    const {card} = useContext(CardContext);

    const [remove, onRemove] = useState(false);



    const Remove = ({product}) => {
        const cardRemove = product.filter(prod => prod.id !== product.id);
        setRemove(cardRemove);
    };
    
    return (
        
        <div className={style.container}>
            <>
                <h2>Card</h2>
                <div className={style.card}>
                    <div className={style.card}>
                        {card.map(prod => (<Cart key={prod.id} product={prod} onRemove={Remove} />)
                        )}                   
                    </div>
                    <div className={style.button}>
                        {/* <button onClick={onRemove}>Remove</button>   */}
                        {!remove && <button onClick={onRemove}>Remove</button>}
                    </div>
                    
                </div>
            </>

           
        </div>
        
    );
};

export default Card;