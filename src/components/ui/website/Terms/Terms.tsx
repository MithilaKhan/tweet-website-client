import CommonBanner from '@/components/shared/CommonBanner';
import React from 'react';

const Terms = () => {
    return (
        <div>
            <CommonBanner title='Terms & Conditions' /> 

            <div className=" container  py-[100px]">
   
        <div >
          <div className="space-y-6">
            <p className="text-[#666666] text-sm leading-relaxed">
              Welcome to Tweet. By accessing and using our online platform, you agree to comply with and be bound by the following Terms and Conditions. These terms outline the relationship between you and Tweet, a platform that facilitates food ordering and delivery from third-party restaurants and vendors.
            </p>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Scope of Service</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                Tweet provides an online platform that connects users with independent restaurants and delivery providers, allowing customers to order food and beverages for delivery or pickup. b. Tweet does not prepare or deliver the food; it acts as an intermediary between users and partner restaurants or delivery services. c. Partner restaurants and delivery providers are responsible for maintaining accurate menu information, preparing and delivering orders within estimated timeframes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Account Registration and Use</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                To place an order, users must create an account, providing accurate personal information (e.g., name, address, phone number). b. Users are responsible for maintaining confidentiality of their account and password and for all activities that occur under their account. c. Tweet reserves the right to suspend or terminate accounts that are found to contain false information or misuse the service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Ordering and Payments</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                Prices listed on Tweet are determined by partner restaurants and may vary depending on location, promotions, and other factors. b. Users are responsible for ensuring that all order details are correct before confirming the order. c. Payments are processed through secure third-party providers. Users must ensure that payment details are accurate, and Tweet cannot be held responsible for payment errors arising from user input.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Delivery and Pick-Up</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                Estimated delivery times are provided by partner restaurants and are subject to change due to traffic, weather, or other unforeseen circumstances. b. Users are responsible for ensuring that someone is present to receive the order at the designated delivery location. c. In case of late or undelivered orders, users can contact Tweet support, and Tweet will coordinate with the restaurant or delivery provider to resolve the issue.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Cancellation and Refunds</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                Orders may be canceled within a limited time frame before preparation begins. Once an order is confirmed by the restaurant, it cannot be cancelled. b. Refunds will be issued only in cases of incorrect, incomplete, or undelivered orders due to restaurant or delivery provider error, as determined by Tweet. c. Any disputes related to refunds must be submitted to Tweet support within 24 hours of receiving the order.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Liability Disclaimer</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                Tweet is not responsible for food quality, safety, or allergen information; these are the responsibility of the partner restaurants. b. Tweet disclaims any liability arising from delays, cancellations, or incorrect orders by partner restaurants or delivery providers. c. Users acknowledge that they use Tweet at their own risk, and Tweet shall not be liable for any damages resulting from the use of the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[#333333] font-semibold text-lg">Changes to Terms</h2>
              <p className="text-[#666666] text-sm leading-relaxed">
                Tweet reserves the right to update these Terms and Conditions periodically. Continued use of the platform constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </div>
     
    </div> 
        </div>
    );
};

export default Terms;