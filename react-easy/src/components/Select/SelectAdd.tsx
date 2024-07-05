import React, {useEffect, useRef, useState} from 'react';

type ItemType = {
    title: string;
    value: any;
};

type SelectPropsType = {
    value: any;
    onChange: (value: any) => void;
    items: ItemType[];
};

export const SelectAdd: React.FC<SelectPropsType> = ({value, onChange, items}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const selectedItem = items.find(item => item.value === value);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (value: any) => {
        onChange(value);
        setIsOpen(false);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        if (!selectRef.current?.contains(event.relatedTarget as Node)) {
            setIsOpen(false);
        }
    };

    return (
        <div ref={selectRef}
             tabIndex={0}
             onBlur={handleBlur}
             onFocus={toggleOpen}
             >
            <div onClick={toggleOpen} style={{border: "1px solid black", padding: "5px"}} >
                {selectedItem ? selectedItem.title : "Select..."}
            </div>
            {isOpen && (
                <div style={{border: "1px solid black", marginTop: "5px"}}>
                    {items.map(item => (
                        <div
                            key={item.value}
                            onClick={() => handleItemClick(item.value)}
                            style={{padding: "5px", cursor: "pointer"}}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};