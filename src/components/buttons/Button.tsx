import { MouseEventHandler } from 'react';
import classNames from 'classnames';
import './Button.css';

type ButtonProps = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	color?: string;
};

export default function Button({label, onClick, className}: ButtonProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={classNames('btn', className)}
		>
			{label}
		</button>
	);	
}