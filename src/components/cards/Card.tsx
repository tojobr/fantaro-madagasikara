import { PropsWithChildren } from 'react';

import './Card.css';

type CardProps = PropsWithChildren<{
	color?: string;
}>;

export default function Card({children}: CardProps) {
	return (
		<div className='card'>
			{children}
		</div>
	)
}