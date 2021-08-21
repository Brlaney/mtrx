import FrequencyGraph from '@/components/graphs/FrequencyGraph'
import Link from 'next/link'
import styles from '@/styles/pages/Matrix.module.scss'


export default function Timeline () {
  return (
    <>
      <div id='texts' className='uk-container-large'>
        <h1>Texting timeline</h1>
        <Link href='/matrix'>
          <button className='uk-button-default'>back</button>
        </Link>
        <div className='uk-heading-divider uk-margin-large-bottom' />
        <FrequencyGraph />
      </div>
    </>
  )
}
