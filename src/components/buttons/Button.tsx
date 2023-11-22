import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './Button.css';

type ButtonProps = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	icon?: ReactNode;
	className?: string;
	color?: string;
};

export default function Button({label, onClick, icon, className}: ButtonProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={classNames('btn', className)}
		>
			<div className='btn-label'>{label}</div>
			{icon}
		</button>
	);	
}