import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1e42] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/4">
            <h3 className="text-5xl font-bold mb-3">
              team<span className="text-blue-800">.</span>
            </h3>
            <p className="text-gray-400">
              Collaboration platform for modern teams
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:w-3/4 justify-between">
            <div className="md:w-1/4">
              <h4 className="text-blue-400 mb-3">Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/4">
              <h4 className="text-blue-400 mb-3">Features</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Screen Sharing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    iOS & Android Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    File Sharing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    User Management
                  </a>  
                </li>
              </ul>
            </div>

            <div className="md:w-1/4">
              <h4 className="text-blue-400 mb-3">Contact Us</h4>
              <ul>
                <li>
                  <a href="mailto:info@teamapp.com" className="hover:underline">
                    info@teamapp.com
                  </a>
                </li>
                <li>
                  <a href="tel:1-800-200-300" className="hover:underline">
                    1-800-200-300
                  </a>
                </li>
                <li>
                  1010 Sunset Blvd.
                  <br />
                  Palo Alto, California
                </li>
              </ul>
            </div>

            <div className="md:w-1/4">
              <h4 className="text-blue-400 mb-3">Stay up to date</h4>
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-md bg-gray-700 text-white border-none mb-3 md:mb-0 md:mr-3 flex-1"
                />
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12">
        © Copyright Team Inc.
      </div>
    </footer>
  );
};

export default Footer;
