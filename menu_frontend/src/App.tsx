import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/createModal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen]= useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='container'>
      <h1>Cardapio</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
        <Card 
          price={foodData.price}
          title={foodData.title}
          image={foodData.image} 
        />)}
      </div>
      {isModalOpen &&<CreateModal closeModal={handleOpenModal}></CreateModal>}
      <button onClick={handleOpenModal}>Cadastrar</button>
    </div>
  )
}

export default App
