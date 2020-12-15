import React from 'react'
import config from '../config'

export default function LoggedOutView() {
  return (
    <div>
      <header role="banner">
        <h1>A Christmas story in Covid times <span role="img" aria-label="santa">🎅</span></h1>
      </header>
      <main role="main">
        <p>
          This is a social space for attendees of{' '}
          <a href='#'>Christmas story in Covid times</a>, a place where we can feel as close to our dear, very missed studio as possible. Feel free to click on the login link below so you can explore the Xmas transformed studio and interact with our lovely colleagues.
        </p>
        <a
          href={`${config.SERVER_HOSTNAME
            }/.auth/login/google?post_login_redirect_url=${encodeURIComponent(
              window.location.href
            )}`}
        >
          Log In With Google
        </a><br />
        {(window as any).safari
          ? <p>
            <strong style={{ color: 'red' }}> You appear to be using Safari.</strong> <br />
            If you are having difficulty logging in, you may need to allow third-party cookies
            <ul>
              <li>On macOS, Safari -&gt; Preferences -&gt; uncheck &lt;Prevent cross-site tracking&gt;</li>
              <li>On iOS, Settings -&gt; Safari -&gt; uncheck &lt;Prevent cross-site tracking&gt;</li>
            </ul>
            We know this is sketchy! We promise we&apos;re not capturing or sharing data to any third party, it&apos; just a limitation of the way we&apos;re handling logins.<br />
            If you&apos;re not comfortable with this, feel free to switch to Chrome, Firefox, or another non-Safari browser on your Mac.
          </p> : null
        }
        <p>
          <b>Note: </b>We do not access any data
          other than what is needed to authenticate you. If it would make you
          more comfortable, feel free to sign up for and use a throwaway
          account on Google. Just make sure that others can identify you ¯\_(ツ)_/¯
        </p>
        <p>
          By entering the space, you agree to our{' '}
          <a href={'https://projects.netcentric.biz/wiki/display/NETCENTRIC/Core+Values'}>Code of Conduct</a>.
        </p>
      </main>
    </div>
  )
}
