import React from 'react';
import { Truck, RotateCcw, Tag, HelpCircle, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="">
      {/* Features Banner */}
      <div className="border-y ">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary" />
              <div>
                <span className="font-semibold">Free shipping</span>
                <span className="text-primary ml-1">Over $200</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-primary" />
              <div>
                <span className="font-semibold">Money back</span>
                <span className="text-primary ml-1">Return within 7 days</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Tag className="w-6 h-6 text-primary" />
              <div>
                <span className="font-semibold">Buy 4 get 5th</span>
                <span className="text-primary ml-1">50% off</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              <div>
                <span className="font-semibold">Any questions?</span>
                <span className="text-primary ml-1">experts are ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ultras Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ultras</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary">About us</a></li>
              <li><a href="#" className="text-primary">Conditions</a></li>
              <li><a href="#" className="text-primary">Our Journals</a></li>
              <li><a href="#" className="text-primary">Careers</a></li>
              <li><a href="#" className="text-primary">Affiliate Programme</a></li>
              <li><a href="#" className="text-primary">Ultras Press</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary">FAQ</a></li>
              <li><a href="#" className="text-primary">Contact</a></li>
              <li><a href="#" className="text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-primary">Returns & Refunds</a></li>
              <li><a href="#" className="text-primary">Cookie Guidelines</a></li>
              <li><a href="#" className="text-primary">Delivery Information</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary">
              <p>Do you have any questions or suggestions?</p>
              <p><a href="mailto:mohame.mhantich6@gmail.com" className="text-primary hover:underline">mohame.mhantich6@gmail.com</a></p>
              <p>Do you need assistance? Give us a call.</p>
              <p className="text-primary">+212653446430</p>
            </div>
          </div>

          {/* Forever 2018 Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Forever 2018</h3>
            <p className="text-primary mb-6">Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
            <div className="flex gap-4">
              <a href="#" className="text-primary"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-primary"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-primary"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t ">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary text-sm">
              Created by <a href="https://mhantich.vercel.app/">Mhantich</a>
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-primary text-sm flex items-center">
                Payment options:
                <img src="/api/placeholder/120/40" alt="Payment Methods" className="ml-2 h-6" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}