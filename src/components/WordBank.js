import React from 'react'

export default class WordBank extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			words: {}
		};
	}

	render()
	{
		return(<>{this.props.children}</>);
	}
}
