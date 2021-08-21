import TextPie from '@/components/graphs/TextPie'
import Link from 'next/link'


export default function Comparison () {
  return (
    <>
      <div className='uk-container-large' style={{ margin: '20px' }}>
        <h1>Text amounts</h1>
        <Link href='/matrix'>
          <button className='uk-button-default'>back</button>
        </Link>
        <div className='uk-heading-divider uk-margin-large-bottom'></div>
        <TextPie />
      </div>
    </>
  )
}
