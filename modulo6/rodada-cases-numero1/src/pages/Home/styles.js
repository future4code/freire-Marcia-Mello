import styled from "styled-components";

export const HomeContainer = styled.div `
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 20px;

	background-color: #f2f2f2;
`

export const CardsWrapper = styled.section `
	width: 100%;
	height: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	gap: 20px;
`

export const Button = styled.button `
	width: 150px;
    height: 40px;

    border: none;

	background-color: #0e0e0e;

	color: #ffffff;

	font-size: 14px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 8px;

	margin: 30px 0 0;

	cursor: pointer;
`
