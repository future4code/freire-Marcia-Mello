import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGameContext } from '../../context';
import TarotCard from '../../components/TarotCard';
import { Button, HomeContainer, CardsWrapper } from './styles.js';
import { shuffle } from '../../services/shuffle';

const Home = () => {
	const {
		cards, handleSaveCards,
		count,
	} = useGameContext();
	const [shuffledCards, setShuffledCards] = useState([]);

	const handleGetCards = async () => {
		const result = await axios.get('http://127.0.0.1:5500/src/services/api.json');

		handleSaveCards(result.data)
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
