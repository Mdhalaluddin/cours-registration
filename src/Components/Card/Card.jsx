import PropType from 'prop-types'
const Card = ({card, handleSelectBtn}) => {
    const {cover, title, description, price, credit} = card;
    return (
        <div className="w-full my-4 bg-white p-3 rounded-lg">
            <img className="w-full" src={cover} alt="" />
            <h2 className="text-xl font-semibold my-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <div className="flex justify-between my-2 mb-5 font-medium text-base">
                <h3>Price: {price}</h3>
                <h3>Credit: {credit}<span>hr</span></h3>
            </div>
            <div className='bg-green-600 text-center rounded-lg '>
                <button onClick={()=>handleSelectBtn(card)}
                className='p-2 text-2xl text-white'>Select</button>
            </div>
        </div>
    );
};

Card.propTypes={
    card: PropType.object.isRequired,
    handleSelectBtn: PropType.func

}

export default Card;