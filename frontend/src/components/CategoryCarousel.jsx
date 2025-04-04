import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Freshers Party",
    "Farewell Party",
    "Annual Day",
    "Department Fest",
    "New Year Party",
    "Festive Party"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='bg-black py-10'>
            <Carousel className="w-full max-w-xl mx-auto my-0">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                                <Button 
                                    onClick={() => searchJobHandler(cat)} 
                                    variant="outline" 
                                    className="rounded-full border-gray-600 bg-[#6A38C2] text-white"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="text-black opacity-100" />  {/* Always visible */}
                <CarouselNext className="text-black opacity-100" />      {/* Always visible */}
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;
