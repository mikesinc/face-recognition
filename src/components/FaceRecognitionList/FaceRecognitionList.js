import React from 'react'
import FaceRecognitionBox from '../FaceRecognitionBox/FaceRecognitionBox.js'

const FaceRecognitionList = ({ boxes, imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' src={imageUrl} alt='' width='500px' height='auto'></img>
                    {
                        boxes.map((box, i) => {
                            return (
                                <FaceRecognitionBox
                                    key={i}
                                    box={box}
                                />
                            )
                        })
                    }
            </div>           
        </div>
    );
}

export default FaceRecognitionList;