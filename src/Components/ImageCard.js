import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const ImageWrapper = styled.div`
 display: flex;
 justify-content: center;
`

const ImageContainer = styled.img`
    border: 1px solid green;
`

function ImageCard(props) {
    const { image } = props
    return(
       <ImageWrapper>
           <ImageContainer src={image.url} alt='' />
       </ImageWrapper>
    )
}

export default ImageCard

{/* <div key={img.id} >
<img src={img.url} alt=''/>
<img src={img.user.profile_image} alt=''/>
</div> */}