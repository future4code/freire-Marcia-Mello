import React, { useEffect, useState } from 'react';
import { useGameContext } from '../../context';
import TarotCard from '../../components/TarotCard';
import { Button, HomeContainer, CardsWrapper } from './styles.js';
import { shuffle } from '../../services/shuffle';
import Cards from '../../services/api.json';

const Home = () => {
	const {
		cards, handleSaveCards,
		count,
	} = useGameContext();
	const [shuffledCards, setShuffledCards] = useState([]);

	const handleGetCards = () => {
		const result = Cards;
		handleSaveCards(result)
	}

	useEffect(() => {
		handleGetCards()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const renderCards = () => {
		return cards?.cards && cards.cards.map((card) => {
			const newCard = {
				card,
				front: cards.imagesUrl,
				back: cards.imageBackCard
			}

			return <TarotCard
				key={card.name}
				card={newCard}
			/>
		})
	}

	const handleShuffleCards = () => {
		const newArray = shuffle(cards.cards);

		const newObjt = {
			cards: newArray,
			front: cards.imagesUrl,
            back: cards.imageBackCard
		}

		setShuffledCards(newObjt)
	}

	const renderShuffleCards = () => {
		return shuffledCards && shuffledCards.map((card) => {

			const newCard = {
				card,
				front: cards.imagesUrl,
				back: cards.imageBackCard
			}

			return <TarotCard
				key={card.name}
				card={newCard}
			/>
		})
	}

	const handleResetGame = () => {
			handleGetCards()
			window.location.reload()
	}

	return (
		<>
			<HomeContainer>
				<CardsWrapper>
					{shuffledCards.length > 0 ? renderShuffleCards() : renderCards()}
				</CardsWrapper>

				<Button onClick={() => handleShuffleCards()}>Embaralhar</Button>
				{ count === 1 && <Button onClick={() => handleResetGame()}>Resetar</Button>}
			</HomeContainer>
		</>
	)
}

export default Home
