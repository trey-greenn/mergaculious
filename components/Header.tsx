import Link from 'next/link';
// import styles from './Header.module.css'; // If you're using CSS modules

const Header = () => {
  return (
    <>
    <header className="mb-4">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="/logo.png" className="mr-3 h-9 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mergaculious</span>
            </a>
        </div>
    </nav>
</header>
</>
  );
};

export default Header;
