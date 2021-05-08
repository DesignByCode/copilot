import './sass/style.sass'
import Hero from "./components/Hero/Hero";
import Code from "./components/Code/Code";

const App = () => {
    return (
        <>
            <Hero/>
            <div className="wrapper">
                <div className="row">
                    <div className="md-col-8">
                        <h1>Installation</h1>
                        <p>Install copilot with npm or yarn</p>
                        <Code language="bash">
                            npm i copilot
                        </Code>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App