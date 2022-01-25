import '../styles/globals.css'

function GlobalStyle() {
  return (
    <style global jsx>{`
        *{
          margin: 0;
          paddin: 0;
          box-sizing: border-box;
          list-style: none;
        }

        body{
            font-family: 'Open Sans', sans-serif;
        }
        /* App fit height */
        html, body, #_next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #_next {
          flex: 1;
        }
        #_next > * {
          flex: 1;
        }
        /*./App fit Height */
    `}</style>
  )
}

function Title(props) {
  return (
  <>
  <h1>{props.children}</h1>
  <style jsx>{`
          h1 {
            color: red;
            font-size: 24px;
            font-weight: 600;
          }
        `}</style>
  </>
  )
}

export default function HomePage() {
    return ( 
      <div>
          <GlobalStyle/>
          <Title>Boas vindas de volta!</Title>
          <Body>Discord- Joguinho do Grupo</Body>
      </div>
    ) 
}