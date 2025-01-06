import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css";

interface InputProps {
    label: string, 
    value: string | number,
    updateValue(value: any): void}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <div>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </div>
    )
}

interface ModalProps {
    closeModal(): void
}

export function CreateModal({closeModal}: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess} = useFoodDataMutate();

    const sumbit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess]);

    return(
    <div className="modal-overlay">
        <div className="modal-body">
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container">
                <Input label="title" value={title} updateValue={setTitle}></Input>
                <Input label="price" value={price} updateValue={setPrice}></Input>
                <Input label="image" value={image} updateValue={setImage}></Input>
            </form>
            <button onClick={sumbit} className="btn-secondary">Enviar</button>
        </div>
    </div>)
}