import Icon from '../icons/Icon';
import Button from './Button';

export default function NextButton({}) {
	const handleClick = () => {

	};

	return (
		<>
			<Button
				label='Next'
				onClick={handleClick}
				icon={<Icon name='next' color='white' />}
			/>
			toto
		</>
		
	)
}