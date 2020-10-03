import React from 'react';

import { emailMailto } from "./../utils"

const PrivacyPolicy = () => {
    return (
        <div>
            <h1>Privacy policy</h1>
            <p>
                This page informs you ("User", "you" or "your") of the policy the Website Operator ("Website Operator", "us", "we" or "our") has set regarding the collection, use and disclosure of Personal Information received from users of this website mortgage-simulator.com (the "Site").
                We use your Personal Information only for providing and improving the Site.
                By using the Site, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2>Information collection and use</h2>
            <p>
                While using our Site, we will not ask you to provide us with personally identifiable information that can be used to contact or identify you.
                Personally identifiable information may include, but is not limited to your name ("Personal Information").
                Only by initiating contact with us via email, will your email address be made known to us and in which case will only be used for the purpose of replying to your email.
                Your personally identifiable information may be made known to us if you voluntarily use one of the social media links on this Site. Please see the <a href="#social-media" >Links and social media plugins</a> section for more information.
            </p>

            <h2>Log data</h2>
            <p>
                Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
                This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
                In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this. Please see the <a href="#cookies"> Third-party cookies</a> section for more information.
            </p>


            <h2 id="cookies">
                Third-party cookies
            </h2>
            <p>
                This Site uses cookies from Google to enable it and its partners to serve ads to you based on your visit to this Site and/or other sites on the Internet.
                Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads">Ads Settings</a>.
                Alternatively, users may opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="www.aboutads.info">www.aboutads.info</a>.<br></br>
                We use cookies from the following third parties:
                </p>
            <ul>
                <li>
                    Google Analytics
                    </li>
                        We use <a href="https://marketingplatform.google.com/about/analytics/">Google Analytics</a> to collect statistical information regarding how this website is used. This information is not personally identifiable.
                    <li>
                    Google AdSense
                    </li>
                        We use <a href="https://www.google.com/adsense/start/">Google AdSense</a> to display ads on some of our pages. Google AdSense may use user data. You can review Google's privacy policy regarding advertising and manage what information is collected <a href="https://policies.google.com/technologies/ads">here</a>.
                </ul>

            <h2>Security</h2>
            <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

            <h2 id="social-media">Links and social media plugins</h2>
            <p>
                This Site may also offer you the ability to interact with social plugins from social media sites, such as Twitter (twitter.com), Facebook (facebook.com) and Reddit (reddit.com).
                These social media sites may receive data when you visit a website, such as where you have come from (mortgage-simulator.com).
                In some cases, we may know that you clicked on a social media plugin such as a Twitter tweet button, or receive other information from the social media sites.
                Similarly, if you have previously provided personally identifiable information to a third-party operating a plug-in on this website, then this third-party may recognize you on this website.
                Your use of social network plugins is subject to each social media site’s privacy policy, which may be different from ours, so please read these policies carefully to understand their policies and your options.
                As with linked sites, we have no control over the information that is collected, stored, or used by social network plugins.
             </p>

            <h2>Changes to this privacy policy</h2>
            <p>
                This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
            </p>

            <h2>Contact</h2>
            <p>
                If you have any questions about this Policy, please get in contact by <a href={emailMailto}>sending an email.</a>
            </p>
        </div>
    )
}

export default PrivacyPolicy