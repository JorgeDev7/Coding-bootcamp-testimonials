import { useState } from 'react';

import styled from '@emotion/styled';

import tanya from './assets/image-tanya.jpg';
import john from './assets/image-john.jpg';
import prev from './assets/icon-prev.svg';
import next from './assets/icon-next.svg';
import bgImg from './assets/pattern-bg.svg';
import quotes from './assets/pattern-quotes.svg';

const Container = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    width: 95%;
`;

const Flex = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;

    @media (min-width: 992px) { 
      flex-direction: row-reverse;
      gap: 5rem;
    }
`

const ImgSection = styled.div`
    display: grid;
    place-items: center;
    background-image: url(${bgImg});
    height: 32rem;
    width: 34rem;
    background-size: cover;

    @media (min-width: 992px) { 
      flex: 1;
      height: 80rem;
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center center;
    }
`

const SectionImagen = styled.div`
  display: grid;
  place-items: center;
`

const Imagen = styled.img`
  width: 25rem;
  display: block;
  margin-top: 3rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  &.loaded {
    animation-name: img;
    animation-duration: 1s;
  }

  @media (min-width: 992px) { 
      width: 55rem;
      margin-top: 10rem;
  }

  @keyframes img {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const BgImagen = styled.img`
    display: none;
`

const SectionArrows = styled.div`
   margin-top: -3.5rem;
   z-index: 100;

   @media (min-width: 992px) { 
      margin-top: -15rem;
      margin-left: -35rem;
      z-index: 100;
    }
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
    background-image: url(${quotes});
    background-repeat: no-repeat;
    background-size: 7rem;
    background-position: top 2rem center;

    @media (min-width: 992px) { 
      flex: 1;
      place-items: start;
      margin-right: -15rem;
      z-index: 1000;
      background-size: 12rem;
      background-position: top left 15rem;
    }

    &.loaded {
      animation-name: text;
      animation-duration: 1s;
    }

    @keyframes text {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`

const Text = styled.p`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 300;
    color: #202046;
    padding-bottom: 2rem;

    @media (min-width: 992px) { 
      font-size: 4rem;
      text-align: left;
    }
`

const FlexInfo = styled.div`
    @media (min-width: 768px) { 
      display: flex;
      align-items: center;
      gap: 1rem;
    }
`

const Name = styled.h3`
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 700;
    color: #202046;
    padding-bottom: .3rem;

    @media (min-width: 992px) { 
      font-size: 2rem;
      text-align: left;
      padding-bottom: 0;
    }
`

const Role = styled.h4`
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 400;
    color: #babacf;

    @media (min-width: 992px) { 
      font-size: 2rem;
      text-align: left;
    }
`

function App() {

  const imgs = [tanya, john];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(imgs[0]);
  const [loaded, setLoaded] = useState(false);

  const changeImg = (i, images, next = true) => {
    setLoaded(false);
    const codition = next ? i < images.length - 1 : i > 0;
    const nextIndex = next ? (codition ? i + 1 : 0) : codition ? i - 1 : images.length - 1;
    setCurrentImg(images[nextIndex]);
    setCurrentIndex(nextIndex);
  }

  const prevImg = () => {
    changeImg(currentIndex, imgs, false);
  }

  const nextImg = () => {
    changeImg(currentIndex, imgs);
  }

  return (
    <>
      <Container>
        <Flex>
          <ImgSection>
            <SectionImagen>
              <Imagen
                src={currentImg}
                alt="Img User"
                onLoad={() => setLoaded(true)}
                className={loaded ? 'loaded' : ''}
              />
              <BgImagen
                src={bgImg}
                alt="bg user"
              />
            </SectionImagen>
            <SectionArrows>
              <BgArrows>
                <Arrow
                  src={prev}
                  alt="prev arrow"
                  onClick={prevImg}
                />
                <Arrow
                  src={next}
                  alt="next arrow"
                  onClick={nextImg}
                />
              </BgArrows>
            </SectionArrows>
          </ImgSection>
          {currentImg === tanya ? (
            <Content
              onLoad={() => setLoaded(true)}
              className={loaded ? 'loaded' : ''}
            >
              <Text>“I’ve been interested in coding for a while but never taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                excited about the future. ”</Text>

              <FlexInfo>
                <Name>Tanya Sinclair</Name>
                <Role>UX Engineer</Role>
              </FlexInfo>
            </Content>
          ) : (
            <Content
              onLoad={() => setLoaded(true)}
              className={loaded ? 'loaded' : ''}
            >
              <Text>“If you want to lay the best foundation possible I’d recommend taking this course.
                The depth the instructors go into is incredible. I now feel so confident about
                starting up as a professional developer. ”</Text>

              <FlexInfo>
                <Name>John Tarkpor</Name>
                <Role>Junior Front-end Developer </Role>
              </FlexInfo>
            </Content>
          )}
        </Flex>
      </Container>
    </>
  )
}

export default App
