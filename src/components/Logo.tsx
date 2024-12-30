import Image from 'next/image'
import logo from '../../public/9152624.png'
import Link from 'next/link';

const Logo = () => {
	return <Link href={'/'}>
		<Image src={logo} alt="logo" width={30} height={24} />
	</Link>
};

export default Logo;