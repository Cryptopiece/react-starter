import './community.css';
import {Link} from 'react-router-dom'
function Community():JSX.Element {
    return (
        <>
            <section className="community">
                  <h2 className="sectionHeading">Join Our Community</h2>
                  <h3 className="sectionSubHeading">
                    Join our vibrant community of game players and NFT enthusiasts and study all the latest tips and tricks.
                  </h3>
                  <div className="d-flex">
                    <Link to="#">
                      <img src="img/icon-tele-circle.svg" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="img/icon-reddit-circle.svg" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="img/icon-twitter-circle.svg" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="img/icon-discord-circle.svg" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="img/icon-medium-circle.svg" alt="" />
                    </Link>
                  </div>
                </section>
        </>
    )
}

export default Community
