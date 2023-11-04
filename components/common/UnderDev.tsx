import Link from 'next/link'
import { Link as Url } from 'lucide-react'
import React from 'react'

const UnderDev = () => {
  return (
    <section className='under-dev'>
      <h1>This Page is under developement</h1>
      <section>
        <p>In the mean time please explore:
          <Link href='/consumers'>
            Consumers Page<Url size={20} />
          </Link>
        </p>
        <p>Also checkout GitHub Profile of the developer of this:
          <Link href={'https://github.com/arpitv970/'}>
            Arpit Verma<Url size={20} />
          </Link>
        </p>
      </section>

    </section>
  )
}

export default UnderDev
