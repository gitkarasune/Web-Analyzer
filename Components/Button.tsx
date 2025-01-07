// components/Button.tsx
import Link from 'next/link';

interface ButtonProps {
    text: string; // Text displayed on the button
    onClick?: () => void; // Optional click handler
    href?: string; // Optional href for navigation
    variant?: 'secondary'; // Button styles
    className?: string; // Additional Tailwind classes
    disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    href,
    variant = 'secondary',
    className = '',
    disabled = false,
}) => {
    const baseStyles = `px-4 py-2 font-medium focus:outline-none transition-transform transform hover:scale-105 active:scale-95`;
    const variants = {
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`;

    if (href) {
        return (
            <Link href={href}>
                <span className={combinedStyles}>{text}</span>
            </Link>
        );
    }

    return (
        <button className={combinedStyles} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
