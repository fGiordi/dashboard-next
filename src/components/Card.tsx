import React from 'react'

export interface ICard {
	title: string;
	icon: React.ReactNode,
	totalItems: number;
}

export default function Card({title, icon, totalItems}:ICard) {
	return (
		<div className='card'>
			<div className='card-inner'>
				<h3>{title}</h3>
				{icon}
			</div>
			<h1>{totalItems}</h1>
		</div>
	)
}
