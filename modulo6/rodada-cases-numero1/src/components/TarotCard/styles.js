import styled from 'styled-components';

export const FullCardContainer = styled.div `
	width: auto;
	height: auto;

	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;

	aside.hide {
		display: none;
	}

	.informations {
		display: none;
	}

	.informations.show {
		width: 150px;

		display: block;

		text-align: center;

		margin: 20px 0 0;

		h4 {
			margin: 0 0 10px;
			height: 40px;
		}
	}
`

export const CardContainer = styled.aside`
	width: 120px;
	height: 200px;
	display: inline-block;

	perspective: 1000px;

	cursor: pointer;


	.flipper {
		position: relative;

		width: 100%;
		height: 100%;

		transition: transform 0.8s;

		transform-style: preserve-3d;

		.front, .back {
			position: absolute;
			width: 100%;
			height: 100%;
			backface-visibility: hidden;

			img {
				width: 100%;
				height: 100%;

				border-radius: 5px;

				box-shadow: 0 1px 5px #0e0e0e;
			}
		}

		.back {
			transform: rotateY(180deg);
		}
	}

	.flipper.desactive {
		transform: rotateY(180deg);
	}
`
