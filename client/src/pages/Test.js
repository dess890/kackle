import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Test() {
	const dispatch = useDispatch()

	const onClickFunc = () => {
		return ""
	}

	return (
		<div style={{ marginLeft: "400px" }}><h1>Test pages</h1>
			<Button onClick={onClickFunc}>Add Auth Redux</Button>
		</div>
	)
}

export default Test