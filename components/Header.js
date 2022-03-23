import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SearchIcon, MenuIcon, UserCircleIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Header(props) {

    const router = useRouter()

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuests, setNumOfGuests] = useState(1)

    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const guestsInputChangeHandler = event => {
        setNumOfGuests(event.target.value)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const searchHandler = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuests: numOfGuests
            }
        })
        
    }

   
  

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
           
            <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={() => router.push('/')}>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    alt='clone image'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input 
                className='flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400' 
                type='text' 
                placeholder={props.placeholder || 'start your search'}
                onChange={(event) => setSearchInput(event.target.value)}
                value={searchInput}
                />
                <SearchIcon 
                className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            <div className='flex space-x-1 sm:space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon 
                    className='h-6 cursor-pointer'
                />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon 
                            className='h-5'
                        />
                        <input 
                            type='number'
                            min={1}
                            className='w-12 pl-2 text-lg outline-none text-red-400' 
                            onChange={guestsInputChangeHandler}
                            value={numOfGuests}
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={searchHandler} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
                )}

        </header>
    )
}

export default Header