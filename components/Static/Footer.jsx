import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="https://play-lh.googleusercontent.com/glgNKjN8hykdWM8rNAGaAeUWA8SWwqH_ziJWvfqzw9_fyjivEGgQlvcm4cZ0Efu-4w=w600-h300-pc0xffffff-pd" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Eski TA - TPT</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://www.elabayrak.com/blog/imajlar/haberresim/iscinin-Kendi-Partisi-Bayraklari-42232.jpg`}
                                            width="28"
                                            height="22"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Türkçe
                                    </Menu.Button>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Linkler</p>
                            <div>
                                <a href="https://discord.gg/9TndYERNqE" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Eski TA - TPT
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Sosyal Medya</p>
                            <div>
                                <Link href="https://discord.gg/9TndYERNqE">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Discord 
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Eski TA - TPT
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Site Aktif
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Powered by @Reflex"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
