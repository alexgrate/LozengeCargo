import React from 'react'

const TermsConditions = () => {
    return (
        <section className='bg-blue-50 py-12 px-4 sm:px-6 lg:px-8'>

                <h1 className='text-3xl font-bold text-black text-center mt-5 mb-2'>Terms & Conditions</h1>
                <p className='text-gray-500 text-center mb-8'>Last Updated: September 2025</p>

            <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8'>
                <div className='mb-8'>
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        By accessing and using our logistics and shipping services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                </div>


                <div className='mb-8'>
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        We provide logistics and shipping services including but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        <li>Package pickup and delivery services</li>
                        <li>Domestic and international shipping</li>
                        <li>Package tracking and monitoring</li>
                        <li>Insurance and claims processing</li>
                        <li>Customer support and assistance</li>
                    </ul>
                </div>

                <div className='mb-8'>
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
                    <h3 className="text-lg font-medium text-black mb-2">Account Information</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                    </p>
                    <h3 className="text-lg font-medium text-black mb-2">Package Preparation</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-4">
                        <li>Properly package items to prevent damage during transit</li>
                        <li>Accurately declare package contents and value</li>
                        <li>Comply with shipping restrictions and regulations</li>
                        <li>Provide accurate sender and recipient information</li>
                    </ul>
                    <h3 className="text-lg font-medium text-black mb-2">Prohibited Items</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        You agree not to ship any prohibited or restricted items including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        <li>Hazardous materials and dangerous goods</li>
                        <li>Illegal substances or contraband</li>
                        <li>Perishable items without proper packaging</li>
                        <li>Items exceeding size and weight limitations</li>
                        <li>Currency, jewelry, or high-value items without proper insurance</li>
                    </ul>
                </div>

                <div className='mb-8'>
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">4. Pricing and Payment</h2>
                    <h3 className="text-lg font-medium text-black mb-2">Service Fees</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Shipping costs are calculated based on package dimensions, weight, destination, delivery speed, and additional services selected.
                    </p>
                    <h3 className='text-lg font-medium text-black mb-2'>Payment Terms</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-2">
                        <li>Payment is due at the time of service booking</li>
                        <li>We accept major credit cards and approved payment methods</li>
                        <li>All prices are subject to applicable taxes and fees</li>
                        <li>Prices may change without prior notice</li>
                    </ul>
                    <h3 className="text-lg font-medium text-black mb-2">Refunds and Cancellations</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Cancellations must be made before package pickup. Refunds are processed according to our refund policy and may be subject to cancellation fees.
                    </p>
                </div>

                <div className='mb-8'>
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">5. Delivery Terms</h2>
                    <h3 className='text-lg font-medium text-black mb-2'>Delivery Timeframes</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Estimated delivery times are approximate and not guaranteed. Actual delivery times may vary due to weather, customs, or other factors beyond our control.
                    </p>
                    <h3 className='text-lg font-medium text-black mb-2'>Delivery Attempts</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-2">
                        <li>We will attempt delivery according to the selected service level</li>
                        <li>If delivery cannot be completed, packages may be held for pickup</li>
                        <li>Additional fees may apply for redelivery attempts</li>
                        <li>Packages not claimed within specified timeframes may be returned</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">6. Liability and Insurance</h2>
                    <h3 className='text-lg font-medium text-black mb-2'>Limitation of Liability</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Our liability for loss or damage is limited to the declared value of the package or the maximum coverage amount specified in your service agreement.
                    </p>
                    <h3 className='text-lg font-medium text-black mb-2'>Insurance Coverage</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-2">
                        <li>Basic coverage is included with all shipments</li>
                        <li>Additional insurance coverage is available for purchase</li>
                        <li>Claims must be filed within specified timeframes</li>
                        <li>Proof of value and damage may be required for claims processing</li>
                    </ul>
                    <h3 className='text-lg font-medium text-black mb-2'>Exclusions</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        We are not liable for delays, loss, or damage caused by acts of God, customs detention, government actions, or other circumstances beyond our control.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">7.  Claims and Disputes</h2>
                    <h3 className='text-lg font-medium text-black mb-2'>Filing Claims</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Claims for loss, damage, or delay must be filed within 30 days of the scheduled delivery date or discovery of the issue.
                    </p>
                    <h3 className='text-lg font-medium text-black mb-2'>Dispute Resolution</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-2">
                        <li>We will investigate all claims promptly and fairly</li>
                        <li>Disputes will be resolved through negotiation in good faith</li>
                        <li>Unresolved disputes may be subject to arbitration</li>
                        <li>Legal proceedings must be initiated within one year of the incident</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">8. Privacy and Data Protection</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">9. ntellectual Property</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        All content, trademarks, and intellectual property on our platform are owned by us or our licensors. You may not use, reproduce, or distribute our intellectual property without express written permission.
                    </p>
                </div>

                <div className="mb-8">  
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">10. Service Modifications</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We may also update these terms periodically to reflect changes in our practices or applicable laws.
                    </p>
                </div>

                <div className="mb-8">  
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">11. Force Majeure</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        We shall not be liable for any failure or delay in performance under this agreement which is due to earthquake, flood, fire, storm, natural disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or other event beyond our reasonable control.
                    </p>
                </div>

                <div className="mb-8">  
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any legal action or proceeding arising under this agreement shall be brought exclusively in the federal or state courts located in [Your Jurisdiction].
                    </p>
                </div>

                <div className="mb-8">  
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">13. Severability</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        If any provision of this agreement is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this agreement shall otherwise remain in full force and effect.
                    </p>
                </div>

                <div className="mb-8">  
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">14. Entire Agreement</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        This agreement constitutes the entire agreement between you and us regarding the use of our services and supersedes all prior and contemporaneous written or oral agreements.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">15. Contact Information</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                        If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-md p-4 text-gray-600 space-y-1 break-all text-sm">
                        <p><b>Email:</b> privacy@lozenge.com</p>
                        <p><b>Phone:</b> +1 (800) 123-4567</p>
                        <p><b>Address:</b> 123 Lozenge Ave, Suite 100, City, State 12345</p>
                        <p><b>Business Hours:</b> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">12. Jurisdiction and Governing Law</h2>
                    <p className="text-gray-600 text-sm">
                        This Privacy Policy is governed by the laws of [Your Jurisdiction]. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TermsConditions