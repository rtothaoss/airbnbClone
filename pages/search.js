import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

function Search({searchResults}) {

    console.log(searchResults)

    const { query } = useRouter()
    const { location, startDate, endDate, numOfGuests } = query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`}/>

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {numOfGuests} Guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                    {searchResults.map(item => (
                        <InfoCard 
                            key={item.title}
                            img={item.img}
                            description={item.description}
                            location={item.location}
                            lat={item.lat} 
                            long={item.long}  
                            price={item.price}   
                            star={item.star}
                            total={item.total}
                        />
                    ))}
                    </div>
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}

export default Search