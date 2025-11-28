import {Container,Row} from 'react-bootstrap'

import Nav from '../components/Nav.jsx'
import { useEffect } from 'react'


export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Privacy Policy - Sunga";
      }, []);
        return(
            <>
            <Nav/>
            <Container className="my-5">

            <h1 className="mb-4">Sunga Privacy Policy</h1>
            <p>Effective Date: December 15, 2025</p>

 

       <h1>
      Introduction
       </h1>

        <p>
This Privacy Policy explains how Sunga  us collects, uses, discloses, and protects the personal information of our users you who utilize our software platform to manage money lending records and borrower tracking.

By using the Sunga platform, you agree to the collection and use of information in accordance with this policy.
</p>
     <h1>
        Information We Collect
     </h1>
        <p>
We collect information primarily for the purpose of providing, maintaining, and improving the Sunga service. This information falls into two main categories:
  </p>
         <h3>
A. Information Provided by the User (Lender Data)
  </h3>
            <p>
This data is entered directly into the Sunga platform by you and is necessary for managing your lending operations. It includes, but is not limited to:

Borrower Identification Data: Full legal name, physical address, contact information (phone number, email address), and national identification numbers (if applicable).

Financial and Transaction Data: Loan amounts, interest rates, repayment schedules, transaction history, outstanding balances, and collateral details (if recorded).

User Account Data: Your name, email address, password (stored securely via hashing).
      </p>
<h3>
    B. Information We Collect Automatically

    </h3>
          <p>  
Usage Data: Information about how you access and use the platform, such as IP addresses, login times, pages viewed, and the features you use most often.

Device Information: Information about the device you use to access Sunga, including the hardware model, operating system, and unique device identifiers.
</p>
   <h1>
   How We Use Your Information

   </h1>
   <p>
   We use the collected information for the following purposes:

To Provide and Maintain the Service: To operate your account, process transactions, and enable the core features of tracking loans and borrower records.

To Improve the Service: To analyze usage patterns and feedback to enhance functionality, security, and user experience.

Security and Fraud Prevention: To protect Sunga and its Users from unauthorized access, fraud, or misuse of the platform.

Communication: To send you technical notices, updates, security alerts, and support and administrative messages.

Compliance: To comply with our legal obligations and resolve any disputes.
</p>

<h1>
 How We Share Your Information

    </h1>
We do not sell the personal data you entrust to us. We may share information only in the following limited circumstances:

With Your Consent: We may share information if you direct us to do so.

Service Providers: We engage trusted third-party companies and individuals to facilitate our service (e.g., cloud hosting, payment processing, analytics). These parties are obligated to maintain the confidentiality and security of the data and are prohibited from using your personal information for any purpose other than providing services on our behalf.

Legal Requirements: If required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency).

Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.

<h1> Data Security
    </h1>
    <p>
The security of your data, especially the sensitive financial information you store, is paramount.

We use commercially acceptable means to protect your Personal Data, including encryption (in transit and at rest), access controls, and regular security audits.

However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use best practices to protect your information, we cannot guarantee its absolute security.
</p>
 <h1>

    </h1>
<p>
    We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy and as required to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
</p>
<h1>
    Your Data Protection Right
    </h1>

<ul>
    Depending on your jurisdiction, you may have the right to:

<li>Access the personal data we hold about you.

    </li>
<li>
    Request correction of inaccurate or incomplete data.

</li>
<li>
    Request deletion of your personal data.

    </li>
    <li>
        Object to the processing of your personal data.

    </li>

<p>
    As a User of Sunga, you are the Data Controller of the borrower information you input. You are responsible for ensuring that you have the legal right to collect, store, and process your borrowers' information using our platform.

</p>
    </ul>
<h1>
    Changes to This Privacy Policy
    </h1>
<p>
    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.

</p>
<h1>
     Contact Us
</h1>
If you have any questions about this Privacy Policy, please contact us at:

Email: <a href='mailto:sungaplartform@gmail.com'>sunga@gmail.com</a>

            </Container>
            
            </>
        )
    
    
    
    
 
        }