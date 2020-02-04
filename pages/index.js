import React from 'react'
import Typist from 'react-typist'

export default function Index() {
  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let welcome = 'Good morning'
  if (isNoon) welcome = 'Good afternoon'
  else if (isEvening) welcome = 'Good evening'

  return (
    <>
      <div className="hero">
        <Typist startDelay={2000} cursor={{ element: '▍' }}>
          Hey,
          <Typist.Backspace count={4} delay={500} />
          {welcome}
          <br />
          <Typist.Delay ms={500} />
          <Typist.Delay ms={500} />
          <b>
            I build pixel-perfect <span className="nowrap">pages 👌</span>{' '}
            smooth <span className="nowrap">animations 🦄</span> and performant
            web <span className="nowrap">applications 💯</span>{' '}
          </b>
          <br />
          <Typist.Delay ms={500} />
          I’m{' '}
          <a href="https://twitter.com/ademilter" target="_blank">
            tweeting
          </a>{' '}
          , taking{' '}
          <a href="https://www.instagram.com/ademilter/" target="_blank">
            photos
          </a>{' '}
          , recording{' '}
          <a href="https://www.youtube.com/user/ademilter/" target="_blank">
            videos
          </a>{' '}
          and pushing{' '}
          <a href="https://github.com/ademilter" target="_blank">
            codes
          </a>{' '}
          for you.
        </Typist>
      </div>

      <style jsx>{`
        .hero {
          max-width: 1400px;
          padding: 2rem;
          font-size: 9vw;
        }
        @media (min-width: 600px) {
          .hero {
            padding: 3rem;
            font-size: 5vw;
          }
        }
      `}</style>
      <style global jsx>{`
        .Cursor {
          display: inline-block;
          margin-left: 5px;
          opacity: 1;
          animation: blink 1s linear infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}