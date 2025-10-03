import './Card.css'

export function Card(props) {

  const { name, image, details } = props.scientists

  return (
    <div className='card'>
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: 80, borderRadius: '50%'}} />
      <ul>
        <li><b>Profesión:</b> {details.profesion}</li>
        <li><b>Premios: {details.awards.length}</b> ({details.awards.join(', ')})</li>
        <li><b>Descubrió:</b> {details.findings}</li>
      </ul>
    </div>
  )
}