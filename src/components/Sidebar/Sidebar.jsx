import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'  //Added assets.js file from assets folder
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        // Line below can be used to extend the sidebar on hover
        // The problem is that transition effect is not working as wanted (It'll be fixed soon...)
        // <div className='sidebar extended' onMouseEnter={()=>setExtended(true)} onMouseLeave={()=>setExtended(false)}></div>

        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            {/* <img onClick={() => setExtended(prev => !prev)} className='mobile-menu' src={assets.menu_icon} alt="" /> */}
            {/* I think for mobile version sidebar menu button should be on Main.jsx */}
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" className='black_test' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}

                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
