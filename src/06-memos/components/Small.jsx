import {memo} from 'react' // se recomienda solo cuando hay una carga pesada, y se nota la depreciacion

export const Small = memo(({value}) => {
  return (
    <small>{value}</small>
  )
})
