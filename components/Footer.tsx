import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants";

const Footer = () => (
  
    <section id="footer">
      <div className="bg-white px-8 lg:px-28 py-16 text-center grid grid-cols-1 lg:grid-cols-4 lg:text-left gap-20">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl">CAR RENTAL</h1>
            <p className="text-custom-grey">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="tel:123456789"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    {/* <BsFillTelephoneFill /> */}
                  </span>
                  <span className="font-semibold">(+90)-534-513-04-37</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:digistacks@gmail.com"
                  className="flex items-center justify-center lg:justify-start gap-2 hover:text-custom-orange transition-all duration-300 ease-linear"
                >
                  <span>
                    {/* <GrMail /> */}
                  </span>
                  <span className="font-semibold">digistacks@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-2xl">COMPANY</h1>
          <ul className="space-y-2">
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                ISTANBUL
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-custom-orange transition-all duration-300 ease-linear"
              >
                How we work
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="font-bold text-2xl">WORKING HOURS</h1>
          </div>
          <div className="space-y-2">
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-2xl">SUBSCRIPTION</h1>
            <p className="text-custom-grey">
              Subscribe your Email address for latest news & updates.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              className="bg-lighter-grey rounded p-4 placeholder:text-custom-grey"
              placeholder="Enter Email Address"
            />
            <button className="bg-primary-blue  p-4 font-bold text-white rounded shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  
  // <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
  //   <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
  //     <div className='flex flex-col justify-start items-start gap-6'>
  //       <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
  //       <p className='text-base text-gray-700'>
  //         Carhub 2023 <br />
  //         All Rights Reserved &copy;
  //       </p>
  //     </div>

  //     <div className="footer__links">
  //       {footerLinks.map((item) => (
  //         <div key={item.title} className="footer__link">
  //           <h3 className="font-bold">{item.title}</h3>
  //           <div className="flex flex-col gap-5">
  //             {item.links.map((link) => (
  //               <Link
  //                 key={link.title}
  //                 href={link.url}
  //                 className="text-gray-500"
  //               >
  //                 {link.title}
  //               </Link>
  //             ))}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>

  //   <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
  //     <p>@2023 CarHub. All rights reserved</p>

  //     <div className="footer__copyrights-link">
  //       <Link href="/" className="text-gray-500">
  //         Privacy & Policy
  //       </Link>
  //       <Link href="/" className="text-gray-500">
  //         Terms & Condition
  //       </Link>
  //     </div>
  //   </div>
  // </footer>
);

export default Footer;