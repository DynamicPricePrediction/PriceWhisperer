import React from 'react';

function AppFooter() {
    return (
        <footer className="bg-gray-700 text-center text-s text-white p-3 absolute  w-full">
            <br/>
            <div className="container mx-auto">
                <p className="mb-3">
                    © 2024 PriceWhisperer. All rights reserved.
                </p>
                <div className="flex justify-center mb-3">
                    <a href="/terms" className="mx-2">Terms & Conditions</a>
                    <a href="/privacy" className="mx-2">Privacy Policy</a>
                    <a href="/contact" className="mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;