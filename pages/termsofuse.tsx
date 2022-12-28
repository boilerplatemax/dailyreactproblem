import React from "react";
import Link from 'next/link';

const termsofuse=() =>{

  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <div className="grid grid-cols-1 gap-x-12  animate-[fadeIn_1s_ease-in-out]">
        <div className="text-white text-base">
    <p className="font-bold text-2xl mb-2">Terms of Use</p>

    <p>By using our service, you agree to the following terms:</p>

    <ul className="list-disc pl-8">
        <li>You must not use our service for any illegal or unauthorized purposes.</li>
        <li>You must not modify, adapt, or hack our service or attempt to access our service's servers or infrastructure without proper authorization.</li>
        <li>You must not use our service in any way that could damage, disable, overburden, or impair it.</li>
        <li>You must not copy, reproduce, distribute, or sell any content or information provided by our service without our express written permission.</li>
        <li>You must comply with all applicable laws and regulations when using our service.</li>
        <li>We reserve the right to modify or terminate our service at any time, without notice, for any reason, and without liability to you.</li>
        <li>We reserve the right to change these terms of use at any time. Your continued use of our service after any changes to these terms of use will be considered acceptance of those changes.</li>
    </ul>

    <p>By using our service, you agree to be bound by these terms of use. If you do not agree to these terms of use, please do not use our service.</p>
    </div>
      </div>
    </div>
  );
}

export default termsofuse;