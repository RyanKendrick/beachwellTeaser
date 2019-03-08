import React, {Component} from 'react';
import mockup1 from './app1.png';
import mockup2 from './app2.png';
import logo from './beachwell-logo-blue.png';
import Fade from 'react-reveal/Fade';
import './App.css';

let lastScrollY = 0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mockup1Fade : true,
      mockup2Fade : false,
      mockup3Fade : false,
    }
  }

  nav = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    lastScrollY = window.scrollY;

    if(lastScrollY <= 400 && !this.state.mockup1Fade) {
      this.setState({
        mockup1Fade: true,
        mockup2Fade: false,
        mockup3Fade: false,
      })
    }

    if(lastScrollY <= 980 && lastScrollY >= 400 && !this.state.mockup2Fade ) {
      this.setState({
        mockup1Fade: false,
        mockup2Fade: true,
        mockup3Fade: false,
      })
    }

    if(lastScrollY >= 980 && !this.state.mockup1Fade) {
      this.setState({
        mockup1Fade: false,
        mockup2Fade: false,
        mockup3Fade: true,
      })
    }
  };

  fadeBlock = () => {
    this.setState({
      mockup1Fade: false,
      mockup2Fade: true,
      mockup3Fade: false,
    })
  }

  fadeBlock2 = () => {
    this.setState({
      mockup1Fade: false,
      mockup2Fade: false,
      mockup3Fade: true,
    })
  }

  render() {
    return (
      <div className="App">
        <div className='entire-page'>
          <Fade  duration={1500} appear={true}>

          <div className='splash-left'>
            {/* <img src={beachImage} alt='' className='splash-image'/> */}
            <div className='mg-left'>
              <div className='header-copy'>
                <img src={logo} alt='' className='beachwell-logo'></img>
              </div>
              <div className='header-copy'>
                Toronto's only AI <br></br>
                generated water <br></br>
                readings to start your <br></br>
                beach day off right.
              </div>
              <div className='sub-subheader-copy'>
                Join the Beachwell app waitlist.
              </div>
              <form className='form'>
                  <input className='form-input' type='text' value='Enter your email'></input>
                  <button className='submit' type='submit'>SUBMIT</button>
              </form>

            </div>
          </div>
        </Fade>
          <div className="splash-right">
            <Fade when={this.state.mockup1Fade}>
                <img src={mockup1} alt='' className='iphone-mockup'></img>
            </Fade>
            <Fade when={this.state.mockup2Fade}>
                <img src={mockup2} alt='' className='iphone-mockup'></img>
            </Fade>
            <Fade when={this.state.mockup3Fade}>
                <img src={mockup1} alt='' className='iphone-mockup'></img>
            </Fade>
          </div>
        <div className='block-2'>
          <Fade duration={1500} delay={0} onReveal={ () => this.fadeBlock('1')}>
            <div className='header-text-block-2'>
              <div className='mg-left'>
                <div className='header-copy long-text-block'>
                  Easily explore what Toronto's waterfront has to offer.
                </div>
                <div className='subheader-description'>
                  Description of feature here. If you're <br></br>
                  thinking that filler text seems pretty boring <br></br>
                  and uncontroversial, you'd be wrong.
                </div>
              </div>
            </div>
        </Fade>
        </div>
        <div className='block-2 red'>
          <Fade duration={1500} delay={0} onReveal={ () => this.fadeBlock2()}>

            <div className='splash-left'>
              {/* <img src={beachImage} alt='' className='splash-image'/> */}
              <div className='mg-left'>
                <div className='header-copy'>
                Toronto's beaches are <br></br>
                only open 92 days of <br></br>
                the year. Let's make <br></br>
                the most of them.
                </div>
                <div className='sub-subheader-copy'>
                  Join the Beachwell app waitlist.
                </div>
                <form className='form'>
                    <input className='form-input' type='text' value='Enter your email'></input>
                    <button className='submit' type='submit'>SUBMIT</button>
                </form>

                <img src={logo} alt='' className='beachwell-logo'></img>

              </div>
            </div>
        </Fade>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
