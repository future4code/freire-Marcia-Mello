import { createContext, useContext, useState } from 'react'

const GameContext = createContext({});

export const GameProvider = ({ children }) => {
	const [cards, setCards] = useState({});
	const [count, setCount] = useState(0);
	const [activeAll, setActiveAll] = useState(true)

	const handleSaveCards = (newCards) => {
		setCards(newCards);
	}

	const handleAddCount = () => {
		setCount(count + 1);
	}

	const handleActiveAll = (status) => {
		setActiveAll(status);
	}

    return (
        <GameContext.Provider value={{
			cards, handleSaveCards,
			count, handleAddCount,
			activeAll, handleActiveAll
		}}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => {
    const context = useContext(GameContext);

    if (!context) throw new Error('usePriceRange must be within an GameProvider');

    return context;
}
