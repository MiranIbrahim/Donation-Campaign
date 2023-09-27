import logoImage from './Logo.png'

const Logo = () => {
    return (
        <div>
            <img src={logoImage} alt="" className='h-12' />
        </div>
    );
};

export default Logo;