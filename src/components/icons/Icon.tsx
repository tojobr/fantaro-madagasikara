import classNames from 'classnames';

import icons from '../../utils/icons';
import './icon.css';

type IconProps = {
	name: string;
	color?: string;
};

export default function Icon({name, color}: IconProps) {
	return (
		<img
			src={icons[name]}
			alt={name}
			className={classNames('icon', color)}
		/>
	)
}