import React from 'react';
import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 font-[Plus_Jakarta_Sans]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

                {/* Footer Main Content */}
                <div className="grid grid-cols-2 gap-10 sm:grid-cols-6">

                    {/* Brand Information */}
                    <div className="col-span-2 flex flex-col items-start gap-4">

                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="h-8 w-auto object-contain"
                        />

                        <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-1 font-semibold">
                            <a
                                id="footer-social-github"
                                href="https://github.com" target="_blank"
                                className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                            >
                                GitHub
                            </a>

                            <a
                                id="footer-social-twitter"
                                href="https://x.com" target="_blank"
                                className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                            >
                                Twitter
                            </a>

                            <a
                                id="footer-social-linkedin"
                                href="https://linkedin.com" target="_blank"
                                className="text-sm text-slate-500 transition-colors hover:text-pink-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-slate-900 uppercase">
                            Product
                        </h3>

                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    id="footer-home-link"
                                    href="#hero"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    id="footer-technologies-link"
                                    href="#technologies"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    id="footer-projects-link"
                                    href="#technologies"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-slate-900 uppercase">
                            Company
                        </h3>

                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    id="footer-about-link"
                                    href="#hero"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    id="footer-contact-link"
                                    href="#hero"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    id="footer-careers-link"
                                    href="#technologies "
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold tracking-wider text-slate-900 uppercase">
                            Legal
                        </h3>

                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    id="footer-privacy-link"
                                    href="#"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    id="footer-terms-link"
                                    href="#hero"
                                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">

                    <span>© 2026 Dev Stack. All rights reserved.</span>

                    <div className="flex items-center gap-6">
                        <a
                            href="#privacy"
                            className="transition-colors hover:text-slate-900"
                        >
                            Privacy
                        </a>

                        <a
                            href="#terms"
                            className="transition-colors hover:text-slate-900"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;