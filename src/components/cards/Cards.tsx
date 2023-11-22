import { ReactNode } from 'react';

import Card from './Card';
import './Cards.css';

type CardsProps = {
	items: Array<ReactNode | string>
}
export default function Cards({items}: CardsProps) {
	return (
		<div className='cards'>
			{ items.map((item, index) => 
					<Card key={index}>{item}</Card>
			)}
		</div>
	)
}