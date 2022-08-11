import styled from "styled-components";

const Group = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	input {
		padding: 15px;
		margin: 10px 0px;
		border-radius: 5px;
		border: 1px solid gray;
	}

	select {
		padding: 15px;
		margin: 10px 0px;
		border-radius: 5px;
		border: 1px solid gray;
		cursor: pointer;
		line-height: 1.1;
	}

	label {
		font-size: 12px;
		color: gray;
	}

	span {
		font-size: 12px;
		padding: 3px;
		color: red;
		display: none;
	}
`;

const BtnPrimary = styled.button`
	width: 100%;
	height: 3rem;
	margin-top: 5px;
	border: none;
	border-radius: 8px;
	text-transform: uppercase;
	letter-spacing: 2px;
	background-color: #3d4a73;
	color: #d9d9d9;

	&:hover {
		cursor: pointer;
		background-color: #030759;
		color: #f2f2f2;
	}

	&:disabled {
		background-color: #d9d9d9;
		color: #f2f2f2;
		cursor: default;
	}
`;

export { Group, BtnPrimary };
