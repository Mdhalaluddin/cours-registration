import PropType from 'prop-types'
const CourseName = ({courseName}) => {
    console.log(courseName);
    // const {title}= courseName;
    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold mx-4 mt-7">Course Name: {courseName.length} </h2>
            {
                courseName.map((card, inx)=>(<li key={inx}>{card.title}</li>))
            }
            {/* {
                courseName.map((card, inx)=>(<ol key={inx}><li>{card.inx}</li></ol>))
            } */}
            {/* <ul key={inx}>{card.title}</ul> */}
        </div>
    );
};
CourseName.propTypes={
    courseName: PropType.object.isRequired

}

export default CourseName;