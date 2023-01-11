import { useState } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';


export default function DropDown({ name, optionsList } : { name?: string, optionsList : Array<{ name: string, value: string | number, isHidden?: boolean }> }) {

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    optionsList = [{ name: name ?? 'Please select', value: 0, isHidden: true }, ...optionsList];

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const setSelectedThenCloseDropdown = (index: number) => {
        setSelectedOption(index);
        setIsOptionsOpen(false);
    };

    return (
        <div className={styles.dropdownContainer}>
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOptionsOpen}
                className={`${styles.optionButton} ${isOptionsOpen ? `${styles.expanded}` : ''}`}
                onClick={toggleOptions}
            >
                {optionsList[selectedOption].name}
                <div className={styles.space} />
                {
                    isOptionsOpen
                    ? <Image src='/arrowLeft.svg' alt='arrow' width={20} height={20} />
                    : <Image src='/arrowRight.svg' alt='arrow' width={20} height={20} />
                }
            </button>
            <ul
                className={`${styles.optionsList} ${isOptionsOpen ? `${styles.show}` : ""}`}
                role="listbox"
                // aria-activedescendant={optionsList[selectedOption].name}
                tabIndex={-1}
            >
                {optionsList.map((option, index) => {
                    if (!option.isHidden) {
                        return (
                        <li
                            key={index}
                            id={option.name}
                            role="option"
                            aria-selected={selectedOption == index}
                            tabIndex={0}
                            onClick={() => {
                                setSelectedThenCloseDropdown(index);
                            }}
                        >
                            {option.name}
                        </li>
                    )
                    }})}
            </ul>
        </div>
    )
}