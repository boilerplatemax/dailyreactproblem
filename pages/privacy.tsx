import React from "react";
import Link from 'next/link';

const privacy=() =>{

  return (
    <div className="2xl:px-48 py-3 px-4 min-h-screen">
      <div className="grid grid-cols-1 gap-x-12  animate-[fadeIn_1s_ease-in-out]">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

<p className="text-lg mb-4">This privacy policy ("Policy") describes how [Company Name] and its affiliates ("we", "us", or "our") collect, use, and share information about you when you use our website, mobile application, or other online products or services (collectively, the "Services").</p>

<p className="text-lg mb-4">Please read this Policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not use the Services. By accessing or using the Services, you agree to this Policy. This Policy may change from time to time. Your continued use of the Services after we make changes is deemed to be acceptance of those changes, so please check the Policy periodically for updates.</p>

<h2 className="text-xl font-bold mb-4">Collection and Use of Information</h2>

<p className="text-lg mb-4">We collect several types of information from and about users of the Services, including information:</p>

<ul className="list-disc mb-4">
  <li className="text-lg">By which you may be personally identified, such as name, postal address, e-mail address, or phone number ("personal information").</li>
  <li className="text-lg">About your internet connection, the equipment you use to access the Services, and usage details.</li>
</ul>

<p className="text-lg mb-4">We collect this information:</p>

<ul className="list-disc mb-4">
  <li className="text-lg">Directly from you when you provide it to us.</li>
  <li className="text-lg">Automatically as you navigate through the Services. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.</li>
</ul>

<p className="text-lg mb-4">We may use the information we collect from and about you for a variety of purposes, including to:</p>

<ul className="list-disc mb-4">
  <li className="text-lg">Provide, maintain, and improve the Services.</li>
  <li className="text-lg">Communicate with you, including by sending you promotional information about products and services that we think may be of interest to you.</li>
  <li className="text-lg">Personalize your experience on the Services by presenting products and offers tailored to you.</li>
  <li className="text-lg">Allow you to participate in interactive features of the Services.</li>
  <li className="text-lg">Keep the Services safe and secure.</li>
  <li className="text-lg">Analyze and understand how the Services are used.</li>
  <li className="text-lg">Comply with legal and regulatory requirements.</li>
</ul>

<h2 className="text-xl font-bold mb-4">Disclosure of Information</h2>

<p className="text-lg mb-4">We may disclose information about you to the following parties:</p>

<ul className="list-disc mb-4">
  <li className="text-lg">Our affiliates.</li>
  <li className="text-lg">Service providers and partners who perform services on our behalf.</li>
  <li className="text-lg">Professional advisers, such as lawyers and accountants.</li>
  <li className="text-lg">Government and law enforcement agencies, to the extent required by law.</li>
</ul>

<p className="text-lg mb-4">We may also disclose information about you in connection with the sale, merger, or reorganization of our business.</p>

<h2 className="text-xl font-bold mb-4">Data Security</h2>

<p className="text-lg mb-4">We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers.</p>

<p className="text-lg mb-4">However, the transmission of information over the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to the Services. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Services.</p>

<h2 className="text-xl font-bold mb-4">Cookies and Other Tracking Technologies</h2>

<p className="text-lg mb-4">We use cookies and similar tracking technologies to track the activity on the Services and hold certain information.</p>

      <p className="text-lg mb-4">Cookies are small data files that are placed on your computer or mobile device when you visit a website or app. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

      <p className="text-lg mb-4">We use cookies for the following purposes:</p>

      <ul className="list-disc mb-4">
        <li className="text-lg">To enable certain functions of the Services.</li>
        <li className="text-lg">To provide analytics.</li>
        <li className="text-lg">To store your preferences.</li>
        <li className="text-lg">To personalize your experience on the Services.</li>
        <li className="text-lg">To enable advertisements delivery, including behavioral advertising.</li>
      </ul>

      <p className="text-lg mb-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some features of the Services.</p>

      <p className="text-lg mb-4">We may also use web beacons, pixels, and other tracking technologies on the Services to help customize the Services and improve your experience. Web beacons are electronic images that may be used on the Services or in emails we send to you. We may use web beacons to deliver cookies, count visits, understand usage and campaign effectiveness, and determine whether an email has been opened and acted upon.</p>

      <p className="text-lg mb-4">We may also use third-party analytics services, such as Google Analytics, to collect information about your usage of the Services. These third-party analytics services may use cookies and other tracking technologies to help us analyze how users use the Services. The information collected by these third-party analytics services is subject to the privacy policies of these service providers.</p>

      <h2 className="text-xl font-bold mb-4">Links to Other Websites</h2>

      <p className="text-lg mb-4">The Services may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit.</p>
      <p className="text-lg mb-4">We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

      <h2 className="text-xl font-bold mb-4">Changes to This Policy</h2>
      <p className="text-lg mb-4">
      We may update our Policy from time to time. We will post any changes on this page and encourage you to review the Policy periodically. We encourage you to review the Policy whenever you access the Services or provide personal information.
    </p>
    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg mb-4">
      If you have any questions about this Policy, please contact us.
    </p>

      </div>
    </div>
  );
}

export default privacy;