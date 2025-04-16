import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 text-sm mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-3">Info</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Download Apps</a>
            </li>
            <li>
              <a href="#">The Slack App</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3">Features</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Invoicing</a>
            </li>
            <li>
              <a href="#">Task Management</a>
            </li>
            <li>
              <a href="#">Contracts</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Recurring payments</a>
            </li>
            <li>
              <a href="#">Expense Tracking</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Proposals</a>
            </li>
            <li>
              <a href="#">Time Tracking</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3">Tools</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Free Invoice Templates</a>
            </li>
            <li>
              <a href="#">Free Invoice Generator</a>
            </li>
            <li>
              <a href="#">Free Invoicing Guide</a>
            </li>
            <li>
              <a href="#">Self Employment Tax Calculator</a>
            </li>
            <li>
              <a href="#">Quarterly Tax Calculator</a>
            </li>
            <li>
              <a href="#">Business Name Generator</a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3">Helpful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Williams & Harricks</a>
            </li>
            <li>
              <a href="#">Anywhere Workers</a>
            </li>
            <li>
              <a href="#">Freshbooks Alternative</a>
            </li>
            <li>
              <a href="#">Quickbooks Alternative</a>
            </li>
            <li>
              <a href="#">Harvest Alternative</a>
            </li>
            <li>
              <a href="#">Wave Apps Alternative</a>
            </li>
            <li>
              <a href="#">Design DB</a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-semibold mb-3">Policies</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-200 mt-8 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p className="mb-4 md:mb-0">&copy; WorkAura International Ltd. 2025</p>
        <div className="flex space-x-4 text-lg">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaPinterestP />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
