import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../App";


const AddButtons = ({ product}) => {
    const { card, setCard} = useContext(CardContext);
    const [added, setAdded] = useState(false);
    const [count, setCount] = useState(1);
    const regNum = /^[^\D]+$/g;
    // const [remove, setRemove] = useState(false);

    const addCard = () => {
        product.count = count;
        setCard([...card, product]);
        setAdded(true);
    };

    const countAdd = () => {
        setCount(count + 1);
        
            
    };

    const countMin = () => {
        if (count <= 1) {
            if (window.confirm('Вы хотите удалить товар?')) {
                const cardNew = card.filter(prod => prod.id !== product.id);
                setCard(cardNew);
                setAdded(false);
            } else {
                return;
            }
        } else{
            setCount(count - 1);
            
        }
    };



    const chengeCount = e => {
        const value = e.target.value;
        if (!regNum.test(value)) return
        if (+value < 1) return;
        setCount (+value);
        
    }

    useEffect(() => {
        const oldCard = card.map((i) => {
            if (i.id === product.id) {
                i.count = count;
                return i;
            } else {
                return i;
            }
        });

        setCard(oldCard);
    }, [count]);

    useEffect(() => {
        if (card.some(prod => prod.id === product.id)) {
            const prod = card.find((prod) => prod.id === product.id);
            setCount(prod.count);
            setAdded(true);
        }
    }, []);

    return (
        <div>
            {!added && <button onClick={addCard}>Add</button>}
            {added &&
                <div>
                    <button onClick={countMin}>-</button>
                    <input type="text" value={count} onChange={chengeCount} />
                    <button onClick={countAdd}>+</button>
                </div>
            }

            {/* {!remove && <button onClick={Remove}>Remove</button>} */}
        </div>
    )

};

export default AddButtons;