import PropTypes from 'prop-types'

const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name,img}=bottle;
  return (
    <div className='border-2 border-red-900 p-5 rounded-lg'>
        <div className="name">
            {name}
        </div>
        <img src={img} alt="Bottle" />
    </div>
  )
}

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired
}

export default Bottle