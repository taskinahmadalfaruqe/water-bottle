import PropTypes from 'prop-types'

const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name,img}=bottle;
  return (
    <div>
        <div className="name">
            {name}
        </div>
        <img src={img} alt="" />
    </div>
  )
}

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired
}

export default Bottle