import styled from '@emotion/styled';

import tanya from '../assets/image-tanya.jpg';
import prev from '../assets/icon-prev.svg';
import next from '../assets/icon-next.svg';
import bgImg from '../assets/pattern-bg.svg';

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;
    @media (min-width:768px) {
        flex-direction: row;
    }
`

const ImgSection = styled.div`
    display: grid;
    place-items: center;
    background-image: url(${bgImg});
    height: 32rem;
    width: 34rem;
    background-size: cover;
`

const SectionImagen = styled.div`
    display: grid;
    place-items: center;
`

const Imagen = styled.img`
    max-width: 100%;
    width: 25rem;
    display: block;
    margin-top: 3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const SectionArrows = styled.div`
   margin-top: -3.5rem;
`

const BgArrows = styled.div`
   display: flex;
   gap: 3.5rem;
   background-color: #fff;
   padding: 1.5rem 1.6rem;
   border-radius: 20rem;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const Arrow = styled.img`
    width: 1rem;
    cursor: pointer;    
`

// Testimonial Content

const Content = styled.div`
    display: grid;
    place-items: center;
    text-align: center;
    padding-top: 5rem;
`

const Text = styled.p`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 300;
    color: #202046;
    padding-bottom: 2rem;
`

const Name = styled.h3`
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 700;
    color: #202046;
    padding-bottom: .3rem;
`

const Role = styled.h4`
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 400;
    color: #babacf;
`

export default function User() {
    return (
        <Flex>
            <ImgSection>
                <SectionImagen>
                    <Imagen src={tanya} alt="Tanya" />
                </SectionImagen>
                <SectionArrows>
                    <BgArrows>
                        <Arrow src={prev} alt="prev arrow" />
                        <Arrow src={next} alt="next arrow" />
                    </BgArrows>
                </SectionArrows>
            </ImgSection>
            <Content>
                <Text>“I’ve been interested in coding for a while but never taken the jump, until now.
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                    excited about the future. ”</Text>

                <Name>Tanya Sinclair</Name>
                <Role>UX Engineer</Role>
            </Content>
        </Flex>
    )
}