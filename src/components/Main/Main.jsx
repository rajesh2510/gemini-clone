import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">     {/* Here goes the Navbar*/}
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            {/* Here comes the main body */}
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {/* Loading Animation */}
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }



                <div className="main-bottom">
                    {/* Here goes the Search box */}
                    <div className="search-box">
                        {/* Sending prompt by pressing send icon || enter key  && Empty Submissions are prevented*/}
                        <input onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
                            if (e.key === "Enter" && input.trim() !== "") {
                                onSent();
                            }
                        }}
                            value={input} type="text" placeholder='Ask Gemini' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => {
                                if (input.trim() !== "") {
                                    onSent();
                                }
                            }} src={assets.send_icon} alt="" />
                        :null}
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
