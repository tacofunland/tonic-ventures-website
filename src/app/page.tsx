'use client'

export default function Home() {
  return (
    <div className="cs-page-wrapper">
      <div className="cs-row">
        <div className="cs-col is--left">
          <div className="cs-logo-wrap">
            <a href="/" className="cs-logo">
              <img src="/images/tonic-logo.svg" alt="Tonic Ventures" className="w-32" />
            </a>
          </div>
          <div className="cs-title">
            <h1 className="d--100">06.23</h1>
          </div>
        </div>

        <div className="cs-col is--right">
          <div className="cs-nested-top">
            <div className="cs-nested-header">
              <p className="d--30">Building the leading platform for sustainable office transformations in Europe</p>
            </div>
            <div className="cs-nested-row">
              <div className="cs-nested-col has--padding">
                <div className="cs-description">
                  <p className="p--30">
                    Tonic Ventures is a parent company of two sister companies: Fenyx and Tonic Spaces, 
                    working together to revolutionize sustainable office furniture solutions.
                  </p>
                </div>
              </div>
              <div className="cs-nested-col">
                <div className="cs-contact-list">
                  <div className="cs-contact-list-item">
                    <div className="cs-contact-list-item-title">
                      <div className="d--30">Instagram</div>
                    </div>
                    <a href="https://instagram.com/tonicventures" target="_blank" className="link">@tonicventures</a>
                  </div>
                  <div className="cs-contact-list-item">
                    <div className="cs-contact-list-item-title">
                      <div className="d--30">Contact</div>
                    </div>
                    <a href="mailto:hello@tonic-ventures.com" className="link">hello@tonic-ventures.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
