import {Fragment} from "react";
import style from './Hero.module.sass'
const Hero = () => {
    return (
        <Fragment>
            <div className="hero bg--dark">
                <div className="wrapper pt-12 pb-9">
                    <div className="row">
                        <div className="md-col-12">
                            <h1 className=" xs-text--lg-1 md-text--xl-4 text--primary-outline my-5">COPILOT</h1>
                            <h3 className="text--white text--lg mb-6">A qualified pilot who assists or relieves the pilot but is not in command.</h3>
                            <div className="badge badge--blue">
                                <span className="badge__name">version</span>
                                <span className="badge__data">v1.0.0</span>
                            </div>
                            &nbsp;
                            <div className="badge badge--green">
                                <span className="badge__name">build</span>
                                <span className="badge__data">success</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.divider} >
                <svg className={style.svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity="1" />
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    />



                </svg>
            </div>
        </Fragment>
    )
}

export default Hero