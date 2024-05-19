import React from 'react';


type MoneyItem ={
    banknote: string
    nominal: number
    number: string
}

type FilterType = 'all' | 'dollar' | 'ruble'

type NewComponentProps = {
    currentMoney: MoneyItem[]
    onClickFilterHandler: (nameButton: FilterType) => void
}
export const NewComponent: React.FC<NewComponentProps> = ({currentMoney, onClickFilterHandler}) => {
    return (
        <>

        </>
    );
};
