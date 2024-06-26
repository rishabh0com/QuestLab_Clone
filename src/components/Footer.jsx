import React from 'react'
import logo from "../assets/questLogo.png"

const Footer = () => {
    return (
        <div className="px-6 md:px-12 text-white">
            <div className="bg-[radial-gradient(circle,_rgba(53,54,254,1)_0%,_rgba(189,216,252,0)_100%,_rgba(53,55,254,0)_100%)] h-[1px] w-full">
            </div>
            <div className="flex flex-col md:flex-row max-w-[1250px] m-auto justify-between gap-12 md:gap-16 pt-24 pb-12 md:pb-16 border-b border-home-4" >
                <div className="flex flex-col gap-6">
                    <img src={logo} className="w-8" alt="" />
                    <div>
                        <p className="text-sm text-white">Quest Labs INC</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-2/3 gap-12 md:gap-16">
                    <div className="text-sm flex flex-col items-start gap-6">
                        <p className="text-white">Resources</p>
                        <div className="flex flex-col items-start gap-4 text-home-1">
                            <a className="hover:text-home-1a hover:underline" href="/blog" target="_blank">Blog</a>
                            <a className="hover:text-home-1a hover:underline" href="https://questlabs.substack.com/" target="_blank">Newsletter</a>
                            <a className="hover:text-home-1a hover:underline" href="/playbook" target="_blank">Playbook</a>
                            <a className="hover:text-home-1a hover:underline" href="https://docs.questlabs.ai/getting-started/welcome-to-quest" target="_blank">Docs</a>
                        </div>
                    </div>
                    <div className="text-sm flex flex-col items-start gap-6">
                        <p className="text-white">Support</p>
                        <div className="flex flex-col items-start gap-4 text-home-1">
                            <a className="hover:text-home-1a hover:underline" href="mailto:deb@questapp.xyz" target="_blank">Contact</a>
                            <a className="hover:text-home-1a hover:underline" href="https://tinyurl.com/questfoundersclub" target="_blank">Join Quest Club</a>
                            <a className="hover:text-home-1a hover:underline" href="https://www.questlabs.ai/sales-partner" target="_blank">Sales Partner</a>
                        </div>
                    </div>
                    <div className="text-sm flex flex-col items-start gap-6">
                        <p className="text-white">Legal</p>
                        <div className="flex flex-col items-start gap-4 text-home-1">
                            <a className="hover:text-home-1a hover:underline" href="https://fantasy-straw-747.notion.site/Privacy-Policy-35181181657242afbdd2a9af69e37dfe" target="_blank">Privacy Policy</a>
                            <a className="hover:text-home-1a hover:underline" href="https://fantasy-straw-747.notion.site/Terms-and-Conditions-8c70d24a63a6419781475ca8325f2c60" target="_blank">Terms of Use</a>
                            <a className="hover:text-home-1a hover:underline" href="https://fantasy-straw-747.notion.site/Cookie-Policy-403ac2547a7543a8812f64387d69798f" target="_blank">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 flex flex-col md:flex-row gap-8 justify-between items-center max-w-[1250px] m-auto">
                <p className="text-home-1a text-sm">© 2024 Quest Labs INC. All rights reserved.</p>
            </div>
        </div>
  )
}

export default Footer