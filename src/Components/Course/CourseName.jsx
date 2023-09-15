import PropType from 'prop-types'
const CourseName = ({courseName, total, remaining}) => {
    // console.log(courseName);
    // const {title}= courseName;
    return (
        <div className="w-full ml-2 bg-white p-3 mt-8">
            <div>
                <h2 className="text-xl font-semibold mb-5 mt-3 text-blue-500">Credit Hour Remaining{remaining}<span>hr</span></h2>
            </div>
            <div>
                <hr />
            <h2 className="text-2xl font-semibold mb-5 mt-5">Course Name: {courseName.length} </h2>
            {
                courseName.map((card)=>(<ol key={card.id}><li>{card.id}. {card.title}</li></ol>))
            } 
            </div>
            <div>
                <hr className='mt-5' />
                <h2 className="text-xl font-medium mb-5 mt-5">Total Credit Hour {total} </h2>
            </div>
        </div>
    );
};
CourseName.propTypes={
    courseName: PropType.object.isRequired,
    total: PropType.func,
    remaining: PropType.func

}

export default CourseName;