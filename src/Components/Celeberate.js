import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Celeberate = ({ width = useWindowSize, height = useWindowSize }) => {


    return (
        <Confetti
            width={width}
            height={height}
            colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
                '#2196f3', '#03a9f4',
                '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
                '#FF5722']}

        />
    )
}

export default Celeberate;