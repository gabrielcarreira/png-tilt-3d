import Tilt from 'react-parallax-tilt'

export default function Tilt3D(props) {
  const offset = props.offset
  var pngArray = []

  for (var i = 0; i < props.numb; i++) {
    var k = i < 10 ? '0' + i : i
    pngArray.push([`img/${props.base}/${k}.png`, i * offset])
  }

  return (
    <Tilt
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)'
      }}
      tiltMaxAngleX={30}
      tiltMaxAngleY={40}
      perspective={500}
      transitionSpeed={1500}
      scale={1.2}
    >
      <img src={pngArray[0][0]} alt="3D" />
      {pngArray.map((item) => (
        <>
          <img
            style={{
              position: 'absolute',
              transform: `translateX(-270px) translateZ(${item[1]}px)`
            }}
            src={item[0]}
            alt="3D"
          />
          <img
            style={{
              position: 'absolute',
              transform: `translateX(-270px) translateZ(-${item[1]}px)`
            }}
            src={item[0]}
            alt="3D"
          />
        </>
      ))}
    </Tilt>
  )
}
