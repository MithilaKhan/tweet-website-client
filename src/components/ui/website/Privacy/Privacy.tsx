import CommonBanner from '@/components/shared/CommonBanner';
import React from 'react'; 
import { PolicySection } from './PolicySection';

const privacyData = {
    introduction: {
      text: "Welcome to Tweet. We value your privacy and are committed to protecting your personal data. Before using our platform, please review the following Privacy Policy to understand how we collect, use, and safeguard your information. By using our platform, you agree to the practices outlined in this Privacy Policy.",
    },
    sections: [
      {
        title: "What Data Do We Process?",
        content: [
          "a. Personal Information: When you use the Tweet platform to place food orders or interact with our services, we may collect personal information such as your name, email address, phone number, payment details, and delivery address.",
          "b. Usage Data: We may collect data on how you interact with our services, including device information, browsing patterns, and pages visited.",
        ],
      },
      {
        title: "Account Registration and Use",
        content: [
          "To place an order, users must create an account, providing accurate personal information (e.g., name, address, phone number). b. Users are responsible for maintaining the confidentiality of their account and password and for all activities that occur under their account. c. Tweet reserves the right to suspend or terminate accounts that are found to contain false information or misuse the service.",
        ],
      },
      {
        title: "Browser Cookies",
        content: [
          "We use cookies to enhance your user experience. Cookies are small files placed on your device to improve functionality and offer personalized services.",
        ],
      },
      {
        title: "How Do We Use Your Data?",
        content: [
          "a. To Process Orders: We use your personal data to process food orders, manage payments, and arrange deliveries.",
          "b. To Communicate: We may use your information to communicate with you about order updates, customer support, promotions, and notifications.",
          "c. For Service Improvement: We analyze usage data to improve the platform's functionality, enhance customer experience, and offer new features.",
        ],
      },
      {
        title: "What Are Your Rights?",
        content: [
          "a. Access to Your Information: You have the right to request access to your personal data that we hold.",
          "b. Correction and Deletion: You may request corrections to inaccurate data or ask us to delete your data when it is no longer needed.",
          "c. Opt-Out: You can opt out of receiving marketing communications from us at any time by unsubscribing through the provided link in emails or by contacting us directly.",
        ],
      },
      {
        title: "Data Security",
        content: [
          "a. Protection Measures: We implement industry-standard security protocols to protect your data from unauthorized access or disclosure.",
          "b. Third-Party Services: Your data may be shared with trusted third-party service providers (e.g., payment processors, delivery services) to complete orders and improve service delivery. These providers are required to handle your data in compliance with our privacy standards.",
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          "We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
        ],
      },
    ],
  }; 

const Privacy = () => {
    return (
        <div>
            <CommonBanner title='Privacy Policy' /> 

            <div className=" container  py-[100px]">
      <div className="">
        <div >
          <div className="space-y-6">
            <p className="text-[#666666] text-sm leading-relaxed">
              {privacyData.introduction.text}
            </p>
            
            {privacyData.sections.map((section, index) => (
              <PolicySection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Privacy;