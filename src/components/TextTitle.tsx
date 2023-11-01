import React from 'react'

interface IText {
	title: string
}

export default function TextTitle({title}: IText)  {
	return (
		<span className='text-center text-md font-semibold text-gray-200'>{title}</span>
	)
}
