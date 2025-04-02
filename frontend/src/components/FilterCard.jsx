import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Vijayawada", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Type",
        array: ["Freshers Party", "Farewell Party", "Annual Day", "Department Fest","New Year Party","Festive Party"]
    },
    {
        filterType: "Entry Fees",
        array: ["0-500/-", "500-1000/-", "1000+ /-"]
    },
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    return (
        <div className='w-full bg-gray-800 text-white p-5 rounded-md shadow-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3 border-gray-600' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg my-2'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`;
                                    return (
                                        <div className='flex items-center space-x-2 my-2' key={itemId}>
                                            <RadioGroupItem value={item} id={itemId} className='text-purple-600' />
                                            <Label htmlFor={itemId} className='text-gray-300'>{item}</Label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    );
}

export default FilterCard;
