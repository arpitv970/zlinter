import Link from 'next/link'
import { Link as Url } from 'lucide-react'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import Image from 'next/image'
import { Button } from '../ui/button'

const UnderDev = () => {
  return (
    <section className='under-dev'>
      <h1>This Page is under developement</h1>
      <p>In the mean time please explore:
        <Link href='/consumers'>
          Consumers Page<Url size={20} />
        </Link>
      </p>
      <section>
        <p>Also checkout GitHub Profile of the developer of this: </p>
        <span>
          <Link href={'https://github.com/arpitv970/'}>
            <Button
              variant={'ghost'}
              className='flex justify-center items-center m-auto text-xl'>
              Arpit Verma
            </Button>
          </Link>
        </span>
      </section>

    </section>
  )
}

export default UnderDev
