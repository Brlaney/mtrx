import * as React from 'react'

export const Dotnav: React.FC<{step}> = ({step}) => {
  return (
    <>
      <div className='dotnav'>
        <ul id='dotnavInner' className='uk-dotnav'>
          {step.map(value => (
            <li
              id={value.key}
              className={value.classname}>
              <a id='isa'>{value.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
