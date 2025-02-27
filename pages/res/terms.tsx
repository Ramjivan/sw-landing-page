import React from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'
import Footer from '../Footer'

const Termsandservice = () => {
    return (
        <div>
            {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Navbar />
            {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}

            {/* Terms of Service >.>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className='container mx-auto p-10'>
                <h4 className='text-left text-[44px] md:text-[55px] text-gray-800  roboto font-bold'>Terms of Service</h4>
                <div className='mt-11'>
                    <p className='text-justify text-xl mt-4'>Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the https://streamway.in website (the “Service”) operated by Streamway, Inc (“us”, “we”, or “our”).</p>
                    <p className='text-justify text-xl mt-4'>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.</p>
                    <p className='text-justify text-xl mt-4'>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.</p>
                </div>

                {/* Communications */}
                <h5 className='text-3xl mt-14 mb-6 roboto text-gray-700  font-semibold'>Communications</h5>
                <p className='text-justify text-xl'>By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>

                {/* Subscriptions */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Subscriptions</h5>
                <p className='text-justify text-xl'>Some parts of the Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (“Billing Cycle”). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.</p>
                <p className='text-justify text-xl mt-4'>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Streamway, Inc cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Streamway, Inc support team.</p>
                <p className='text-justify text-xl mt-4'>A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide Stream X, Inc with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Streamway, Inc to charge all Subscription fees incurred through your account to any such payment instruments.</p>

                {/* Free Trial  */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Free Trial</h5>
                <p className='text-justify text-xl '>Streamway, Inc may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (“Free Trial”).</p>
                <p className='text-justify text-xl mt-4'>You may be required to enter your billing information in order to sign up for the Free Trial.</p>
                <p className='text-justify text-xl mt-4'>If you do enter your billing information when signing up for the Free Trial, you will not be charged by Streamway, Inc until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.</p>
                <p className='text-justify text-xl mt-4'>At any time and without notice, Streamway, Inc reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.</p>

                {/* Fee Changes */}
                <h5 className='t    ext-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Fee Changes</h5>
                <p className='text-justify text-xl '>Streamway, Inc, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p>
                <p className='text-justify text-xl mt-4'>Streamway, Inc will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.</p>
                <p className='text-justify text-xl mt-4'>Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.</p>

                {/* Refunds */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Refunds</h5>
                <p className='text-justify text-xl '>Certain refund requests for Subscriptions may be considered by Streamway, Inc on a case-by-case basis and granted in sole discretion of Streamway, Inc.</p>

                {/* Content */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Content</h5>
                <p className='text-justify text-xl '>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
                <p className='text-justify text-xl mt-4'>By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
                <p className='text-justify text-xl mt-4'>You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service.</p>
                <p className='text-justify text-xl mt-4'>Streamway, Inc has the right but not the obligation to monitor and edit all Content provided by users.</p>
                <p className='text-justify text-xl mt-4'>In addition, Content found on or through this Service are the property of Streamway, Inc or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>

                {/* Accounts */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Accounts</h5>
                <p className='text-justify text-xl '>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</p>
                <p className='text-justify text-xl mt-4'>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

                {/* Copyright Policy */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Copyright Policy</h5>
                <p className='text-justify text-xl '>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.</p>
                <p className='text-justify text-xl mt-4'>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to support@streamway.in, with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”</p>
                <p className='text-justify text-xl mt-4'>You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.</p>

                {/* DMCA Notice and Procedure for Copyright Infringement Claims */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>DMCA Notice and Procedure for Copyright Infringement Claims</h5>
                <p className='text-justify text-xl '>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
                <ul className='list-disc ml-14' >
                    <li>
                        <p className='text-justify text-xl mt-4'>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >identification of the URL or other specific location on the Service where the material that you claim is infringing is located;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >your address, telephone number, and email address;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.</p>
                    </li>
                </ul>
                <p className='text-justify text-xl mt-4'>You can contact our Copyright Agent via email at contact@streamway.in</p>

                {/* Intellectual Property */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Intellectual Property</h5>
                <p className='text-justify text-xl '>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Streamway, Inc and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Streamway, Inc.</p>


                {/* Links To Other Web Sites */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Links To Other Web Sites</h5>
                <p className='text-justify text-xl '>Our Service may contain links to third party web sites or services that are not owned or controlled by Streamway, Inc.</p>
                <p className='text-justify text-xl mt-4'>Streamway, Inc has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
                <p className='text-justify text-xl mt-4'>You acknowledge and agree that Streamway, Inc shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.</p>
                <p className='text-justify text-xl mt-4'>We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.</p>

                {/* Third Party Services */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Third Party Services</h5>
                <p className='text-justify text-xl '>Streamway provides tools that enable you to link your account on Streamway with an account on a third party service, such as Facebook or YouTube. These tools enable you to import and export information, including social media posts, live video, and other content that which may be comprised of text, images, videos and other types of works. By using one of these tools, you agree that Streamway may transfer information to and from the applicable third party service. Third party services are not under the control of Streamway, and Streamway is not responsible for any third party service’s use of your exported information. We strongly advise you to read the terms and conditions and privacy policies of any third party services that you choose to link to Streamway. By linking your account on Streamway with an account on YouTube, you are agreeing to be bound by YouTube’s Terms of Service.</p>

                {/* Termination */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Termination</h5>
                <p className='text-justify text-xl '>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                <p className='text-justify text-xl mt-4'>If you wish to terminate your account, you may simply discontinue using the Service.</p>
                <p className='text-justify text-xl mt-4'>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

                {/* Indemnification  */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Indemnification</h5>
                <p className='text-justify text-xl '>You agree to defend, indemnify and hold harmless Streamway, Inc and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees), resulting from or arising out of</p>
                <ul className='list-disc ml-14' >
                    <li>
                        <p className='text-justify text-xl mt-4'>your use and access of the Service, by you or any person using your account and password;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >a breach of these Terms, or</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >Content posted on the Service.</p>
                    </li>
                </ul>

                {/* Limitation Of Liability */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Limitation Of Liability</h5>
                <p className='text-justify text-xl '>In no event shall Streamway, Inc, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

                {/* Disclaimer */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Disclaimer</h5>
                <p className='text-justify text-xl '>Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                <p className='text-justify text-xl mt-4' >Streamway, Inc its subsidiaries, affiliates, and its licensors do not warrant that</p>
                <ul className='list-disc ml-14' >
                    <li>
                        <p className='text-justify text-xl mt-4'>the Service will function uninterrupted, secure or available at any particular time or location;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >any errors or defects will be corrected;</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >the Service is free of viruses or other harmful components; or</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >the results of using the Service will meet your requirements.</p>
                    </li>
                </ul>

                {/* Exclusions */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Exclusions</h5>
                <p className='text-justify text-xl '>Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.</p>

                {/* Governing Law */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Governing Law</h5>
                <p className='text-justify text-xl '>These Terms shall be governed and construed in accordance with the laws of United States, without regard to its conflict of law provisions.</p>
                <p className='text-justify text-xl mt-4' >Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p>

                {/* Changes */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Changes</h5>
                <p className='text-justify text-xl '>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p className='text-justify text-xl mt-4' >By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>

                {/* Contact Us */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Contact Us</h5>
                <p className='text-justify text-xl '>If you have any questions about these Terms, please  <Link href={"ContactUs"} className="text-blue-600 underline" >contact us.</Link> </p>
            </div>

            <hr />

            {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Footer />
            {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        </div>
    )
}

export default Termsandservice