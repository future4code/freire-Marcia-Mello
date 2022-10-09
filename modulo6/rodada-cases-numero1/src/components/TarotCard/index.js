import React, { useEffect } from 'react'
import { useState } from 'react';
import { useGameContext } from '../../context';
import { FullCardContainer, CardContainer } from './styles'

const TarotCard = ({ card }) => {
	const [active, setActive] = useState(false);
	const { count, handleAddCount } = useGameContext()

	const frontImage = card.front + card.card.image;
	const backImage = card.back;

	const handleShowCard = () => {
		setActive(!active)

		handleAddCount(1)
	}

	useEffect(() => {

	}, [active])

	return (
		<>
			{
				count === 1 && !active ? (
					<></>
				) : (
					<FullCardContainer>
						<CardContainer onClick={count === 0 ? () => handleShowCard() : {}}
						>
							<div className={`flipper ${!active && "desactive"}`}>
								<div className='front'>
									<img src={frontImage} alt="Frente" />
								</div>
								<div className='back'>
									<img src={backImage} alt="Verso" />
								</div>
							</div>
						</CardContainer>
						<section className={`informations ${(count === 1 && active) && "show"}`}>
							<h4>{card.card.name}</h4>
							<p>Accusam voluptua consetetur accusam lorem vero.</p>
						</section>
					</FullCardContainer>
				)
			}
		</>
	)
}

export default TarotCard;
