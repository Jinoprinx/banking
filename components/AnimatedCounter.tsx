"use client";

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        prefix='$'
        decimal='.'
        duration={2.5}
        decimals={2}
        end={amount} />
    </div>
  )
}

export default AnimatedCounter;