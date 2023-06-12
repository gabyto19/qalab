import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-foot-modals',
  templateUrl: './foot-modals.component.html',
  styleUrls: ['./foot-modals.component.css']
})
export class FootModalsComponent {
  selectedOption: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // Access the 'txt' variable from the dialog data
    this.selectedOption = data;
  }

  guidlines = [
    'Subject to applicable law, do not share project payment information publicly or privately with other community members.',
    'Treat everyone with respect.',
    'Do not post sexually implied or explicit content within the community or send unwanted and inappropriate chat messages.',
    'Do not post or transmit any message that is libelous or defamatory.',
    'Do not use inappropriate language with any post or transmitted message, including the use of special characters between letters or in representation of foul language (e.g., @$#%*).',
    'Do not create more than one account or use another members account at any time.',
    'Do not falsify information in your account, including your name, location, areas of expertise, or testing environments currently within your possession.',
    'Do not inflate your companys products or services or deflate your competitors products or services.',
    'Do not harvest or collect any member identifying information by any means for the purpose of sending unsolicited email or other communications, or post unauthorized surveys.',
    'Do not copy or use any material found on the site unless you have expressed permission and consent from QA lab.',
    'Do not post unauthorized commercial advertising anywhere on the  site, including your profile.',
    'Please note that English is the primary working language on QA lab; both community posts and work should be submitted in English unless otherwise specified.'
  ]
  standarts = [
    'Never publicize customer information outside of that Customers specific test cycle – including customer/product name or any information revealed in a test cycle. This includes testing a competitor’s application and sharing information in any way. A recommended practice is to disable all applications with sharing functionality while you test. Due to the severity of this violation, infractions will be grounds for permanent suspension of your account.',
    'Never use file sharing sites to host any information from your testing sessions - instead, always attach relevant files directly onto the platform (80MB limit; up to five files per report.)',
    'Never discuss or question payouts in front of customers, whether via bug reports, chat, disputes, or Tester Messenger. All comments related to payouts should be directed to the project manager.',
    'Never contact customers or Test Team Leads outside of the Site (unless you are emailing a Test Team Lead, Test Engineer or Testing Services Manager regarding a specific current project). Additionally, never contact project managers unless it is related to a test cycle that is pending, active or locked. If a customer reaches out to you outside of the Site, please contact the project manager first for current cycles or *support for expired projects.',
    'Always be professional and polite when communicating with other testers, project managers, and especially customers (via chat, reports, disputes, and the Tester Messenger). project manager is available to review your comment before you share with a customer.',
    'Always follow test cycle instructions by reading the Cycle Overview thoroughly and any announcements from the TTL/PM in Chat. Additionally, utilize the test cycle’s Chat to clarify any questions (however, do not post a bug to the chat, or email the PM, and request if it is valid or not.)',
    'Complete each assigned task thoroughly and honestly. This includes test cases on both one-time and recurring cycles. Be sure to submit all required documentation for bugs and test cases, and to never recycle work from either your own past submissions or poach others’. Additionally, honestly completing work also includes never creating ‘placeholder’ reports for editing at a later time.',
    'If you accept a cycle or commit to a project (whether on the Site or in-person), every effort should be made to honor your commitment or to provide prompt notice to the testing manager of your inability to complete the project.',
    'Never create more than one account or payment account or share them with anyone.',
    'Never falsify information in your account, including but not limited to your name, location, hardware, software, payment instrument information and any other profile information available to be stored through QA lab.',
    'Never use emulators, simulators, remote machines, beta software, or “jailbroken” devices for testing, unless otherwise instructed by an employee. When testing, all third-party VPNs, SSH tunnels, proxy server connections, IPSec connections and other software or connections that could be used to track and transmit sensitive information—including but not limited to test application performance, features, capabilities and test instructions, results and artifacts—must be completely disabled while participating on any Project or removed entirely from the test environment/device used for testing.',
    'Never ask or solicit the customer or project manager to approve your work, remove you from a cycle, or make you a favorite tester. If you believe your bug was rejected mistakenly, dispute the rejection directly from the test cycle or contact the Project Manager if you have more than five rejected bugs.',
    'If a project requires you to download a pre-production test/data artifact or application to your device, always promptly delete such Application or artifact from your device upon the completion of the project unless otherwise instructed by an employee or the cycle TTL.',
    'If a project requires you to access a password-protected or non-public website, never access such website after the completion of the project unless otherwise instructed by an employee or the cycle TTL, and always promptly delete any test or data artifacts from your device upon completion of the project.',
    'If a project requires the use of a proxy server, third party VPN or other connection or software that could be used to track and transmit device information, including features and behaviors of other installed applications, the connection or software must always be disabled or removed from the device when participating on any other project for QA lab.',
    'When testing for projects that require Applause to ship you a device or type of hardware, you shall immediately return the device/hardware to Applause upon completion of the testing, unless you have received express permission (from Applause) to keep the device/hardware. Failure to comply with the foregoing obligation for any reason will result in the termination of your account. In addition, due to the sensitive nature of such projects, if you have been vetted and accepted into a test cycle that requires shipment of hardware, you are expected to participate in and remain responsive to TTLs within such cycles. (It is not acceptable to become unresponsive to messages from test teams or Community Management while in possession of a shipped device.)'
  ]
  notice = 'Applause App Quality, Inc. (as a service offered by Applause, hereinafter“we,” “us” and “our”), respect your personal information (i.e., information that may directly or indirectly identify you, as further described below) (“PI”). This privacy statement describes QA lab practices regarding the collection, use, and disclosure of your (hereafter referred to as “you”, “your”, “tester”) PI when you visit one of our websites, when you communicate with us via email or other means, when you register on our websites as a tester, and when you engage with us online. This privacy statement does not apply to third parties and their actions which we do not own, direct, or control, including, but not limited to, any third party websites, services and applications that you may elect to access through our websites. Please note: The applicability of certain sections of this statement vary by law and jurisdiction. As a result, not all provisions of this statement will apply to all users or all of certain users’ PI.';
  forVisitors = [
    'collect only the IP address, but not the e-mail address, of visitors to our website,',
    'aggregate information on what pages visitors access or visit, and',
    'collect information freely volunteered by the visitor, such as survey information and/or site registrations.'
  ]
  pi = [
    'Identifiers, such as your name, address, phone number, email address, or other similar identifiers',
    'Professional and educational information, if you apply for a job or project with us through our website',
    'Sensitive categories of PI if relevant to a certain project; we will only collect such sensitive PI upon notice and signed written informed consent on a case by case basis, and solely in the event you as the tester may voluntarily choose to participate in a certain testing cycle requiring such information.',
    'Commercial information, such as a history of our services purchased, obtained or considered',
    'Internet/Network information, such as device information, logs and analytics data;',
    'Geolocation data, such as precise location data from your device or generated based on your IP address; and',
    'Inferences about your interests and preferences, generated from your voluntary site use',
    'We collect this information directly from you, from our business partners and affiliates, from your browser or device when you visit our website, *web, or from third-parties that you permit to share information with us.'
  ]
  usedTo = [
    'Determine your eligibility for testing projects',
    'Contact you about your participation in testing projects',
    'Verification of your identity to participate and receive payment for testing projects',
    'Identify your articles, forum posts, comments and other contributions on *Web',
    'Other uses, as set forth on the website, and through any consents you may complete as a tester for our services.'
  ]
  onward = 'We may be required to transfer and disclose information, including personal information, in response to lawful requests by public and governmental authorities and law enforcement agencies, including to meet national security or law enforcement requirements. We may also disclose your information (i) with our affiliates, (ii) service providers, (iii) if we are required to do so by law; (iv) if we believe that it is necessary to enforce or apply our terms of use and other agreements or otherwise protect and defend the rights, property or safety of Applause or that of our customers; (v) in order to comply with a judicial proceeding, court order or other legal obligation or government inquiry; or (v) to any entity that acquires any part of Applause’s current operations by way of merger, de-merger, acquisition, reorganization or sale of assets, or (vi) Community Project Managers and Test Team Leads for administering testing projects. We may potentially be liable under the Privacy Shield Principles if a third party processes personal information in a way inconsistent with those Principles, unless we prove we are not responsible for the event giving rise to the damage.'
  collection = [
    'Identifiers, such as your name, address, phone number, email address, or other similar identifiers',
    'California customer records, such as payment information',
    'Professional and educational information, if you apply for a job or project with us through our website',
    'Sensitive information about your demographics if relevant to a certain project',
    'Commercial information, such as a history of our services purchased, obtained or considered',
    'Internet/Network information, such as device information, logs and analytics data;',
    'Geolocation data, such as precise location data from your device or generated based on your IP address; and',
    'Inferences about your interests and preferences, generated from your voluntary site use'
  ]
  disclosure = [
    'our service providers and advisors',
    'vendors who assist us with marketing and advertising our services',
    'analytics providers such as Google',
    'third parties, including customers, with your consent or at your direction, or with whom you interact through for our testing services'
  ]






} 
